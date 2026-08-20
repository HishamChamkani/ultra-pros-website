import Link from "next/link";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LMark } from "@/components/ui/angled-divider";
import type { PostMeta } from "@/lib/blog";

export function BlogCard({ post }: { post: PostMeta }) {
  return (
    <Card hoverable className="group flex h-full flex-col overflow-hidden">
      <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
        {/* Cover placeholder — no post imagery yet */}
        <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-gradient-to-br from-brand-navy to-brand-navy-tint">
          <LMark aria-hidden className="absolute right-3 top-3 h-6 w-6 opacity-80" />
          <span className="line-clamp-3 px-6 text-center font-heading text-lg font-semibold text-white/30">
            {post.title}
          </span>
          <span className="absolute bottom-3 left-3">
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
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.05em] text-brand-text-secondary">
            {post.dateDisplay} · {post.readingTime}
          </p>
        </div>
      </Link>
    </Card>
  );
}
