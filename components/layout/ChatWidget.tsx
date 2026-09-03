"use client";

/**
 * ChatWidget — the "Ask us a question" panel (Phase 1).
 *
 * ⚠️ PHASE 2: `getBotResponse()` below is a simple, synchronous, rules-based FAQ
 * responder — it matches keywords to canned answers and makes NO external calls.
 * In Phase 2 this single function is meant to be replaced with a real AI backend
 * call (e.g. a Next.js API route that calls the Claude API with a system prompt
 * trained on Ultra Pros' services/FAQ). Keep the UI and the `BotReply` shape the
 * same and only swap the body of `getBotResponse` (it can become async) — nothing
 * else in this component should need to change.
 */

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, SendHorizonal, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { LMark } from "@/components/ui/angled-divider";

type BotReply = { text: string; link?: { label: string; href: string } };

type Message = {
  id: number;
  role: "bot" | "user";
  text: string;
  link?: { label: string; href: string };
};

// --- Rules-based FAQ responder (Phase 1). Swap this out in Phase 2. ---------
function getBotResponse(input: string): BotReply {
  const text = input.toLowerCase();
  const has = (...words: string[]) => words.some((w) => text.includes(w));

  if (has("hi", "hello", "hey", "salam"))
    return { text: "Hi there! 👋 How can we help? You can ask about our services, pricing, or how to get in touch." };

  if (has("price", "pricing", "cost", "package", "plan", "budget"))
    return {
      text: "We offer three monthly packages, Starter, Growth, and Scale, plus custom quotes. You can compare them here:",
      link: { label: "See pricing", href: "/pricing" },
    };

  if (has("service", "offer", "what do you do", "help with"))
    return {
      text: "We're a full-service agency: social media marketing, e-commerce solutions, branding & designing, video editing, web & app development, and software development & AI automations. Explore them all:",
      link: { label: "View services", href: "/services" },
    };

  if (has("social", "instagram", "tiktok", "facebook"))
    return {
      text: "We build platform-native social content and community strategies that turn followers into pipeline.",
      link: { label: "Social media service", href: "/services/social-media-marketing" },
    };

  if (has("ecommerce", "e-commerce", "shop", "store", "sell", "order", "cart", "shopify"))
    return {
      text: "We design and build online stores optimized to turn browsers into buyers, storefront, checkout, and retention.",
      link: { label: "E-commerce service", href: "/services/ecommerce-solutions" },
    };

  if (has("brand", "branding", "logo", "identity", "design"))
    return {
      text: "We craft bold, cohesive brand identities and design systems that make you instantly recognizable.",
      link: { label: "Branding service", href: "/services/branding-designing" },
    };

  if (has("video", "edit", "reel", "reels", "footage", "youtube"))
    return {
      text: "We turn raw footage into scroll-stopping short-form and polished brand videos, edited for each platform.",
      link: { label: "Video editing service", href: "/services/video-editing" },
    };

  if (has("software", "ai", "automation", "automate", "chatbot", "saas", "integration"))
    return {
      text: "We build custom software and AI automations, chatbots, workflow bots, and integrations, that cut manual work and scale your business.",
      link: { label: "Software & AI service", href: "/services/software-ai-automations" },
    };

  if (has("web", "website", "site", "app", "development"))
    return {
      text: "We design and build fast, conversion-focused websites and apps that turn visitors into customers.",
      link: { label: "Web & app development service", href: "/services/web-app-development" },
    };

  if (has("portfolio", "case study", "case studies", "work", "results", "proof"))
    return {
      text: "Take a look at real results we've delivered across industries:",
      link: { label: "View our work", href: "/portfolio" },
    };

  if (has("blog", "article", "read", "insight"))
    return { text: "We share practical marketing insight on the blog:", link: { label: "Read the blog", href: "/blog" } };

  if (has("about", "who are you", "team", "story"))
    return { text: "We're Ultra Pros, a performance-driven agency since 2018. Meet the team:", link: { label: "About us", href: "/about" } };

  if (has("book", "consultation", "consult", "meeting", "demo", "call", "talk"))
    return {
      text: "Happy to talk! Book a free consultation and we'll map out your next wins:",
      link: { label: "Book a consultation", href: "/contact" },
    };

  if (has("contact", "email", "phone", "reach", "get in touch"))
    return {
      text: "You can reach us any time via the contact page, form, email, and phone are all there:",
      link: { label: "Contact us", href: "/contact" },
    };

  if (has("thanks", "thank you", "cheers"))
    return { text: "You're welcome! Anything else I can point you to?" };

  return {
    text: "Great question, the best way to get a specific answer is to reach the team directly. You can also message us on WhatsApp.",
    link: { label: "Contact us", href: "/contact" },
  };
}
// ---------------------------------------------------------------------------

