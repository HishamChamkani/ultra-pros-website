import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { LogoMark } from "@/components/icons/LogoMark";
import { ContactForm } from "@/components/contact/ContactForm";
import { CalendlyEmbed } from "@/components/contact/CalendlyEmbed";
import { buildMetadata } from "@/lib/seo";
import { siteConfig, type SocialKey } from "@/content/site";
import { contactCopy } from "@/content/contact";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with Ultra Pros. Send us a message or book a free consultation — we'll show you where your next growth wins are hiding.",
  path: "/contact",
});

const socialIcons: Record<SocialKey, LucideIcon> = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <SectionHeading
            as="h1"
            eyebrow={contactCopy.eyebrow}
            title={contactCopy.title}
            subtitle={contactCopy.subtitle}
            className="max-w-2xl"
          />
        </div>
      </section>

      {/* Form + office info */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-5 lg:px-8 lg:py-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="mb-6 font-heading text-2xl font-bold text-brand-navy">
              Send us a message
            </h2>
            <ContactForm />
          </div>

          {/* Office info */}
          <aside className="lg:col-span-2">
            <div className="rounded-lg border border-brand-border bg-brand-surface p-6 lg:p-8">
              <h2 className="font-heading text-2xl font-bold text-brand-navy">
                Reach us directly
              </h2>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow-hover" aria-hidden />
                  <span className="text-brand-navy">{siteConfig.contact.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow-hover" aria-hidden />
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                    className="text-brand-navy transition-colors hover:text-brand-yellow-hover"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow-hover" aria-hidden />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-brand-navy transition-colors hover:text-brand-yellow-hover"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
              </ul>

              {/* Google Map placeholder — TODO: embed the real map for the office location */}
              <div className="relative mt-6 flex aspect-[16/10] items-center justify-center overflow-hidden rounded-md border border-brand-border bg-gradient-to-br from-brand-navy to-brand-navy-tint">
                <LogoMark className="pointer-events-none absolute right-3 top-3 h-6 w-6 opacity-90 drop-shadow-[0_1px_2px_rgba(20,34,50,0.5)]" />
                <div className="text-center">
                  <MapPin className="mx-auto h-6 w-6 text-white/70" aria-hidden />
                  <p className="mt-1 text-sm text-white/70">Map embed goes here</p>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-6">
                <p className="font-heading text-xs font-medium uppercase tracking-[0.05em] text-brand-text-secondary">
                  Follow us
                </p>
                <ul className="mt-3 flex items-center gap-3">
                  {siteConfig.socials.map((social) => {
                    const Icon = socialIcons[social.icon];
                    return (
                      <li key={social.icon}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-brand-border bg-white text-brand-navy transition-colors hover:border-brand-yellow hover:text-brand-yellow-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
                        >
                          <Icon className="h-4 w-4" aria-hidden />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Book a consultation (Calendly) */}
      <section className="bg-brand-surface">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            align="center"
            eyebrow="Prefer to talk?"
            title="Book a free consultation"
            subtitle="Grab a time that works for you — no obligation, no pressure."
            className="mx-auto mb-10"
          />
          <CalendlyEmbed />
        </div>
      </section>
    </>
  );
}
