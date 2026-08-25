import {
  Cpu,
  Palette,
  Stethoscope,
  Sparkles,
  Pill,
  Code,
  type LucideIcon,
} from "lucide-react";

import { industriesServed } from "@/content/site";

/**
 * Lightweight "Industries we serve" strip for the homepage, sitting just below
 * the trust bar. Labels are the shared list (content/site.ts); the icon map
 * below pairs each with the closest lucide glyph (Mikado Yellow accent per
 * BRAND_GUIDELINES §3).
 */
const industryIcons: Record<(typeof industriesServed)[number], LucideIcon> = {
  Electronics: Cpu,
  "Arts & Crafts": Palette,
  "Medical Equipment & Supplies": Stethoscope,
  "Beauty & Personal Care": Sparkles,
  "Healthcare & Pharmaceutical": Pill,
  "Information Technology": Code,
};

export function IndustriesStrip() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-center font-heading text-xs font-medium uppercase tracking-[0.05em] text-brand-text-secondary">
          Industries we serve
        </p>
        <ul className="mx-auto mt-6 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {industriesServed.map((industry) => {
            const Icon = industryIcons[industry];
            return (
              <li
                key={industry}
                className="flex flex-col items-center gap-2 text-center"
              >
                <Icon
                  className="h-8 w-8 text-brand-yellow"
                  strokeWidth={2}
                  aria-hidden
                />
                <span className="text-xs font-medium text-brand-navy sm:text-sm">
                  {industry}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
