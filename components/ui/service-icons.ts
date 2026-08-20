import {
  Code2,
  Palette,
  PenTool,
  Search,
  Share2,
  Target,
  type LucideIcon,
} from "lucide-react";

/** Icon keys used by service content (content/services.ts). */
export type ServiceIconName =
  | "share2"
  | "target"
  | "search"
  | "code"
  | "palette"
  | "pen-tool";

/** Shared map so the nav, home grid, services overview, and detail pages
 *  all render the same icon per service. */
export const serviceIcons: Record<ServiceIconName, LucideIcon> = {
  share2: Share2,
  target: Target,
  search: Search,
  code: Code2,
  palette: Palette,
  "pen-tool": PenTool,
};
