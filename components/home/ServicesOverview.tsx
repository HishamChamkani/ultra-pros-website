import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { serviceIcons } from "@/components/ui/service-icons";
import { services } from "@/content/site";

export function ServicesOverview() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          align="center"
          eyebrow="What we do"
          title="Full-funnel marketing, one team"
          subtitle="Every channel you need to grow — strategized, executed, and reported under one roof."
          className="mx-auto mb-12"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];
            return (
              <Card key={service.slug} hoverable className="group">
                <Link href={service.href} className="block p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-brand-yellow-tint text-brand-navy transition-colors group-hover:bg-brand-yellow">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-brand-navy">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-text-secondary">
                    {service.blurb}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 font-heading text-sm font-semibold text-brand-navy transition-colors group-hover:text-brand-yellow-hover">
                    Learn more
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
