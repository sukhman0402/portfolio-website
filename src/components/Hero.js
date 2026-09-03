"use client";
 
import ScrollIndicator from "./ScrollIndicator";
import Chevron from "./Chevron";
 
// Landing Page Section 1.0 — Hero (design.md §3, Section 1.0).
//
// REDESIGN 2026-08-31 — full rebuild against a completely new Figma frame
// (see git history for the old "3 overlapping cards" composition this
// replaced). Its only content, besides the untouched global Header, is a
// quote block (label row -> divider -> heading/quote row) plus the
// ScrollIndicator.
//
// REDESIGN 2026-09-01 (this round) — the Figma frame moved again: node
// 291:1177 no longer exists, the current canonical "Landing Page (D1)-
// Section 1.0" (still nested inside "Landing Page (D)- Prototype",
// 1440x900) is now node 321:1367, quote block "Group 337" is now
// 321:1393. Two real design changes this round, not just node-id churn:
//   1. Quote block font size dropped from 30px to 15px for BOTH the
//      heading (left column) and the quote text (right column) — still
//      SF Pro Semibold (weight 590, i.e. this codebase's font-semibold),
//      but 15px now, same size as the label row above it. Confirmed via
//      get_design_context, not inferred from the screenshot alone. The
//      quote paragraph's own tracking is now -0.5px (was -0.375px to
//      match the heading); the heading itself stays -0.375px, same as
//      the label row. This is why the block's own height shrank from
//      148px to 74px — the long quote text now wraps to 2 lines at 15px
//      instead of rendering large.
//   2. Row rhythm inside the block is now a flat 10px both before AND
//      after the divider (label row bottom -> +10 -> divider -> +10 ->
//      heading row), not the previous 12px-before/10px-after split.
//      Re-measured directly off the new node's raw coordinates (label
//      top 366, divider 394, heading row 404) rather than assumed
//      carried over from the old block.
//
// NOTE ON DUPLICATION: the Footer (Section 6.0) went through the exact
// same two changes this round, on its own quote block (node 321:1405).
// Still NOT shared between the two files — reverted to separate markup
// per direct instruction earlier (the blocks are laid out identically but
// hold independent content), and that still holds; only the numbers were
// re-synced from the fresh Figma pull, in both files separately.
//
// Spacing (measured directly off 321:1367 / 321:1393, frame height 900 —
// the Prototype frame still stacks every section with zero gap, so these
// offsets are the section's own top/bottom padding, same convention as
// Footer.js):
//   - Header -> quote block's top label row: 328px. Per the 2026-09-01
//     correction earlier in this file's history, this is NOT copied
//     straight from Figma's frame-local y-coordinate (366) — that
//     coordinate assumes the real global <Header> matches Figma's own
//     38px preview-header placeholder (y=20, height=18), but the real
//     sticky <Header> renders at 62.5px tall. Since Hero's <section>
//     begins immediately after the sticky Header in normal flow, this
//     container's pt- maps 1:1 onto the true visual gap regardless of
//     the Header's real height, so the value used is
//     (quote block's local top 366) - (Figma's preview-header bottom 38)
//     = 328px, not the raw 366.
//   - Quote block's own bottom -> ScrollIndicator: 376.6px (quote block
//     bottom, local y = 366 + 74 = 440; icon top, local y = 816.615, per
//     node 321:1384 — unchanged from before, the icon itself wasn't
//     touched this round). Reproduced via pb-[460px] below (900 - 440),
//     which sizes this section's own total height so the absolutely
//     positioned ScrollIndicator (bottom-[55.62px] off the <section>)
//     lands in the right place — same "quote-bottom-to-frame-bottom, not
//     quote-bottom-to-icon directly" indirection documented in the prior
//     redesign, still correct because this portion of the geometry
//     (below the quote block) is untouched by the header-height issue
//     above it.
//   - Row rhythm inside the block: 10px gap before the divider, 10px
//     after it (label row bottom -> +10 -> divider -> +10 -> heading
//     row) — changed from 12px/10px, see the redesign note above.
//
// Literal Figma placeholder text (node 321:1393, get_design_context) —
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
    <section className="relative h-[811.5px] w-full md:h-auto">
      {/* MOBILE (below md) — 2026-09-02 redesign, direct instruction: drop
          the two top "Lorem ipsum" labels, move the divider so it sits
          between the heading and the quote paragraph instead (heading ->
          divider -> paragraph, treated as one "set"), and center that set
          inside a fixed 874px first screen. 874px = Figma's own "Frame
          Size- Mobile" reference (node 3:8, 402x874), which represents the
          FULL device screen — since the real sticky <Header> already
          consumes 62.5px of that screen before this <section> even starts
          (same header-height correction already used elsewhere in this
          file, e.g. the desktop pt-[328px] note below), this section's own
          height is 874 - 62.5 = 811.5px, not a flat 874px, so that (a) the
          content set centers on the actual visible screen rather than a
          box that starts 62.5px too low, and (b) header (62.5) + this
          section (811.5) = 874px total scroll before ProjectsSection,
          which follows with zero gap in the DOM — that scroll distance is
          a consequence of this one height, not a separate change. Built
          as a fully separate branch from desktop (not the same block
          reflowed with classes) because the structure itself differs
          here — no label row, divider relocated — not just
          spacing. Desktop's branch below is untouched, only wrapped to
          stop rendering below md. */}
      <div className="flex h-full flex-col justify-center px-5 sm:px-[30px] md:hidden">
        {/* Flagged 2026-09-02: shifted 100px up from dead-center, per direct
            instruction — the set stays centered as its baseline position,
            this is a deliberate offset on top of that, not a re-centering.
 
            Changed from -translate-y-[100px] to relative + -top-[100px]
            (2026-09-03, flagged: "both the lines look visually different.
            it should look the same if its 1px" — the quote's divider vs.
            the "PROJECTS" heading's divider). Root cause: Tailwind's
            translate utility compiles to the CSS `translate` property,
            which — like `transform` — promotes this subtree onto its own
            GPU compositing layer. On phones with a non-integer device
            pixel ratio, the compositor can position that layer at a
            fractional device pixel even when the CSS position is a whole
            number, which anti-aliases/blurs any 1px border inside it (the
            divider below). `position: relative` + `top` produces the
            IDENTICAL visual offset — it's a layout-neutral, post-flow
            shift exactly like transform, doesn't affect the parent's
            justify-center math, doesn't affect sibling layout — but it's
            resolved by the normal layout/paint pipeline instead of the
            compositor, so the browser pixel-snaps it like every other
            un-transformed element on the page (e.g. the "PROJECTS"
            divider). Net effect: identical 100px-up position, crisp
            border. (A straight swap to a negative margin-top was
            considered and rejected — inside this flex `justify-center`
            parent, a negative margin only shifts the rendered box by
            HALF its value, since it's counted twice in the centering
            math; that would have silently changed the shift from 100px
            to 50px. `relative`/`top` has no such interaction, since it
            never enters the box-model/layout calculation at all — same
            as transform.) */}
        <div className="relative -top-[100px]">
          <p className="font-semibold tracking-[-0.375px] text-black">
            {HERO_QUOTE_HEADING}
          </p>
          <div className="mt-[10px] border-t border-black" />
          <p className="mt-[10px] whitespace-pre-wrap font-semibold tracking-[-0.5px] text-black">
            {HERO_QUOTE_TEXT}
          </p>
        </div>
      </div>
      {/* Mobile's "Scroll Down" replaces the mouse icon (which stays for
          desktop, in the ScrollIndicator block below) — same bottom-8,
          horizontally-centered slot the icon used to sit in on mobile, then
          shifted up 100px in the same 2026-09-02 flag as the set above, so
          the two move together.
          2026-09-02 update, direct instruction: added the chevron (reused
          Chevron.js, rotated to point down, so its stroke-width matches
          every other dropdown arrow on the site by construction — not a
          new SVG) and a looping bounce animation, motion inspired by the
          supplied Pinterest reference (see globals.css's scrollDownBounce
          keyframe for the fetch-blocked caveat). Split into two nested
          elements on purpose: the outer div owns the static
          position/centering transform (bottom-8, -translate-x-1/2,
          -translate-y-[100px]), the inner div owns the animated transform
          (the bounce) — stacking both transforms on one element would
          have one silently overwrite the other instead of combining.
          Color switched from the hardcoded text-[#bbbbbb] to text-muted,
          the site's existing token for this exact color (globals.css
          --muted: #bbbbbb) — same value, now via the shared token like
          every other gray label on the site. */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 -translate-y-[100px] md:hidden">
        <div className="flex animate-[scrollDownBounce_1.6s_ease-in-out_infinite] items-center gap-1 text-muted">
          <p className="text-[13px] font-normal tracking-normal">Scroll Down</p>
          <Chevron className="h-2.5 w-2.5 rotate-90" />
        </div>
      </div>
 
      {/* DESKTOP (md and up) — untouched from the prior redesign, see the
          spacing notes above the constants; only change is the
          hidden/md:block wrapper so it stops rendering below md. */}
      <div className="hidden md:block mx-auto max-w-[1440px] px-5 pb-24 pt-16 sm:px-[30px] md:pb-[460px] md:pt-[328px]">
        {/* Row 1 — top labels, 15px regular */}
        <div className="grid grid-cols-1 gap-1 md:grid-cols-[350px_1fr] md:gap-x-0">
          <p className="font-normal tracking-[-0.375px] text-black md:text-[15px]">
            {HERO_QUOTE_TOP_LABEL_LEFT}
          </p>
          <p className="font-normal tracking-[-0.375px] text-black md:text-[15px]">
            {HERO_QUOTE_TOP_LABEL_RIGHT}
          </p>
        </div>
 
        {/* Divider — 10px below the label row (Figma: label top 366 + 18
            tall -> divider at 394, i.e. 10px gap) */}
        <div className="mt-[10px] border-t border-black" />
 
        {/* Row 2 — heading + quote, 15px semibold, 10px below the divider
            (Figma: divider at 394 -> row at 404). Quote text (right
            column) carries its own -0.5px tracking, distinct from the
            heading's -0.375px. */}
        <div className="mt-[10px] grid grid-cols-1 gap-3 md:grid-cols-[350px_1fr] md:gap-x-0">
          <p className="font-semibold tracking-[-0.375px] text-black md:text-[15px]">
            {HERO_QUOTE_HEADING}
          </p>
          <p className="whitespace-pre-wrap font-semibold tracking-[-0.5px] text-black md:text-[15px]">
            {HERO_QUOTE_TEXT}
          </p>
        </div>
      </div>
 
      {/* ScrollIndicator — unchanged this round: same component, same
          55.62px inset from the bottom of the 900px-tall stage,
          horizontally centered (Figma's own left=711px on a 1440-wide
          frame is, to within half a pixel, dead center). Desktop-only now
          (hidden md:block) — mobile's equivalent is the "Scroll Down"
          text above. */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-black/60 hidden md:block md:bottom-[55.62px]">
        <ScrollIndicator className="h-7 w-5" />
      </div>
    </section>
  );
}
 
