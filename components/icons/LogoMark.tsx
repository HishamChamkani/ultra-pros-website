/**
 * Ultra Pros angular "L" logo mark, traced from the brand PNG for pixel accuracy
 * and rendered as crisp inline SVG (BRAND_GUIDELINES §2). Mikado Yellow is baked
 * into the path fill — do not recolor. Size/position come from `className`.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 340 340" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 30 L122 30 L122 218 L214 218 L214 126 L310 126 L310 221 L218 221 L218 317 L121 317 L30 228 Z"
        fill="#FFB700"
      />
    </svg>
  );
}
