"use client";
 
import { useState } from "react";
import ScrollIndicator from "./ScrollIndicator";
 
// Landing Page Section 1.0 — Hero, REPLACED 2026-08-23 (design.md §3,
// Section 1.0 supersedes the 2026-08-20 static-quote version).
//
// Source of truth: two things, combined.
//   1. Figma node 274:145 "Landing Page (D1)- Section 1.0" (1440x1000 —
//      taller than the old 900px frame; the user resized it for this
//      richer composition) — an explicitly LOW-FIDELITY demo frame: exact
//      colors (#121212 / #7e7e7e), exact card positions/sizes, and the 3
//      circle placements are real spec; every text node in it is still
//      "Lorem ipsum" placeholder, and only 2 of the 3 cards implied by the
//      3 circles are actually drawn (a 3rd, the "motto" card below, has no
//      Figma group at all — see the per-card notes below).
//   2. https://www.wallofportfolios.in/portfolios/aishani-patial/ (actually
//      served from an embedded https://aishani.framer.media/ iframe) — the
//      INTERACTION the user asked to "inculcate": 3 overlapping cards in a
//      stack; clicking either a small circle/thumbnail OR the visible
//      peeking edge of a background card brings that card to the front
//      (largest, topmost) slot with a smooth animated reposition; the two
//      cards not currently active fall back into the two rear slots.
//      Confirmed live via clicking through all 3 states plus a direct
//      background-card click — both trigger the same front-card swap.
//
// Card ⟷ circle mapping (this is deliberate, not arbitrary): in Figma each
// of the 3 top-left ellipses (274:174/175/176) is filled with almost
// exactly the background color of one of the 3 cards below it (grey,
// near-black, near-white) — i.e. each circle is a literal color-coded
// swatch for the card it activates. That's the mechanism this file
// implements: click a circle (or a card's own peeking edge) → that card's
// index moves to the front of `order`.
//
//   Circle/Card A — #121212 — the site's ACTUAL final hero statement
//     (carried over verbatim from the old Hero.js, marked 🟢 final there —
//     dropping the separate "hi i'm sukhman.." greeting line, since the
//     new Figma frame has no equivalent second line, just one paragraph).
//     Figma group 274:260/261 "Group 330". Slot = the frame's "mid" card.
//   Circle/Card B — #7e7e7e — the About/name-style card (Figma's default,
//     frontmost-at-rest composition — matches the live site's initial
//     "Aishani Patial" card). Heading is "SUKHMAN." — real, matches the
//     header logotype, not placeholder. Figma group 274:284 "Group 331".
//     Slot = the frame's "front" card (largest, frontmost by default).
//   Circle/Card C — light/#f3f3f3 — the perforated "punch-hole" card
//     (274:212 "Group 328", the Subtract/23-circle shape). No exact fill
//     hex was recoverable — it's a vector boolean op, not a flat rect — so
//     this reuses the site's existing --footer-band token rather than
//     guessing a new grey. On the live site this exact card-shape plays a
//     "My design motto" quote card, so its big placeholder heading is
//     replaced with the user's own stated design philosophy from this
//     project's brief ("See → Observe → Analyse → Implement") — real
//     content, not filler, and a natural fit for what the slot is for.
//     Slot = the frame's "back" card (leftmost, partially hidden by
//     default).
//
// Every other text on every card (the small "Lorem ipsum." labels) stays
// literal placeholder, in the same style aboutData.js already uses
// elsewhere on the site — per explicit instruction, ship placeholder-tier
// for now rather than inventing copy.
//
// Simplification flagged honestly: the live site subtly RESIZES cards as
// they move between slots; Figma only specifies 3 fixed card sizes with no
// per-state resize data for the two cards it doesn't draw. Rather than
// guess at resize behaviour Figma doesn't spec, each card keeps its own
// Figma-defined width/height always and only animates left/top/z-index
// between the 3 slot anchor points — still a genuine animated front/back
// reshuffle, just without the live site's extra resize flourish. Flag this
// if pixel-exact per-state sizing matters — it would need its own Figma
// frame per state to build against, the same way this one exists for the
// resting state.
//
// Layout mechanism: the desktop stack is positioned with PERCENTAGES of a
// 1440x1000 reference (matching every literal Figma px in this file) inside
// an `aspect-[1440/1000]` container, so it scales fluidly at any viewport
// width instead of the fixed-px approach used elsewhere on the site (which
// only works because those sections reflow in a normal grid — this one is
// absolutely-positioned overlapping cards, which would clip below 1440px
// otherwise). Font sizes use `cqw` (container query width) units off the
// same container for the same reason — plain px text would overflow a
// card that's shrunk to fit a narrow viewport.
//
// Mobile (< md) doesn't attempt the overlapping stack at all — 3 absolute,
// overlapping, percentage-positioned cards has no sane fallback on a phone
// width. Instead it's a plain tab strip (the same 3 circles) above a
// single full-width card showing whichever one is active, in normal flow.
// This is a separate, simpler markup block (`md:hidden` vs `hidden
// md:block`), not a responsive reflow of the same DOM — the two layouts
// are different enough that sharing one tree would compromise both.
//
// Header and ScrollIndicator are UNTOUCHED per explicit instruction: Header
// is a sibling in page.js, never imported here; ScrollIndicator keeps its
// exact pre-existing wrapper/classes below.
 
