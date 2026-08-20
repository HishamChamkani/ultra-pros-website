import { cn } from "@/lib/utils";
import { StatCounter } from "@/components/ui/stat-counter";
import type { Stat } from "@/content/home";

export interface StatsBandProps {
  stats: Stat[];
  /** `navy` = Oxford Blue band (default), `surface` = light band. */
  tone?: "navy" | "surface";
  className?: string;
}

/**
 * Reusable animated stats band (shared section — CLAUDE.md §7).
 * Used on the home page and the About page.
 */
export function StatsBand({ stats, tone = "navy", className }: StatsBandProps) {
  const isNavy = tone === "navy";
  return (
    <section className={cn(isNavy ? "bg-brand-navy" : "bg-brand-surface", className)}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCounter
              key={stat.label}
              tone={isNavy ? "dark" : "light"}
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              decimals={stat.decimals}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
