"use client";
 
import { useState } from "react";
import ScrollIndicator from "./ScrollIndicator";
 
// Landing Page Section 1.0 — Hero (design.md §3, Section 1.0), rebuilt
// 2026-08-23 after two rounds of live feedback corrected the interaction
// model from the first pass. Recorded here so the reasoning survives:
//
// ROUND 1 (what shipped first, and why it was wrong): I had circles as the
// clickable control and had each card ANIMATE into a different Figma-
// designed "slot" position on click. Re-measuring the actual inspiration
// site (https://aishani.framer.media/, embedded in wallofportfolios.in)
// with getBoundingClientRect() before/after every click proved every card
// there sits at ONE permanent position forever — clicking never moves
// anything, it only changes which card paints on top. That was a real bug,
// not a style choice.
//
// ROUND 2 (this file's actual spec, per direct user correction):
//   - Each of the 3 cards has ONE permanent position (its own Figma group's
//     coordinates) and NEVER moves on click. Ever.
//   - The CARD is the clickable control, not the circles. Clicking a card
//     brings it to the front (z-index + a light opacity crossfade only —
//     still no position change). The circles are a pure status readout:
//     they occupy 3 fixed Figma-specified slots (x=30, y=139/179/219) and
//     whichever card is currently front/mid/back shows its color in the
//     matching slot. They are NOT clickable — plain flat-filled circles,
//     no stroke/ring, exactly as drawn in Figma.
//   - On HOVER (not click), each card nudges toward its own fixed
//     direction — confirmed on the live reference site by direct mouse
//     hover (a synthetic JS hover event I'd tried earlier showed nothing,
//     which was a false negative from not triggering real :hover; actual
//     mouse hover does move the cards ~0.5cm): the About/grey card (their
//     blue) nudges RIGHT, the Statement/black card nudges UP, the Motto/
//     light card (their white) nudges LEFT. ~0.5cm ≈ 19px, used below.
//     This is a transform-only nudge layered on the permanent position —
//     it doesn't contradict "never moves," since it's transient and
//     reverts on mouse-out.
//
// CONTENT/FIDELITY FIX: round 1 also invented UI that isn't in Figma at
// all — a "Statement / About / 2026" tab-bar row and a 3-column footer
// grid for the small labels. Both are gone. Every element below (heading
// box, 3 divider lines, 2 vertical tick marks, the 3 right-aligned
// "Lorem ipsum." labels, the 23-dot punch-hole edge) is positioned from
// the literal Figma coordinates captured via get_design_context on nodes
// 274:260 (statement/black), 274:284 (about/grey) and 274:212 (motto/
// punch-hole) — converted to cqw/cqh (container-query units, off the
// single 1440x1000 `[container-type:size]` stage below) so every offset
// scales in lockstep with the Figma px value it came from, at any
// viewport width, instead of being individually re-derived per card.
//
// Circle color source and card content decisions (chosen colors, the
// "SUKHMAN." heading, the site's real statement paragraph, and the "See →
// Observe → Analyse → Implement" motto text pulled from this project's own
// brief) carry over unchanged from the prior round — those were confirmed,
// only the interaction model and layout fidelity were wrong.
//
// Header and ScrollIndicator remain untouched, per the original brief.
 
const CARD_POS = {
  statement: { left: "19.833%", top: "7.772%", width: "58.35%", height: "74.99%" },
  about: { left: "32.574%", top: "27.254%", width: "56.385%", height: "62.474%" },
  motto: { left: "12.431%", top: "17.132%", width: "32.847%", height: "64.5%" },
};
 
// Hover nudge direction per card, ~0.5cm (≈19px), confirmed by direct
// mouse hover on the reference site (about→right, statement→up,
// motto→left). Pure CSS transform, layered on the permanent position.
const HOVER_CLASS = {
  statement: "hover:-translate-y-[19px]",
  about: "hover:translate-x-[19px]",
  motto: "hover:-translate-x-[19px]",
};
 
const CARD_COLOR = { statement: "#121212", about: "#7e7e7e", motto: "#f3f3f3" };
const CARD_ORDER_IDS = ["statement", "about", "motto"];
 
