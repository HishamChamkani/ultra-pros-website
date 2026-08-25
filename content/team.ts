/**
 * Team members for the About page grid.
 *
 * `image` points at a real headshot in /public/images/team/ (genuine team
 * photos). Omit `image` to fall back to an initials avatar until a photo is
 * supplied. TODO: add per-member LinkedIn URLs when available — omit `linkedin`
 * to hide the icon for a member.
 */
export type TeamMember = {
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
};

export const team: TeamMember[] = [
  { name: "Waleed Paracha", role: "CEO", image: "/images/team/waleed-paracha.png" },
  // Hisham & Fareed use "-v2" filenames: their photos were re-uploaded, and renaming
  // the physical file busts the browser / Next image-optimizer cache without needing
  // a query string (which requires images.localPatterns config in Next 16).
  { name: "Hisham Khan", role: "Web & Software Developer", image: "/images/team/hisham-khan-v2.png" },
  { name: "Fareed Ali", role: "Video Editor", image: "/images/team/fareed-ali-v2.png" },
  { name: "Rameen Sheikh", role: "Graphics & UI/UX Designer", image: "/images/team/rameen-sheikh.png" },
];
