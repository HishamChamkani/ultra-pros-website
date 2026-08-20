import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Brand button (BRAND_GUIDELINES §6).
 * - primary   = Mikado Yellow bg / Oxford Blue text (brand signature CTA)
 * - secondary = Oxford Blue bg / white text
 * - outline   = Oxford Blue outline / navy text
 * - ghost     = transparent, navy text
 * Corners are 8px (rounded-md) — never fully pill-shaped, to keep the angular feel.
 *
 * Exports `buttonVariants` so links can share the style:
 *   <Link className={buttonVariants({ variant: "primary" })}>…</Link>
 */
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-heading font-semibold whitespace-nowrap transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-brand-yellow text-brand-navy hover:bg-brand-yellow-hover",
        secondary: "bg-brand-navy text-white hover:bg-brand-navy-tint",
        outline:
          "border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white",
        ghost: "text-brand-navy hover:bg-brand-surface",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-[15px]",
        lg: "h-12 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";

export { Button };
