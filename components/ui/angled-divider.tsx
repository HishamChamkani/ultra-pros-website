import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * The angular "L / flag" logo mark, rebuilt as inline SVG so it can be recolored
 * (via `currentColor`) and animated. Defaults to brand yellow. Sharp corners
 * only — this angularity is a core brand motif (BRAND_GUIDELINES §2).
 */
export function LMark({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={cn("text-brand-yellow", className)}
      {...props}
    >
      <rect x="4" y="2" width="6" height="16" />
      <rect x="4" y="14" width="14" height="6" />
      <rect x="13" y="6" width="6" height="6" />
    </svg>
  );
}

export interface AngledDividerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** `line` = section separator with a yellow angled cap; `mark` = just the L motif. */
  variant?: "line" | "mark";
  align?: "left" | "center";
}

/**
 * AngledDivider (PROMPTS §Prompt 1) — a clipped-corner shape that echoes the logo
 * motif, usable as a section decoration or a separator between content blocks.
 */
export function AngledDivider({
  variant = "line",
  align = "left",
  className,
  ...props
}: AngledDividerProps) {
  if (variant === "mark") {
    return <LMark className={cn("h-6 w-6", className)} />;
  }

  return (
    <div
      role="separator"
      className={cn("flex w-full items-center gap-3", className)}
      {...props}
    >
      {align === "center" ? (
        <span className="h-px flex-1 bg-brand-border" />
      ) : null}
      <span className="h-1.5 w-10 shrink-0 bg-brand-yellow corner-clip" aria-hidden />
      <span className="h-px flex-1 bg-brand-border" />
    </div>
  );
}
