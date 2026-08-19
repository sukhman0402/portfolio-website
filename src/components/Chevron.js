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
      <path d="M2 1L8 5L2 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
