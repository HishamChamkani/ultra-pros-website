import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { LogoMark } from "@/components/icons/LogoMark";
import { CtaBanner } from "@/components/layout/CtaBanner";
import type { CaseStudy } from "@/content/case-studies";

export function CaseStudyDetail({
  caseStudy,
  galleryImages,
}: {
  caseStudy: CaseStudy;
  /** Real mockup images from the client's folder (see lib/portfolio.ts). */
  galleryImages: string[];
}) {
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
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/75">
            {caseStudy.summary}
          </p>

          {/* Cover image — real client asset; next/image serves responsive sizes. */}
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-lg bg-brand-navy-tint">
            <LogoMark className="pointer-events-none absolute right-4 top-4 z-10 h-7 w-7 opacity-90 drop-shadow-[0_1px_2px_rgba(20,34,50,0.5)]" />
            <Image
              src={caseStudy.cover}
              alt={`${caseStudy.client} case study cover`}
              fill
              sizes="(min-width: 1024px) 960px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Case study story — PLACEHOLDER until the client writes the real copy. */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading eyebrow="Case Study" title="The full story is coming soon" className="mb-6" />
          <div className="rounded-lg border border-dashed border-brand-border bg-brand-surface p-8">
            <p className="text-lg leading-relaxed text-brand-text-secondary">
              The detailed write-up for {caseStudy.client}, the challenge, our
              strategy, and the results, is being finalized with the client.
              Check back soon, or explore the work below.
            </p>
            {/* TODO: replace with real, client-approved challenge → strategy →
                results copy. Do not add fabricated metrics/stats. */}
          </div>
        </div>
      </section>

      {/* Gallery — real mockups pulled from the client's image folder. */}
      {galleryImages.length > 0 && (
        <section className="bg-brand-surface">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <SectionHeading eyebrow="Gallery" title="A look at the work" className="mb-10" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((src, index) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] overflow-hidden rounded-md border border-brand-border bg-brand-navy"
                >
                  <Image
                    src={src}
                    alt={`${caseStudy.client} — mockup ${index + 1}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner
        title="Want results like these?"
        subtitle="Book a free consultation and we'll map out what's possible for your business."
        cta={{ label: "Book a Consultation", href: "/contact" }}
        tone="yellow"
      />
    </>
  );
}
