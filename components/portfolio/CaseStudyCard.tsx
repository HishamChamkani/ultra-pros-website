import Link from "next/link";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LMark } from "@/components/ui/angled-divider";
import type { CaseStudy } from "@/content/case-studies";

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Card hoverable className="group h-full overflow-hidden">
      <Link href={`/portfolio/${caseStudy.slug}`} className="flex h-full flex-col">
        {/* Placeholder visual — no real case-study imagery yet */}
        <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-brand-navy to-brand-navy-tint">
          <LMark aria-hidden className="absolute right-3 top-3 h-6 w-6 opacity-80" />
          <span className="px-4 text-center font-heading text-3xl font-bold text-white/25">
            {caseStudy.client}
          </span>
          <span className="absolute bottom-3 left-3">
            <Badge variant="solid" clipped>
              {caseStudy.industry}
            </Badge>
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <p className="font-heading text-sm font-semibold text-brand-navy">
            {caseStudy.client}
          </p>
          <p className="mt-1 font-heading text-lg font-bold leading-snug text-brand-navy">
            {caseStudy.resultHeadline}
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
