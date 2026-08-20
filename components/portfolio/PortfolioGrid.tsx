"use client";

import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";
import { CaseStudyCard } from "@/components/portfolio/CaseStudyCard";
import {
  caseStudies,
  industries,
  serviceCategories,
  type Industry,
  type ServiceCategory,
} from "@/content/case-studies";

type IndustryFilter = Industry | "All";
type ServiceFilter = ServiceCategory | "All";

function FilterRow<T extends string>({
  label,
  options,
  active,
  onSelect,
}: {
  label: string;
  options: readonly T[];
  active: T;
  onSelect: (value: T) => void;
}) {
  return (
    <div role="group" aria-label={`Filter by ${label}`} className="flex flex-col gap-2">
      <span className="font-heading text-xs font-medium uppercase tracking-[0.05em] text-brand-text-secondary">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isActive = option === active;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={isActive}
              onClick={() => onSelect(option)}
              className={cn(
                "rounded-sm border px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2",
                isActive
                  ? "border-brand-yellow bg-brand-yellow text-brand-navy"
                  : "border-brand-border bg-white text-brand-navy hover:border-brand-navy",
              )}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function PortfolioGrid() {
  const [industry, setIndustry] = useState<IndustryFilter>("All");
  const [service, setService] = useState<ServiceFilter>("All");

  const filtered = useMemo(
    () =>
      caseStudies.filter(
        (cs) =>
          (industry === "All" || cs.industry === industry) &&
          (service === "All" || cs.services.includes(service)),
      ),
    [industry, service],
  );

  return (
    <div>
      <div className="flex flex-col gap-6 sm:flex-row sm:gap-10">
        <FilterRow<IndustryFilter>
          label="Industry"
          options={["All", ...industries]}
          active={industry}
          onSelect={setIndustry}
        />
        <FilterRow<ServiceFilter>
          label="Service"
          options={["All", ...serviceCategories]}
          active={service}
          onSelect={setService}
        />
      </div>

      <p className="mt-8 text-sm text-brand-text-secondary" aria-live="polite">
        Showing {filtered.length} of {caseStudies.length} case studies
      </p>

      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((cs) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-md border border-dashed border-brand-border bg-brand-surface p-12 text-center">
          <p className="font-heading text-lg font-semibold text-brand-navy">
            No case studies match those filters
          </p>
          <button
            type="button"
            onClick={() => {
              setIndustry("All");
              setService("All");
            }}
            className="mt-3 font-heading text-sm font-semibold text-brand-navy underline decoration-brand-yellow decoration-2 underline-offset-2"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
