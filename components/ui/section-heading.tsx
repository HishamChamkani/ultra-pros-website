import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * SectionHeading (BRAND_GUIDELINES §4 type scale).
 * Montserrat uppercase eyebrow label + H2 + optional subtext.
 */
export interface SectionHeadingProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  /** Heading level for the title element. Defaults to h2. */
  as?: "h1" | "h2" | "h3";
  /** `light` for light backgrounds (default), `dark` for navy sections. */
  tone?: "light" | "dark";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  as: Heading = "h2",
  tone = "light",
  className,
  ...props
}: SectionHeadingProps) {
  const isDark = tone === "dark";
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
      {...props}
    >
      {eyebrow ? (
        <span
          className={cn(
            "mb-4 inline-block font-montserrat text-sm font-medium uppercase tracking-[0.05em]",
            isDark ? "text-white" : "text-brand-navy",
          )}
        >
          {eyebrow}
        </span>
      ) : null}

      <Heading
        className={cn(
          "font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[44px]",
          isDark ? "text-white" : "text-brand-navy",
        )}
      >
        {title}
      </Heading>

      {subtitle ? (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            isDark ? "text-white/75" : "text-brand-text-secondary",
            align === "center" && "max-w-2xl",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
