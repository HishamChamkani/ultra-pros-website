# Ultra Pros — Claude Code Build Prompts

Use these **in order**, one at a time, in a Claude Code session inside your project folder. Put `CLAUDE.md` and `BRAND_GUIDELINES.md` in the project root first (Claude Code reads `CLAUDE.md` automatically) and copy the logo/color PNGs into `/design-refs/` so Claude Code can `view` them if needed.

Review each step's output before moving to the next prompt — don't chain them blindly.

---

### Prompt 0 — Project Setup
```
Read CLAUDE.md and BRAND_GUIDELINES.md fully before doing anything.

Scaffold a new Next.js 14 App Router project in TypeScript for the "Ultra Pros"
digital marketing agency website, using pnpm, Tailwind CSS, and shadcn/ui.

1. Initialize the project with the folder structure implied in CLAUDE.md
   (/app, /components/ui, /components/layout, /content, /public/logo).
2. Configure tailwind.config.ts with the exact design tokens (colors, fonts,
   radius) listed in CLAUDE.md section 3.
3. Install and configure Space Grotesk and Inter via next/font/google.
4. Set up a base layout (app/layout.tsx) with metadata defaults (site title
   "Ultra Pros | Digital Marketing Agency", description, favicon placeholder).
5. Do not build any page content yet — just the scaffold, config, and an
   empty homepage that renders "Ultra Pros" in brand fonts/colors so I can
   confirm the setup visually.
```

### Prompt 1 — Design Tokens & Base Components
```
Build the core reusable UI primitives in /components/ui following
BRAND_GUIDELINES.md section 6 exactly:
- Button (primary = yellow bg/navy text, secondary = navy outline, ghost)
- Card (white/surface variants, hover lift + yellow accent border)
- SectionHeading (eyebrow label + H2 + optional subtext, per type scale)
- StatCounter (animates from 0 to target number on scroll into view, e.g.
  "200+ Clients", using Framer Motion)
- Badge/Tag (small pill/angled-corner label for case study categories)

Also build a reusable AngledDivider or clipped-corner shape component that
echoes the logo's angular "L" motif, usable as a section decoration.

Show me each component in a temporary /app/style-guide page so I can review
them together before building real pages.
```

### Prompt 2 — Navbar & Footer
```
Build the global Navbar and Footer in /components/layout, matching the
structure/UX patterns of Grownix and Codistan's nav (logo left, page links
center/right, prominent "Book a Consultation" CTA button far right, mobile
hamburger with slide-in menu) but styled fully in Ultra Pros brand.

Nav links: Home, Services (dropdown with the 6 service links from CLAUDE.md
section 5), About Us, Portfolio, Pricing, Blog, Contact.

Footer (Oxford Blue background, per brand guidelines dark-section pattern):
logo, one-line agency description, quick links column, services column,
contact info (phone/email/address placeholders), social icons, newsletter
signup input (non-functional placeholder for now), copyright line.

Add a persistent floating WhatsApp button (bottom-right, brand yellow circle
with WhatsApp icon) that links to https://wa.me/<PHONE_PLACEHOLDER> with a
prefilled "Hi, I'd like to know more about Ultra Pros services" message.
Leave a clear TODO comment for me to swap in the real phone number.
```

### Prompt 3 — Homepage
```
Build the Home page (app/page.tsx) with these sections in order, using the
components from Prompt 1 and the section-rhythm pattern from
BRAND_GUIDELINES.md (alternate white / surface / navy-dark backgrounds):

1. Hero — bold H1 headline + subheadline, primary CTA "Book a Consultation"
   + secondary CTA "View Our Work", hero visual/illustration area
2. Trust bar — "Industry Leaders Trust Us" logo strip (placeholder logos)
3. Stats band — 4 animated StatCounters (e.g. years active, projects
   delivered, clients served, avg. results metric) on navy background
4. Services overview — 6-card grid, one per service, icon + title +
   one-line description + "Learn more" link to the service detail page
5. Featured case studies — 3-4 card carousel/grid pulling from placeholder
   case study data (image, client name, service tags, result headline)
6. Why Ultra Pros — 4-6 value/differentiator cards (short title + description)
7. Testimonials — carousel/grid of 3-4 client quotes with name/role
8. Blog preview — latest 3 blog post cards
9. Final CTA band — full-width navy or yellow section: "Ready to grow?" +
   Book a Consultation button

Use realistic Ultra Pros placeholder copy (not lorem ipsum) written in the
brand voice from BRAND_GUIDELINES.md section 5. Make all data (stats,
services, testimonials) come from typed objects in /content/home.ts.
```