const STATEMENT_TEXT =
  "Through structure, strategy and design thinking, I craft interaction and experience designs that connect human behaviour with digital systems.";
 
// Shared internal layout for the two dark cards (statement/about) — Figma
// 274:260 and 274:284 use the IDENTICAL relative padding pattern (heading
// at +31/+91px from the card's own top-left; dividers at +51/+226/+441px;
// ticks at +150/+689px; labels at +640,+266/+314/+362px) even though the
// two cards are different sizes — confirming it's a literal px spacing
// value, not a proportional one, which is exactly why these are expressed
// as cqw/cqh off the outer 1440-wide stage rather than "% of this card."
function DarkCardBody({ heading, headingSizeCqw, headingWidthCqw }) {
  const labels = ["Lorem ipsum.", "Lorem ipsum.", "Lorem ipsum."];
  const labelTops = ["26.6cqh", "31.4cqh", "36.2cqh"];
  return (
    <>
      {/* 2 vertical tick marks, top strip (Figma has no text here) */}
      <span className="absolute bg-white/25" style={{ left: "10.417cqw", top: 0, height: "5.1cqh", width: "1px" }} aria-hidden="true" />
      <span className="absolute bg-white/25" style={{ left: "47.847cqw", top: 0, height: "5.1cqh", width: "1px" }} aria-hidden="true" />
      {/* 3 horizontal dividers */}
      {["5.1cqh", "22.6cqh", "44.1cqh"].map((top) => (
        <span key={top} className="absolute inset-x-0 bg-white/20" style={{ top, height: "1px" }} aria-hidden="true" />
      ))}
      {/* heading */}
      <p
        className="absolute text-justify font-bold uppercase leading-[1.1] tracking-normal text-white"
        style={{
          left: "2.153cqw",
          top: "9.1cqh",
          width: headingWidthCqw ? `${headingWidthCqw}cqw` : "auto",
          fontSize: `${headingSizeCqw}cqw`,
          whiteSpace: headingWidthCqw ? "normal" : "nowrap",
        }}
      >
        {heading}
      </p>
      {/* 3 right-aligned labels, between divider 2 and divider 3 */}
      {labels.map((t, i) => (
        <p
          key={i}
          className="absolute whitespace-nowrap text-white/70"
          style={{ left: "44.444cqw", top: labelTops[i], fontSize: "1.042cqw" }}
        >
          {t}
        </p>
      ))}
    </>
  );
}
 
// Motto/punch-hole card body — Figma 274:212. 23 dots (274:216–238) run the
// full left edge at a fixed 27px step; heading box at +60,+163px (345px
// wide); top label at +64,+25px; bottom label at +64,+602px — all
// relative to the card's own Figma origin (179, 171.32), in cqw/cqh.
function MottoCardBody() {
  return (
    <>
      <div
        className="absolute flex flex-col justify-between"
        style={{ left: "0.694cqw", top: "1.6cqh", height: "61.4cqh" }}
        aria-hidden="true"
      >
        {Array.from({ length: 23 }).map((_, i) => (
          <span key={i} className="h-[8px] w-[8px] rounded-full bg-black/70" />
        ))}
      </div>
      <span
        className="absolute whitespace-nowrap uppercase tracking-widest text-black/50"
        style={{ left: "4.444cqw", top: "2.5cqh", fontSize: "0.9cqw" }}
      >
        My Design Philosophy
      </span>
      <p
        className="absolute font-bold uppercase leading-[0.95] tracking-[-1px] text-black"
        style={{ left: "4.167cqw", top: "16.3cqh", width: "23.958cqw", fontSize: "6.25cqw" }}
      >
        See Observe Analyse Implement.
      </p>
      <p
        className="absolute whitespace-nowrap text-black/50"
        style={{ left: "4.444cqw", top: "60.2cqh", fontSize: "0.9cqw" }}
      >
        the process behind everything I design.
      </p>
    </>
  );
}
 
