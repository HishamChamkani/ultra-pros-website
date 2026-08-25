import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

import { JsonLd } from "@/components/JsonLd";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { LogoMark } from "@/components/icons/LogoMark";
import { BlogCard } from "@/components/blog/BlogCard";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { mdxComponents } from "@/components/blog/mdx-components";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { siteConfig } from "@/content/site";
import {
  getPostBySlug,
  getPostSlugs,
  getRelatedPosts,
} from "@/lib/blog";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const { meta } = post;
  return {
    title: meta.title,
    description: meta.excerpt,
    alternates: { canonical: `/blog/${meta.slug}` },
    openGraph: {
      type: "article",
      title: `${meta.title} | Ultra Pros`,
      description: meta.excerpt,
      url: `/blog/${meta.slug}`,
      publishedTime: meta.date,
      authors: [meta.author],
      ...(meta.coverImage ? { images: [{ url: meta.coverImage }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.excerpt,
    },
  };
}

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { meta, body } = post;
  const related = getRelatedPosts(slug, meta.category);
  const url = `${siteConfig.url}/blog/${meta.slug}`;

  const { content } = await compileMDX({
    source: body,
    components: mdxComponents,
    options: { mdxOptions: { remarkPlugins: [remarkGfm] } },
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.excerpt,
    datePublished: meta.date,
    author: { "@type": "Person", name: meta.author },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo/ultra-pros-logo.png`,
      },
    },
    mainEntityOfPage: url,
    ...(meta.coverImage ? { image: `${siteConfig.url}${meta.coverImage}` } : {}),
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      {/* Article header */}
      <article>
        <header className="bg-white">
          <div className="mx-auto max-w-3xl px-4 pt-16 sm:px-6 lg:px-8 lg:pt-20">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-brand-text-secondary">
                <li>
                  <Link href="/" className="transition-colors hover:text-brand-yellow-hover">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/blog" className="transition-colors hover:text-brand-yellow-hover">
                    Blog
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-brand-navy" aria-current="page">
                  {meta.category}
                </li>
              </ol>
            </nav>

            <Badge variant="tint">{meta.category}</Badge>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight tracking-tight text-brand-navy sm:text-5xl">
              {meta.title}
            </h1>

            {/* Byline */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-navy font-heading text-sm font-bold text-white"
                aria-hidden
              >
                {initials(meta.author)}
              </span>
              <div className="text-sm">
                <p className="font-heading font-semibold text-brand-navy">
                  {meta.author}
                  {meta.authorRole ? (
                    <span className="font-normal text-brand-text-secondary">
                      {" "}
                      · {meta.authorRole}
                    </span>
                  ) : null}
                </p>
                <p className="text-brand-text-secondary">
                  {meta.dateDisplay} · {meta.readingTime}
                </p>
              </div>
            </div>

            {/* Cover placeholder */}
            <div className="relative mt-10 flex aspect-[16/7] items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-brand-navy to-brand-navy-tint">
              <LogoMark className="pointer-events-none absolute right-5 top-5 h-7 w-7 opacity-90 drop-shadow-[0_1px_2px_rgba(20,34,50,0.5)]" />
              <span className="line-clamp-3 px-8 text-center font-heading text-2xl font-bold text-white/25">
                {meta.title}
              </span>
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="bg-white">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
            {content}

            <div className="mt-12 border-t border-brand-border pt-6">
              <ShareButtons title={meta.title} url={url} />
            </div>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 ? (
        <section className="bg-brand-surface">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <SectionHeading eyebrow="Keep reading" title="Related posts" className="mb-10" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBanner
        title="Ready to put this into action?"
        subtitle="Book a free consultation and we'll build a plan around your goals."
        cta={{ label: "Book a Consultation", href: "/contact" }}
        tone="yellow"
      />
    </>
  );
}
