/**
 * Canonical service data (single source of truth).
 * Used by: the nav dropdown + footer (via content/site.ts), the home services
 * grid, the /services overview, and the /services/[slug] detail pages.
 *
 * Copy is Ultra Pros brand-voice content (BRAND_GUIDELINES §5). Newer services
 * carry placeholder copy in the same style — refine with the client before
 * launch. Each caseStudy links to a /portfolio/[slug] entry in
 * content/case-studies.ts.
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
      client: "HAQ Electronics",
      industry: "Electronics",
      result: "3.1× social-driven sales",
      slug: "haq-electronics",
      tags: ["Social Media", "E-commerce"],
    },
  },
  {
    slug: "ecommerce-solutions",
    title: "E-commerce Solutions",
    icon: "shopping-cart",
    blurb: "Online stores built to convert browsers into buyers.",
    href: "/services/ecommerce-solutions",
    heroCopy:
      "A great product deserves a store that actually sells it. We design, build, and optimize e-commerce experiences — from storefront to checkout to retention — that turn traffic into orders and first-time buyers into repeat customers.",
    whatsIncluded: [
      "Storefront design and build (Shopify, WooCommerce, custom)",
      "Product page, cart, and checkout conversion optimization",
      "Payment, shipping, and inventory integrations",
      "Product feed setup for Google Shopping and Meta catalogs",
      "Email and SMS flows for abandoned carts and retention",
      "Analytics, A/B testing, and ongoing CRO",
    ],
    process: [
      {
        title: "Discover",
        description:
          "We map your catalog, customers, and margins to prioritize what will move revenue.",
      },
      {
        title: "Design & Build",
        description:
          "We build a fast, mobile-first store designed around a frictionless path to purchase.",
      },
      {
        title: "Integrate",
        description:
          "We wire up payments, shipping, inventory, and your marketing stack cleanly.",
      },
      {
        title: "Launch & Optimize",
        description:
          "We launch, then A/B test pages, offers, and flows to lift conversion and AOV.",
      },
      {
        title: "Report",
        description:
          "Monthly reporting on revenue, conversion rate, and customer lifetime value.",
      },
    ],
    caseStudy: {
      client: "Iqra Trading International",
      industry: "Medical Equipment & Supplies",
      result: "45% more online orders",
      slug: "iqra-trading-international",
      tags: ["E-commerce", "Web & App"],
    },
  },
  {
    slug: "branding-designing",
    title: "Branding & Designing",
    icon: "palette",
    blurb: "Sharp, memorable identities that stand out.",
    href: "/services/branding-designing",
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
      client: "BioGlobal",
      industry: "Pharmaceutical",
      result: "Full rebrand at market launch",
      slug: "bioglobal",
      tags: ["Branding", "Web & App"],
    },
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    icon: "video",
    blurb: "Scroll-stopping video that holds attention and sells.",
    href: "/services/video-editing",
    heroCopy:
      "Video is the format every platform rewards — if it's cut right. We turn raw footage into scroll-stopping short-form, polished brand films, and product videos edited for the platform, the audience, and the action you want.",
    whatsIncluded: [
      "Short-form editing for Reels, TikTok, and Shorts",
      "Long-form brand films, explainers, and product videos",
      "Motion graphics, titles, and animated captions",
      "Color grading and audio mixing",
      "Thumbnail design and platform-ready exports",
      "Repurposing one shoot into a full content library",
    ],
    process: [
      {
        title: "Brief",
        description:
          "We align on goals, platforms, and the story each video needs to tell.",
      },
      {
        title: "Assemble",
        description:
          "We cut the core edit — pacing, structure, and hook — for a first review.",
      },
      {
        title: "Polish",
        description:
          "We add motion graphics, captions, color, and sound to finish the piece.",
      },
      {
        title: "Deliver & Repurpose",
        description:
          "We export platform-ready versions and slice extra cutdowns from the footage.",
      },
    ],
    caseStudy: {
      client: "Doxa Fabric Paints",
      industry: "Arts & Crafts",
      result: "12M+ video views",
      slug: "doxa-fabric-paints",
      tags: ["Video Editing", "Social Media"],
    },
  },
  {
    slug: "web-app-development",
    title: "Web & App Development",
    icon: "code",
    blurb: "Fast, conversion-focused websites and apps that perform.",
    href: "/services/web-app-development",
    heroCopy:
      "Your website and app are your hardest-working salespeople. We design and build fast, SEO-ready websites and mobile/web apps that load in a blink and turn visitors into customers — not just pretty screens that sit there.",
    whatsIncluded: [
      "Custom web design and development (Next.js, WordPress, Shopify)",
      "Cross-platform mobile and web app development",
      "Mobile-first, responsive builds tested across devices",
      "Core Web Vitals and performance optimization",
      "Conversion-focused UX, landing pages, and app flows",
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
          "We design conversion-first layouts and app flows, on-brand and built to guide the user.",
      },
      {
        title: "Build",
        description:
          "We develop fast, accessible, SEO-ready products with clean, maintainable code.",
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
      client: "Arfa Karim Technology Incubator",
      industry: "Information Technology",
      result: "Incubator platform rebuilt",
      slug: "arfa-karim-incubator",
      tags: ["Web & App", "Software & AI"],
    },
  },
  {
    slug: "software-ai-automations",
    title: "Software Development & AI Automations",
    icon: "cpu",
    blurb: "Custom software and AI automations that scale your business.",
    href: "/services/software-ai-automations",
    heroCopy:
      "Off-the-shelf tools only get you so far. We design and build custom software, internal tools, and AI automations — chatbots, workflow bots, and integrations — that cut manual work and unlock what your business couldn't do before.",
    whatsIncluded: [
      "Custom web and SaaS application development",
      "AI automations: chatbots, assistants, and workflow bots",
      "Business-process automation and third-party integrations",
      "API design, development, and integration",
      "Data pipelines, dashboards, and internal tools",
      "Cloud deployment, scaling, and ongoing support",
    ],
    process: [
      {
        title: "Discover",
        description:
          "We map your workflows, data, and the outcomes that matter before writing any code.",
      },
      {
        title: "Scope & Architect",
        description:
          "We define the solution, tech stack, and architecture with a clear, phased roadmap.",
      },
      {
        title: "Build",
        description:
          "We develop in tight iterations, shipping working software you can test early and often.",
      },
      {
        title: "Integrate & Test",
        description:
          "We connect your tools, harden the system, and test rigorously before launch.",
      },
      {
        title: "Deploy & Support",
        description:
          "We ship to production and provide monitoring, iteration, and ongoing support.",
      },
    ],
    caseStudy: {
      client: "UltraSecure",
      industry: "Cybersecurity",
      result: "Security platform MVP shipped",
      slug: "ultrasecure",
      tags: ["Software & AI", "Branding"],
    },
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export const serviceSlugs = services.map((service) => service.slug);