### Prompt 4 — Services Pages
```
Build the Services section:

1. /app/services/page.tsx — overview grid of all 6 services (Social Media
   Marketing, Paid/Performance Marketing, SEO, Web Development, Branding &
   Design, Content Creation), each linking to its detail page.
2. A reusable ServiceDetailTemplate component and one dynamic route
   /app/services/[slug]/page.tsx driven by a typed array in
   /content/services.ts. Each service entry needs: slug, title, icon,
   short description, hero copy, "what's included" bullet list, process
   steps (3-5 steps, e.g. Discover -> Strategize -> Execute -> Report,
   matching Codistan's process-step pattern), a relevant case-study teaser,
   and a "Book a Consultation" CTA at the bottom.

Populate all 6 services with real, specific Ultra Pros copy (not lorem
ipsum) in the brand voice.
```

### Prompt 5 — About Us
```
Build /app/about/page.tsx:
1. Hero intro — mission statement headline + short paragraph
2. Story section — "Since [year]" narrative block (like Grownix's "We
   Believe in Evolving Fast" section), image + text side by side
3. Values grid — 5 value cards (e.g. Innovation, Integrity, Transparency,
   Creativity, Commitment) each with icon + short description
4. Stats band — reuse StatCounter component
5. Team grid — team member cards (photo placeholder, name, role, LinkedIn
   icon link) sourced from /content/team.ts
6. CEO quote/leadership section — large pull-quote styled block

Use /content/about.ts for all copy so it's easy to edit later.
```

### Prompt 6 — Portfolio / Case Studies
```
Build the portfolio system:
1. /app/portfolio/page.tsx — filterable grid (filter by service category
   and/or industry) of case study cards, sourced from
   /content/case-studies.ts
2. Dynamic route /app/portfolio/[slug]/page.tsx — case study detail page
   with structure: client name + industry + services tags, hero image,
   "The Challenge" section, "Our Strategy" section, "The Results" section
   with 3-4 highlighted metric StatCounters, image gallery, and a closing
   CTA to book a consultation.

Populate with 6-8 realistic placeholder case studies across different
industries (matching the variety seen in agency portfolios: e-commerce,
healthcare/clinic, restaurant, real estate, retail, SaaS).
```

### Prompt 7 — Pricing
```
Build /app/pricing/page.tsx:
1. 3-tier pricing card layout (e.g. "Starter", "Growth", "Scale") with
   monthly price, short description, feature checklist per tier, and the
   middle tier visually highlighted as "Most Popular" using the yellow
   accent border pattern from the brand guidelines.
2. Below that, a full feature-comparison table across all tiers.
3. FAQ accordion section (use shadcn/ui accordion) answering common
   pricing/engagement questions, styled like Codistan's FAQ section.
4. Closing CTA: "Need something custom? Let's talk" -> Contact page link.

Keep pricing data in /content/pricing.ts. Use realistic placeholder PKR/USD
pricing — flag clearly with a comment that real numbers need client input.
```

