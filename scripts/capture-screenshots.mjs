import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const TARGETS = [
  {
    name: '11fightcamp',
    url: 'http://11fightcamp.vercel.app/',
  },
  {
    name: 'ransa',
    url: 'https://www.ransa.id/',
  },
  {
    name: 'bhumiselarasmitra',
    url: 'https://www.bhumiselarasmitra.my.id/',
  },
  {
    name: 'lintasarmada',
    url: 'https://lintasarmadalimasamudera.com/',
  },
  {
    name: 'westfit',
    url: 'https://westfitindonesia.com/',
  }
];

const outputDir = path.resolve(process.cwd(), 'public', 'portfolio');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function run() {
  console.log('Launching Edge from:', EDGE_PATH);
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--window-size=1280,780'
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 780, deviceScaleFactor: 1 });

  for (const target of TARGETS) {
    const filePath = path.join(outputDir, `${target.name}.jpg`);
    console.log(`Navigating to ${target.url}...`);
    try {
      await page.goto(target.url, { waitUntil: 'networkidle2', timeout: 30000 });
      // Wait a moment for animations or hero images to settle
      await new Promise(r => setTimeout(r, 2500));

      // Remove common preloader elements if any
      await page.evaluate(() => {
        const preloader = document.getElementById('preloader') || document.querySelector('.preloader');
        if (preloader) {
          preloader.style.display = 'none';
        }
      });

      await page.screenshot({
        path: filePath,
        type: 'jpeg',
        quality: 85,
        clip: { x: 0, y: 0, width: 1280, height: 720 }
      });
      console.log(`Saved screenshot: ${filePath}`);
    } catch (err) {
      console.error(`Error capturing ${target.name}:`, err.message);
      // Try with domcontentloaded fallback
      try {
        await page.goto(target.url, { waitUntil: 'domcontentloaded', timeout: 15000 });
        await new Promise(r => setTimeout(r, 2000));
        await page.screenshot({
          path: filePath,
          type: 'jpeg',
          quality: 85,
          clip: { x: 0, y: 0, width: 1280, height: 720 }
        });
        console.log(`Saved screenshot (fallback): ${filePath}`);
      } catch (err2) {
        console.error(`Fallback failed for ${target.name}:`, err2.message);
      }
    }
  }

  await browser.close();
  console.log('All screenshots captured successfully!');
}

run();
