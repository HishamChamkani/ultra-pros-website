import {
  Eye,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { values, type ValueIconKey } from "@/content/about";

const valueIcons: Record<ValueIconKey, LucideIcon> = {
  lightbulb: Lightbulb,
  "shield-check": ShieldCheck,
  eye: Eye,
  sparkles: Sparkles,
  "heart-handshake": HeartHandshake,
};

export function Values() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          align="center"
          eyebrow="What we stand for"
          title="The values behind the work"
          subtitle="Five principles that shape every campaign, call, and report."
          className="mx-auto mb-12"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((value) => {
            const Icon = valueIcons[value.icon];
            return (
              <Card key={value.title} variant="surface" className="p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-white text-brand-yellow-hover shadow-sm">
                  <Icon className="h-5 w-5" aria-hidden />
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
