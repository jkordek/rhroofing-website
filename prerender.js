const fs = require("fs");
const puppeteer = require("puppeteer");

const routes = ["/", "/services", "/about", "/contact"];

const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;

(async () => {
  console.log("🚀 Starting local server...");

  const express = require("express");
  const path = require("path");

  const app = express();
  const distDir = path.resolve(__dirname, "dist");

  // 1. Serve static assets
  app.use(express.static(distDir));

  // 2. FORCE SPA fallback for ALL routes
  app.use((req, res) => {
    res.sendFile(path.join(distDir, "index.html"));
  });

  const server = app.listen(PORT, () => {
    console.log(`🌐 Server running at ${BASE_URL}`);
  });

  // Wait a bit for server
  await new Promise((r) => setTimeout(r, 1000));

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (const route of routes) {
    console.log(`🔄 Rendering ${route}`);

    await page.goto(BASE_URL, {
      waitUntil: "networkidle0",
    });

    await page.evaluate((route) => {
      window.history.pushState({}, "", route);
      window.dispatchEvent(new PopStateEvent("popstate"));
    }, route);

    await new Promise((r) => setTimeout(r, 800));

    const html = await page.content();

    const filePath =
      route === "/"
        ? path.join(distDir, "index.html")
        : path.join(distDir, route, "index.html");

    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, html);

    console.log(`✅ Saved: ${filePath}`);
  }

  await browser.close();
  server.close();

  console.log("🎉 Prerender complete!");
})();