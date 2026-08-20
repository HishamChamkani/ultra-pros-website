import { SectionHeading } from "@/components/ui/section-heading";
import { LMark } from "@/components/ui/angled-divider";
import { story } from "@/content/about";

export function Story() {
  return (
    <section className="bg-brand-surface">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        {/* Text */}
        <div>
          <SectionHeading
            eyebrow={story.eyebrow}
            title={story.title}
            className="mb-6"
          />
          <div className="space-y-4">
            {story.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-brand-text-secondary leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Visual — decorative panel (no photo asset yet) */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-lg bg-brand-navy p-8 shadow-xl sm:p-10">
            <LMark aria-hidden className="absolute right-6 top-6 h-10 w-10 opacity-90" />
            <p className="font-heading text-sm font-medium uppercase tracking-[0.05em] text-white/60">
              Established
            </p>
            <p className="mt-1 font-heading text-6xl font-bold text-white">
              2018
            </p>
            <p className="mt-4 max-w-xs text-white/75">
              Full-funnel since day one — paid, SEO, social, web, and creative
              under one roof.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Paid", "SEO", "Social", "Web", "Creative"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-sm border border-white/15 bg-brand-navy-tint px-3 py-1 text-sm font-medium text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
