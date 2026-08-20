/**
 * Team members for the About page grid.
 *
 * Photos are rendered as initials avatars until real headshots are supplied
 * (drop them in /public/team/). TODO: add per-member LinkedIn URLs when
 * available — omit `linkedin` to hide the icon for a member.
 */
export type TeamMember = {
  name: string;
  role: string;
  linkedin?: string;
};

export const team: TeamMember[] = [
  { name: "Waleed Paracha", role: "CEO" },
  { name: "Hisham Khan", role: "Web & Software Developer" },
  { name: "Fareed Ali", role: "Video Editor" },
  { name: "Rameen Sheikh", role: "Graphics & UI/UX Designer" },
];
