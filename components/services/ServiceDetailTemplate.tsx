import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { serviceIcons } from "@/components/ui/service-icons";
import { bookConsultationHref } from "@/content/site";
import type { Service } from "@/content/services";

export function ServiceDetailTemplate({ service }: { service: Service }) {
  const Icon = serviceIcons[service.icon];

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          {/* Breadcrumb */}
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
                  href="/services"
                  className="transition-colors hover:text-brand-yellow"
                >
                  Services
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-white" aria-current="page">
                {service.title}
              </li>
            </ol>
          </nav>

          <span className="inline-flex h-14 w-14 items-center justify-center rounded-md bg-brand-yellow text-brand-navy">
            <Icon className="h-7 w-7" aria-hidden />
          </span>

          <h1 className="mt-6 font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
            {service.heroCopy}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={bookConsultationHref}
              className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
            >
              Book a Consultation
            </Link>
            <Link
              href="/services"
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "text-white hover:bg-white/10",
              )}
            >
              See all services
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="What's included"
            title="Everything you get"
            subtitle="A dedicated team and a clear scope — no vague retainers or surprise line items."
            className="mb-10"
          />
          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {service.whatsIncluded.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-brand-yellow-tint text-brand-navy">
                  <Check className="h-4 w-4" aria-hidden />
                </span>
                <span className="text-brand-navy">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="bg-brand-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="How we work"
            title="Our process"
            subtitle="A proven, transparent workflow — you always know what's happening and what's next."
            className="mb-12"
          />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.process.map((step, index) => (
              <li
                key={step.title}
                className="rounded-md border border-brand-border bg-white p-6"
              >
                <span className="font-heading text-3xl font-bold text-brand-navy">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-heading text-lg font-semibold text-brand-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-text-secondary">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Case study teaser */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="overflow-hidden rounded-lg border border-brand-border">
            <div className="grid gap-8 p-8 sm:grid-cols-[1fr_auto] sm:items-center lg:p-10">
              <div>
                <Badge variant="tint" clipped>
                  Case Study · {service.caseStudy.industry}
                </Badge>
                <p className="mt-4 font-heading text-2xl font-bold text-brand-navy">
                  {service.caseStudy.client}
                </p>
                <p className="mt-1 font-heading text-3xl font-bold text-brand-navy">
                  {service.caseStudy.result}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {service.caseStudy.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <Link
                href={`/portfolio/${service.caseStudy.slug}`}
                className={cn(buttonVariants({ variant: "outline", size: "md" }))}
              >
                Read the case study
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <CtaBanner
        title={`Ready to grow with ${service.title}?`}
        subtitle="Book a free consultation and we'll show you exactly where the opportunity is."
        cta={{ label: "Book a Consultation", href: bookConsultationHref }}
        tone="yellow"
      />
    </>
  );
}
