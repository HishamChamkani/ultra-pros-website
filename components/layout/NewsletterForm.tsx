"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";

import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Footer newsletter signup. Posts the email to /api/newsletter (which adds it to
 * a Resend Audience server-side) and shows an inline success/error state.
 */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      setMessage("Subscribed! You're on the list.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <form className="mt-6" aria-label="Newsletter signup" onSubmit={onSubmit}>
      <label
        htmlFor="newsletter-email"
        className="block text-sm font-medium text-white"
      >
        Get marketing tips in your inbox
      </label>
      <div className="mt-2 flex gap-2">
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@company.com"
          aria-invalid={status === "error"}
          aria-describedby={message ? "newsletter-status" : undefined}
          className="h-11 w-full min-w-0 rounded-md border border-white/15 bg-brand-navy-tint px-3 text-sm text-white placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex h-11 shrink-0 items-center justify-center rounded-md bg-brand-yellow px-4 font-heading text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-yellow-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy disabled:opacity-70"
        >
          {status === "submitting" ? "…" : "Subscribe"}
        </button>
      </div>
      {message ? (
        <p
          id="newsletter-status"
          role={status === "error" ? "alert" : "status"}
          className={cn(
            "mt-2 flex items-center gap-1.5 text-sm",
            status === "error" ? "text-brand-error" : "text-brand-yellow",
          )}
        >
          {status === "error" ? (
            <AlertCircle className="h-4 w-4 shrink-0" aria-hidden />
          ) : (
            <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden />
          )}
          {message}
        </p>
      ) : null}
    </form>
  );
}
