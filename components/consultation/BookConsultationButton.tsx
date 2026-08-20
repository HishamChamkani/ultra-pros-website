"use client";

import type { ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useConsultation } from "@/components/consultation/ConsultationModalProvider";

export interface BookConsultationButtonProps
  extends VariantProps<typeof buttonVariants> {
  className?: string;
  children?: ReactNode;
  /** Optional extra handler (e.g. close the mobile menu) run alongside opening. */
  onClick?: () => void;
}

/** Opens the global consultation modal (Calendly). */
export function BookConsultationButton({
  variant = "primary",
  size = "lg",
  className,
  children = "Book a Consultation",
  onClick,
}: BookConsultationButtonProps) {
  const { open } = useConsultation();
  return (
    <button
      type="button"
      onClick={() => {
        onClick?.();
        open();
      }}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {children}
    </button>
  );
}