// Simplified, non-cqw versions of the two card bodies for the mobile block
// below (no container-query stage there — plain flow, plain px/rem).
function MobileDark({ heading }) {
  return (
    <div className="relative text-white">
      <div className="mb-4 flex items-center gap-6 border-b border-white/20 pb-3" aria-hidden="true">
        <span className="h-px w-6 bg-white/25" />
        <span className="h-px w-6 bg-white/25" />
      </div>
      <p className="text-[15px] font-bold uppercase leading-[20px] tracking-normal">{heading}</p>
      <div className="mt-4 flex flex-col gap-1 border-t border-white/20 pt-3">
        {["Lorem ipsum.", "Lorem ipsum.", "Lorem ipsum."].map((t, i) => (
          <p key={i} className="text-[11px] text-white/70">{t}</p>
        ))}
      </div>
    </div>
  );
}
 
function MobileMotto() {
  return (
    <div className="relative pl-6 text-black">
      <span className="mb-2 block text-[11px] uppercase tracking-widest text-black/50">My Design Philosophy</span>
      <p className="text-[26px] font-bold uppercase leading-[0.95] tracking-[-1px]">See Observe Analyse Implement.</p>
      <p className="mt-4 text-[11px] text-black/50">the process behind everything I design.</p>
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
 
  // Circles: 3 FIXED Figma slots (x=30, y=139/179/219) — never move. Only
  // which card's color currently occupies each slot changes, read off the
  // front→back order (top slot = front).
  const frontToBack = [...order].reverse();
 
  return (
    <section className="relative w-full pb-16 pt-10 md:pb-24 md:pt-6">
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
            <div key={frontId} className="relative animate-[heroFadeIn_0.35s_ease-out] rounded-sm p-5" style={{ backgroundColor: CARD_COLOR[frontId] }}>
              {frontId === "motto" ? (
                <MobileMotto />
              ) : (
                <MobileDark heading={frontId === "statement" ? STATEMENT_TEXT : "SUKHMAN."} />
              )}
            </div>
          </button>
        </div>
 
        {/* Desktop (md+) — the real Figma stage: 3 cards, each PERMANENTLY
            at its own Figma position (never animated), only z-index +
            opacity change on click. Hover nudges layered independently. */}
        <div className="relative mt-16 hidden aspect-[1440/1000] w-full [container-type:size] md:block">
          {/* Circles — fixed Figma slots, display-only, flat fill, no stroke. */}
          <div className="pointer-events-none absolute z-50 flex flex-col gap-[14px]" style={{ left: "2.083%", top: "13.9%" }}>
            {frontToBack.map((id) => (
              <span key={id} className="h-[25px] w-[25px] rounded-full" style={{ backgroundColor: CARD_COLOR[id] }} />
            ))}
          </div>
 
          {/* Statement / black — 274:260 */}
          <button
            type="button"
            onClick={() => bringToFront("statement")}
            aria-label="Bring the statement card to the front"
            className={`absolute p-0 text-left transition-[transform,opacity] duration-300 ease-out ${HOVER_CLASS.statement}`}
            style={{ ...CARD_POS.statement, backgroundColor: CARD_COLOR.statement, zIndex: zIndexOf("statement"), opacity: frontId === "statement" ? 1 : 0.94 }}
          >
            <DarkCardBody heading={STATEMENT_TEXT} headingSizeCqw={2.5} headingWidthCqw={53.958} />
          </button>
 
          {/* About / grey — 274:284 */}
          <button
            type="button"
            onClick={() => bringToFront("about")}
            aria-label="Bring the about card to the front"
            className={`absolute p-0 text-left transition-[transform,opacity] duration-300 ease-out ${HOVER_CLASS.about}`}
            style={{ ...CARD_POS.about, backgroundColor: CARD_COLOR.about, zIndex: zIndexOf("about"), opacity: frontId === "about" ? 1 : 0.94 }}
          >
            <DarkCardBody heading="SUKHMAN." headingSizeCqw={6.944} />
          </button>
 
          {/* Motto / punch-hole — 274:212 */}
          <button
            type="button"
            onClick={() => bringToFront("motto")}
            aria-label="Bring the design motto card to the front"
            className={`absolute overflow-hidden border border-black/10 p-0 text-left transition-[transform,opacity] duration-300 ease-out ${HOVER_CLASS.motto}`}
            style={{ ...CARD_POS.motto, backgroundColor: CARD_COLOR.motto, zIndex: zIndexOf("motto"), opacity: frontId === "motto" ? 1 : 0.94 }}
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
 
