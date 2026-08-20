"use client";

import { useState } from "react";
import { Check, Facebook, Linkedin, Link2, Twitter } from "lucide-react";

const iconClass =
  "inline-flex h-10 w-10 items-center justify-center rounded-md border border-brand-border text-brand-navy transition-colors hover:border-brand-yellow hover:text-brand-yellow-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow";

export function ShareButtons({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);

  const enc = encodeURIComponent;
  const shares = [
    {
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?text=${enc(title)}&url=${enc(url)}`,
      Icon: Twitter,
    },
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`,
      Icon: Linkedin,
    },
    {
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`,
      Icon: Facebook,
    },
  ];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — no-op.
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="font-heading text-sm font-medium uppercase tracking-[0.05em] text-brand-text-secondary">
        Share
      </span>
      <div className="flex items-center gap-2">
        {shares.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={iconClass}
          >
            <Icon className="h-4 w-4" aria-hidden />
          </a>
        ))}
        <button
          type="button"
          onClick={copy}
          aria-label={copied ? "Link copied" : "Copy link"}
          className={iconClass}
        >
          {copied ? (
            <Check className="h-4 w-4 text-brand-success" aria-hidden />
          ) : (
            <Link2 className="h-4 w-4" aria-hidden />
          )}
        </button>
      </div>
    </div>
  );
}
