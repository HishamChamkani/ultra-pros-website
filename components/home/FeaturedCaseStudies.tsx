import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { LogoMark } from "@/components/icons/LogoMark";
import { featuredCaseStudies } from "@/content/home";
import { getCaseStudy } from "@/content/case-studies";

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
                {/* Cover image — STOCK/PLACEHOLDER asset, not real client work. Replace before launch. */}
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-navy">
                  <Image
                    src={getCaseStudy(study.slug)?.cover ?? ""}
                    alt={`${study.client} — ${study.result}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent"
                  />
                  <LogoMark className="pointer-events-none absolute right-3 top-3 z-10 h-6 w-6 opacity-90 drop-shadow-[0_1px_2px_rgba(20,34,50,0.5)]" />
                  <span className="absolute bottom-3 left-3 z-10">
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
