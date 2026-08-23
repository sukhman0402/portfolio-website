"use client";
 
import { useState } from "react";
import ScrollIndicator from "./ScrollIndicator";
 
// Landing Page Section 1.0 — Hero (design.md §3, Section 1.0).
//
// ROUND 3 (this file's state, 2026-08-23) fixes issues flagged against the
// Round 2 build, after re-pulling the Figma frame (274:145 — its dimensions
// changed to 1440x1100, so every cqh conversion below is recomputed off
// 1100, not the old 1000):
//
//   1. "texts from layers behind visible on the front" / overflow bleed —
//      the old custom copy (a real "SUKHMAN." + a hand-written statement +
//      an invented motto phrase) didn't match the literal Figma text-box
//      sizes, so on the motto card especially the heading rendered far
//      taller than its box (425px) and painted outside the card's own
//      bounds — since nothing clipped it, that overflow showed up layered
//      on top of whatever card sat below/beside it, reading as "the wrong
//      card's text is bleeding through." Fixed two ways: every card body
//      now has `overflow-hidden` as a hard safety net, AND —
//   2. Content is now the literal Lorem-ipsum text straight from the Figma
//      text-node names (get_design_context on 274:145), not curated copy,
//      per direct instruction. Literal sizes mostly fit their boxes as-is
//      (verified the statement card's real 36px/2-line paragraph against
//      its 80px-tall box with a throwaway Playwright/Chromium render in
//      this sandbox — fits exactly). The one exception is the motto card's
//      big heading: Figma's own literal box (345×425px at a 90px font) is
//      undersized for its own 36-char placeholder — even Figma's own
//      get_design_context screenshot shows that exact text overflowing the
//      box on the design canvas itself, so reproducing the literal 90px
//      would reproduce the same overflow bug the user is flagging. Kept
//      the literal text but sized it down to 64px (measured via the same
//      throwaway Chromium render: ~336px tall, leaving a safe margin
//      inside the 425px box) — flagged here as a deliberate deviation from
//      the literal px, in service of "keep it in the frame."
//   3. Hover motion "very harsh" — re-inspected aishani.framer.media's
//      actual hover element: it has no CSS transition at all
//      (transitionDuration: 0s everywhere) — the motion is Framer Motion's
//      JS spring, which is why a flat `duration-300 ease-out` felt
//      mechanical by comparison (fixed-duration curves and springs read
//      very differently even at similar speeds). Can't reproduce a JS
//      spring in pure CSS, so approximated the soft, no-overshoot
//      deceleration a spring produces with a slower duration (450ms) and
//      an ease-out-expo–style cubic-bezier instead of Tailwind's default
//      ease-out.
//
// ROUND 2 spec (still in force, unchanged this round):
//   - Each of the 3 cards has ONE permanent position (its own Figma group's
//     coordinates) and NEVER moves on click. The CARD is the clickable
//     control; clicking brings it to front via z-index + a light opacity
//     crossfade only. The circles are a pure, non-interactive status
//     readout at 3 fixed Figma slots — flat fill, no stroke.
//   - On HOVER (not click) each card nudges ~0.5cm (≈19px) in its own
//     fixed direction: about→right, statement→up, motto→left.
//
// ROUND 6 (2026-08-23) — two more live-verified bugs found after Round 5
// shipped:
//   1. "circles go on top of the header while scrolling" — the circles
//      wrap was z-50, higher than the Header's own z-40 (Header.js is
//      `sticky top-0 z-40`). The circles sit in normal document flow (they
//      scroll with the page); the Header stays pinned. As the page scrolls
//      and the Header passes over where the circles currently are, z-50 >
//      z-40 meant the circles painted ON TOP of the header bar. Fixed:
//      z-30 — still above the 3 cards (z-index 10-12, so the circles stay
//      readable against them) but below the header, so the header always
//      wins once it's scrolled over that position.
//   2. "punched holes should be white, not black" — MottoCardBody's 23
//      dots were `bg-black`. The card is a "punch card" motif: the dots
//      represent literal holes punched through the light-grey card,
//      showing the white page background behind it — so they should
//      render white, not black. Fixed: `bg-white`.
//
// ROUND 5 (2026-08-23) — fixes against a fresh Figma pull (274:145's
// standalone circle group, 274:174/175/176, changed since Round 2):
//   1. "dark grey card is semi transparent" — the resting (not-front) cards
//      carried a permanent opacity:0.94 as a "crossfade" cue. Because CSS
//      opacity blends a whole subtree (bg AND every child) against whatever
//      z-index sits below it, stacking 3 overlapping cards at 0.94 produced
//      a visible ghosting/bleed-through — confirmed live by bringing motto
//      to front and screenshotting: the "about" (mid-grey) card's own
//      labels and background visibly double-exposed against the black
//      statement card behind it. Fixed by dropping the permanent dimming —
//      every card is opacity:1 at rest; z-index alone (already the primary
//      mechanism per the Round 2 spec) carries "which card is in front."
//   2. Circles "need to align left with Sukhman, and the size/gap/position
//      changed" — re-pulled metadata for the 3 standalone circles
//      (274:174/175/176): x=30, y=189/209/229, d=15px (was 25px), so the
//      real gap is 209-189-15=5px (was 15px). x=30 is the SAME x=30 Figma
//      uses for the Header's "SUKHMAN." text (274:158) — i.e. the circles
//      are meant to sit flush with the logo's left edge. Confirmed live
//      that both the Hero stage and the Header row sit inside identically-
//      padded containers (mx-auto max-w-[1440px] px-5 sm:px-[30px] on
//      both), so the stage's own x=0% already lines up with "S" of
//      SUKHMAN. — the OLD left:"2.0833%" (30/1440, i.e. re-applying the
//      Figma x=30 offset a second time on top of a container that's
//      already inset by that padding) double-counted the same 30px this
//      section's spacing bug did in Round 4, pushing the circles ~29px too
//      far right. Fixed: left:"0%", diameter 15px, gap 5px. Top (17.1818%,
//      from y=189/1100) was already correct and is unchanged.
//   3. "text on light grey card going out of the shape" — investigated
//      live: with the motto card brought to front (fully unobstructed),
//      its heading never exceeds its own card box (measured via
//      getBoundingClientRect against the card vs. the <p>; every side
//      comes back negative/inside). The visible bleed only happens in the
//      RESTING composition, where the statement (black) card's left edge
//      literally sits inside the motto card's own heading-box span — and a
//      side-by-side pixel check against Figma's own rendered screenshot of
//      274:145 shows the identical overlap already baked into the source
//      file (not an artifact of this implementation). Left as-is pending
//      the user's call on whether to reduce the overlap or keep the
//      Figma-faithful composition — see chat.
//
// ROUND 4 (2026-08-23) — section spacing re-derived from Figma, replacing
// the pt-10/md:pt-6 + mt-16 guesses from earlier rounds:
//   - Header→Hero gap: first tried computing this as (first-card-top y=
//     127.72) − (real Header height, 62.5px measured live) = 65.22px —
//     but that double-counts: 127.72 is the card's position relative to
//     THIS FRAME's own origin, which is exactly what CARD_POS.statement.
//     top (11.6109%) already reproduces on its own once the stage renders
//     — adding 65.22px of section padding on top of that pushed the card
//     ~188px below the header live, not ~90px. The Header row Figma draws
//     at y=20 inside this frame is a preview/context overlay (the real
//     Header is a separate, untouched, already-taller component, not
//     literally part of this frame's box model) — there's no second,
//     independent "gap" value to extract from it beyond what the card's
//     own frame-relative position already encodes. So: no added section
//     padding on desktop (md:pt-0) — the stage's own built-in whitespace
//     above the first card (proportional, part of the composition,
//     unrelated to inter-section rhythm) is the real gap below the
//     header. Mobile keeps a plain pt-10, since its simplified layout has
//     no such built-in offset of its own.
//   - Hero→next-section gap: 274:145 has no sibling "Section 2.0" frame
//     yet in the D1 family to measure directly. The file does show one
//     consistent, deliberate rule across every OTHER stacked section pair
//     (both in the older "(D)" Landing Page family and in the Projects
//     family): each Section 2.0 frame sits exactly 100px below the
//     previous section's bottom edge, on the canvas. Applied that same
//     100px as Hero's bottom padding — flagged as inferred from that
//     file-wide convention, not measured directly off this section, since
//     no D1 Section 2.0 exists to check it against yet.
//
// Header and ScrollIndicator remain untouched, per the original brief.
 
