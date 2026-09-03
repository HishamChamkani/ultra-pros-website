"use client";

import { useEffect } from "react";

import { calendlyUrl } from "@/content/contact";

const CALENDLY_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";

declare global {
  interface Window {
    Calendly?: { initInlineWidgets: () => void };
  }
}

/**
 * Calendly inline scheduling widget. The scheduling link is `calendlyUrl` in
 * content/contact.ts. To switch to Cal.com, replace this embed with their
 * equivalent inline snippet.
 *
 * We explicitly call `Calendly.initInlineWidgets()` once the script is ready
 * rather than relying on the script's one-time auto-init on load: the widget is
 * mounted in several places (this page + the global consultation modal), and a
 * second instance mounted after the script already loaded would otherwise never
 * initialize and render an empty box.
 */
export function CalendlyEmbed({ minHeight = 630 }: { minHeight?: number }) {
  useEffect(() => {
    const init = () => window.Calendly?.initInlineWidgets();

    // Script already parsed and Calendly available → initialize immediately.
    if (window.Calendly) {
      init();
      return;
    }

    // Script tag exists but hasn't finished loading yet → init on its load.
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_SCRIPT}"]`,
    );
    if (existing) {
      existing.addEventListener("load", init);
      return () => existing.removeEventListener("load", init);
    }

    // First mount on the page → inject the script and init once it loads.
    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT;
    script.async = true;
    script.addEventListener("load", init);
    document.body.appendChild(script);
    return () => script.removeEventListener("load", init);
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full overflow-hidden rounded-md border border-brand-border"
      data-url={calendlyUrl}
      style={{ minWidth: "320px", height: `${minHeight}px` }}
    />
  );
}
