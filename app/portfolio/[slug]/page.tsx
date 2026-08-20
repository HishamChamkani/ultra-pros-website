import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyDetail } from "@/components/portfolio/CaseStudyDetail";
import { getCaseStudy, caseStudySlugs } from "@/content/case-studies";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) return {};

  const title = `${caseStudy.client} — ${caseStudy.resultHeadline}`;
  return {
    title,
    description: caseStudy.summary,
    alternates: { canonical: `/portfolio/${caseStudy.slug}` },
    openGraph: {
      title: `${title} | Ultra Pros`,
      description: caseStudy.summary,
      url: `/portfolio/${caseStudy.slug}`,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) notFound();

  return <CaseStudyDetail caseStudy={caseStudy} />;
}
