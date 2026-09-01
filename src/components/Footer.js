// Shared footer component (design.md §2.2) — identical on Landing §6.0 and
// Projects §2.0. Nav labels, email and phone are FINAL copy (🟢 in
// design.md) — do not reword.
//
// KNOWN ISSUE (flagged in design.md §8.2, not urgent): the Figma footer's
// "Behance" row currently duplicates the Email row's value — clearly a
// copy-paste placeholder in the original design. Rather than ship that
// duplicate, this is left as an explicit placeholder below so it's obvious
// to swap for the real Behance URL, instead of silently repeating the email.
//
// REDESIGN 2026-08-31 — the top "quote" area was rebuilt against a fresh
// Figma pull as a quote block (label row + divider + heading/quote row),
// replacing the old single-paragraph conclusion line ("Behind every
// interaction is a decision...") — see git history. Section 6.0 itself
// (the outer frame this quote block sits in) is node 304:1326 and has
// stayed at that id across every redesign round so far, even though the
// quote block inside it keeps getting a new id each time it's redesigned.
//
// REDESIGN 2026-09-01 (this round) — the quote block moved again: the
// previous node (321:1405's predecessor) no longer matches the current
// content; the block is now node 321:1405, still inside the same
// Section 6.0 frame (304:1326). Two real design changes this round, not
// just node-id churn — identical to what happened to Hero's quote block
// in the same pass (see NOTE ON DUPLICATION below):
//   1. Quote block font size dropped from 30px to 15px for BOTH the
//      heading (left column) and the quote text (right column) — still
//      SF Pro Semibold (weight 590, this codebase's font-semibold), but
//      15px now, same size as the label row above it. The quote
//      paragraph's own tracking is now -0.5px (was -0.375px, matching
//      the heading); the heading itself stays -0.375px, same as the
//      label row. This is why the block's own height shrank from 148px
//      to 74px — the long quote text now wraps to 2 lines at 15px
//      instead of rendering large.
//   2. Row rhythm inside the block is now a flat 10px both before AND
//      after the divider (label row bottom -> +10 -> divider -> +10 ->
//      heading row), not the previous 12px-before/10px-after split.
//      Re-measured directly off the new node's raw coordinates (label
//      top 180, divider 208, heading row 218).
//
// NOTE ON DUPLICATION: Hero (Section 1.0) went through the exact same two
// changes this round, on its own quote block. Still NOT shared between
// the two files — reverted to separate markup per direct instruction
// earlier (the blocks are laid out identically but hold independent
// content), and that still holds; only the numbers were re-synced from
// the fresh Figma pull, in both files separately.
//
// Spacing re-derived from the fresh pull (all values measured off Section
// 6.0's own y=0, since the Prototype frame stacks every section with
// ZERO gap between frame boundaries — unchanged convention, re-confirmed
// this round too):
//   - Section top -> quote block's top label row: the quote block's own
//     local top moved from 170px to 180px this round (+10px). Per the
//     2026-09-01 correction earlier in this file's history, Footer's own
//     pt- has to stand in for BOTH Section 5.0's ~249px of Figma-frame
//     dead space below "Along the Journey" (AboutSection.js deliberately
//     renders no trailing pb — "Footer's own pt provides the gap to the
//     next section") AND this section's own genuine local-top offset,
//     since sections stack with zero gap. Recomputed fresh from raw
//     coordinates this round (249 dead-space + 180 local-top = 429px),
//     rather than carrying the old 418px forward and adding the +10px
//     delta — both land within a hairline of each other, 429 is used
//     here as the direct-from-Figma value. pt-[418px] below is now
//     pt-[429px].
//   - Quote block's own bottom -> "Contact" row: the block's own bottom
//     moved from local y=318 (170+148) to local y=254 (180+74) as a
//     direct result of the font-size shrink above — the block is
//     shorter, so there's more room before "Contact" (still at its own
//     unchanged local y=750). New gap: 750 - 254 = 496px (was 432px).
//     mt-[432px] below is now mt-[496px].
//   - Row rhythm inside the block: 10px gap before the divider, 10px
//     after it — changed from 12px/10px, see the redesign note above.
//   - Everything below "Contact" (row rhythm, footer band) is UNCHANGED —
//     re-verified against the fresh pull, still exactly 12px-before-
//     divider / 10px-after-divider per row, still 62px from the last row
//     to the footer band. Contact itself wasn't touched by this redesign
//     round at all, only the quote block above it.
 
// Literal Figma placeholder text (node 321:1405, get_design_context) —
// not curated copy. Kept as-is per instruction to match the redesign
// exactly. Currently identical to Hero's own placeholder strings (both
// point at the same unfinished Figma text), but declared as this file's
// own constants rather than imported/shared — see the note above.
const QUOTE_TOP_LABEL_LEFT = "Lorem ipsum";
const QUOTE_TOP_LABEL_RIGHT = "Lorem ipsum";
const QUOTE_HEADING = "Lorem ipsum";
const QUOTE_TEXT =
  "Lorem ipsum dolor sit amet, consectetuer lorem, adipiscing elit. Aenean commodo ligula.  ipsum dolor sit amet, consectetuer lorem, adipiscing elit. Aenean commodo ligula.";
 
