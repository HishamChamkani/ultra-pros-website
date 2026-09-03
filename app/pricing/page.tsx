import { SectionHeading } from "@/components/ui/section-heading";
import { PricingTiers } from "@/components/pricing/PricingTiers";
import { ComparisonTable } from "@/components/pricing/ComparisonTable";
import { PricingFaq } from "@/components/pricing/PricingFaq";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Pricing",
  description:
    "Simple, transparent digital marketing packages from Ultra Pros, Starter, Growth, and Scale. Compare features and find the plan that fits your goals.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      {/* Tiers */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            as="h1"
            align="center"
            eyebrow="Pricing"
            title="Plans that scale with you"
            subtitle="Transparent monthly packages, no setup fees, no long-term lock-in. Pick a starting point and grow from there."
            className="mx-auto mb-14"
          />
          <PricingTiers />
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-brand-surface">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Compare plans"
            title="Everything, side by side"
            className="mb-10"
          />
          <ComparisonTable />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered"
            className="mb-8"
          />
          <PricingFaq />
        </div>
      </section>

      <CtaBanner
        title="Need something custom? Let's talk."
        subtitle="Every business is different. Tell us your goals and we'll build a plan around them."
        cta={{ label: "Book a Consultation", href: "/contact" }}
        tone="yellow"
      />
    </>
  );
}
