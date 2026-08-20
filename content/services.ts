/**
 * Canonical service data (single source of truth).
 * Used by: the nav dropdown + footer (via content/site.ts), the home services
 * grid, the /services overview, and the /services/[slug] detail pages.
 *
 * All copy is real Ultra Pros brand-voice content (BRAND_GUIDELINES §5), not
 * placeholder. Case-study slugs link to /portfolio/[slug] (built in Prompt 6)
 * and will 404 until then.
 */
import type { ServiceIconName } from "@/components/ui/service-icons";

export type ProcessStep = {
  title: string;
  description: string;
};

export type ServiceCaseStudy = {
  client: string;
  industry: string;
  result: string;
  slug: string;
  tags: string[];
};

export type Service = {
  slug: string;
  title: string;
  icon: ServiceIconName;
  /** One-liner for nav dropdown, cards, and grids. */
  blurb: string;
  /** Convenience: always `/services/${slug}`. */
  href: string;
  /** Longer hero paragraph for the detail page. */
  heroCopy: string;
  whatsIncluded: string[];
  process: ProcessStep[];
  caseStudy: ServiceCaseStudy;
};

export const services: Service[] = [
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    icon: "share2",
    blurb: "Grow and engage your audience across every platform.",
    href: "/services/social-media-marketing",
    heroCopy:
      "Social isn't a megaphone — it's where your next customers decide whether to trust you. We build platform-native content and community strategies that turn followers into pipeline, not just a vanity number.",
    whatsIncluded: [
      "Channel strategy across Instagram, TikTok, LinkedIn, Facebook, and X",
      "Monthly content calendars mapped to campaigns and launches",
      "In-house short-form video, graphics, and copywriting",
      "Community management and DM/comment response",
      "Paid social amplification for your best-performing posts",
      "Monthly analytics on reach, engagement, and conversions",
    ],
    process: [
      {
        title: "Audit & Discover",
        description:
          "We audit your channels, competitors, and audience to find the gaps and the openings.",
      },
      {
        title: "Strategize",
        description:
          "We build a content-pillar strategy and calendar tied directly to your business goals.",
      },
      {
        title: "Create & Publish",
        description:
          "Our team produces and ships content weekly, adapting to what each platform rewards.",
      },
      {
        title: "Engage & Optimize",
        description:
          "We manage community, double down on winners, and cut what doesn't work.",
      },
      {
        title: "Report",
        description:
          "Clear monthly reporting on the metrics that map back to revenue.",
      },
    ],
    caseStudy: {
      client: "Lumen Health",
      industry: "Healthcare",
      result: "20K+ appointments booked",
      slug: "lumen-health",
      tags: ["Social", "Content"],
    },
  },
  {
    slug: "paid-marketing",
    title: "Paid / Performance Marketing",
    icon: "target",
    blurb: "Ad campaigns engineered for measurable ROI.",
    href: "/services/paid-marketing",
    heroCopy:
      "Every dollar should come back with friends. We plan, launch, and relentlessly optimize paid campaigns across search, social, and display — engineered around your CAC and ROAS targets, not impressions.",
    whatsIncluded: [
      "Full-funnel strategy across Google, Meta, TikTok, and LinkedIn Ads",
      "Conversion tracking, pixel, and server-side setup done right",
      "Ad creative and copy testing at scale",
      "Landing page and offer optimization",
      "Budget pacing and bid-strategy management",
      "Weekly performance reviews with ROAS and CAC reporting",
    ],
    process: [
      {
        title: "Audit & Discover",
        description:
          "We map your funnel, tracking, and unit economics to set the right targets.",
      },
      {
        title: "Strategize",
        description:
          "We build the channel mix, budget plan, and creative-testing roadmap.",
      },
      {
        title: "Launch & Test",
        description:
          "We ship campaigns fast and test creative, audiences, and offers systematically.",
      },
      {
        title: "Scale & Optimize",
        description:
          "We scale winners, kill losers, and protect your CAC as spend grows.",
      },
      {
        title: "Report",
        description:
          "Transparent weekly reporting tied to revenue and pipeline.",
      },
    ],
    caseStudy: {
      client: "Northwind",
      industry: "E-commerce",
      result: "3.2× ROAS in 90 days",
      slug: "northwind-ecommerce",
      tags: ["Paid Media", "SEO"],
    },
  },
  {
    slug: "seo",
    title: "SEO",
    icon: "search",
    blurb: "Rank higher and turn search traffic into revenue.",
    href: "/services/seo",
    heroCopy:
      "Search is the highest-intent traffic you'll ever get — and it compounds. We combine technical SEO, content, and authority building to move the rankings that actually drive qualified leads and sales.",
    whatsIncluded: [
      "Technical SEO audits and fixes (speed, crawlability, Core Web Vitals)",
      "Keyword and search-intent research mapped to your funnel",
      "On-page optimization and content briefs",
      "Authority building and digital-PR link acquisition",
      "Local SEO and Google Business Profile optimization",
      "Monthly ranking, traffic, and conversion reporting",
    ],
    process: [
      {
        title: "Audit & Discover",
        description:
          "A full technical, content, and backlink audit to find what's holding you back.",
      },
      {
        title: "Strategize",
        description:
          "We prioritize a roadmap by impact and effort, targeting the keywords that convert.",
      },
      {
        title: "Execute",
        description:
          "We fix technical issues, optimize pages, and publish content built to rank.",
      },
      {
        title: "Build Authority",
        description:
          "We earn the links and mentions that move competitive rankings.",
      },
      {
        title: "Report",
        description:
          "Monthly reporting on rankings, organic traffic, and revenue.",
      },
    ],
    caseStudy: {
      client: "Coastline Realty",
      industry: "Real Estate",
      result: "68% more qualified leads",
      slug: "coastline-realty",
      tags: ["Web Development", "SEO"],
    },
  },
  {
    slug: "web-development",
    title: "Web Development",
    icon: "code",
    blurb: "Fast, conversion-focused websites that perform.",
    href: "/services/web-development",
    heroCopy:
      "Your website is your hardest-working salesperson. We design and build fast, SEO-ready sites that load in a blink and turn visitors into customers — not just pretty pages that sit there.",
    whatsIncluded: [
      "Custom design and development (Next.js, WordPress, Shopify)",
      "Mobile-first, responsive builds tested across devices",
      "Core Web Vitals and performance optimization",
      "Conversion-focused UX and landing pages",
      "SEO-ready structure, schema, and analytics setup",
      "Ongoing maintenance and support options",
    ],
    process: [
      {
        title: "Discover",
        description:
          "We map your goals, users, and the actions that matter before a pixel is drawn.",
      },
      {
        title: "Design",
        description:
          "We design conversion-first layouts, on-brand and built to guide the visitor.",
      },
      {
        title: "Build",
        description:
          "We develop fast, accessible, SEO-ready pages with clean, maintainable code.",
      },
      {
        title: "Launch & QA",
        description:
          "We test across devices, optimize performance, and launch without surprises.",
      },
      {
        title: "Optimize",
        description:
          "We track behavior and iterate on what lifts conversions.",
      },
    ],
    caseStudy: {
      client: "Bytewave",
      industry: "SaaS",
      result: "$1.4M pipeline in Q1",
      slug: "bytewave-saas",
      tags: ["Performance", "Branding"],
    },
  },
  {
    slug: "branding-design",
    title: "Branding & Design",
    icon: "palette",
    blurb: "Sharp, memorable identities that stand out.",
    href: "/services/branding-design",
    heroCopy:
      "In a crowded feed, forgettable is fatal. We craft bold, cohesive brand identities and design systems that make you instantly recognizable — and impossible to ignore.",
    whatsIncluded: [
      "Logo, wordmark, and visual identity systems",
      "Brand guidelines and messaging frameworks",
      "Marketing and social media design templates",
      "Pitch decks, one-pagers, and sales collateral",
      "Packaging and print design",
      "Brand refresh and rebranding",
    ],
    process: [
      {
        title: "Discover",
        description:
          "We dig into your positioning, audience, and competitors to find your edge.",
      },
      {
        title: "Strategize",
        description:
          "We define the brand story, voice, and visual direction.",
      },
      {
        title: "Design",
        description:
          "We craft the identity system — logo, color, type, and templates.",
      },
      {
        title: "Deliver",
        description:
          "We hand over polished, ready-to-use assets and clear guidelines.",
      },
    ],
    caseStudy: {
      client: "Vertex Retail",
      industry: "Retail",
      result: "2× brand recall after refresh",
      slug: "vertex-retail",
      tags: ["Branding", "Content"],
    },
  },
  {
    slug: "content-creation",
    title: "Content Creation",
    icon: "pen-tool",
    blurb: "Scroll-stopping content that drives action.",
    href: "/services/content-creation",
    heroCopy:
      "Content is the fuel behind every channel you run. We produce scroll-stopping video, graphics, and copy — built for the platform, the audience, and the exact action you want them to take.",
    whatsIncluded: [
      "Short-form video for TikTok, Reels, and Shorts",
      "Photography and graphic design",
      "Copywriting for ads, email, and web",
      "Blog and long-form content production",
      "Content repurposing across channels",
      "Content calendars and production workflows",
    ],
    process: [
      {
        title: "Discover",
        description:
          "We learn your brand voice, audience, and the platforms that matter.",
      },
      {
        title: "Plan",
        description:
          "We build a content plan and calendar mapped to your campaigns.",
      },
      {
        title: "Produce",
        description:
          "Our creators shoot, design, and write content built to perform.",
      },
      {
        title: "Publish & Repurpose",
        description:
          "We ship on schedule and stretch every asset across channels.",
      },
      {
        title: "Report",
        description:
          "We track what resonates and refine the content engine.",
      },
    ],
    caseStudy: {
      client: "Lumen Health",
      industry: "Healthcare",
      result: "3.5× engagement in 60 days",
      slug: "lumen-health",
      tags: ["Content", "Social"],
    },
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export const serviceSlugs = services.map((service) => service.slug);
