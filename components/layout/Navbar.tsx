"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { BookConsultationButton } from "@/components/consultation/BookConsultationButton";
import { mainNav, services } from "@/content/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Subtle shadow once the page is scrolled (brand: flat, minimal — no heavy shadow).
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  // Lock body scroll + close on Escape while the mobile menu is open.
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-brand-border bg-white transition-shadow",
        scrolled && "shadow-sm",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[86px] lg:px-8"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2"
          aria-label="Ultra Pros — home"
        >
          <Image
            src="/logo/ultra-pros-logo-trimmed.png"
            alt="Ultra Pros"
            width={1125}
            height={247}
            priority
            className="h-10 w-auto lg:h-11"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) =>
            item.children ? (
              <li key={item.href} className="group relative">
                <Link
                  href={item.href}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  className={cn(
                    "flex items-center gap-1 rounded-md px-3 py-2 text-[15px] font-medium text-brand-navy transition-colors hover:text-brand-yellow-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow",
                    isActive(pathname, item.href) &&
                      "text-brand-navy underline decoration-brand-yellow decoration-2 underline-offset-8",
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className="h-4 w-4 transition-transform group-hover:rotate-180"
                    aria-hidden
                  />
                </Link>

                {/* Dropdown — revealed on hover / keyboard focus within the group */}
                <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="w-64 rounded-lg border border-brand-border bg-white p-2 shadow-lg">
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={service.href}
                          className="block rounded-md px-3 py-2.5 font-heading text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-surface hover:text-brand-yellow-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
                        >
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  className={cn(
                    "rounded-md px-3 py-2 text-[15px] font-medium text-brand-navy transition-colors hover:text-brand-yellow-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow",
                    isActive(pathname, item.href) &&
                      "text-brand-navy underline decoration-brand-yellow decoration-2 underline-offset-8",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        {/* Desktop CTA — opens the consultation modal */}
        <div className="hidden lg:block">
          <BookConsultationButton variant="primary" size="md" />
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="inline-flex items-center justify-center rounded-md p-2 text-brand-navy lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <Menu className="h-6 w-6" aria-hidden />
        </button>
      </nav>

      {/* Mobile slide-in menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <button
          type="button"
          tabIndex={mobileOpen ? 0 : -1}
          aria-label="Close menu"
          onClick={closeMobile}
          className={cn(
            "absolute inset-0 bg-brand-navy/60 transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0",
          )}
        />

        {/* Panel */}
        <div
          id="mobile-menu"
          className={cn(
            "absolute right-0 top-0 flex h-full w-80 max-w-[85vw] flex-col bg-white shadow-xl transition-transform duration-300 ease-out",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex h-20 items-center justify-between border-b border-brand-border px-4">
            <Image
              src="/logo/ultra-pros-logo-trimmed.png"
              alt="Ultra Pros"
              width={1125}
              height={247}
              className="h-9 w-auto"
            />
            <button
              type="button"
              onClick={closeMobile}
              className="inline-flex items-center justify-center rounded-md p-2 text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" aria-hidden />
            </button>
          </div>

          <nav
            aria-label="Mobile"
            className="flex-1 overflow-y-auto px-4 py-4"
            onClick={(e) => {
              // Close the menu when a navigation link is activated (the Services
              // toggle is a <button> with no <a>, so it stays open).
              if ((e.target as HTMLElement).closest("a")) closeMobile();
            }}
          >
            <ul className="flex flex-col gap-1">
              {mainNav.map((item) =>
                item.children ? (
                  <li key={item.href}>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      aria-expanded={mobileServicesOpen}
                      className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left font-medium text-brand-navy hover:bg-brand-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          mobileServicesOpen && "rotate-180",
                        )}
                        aria-hidden
                      />
                    </button>
                    {mobileServicesOpen && (
                      <ul className="mb-1 ml-3 flex flex-col gap-0.5 border-l border-brand-border pl-3">
                        <li>
                          <Link
                            href={item.href}
                            className="block rounded-md px-3 py-2 text-sm font-medium text-brand-navy hover:bg-brand-surface"
                          >
                            All Services
                          </Link>
                        </li>
                        {item.children.map((service) => (
                          <li key={service.slug}>
                            <Link
                              href={service.href}
                              className="block rounded-md px-3 py-2 text-sm text-brand-text-secondary hover:bg-brand-surface hover:text-brand-navy"
                            >
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive(pathname, item.href) ? "page" : undefined}
                      className={cn(
                        "block rounded-md px-3 py-3 font-medium text-brand-navy hover:bg-brand-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow",
                        isActive(pathname, item.href) &&
                      "text-brand-navy underline decoration-brand-yellow decoration-2 underline-offset-8",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="border-t border-brand-border p-4">
            <BookConsultationButton
              variant="primary"
              size="md"
              className="w-full"
              onClick={closeMobile}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
