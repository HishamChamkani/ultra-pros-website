/**
 * Case study content (CLAUDE.md §7 — typed copy, brand voice per BRAND_GUIDELINES §5).
 * Powers the /portfolio filterable grid and /portfolio/[slug] detail pages.
 *
 * ⚠️ PLACEHOLDER RESULTS — client NAMES and industries below are real Ultra Pros
 * clients, but every metric, result headline, challenge, strategy, and quote is
 * PLAUSIBLE PLACEHOLDER copy written from each client's industry. All of it must
 * be replaced with real, client-approved numbers and details before public launch.
 *
 * Slugs here are referenced by the home page and the service pages — keep them stable.
 *
 * `cover` images (/public/images/portfolio/*) are STOCK/PLACEHOLDER assets sourced
 * from the internet, NOT real client work — replace with real client photography
 * before launch. The `gallery` fields are still text tiles.
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
  "Information Technology",
] as const;
export type Industry = (typeof industries)[number];

export type CaseMetric = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

export type CaseStudy = {
  slug: string;
  client: string;
  industry: Industry;
  services: ServiceCategory[];
  resultHeadline: string;
  summary: string;
  challenge: string;
  strategyIntro: string;
  strategyPoints: string[];
  metrics: CaseMetric[];
  /** Cover image — stock/placeholder, replace with real client work before launch. */
  cover: string;
  /** Placeholder gallery tile labels (swap for real images later). */
  gallery: string[];
};