const CONTACT_ROWS = [
  { label: "E-mail", value: "sukhmanpreet0402@gmail.com", href: "mailto:sukhmanpreet0402@gmail.com" },
  { label: "Phone", value: "+91  93027 63747", href: "tel:+919302763747" },
  // TODO: still placeholder Latin text in Figma — replace with the real LinkedIn URL.
  { label: "Linkedin", value: "Aenean vulputate eleifend tellus", href: "#" },
  // TODO: replace with the real Behance URL (see note above).
  { label: "Behance", value: "Add your Behance URL", href: "#" },
];
 
// Row rhythm below "Contact" (unchanged by this or any prior redesign
// round): the dl has NO top border in Figma — only 3 divider lines for 4
// rows (between rows, not around them). Row rhythm is 12px-before-divider
// / 10px-after-divider: row bottom → 12px → divider → 10px → next row top.
// Row 1 has no divider above it (flush with "Contact"); row 4 has no
// divider below it (the container's own pb handles the gap to the footer
// band instead). Row content → footer band: 62px, supplied by the
// container's own trailing padding since the last row carries no pb of
// its own. "Contact" still sits in the SAME row as "E-mail" — same 350px
// label-column pattern as every other subsection on the site.
export default function Footer() {
  return (
    <footer id="contact" className="w-full">
      {/* pt-[300px] (mobile only, md:pt-[429px] unchanged) — site-wide 300px
          inter-section rule (see ResearchSection/TimelineSection/
          AboutSection), flagged 2026-09-02: gap from AboutSection's "Along
          the Journey" closing border line to this quote block's heading. */}
      <div className="mx-auto max-w-[1440px] px-5 pt-[300px] pb-16 sm:px-[30px] md:pt-[429px] md:pb-[62px]">
        {/* MOBILE quote block — flagged 2026-09-02, direct instruction: "the
            same thing we did for [Hero's] first quote... for the footer's
            conclusion quote section, follow the same design principles and
            rules." Same structural change as Hero's mobile redesign: drop
            the two top "Lorem ipsum" labels, move the divider so it sits
            between the heading and the quote paragraph instead (heading ->
            divider -> paragraph, one "set"). Scoped to that structural
            change only — Hero's other two mobile changes (centering inside
            a fixed 874px "first screen", and swapping the scroll icon for
            "Scroll Down" text) don't have an equivalent here: this quote
            block isn't a standalone screen, it flows straight into Contact
            right below it, and there's no scroll-icon element here to
            begin with. Flag if a fuller replication was intended instead. */}
        <div className="md:hidden">
          <p className="font-semibold tracking-[-0.375px] text-black">
            {QUOTE_HEADING}
          </p>
          <div className="mt-[10px] border-t border-black" />
          <p className="mt-[10px] whitespace-pre-wrap font-semibold tracking-[-0.5px] text-black">
            {QUOTE_TEXT}
          </p>
        </div>
 
        {/* DESKTOP quote block — untouched original markup (Row 1 top
            labels, divider, Row 2 heading+quote), just gated to md+ so it
            stops rendering below md. */}
        <div className="hidden md:block">
          {/* Row 1 — top labels, 15px regular */}
          <div className="grid grid-cols-1 gap-1 md:grid-cols-[350px_1fr] md:gap-x-0">
            <p className="font-normal tracking-[-0.375px] text-black md:text-[15px]">
              {QUOTE_TOP_LABEL_LEFT}
            </p>
            <p className="font-normal tracking-[-0.375px] text-black md:text-[15px]">
              {QUOTE_TOP_LABEL_RIGHT}
            </p>
          </div>
 
          {/* Divider — 10px below the label row (Figma: label top 180 + 18
              tall -> divider at 208, i.e. 10px gap) */}
          <div className="mt-[10px] border-t border-black" />
 
          {/* Row 2 — heading + quote, 15px semibold, 10px below the divider
              (Figma: divider at 208 -> row at 218). Quote text (right
              column) carries its own -0.5px tracking, distinct from the
              heading's -0.375px. */}
          <div className="mt-[10px] grid grid-cols-1 gap-3 md:grid-cols-[350px_1fr] md:gap-x-0">
            <p className="font-semibold tracking-[-0.375px] text-black md:text-[15px]">
              {QUOTE_HEADING}
            </p>
            <p className="whitespace-pre-wrap font-semibold tracking-[-0.5px] text-black md:text-[15px]">
              {QUOTE_TEXT}
            </p>
          </div>
        </div>
 
        <div className="mt-16 grid grid-cols-1 gap-6 md:mt-[496px] md:grid-cols-[350px_1fr] md:gap-x-0">
          <h2 className="font-bold uppercase tracking-normal text-black">
            Contact
          </h2>
 
          <dl className="divide-y divide-black">
            {CONTACT_ROWS.map((row, i) => (
              <div
                key={row.label}
                className={`flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 md:py-0 ${
                  i !== 0 ? "md:pt-[10px]" : ""
                } ${i !== CONTACT_ROWS.length - 1 ? "md:pb-[12px]" : ""}`}
              >
                <dt className="font-semibold uppercase tracking-[-0.5px]">
                  {row.label}
                </dt>
                <dd className="font-semibold uppercase tracking-[-0.5px] text-right">
                  <a href={row.href} className="hover:opacity-60 transition-opacity break-all">
                    {row.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
 
      <div className="w-full bg-footer-band">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-[30px]">
          <span className="font-bold tracking-normal text-muted">
            SUKHMAN.
          </span>
          <span className="text-right text-muted font-normal tracking-[-0.5px]">
            © All rights reserved- Sukhmanpreet Singh Saini
          </span>
        </div>
      </div>
    </footer>
  );
}
 