### Prompt 8 — Contact & Book a Consultation
```
Build /app/contact/page.tsx:
1. Two-column layout: left = contact form (Name, Email, Phone, Company,
   Service interested in [dropdown], Budget range [dropdown], Message),
   right = office info card (address, phone, email, embedded Google Map
   placeholder) + social links.
2. Use React Hook Form + Zod for validation. Wire the submit handler to a
   Next.js API route (/app/api/contact/route.ts) that sends the submission
   via Resend to a placeholder inbox address — leave a clear TODO for the
   real API key and destination email.
3. Add a distinct "Book a Free Consultation" section above or beside the
   form embedding a Calendly (or Cal.com) inline widget — use a placeholder
   Calendly URL and a TODO comment for me to swap in the real link.
4. Show a success/error state after form submission (toast or inline
   confirmation message, styled per brand guidelines success/error colors).

Also add a global "Book a Consultation" modal (triggered from Navbar CTA and
homepage CTAs) that reuses this same Calendly embed, so users don't have to
navigate to the Contact page to book.
```

### Prompt 9 — Blog
```
Build the blog system using MDX:
1. /content/blog/*.mdx — set up 3-4 sample posts with frontmatter
   (title, slug, date, category, excerpt, coverImage, author)
2. /app/blog/page.tsx — post grid with category filter, matching the card
   style used elsewhere on the site
3. /app/blog/[slug]/page.tsx — individual post layout with proper article
   typography (per BRAND_GUIDELINES type scale), author byline, share
   buttons, and a "related posts" section at the bottom
4. Generate proper SEO metadata (title/description/OG image) per post from
   frontmatter using Next.js generateMetadata.

Write real sample blog content in the brand voice (digital marketing tips
relevant to Ultra Pros' services), not lorem ipsum.
```

### Prompt 10 — WhatsApp & Chatbot Widget Shell (Phase 1 → 2 bridge)
```
We already added a basic WhatsApp floating button in Prompt 2. Now:
1. Combine it into a single floating "chat launcher" button (bottom-right)
   that expands into a small panel offering two options: "Chat on WhatsApp"
   (existing wa.me link) and "Ask us a question" (opens a simple chat UI).
2. Build the "Ask us a question" chat UI as a self-contained component
   (/components/layout/ChatWidget.tsx) with a scrollable message list and
   input box. For now, wire it to a simple rules-based FAQ responder (a
   local function matching keywords like "pricing", "services", "contact"
   to canned Ultra Pros answers) — do NOT call any external AI API yet.
   Structure the component so the response-generation function can be
   swapped for a real API call later without changing the UI.
3. Style the widget fully per BRAND_GUIDELINES (navy header, yellow accent
   send button, rounded-but-angular corners).

Leave a clear comment block at the top of ChatWidget.tsx explaining that
Phase 2 will replace `getBotResponse()` with a real AI backend call.
```

### Prompt 11 — SEO, Performance & QA Pass
```
Do a full pre-launch pass across the entire site:
1. Add per-page metadata (title, description, canonical, Open Graph, Twitter
   card) for every route using CLAUDE.md's page list.
2. Generate sitemap.xml and robots.txt.
3. Add JSON-LD structured data for Organization (name, logo, address,
   sameAs social links) on the homepage, and Article schema on blog posts.
4. Audit all images for next/image usage, proper alt text, and lazy loading
   below the fold.
5. Run through accessibility: heading hierarchy, focus states, color
   contrast (specifically check any yellow text/background combinations
   against BRAND_GUIDELINES.md AA contrast rule), form labels.
6. Check mobile responsiveness on all pages at 375px, 768px, and 1440px
   breakpoints and fix any layout issues.
7. Report back a summary of what was fixed and any remaining known issues.
```

---

## Notes
- After Prompt 0, actually open the dev server and eyeball the fonts/colors before continuing — cheap to catch a wrong hex now.
- Feel free to split any single prompt further if Claude Code's output for a page feels rushed (e.g. split Services into "build the template" then "write real copy for each service" as two turns).
- Phase 2 (real AI chatbot backend) intentionally isn't in this list — come back once Phase 1 is live and we'll scope the API integration (likely a Next.js API route calling the Claude API with a system prompt trained on your services/FAQ content).
