// Hand-authored equivalent of the Figma "Mouse Design" node (fileKey
// 2yjcklO1oFjK8rICoeBD67, node 387:9539, "Group 1" 387:9540 — 19 x 27.769,
// flattened to a single vector asset with no exposed sub-layers via
// get_metadata). The raw SVG bytes still can't be fetched byte-for-byte —
// this sandbox's network proxy blocks direct requests to figma.com, so the
// asset URL get_design_context returns 404s from this container the same
// way it did before — but get_screenshot's inline (base64) render IS
// visible, and it shows a plain capsule/pill outline with a short vertical
// DASH near the top for the scroll wheel, not the filled circular dot this
// file drew previously. Corrected below to match that screenshot; the
// capsule itself (rx=8.5 in a 17x26 box inset 1px into a 19x28 viewBox) was
// already within half a pixel of the Figma group's 19 x 27.769 and is kept
// as-is.
//
// ROUND 5 FIX (2026-09-05, direct instruction: "the design of mouse... is
// different than designed in figma... the interaction is the same as
// 'Scroll Down' in the mobile layout (moving vertically)"):
//   - Shape: the wheel indicator is now a short vertical line with rounded
//     caps (matching the Figma screenshot) instead of a circular dot.
//   - Motion: it now reuses globals.css's exact `scrollDownBounce` keyframe
//     — the same one driving Hero.js's mobile "Scroll Down" text+chevron
//     bounce (translateY 0->6px->0, opacity .6->1->.6, 1.6s ease-in-out
//     infinite) — via the same Tailwind arbitrary-animation class, instead
//     of a bespoke SMIL <animate> tag. This unifies the two breakpoints'
//     "keep scrolling" cue onto one motion language, per direct
//     instruction that the interaction should match. The swap is also a
//     near-exact match in amplitude: the old SMIL dot traveled cy 8->14 (6
//     units) inside this same 28-tall viewBox, same distance
//     scrollDownBounce's translateY(6px) covers, so the size of the
//     movement is unchanged — only the mechanism and the glyph's shape
//     are.
export default function ScrollIndicator({ className = "" }) {
  return (
    <svg
      viewBox="0 0 19 28"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="1"
        y="1"
        width="17"
        height="26"
        rx="8.5"
        stroke="currentColor"
        strokeWidth="1"
      />
      <line
        x1="9.5"
        y1="7"
        x2="9.5"
        y2="11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="animate-[scrollDownBounce_1.6s_ease-in-out_infinite]"
      />
    </svg>
  );
}
 
