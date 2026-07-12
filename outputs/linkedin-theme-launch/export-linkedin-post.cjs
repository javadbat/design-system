const path = require("path");
const { chromium } = require("playwright");

(async () => {
  const root = __dirname;
  const svgPath = path.join(root, "theme-gallery-linkedin-post.svg");
  const outPath = path.join(root, "theme-gallery-linkedin-post.png");
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 627 }, deviceScaleFactor: 1 });
  await page.goto(`file://${svgPath.replace(/\\/g, "/")}`);
  await page.screenshot({ path: outPath, type: "png", clip: { x: 0, y: 0, width: 1200, height: 627 } });
  await browser.close();
  console.log(outPath);
})();