// ⚠️ Every `metrics`, `resultHeadline`, `challenge`, and `strategy*` value below is
// placeholder copy — replace with real client-approved results before launch.
export const caseStudies: CaseStudy[] = [
  {
    slug: "haq-electronics",
    client: "HAQ Electronics",
    industry: "Electronics",
    services: ["E-commerce", "Social Media"],
    resultHeadline: "3.1× online sales in 6 months",
    summary:
      "Turning a well-known local electronics retailer into a social-first online store that sells around the clock.",
    challenge:
      "HAQ Electronics had strong foot traffic but almost no online presence. Their catalog lived offline, social was inconsistent, and customers who searched online found competitors first.",
    strategyIntro:
      "We built a conversion-ready store and a social engine to drive demand into it.",
    strategyPoints: [
      "Launched a fast, mobile-first storefront with the full product catalog",
      "Built product feeds for Google Shopping and Meta catalogs",
      "Produced platform-native social content around launches and deals",
      "Set up abandoned-cart and retention flows",
    ],
    metrics: [
      { value: 3.1, decimals: 1, suffix: "×", label: "Online Sales" },
      { value: 52, suffix: "%", label: "More Repeat Buyers" },
      { value: 2.4, decimals: 1, suffix: "×", label: "Social Reach" },
      { value: 6, suffix: " mo", label: "To Scale" },
    ],
    cover: "/images/portfolio/northwind-cover.jpeg",
    gallery: ["Storefront redesign", "Product feed", "Social content set"],
  },
  {
    slug: "bioglobal",
    client: "BioGlobal",
    industry: "Pharmaceutical",
    services: ["Branding", "Web & App"],
    resultHeadline: "Full rebrand at market launch",
    summary:
      "A complete brand identity and corporate site for a pharmaceutical company entering new markets.",
    challenge:
      "BioGlobal was expanding into new markets with an outdated identity and no cohesive digital presence. They needed a credible, compliant brand that could earn trust with partners and regulators.",
    strategyIntro:
      "We delivered a clean, credible identity system and a corporate site to match.",
    strategyPoints: [
      "Created a full brand identity — logo, palette, and guidelines",
      "Designed compliant, professional marketing and sales collateral",
      "Built a fast, accessible corporate website",
      "Established a consistent voice across every touchpoint",
    ],
    metrics: [
      { value: 1, label: "Unified Brand System" },
      { value: 3, suffix: "×", label: "Site Engagement" },
      { value: 40, suffix: "%", label: "Faster Page Load" },
      { value: 100, suffix: "%", label: "On-Brand Collateral" },
    ],
    cover: "/images/portfolio/lumen-health-cover.jpeg",
    gallery: ["Identity system", "Corporate site", "Sales collateral"],
  },
  {
    slug: "doxa-fabric-paints",
    client: "Doxa Fabric Paints",
    industry: "Arts & Crafts",
    services: ["Social Media", "Video Editing"],
    resultHeadline: "12M+ video views",
    summary:
      "Turning a fabric-paint brand into a viral how-to content engine that crafters actually follow.",
    challenge:
      "Doxa made a product people loved but rarely saw. Their social was sporadic and their tutorials were long and hard to watch, so reach stayed flat despite a passionate niche audience.",
    strategyIntro:
      "We made the craft impossible to scroll past with short, satisfying video.",
    strategyPoints: [
      "Built a short-form video engine of quick, satisfying tutorials",
      "Edited raw creator footage into platform-ready cutdowns",
      "Ran a consistent posting calendar across Reels and TikTok",
      "Grew and activated a genuinely engaged crafting community",
    ],
    metrics: [
      { value: 12, suffix: "M+", label: "Video Views" },
      { value: 4.6, decimals: 1, suffix: "×", label: "Follower Growth" },
      { value: 38, suffix: "%", label: "Higher Engagement" },
      { value: 60, suffix: "+", label: "Videos Shipped" },
    ],
    cover: "/images/portfolio/vertex-retail-cover.jpeg",
    gallery: ["Tutorial series", "Short-form edits", "Community growth"],
  },
  {
    slug: "iqra-trading-international",
    client: "Iqra Trading International",
    industry: "Medical Equipment & Supplies",
    services: ["E-commerce", "Web & App"],
    resultHeadline: "45% more online orders",
    summary:
      "A B2B medical-supplies distributor moved its catalog online with a store built for bulk buyers.",
    challenge:
      "Iqra Trading ran a large medical-supplies catalog entirely over phone and email. Buyers couldn't check availability or reorder easily, and the manual process capped how much the team could handle.",
    strategyIntro:
      "We built a B2B store designed around how medical buyers actually purchase.",
    strategyPoints: [
      "Launched a searchable online catalog with bulk-order support",
      "Added account-based pricing and fast reordering",
      "Integrated inventory and shipping for accurate availability",
      "Streamlined quote requests and order tracking",
    ],
    metrics: [
      { value: 45, suffix: "%", label: "More Online Orders" },
      { value: 2.2, decimals: 1, suffix: "×", label: "Reorder Rate" },
      { value: 30, suffix: "%", label: "Less Manual Work" },
      { value: 1000, suffix: "+", label: "SKUs Online" },
    ],
    cover: "/images/portfolio/coastline-realty-cover.jpeg",
    gallery: ["B2B catalog", "Reorder flow", "Inventory sync"],
  },
  {
    slug: "ultrasecure",
    client: "UltraSecure",
    industry: "Cybersecurity",
    services: ["Software & AI", "Branding"],
    resultHeadline: "Security platform MVP shipped",
    summary:
      "Taking a cybersecurity startup from concept to a launched product with a brand to match.",
    challenge:
      "UltraSecure had deep security expertise but no product and no brand. They needed to ship a credible MVP quickly to start onboarding early customers and raising confidence.",
    strategyIntro:
      "We built the product and the brand in parallel, on a tight timeline.",
    strategyPoints: [
      "Designed and built the MVP web application",
      "Automated threat-alert workflows and integrations",
      "Created the brand identity and product UI system",
      "Set up cloud deployment, monitoring, and iteration",
    ],
    metrics: [
      { value: 1, label: "MVP Shipped" },
      { value: 12, suffix: " wks", label: "Concept to Launch" },
      { value: 3, suffix: "×", label: "Faster Onboarding" },
      { value: 99.9, decimals: 1, suffix: "%", label: "Uptime Target" },
    ],
    cover: "/images/portfolio/bytewave-cover.jpeg",
    gallery: ["Product UI", "Alert automations", "Brand system"],
  },
  {
    slug: "arfa-karim-incubator",
    client: "Arfa Karim Technology Incubator",
    industry: "Information Technology",
    services: ["Web & App", "Software & AI"],
    resultHeadline: "Incubator platform rebuilt",
    summary:
      "A modern platform to help a technology incubator manage startups, mentors, and applications.",
    challenge:
      "The incubator was running applications, mentorship, and cohort tracking across spreadsheets and forms. It didn't scale, and founders and mentors had no single place to work.",
    strategyIntro:
      "We built one platform to run applications, cohorts, and mentorship end to end.",
    strategyPoints: [
      "Rebuilt the public site and application experience",
      "Built a portal for founders, mentors, and program staff",
      "Automated application intake, scoring, and status updates",
      "Added dashboards for cohort progress and reporting",
    ],
    metrics: [
      { value: 1, label: "Unified Platform" },
      { value: 60, suffix: "%", label: "Less Admin Time" },
      { value: 3, suffix: "×", label: "Faster Intake" },
      { value: 100, suffix: "+", label: "Startups Managed" },
    ],
    cover: "/images/portfolio/sizzle-grill-cover.jpeg",
    gallery: ["Application portal", "Mentor dashboard", "Cohort tracking"],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export const caseStudySlugs = caseStudies.map((cs) => cs.slug);
