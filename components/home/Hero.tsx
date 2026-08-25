import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { BookConsultationButton } from "@/components/consultation/BookConsultationButton";
import { LogoMark } from "@/components/icons/LogoMark";
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

        {/* Visual — looping hero video.
            NOTE: /public/videos/hero-loop.mp4 is a STOCK/PLACEHOLDER clip sourced
            from the internet, NOT real Ultra Pros client footage. Replace with real
            client work before public launch. */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-lg border border-brand-border bg-brand-navy shadow-xl">
            <LogoMark className="pointer-events-none absolute right-5 top-5 z-10 h-7 w-7 opacity-90 drop-shadow-[0_1px_2px_rgba(20,34,50,0.5)]" />
            <video
              className="aspect-[4/3] h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              aria-hidden
            >
              <source src="/videos/hero-loop.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
