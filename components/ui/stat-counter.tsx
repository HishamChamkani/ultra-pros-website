"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";

import { cn } from "@/lib/utils";

function format(value: number, decimals: number) {
  return Number(value.toFixed(decimals)).toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export interface StatCounterProps {
  /** Target number to count up to, e.g. 200. */
  value: number;
  prefix?: string;
  /** e.g. "+", "%", "M", "K+". */
  suffix?: string;
  /** Static text override — renders verbatim instead of the animated count-up. */
  text?: string;
  label: string;
  /** Animation duration in seconds. */
  duration?: number;
  decimals?: number;
  /** `light` for light backgrounds (navy number), `dark` for navy sections (yellow number). */
  tone?: "light" | "dark";
  /** De-emphasize: smaller number + muted color, so a context stat (e.g. the
   *  founding year) doesn't sit at equal visual weight next to headline metrics. */
  muted?: boolean;
  className?: string;
}

/**
 * StatCounter (BRAND_GUIDELINES §4 / PROMPTS §Prompt 1).
 * Animates 0 → value the first time it scrolls into view (Framer Motion),
 * honoring prefers-reduced-motion by jumping straight to the final number.
 */
export function StatCounter({
  value,
  prefix = "",
  suffix = "",
  text,
  label,
  duration = 2,
  decimals = 0,
  tone = "light",
  muted = false,
  className,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(() => format(0, decimals));

  // Reflect the motion value into rendered text via its change listener
  // (keeps setState out of the effect body — Next 16 lint rule).
  useEffect(() => {
    const unsubscribe = count.on("change", (latest) =>
      setDisplay(format(latest, decimals)),
    );
    return unsubscribe;
  }, [count, decimals]);

  useEffect(() => {
    if (!inView) return;
    if (shouldReduce) {
      count.set(value);
      return;
    }
    const controls = animate(count, value, { duration, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, value, duration, shouldReduce, count]);

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <div
        className={cn(
          "font-heading font-bold tracking-tight",
          muted ? "text-2xl sm:text-3xl" : "text-4xl sm:text-5xl",
          muted
            ? tone === "dark"
              ? "text-white/50"
              : "text-brand-text-secondary"
            : tone === "dark"
              ? "text-brand-yellow"
              : "text-brand-navy",
        )}
      >
        {text ?? (
          <>
            {prefix}
            {display}
            {suffix}
          </>
        )}
      </div>
      {label ? (
        <div
          className={cn(
            "mt-2 text-sm font-medium uppercase tracking-[0.05em]",
            tone === "dark" ? "text-white/70" : "text-brand-text-secondary",
          )}
        >
          {label}
        </div>
      ) : null}
    </div>
  );
}
