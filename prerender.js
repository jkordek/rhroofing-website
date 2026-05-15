const fs = require("fs");
const puppeteer = require("puppeteer");
const { JSDOM } = require("jsdom");

const routes = ["/", "/services", "/about", "/contact", "/privacy-policy", "/cookie-policy"];
const routeTitles = {
  "/": "Roofers in Burton on Trent | Natural Flow Roofing Systems",
  "/services": "Roofing Services in Staffordshire | Natural Flow Roofing Systems",
  "/about": "Experienced Roofers in Burton on Trent | Natural Flow Roofing Systems",
  "/contact": "Contact Roofing Company in Burton on Trent | Natural Flow Roofing Systems",
  "/privacy-policy": "Privacy Policy | Natural Flow Roofing Systems",
  "/cookie-policy": "Cookie Policy | Natural Flow Roofing Systems",
};

const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;

function deduplicateHead(html, route) {
  const dom = new JSDOM(html);
  const document = dom.window.document;

  const keepLast = (selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element, index) => {
      if (index < elements.length - 1) element.remove();
    });
  };

  // Title: make sure the prerendered file has the route-specific value.
  const titles = document.querySelectorAll("title");
  if (titles.length === 0) {
    const title = document.createElement("title");
    title.textContent = routeTitles[route];
    document.head.prepend(title);
  } else {
    titles[0].textContent = routeTitles[route];
    titles.forEach((t, i) => { if (i > 0) t.remove(); });
  }

  // Canonical: keep the last matching route-specific value rendered by Helmet.
  const canonicals = document.querySelectorAll('link[rel="canonical"]');
  canonicals.forEach((canonical, index) => {
    if (index < canonicals.length - 1) canonical.remove();
  });

  keepLast('meta[name="description"]');
  keepLast('meta[property="og:type"]');
  keepLast('meta[property="og:site_name"]');
  keepLast('meta[property="og:title"]');
  keepLast('meta[property="og:description"]');
  keepLast('meta[property="og:url"]');
  keepLast('meta[property="og:image"]');
  keepLast('meta[property="og:image:alt"]');
  keepLast('meta[property="og:locale"]');
  keepLast('meta[name="twitter:card"]');
  keepLast('meta[name="twitter:title"]');
  keepLast('meta[name="twitter:description"]');
  keepLast('meta[name="twitter:image"]');
  keepLast('script[type="application/ld+json"]');

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
