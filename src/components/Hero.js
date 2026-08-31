"use client";
 
import ScrollIndicator from "./ScrollIndicator";
 
// Landing Page Section 1.0 — Hero (design.md §3, Section 1.0).
//
// REDESIGN 2026-08-31 — this is a full rebuild against a completely new
// Figma frame. The previous "3 overlapping cards" composition (Rounds 1-6,
// node 274:145) has been REPLACED — the current "Landing Page (D1)-
// Section 1.0" frame nested inside "Landing Page (D)- Prototype" (node
// 291:1177, 1440x900) no longer contains any of that card-stack geometry
// at all. Its only content, besides the untouched global Header, is a
// quote block (label row -> divider -> heading/quote row) plus the
// ScrollIndicator. Per instruction ("keep the line, text and white
// spacing exact as the re-designed section"), this file now implements
// that new, much simpler composition rather than preserving the old
// cards — the whole punch-card/statement/about interaction model is gone
// from Figma, not just its spacing.
//
// NOTE ON DUPLICATION: the Footer (Section 6.0) uses the visually
// IDENTICAL label/divider/heading-row layout right now. An earlier pass
// factored that shared layout into one <QuoteBlock/> component imported
// by both files — reverted per direct instruction: the two blocks are
// NOT the same thing, just currently dressed in the same placeholder
// layout/text. Hero's quote and the Footer's quote will hold different,
// independent content once real copy goes in, so each file owns its own
// markup below rather than sharing a component that would couple them.
//
// Node ids matter for re-syncing later: 291:1177 is the CURRENT canonical
// Section 1.0 (the one actually nested inside the Prototype frame) — the
// file also still contains several OTHER frames named identically
// ("Landing Page (D1)- Section 1.0": 295:1219, 291:1043, 274:145 [old],
// 288:506, 291:947) at different sizes. Those read as design-exploration
// duplicates left on the canvas, not alternate live versions — only the
// one actually nested in the Prototype frame was used here, per the same
// "resolve by Prototype-nesting, not by name alone" rule now documented
// in Footer.js.
//
// Spacing (measured directly off 291:1177, frame height 900 — the
// Prototype frame confirms zero gap between adjacent section frames, so
// these offsets are the section's own top/bottom padding, same convention
// as Footer.js):
//   - Section top -> quote block's top label row: 364px. (The real global
//     Header renders above this, untouched — per the Round 4 finding
//     already documented for the old design, Figma's own Header shown at
//     y=20 inside this frame is a preview overlay, not something to add
//     extra padding for on top of.)
//   - Quote block's own bottom -> frame bottom: 388px (900 - 364 - 148),
//     which is where the ScrollIndicator sits, itself inset 55.62px from
//     the very bottom of the frame (matches the old design's role for
//     this icon, just a fresh pixel value).
//   - Row rhythm inside the block: 12px gap before the divider, 10px
//     after it (label row bottom -> +12 -> divider -> +10 -> heading row).
//
// Literal Figma placeholder text (node 295:1200, get_design_context) —
// not curated copy. Kept as-is per instruction to match the redesign
// exactly, same reasoning as this file's earlier rounds (see git history)
// for the old card copy.
const HERO_QUOTE_TOP_LABEL_LEFT = "Lorem ipsum";
const HERO_QUOTE_TOP_LABEL_RIGHT = "Lorem ipsum";
const HERO_QUOTE_HEADING = "Lorem ipsum";
const HERO_QUOTE_TEXT =
  "Lorem ipsum dolor sit amet, consectetuer lorem, adipiscing elit. Aenean commodo ligula.  ipsum dolor sit amet, consectetuer lorem, adipiscing elit. Aenean commodo ligula.";
 
// Header and ScrollIndicator remain untouched components, per the
// original brief — only their usage/positioning here changed.
export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-[1440px] px-5 pb-24 pt-16 sm:px-[30px] md:pb-[388px] md:pt-[364px]">
        {/* Row 1 — top labels, 15px regular */}
        <div className="grid grid-cols-1 gap-1 md:grid-cols-[350px_1fr] md:gap-x-0">
          <p className="font-normal tracking-[-0.375px] text-black md:text-[15px]">
            {HERO_QUOTE_TOP_LABEL_LEFT}
          </p>
          <p className="font-normal tracking-[-0.375px] text-black md:text-[15px]">
            {HERO_QUOTE_TOP_LABEL_RIGHT}
          </p>
        </div>
 
        {/* Divider — 12px below the label row (Figma: label top 364 + 18
            tall -> divider at 394, i.e. 12px gap) */}
        <div className="mt-3 border-t border-black md:mt-[12px]" />
 
        {/* Row 2 — heading + quote, 30px semibold, 10px below the divider
            (Figma: divider at 394 -> row at 404) */}
        <div className="mt-4 grid grid-cols-1 gap-3 md:mt-[10px] md:grid-cols-[350px_1fr] md:gap-x-0">
          <p className="font-semibold tracking-[-0.375px] text-black md:text-[30px]">
            {HERO_QUOTE_HEADING}
          </p>
          <p className="whitespace-pre-wrap font-semibold tracking-[-0.375px] text-black md:text-[30px]">
            {HERO_QUOTE_TEXT}
          </p>
        </div>
      </div>
 
      {/* ScrollIndicator — same component as before, position re-derived
          from the new frame (55.62px inset from the bottom of the 900px-
          tall stage, horizontally centered — Figma's own left=711px on a
          1440-wide frame is, to within half a pixel, dead center). */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-black/60 md:bottom-[55.62px]">
        <ScrollIndicator className="h-7 w-5" />
      </div>
    </section>
  );
}
 
