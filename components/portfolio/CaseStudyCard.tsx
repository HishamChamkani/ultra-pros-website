import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LogoMark } from "@/components/icons/LogoMark";
import type { CaseStudy } from "@/content/case-studies";

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Card hoverable className="group h-full overflow-hidden">
      <Link href={`/portfolio/${caseStudy.slug}`} className="flex h-full flex-col">
        {/* Cover image — real client asset (next/image optimizes the large source PNGs). */}
        <div className="relative aspect-[16/10] overflow-hidden bg-brand-navy">
          <Image
            src={caseStudy.cover}
            alt={`${caseStudy.client} — case study cover`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent"
          />
          <LogoMark className="pointer-events-none absolute right-3 top-3 z-10 h-6 w-6 opacity-90 drop-shadow-[0_1px_2px_rgba(20,34,50,0.5)]" />
          <span className="absolute bottom-3 left-3 z-10">
            <Badge variant="solid" clipped>
              {caseStudy.industry}
            </Badge>
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <p className="font-heading text-lg font-bold leading-snug text-brand-navy">
            {caseStudy.client}
          </p>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-text-secondary">
            {caseStudy.summary}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {caseStudy.services.map((service) => (
              <Badge key={service} variant="outline">
                {service}
              </Badge>
            ))}
          </div>
        </div>
      </Link>
    </Card>
  );
}