// Every left/top/width/height below is (figma_px / 1440 or 1100) * 100,
// as plain % on these outer card boxes (their containing block is the
// 1440x1100 stage itself, so plain % already resolves correctly on both
// axes) — cqw/cqh only get used one level down, for each card's own
// children, where the offset needs to reference the outer stage's pixel
// grid rather than the child's own (differently-sized) parent.
const CARD_POS = {
  statement: { left: "19.8333%", top: "11.6109%", width: "58.3499%", height: "68.1729%" },
  about: { left: "32.5736%", top: "29.3221%", width: "56.3847%", height: "56.7943%" },
  motto: { left: "12.4306%", top: "20.12%", width: "32.8472%", height: "58.6364%" },
};
 
// Hover nudge, ~0.5cm (≈19px), confirmed by direct mouse hover on the
// reference site. Duration/easing approximate its JS spring — see header
// comment (point 3).
const HOVER_TRANSITION = "transition-transform duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]";
const HOVER_CLASS = {
  statement: "hover:-translate-y-[19px]",
  about: "hover:translate-x-[19px]",
  motto: "hover:-translate-x-[19px]",
};
 
const CARD_COLOR = { statement: "#121212", about: "#7e7e7e", motto: "#f3f3f3" };
const CARD_ORDER_IDS = ["statement", "about", "motto"];
 
