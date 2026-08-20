import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChatLauncher } from "@/components/layout/ChatLauncher";
import { ConsultationModalProvider } from "@/components/consultation/ConsultationModalProvider";

// Headings — geometric/blocky, mirrors the angular logo mark (BRAND_GUIDELINES §4)
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
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

const SITE_URL = "https://ultra-pros.com";
const SITE_DESCRIPTION =
  "Ultra Pros is a performance-driven digital marketing agency. We turn traffic into revenue with SEO, paid media, social, web development, branding, and content.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ultra Pros | Digital Marketing Agency",
    template: "%s | Ultra Pros",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "digital marketing agency",
    "SEO",
    "paid marketing",
    "performance marketing",
    "social media marketing",
    "web development",
    "branding",
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
  // Placeholder favicon (Next default). Replace with the yellow angular mark —
  // see public/logo/README.md and BRAND_GUIDELINES §2.
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full`}
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
