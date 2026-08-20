# CLAUDE.md — Ultra Pros Website

This file is project-level context for Claude Code. Keep it up to date as decisions are made. Read `BRAND_GUIDELINES.md` before writing any UI code.

## 1. Project Overview

Marketing website for **Ultra Pros**, a digital marketing agency, at `ultra-pros.com`. Inspiration references (structure/UX, not visuals to copy): grownix.com.pk, codistan.org, alarzdigital.com.

## 2. Tech Stack

- **Framework:** Next.js 14+ (App Router, TypeScript)
- **Styling:** Tailwind CSS (config tokens = brand palette below) + shadcn/ui for base primitives (buttons, dialogs, forms, accordion for FAQ)
- **Animation:** Framer Motion (scroll reveals, counters, hover states)
- **Forms:** React Hook Form + Zod validation
- **Email/lead delivery:** Resend (or Nodemailer via SMTP) for contact + consultation form submissions
- **Blog content:** MDX files in `/content/blog` initially (swap to a headless CMS like Sanity later if the client wants a non-dev editing workflow — flag this decision, don't build it speculatively)
- **Booking:** Calendly (or Cal.com) embed for "Book a Consultation" — phase 1 uses their embed widget, not a custom booking engine
- **Deployment target:** Vercel
- **Package manager:** pnpm

> **As actually scaffolded (2026-08-19):** the repo was bootstrapped from Create Next App as **Next.js 16 + React 19 + Tailwind CSS v4**, not Next 14 / Tailwind v3. Consequences:
> - **Tailwind v4 has no `tailwind.config.ts`** — the design tokens in §3 live in `app/globals.css` under `@theme` (colors → `--color-brand-*`, fonts → `--font-heading`/`--font-body`, radius derived from `--radius`). The JS snippet in §3 is the reference spec, not a file that exists.
> - **shadcn/ui** is configured via `components.json` (new-york, CSS variables) with semantic tokens mapped onto the brand palette in `globals.css`; `cn()` lives in `lib/utils.ts`.
> - **pnpm runs through corepack** pinned to `pnpm@9.15.9` (Node 20.12.0 crashes on pnpm 11). Its store/cache are relocated to `F:\pnpm\*` because the **C: drive is nearly full (~120 MB free)**. `COREPACK_HOME=F:\pnpm\corepack` is set persistently (via `setx`); new shells invoke pnpm as `corepack pnpm <cmd>` (the global `pnpm` shim isn't on PATH). For `next build`/`dev`, also point `TEMP`/`TMP` at `F:\pnpm\tmp` to avoid `ENOSPC`.
> - Next 16's `next dev` auto-writes a `nextjs-agent-rules` block at the bottom of this file pointing to `node_modules/next/dist/docs/` — read those before writing Next 16 code; conventions differ from Next 14.

## 3. Design Tokens (Tailwind)

```js
// tailwind.config.ts colors
colors: {
  brand: {
    yellow: "#FFB700",
    "yellow-tint": "#FFF4D6",
    "yellow-hover": "#E5A400",
    navy: "#142232",
    "navy-tint": "#22374D",
    surface: "#E8EEF2",
    border: "#D7DEE6",
    "text-secondary": "#5B6B7C",
    success: "#1FAA59",
    error: "#E5484D",
  },
},
fontFamily: {
  heading: ["Space Grotesk", "sans-serif"],
  body: ["Inter", "sans-serif"],
},
borderRadius: {
  DEFAULT: "8px",
  sm: "4px",
  lg: "16px",
},
```

Full rules (type scale, spacing, component style, voice) live in `BRAND_GUIDELINES.md` — treat it as the source of truth, don't improvise new colors/fonts.

## 4. Logo & Assets

Copy these into the repo before starting UI work:
- `Ultra_logo01.png` → `/public/logo/ultra-pros-logo.png` (primary lockup)
- Rebuild an SVG version of the logo mark early (`/public/logo/ultra-pros-mark.svg`) so it can be recolored/animated cleanly instead of relying on a raster PNG everywhere.
- A proper white/reversed logo for dark (Oxford Blue) backgrounds does not exist yet — placeholder: white wordmark + yellow mark on navy, flag for client review.

## 5. Site Map / Pages

1. **Home** — Hero, trust bar (client logos), stats counters, services overview grid, featured case studies, testimonials, blog preview, final CTA
2. **Services** — overview page + individual service detail pages (Social Media Marketing, Paid/Performance Marketing, SEO, Web Development, Branding & Design, Content Creation) — model sub-page pattern after Codistan's service detail structure
3. **About Us** — mission/story, values, stats, team grid, CEO note/quote
4. **Portfolio / Case Studies** — filterable grid (by service/industry) + individual case study detail pages (challenge → strategy → results, with metrics)
5. **Pricing** — tiered packages (Starter / Growth / Scale or similar), feature comparison table, custom-quote CTA
6. **Contact** — contact form, office info/map, phone/email, embedded consultation booking
7. **Blog** — index with category filter + individual post pages (MDX)

## 6. Feature Roadmap

**Phase 1 (launch):**
- All 7 pages above, fully responsive, SEO metadata per page (title/description/OG tags), sitemap.xml + robots.txt
- Contact form + "Book a Consultation" (Calendly/Cal.com embed or modal)
- WhatsApp floating chat button (deep-links to `wa.me/<number>` with a prefilled message) — simple, no backend needed
- Blog (MDX-based, no CMS yet)

**Phase 2 (post-launch):**
- Basic AI chatbot widget (start as a rules/FAQ-based bot in the floating chat button; can later be upgraded to call the Claude API for real Q&A — see Anthropic API usage notes if/when this is built)
- Optional CMS migration for blog if client wants non-dev publishing

Do not build Phase 2 items until Phase 1 pages are complete and approved — keep scope sequential.

## 7. Coding Conventions

- App Router, colocate components per route where reasonable; shared UI in `/components/ui`, shared sections (Navbar, Footer, CTA banner) in `/components/layout`
- All copy should be pulled from a typed content object per page (`/content/*.ts`) rather than hardcoded inline strings, so copy can be edited without touching JSX
- Images via `next/image`, lazy-loaded below the fold
- Mobile-first responsive breakpoints (Tailwind default: sm/md/lg/xl)
- Accessibility: semantic HTML, proper heading hierarchy, alt text on all images, visible focus states, AA color contrast (watch yellow-on-white text — never use yellow for body text on white)
- Lighthouse targets: 90+ performance, 95+ accessibility/SEO before calling any page "done"

## 8. Out of Scope (for now)

- E-commerce/payment processing
- Client login/portal
- Multi-language support
- Custom-built AI chatbot backend (Phase 2, separate spec needed)

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
