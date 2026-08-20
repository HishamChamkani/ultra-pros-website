import type { Metadata } from "next";

/**
 * Builds consistent per-page metadata (canonical + Open Graph + Twitter).
 * The page <title> gets the "| Ultra Pros" suffix from the layout title
 * template; OG/Twitter titles include it explicitly here.
 */
export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const ogTitle = `${title} | Ultra Pros`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: "Ultra Pros",
      title: ogTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
  };
}
