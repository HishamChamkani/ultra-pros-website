import fs from "node:fs";
import path from "node:path";

/**
 * Server-only helpers for portfolio image assets.
 *
 * Client cover + mockup images live in /public/images/portfolio/<slug>/ as
 * cover.png and mockup-01.png, mockup-02.png, … The number of mockups varies
 * per client, so the gallery is read from the filesystem at build time rather
 * than hardcoded — do NOT import this from a "use client" component.
 */

const PORTFOLIO_DIR = path.join(process.cwd(), "public", "images", "portfolio");

/**
 * Every `mockup-*.png` in a client's folder, as public-relative `/images/...`
 * paths sorted numerically (mockup-01, mockup-02, …). Returns [] if the folder
 * doesn't exist or has no mockups.
 */
export function getGalleryImages(slug: string): string[] {
  try {
    return fs
      .readdirSync(path.join(PORTFOLIO_DIR, slug))
      .filter((file) => /^mockup-\d+\.png$/i.test(file))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((file) => `/images/portfolio/${slug}/${file}`);
  } catch {
    return [];
  }
}
