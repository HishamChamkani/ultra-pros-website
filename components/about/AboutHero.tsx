import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { aboutHero } from "@/content/about";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-brand-yellow-tint blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        <span className="mb-5 inline-flex items-center gap-2 rounded-sm bg-brand-yellow-tint px-3 py-1.5 font-heading text-xs font-medium uppercase tracking-[0.05em] text-brand-navy">
          <span className="h-2.5 w-2.5 bg-brand-yellow corner-clip" aria-hidden />
          {aboutHero.eyebrow}
        </span>
        <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
          {aboutHero.title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-text-secondary">
          {aboutHero.paragraph}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
          >
            Book a Consultation
          </Link>
          <Link
            href="/services"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            Explore our services
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
