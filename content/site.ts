/**
 * Global site content — nav, footer, contact + social data.
 * Keep copy/links here (typed) so they can be edited without touching JSX
 * (CLAUDE.md §7). Consumed by Navbar, Footer, and the floating WhatsApp button.
 *
 * Service data is canonical in content/services.ts; re-exported here so nav/
 * footer keep a single import source.
 */
import { services, type Service } from "./services";

export { services };
export type { Service };

export type NavItem = {
  label: string;
  href: string;
  /** Present on items that open a dropdown (Services). */
  children?: Service[];
};

/** Primary navigation (CLAUDE.md §5 page list). */
export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", children: services },
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export type SocialKey = "facebook" | "instagram" | "linkedin";

export type SocialLink = {
  label: string;
  href: string;
  icon: SocialKey;
};

export const siteConfig = {
  name: "Ultra Pros",
  tagline: "Digital Marketing Agency",
  description:
    "Ultra Pros is a performance-driven digital marketing agency. We turn traffic into revenue with SEO, paid media, social, web development, branding, and content.",
  url: "https://ultra-pros.com",

  contact: {
    // Display format; tel: links strip the spaces → tel:+923173337417.
    phone: "+92 317 3337417",
    email: "ultraprospeshawar@gmail.com",
    // Full address for display in contact cards / footer.
    address:
      "3rd floor, AKTI Peshawar, Arfa Tower, University Rd, opposite to Hush Puppies, Tehkal Bala, Peshawar, 25000, Pakistan",
    // Compact form for tight spots (footer bottom bar).
    city: "Peshawar, Pakistan",
    // Structured parts for the JSON-LD PostalAddress (schema.org).
    postalAddress: {
      streetAddress:
        "3rd floor, AKTI Peshawar, Arfa Tower, University Rd, opposite to Hush Puppies, Tehkal Bala",
      addressLocality: "Peshawar",
      postalCode: "25000",
      addressCountry: "PK",
    },
  },

  // WhatsApp business number (digits only, incl. country code, no "+").
  whatsapp: {
    number: "923173337417",
    message: "Hi, I'd like to know more about Ultra Pros services",
  },

  socials: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/share/19Agu4KQ2o/?mibextid=wwXIfr",
      icon: "facebook",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/ultrapros?igsh=MXd5N2R6M2M5c2twaQ==",
      icon: "instagram",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/ultra-pros/",
      icon: "linkedin",
    },
  ] satisfies SocialLink[],
} as const;

/** Primary CTA reused across nav, hero, and footer. */
export const bookConsultationHref = "/contact";