const CARDS = [
  { id: "statement", label: "statement", color: "#121212" },
  { id: "about", label: "about", color: "#7e7e7e" },
  { id: "motto", label: "design motto", color: "#f3f3f3" },
];
 
// Slot anchors, back → front, as % of the 1440x1000 reference frame.
// Matches Figma's default resting order: grey (front) over black (mid)
// over the punch-hole card (back).
const SLOTS = [
  { left: "12.431%", top: "17.132%", z: 10 }, // back  — punch-hole position (274:212)
  { left: "19.833%", top: "7.772%", z: 20 }, // mid   — black card position (274:260)
  { left: "32.574%", top: "27.254%", z: 30 }, // front — grey card position (274:284)
];
 
// Each card's own native size, held fixed across every slot (see
// "Simplification flagged honestly" above) — % of the 1440x1000 reference.
const CARD_SIZE = [
  { width: "58.35%", height: "74.99%" }, // A — black statement card
  { width: "56.385%", height: "62.474%" }, // B — grey about card
  { width: "32.847%", height: "64.5%" }, // C — punch-hole motto card
];
 
function StatementBody({ scaled }) {
  return (
    <>
      <div
        className={`mb-4 flex items-center justify-between border-b border-white/20 pb-3 ${scaled ? "md:mb-[24px] md:pb-[16px]" : ""}`}
      >
        <span className={`text-[11px] uppercase tracking-widest text-white/50 ${scaled ? "md:text-[1.1cqw]" : ""}`}>
          Statement
        </span>
        <span className={`text-[11px] text-white/50 ${scaled ? "md:text-[1.1cqw]" : ""}`}>2026</span>
      </div>
      <p
        className={`text-justify text-[15px] font-bold uppercase leading-[20px] tracking-normal ${scaled ? "md:text-[2.5cqw] md:leading-[1.15]" : ""}`}
      >
        Through structure, strategy and design thinking, I craft interaction
        and experience designs that connect human behaviour with digital
        systems.
      </p>
      <div
        className={`mt-auto grid grid-cols-3 gap-3 border-t border-white/20 pt-3 ${scaled ? "md:gap-[16px] md:pt-[16px]" : ""}`}
      >
        {["Lorem ipsum.", "Lorem ipsum.", "Lorem ipsum."].map((t, i) => (
          <p key={i} className={`text-[11px] text-white/70 ${scaled ? "md:text-[0.9cqw]" : ""}`}>
            {t}
          </p>
        ))}
      </div>
    </>
  );
}
 
function AboutBody({ scaled }) {
  return (
    <>
      <div
        className={`mb-4 flex items-center justify-between border-b border-white/30 pb-3 ${scaled ? "md:mb-[24px] md:pb-[16px]" : ""}`}
      >
        <span className={`text-[11px] uppercase tracking-widest text-white/70 ${scaled ? "md:text-[1.1cqw]" : ""}`}>
          About
        </span>
        <span className={`text-[11px] text-white/70 ${scaled ? "md:text-[1.1cqw]" : ""}`}>2026</span>
      </div>
      <p className={`text-[32px] font-bold uppercase leading-none tracking-[-1px] ${scaled ? "md:text-[6.944cqw]" : ""}`}>
        SUKHMAN.
      </p>
      <div
        className={`mt-auto grid grid-cols-3 gap-3 border-t border-white/30 pt-3 ${scaled ? "md:gap-[16px] md:pt-[16px]" : ""}`}
      >
        {["Lorem ipsum.", "Lorem ipsum.", "Lorem ipsum."].map((t, i) => (
          <p key={i} className={`text-[11px] text-white/80 ${scaled ? "md:text-[0.9cqw]" : ""}`}>
            {t}
          </p>
        ))}
      </div>
    </>
  );
}
 
function MottoBody({ scaled }) {
  return (
    <>
      <div
        className={`absolute bottom-3 left-2 top-3 flex flex-col items-center justify-between ${scaled ? "md:bottom-[12px] md:left-[10px] md:top-[16px]" : ""}`}
        aria-hidden="true"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="h-[6px] w-[6px] rounded-full bg-black/70" />
        ))}
      </div>
      <span className={`text-[11px] uppercase tracking-widest text-black/50 ${scaled ? "md:text-[0.9cqw]" : ""}`}>
        My Design Philosophy
      </span>
      <p
        className={`mt-6 text-[28px] font-bold uppercase leading-[0.95] tracking-[-1px] ${scaled ? "md:mt-[6%] md:text-[6.25cqw]" : ""}`}
      >
        See
        <br />
        Observe
        <br />
        Analyse
        <br />
        Implement.
      </p>
      <p className={`mt-auto pt-6 text-[11px] text-black/50 ${scaled ? "md:pt-[10%] md:text-[0.9cqw]" : ""}`}>
        the process behind everything I design.
      </p>
    </>
  );
}
 
