import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { industriesServed } from "@/content/site";

/**
 * "Industries We Serve" — a simple badge grid of the sectors Ultra Pros works
 * across. Shares its data (content/site.ts) with the homepage IndustriesStrip.
 */
export function IndustriesServed() {
  return (
    <section className="bg-brand-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          align="center"
          eyebrow="Industries we serve"
          title="Growth expertise across sectors"
          subtitle="We've delivered results for brands in a wide range of industries, and we speak each one's language."
          className="mx-auto mb-12"
        />
        <ul className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-3">
          {industriesServed.map((industry) => (
            <li key={industry}>
              <Badge variant="outline" clipped className="px-4 py-2 text-sm">
                {industry}
              </Badge>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