// Literal Figma placeholder copy (get_design_context, nodes 274:262,
// 274:286, 274:239/240/241) — not curated content, per instruction.
const STATEMENT_HEADING =
  "Lorem ipsum dolor sit amet, consectetuer lorem, adipiscing elit. Aenean commodo ligula.";
const ABOUT_HEADING = "Lorem Ipsum";
const MOTTO_TEXT = "Lorem ipsum dolor sit amet, consec.";
 
// Shared internal layout for the two dark cards (statement/about) — Figma
// 274:260 and 274:284 use the IDENTICAL relative offset pattern (ticks at
// +150/+689px; dividers at +51/+226/+441px; labels at +640,+266/+314/+362px
// from the card's own origin) even though the two cards are different
// sizes — confirming it's a literal px spacing value, not a proportional
// one, which is why these are expressed as cqw/cqh off the outer
// 1440x1100 stage rather than "% of this card." Only the heading itself
// differs per card (text, size, weight, wrap) — passed in as props.
function DarkCardBody({ heading, headingSizeCqw, headingWidthCqw, headingWeight, headingLineHeight, headingWrap }) {
  const labels = ["Lorem ipsum.", "Lorem ipsum.", "Lorem ipsum."];
  const labelTops = ["24.1818cqh", "28.5455cqh", "32.9091cqh"];
  return (
    <>
      {/* 2 vertical tick marks, top strip (Figma has no text here) */}
      <span className="absolute bg-white/25" style={{ left: "10.4167cqw", top: 0, height: "4.6364cqh", width: "1px" }} aria-hidden="true" />
      <span className="absolute bg-white/25" style={{ left: "47.8472cqw", top: 0, height: "4.6364cqh", width: "1px" }} aria-hidden="true" />
      {/* 3 horizontal dividers */}
      {["4.6364cqh", "20.5455cqh", "40.0909cqh"].map((top) => (
        <span key={top} className="absolute inset-x-0 bg-white/20" style={{ top, height: "1px" }} aria-hidden="true" />
      ))}
      {/* heading */}
      <p
        className={`absolute text-left leading-none text-white ${headingWeight === 700 ? "font-bold" : "font-normal"}`}
        style={{
          left: "2.1528cqw",
          top: "8.2727cqh",
          width: headingWidthCqw ? `${headingWidthCqw}cqw` : "auto",
          fontSize: `${headingSizeCqw}cqw`,
          lineHeight: headingLineHeight,
          letterSpacing: "-0.5px",
          whiteSpace: headingWrap ? "normal" : "nowrap",
        }}
      >
        {heading}
      </p>
      {/* 3 right-aligned labels, between divider 2 and divider 3 */}
      {labels.map((t, i) => (
        <p
          key={i}
          className="absolute whitespace-nowrap font-bold text-white"
          style={{ left: "44.4444cqw", top: labelTops[i], fontSize: "1.0417cqw", letterSpacing: "-0.5px" }}
        >
          {t}
        </p>
      ))}
    </>
  );
}
 
