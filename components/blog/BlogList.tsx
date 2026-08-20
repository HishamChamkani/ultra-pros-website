"use client";

import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";
import { BlogCard } from "@/components/blog/BlogCard";
import type { PostMeta } from "@/lib/blog";

export function BlogList({
  posts,
  categories,
}: {
  posts: PostMeta[];
  categories: string[];
}) {
  const [active, setActive] = useState<string>("All");
  const options = ["All", ...categories];

  const filtered = useMemo(
    () => (active === "All" ? posts : posts.filter((p) => p.category === active)),
    [active, posts],
  );

  return (
    <div>
      <div
        role="group"
        aria-label="Filter posts by category"
        className="flex flex-wrap gap-2"
      >
        {options.map((option) => {
          const isActive = option === active;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(option)}
              className={cn(
                "rounded-sm border px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2",
                isActive
                  ? "border-brand-yellow bg-brand-yellow text-brand-navy"
                  : "border-brand-border bg-white text-brand-navy hover:border-brand-navy",
              )}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
