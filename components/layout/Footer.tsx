import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  type LucideIcon,
} from "lucide-react";

import {
  mainNav,
  services,
  siteConfig,
  type SocialKey,
} from "@/content/site";
import { NewsletterForm } from "@/components/layout/NewsletterForm";

const socialIcons: Record<SocialKey, LucideIcon> = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand + socials */}
          <div className="lg:pr-6">
            {/* White reversed logo variant for the dark section (BRAND_GUIDELINES §2) */}
            <Image
              src="/logo/ultra-pros-logo-white-trimmed.png"
              alt="Ultra Pros"
              width={1113}
              height={247}
              className="h-11 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              {siteConfig.slogan}
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {siteConfig.socials.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <li key={social.icon}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-white/80 transition-colors hover:border-brand-yellow hover:text-brand-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
                    >
                      <Icon className="h-4 w-4" aria-hidden />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer — quick links">
            <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2.5">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-brand-yellow"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Footer — services">
            <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.href}
                    className="text-sm text-white/70 transition-colors hover:text-brand-yellow"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact + newsletter */}
          <div>
            <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" aria-hidden />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                  className="transition-colors hover:text-brand-yellow"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" aria-hidden />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-brand-yellow"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" aria-hidden />
                <span>{siteConfig.contact.address}</span>
              </li>
            </ul>

            {/* Newsletter signup, posts to /api/newsletter (Resend Audience). */}
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-white/60">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-white/60">
            {siteConfig.tagline} · {siteConfig.contact.city}
          </p>
        </div>
      </div>
    </footer>
  );
}
