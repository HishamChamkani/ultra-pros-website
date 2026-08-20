/**
 * About Us content (CLAUDE.md §7 — typed copy, brand voice per BRAND_GUIDELINES §5).
 * Team members live in content/team.ts.
 */
import type { Stat } from "@/content/home";

export const aboutHero = {
  eyebrow: "About Ultra Pros",
  title: "We're the growth partner brands actually keep.",
  paragraph:
    "Our mission is simple: turn marketing from a cost center into your most reliable growth engine. No vanity metrics, no jargon — just strategy, speed, and numbers you can trust.",
} as const;

export const story = {
  eyebrow: "Since 2018",
  title: "Built to move fast — and make it count",
  paragraphs: [
    "Ultra Pros started in 2018 with a simple frustration: too many agencies sold activity instead of outcomes. Reports full of impressions, light on revenue. We set out to be the opposite.",
    "Since then we've grown into a full-funnel team — paid, SEO, social, web, and creative under one roof — helping 200+ brands turn traffic into real business results. We ship fast, iterate weekly, and treat every budget like it's our own.",
    "The market changes constantly. Our edge is refusing to stand still: we test, learn, and adapt faster than the platforms do.",
  ],
} as const;

export type ValueIconKey =
  | "lightbulb"
  | "shield-check"
  | "eye"
  | "sparkles"
  | "heart-handshake";

export type Value = {
  icon: ValueIconKey;
  title: string;
  description: string;
};

export const values: Value[] = [
  {
    icon: "lightbulb",
    title: "Innovation",
    description:
      "We test, learn, and adapt faster than the platforms change. Yesterday's playbook doesn't win tomorrow's market.",
  },
  {
    icon: "shield-check",
    title: "Integrity",
    description:
      "We only recommend what we'd do with our own money. If it won't move your numbers, we won't sell it.",
  },
  {
    icon: "eye",
    title: "Transparency",
    description:
      "Live dashboards and plain-English reviews. You always know what's working and exactly where your budget goes.",
  },
  {
    icon: "sparkles",
    title: "Creativity",
    description:
      "Sharp, on-brand ideas grounded in data — creative that stops the scroll and drives the click.",
  },
  {
    icon: "heart-handshake",
    title: "Commitment",
    description:
      "We're in it for the long game. Your growth is the scoreboard we actually care about.",
  },
];

export const aboutStats: Stat[] = [
  { value: 8, suffix: "+", label: "Years Active" },
  { value: 200, suffix: "+", label: "Clients Served" },
  { value: 30, suffix: "+", label: "Team Members" },
  { value: 95, suffix: "%", label: "Client Retention" },
];

// TODO: CEO name/role is a placeholder — confirm real leadership details with the client.
export const ceoQuote = {
  quote:
    "We don't measure ourselves by awards or impressions. We measure ourselves by whether our clients grow — and whether they'd recommend us without hesitating. That's the only scoreboard that matters.",
  name: "Imran Ultra",
  role: "Founder & CEO, Ultra Pros",
} as const;
