// Hand-authored equivalent of the Figma chevron/arrow triangle (imgVector1/2/3),
// reused across expand toggles and "view more" links. Same fetch limitation
// as ScrollIndicator.js — a plain geometric triangle, rotated via className
// to point in any direction, matching the Figma pattern of reusing one
// triangle asset at different rotations.
export default function Chevron({ className = "" }) {
  return (
    <svg
      viewBox="0 0 10 10"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* 2px line at every size (2026-10-22, Sukhman: arrows match the site's
          2px rules). non-scaling-stroke keeps the width in screen pixels,
          so a 10px and a 12px chevron both draw a true 2px line. */}
      <path d="M2 1L8 5L2 9" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
