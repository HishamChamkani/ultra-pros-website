import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Poppins, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChatLauncher } from "@/components/layout/ChatLauncher";
import { ConsultationModalProvider } from "@/components/consultation/ConsultationModalProvider";

// Headings — Poppins (BRAND_GUIDELINES §4). Drives the --font-heading token.
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

// Body / UI text — legible neutral workhorse (BRAND_GUIDELINES §4)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// CTA buttons + section eyebrow labels (BRAND_GUIDELINES §4)
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://ultra-pros.com";
const SITE_DESCRIPTION =
  "Ultra Pros is a digital agency turning local ideas into global realities — social media marketing, performance marketing, branding & design, web & app, and software & AI development.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ultra Pros | Digital Marketing Agency",
    template: "%s | Ultra Pros",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "digital marketing agency",
    "social media marketing",
    "performance marketing",
    "branding and design",
    "web and app development",
    "software and AI development",
    "Ultra Pros",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Ultra Pros",
    title: "Ultra Pros | Digital Marketing Agency",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ultra Pros | Digital Marketing Agency",
    description: SITE_DESCRIPTION,
  },
  // App icons come from the file conventions app/icon.png (512) +
  // app/apple-icon.png (180), built from the brand mark. public/favicon.ico
  // (multi-res 16/32/48) is the legacy fallback served at /favicon.ico.
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${montserrat.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-background font-body text-foreground antialiased">
        <ConsultationModalProvider>
          <Navbar />
          <div className="flex flex-1 flex-col">{children}</div>
          <Footer />
          <ChatLauncher />
        </ConsultationModalProvider>
      </body>
    </html>
  );
}
