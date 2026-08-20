"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CalendlyEmbed } from "@/components/contact/CalendlyEmbed";

type ConsultationContextValue = { open: () => void };

const ConsultationContext = createContext<ConsultationContextValue | null>(null);

export function useConsultation() {
  const ctx = useContext(ConsultationContext);
  if (!ctx) {
    throw new Error(
      "useConsultation must be used within <ConsultationModalProvider>",
    );
  }
  return ctx;
}

/**
 * Provides a global "Book a Consultation" modal that reuses the Calendly embed,
 * so any CTA (navbar, hero, closing banners) can open it without navigating to
 * the Contact page. Wrap the app in this provider (see app/layout.tsx).
 */
export function ConsultationModalProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ConsultationContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Book a free consultation</DialogTitle>
            <DialogDescription>
              Pick a time that works for you — no obligation, no pressure.
            </DialogDescription>
          </DialogHeader>
          {/* Only mounts the Calendly widget when the modal is open. */}
          {isOpen ? <CalendlyEmbed minHeight={600} /> : null}
        </DialogContent>
      </Dialog>
    </ConsultationContext.Provider>
  );
}
