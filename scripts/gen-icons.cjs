/**
 * One-off icon generator — builds the favicon/app-icon set by rasterizing the
 * brand mark SVG (the same path used by components/icons/LogoMark.tsx) at high
 * resolution. Rendering from vector avoids re-compounding the quality loss of
 * the original raster PNG. The mark is never recolored.
 *
 * Run: node scripts/gen-icons.cjs
 */
const path = require("path");
const fs = require("fs");

const ROOT = path.resolve(__dirname, "..");
const sharp = require(path.join(
  ROOT,
  "node_modules/.pnpm/sharp@0.35.3_@types+node@20.19.43/node_modules/sharp",
));

// Mikado Yellow mark on a transparent ground — viewBox + path match LogoMark.tsx.
const markSvg = (size) =>
  Buffer.from(
    `<svg width="${size}" height="${size}" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">` +
      `<path d="M24 30 L122 30 L122 218 L214 218 L214 126 L310 126 L310 221 L218 221 L218 317 L121 317 L30 228 Z" fill="#FFB700"/>` +
      `</svg>`,
  );

/** Rasterize the mark SVG to a square transparent PNG at the given pixel size. */
const squarePng = (size) =>
  sharp(markSvg(size), { density: 384 })
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

/** Pack PNG buffers into a multi-resolution .ico (PNG-compressed entries). */
function buildIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = icon
  header.writeUInt16LE(images.length, 4);

  const entries = [];
  let offset = 6 + images.length * 16;
  for (const { size, data } of images) {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0); // width (0 => 256)
    e.writeUInt8(size >= 256 ? 0 : size, 1); // height
    e.writeUInt8(0, 2); // palette count
    e.writeUInt8(0, 3); // reserved
    e.writeUInt16LE(1, 4); // color planes
    e.writeUInt16LE(32, 6); // bits per pixel
    e.writeUInt32LE(data.length, 8); // size of image data
    e.writeUInt32LE(offset, 12); // offset of image data
    offset += data.length;
    entries.push(e);
  }
  return Buffer.concat([header, ...entries, ...images.map((i) => i.data)]);
}

(async () => {
  // app/icon.png (512) and app/apple-icon.png (180) — Next file conventions.
  fs.writeFileSync(path.join(ROOT, "app/icon.png"), await squarePng(512));
  fs.writeFileSync(path.join(ROOT, "app/apple-icon.png"), await squarePng(180));

  // public/favicon.ico — multi-resolution (16/32/48) legacy fallback.
  const icoSizes = [16, 32, 48];
  const images = [];
  for (const size of icoSizes) {
    images.push({ size, data: await squarePng(size) });
  }
  fs.writeFileSync(path.join(ROOT, "public/favicon.ico"), buildIco(images));

  console.log(
    "Generated from SVG: app/icon.png (512), app/apple-icon.png (180), public/favicon.ico (16/32/48)",
  );
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
