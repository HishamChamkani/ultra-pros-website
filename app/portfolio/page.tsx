import { SectionHeading } from "@/components/ui/section-heading";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Portfolio",
  description:
    "Real results from Ultra Pros, case studies across e-commerce, healthcare, real estate, SaaS, retail, restaurant, fitness, and education. Filter by industry and service.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            as="h1"
            eyebrow="Our Work"
            title="Results we're proud of"
            subtitle="Real campaigns, real numbers. Filter by industry or service to find work like yours."
            className="mb-12 max-w-2xl"
          />
          <PortfolioGrid />
        </div>
      </section>

      <CtaBanner
        title="Your business could be next"
        subtitle="Book a free consultation and let's talk about the results you want."
        cta={{ label: "Book a Consultation", href: "/contact" }}
        tone="yellow"
      />
    </>
  );
}
