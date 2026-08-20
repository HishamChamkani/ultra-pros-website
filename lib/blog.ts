import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

/**
 * Server-only blog data layer. Reads MDX files from /content/blog, parses
 * frontmatter with gray-matter, and exposes typed metadata + raw body.
 * Do NOT import this from a client component (uses node:fs).
 */

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  /** Human-formatted date, e.g. "Jul 28, 2026". */
  dateDisplay: string;
  category: string;
  excerpt: string;
  coverImage?: string;
  author: string;
  authorRole?: string;
  readingTime: string;
};

function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));
}

function readingTime(body: string): string {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

function toMeta(slug: string, data: Record<string, unknown>, body: string): PostMeta {
  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    dateDisplay: data.date ? formatDate(String(data.date)) : "",
    category: String(data.category ?? "Uncategorized"),
    excerpt: String(data.excerpt ?? ""),
    coverImage: data.coverImage ? String(data.coverImage) : undefined,
    author: String(data.author ?? "Ultra Pros"),
    authorRole: data.authorRole ? String(data.authorRole) : undefined,
    readingTime: readingTime(body),
  };
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): { meta: PostMeta; body: string } | null {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { meta: toMeta(slug, data, content), body: content };
}

export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => {
      const post = getPostBySlug(slug);
      return post?.meta;
    })
    .filter((meta): meta is PostMeta => Boolean(meta))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllCategories(): string[] {
  return Array.from(new Set(getAllPosts().map((post) => post.category)));
}

export function getRelatedPosts(slug: string, category: string, limit = 3): PostMeta[] {
  const all = getAllPosts().filter((post) => post.slug !== slug);
  const sameCategory = all.filter((post) => post.category === category);
  const others = all.filter((post) => post.category !== category);
  return [...sameCategory, ...others].slice(0, limit);
}
