import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/content/site";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { IndustriesStrip } from "@/components/home/IndustriesStrip";
import { StatsBand } from "@/components/layout/StatsBand";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { FeaturedCaseStudies } from "@/components/home/FeaturedCaseStudies";
import { WhyUltraPros } from "@/components/home/WhyUltraPros";
import { Testimonials } from "@/components/home/Testimonials";
import { BlogPreview } from "@/components/home/BlogPreview";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { finalCta, stats } from "@/content/home";

const HOME_TITLE = "Ultra Pros | Digital Marketing Agency";

export const metadata: Metadata = {
  // `absolute` avoids the layout title template appending "| Ultra Pros" again.
  title: { absolute: HOME_TITLE },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Ultra Pros",
    title: HOME_TITLE,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: siteConfig.description,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo/ultra-pros-logo.png`,
  description: siteConfig.description,
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phone,
  address: {
    "@type": "PostalAddress",
    ...siteConfig.contact.postalAddress,
  },
  sameAs: siteConfig.socials.map((social) => social.href),
};

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <Hero />
      <TrustBar />
      <StatsBand stats={stats} />
      <ServicesOverview />
      <IndustriesStrip />
      <FeaturedCaseStudies />
      <WhyUltraPros />
      <Testimonials />
      <BlogPreview />
      <CtaBanner
        title={finalCta.title}
        subtitle={finalCta.subtitle}
        cta={finalCta.cta}
        tone="yellow"
        openModal
      />
    </>
  );
}
