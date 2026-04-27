const fs = require("fs");
const puppeteer = require("puppeteer");
const { JSDOM } = require("jsdom");

const routes = ["/", "/services", "/about", "/contact"];

const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;

function deduplicateHead(html, route) {
  const dom = new JSDOM(html);
  const document = dom.window.document;

  // Title: keep first
  const titles = document.querySelectorAll("title");
  titles.forEach((t, i) => { if (i > 0) t.remove(); });

  // Canonical: keep the one matching the current route
  const canonicals = document.querySelectorAll('link[rel="canonical"]');
  if (canonicals.length > 1) {
    canonicals.forEach((c) => {
      const href = c.getAttribute("href") || "";
      if (!href.endsWith(route === "/" ? ".co.uk/" : route)) c.remove();
    });
  }

  // Description: keep last (page-specific one comes after Layout's)
  const descriptions = document.querySelectorAll('meta[name="description"]');
  descriptions.forEach((d, i) => { if (i < descriptions.length - 1) d.remove(); });

  return dom.serialize();
}

(async () => {
  console.log("🚀 Starting local server...");

  const express = require("express");
  const path = require("path");

  const app = express();
  const distDir = path.resolve(__dirname, "dist");

  app.use(express.static(distDir));
  app.use((req, res) => {
    res.sendFile(path.join(distDir, "index.html"));
  });

  const server = app.listen(PORT, () => {
    console.log(`🌐 Server running at ${BASE_URL}`);
  });

  await new Promise((r) => setTimeout(r, 1000));

  const browser = await puppeteer.launch();

  for (const route of routes) {
    console.log(`🔄 Rendering ${route}`);

    const page = await browser.newPage();

    await page.goto(`${BASE_URL}${route}`, {
      waitUntil: "networkidle0",
    });

    await page.waitForFunction(
      () => document.title !== "" && document.title !== "Vite App"
    );

    const html = await page.content();
    const cleanedHtml = deduplicateHead(html, route); // ✅ route passed in

    const filePath =
      route === "/"
        ? path.join(distDir, "index.html")
        : path.join(distDir, route, "index.html");

    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, cleanedHtml);

    await page.close();
    console.log(`✅ Saved: ${filePath}`);
  }

  await browser.close();
  server.close();

  console.log("🎉 Prerender complete!");
})();