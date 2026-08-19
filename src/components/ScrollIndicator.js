// Hand-authored equivalent of the Figma hero mouse-scroll icon (node
// imgGroup1). The original SVG bytes couldn't be fetched — this sandbox's
// network proxy blocks direct requests to figma.com, and the WebFetch
// fallback requires an interactive approval step that isn't available in
// this session. This is a generic, easily-recognizable "scroll" glyph
// (mouse outline + animated wheel dot), not a redraw of any branded or
// illustrative asset, so it's a reasonable stand-in — swap it for the real
// exported asset later if pixel-exact fidelity matters here.
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
      <circle cx="9.5" cy="8" r="1.6" fill="currentColor">
        <animate
          attributeName="cy"
          values="8;14;8"
          dur="1.6s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}