export default function Hero() {
  // order[0] = back, order[1] = mid, order[2] = front (active) card index.
  // Default matches Figma's resting composition exactly: grey/about (card
  // index 1) in the front slot, black/statement (0) in mid, punch-hole/
  // motto (2) in back — i.e. order = [back, mid, front] = [2, 0, 1].
  // (Caught live: [0,1,2] was shipped first and put the motto card, not
  // the about card, in front by default — a plain off-by-mapping bug, not
  // a design change; fixed here.)
  const [order, setOrder] = useState([2, 0, 1]);
 
  function activate(cardIndex) {
    setOrder((prev) => [...prev.filter((i) => i !== cardIndex), cardIndex]);
  }
 
  const slotOf = (cardIndex) => order.indexOf(cardIndex);
  const active = order[2];
 
  const bodies = [StatementBody, AboutBody, MottoBody];
  const cardBaseClass = [
    "flex flex-col bg-[#121212] text-white",
    "flex flex-col bg-[#7e7e7e] text-white",
    "flex flex-col border border-black/10 bg-footer-band pl-8 text-black md:pl-[48px]",
  ];
 
  return (
    <section className="relative w-full pb-16 pt-10 md:pb-24 md:pt-6">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-[30px]">
        {/* Mobile (< md) — plain flow: the 3 circles as a tab strip above a
            single active card, crossfade on switch. */}
        <div className="md:hidden">
          <div className="mb-4 flex gap-3">
            {CARDS.map((card, i) => (
              <button
                key={card.id}
                type="button"
                onClick={() => activate(i)}
                aria-label={`Show ${card.label} card`}
                aria-pressed={active === i}
                className={`h-[25px] w-[25px] shrink-0 rounded-full border transition-transform hover:scale-110 ${
                  active === i ? "border-black ring-2 ring-black ring-offset-2" : "border-black/20"
                }`}
                style={{ backgroundColor: card.color }}
              />
            ))}
          </div>
          <div key={active} className="animate-[heroFadeIn_0.35s_ease-out]">
            <div className={`relative rounded-sm p-5 ${cardBaseClass[active]}`}>
              {(() => {
                const Body = bodies[active];
                return <Body scaled={false} />;
              })()}
            </div>
          </div>
        </div>
 
        {/* Desktop (md+) — the real Figma stack: circles + 3 cards share
            ONE positioning box (this div) so their percentages resolve
            against the same 1440x1000 reference — Figma 274:174/175/176
            put the circles at x=30,y=139/179/219 in that exact frame, and
            splitting them into a separately-positioned ancestor would
            silently misalign them against the cards below. */}
        <div className="relative mt-16 hidden aspect-[1440/1000] w-full [container-type:inline-size] md:block">
          {/* Circles — color = the card each one activates. */}
          <div className="absolute z-40 flex flex-col gap-[14px]" style={{ left: "2.083%", top: "13.9%" }}>
            {CARDS.map((card, i) => (
              <button
                key={card.id}
                type="button"
                onClick={() => activate(i)}
                aria-label={`Show ${card.label} card`}
                aria-pressed={active === i}
                className={`h-[25px] w-[25px] shrink-0 rounded-full border transition-transform hover:scale-110 ${
                  active === i ? "border-black ring-2 ring-black ring-offset-2" : "border-black/20"
                }`}
                style={{ backgroundColor: card.color }}
              />
            ))}
          </div>
 
          {CARDS.map((card, i) => {
            const Body = bodies[i];
            const slot = SLOTS[slotOf(i)];
            const size = CARD_SIZE[i];
            return (
              <button
                key={card.id}
                type="button"
                onClick={() => activate(i)}
                aria-label={`Bring the ${card.label} card to the front`}
                className={`absolute p-[36px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${cardBaseClass[i]}`}
                style={{
                  left: slot.left,
                  top: slot.top,
                  width: size.width,
                  height: size.height,
                  zIndex: slot.z,
                }}
              >
                <Body scaled={true} />
              </button>
            );
          })}
        </div>
      </div>
 
      {/* ScrollIndicator — untouched, exact pre-existing wrapper/classes. */}
      <div className="pointer-events-none absolute bottom-16 left-1/2 -translate-x-1/2 text-black/60 md:bottom-20">
        <ScrollIndicator className="h-7 w-5" />
      </div>
    </section>
  );
}
 
