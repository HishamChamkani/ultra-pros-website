# Ultra Pros — Brand Guidelines
**Digital Marketing Agency | ultra-pros.com**

---

## 1. Brand Positioning

Ultra Pros is a performance-driven digital marketing agency. The name signals confidence, expertise, and results — "pros" who go the extra mile ("ultra"). The visual identity should read as **bold, sharp, and modern**, sitting between Grownix's punchy energy, Codistan's engineered/structured feel, and Al-Arz's clean minimalism — but distinctly Ultra Pros: fast, confident, no fluff.

**Brand adjectives:** Bold · Sharp · Trustworthy · Fast-moving · Results-obsessed

---

## 2. Logo

**File:** `Ultra_logo01.png` (primary lockup — yellow "L/flag" mark + "ULTRA PROS" wordmark in Oxford Blue)

- The mark is a geometric, angular "L" / flag/pennant shape built from hard rectangular blocks — this angularity is a core brand motif and should echo in dividers, section markers, buttons, and iconography (sharp corners or clipped corners, not soft blobs).
- **Clear space:** maintain padding around the logo equal to the height of the "U" in "ULTRA" on all sides.
- **Minimum size:** 120px wide (digital), never scale below legibility of the wordmark.
- **On dark backgrounds (Oxford Blue):** use a white or yellow wordmark variant. (Note: the provided `Logo_Updata.png` file was blank/empty — a proper white/reversed logo variant still needs to be produced before dark-background use; use a flat yellow-mark + white-text SVG rebuild in the meantime.)
- **Favicon:** crop to just the yellow angular mark on a transparent or Oxford Blue square background.
- **Don'ts:** don't recolor the mark outside brand palette, don't round its corners, don't stretch/skew, don't place on busy photographic backgrounds without a solid-color safe area.

---

## 3. Color Palette

Locked from `Colors.png` — do not introduce new hues outside tints/shades of these:

| Role | Name | Hex | Usage |
|---|---|---|---|
| **Primary Accent** | Mikado Yellow | `#FFB700` | CTAs, highlights, active states, icon accents, underlines |
| **Primary Dark** | Oxford Blue / Space Cadet | `#142232` | Headlines, nav/footer background, body text, dark sections |
| **Surface / Light** | Light Grayish Blue | `#E8EEF2` | Section backgrounds, cards, subtle dividers |
| Base | White | `#FFFFFF` | Primary background, negative space |
| Text Secondary | Slate Gray | `#5B6B7C` | Body copy on light sections, captions |
| Border | Cool Gray | `#D7DEE6` | Card borders, input borders, table lines |
| Yellow Tint | Soft Yellow | `#FFF4D6` | Badge backgrounds, hover highlights |
| Yellow Hover | Deep Amber | `#E5A400` | Button hover/active state |
| Navy Tint | Slate Navy | `#22374D` | Secondary dark sections, gradients |
| Success | Green | `#1FAA59` | Form success states |
| Error | Red | `#E5484D` | Form validation errors |

**Usage ratio guide:** ~60% white/light surfaces, ~30% Oxford Blue (text + dark sections), ~10% Mikado Yellow (accents/CTAs only — never as a large background for body text, since black-on-yellow contrast must stay AA-compliant).

---

## 4. Typography

Match the logo's blocky, geometric, confident character:

- **Headings:** `Poppins` (weights 500/600/700) — geometric, rounded, confident; drives the `--font-heading` token used by h1–h6 and all heading-font components.
- **Body / UI text:** `Inter` (weights 400/500/600) — highly legible, neutral workhorse for paragraphs, forms, nav.
- **CTA buttons & section eyebrow labels:** `Montserrat` (weights 500/600/700) — used for CTA button labels (e.g. "Book a Consultation", "View Our Work") and the uppercase section eyebrows (TRUSTED BY, WHAT WE DO, WHY ULTRA PROS, …). Exposed as the `--font-montserrat` CSS variable / `font-montserrat` utility.
- **Numerals / Stats (e.g. "200+ Clients"):** Poppins Bold, often paired with Mikado Yellow.

**Type scale (desktop / mobile):**
| Level | Size (desktop) | Size (mobile) | Weight |
|---|---|---|---|
| H1 / Hero | 64px | 36px | 700 |
| H2 | 44px | 28px | 700 |
| H3 | 30px | 22px | 600 |
| H4 | 22px | 18px | 600 |
| Body Large | 18px | 16px | 400 |
| Body | 16px | 15px | 400 |
| Caption/Label | 13px | 12px | 500, uppercase, letter-spacing 0.05em |

Line height: 1.1–1.2 for headings, 1.6 for body.

---

## 5. Voice & Tone

- Confident, direct, outcome-focused. Speak in results ("We turn traffic into revenue"), not vague buzzwords.
- Short punchy sentences for hero/headline copy; slightly more explanatory tone in service descriptions.
- Use active voice and second person ("You get a dedicated strategist," not "Clients are assigned...").
- Avoid generic agency clichés ("synergy," "outside the box") — inspirations lean toward plain, specific claims (e.g., "181M sales within two months," "20k+ appointments booked").

---

## 6. UI / Component Style

- **Corners:** sharp-to-slightly-rounded (4–8px radius) on cards/buttons — never fully pill-shaped, to preserve the angular brand feel. Small accent shapes (badges, section markers) can use a clipped/angled corner echoing the logo.
- **Buttons:** solid Mikado Yellow primary button with Oxford Blue text (highest contrast + brand signature), Oxford Blue secondary/outline button with white text.
- **Cards:** white or `#E8EEF2` background, 1px `#D7DEE6` border or soft shadow, hover = slight lift + yellow accent border/underline.
- **Section rhythm:** alternate white → light-grayish-blue → Oxford-Blue-dark sections (like Grownix/Codistan) to break up long scroll pages.
- **Motion:** subtle fade/slide-up on scroll reveal, smooth hover scale (1.02–1.05) on cards, animated counters for stats (matches the "0 M / 0 K+" pattern seen across all three inspirations).
- **Iconography:** line icons, 2px stroke, Oxford Blue default / Mikado Yellow on hover or active.
- **Imagery:** bright, real client work / campaign visuals over generic stock; case-study thumbnails in consistent aspect ratio (4:3 or 16:9) with a subtle yellow tag/label overlay for service category.

---

## 7. Don'ts

- Don't use yellow as a large full-bleed background behind long text blocks (contrast/eye strain).
- Don't mix in additional accent colors (no purple/teal/orange) — depth comes from tints/shades of the 3 core colors only.
- Don't use script or serif fonts anywhere — brand is 100% geometric sans.
- Don't overuse drop shadows or glassmorphism — keep it flat/modern like the reference sites.
