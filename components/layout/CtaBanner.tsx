import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { BookConsultationButton } from "@/components/consultation/BookConsultationButton";

export interface CtaBannerProps {
  title: string;
  subtitle?: string;
  cta: { label: string; href: string };
  /** `yellow` = Mikado Yellow band (navy button); `navy` = Oxford Blue band (yellow button). */
  tone?: "yellow" | "navy";
  /** When true, the button opens the consultation modal instead of linking to `cta.href`. */
  openModal?: boolean;
  className?: string;
}

/**
 * Reusable full-width CTA banner (shared section — CLAUDE.md §7).
 * Used as the homepage's closing CTA and reusable on other pages.
 */
export function CtaBanner({
  title,
  subtitle,
  cta,
  tone = "yellow",
  openModal = false,
  className,
}: CtaBannerProps) {
  const isYellow = tone === "yellow";
  const buttonVariant = isYellow ? "secondary" : "primary";
  return (
    <section
      className={cn(
        isYellow ? "bg-brand-yellow" : "bg-brand-navy",
        className,
      )}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:py-20">
        <h2
          className={cn(
            "font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-[44px]",
            isYellow ? "text-brand-navy" : "text-white",
          )}
        >
          {title}
        </h2>
        {subtitle ? (
          <p
            className={cn(
              "max-w-2xl text-lg leading-relaxed",
              isYellow ? "text-brand-navy/80" : "text-white/75",
            )}
          >
            {subtitle}
          </p>
        ) : null}
        {openModal ? (
          <BookConsultationButton variant={buttonVariant} size="lg">
            {cta.label}
          </BookConsultationButton>
        ) : (
          <Link
            href={cta.href}
            className={cn(buttonVariants({ variant: buttonVariant, size: "lg" }))}
          >
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  );
}