// Motto/punch-hole card body — Figma 274:212. 23 dots (274:216–238) run the
// full left edge at a literal 27px step (20px dot + 7px gap); heading box
// at +60,+163px (345px wide, 90px in Figma — sized down here, see header
// comment point 2); top label at +64,+25px; bottom label at +64,+602px —
// all relative to the card's own Figma origin (179, 221.32), in cqw/cqh.
// Dot diameter is expressed in cqw for BOTH width and height (not cqh) so
// it stays a true circle at any viewport width — cqw and cqh scale by
// different factors since the stage's aspect ratio (1440:1100) isn't 1:1.
function MottoCardBody() {
  return (
    <>
      <div
        className="absolute flex flex-col justify-between"
        style={{ left: "0.6944cqw", top: "1.4545cqh", height: "55.8182cqh" }}
        aria-hidden="true"
      >
        {Array.from({ length: 23 }).map((_, i) => (
          <span key={i} className="rounded-full bg-white" style={{ width: "1.3889cqw", height: "1.3889cqw" }} />
        ))}
      </div>
      <p
        className="absolute font-bold text-black"
        style={{ left: "4.4444cqw", top: "2.2727cqh", width: "23.9583cqw", fontSize: "1.0417cqw", letterSpacing: "-0.5px" }}
      >
        {MOTTO_TEXT}
      </p>
      <p
        className="absolute font-bold leading-[0.95] text-black"
        style={{ left: "4.1667cqw", top: "14.8182cqh", width: "23.9583cqw", fontSize: "4.4444cqw", letterSpacing: "-0.5px" }}
      >
        {MOTTO_TEXT}
      </p>
      <p
        className="absolute font-bold text-black"
        style={{ left: "4.4444cqw", top: "54.7273cqh", width: "23.9583cqw", fontSize: "1.0417cqw", letterSpacing: "-0.5px" }}
      >
        {MOTTO_TEXT}
      </p>
    </>
  );
}
 
// Simplified, non-cqw versions of the two card bodies for the mobile block
// below (no container-query stage there — plain flow, plain px/rem).
function MobileDark({ heading, bold }) {
  return (
    <div className="relative text-white">
      <div className="mb-4 flex items-center gap-6 border-b border-white/20 pb-3" aria-hidden="true">
        <span className="h-px w-6 bg-white/25" />
        <span className="h-px w-6 bg-white/25" />
      </div>
      <p className={`text-[15px] leading-[20px] tracking-normal ${bold ? "font-bold" : "font-normal"}`}>{heading}</p>
      <div className="mt-4 flex flex-col gap-1 border-t border-white/20 pt-3">
        {["Lorem ipsum.", "Lorem ipsum.", "Lorem ipsum."].map((t, i) => (
          <p key={i} className="text-[11px] font-bold text-white">{t}</p>
        ))}
      </div>
    </div>
  );
}
 
function MobileMotto() {
  return (
    <div className="relative pl-6 text-black">
      <span className="mb-2 block text-[11px] font-bold text-black">{MOTTO_TEXT}</span>
      <p className="text-[24px] font-bold leading-[0.95]">{MOTTO_TEXT}</p>
      <p className="mt-4 text-[11px] font-bold text-black">{MOTTO_TEXT}</p>
    </div>
  );
}
 
