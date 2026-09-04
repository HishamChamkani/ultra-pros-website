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
    "Ultra Pros is a performance marketing agency for brands that want measurable growth, not vanity metrics. Strategy, execution, and reporting you can actually read.",
  primaryCta: { label: "Book a Consultation", href: "/contact" },
  secondaryCta: { label: "View Our Work", href: "/portfolio" },
} as const;

export const trustBar = {
  title: "Trusted by",
  // Real client logos live in /public/clients. `src` points at the current
  // (placeholder-quality) logo files; swap for cleaned/vectorized assets when
  // the client supplies final artwork. `name` doubles as the image alt text.
  // `boost` = the source file carries extra built-in padding, so it reads
  // smaller than the rest at a uniform height; bump its display height to
  // even out the visual weight across the row (see components/home/TrustBar).
  logos: [
    { name: "Arfa Karim Technology Incubator", src: "/clients/arfa-karim-logo.png" },
    { name: "HAQ Electronics", src: "/clients/haq-electronics-logo.png" },
    { name: "BioGlobal", src: "/clients/bio-global-logo.png" },
    { name: "Doxa Fabric Paints", src: "/clients/doxa-fabrics-logo.png" },
    { name: "Iqra Trading International", src: "/clients/iqra-trading-logo.png", boost: true },
    { name: "UltraSecure", src: "/clients/ultra-secure-logo.png", boost: true },
    { name: "Joya Lumière", src: "/clients/joyalumiere-logo.png" },
  ],
} as const;

export type Stat = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  /** Static text override — renders verbatim instead of the animated count-up. */
  text?: string;
  /** De-emphasize this stat (smaller, muted) so context stats don't compete
   *  with the headline metrics. */
  muted?: boolean;
};

export const stats: Stat[] = [
  // `text: "2024"` renders the year verbatim (no count-up comma, e.g. "2,024");
  // `muted` shrinks + softens it so it reads as context, not a headline metric.
  { value: 2024, text: "2024", label: "Established", muted: true },
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 80, suffix: "+", label: "Clients Served" },
  { value: 70, prefix: "$", suffix: "M+", label: "Client Revenue Generated" },
];

export type CaseStudyTeaser = {
  slug: string;
  client: string;
  industry: string;
  tags: string[];
  result: string;
};

// Real client names; result copy is placeholder until client-approved (see content/case-studies.ts).
export const featuredCaseStudies: CaseStudyTeaser[] = [
  {
    slug: "haq-electronics",
    client: "HAQ Electronics",
    industry: "Electronics",
    tags: ["E-commerce", "Social Media"],
    result: "3.1× online sales in 6 months",
  },
  {
    slug: "bioglobal",
    client: "BioGlobal",
    industry: "Pharmaceutical",
    tags: ["Branding", "Web & App"],
    result: "Full rebrand at market launch",
  },
  {
    slug: "doxa-fabric-paints",
    client: "Doxa Fabric Paints",
    industry: "Arts & Crafts",
    tags: ["Social Media", "Video Editing"],
    result: "12M+ video views",
  },
  {
    slug: "ultra-secure",
    client: "UltraSecure",
    industry: "Cybersecurity",
    tags: ["Software & AI", "Branding"],
    result: "Security platform MVP shipped",
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
      "You get a senior strategist who knows your account, not a rotating cast of junior account managers.",
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
      "Social, e-commerce, branding, video, web, and software under one roof, no finger-pointing between three different agencies.",
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
      "Sharp, on-brand creative informed by what actually converts, not guesswork or trends for their own sake.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

// Client-provided attributions (name/role/company). Quotes are client-approved.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Ultra Pros took us online and actually explained how. We finally have a partner we trust.",
    name: "Raaz Muhammad",
    role: "GM",
    company: "HAQ Electronics",
  },
  {
    quote:
      "They shipped our product and our brand in six weeks. No fluff, just results.",
    name: "Dr. Rizwan Malik",
    role: "MD",
    company: "BioGlobal",
  },
  {
    quote:
      "The team moves fast and treats our budget like their own. Best decision we've made in years.",
    name: "Ayesha",
    role: "Founder",
    company: "Doxa Fabric Paints",
  },
  {
    quote:
      "Clear reporting, real strategy, and a crew that actually picks up the phone. Ultra Pros delivers.",
    name: "Wajeeha",
    role: "Founder",
    company: "Joya Lumière",
  },
];

export const finalCta = {
  title: "Ready to grow?",
  subtitle:
    "Book a free consultation and we'll map out where your next wins are hiding, no obligation, no jargon.",
  cta: { label: "Book a Consultation", href: "/contact" },
} as const;
