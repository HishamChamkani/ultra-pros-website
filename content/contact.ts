/**
 * Contact page content + the shared contact-form schema (used by both the
 * client form and the /api/contact route). CLAUDE.md §7 — typed copy.
 */
import { z } from "zod";

export const serviceOptions = [
  "Social Media Marketing",
  "Paid / Performance Marketing",
  "SEO",
  "Web Development",
  "Branding & Design",
  "Content Creation",
  "Not sure yet",
] as const;

export const budgetOptions = [
  "Under $1,000 / mo",
  "$1,000–$2,500 / mo",
  "$2,500–$5,000 / mo",
  "$5,000+ / mo",
  "Not sure yet",
] as const;

const isOneOf = (options: readonly string[]) => (value: string) =>
  options.includes(value);

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z.string().trim().max(30, "That phone number looks too long").optional(),
  company: z.string().trim().max(80, "That company name looks too long").optional(),
  service: z
    .string()
    .refine(isOneOf(serviceOptions), { message: "Please select a service" }),
  budget: z
    .string()
    .refine(isOneOf(budgetOptions), { message: "Please select a budget range" }),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a bit more (at least 10 characters)")
    .max(2000, "That message is a little long — please trim it down"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export const calendlyUrl = "https://calendly.com/ultraprospeshawar/30min";

export const contactCopy = {
  eyebrow: "Contact",
  title: "Let's talk about your growth",
  subtitle:
    "Tell us where you want to go and we'll show you how to get there. Fill out the form or book a free consultation — whatever's easier.",
} as const;
