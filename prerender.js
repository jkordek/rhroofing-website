const fs = require("fs");
const puppeteer = require("puppeteer");
const { JSDOM } = require("jsdom");

const routes = [
  "/",
  "/services",
  "/services/flat-roofing",
  "/services/leadwork",
  "/services/roof-repairs",
  "/services/new-roof-installation",
  "/services/guttering-services",
  "/services/soffits-and-fascias",
  "/about",
  "/contact",
  "/privacy-policy",
  "/cookie-policy",
];
const routeTitles = {
  "/": "Roofing Services in Burton on Trent | Natural Flow Roofing",
  "/services": "Roofing Services in Staffordshire | Natural Flow Roofing",
  "/services/flat-roofing": "Flat Roofing in Staffordshire | Natural Flow Roofing",
  "/services/leadwork": "Roof Leadwork in Staffordshire | Natural Flow Roofing",
  "/services/roof-repairs": "Roof Repairs in Staffordshire | Natural Flow Roofing",
  "/services/new-roof-installation": "New Roof Installation Staffordshire | Natural Flow Roofing",
  "/services/guttering-services": "Guttering Services in Staffordshire | Natural Flow Roofing",
  "/services/soffits-and-fascias": "Soffits and Fascias in Staffordshire | Natural Flow Roofing",
  "/about": "Roofing Experts in Burton on Trent | Natural Flow Roofing",
  "/contact": "Contact Us - Burton on Trent Roofers | Natural Flow Roofing",
  "/privacy-policy": "Privacy Policy | Natural Flow Roofing",
  "/cookie-policy": "Cookie Policy | Natural Flow Roofing",
};

const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;

function deduplicateHead(html, route) {
  const dom = new JSDOM(html);
  const document = dom.window.document;

  // data-ssr marks tags baked into the static HTML so the client can remove
  // them before React mounts — react-helmet-async's React 19 codepath renders
  // its own title/meta/link/script tags without checking for or replacing
  // tags already present in the document, so without this both sets end up
  // in the DOM after hydration.
  const keepLast = (selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element, index) => {
      if (index < elements.length - 1) element.remove();
      else element.setAttribute("data-ssr", "true");
    });
  };

  // Title: make sure the prerendered file has the route-specific value.
  const titles = document.querySelectorAll("title");
  if (titles.length === 0) {
    const title = document.createElement("title");
    title.textContent = routeTitles[route];
    title.setAttribute("data-ssr", "true");
    document.head.prepend(title);
  } else {
    titles[0].textContent = routeTitles[route];
    titles[0].setAttribute("data-ssr", "true");
    titles.forEach((t, i) => { if (i > 0) t.remove(); });
  }

  // Canonical: keep the last matching route-specific value rendered by Helmet.
  const canonicals = document.querySelectorAll('link[rel="canonical"]');
  canonicals.forEach((canonical, index) => {
    if (index < canonicals.length - 1) canonical.remove();
    else canonical.setAttribute("data-ssr", "true");
  });

  keepLast('meta[name="description"]');
  keepLast('meta[name="robots"]');
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
    const cleanedHtml = deduplicateHead(html, route);

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
