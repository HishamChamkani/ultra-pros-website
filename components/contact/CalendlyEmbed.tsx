"use client";

import { useEffect } from "react";

import { calendlyUrl } from "@/content/contact";

const CALENDLY_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";

/**
 * Calendly inline scheduling widget. The scheduling link is `calendlyUrl` in
 * content/contact.ts. To switch to Cal.com, replace this embed with their
 * equivalent inline snippet.
 */
export function CalendlyEmbed({ minHeight = 630 }: { minHeight?: number }) {
  useEffect(() => {
    // Load Calendly's widget script once.
    if (document.querySelector(`script[src="${CALENDLY_SCRIPT}"]`)) return;
    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full overflow-hidden rounded-md border border-brand-border"
      data-url={calendlyUrl}
      style={{ minWidth: "320px", height: `${minHeight}px` }}
    />
  );
}