export default function Hero() {
  // order = back → front. Default matches Figma's resting composition:
  // about(grey) front, statement(black) mid, motto(light) back.
  const [order, setOrder] = useState(["motto", "statement", "about"]);
 
  function bringToFront(id) {
    setOrder((prev) => [...prev.filter((x) => x !== id), id]);
  }
 
  const zIndexOf = (id) => order.indexOf(id) + 10;
  const frontId = order[order.length - 1];
 
  // Circles: 3 FIXED Figma slots (x=30, y=189/229/269) — never move. Only
  // which card's color currently occupies each slot changes, read off the
  // front→back order (top slot = front).
  const frontToBack = [...order].reverse();
 
  return (
    <section className="relative w-full pb-[100px] pt-10 md:pt-0">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-[30px]">
        {/* Mobile (< md): no overlapping stack — a flat status row of the
            3 (display-only) circles above one card. Since there's no
            peeking edge to tap on mobile, tapping the visible card itself
            advances to the next one in the stack — the closest mobile
            equivalent of "click a card to bring it forward" when only one
            card is ever shown at a time. Not a literal Figma/reference-
            site behaviour (neither defines a mobile layout for this), so
            flagged as an inferred adaptation rather than spec. */}
        <div className="md:hidden">
          <div className="mb-4 flex gap-3" aria-hidden="true">
            {frontToBack.map((id) => (
              <span key={id} className="h-[25px] w-[25px] shrink-0 rounded-full" style={{ backgroundColor: CARD_COLOR[id] }} />
            ))}
          </div>
          <button
            type="button"
            onClick={() => {
              const idx = CARD_ORDER_IDS.indexOf(frontId);
              bringToFront(CARD_ORDER_IDS[(idx + 1) % CARD_ORDER_IDS.length]);
            }}
            aria-label="Show the next card"
            className="block w-full text-left"
          >
            <div key={frontId} className="relative animate-[heroFadeIn_0.35s_ease-out] overflow-hidden rounded-sm p-5" style={{ backgroundColor: CARD_COLOR[frontId] }}>
              {frontId === "motto" ? (
                <MobileMotto />
              ) : (
                <MobileDark heading={frontId === "statement" ? STATEMENT_HEADING : ABOUT_HEADING} bold={frontId === "about"} />
              )}
            </div>
          </button>
        </div>
 
        {/* Desktop (md+) — the real Figma stage: 3 cards, each PERMANENTLY
            at its own Figma position (never animated), only z-index +
            opacity change on click. Hover nudges layered independently.
            overflow-hidden on every card is a hard clip so an oversized
            child (see header comment point 1) can never paint outside its
            own card and read as "another card's text." */}
        <div className="relative hidden aspect-[1440/1100] w-full [container-type:size] md:block">
          {/* Circles — fixed Figma slots, display-only, flat fill, no stroke.
              left:0% is deliberate — see Round 5 comment (header): the
              stage already sits inside the same 30px-padded container as
              the Header, so 0% here is already flush with "S" of SUKHMAN.
              z-30 (Round 6): must stay above the 3 cards (z-index 10-12)
              but BELOW the sticky Header (z-40) — at z-50 the circles rode
              on top of the header bar itself while scrolling, since the
              header is sticky (stays put) while the circles are in normal
              flow (scroll with the page) and briefly occupy the same
              screen position as the header passes over them. */}
          <div className="pointer-events-none absolute z-30 flex flex-col gap-[5px]" style={{ left: "0%", top: "17.1818%" }}>
            {frontToBack.map((id) => (
              <span key={id} className="h-[15px] w-[15px] rounded-full" style={{ backgroundColor: CARD_COLOR[id] }} />
            ))}
          </div>
 
          {/* Statement / black — 274:260 */}
          <button
            type="button"
            onClick={() => bringToFront("statement")}
            aria-label="Bring the statement card to the front"
            className={`absolute overflow-hidden p-0 text-left ${HOVER_TRANSITION} ${HOVER_CLASS.statement}`}
            style={{ ...CARD_POS.statement, backgroundColor: CARD_COLOR.statement, zIndex: zIndexOf("statement") }}
          >
            <DarkCardBody heading={STATEMENT_HEADING} headingSizeCqw={2.5} headingWidthCqw={53.9583} headingWeight={400} headingLineHeight={1.111} headingWrap />
          </button>
 
          {/* About / grey — 274:284 */}
          <button
            type="button"
            onClick={() => bringToFront("about")}
            aria-label="Bring the about card to the front"
            className={`absolute overflow-hidden p-0 text-left ${HOVER_TRANSITION} ${HOVER_CLASS.about}`}
            style={{ ...CARD_POS.about, backgroundColor: CARD_COLOR.about, zIndex: zIndexOf("about") }}
          >
            <DarkCardBody heading={ABOUT_HEADING} headingSizeCqw={6.9444} headingWeight={700} headingLineHeight={1} />
          </button>
 
          {/* Motto / punch-hole — 274:212 */}
          <button
            type="button"
            onClick={() => bringToFront("motto")}
            aria-label="Bring the design motto card to the front"
            className={`absolute overflow-hidden border border-black/10 p-0 text-left ${HOVER_TRANSITION} ${HOVER_CLASS.motto}`}
            style={{ ...CARD_POS.motto, backgroundColor: CARD_COLOR.motto, zIndex: zIndexOf("motto") }}
          >
            <MottoCardBody />
          </button>
        </div>
      </div>
 
      {/* ScrollIndicator — untouched, exact pre-existing wrapper/classes. */}
      <div className="pointer-events-none absolute bottom-16 left-1/2 -translate-x-1/2 text-black/60 md:bottom-20">
        <ScrollIndicator className="h-7 w-5" />
      </div>
    </section>
  );
}
 
