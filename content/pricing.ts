/**
 * Pricing content (CLAUDE.md §7 — typed copy, brand voice per BRAND_GUIDELINES §5).
 *
 * ⚠️ PLACEHOLDER PRICING: the USD/PKR numbers below are illustrative and MUST be
 * confirmed with the client before launch. Package scopes are also draft.
 */

export type Tier = {
  id: string;
  name: string;
  description: string;
  priceUSD: number;
  pricePKR: number;
  highlighted?: boolean;
  features: string[];
  cta: { label: string; href: string };
};

export const tiers: Tier[] = [
  {
    id: "starter",
    name: "Starter",
    description: "For small businesses getting serious about growth.",
    priceUSD: 549,
    pricePKR: 150000,
    features: [
      "2 marketing channels",
      "Up to 8 content pieces / month",
      "Monthly strategy call",
      "Paid ad management",
      "Standard reporting dashboard",
      "Email support",
    ],
    cta: { label: "Get Started", href: "/contact" },
  },
  {
    id: "growth",
    name: "Growth",
    description: "For scaling brands that need full-funnel momentum.",
    priceUSD: 1299,
    pricePKR: 350000,
    highlighted: true,
    features: [
      "4 marketing channels",
      "Up to 20 content pieces / month",
      "Bi-weekly strategy calls",
      "Dedicated strategist",
      "Advanced reporting + call tracking",
      "Quarterly business review",
      "Priority support",
    ],
    cta: { label: "Get Started", href: "/contact" },
  },
  {
    id: "scale",
    name: "Scale",
    description: "For established brands that want to dominate their market.",
    priceUSD: 2799,
    pricePKR: 750000,
    features: [
      "Unlimited channels",
      "Unlimited content (fair use)",
      "Weekly strategy calls",
      "Senior strategist + account team",
      "Custom dashboards + attribution",
      "Quarterly business review",
      "Dedicated Slack channel",
    ],
    cta: { label: "Get Started", href: "/contact" },
  },
];

export type ComparisonValue = boolean | string;

export type ComparisonRow = {
  feature: string;
  /** Values in tier order: [Starter, Growth, Scale]. */
  values: [ComparisonValue, ComparisonValue, ComparisonValue];
};

export const comparisonRows: ComparisonRow[] = [
  { feature: "Marketing channels", values: ["2", "4", "Unlimited"] },
  { feature: "Content pieces / month", values: ["8", "20", "Unlimited*"] },
  { feature: "Strategy calls", values: ["Monthly", "Bi-weekly", "Weekly"] },
  { feature: "Paid ad management", values: [true, true, true] },
  { feature: "SEO", values: ["Basic", "Advanced", "Advanced"] },
  { feature: "Dedicated strategist", values: [false, true, "Senior + team"] },
  { feature: "Landing pages / month", values: ["1", "3", "Unlimited"] },
  { feature: "Reporting", values: ["Standard", "Advanced", "Custom"] },
  { feature: "Call & conversion tracking", values: [false, true, true] },
  { feature: "Quarterly business review", values: [false, true, true] },
  { feature: "Support", values: ["Email", "Priority", "Dedicated Slack"] },
];

export type Faq = {
  question: string;
  answer: string;
};

export const pricingFaqs: Faq[] = [
  {
    question: "Is there a setup fee or a long-term contract?",
    answer:
      "No setup fees. We work on a rolling monthly basis with a simple 30-day notice — we'd rather earn your business every month than lock you in.",
  },
  {
    question: "What counts as a 'marketing channel'?",
    answer:
      "A channel is any platform we actively manage for you — for example paid search, paid social, organic social, SEO, or email. We'll recommend the right mix for your goals during your consultation.",
  },
  {
    question: "Can I change plans later?",
    answer:
      "Absolutely. You can upgrade, downgrade, or adjust scope as your needs change — most clients start on Growth and scale up as results compound.",
  },
  {
    question: "Do you offer custom or one-off projects?",
    answer:
      "Yes. Beyond these retainers we take on one-off projects like a website build, a rebrand, or a campaign sprint. Tell us what you need and we'll scope a custom quote.",
  },
  {
    question: "How soon will I see results?",
    answer:
      "Paid channels can move within weeks; SEO and content compound over months. We set clear expectations and milestones up front, and you'll see progress in transparent reporting from day one.",
  },
  {
    question: "Who owns the ad accounts, creative, and data?",
    answer:
      "You do — always. We build everything in accounts you own, and you keep full access to your creative, data, and dashboards even if we part ways.",
  },
];
