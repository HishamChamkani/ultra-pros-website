import Image from "next/image";

import { trustBar } from "@/content/home";

/**
 * Trust bar — a full-width band with real client logos normalized to a uniform
 * treatment (same max-height, even spacing, greyscale + reduced opacity) so a
 * mixed set of logo styles reads as one cohesive row; each restores full color
 * on hover. Logo files live in /public/clients (see content/home.ts →
 * trustBar.logos); swap for cleaned/vectorized artwork when the client supplies
 * final assets.
 */
export function TrustBar() {
  return (
    <section className="border-y border-brand-border bg-brand-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-center font-montserrat text-sm font-medium uppercase tracking-[0.05em] text-brand-text-secondary">
          {trustBar.title}
        </p>
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16">
          {trustBar.logos.map((logo) => (
            <li key={logo.name} className="flex items-center justify-center px-2">
              <Image
                src={logo.src}
                alt={logo.name}
                width={160}
                height={48}
                className="h-10 w-auto object-contain opacity-60 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0 md:h-12"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
