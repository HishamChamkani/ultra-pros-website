import Link from "next/link";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { tiers } from "@/content/pricing";

export function PricingTiers() {
  return (
    <div className="grid gap-6 lg:grid-cols-3 lg:items-start">
      {tiers.map((tier) => {
        const highlighted = tier.highlighted;
        return (
          <div
            key={tier.id}
            className={cn(
              "relative flex h-full flex-col rounded-lg bg-white p-8",
              highlighted
                ? "border-2 border-brand-yellow shadow-xl lg:-mt-4 lg:pt-12"
                : "border border-brand-border",
            )}
          >
            {highlighted ? (
              <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                <Badge variant="solid" clipped>
                  Most Popular
                </Badge>
              </span>
            ) : null}

            <h3 className="font-heading text-xl font-bold text-brand-navy">
              {tier.name}
            </h3>
            <p className="mt-2 min-h-[2.5rem] text-sm leading-relaxed text-brand-text-secondary">
              {tier.description}
            </p>

            <div className="mt-6">
              <span className="font-heading text-4xl font-bold text-brand-navy">
                ${tier.priceUSD.toLocaleString("en-US")}
              </span>
              <span className="text-brand-text-secondary"> / mo</span>
              <p className="mt-1 text-sm text-brand-text-secondary/80">
                ≈ PKR {tier.pricePKR.toLocaleString("en-US")}/mo
              </p>
            </div>

            <Link
              href={tier.cta.href}
              className={cn(
                buttonVariants({
                  variant: highlighted ? "primary" : "outline",
                  size: "lg",
                }),
                "mt-6 w-full",
              )}
            >
              {tier.cta.label}
            </Link>

            <ul className="mt-8 space-y-3 border-t border-brand-border pt-6">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm bg-brand-yellow-tint text-brand-navy">
                    <Check className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <span className="text-sm text-brand-navy">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
