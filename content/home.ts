/**
 * Homepage content (CLAUDE.md §7 — all copy in typed objects, brand voice from
 * BRAND_GUIDELINES §5). Services for the overview grid come from content/site.ts.
 *
 * NOTE: case-study and blog slugs link to routes built in later prompts
 * (/portfolio/[slug], /blog/[slug]) — they will 404 until then. Client logos,
 * metrics, and quotes are realistic placeholders, not real accounts.
 */

export const hero = {
  eyebrow: "Performance-Driven Digital Marketing",
  titleLead: "We turn traffic into",
  titleAccent: "revenue.",
  subtitle:
    "Ultra Pros is a performance marketing agency for brands that want measurable growth — not vanity metrics. Strategy, execution, and reporting you can actually read.",
  primaryCta: { label: "Book a Consultation", href: "/contact" },
  secondaryCta: { label: "View Our Work", href: "/portfolio" },
} as const;

export const trustBar = {
  title: "Industry leaders trust us",
  // Placeholder client names — rendered as simple wordmarks until real logos exist.
  logos: [
    "Northwind",
    "Vertex Retail",
    "Lumen Health",
    "Coastline Realty",
    "Bytewave",
    "Orchard & Co.",
  ],
} as const;

export type Stat = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

export const stats: Stat[] = [
  { value: 8, suffix: "+", label: "Years Active" },
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 200, suffix: "+", label: "Clients Served" },
  { value: 181, prefix: "$", suffix: "M", label: "Client Revenue" },
];

export type CaseStudyTeaser = {
  slug: string;
  client: string;
  industry: string;
  tags: string[];
  result: string;
};

export const featuredCaseStudies: CaseStudyTeaser[] = [
  {
    slug: "northwind-ecommerce",
    client: "Northwind",
    industry: "E-commerce",
    tags: ["Paid Media", "SEO"],
    result: "3.2× ROAS in 90 days",
  },
  {
    slug: "lumen-health",
    client: "Lumen Health",
    industry: "Healthcare",
    tags: ["Social", "Content"],
    result: "20K+ appointments booked",
  },
  {
    slug: "coastline-realty",
    client: "Coastline Realty",
    industry: "Real Estate",
    tags: ["Web Development", "SEO"],
    result: "68% more qualified leads",
  },
  {
    slug: "bytewave-saas",
    client: "Bytewave",
    industry: "SaaS",
    tags: ["Performance", "Branding"],
    result: "$1.4M pipeline in Q1",
  },
];

export type ValueProp = {
  /** lucide icon name, resolved in the WhyUltraPros component. */
  icon:
    | "target"
    | "user-check"
    | "zap"
    | "layers"
    | "line-chart"
    | "sparkles";
  title: string;
  description: string;
};

export const whyUltraPros: ValueProp[] = [
  {
    icon: "target",
    title: "Results, not reports",
    description:
      "We optimize for revenue and pipeline, not vanity metrics. Every campaign ties back to a number that matters to your business.",
  },
  {
    icon: "user-check",
    title: "A dedicated strategist",
    description:
      "You get a senior strategist who knows your account — not a rotating cast of junior account managers.",
  },
  {
    icon: "zap",
    title: "Speed that compounds",
    description:
      "We ship fast and iterate weekly, so momentum builds instead of stalling in endless approval queues.",
  },
  {
    icon: "layers",
    title: "Full-funnel, in-house",
    description:
      "Paid, SEO, social, web, and creative under one roof — no finger-pointing between three different agencies.",
  },
  {
    icon: "line-chart",
    title: "Transparent reporting",
    description:
      "Live dashboards and plain-English reviews. You always know what's working and exactly where your budget goes.",
  },
  {
    icon: "sparkles",
    title: "Data-backed creative",
    description:
      "Sharp, on-brand creative informed by what actually converts — not guesswork or trends for their own sake.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Ultra Pros doubled our qualified leads in a single quarter and actually explained how. We finally have a marketing partner we trust.",
    name: "Sarah Malik",
    role: "Head of Growth",
    company: "Northwind",
  },
  {
    quote:
      "They rebuilt our funnel and our site in six weeks. ROAS went from break-even to 3.2×. No fluff, just results.",
    name: "David Chen",
    role: "Founder",
    company: "Bytewave",
  },
  {
    quote:
      "The team moves fast and treats our budget like their own. Best agency decision we've made in years.",
    name: "Ayesha Khan",
    role: "Marketing Director",
    company: "Lumen Health",
  },
  {
    quote:
      "Clear reporting, real strategy, and a crew that actually picks up the phone. Ultra Pros delivers.",
    name: "Marco Reyes",
    role: "CEO",
    company: "Coastline Realty",
  },
];

export const finalCta = {
  title: "Ready to grow?",
  subtitle:
    "Book a free consultation and we'll map out where your next wins are hiding — no obligation, no jargon.",
  cta: { label: "Book a Consultation", href: "/contact" },
} as const;
