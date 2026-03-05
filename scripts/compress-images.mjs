#!/usr/bin/env node
/**
 * Compress images in public/images to reduce lag and load time.
 * Run: node scripts/compress-images.mjs
 * - Resizes to max width 1200px (keeps aspect ratio)
 * - JPEG: quality 82, progressive
 * - PNG: compression level 9
 */

import sharp from "sharp";
import { readdir, rename } from "node:fs/promises";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_IMAGES = join(__dirname, "..", "public", "images");
const MAX_WIDTH = 1200;

async function getImagePaths(dir, acc = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      await getImagePaths(full, acc);
    } else if (e.isFile() && /\.(jpg|jpeg|png)$/i.test(e.name)) {
      acc.push(full);
    }
  }
  return acc;
}

async function compress(filePath) {
  const ext = extname(filePath).toLowerCase();
  const pipeline = sharp(filePath);
  const meta = await pipeline.metadata();
  const width = meta.width || 0;
  const needResize = width > MAX_WIDTH;

  let out = pipeline;
  if (needResize) {
    out = out.resize(MAX_WIDTH, null, { withoutEnlargement: true });
  }

  if (ext === ".jpg" || ext === ".jpeg") {
    out = out.jpeg({ quality: 82, progressive: true, mozjpeg: true });
  } else if (ext === ".png") {
    out = out.png({ compressionLevel: 9, palette: false });
  }

  const tmpPath = filePath + ".tmp";
  await out.toFile(tmpPath);
  await rename(tmpPath, filePath);
  return { path: filePath, resized: needResize };
}

async function main() {
  const images = await getImagePaths(PUBLIC_IMAGES);
  if (images.length === 0) {
    console.log("No images found in public/images");
    return;
  }
  console.log(`Compressing ${images.length} images (max width ${MAX_WIDTH}px)...`);
  for (const p of images) {
    try {
      const rel = p.replace(PUBLIC_IMAGES + "/", "").replace(PUBLIC_IMAGES + "\\", "");
      await compress(p);
      console.log("  OK", rel);
    } catch (err) {
      console.error("  FAIL", p, err.message);
    }
  }
  console.log("Done.");
}

main();
