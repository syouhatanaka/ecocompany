import puppeteer from 'puppeteer-core';

const CHROMIUM_PATH = '/sessions/zealous-ecstatic-ramanujan/chromium/chromium/linux-1610204/chrome-linux/chrome';
const BASE_URL = process.argv[2] || 'http://localhost:3000';
const OUTPUT = process.argv[3] || '/sessions/zealous-ecstatic-ramanujan/screenshot.png';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROMIUM_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900 });
  await page.goto(BASE_URL, { waitUntil: 'networkidle0', timeout: 30000 });

  // Scroll to bottom to trigger all IntersectionObserver animations
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 300;
      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= document.body.scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });

  // Wait for animations to complete
  await new Promise(r => setTimeout(r, 2000));

  // Scroll back to top
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 500));

  await page.screenshot({ path: OUTPUT, fullPage: true });
  console.log(`Screenshot saved to ${OUTPUT}`);

  await browser.close();
})();