const QUICK_QUESTIONS = ["Pricing", "Services", "Book a consultation"];

const GREETING: Message = {
  id: 0,
  role: "bot",
  text: "Hi! 👋 I'm the Ultra Pros assistant. Ask me about our services, pricing, or how to get in touch.",
};

export function ChatWidget({
  onBack,
  onClose,
}: {
  onBack: () => void;
  onClose: () => void;
}) {
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const nextId = useRef(1);
  const listRef = useRef<HTMLDivElement>(null);

  // Keep the newest message in view.
  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  const send = (raw: string) => {
    const value = raw.trim();
    if (!value) return;
    const reply = getBotResponse(value);
    setMessages((prev) => [
      ...prev,
      { id: nextId.current++, role: "user", text: value },
      { id: nextId.current++, role: "bot", ...reply },
    ]);
    setInput("");
  };

  return (
    <div className="flex h-[480px] max-h-[70vh] w-[360px] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-lg border border-brand-border bg-white shadow-2xl">
      {/* Header */}
      <div className="flex items-center gap-3 bg-brand-navy px-4 py-3 text-white">
        <button
          type="button"
          onClick={onBack}
          aria-label="Back"
          className="rounded-sm p-1 text-white/80 transition-colors hover:text-brand-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
        >
          <ArrowLeft className="h-5 w-5" aria-hidden />
        </button>
        <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-yellow">
          <LMark aria-hidden className="h-5 w-5 text-brand-navy" />
        </span>
        <div className="flex-1">
          <p className="font-heading text-sm font-semibold leading-tight">Ask Ultra Pros</p>
          <p className="text-xs text-white/60">Typically replies instantly</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close chat"
          className="rounded-sm p-1 text-white/80 transition-colors hover:text-brand-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>
      </div>

      {/* Messages */}
      <div
        ref={listRef}
        role="log"
        aria-live="polite"
        aria-label="Chat messages"
        className="flex-1 space-y-3 overflow-y-auto bg-brand-surface/40 p-4"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex",
              message.role === "user" ? "justify-end" : "justify-start",
            )}
          >
            <div
              className={cn(
                "max-w-[80%] rounded-md px-3 py-2 text-sm leading-relaxed",
                message.role === "user"
                  ? "rounded-tr-sm bg-brand-navy text-white"
                  : "rounded-tl-sm border border-brand-border bg-white text-brand-navy",
              )}
            >
              <p>{message.text}</p>
              {message.link ? (
                <a
                  href={message.link.href}
                  className="mt-2 inline-flex items-center rounded-sm bg-brand-yellow px-3 py-1 font-heading text-xs font-semibold text-brand-navy transition-colors hover:bg-brand-yellow-hover"
                >
                  {message.link.label}
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      {/* Quick questions */}
      <div className="flex flex-wrap gap-2 border-t border-brand-border px-3 pt-3">
        {QUICK_QUESTIONS.map((q) => (
          <button
            key={q}
            type="button"
            onClick={() => send(q)}
            className="rounded-sm border border-brand-border px-2.5 py-1 text-xs font-medium text-brand-navy transition-colors hover:border-brand-yellow hover:bg-brand-yellow-tint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="flex items-center gap-2 p-3"
      >
        <label htmlFor="chat-input" className="sr-only">
          Type your question
        </label>
        <input
          id="chat-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question…"
          autoComplete="off"
          className="h-10 w-full min-w-0 rounded-md border border-brand-border bg-white px-3 text-sm text-brand-navy placeholder:text-brand-text-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          aria-label="Send message"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-yellow text-brand-navy transition-colors hover:bg-brand-yellow-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow disabled:opacity-50"
        >
          <SendHorizonal className="h-5 w-5" aria-hidden />
        </button>
      </form>
    </div>
  );
}
