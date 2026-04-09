/**
 * Generates public/preview.png (1200×630) for Open Graph / LinkedIn previews.
 * Run: node scripts/generate-og-preview.mjs
 */
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const W = 1200;
const H = 630;

const svgOverlay = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c0e16"/>
      <stop offset="100%" style="stop-color:#06070b"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <text x="520" y="240" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif" font-size="64" font-weight="700" fill="#f4f4f5">Ali Haider</text>
  <text x="520" y="320" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif" font-size="32" fill="#a1a1aa">React Native Developer</text>
  <text x="520" y="390" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif" font-size="22" fill="#71717a">Mobile apps · UI · Production-ready builds</text>
  <text x="520" y="470" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif" font-size="18" fill="#52525b">hadikhan007.github.io</text>
</svg>
`;

async function main() {
  const profilePath = path.join(root, "public/images/alihaider.webp");
  const outPath = path.join(root, "public/preview.png");

  const base = await sharp(Buffer.from(svgOverlay)).png().toBuffer();

  const photoSize = 420;
  const photo = await sharp(profilePath)
    .resize(photoSize, photoSize, { fit: "cover", position: "center" })
    .png()
    .toBuffer();

  const rounded = await sharp(photo)
    .composite([
      {
        input: Buffer.from(
          `<svg width="${photoSize}" height="${photoSize}"><rect width="${photoSize}" height="${photoSize}" rx="24" ry="24" fill="white"/></svg>`
        ),
        blend: "dest-in",
      },
    ])
    .png()
    .toBuffer();

  const padX = 80;
  const padY = Math.round((H - photoSize) / 2);

  await sharp(base)
    .composite([{ input: rounded, left: padX, top: padY }])
    .png({ compressionLevel: 9 })
    .toFile(outPath);

  console.log("Wrote", outPath);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
