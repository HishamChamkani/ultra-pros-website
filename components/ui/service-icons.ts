import {
  Code2,
  Cpu,
  Palette,
  Share2,
  ShoppingCart,
  Video,
  type LucideIcon,
} from "lucide-react";

/** Icon keys used by service content (content/services.ts). */
export type ServiceIconName =
  | "share2"
  | "shopping-cart"
  | "palette"
  | "video"
  | "code"
  | "cpu";

/** Shared map so the nav, home grid, services overview, and detail pages
 *  all render the same icon per service. */
export const serviceIcons: Record<ServiceIconName, LucideIcon> = {
  share2: Share2,
  "shopping-cart": ShoppingCart,
  palette: Palette,
  video: Video,
  code: Code2,
  cpu: Cpu,
};
