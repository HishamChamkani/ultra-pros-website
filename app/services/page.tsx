import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { serviceIcons } from "@/components/ui/service-icons";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/content/services";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Full-service digital solutions from Ultra Pros, social media marketing, e-commerce, branding & designing, video editing, web & app development, and software development & AI automations.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            as="h1"
            align="center"
            eyebrow="Our Services"
            title="Marketing services that drive growth"
            subtitle="Six disciplines, one team, one goal, measurable results for your business. Explore how each service turns effort into revenue."
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
                    <h2 className="mt-5 font-heading text-xl font-semibold text-brand-navy">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-brand-text-secondary">
                      {service.blurb}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 font-heading text-sm font-semibold text-brand-navy transition-colors group-hover:text-brand-yellow-hover">
                      Explore {service.title}
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

      <CtaBanner
        title="Not sure where to start?"
        subtitle="Tell us your goals and we'll recommend the right mix, no pressure, no jargon."
        cta={{ label: "Book a Consultation", href: "/contact" }}
        tone="yellow"
      />
    </>
  );
}
