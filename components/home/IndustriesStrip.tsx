import Image from "next/image";

import { industriesServed } from "@/content/site";

/**
 * "Industries we serve" strip — a full-width white band that appears directly
 * below the "What We Do" section (also white), with a 1px top border for a
 * subtle separation instead of a background-color break. Labels are the shared
 * list (content/site.ts); each maps to a real PNG in /public/industries.
 * Filenames are lowercase kebab-case, verified byte-for-byte against the
 * directory — Vercel's Linux build is case-sensitive, so these must match exactly.
 */
const industryImages: Record<(typeof industriesServed)[number], string> = {
  Electronics: "electronics.png",
  "Arts & Crafts": "arts-and-crafts.png",
  "Medical Equipment & Supplies": "medical-equipment-supplies.png",
  "Beauty & Personal Care": "beauty-personal-care.png",
  "Healthcare & Pharmaceutical": "healthcare.png",
  "Information Technology": "information-technology.png",
};

export function IndustriesStrip() {
  return (
    <section className="border-t border-brand-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-center font-montserrat text-sm font-medium uppercase tracking-[0.05em] text-brand-text-secondary">
          Industries we serve
        </p>
        <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
          {industriesServed.map((industry) => (
            <li
              key={industry}
              className="flex flex-col items-center gap-4 text-center"
            >
              <Image
                src={`/industries/${industryImages[industry]}`}
                alt={industry}
                width={80}
                height={80}
                className="h-14 w-14 object-contain"
              />
              <span className="text-sm font-medium text-brand-navy">
                {industry}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
