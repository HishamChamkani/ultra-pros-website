import Image from "next/image";
import { Quote } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/content/home";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section className="bg-brand-navy">
      {/* Extra top padding sets Testimonials apart as a new chapter after the
          Why Ultra Pros / Case Studies block. */}
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
        <SectionHeading
          tone="dark"
          align="center"
          eyebrow="Client stories"
          title="Teams that grew with us"
          className="mx-auto mb-12"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-md border border-white/10 bg-brand-navy-tint p-6"
            >
              <Quote className="h-8 w-8 text-brand-yellow" aria-hidden />
              <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-white/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-yellow font-heading text-sm font-bold text-brand-navy"
                  aria-hidden
                >
                  {initials(t.name)}
                </span>
                <span>
                  <span className="block font-heading font-semibold text-white">
                    {t.name}
                  </span>
                  <span className="block text-sm text-white/60">
                    {t.role}, {t.company}
                  </span>
                </span>
                {/* Client company logo. On a white chip so dark-ink artwork
                    stays legible against the navy card; swap the chip for a
                    plain grayscale logo once white/reversed marks exist.
                    TODO(client): replace with final vectorized logo assets. */}
                {t.logo ? (
                  <span className="ml-auto flex h-9 items-center justify-center rounded-sm bg-white px-2">
                    <Image
                      src={t.logo}
                      alt={`${t.company} logo`}
                      width={72}
                      height={24}
                      className="h-6 w-auto object-contain grayscale"
                    />
                  </span>
                ) : null}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
