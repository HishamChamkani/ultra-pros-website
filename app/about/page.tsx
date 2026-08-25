import { AboutHero } from "@/components/about/AboutHero";
import { Story } from "@/components/about/Story";
import { Values } from "@/components/about/Values";
import { IndustriesServed } from "@/components/about/IndustriesServed";
import { Team } from "@/components/about/Team";
import { CeoQuote } from "@/components/about/CeoQuote";
import { StatsBand } from "@/components/layout/StatsBand";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { buildMetadata } from "@/lib/seo";
import { aboutStats } from "@/content/about";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Meet Ultra Pros — a performance-driven digital marketing agency since 2018. Our mission, values, team, and the numbers behind our work.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Story />
      <Values />
      <IndustriesServed />
      <StatsBand stats={aboutStats} />
      <Team />
      <CeoQuote />
      <CtaBanner
        title="Let's build your growth story"
        subtitle="Book a free consultation and see what a team obsessed with results can do for you."
        cta={{ label: "Book a Consultation", href: "/contact" }}
        tone="yellow"
      />
    </>
  );
}
