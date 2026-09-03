import {
  Layers,
  LineChart,
  Sparkles,
  Target,
  UserCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { whyUltraPros, type ValueProp } from "@/content/home";

const valueIcons: Record<ValueProp["icon"], LucideIcon> = {
  target: Target,
  "user-check": UserCheck,
  zap: Zap,
  layers: Layers,
  "line-chart": LineChart,
  sparkles: Sparkles,
};

export function WhyUltraPros() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          align="center"
          eyebrow="Why Ultra Pros"
          title="Fast, confident, results-obsessed"
          subtitle="No fluff, just a team built to make your marketing work harder."
          className="mx-auto mb-12"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUltraPros.map((value) => {
            const Icon = valueIcons[value.icon];
            return (
              <Card key={value.title} variant="surface" className="p-6">
                {/* Brand-yellow tinted circle gives the icons more visual
                    weight so they read as custom, not generic outline icons. */}
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-yellow/15 text-brand-yellow-hover">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-brand-navy">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-text-secondary">
                  {value.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
