import { Check, Minus } from "lucide-react";

import { cn } from "@/lib/utils";
import { tiers, comparisonRows, type ComparisonValue } from "@/content/pricing";

function Cell({ value }: { value: ComparisonValue }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center text-brand-success">
        <Check className="h-5 w-5" aria-label="Included" />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center text-brand-text-secondary/50">
        <Minus className="h-5 w-5" aria-label="Not included" />
      </span>
    );
  }
  return <span className="text-sm font-medium text-brand-navy">{value}</span>;
}

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-left">
        <caption className="sr-only">Feature comparison across pricing tiers</caption>
        <thead>
          <tr className="border-b border-brand-border">
            <th scope="col" className="py-4 pr-4 font-heading text-sm font-semibold text-brand-navy">
              Features
            </th>
            {tiers.map((tier) => (
              <th
                key={tier.id}
                scope="col"
                className={cn(
                  "px-4 py-4 text-center font-heading text-base font-bold",
                  tier.highlighted
                    ? "rounded-t-md bg-brand-yellow-tint text-brand-navy"
                    : "text-brand-navy",
                )}
              >
                {tier.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row) => (
            <tr key={row.feature} className="border-b border-brand-border">
              <th
                scope="row"
                className="py-4 pr-4 text-sm font-medium text-brand-text-secondary"
              >
                {row.feature}
              </th>
              {row.values.map((value, i) => (
                <td
                  key={i}
                  className={cn(
                    "px-4 py-4 text-center",
                    tiers[i].highlighted && "bg-brand-yellow-tint/40",
                  )}
                >
                  <Cell value={value} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 text-xs text-brand-text-secondary">
        *Unlimited content is subject to a fair-use policy. Pricing shown is
        indicative, final scope and rates are confirmed during your consultation.
      </p>
    </div>
  );
}
