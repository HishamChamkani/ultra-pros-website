import { Quote } from "lucide-react";

import { ceoQuote } from "@/content/about";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function CeoQuote() {
  return (
    <section className="bg-brand-navy">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        <Quote className="mx-auto h-12 w-12 text-brand-yellow" aria-hidden />
        <blockquote className="mt-6 font-heading text-2xl font-semibold leading-snug text-white sm:text-3xl">
          “{ceoQuote.quote}”
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-3">
          <span
            className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-yellow font-heading text-sm font-bold text-brand-navy"
            aria-hidden
          >
            {initials(ceoQuote.name)}
          </span>
          <div className="text-left">
            <p className="font-heading font-semibold text-white">
              {ceoQuote.name}
            </p>
            <p className="text-sm text-white/60">{ceoQuote.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
