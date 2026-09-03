import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { BlogCard } from "@/components/blog/BlogCard";
import { getAllPosts } from "@/lib/blog";

export function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section className="bg-white">
      {/* Extra top padding separates the blog chapter from Testimonials. */}
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="From the blog"
            title="Ideas worth your time"
            subtitle="Practical marketing insight from the team, no filler."
            className="max-w-2xl"
          />
          <Link
            href="/blog"
            className="inline-flex shrink-0 items-center gap-1 font-heading text-sm font-semibold text-brand-navy transition-colors hover:text-brand-yellow-hover"
          >
            View all posts
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
