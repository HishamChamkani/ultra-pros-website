/**
 * Case study content (CLAUDE.md §7 — typed copy, brand voice per BRAND_GUIDELINES §5).
 * Powers the /portfolio filterable grid and /portfolio/[slug] detail pages.
 *
 * These are the six real Ultra Pros clients with real cover + mockup imagery in
 * /public/images/portfolio/<slug>/. Client names, industries, and services are
 * real; the narrative body copy on the detail pages is CLEARLY-MARKED PLACEHOLDER
 * text (see components/portfolio/CaseStudyDetail.tsx) until the client writes the
 * real story and results. We deliberately do NOT show fabricated metrics/stats.
 *
 * Slugs match the image folder names AND are referenced by the home page and the
 * service pages — keep them stable.
 *
 * Note: "Joya Lumière" (with the accent) is the display name for the `joya` slug.
 * Arfa Karim Technology Incubator stays in the "Trusted By" logo strip only — it
 * has no case study yet, so it is intentionally absent here.
 */

export const serviceCategories = [
  "Social Media",
  "E-commerce",
  "Branding",
  "Video Editing",
  "Web & App",
  "Software & AI",
] as const;
export type ServiceCategory = (typeof serviceCategories)[number];

export const industries = [
  "Electronics",
  "Pharmaceutical",
  "Arts & Crafts",
  "Medical Equipment & Supplies",
  "Cybersecurity",
  "Beauty & Personal Care",
] as const;
export type Industry = (typeof industries)[number];

export type CaseStudy = {
  slug: string;
  /** Display name — use exactly as written (note the accent on "Joya Lumière"). */
  client: string;
  industry: Industry;
  services: ServiceCategory[];
  /** Neutral one-liner for cards + detail hero. No fabricated results/stats. */
  summary: string;
  /** Cover image — real client asset at /images/portfolio/<slug>/cover.png. */
  cover: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "haq-electronics",
    client: "HAQ Electronics",
    industry: "Electronics",
    services: ["E-commerce", "Social Media"],
    summary:
      "A consumer-electronics retailer we partnered with across e-commerce and social.",
    cover: "/images/portfolio/haq-electronics/cover.png",
  },
  {
    slug: "bioglobal",
    client: "BioGlobal",
    industry: "Pharmaceutical",
    services: ["Branding", "Web & App"],
    summary:
      "A pharmaceutical company we supported with branding and a corporate website.",
    cover: "/images/portfolio/bioglobal/cover.png",
  },
  {
    slug: "doxa-fabric-paints",
    client: "Doxa Fabric Paints",
    industry: "Arts & Crafts",
    services: ["Social Media", "Video Editing"],
    summary:
      "A fabric-paint brand we worked with on short-form social and video content.",
    cover: "/images/portfolio/doxa-fabric-paints/cover.png",
  },
  {
    slug: "iqra-trading",
    client: "Iqra Trading International",
    industry: "Medical Equipment & Supplies",
    services: ["E-commerce", "Web & App"],
    summary:
      "A medical-equipment and supplies distributor we helped bring online.",
    cover: "/images/portfolio/iqra-trading/cover.png",
  },
  {
    slug: "joya",
    client: "Joya Lumière",
    industry: "Beauty & Personal Care",
    services: ["Web & App", "Branding"],
    summary:
      "A beauty and personal-care brand we partnered with on web and branding.",
    cover: "/images/portfolio/joya/cover.png",
  },
  {
    slug: "ultra-secure",
    client: "UltraSecure",
    industry: "Cybersecurity",
    services: ["Software & AI", "Branding"],
    summary:
      "A cybersecurity startup we helped build product and brand for.",
    cover: "/images/portfolio/ultra-secure/cover.png",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export const caseStudySlugs = caseStudies.map((cs) => cs.slug);
