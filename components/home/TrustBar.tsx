import { trustBar } from "@/content/home";

/**
 * Trust bar — placeholder client wordmarks until real logos are supplied.
 * TODO: swap the text wordmarks for real client logo images (next/image).
 */
export function TrustBar() {
  return (
    <section className="border-y border-brand-border bg-brand-surface">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-center font-heading text-xs font-medium uppercase tracking-[0.05em] text-brand-text-secondary">
          {trustBar.title}
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {trustBar.logos.map((name) => (
            <li
              key={name}
              className="font-heading text-lg font-bold tracking-tight text-brand-navy/45 transition-colors hover:text-brand-navy"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
