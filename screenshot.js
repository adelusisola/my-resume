// screenshot.js — uses Puppeteer to capture preview-hero.html as hero.png
// Usage: node screenshot.js

const path = require("path");
const fs = require("fs");
(async () => {
  try {
    const puppeteer = require("puppeteer");
    const htmlPath = path.resolve(__dirname, "preview-hero.html");
    if (!fs.existsSync(htmlPath)) {
      console.error("preview-hero.html not found in project root.");
      process.exit(1);
    }

    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 800, deviceScaleFactor: 2 });
    await page.goto("file://" + htmlPath, { waitUntil: "networkidle0" });
    const out = path.resolve(__dirname, "hero.png");
    await page.screenshot({ path: out, fullPage: false });
    console.log("Saved screenshot to", out);
    await browser.close();
  } catch (err) {
    console.error("Screenshot failed. Did you install puppeteer?");
    console.error(err.message || err);
    process.exit(1);
  }
})();
