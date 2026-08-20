import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { BookConsultationButton } from "@/components/consultation/BookConsultationButton";
import { LMark } from "@/components/ui/angled-divider";
import { hero } from "@/content/home";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle angular background accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-yellow-tint blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
        {/* Copy */}
        <div className="flex flex-col items-start">
          <span className="mb-5 inline-flex items-center gap-2 rounded-sm bg-brand-yellow-tint px-3 py-1.5 font-heading text-xs font-medium uppercase tracking-[0.05em] text-brand-navy">
            <span className="h-2.5 w-2.5 bg-brand-yellow corner-clip" aria-hidden />
            {hero.eyebrow}
          </span>

          <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
            {hero.titleLead}{" "}
            <span className="border-b-4 border-brand-yellow text-brand-navy">
              {hero.titleAccent}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-text-secondary">
            {hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BookConsultationButton variant="primary" size="lg">
              {hero.primaryCta.label}
            </BookConsultationButton>
            <Link
              href={hero.secondaryCta.href}
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              {hero.secondaryCta.label}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>

        {/* Visual — CSS-built "campaign dashboard" placeholder (no image asset yet) */}
        <div className="relative">
          <div className="relative rounded-lg border border-brand-border bg-brand-navy p-6 shadow-xl">
            <LMark
              aria-hidden
              className="absolute right-5 top-5 h-8 w-8 opacity-90"
            />
            <p className="font-heading text-sm font-medium uppercase tracking-[0.05em] text-white/60">
              Campaign Performance
            </p>
            <p className="mt-1 font-heading text-3xl font-bold text-white">
              $181M<span className="text-brand-yellow"> revenue</span>
            </p>

            {/* Mock bar chart */}
            <div className="mt-8 flex h-40 items-end gap-3">
              {[38, 52, 44, 68, 60, 82, 100].map((h, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex-1 rounded-sm",
                    i === 6 ? "bg-brand-yellow" : "bg-white/15",
                  )}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Floating stat chip */}
          <div className="absolute -bottom-5 -left-4 flex items-center gap-2 rounded-md border border-brand-border bg-white px-4 py-3 shadow-lg sm:-left-6">
            <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-brand-success/10 text-brand-success">
              <TrendingUp className="h-5 w-5" aria-hidden />
            </span>
            <span className="text-left">
              <span className="block font-heading text-lg font-bold leading-none text-brand-navy">
                +181%
              </span>
              <span className="text-xs text-brand-text-secondary">
                avg. growth
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
