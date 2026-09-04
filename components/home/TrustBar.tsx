import Image from "next/image";

import { trustBar } from "@/content/home";

/**
 * Trust bar — a full-width band with real client logos in their original brand
 * colors, presented as an infinite right-to-left marquee. The logo list is
 * rendered twice back-to-back inside `.marquee-track`; the track translates a
 * full -50% (one copy width) on a 36s loop so it repeats seamlessly. Hovering
 * pauses the scroll (see `.marquee-track:hover` in globals.css), edge fade
 * masks come from `.marquee-mask`, and under prefers-reduced-motion the whole
 * thing collapses to a static wrapped row with the duplicate copy hidden.
 * Logo files live in /public/clients (see content/home.ts → trustBar.logos);
 * swap for cleaned/vectorized artwork when the client supplies final assets.
 */
export function TrustBar() {
  // Render the logos twice so the -50% translate loops with no visible reset.
  const track = [...trustBar.logos, ...trustBar.logos];

  return (
    <section className="border-y border-brand-border bg-brand-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-center font-montserrat text-sm font-medium uppercase tracking-[0.05em] text-brand-text-secondary">
          {trustBar.title}
        </p>
        <div className="marquee-mask mt-10 overflow-hidden">
          <ul className="marquee-track flex w-max items-center gap-x-12 gap-y-8 sm:gap-x-16">
            {track.map((logo, index) => {
              const isDupe = index >= trustBar.logos.length;
              return (
                <li
                  key={`${logo.name}-${index}`}
                  data-marquee-dupe={isDupe ? "true" : undefined}
                  aria-hidden={isDupe ? true : undefined}
                  className="flex shrink-0 items-center justify-center px-2"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={160}
                    height={48}
                    className={
                      "boost" in logo && logo.boost
                        ? "h-14 w-auto object-contain md:h-16"
                        : "h-10 w-auto object-contain md:h-12"
                    }
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
