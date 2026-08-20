import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Badge / Tag (BRAND_GUIDELINES §6) — small label for case-study categories, etc.
 * Slightly rounded, never a full pill. Set `clipped` for the angled-corner
 * variant that echoes the logo motif.
 */
const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-sm px-2.5 py-1 font-heading text-xs font-semibold uppercase tracking-[0.05em]",
  {
    variants: {
      variant: {
        solid: "bg-brand-yellow text-brand-navy",
        tint: "bg-brand-yellow-tint text-brand-navy",
        navy: "bg-brand-navy text-white",
        outline: "border border-brand-border bg-white text-brand-navy",
      },
      clipped: {
        true: "rounded-none corner-clip",
        false: "",
      },
    },
    defaultVariants: {
      variant: "tint",
      clipped: false,
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, clipped, ...props }: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant, clipped }), className)}
      {...props}
    />
  );
}
