import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceDetailTemplate } from "@/components/services/ServiceDetailTemplate";
import { getService, serviceSlugs } from "@/content/services";

type Params = { slug: string };

// Statically render every service page at build time.
export function generateStaticParams(): Params[] {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.blurb,
    alternates: { canonical: service.href },
    openGraph: {
      title: `${service.title} | Ultra Pros`,
      description: service.blurb,
      url: service.href,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return <ServiceDetailTemplate service={service} />;
}
