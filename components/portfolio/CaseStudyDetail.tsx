import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatCounter } from "@/components/ui/stat-counter";
import { LogoMark } from "@/components/icons/LogoMark";
import { CtaBanner } from "@/components/layout/CtaBanner";
import type { CaseStudy } from "@/content/case-studies";

export function CaseStudyDetail({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
              <li>
                <Link href="/" className="transition-colors hover:text-brand-yellow">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link
                  href="/portfolio"
                  className="transition-colors hover:text-brand-yellow"
                >
                  Portfolio
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-white" aria-current="page">
                {caseStudy.client}
              </li>
            </ol>
          </nav>

          <div className="flex flex-wrap gap-1.5">
            <Badge variant="solid">{caseStudy.industry}</Badge>
            {caseStudy.services.map((service) => (
              <Badge key={service} variant="navy">
                {service}
              </Badge>
            ))}
          </div>

          <h1 className="mt-5 font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            {caseStudy.client}
          </h1>
          <p className="mt-3 font-heading text-2xl font-bold text-brand-yellow sm:text-3xl">
            {caseStudy.resultHeadline}
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/75">
            {caseStudy.summary}
          </p>

          {/* Cover image — STOCK/PLACEHOLDER asset, not real client work. Replace before launch. */}
          <div className="relative mt-10 aspect-[16/7] overflow-hidden rounded-lg bg-brand-navy-tint">
            <LogoMark className="pointer-events-none absolute right-4 top-4 z-10 h-7 w-7 opacity-90 drop-shadow-[0_1px_2px_rgba(20,34,50,0.5)]" />
            <Image
              src={caseStudy.cover}
              alt={`${caseStudy.client} case study`}
              fill
              sizes="(min-width: 1024px) 960px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading eyebrow="The Challenge" title="Where they started" className="mb-6" />
          <p className="text-lg leading-relaxed text-brand-text-secondary">
            {caseStudy.challenge}
          </p>
        </div>
      </section>

      {/* Our Strategy */}
      <section className="bg-brand-surface">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading eyebrow="Our Strategy" title="What we did" className="mb-6" />
          <p className="text-lg leading-relaxed text-brand-text-secondary">
            {caseStudy.strategyIntro}
          </p>
          <ul className="mt-6 space-y-3">
            {caseStudy.strategyPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-brand-yellow-tint text-brand-navy">
                  <Check className="h-4 w-4" aria-hidden />
                </span>
                <span className="text-brand-navy">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The Results */}
      <section className="bg-brand-navy">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            tone="dark"
            align="center"
            eyebrow="The Results"
            title="Numbers that moved"
            className="mx-auto mb-12"
          />
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
            {caseStudy.metrics.map((metric) => (
              <StatCounter
                key={metric.label}
                tone="dark"
                value={metric.value}
                prefix={metric.prefix}
                suffix={metric.suffix}
                decimals={metric.decimals}
                label={metric.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading eyebrow="Gallery" title="A look at the work" className="mb-10" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudy.gallery.map((label) => (
              <div
                key={label}
                className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-md border border-brand-border bg-gradient-to-br from-brand-navy to-brand-navy-tint"
              >
                <LogoMark className="pointer-events-none absolute right-3 top-3 h-5 w-5 opacity-90 drop-shadow-[0_1px_2px_rgba(20,34,50,0.5)]" />
                <span className="px-4 text-center font-heading text-lg font-semibold text-white/70">
                  {label}
                </span>
              </div>
            ))}
          </div>
          {/* TODO: replace placeholder gallery tiles with real project imagery. */}
        </div>
      </section>

      <CtaBanner
        title="Want results like these?"
        subtitle="Book a free consultation and we'll map out what's possible for your business."
        cta={{ label: "Book a Consultation", href: "/contact" }}
        tone="yellow"
      />
    </>
  );
}
