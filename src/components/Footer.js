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
// Figma pull (Section 6.0 re-pulled as node 304:1326, nested inside
// "Landing Page (D)- Prototype" / 241:452 — the previous node id, 241:658,
// no longer exists in the file; node ids shift when a frame is
// redesigned/replaced, so always re-resolve by name+Prototype-nesting
// rather than trusting an old id). The single-paragraph conclusion line
// ("Behind every interaction is a decision...") has been replaced by a
// quote block (label row + divider + heading/quote row) — the redesigned
// Figma frame shows only fresh Lorem-ipsum placeholder text in this slot
// now, not that sentence, so the old final copy has been DROPPED rather
// than force-fit into the new structure. Flagging this explicitly since
// design.md marked that line 🟢 final — worth confirming with
// Sukhmanpreet this drop was intentional.
//
// NOTE ON DUPLICATION: Hero (Section 1.0) currently uses the visually
// IDENTICAL label/divider/heading-row layout. An earlier pass factored
// that shared layout into one <QuoteBlock/> component imported by both
// files — reverted per direct instruction: the two blocks are NOT the
// same thing, just currently dressed in the same placeholder layout/text.
// This footer's quote and Hero's quote will hold different, independent
// content once real copy goes in, so this file owns its own markup below
// rather than sharing a component that would couple them.
//
// Spacing re-derived from the fresh pull (all values measured off Section
// 6.0's own y=0, since the Prototype frame stacks every section with
// ZERO gap between frame boundaries — confirmed directly this round by
// checking every section pair in 241:452, not just inferred):
//   - Section top -> quote block's top label row: 170px (was 369px pre-
//     redesign; the whole quote area moved much closer to the top of this
//     section).
//   - Quote block's own bottom -> "Contact" row: 432px (measured as
//     Contact's y=750 minus the quote block's bottom y=318; was 390px
//     pre-redesign).
//   - Row rhythm inside the block: 12px gap before the divider, 10px
//     after it — same as the row rhythm used everywhere else in this
//     file (Contact rows, below).
//   - Everything below "Contact" (row rhythm, footer band) is UNCHANGED —
//     re-verified against the fresh pull, still exactly 12px-before-
//     divider / 10px-after-divider per row, still 62px from the last row
//     to the footer band.
 
// Literal Figma placeholder text (node 304:1342, get_design_context) —
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
 
// Row rhythm below "Contact" (unchanged by the redesign, re-verified this
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
      <div className="mx-auto max-w-[1440px] px-5 pt-16 pb-16 sm:px-[30px] md:pt-[170px] md:pb-[62px]">
        {/* Row 1 — top labels, 15px regular */}
        <div className="grid grid-cols-1 gap-1 md:grid-cols-[350px_1fr] md:gap-x-0">
          <p className="font-normal tracking-[-0.375px] text-black md:text-[15px]">
            {QUOTE_TOP_LABEL_LEFT}
          </p>
          <p className="font-normal tracking-[-0.375px] text-black md:text-[15px]">
            {QUOTE_TOP_LABEL_RIGHT}
          </p>
        </div>
 
        {/* Divider — 12px below the label row (Figma: label top 170 + 18
            tall -> divider at 200, i.e. 12px gap) */}
        <div className="mt-3 border-t border-black md:mt-[12px]" />
 
        {/* Row 2 — heading + quote, 30px semibold, 10px below the divider
            (Figma: divider at 200 -> row at 210) */}
        <div className="mt-4 grid grid-cols-1 gap-3 md:mt-[10px] md:grid-cols-[350px_1fr] md:gap-x-0">
          <p className="font-semibold tracking-[-0.375px] text-black md:text-[30px]">
            {QUOTE_HEADING}
          </p>
          <p className="whitespace-pre-wrap font-semibold tracking-[-0.375px] text-black md:text-[30px]">
            {QUOTE_TEXT}
          </p>
        </div>
 
        <div className="mt-16 grid grid-cols-1 gap-6 md:mt-[432px] md:grid-cols-[350px_1fr] md:gap-x-0">
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
 
