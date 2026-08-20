import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { LMark } from "@/components/ui/angled-divider";
import { featuredCaseStudies } from "@/content/home";

export function FeaturedCaseStudies() {
  return (
    <section className="bg-brand-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Proof, not promises"
            title="Results we've delivered"
            subtitle="A snapshot of the outcomes our clients care about most."
            className="max-w-2xl"
          />
          <Link
            href="/portfolio"
            className="inline-flex shrink-0 items-center gap-1 font-heading text-sm font-semibold text-brand-navy transition-colors hover:text-brand-yellow-hover"
          >
            View all case studies
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCaseStudies.map((study) => (
            <Card key={study.slug} hoverable className="group overflow-hidden">
              <Link href={`/portfolio/${study.slug}`} className="block">
                {/* Placeholder visual — no real case-study imagery yet */}
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-brand-navy to-brand-navy-tint">
                  <LMark
                    aria-hidden
                    className="absolute right-3 top-3 h-6 w-6 opacity-80"
                  />
                  <span className="font-heading text-4xl font-bold text-white/25">
                    {study.client}
                  </span>
                  <span className="absolute bottom-3 left-3">
                    <Badge variant="solid" clipped>
                      {study.industry}
                    </Badge>
                  </span>
                </div>

                <div className="p-5">
                  <p className="font-heading text-sm font-semibold text-brand-navy">
                    {study.client}
                  </p>
                  <p className="mt-1 font-heading text-lg font-bold leading-snug text-brand-navy">
                    {study.result}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
