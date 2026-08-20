/**
 * Case study content (CLAUDE.md §7 — typed copy, brand voice per BRAND_GUIDELINES §5).
 * Powers the /portfolio filterable grid and /portfolio/[slug] detail pages.
 *
 * All clients, metrics, and quotes are realistic placeholders, not real accounts.
 * Slugs here are also referenced by the home page and service pages — keep them
 * stable. Imagery is rendered as branded placeholder tiles (no photo assets yet).
 */

export const serviceCategories = [
  "Social Media",
  "Paid Media",
  "SEO",
  "Web Development",
  "Branding",
  "Content",
] as const;
export type ServiceCategory = (typeof serviceCategories)[number];

export const industries = [
  "E-commerce",
  "Healthcare",
  "Real Estate",
  "SaaS",
  "Retail",
  "Restaurant",
  "Fitness",
  "Education",
] as const;
export type Industry = (typeof industries)[number];

export type CaseMetric = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

export type CaseStudy = {
  slug: string;
  client: string;
  industry: Industry;
  services: ServiceCategory[];
  resultHeadline: string;
  summary: string;
  challenge: string;
  strategyIntro: string;
  strategyPoints: string[];
  metrics: CaseMetric[];
  /** Placeholder gallery tile labels (swap for real images later). */
  gallery: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "northwind-ecommerce",
    client: "Northwind",
    industry: "E-commerce",
    services: ["Paid Media", "SEO"],
    resultHeadline: "3.2× ROAS in 90 days",
    summary:
      "Scaling a home-goods store from break-even ads to a 3.2× return in a single quarter.",
    challenge:
      "Northwind was spending heavily on Meta and Google with barely-there returns. Tracking was broken, the product feed was a mess, and every new campaign cannibalized the last. They were one bad month from cutting paid entirely.",
    strategyIntro:
      "We rebuilt the foundation before touching a dollar of budget, then scaled what worked.",
    strategyPoints: [
      "Fixed conversion tracking and rebuilt the product feed from scratch",
      "Restructured campaigns around the highest-margin collections",
      "Launched a systematic creative-testing framework",
      "Tightened landing pages and post-purchase flows",
    ],
    metrics: [
      { value: 3.2, decimals: 1, suffix: "×", label: "Return on Ad Spend" },
      { value: 47, suffix: "%", label: "Lower Cost per Acquisition" },
      { value: 2.4, decimals: 1, suffix: "×", label: "Revenue Growth" },
      { value: 90, suffix: " days", label: "To Profitability" },
    ],
    gallery: ["Ad creative set", "Rebuilt product feed", "Performance dashboard"],
  },
  {
    slug: "lumen-health",
    client: "Lumen Health",
    industry: "Healthcare",
    services: ["Social Media", "Content"],
    resultHeadline: "20K+ appointments booked",
    summary:
      "A multi-clinic health group turned dormant social channels into a real appointment pipeline.",
    challenge:
      "Lumen Health ran five clinics with no consistent voice. Their social channels were dormant, patient education was scattered, and appointment bookings relied entirely on referrals.",
    strategyIntro:
      "We built a patient-education content engine and made every post bookable.",
    strategyPoints: [
      "Built a content engine across Instagram and TikTok",
      "Standardized brand voice and visuals across all five clinics",
      "Produced short-form video answering the questions patients actually ask",
      "Added click-to-book CTAs and tracked every conversion",
    ],
    metrics: [
      { value: 20, suffix: "K+", label: "Appointments Booked" },
      { value: 3.5, decimals: 1, suffix: "×", label: "Engagement Growth" },
      { value: 120, suffix: "K", label: "Monthly Reach" },
      { value: 5, label: "Clinics Unified" },
    ],
    gallery: ["Content calendar", "Short-form video", "Booking funnel"],
  },
  {
    slug: "coastline-realty",
    client: "Coastline Realty",
    industry: "Real Estate",
    services: ["Web Development", "SEO"],
    resultHeadline: "68% more qualified leads",
    summary:
      "A rebuilt, search-optimized site turned a slow, invisible brokerage into a lead machine.",
    challenge:
      "Coastline's website was slow, hard to search, and invisible on Google. Agents chased cold leads while high-intent buyers bounced before a single listing loaded.",
    strategyIntro:
      "We rebuilt the site for speed and search, then captured the demand it unlocked.",
    strategyPoints: [
      "Rebuilt the site on Next.js with instant listing search",
      "Fixed technical SEO and Core Web Vitals",
      "Targeted high-intent local keywords by neighborhood",
      "Added lead-capture flows wired into their CRM",
    ],
    metrics: [
      { value: 68, suffix: "%", label: "More Qualified Leads" },
      { value: 2.1, decimals: 1, suffix: "×", label: "Organic Traffic" },
      { value: 0.9, decimals: 1, suffix: "s", label: "Page Load Time" },
      { value: 38, suffix: "%", label: "Lower Bounce Rate" },
    ],
    gallery: ["Homepage redesign", "Listing search", "Local landing pages"],
  },
  {
    slug: "bytewave-saas",
    client: "Bytewave",
    industry: "SaaS",
    services: ["Paid Media", "Branding"],
    resultHeadline: "$1.4M pipeline in Q1",
    summary:
      "A sharper brand and a full-funnel paid program turned clicks into real sales pipeline.",
    challenge:
      "Bytewave had a great product and a forgettable brand. Demos were flat, messaging was vague, and paid campaigns generated clicks but no pipeline.",
    strategyIntro:
      "We repositioned the brand, rebuilt the funnel, and aligned spend to pipeline.",
    strategyPoints: [
      "Repositioned the brand around a sharper value proposition",
      "Redesigned the site and demo funnel for conversion",
      "Launched full-funnel LinkedIn and Google campaigns",
      "Aligned sales and marketing on one pipeline definition",
    ],
    metrics: [
      { value: 1.4, decimals: 1, prefix: "$", suffix: "M", label: "Pipeline Generated" },
      { value: 3.2, decimals: 1, suffix: "×", label: "Demo Requests" },
      { value: 52, suffix: "%", label: "Lower Cost per Lead" },
      { value: 6, suffix: " wks", label: "To Rebrand & Launch" },
    ],
    gallery: ["Brand system", "Demo funnel", "Campaign creative"],
  },
  {
    slug: "vertex-retail",
    client: "Vertex Retail",
    industry: "Retail",
    services: ["Branding", "Content"],
    resultHeadline: "2× brand recall after refresh",
    summary:
      "A 12-store retailer unified under one bold identity — and became recognizable everywhere.",
    challenge:
      "Vertex had grown to 12 stores with mismatched signage, inconsistent packaging, and a logo from another decade. Customers didn't recognize them across locations.",
    strategyIntro:
      "We delivered one cohesive identity and a system to roll it out everywhere.",
    strategyPoints: [
      "Delivered a complete brand identity and guidelines",
      "Redesigned packaging, signage, and in-store collateral",
      "Built a social content system to launch the new look",
      "Trained store teams on consistent brand presentation",
    ],
    metrics: [
      { value: 2, suffix: "×", label: "Brand Recall" },
      { value: 34, suffix: "%", label: "Social Engagement" },
      { value: 12, label: "Stores Unified" },
      { value: 28, suffix: "%", label: "Foot-Traffic Lift" },
    ],
    gallery: ["Identity system", "Packaging redesign", "In-store signage"],
  },
  {
    slug: "sizzle-grill",
    client: "Sizzle Grill",
    industry: "Restaurant",
    services: ["Social Media", "Paid Media"],
    resultHeadline: "42% more table bookings",
    summary:
      "A local grill filled its empty weeknights with craveable content and geo-targeted offers.",
    challenge:
      "A popular local grill with empty weeknights. Great food, almost no online presence, and no way to fill tables outside the weekend rush.",
    strategyIntro:
      "We made the food impossible to scroll past and gave locals a reason to come midweek.",
    strategyPoints: [
      "Built a mouth-watering short-form video content engine",
      "Ran geo-targeted paid campaigns for weeknight offers",
      "Set up online reservations and tracked every booking",
      "Grew and activated a genuinely local following",
    ],
    metrics: [
      { value: 42, suffix: "%", label: "More Table Bookings" },
      { value: 3.8, decimals: 1, suffix: "×", label: "Social Following" },
      { value: 60, suffix: "%", label: "Fuller Weeknights" },
      { value: 1.9, decimals: 1, suffix: "×", label: "Repeat Visits" },
    ],
    gallery: ["Food video series", "Weeknight offer ads", "Reservation flow"],
  },
  {
    slug: "peak-fitness",
    client: "Peak Fitness",
    industry: "Fitness",
    services: ["Paid Media", "Web Development"],
    resultHeadline: "1,200+ new memberships",
    summary:
      "Three new gym locations filled fast with a leak-proof funnel and location-targeted ads.",
    challenge:
      "Peak Fitness opened three new locations and needed members fast. Their sign-up page leaked leads and their ads targeted everyone and no one.",
    strategyIntro:
      "We fixed the funnel first, then poured targeted demand into it.",
    strategyPoints: [
      "Built a fast, mobile-first sign-up funnel",
      "Launched location-targeted campaigns with free-trial offers",
      "A/B tested offers and creative every week",
      "Automated lead follow-up and trial-to-member conversion",
    ],
    metrics: [
      { value: 1200, suffix: "+", label: "New Memberships" },
      { value: 3, label: "Locations Filled" },
      { value: 44, suffix: "%", label: "Lower Cost per Lead" },
      { value: 2.6, decimals: 1, suffix: "×", label: "Trial Conversions" },
    ],
    gallery: ["Sign-up funnel", "Trial-offer ads", "Follow-up automation"],
  },
  {
    slug: "brightpath-academy",
    client: "BrightPath Academy",
    industry: "Education",
    services: ["SEO", "Content"],
    resultHeadline: "3× organic enrollments",
    summary:
      "An academy went from invisible to page one for the courses parents actually search.",
    challenge:
      "BrightPath relied on word-of-mouth and paid ads that dried up the moment budget paused. They were invisible for the exact courses parents were searching for.",
    strategyIntro:
      "We built durable organic demand around high-intent course searches.",
    strategyPoints: [
      "Built topic-cluster content around high-intent course keywords",
      "Fixed technical SEO and site structure",
      "Created parent-focused guides and comparison pages",
      "Earned local links and reviews to build authority",
    ],
    metrics: [
      { value: 3, suffix: "×", label: "Organic Enrollments" },
      { value: 4.5, decimals: 1, suffix: "×", label: "Organic Traffic" },
      { value: 70, suffix: "+", label: "Keywords on Page 1" },
      { value: 41, suffix: "%", label: "Lower Cost per Enrollment" },
    ],
    gallery: ["Topic clusters", "Parent guides", "Rankings growth"],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export const caseStudySlugs = caseStudies.map((cs) => cs.slug);
