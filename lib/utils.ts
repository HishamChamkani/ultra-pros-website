import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names, resolving conflicts (later classes win).
 * Used by shadcn/ui primitives and app components.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
