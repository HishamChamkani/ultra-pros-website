import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LogoMark } from "@/components/icons/LogoMark";
import type { PostMeta } from "@/lib/blog";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function BlogCard({ post }: { post: PostMeta }) {
  return (
    <Card hoverable className="group flex h-full flex-col overflow-hidden">
      <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
        {/* Full-bleed cover image; falls back to a title placeholder when a post
            has no coverImage yet. The bottom gradient keeps the badge legible. */}
        <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-brand-navy to-brand-navy-tint">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              // Decorative: the post title is announced immediately below.
              alt=""
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
            />
          ) : (
            <span className="absolute inset-0 flex items-center justify-center px-6 text-center font-heading text-lg font-semibold text-white/30">
              {post.title}
            </span>
          )}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(20,34,50,0.85)]"
            aria-hidden
          />
          <LogoMark className="pointer-events-none absolute right-3 top-3 h-6 w-6 opacity-90 drop-shadow-[0_1px_2px_rgba(20,34,50,0.5)]" />
          <span className="absolute bottom-3 left-3 z-10">
            <Badge variant="solid">{post.category}</Badge>
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-heading text-lg font-semibold leading-snug text-brand-navy transition-colors group-hover:text-brand-yellow-hover">
            {post.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-text-secondary">
            {post.excerpt}
          </p>

          {/* Author byline — mirrors the post-page byline pattern, scaled down. */}
          <div className="mt-4 flex items-center gap-2">
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-navy font-heading text-[11px] font-bold text-white"
              aria-hidden
            >
              {initials(post.author)}
            </span>
            <span className="text-xs leading-tight">
              <span className="block font-heading font-semibold text-brand-navy">
                {post.author}
              </span>
              {post.authorRole ? (
                <span className="block text-brand-text-secondary">
                  {post.authorRole}
                </span>
              ) : null}
            </span>
          </div>

          <p className="mt-4 text-xs font-medium uppercase tracking-[0.05em] text-brand-text-secondary">
            {post.dateDisplay} · {post.readingTime}
          </p>
        </div>
      </Link>
    </Card>
  );
}
