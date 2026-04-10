import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, "..", "public", "og-image.png");

const WIDTH = 1200;
const HEIGHT = 630;

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="#FAFAF8"/>
  <text
    x="${WIDTH / 2}"
    y="268"
    text-anchor="middle"
    font-family="ui-monospace, Menlo, Monaco, Consolas, 'Courier New', monospace"
    font-size="52"
    font-weight="700"
    fill="#0a0a0a"
  >Your encryption is perfect.</text>
  <text
    x="${WIDTH / 2}"
    y="358"
    text-anchor="middle"
    font-family="ui-monospace, Menlo, Monaco, Consolas, 'Courier New', monospace"
    font-size="52"
    font-weight="700"
    fill="#C45000"
  >Your attacker doesn&apos;t care.</text>
</svg>`;

const png = await sharp(Buffer.from(svg)).resize(WIDTH, HEIGHT).png().toBuffer();
writeFileSync(outPath, png);
console.log("Wrote", outPath);
