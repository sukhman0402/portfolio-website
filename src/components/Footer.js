// Shared footer component (design.md §2.2) — identical on Landing §6.0 and
// Projects §2.0. Conclusion line, nav labels, email and phone are FINAL
// copy (🟢 in design.md) — do not reword.
//
// KNOWN ISSUE (flagged in design.md §8.2, not urgent): the Figma footer's
// "Behance" row currently duplicates the Email row's value — clearly a
// copy-paste placeholder in the original design. Rather than ship that
// duplicate, this is left as an explicit placeholder below so it's obvious
// to swap for the real Behance URL, instead of silently repeating the email.
const CONTACT_ROWS = [
  { label: "E-mail", value: "sukhmanpreet0402@gmail.com", href: "mailto:sukhmanpreet0402@gmail.com" },
  { label: "Phone", value: "+91  93027 63747", href: "tel:+919302763747" },
  // TODO: still placeholder Latin text in Figma — replace with the real LinkedIn URL.
  { label: "Linkedin", value: "Aenean vulputate eleifend tellus", href: "#" },
  // TODO: replace with the real Behance URL (see note above).
  { label: "Behance", value: "Add your Behance URL", href: "#" },
];

// Spacing rewrite 2026-08-20 against exact pixel data pulled from Figma
// node 241:658 ("Landing Page (D)- Section 6.0" under the Prototype frame),
// alongside the fresh Section 5.0 re-check (node 252:1420 — see
// AboutSection.js). Every offset below is a literal Figma coordinate:
//   - Along the Journey's last content (its closing border line, now added
//     in AboutSection.js) → this section's quote: 369px. This block sits
//     as far from Section 5.0 as About Me sits from the section above IT
//     (249px) plus more — Section 5.0 is bracketed by unusually generous
//     gaps on both sides, confirmed by the numbers, not assumed uniform
//     with the tighter Projects/Research section gaps.
//   - Quote → "Contact" row: 390px.
//   - "Contact" sits in the SAME row as "E-mail" (both y=550 in Figma) —
//     it was wrongly stacked above the list as a heading before. Same
//     350px label-column pattern as every other subsection on the site,
//     with 0px extra grid gap (the column width alone produces the
//     offset).
//   - The dl has NO top border in Figma — only 3 divider lines for 4 rows
//     (between rows, not around them). The old `border-t` on the dl was
//     an extra rule that doesn't exist in the source.
//   - Row rhythm is the same 12px-before-divider / 10px-after-divider used
//     by Along the Journey: row bottom → 12px → divider → 10px → next row
//     top. Row 1 has no divider above it (flush with "Contact"); row 4 has
//     no divider below it (the container's own pb handles the gap to the
//     footer band instead).
//   - Row content → footer band: 62px, supplied by the container's own
//     trailing padding since the last row carries no pb of its own.
export default function Footer() {
  return (
    <footer id="contact" className="w-full">
      <div className="mx-auto max-w-[1440px] px-5 pt-20 pb-16 sm:px-[30px] md:pt-[369px] md:pb-[62px]">
        {/* Content column starts at the same 350px offset as every other
            row on the site. */}
        <p className="max-w-[680px] text-justify font-bold uppercase leading-[20px] tracking-normal text-black md:ml-[350px]">
          Behind every interaction is a decision, a behaviour and an
          opportunity to create a better experience.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-6 md:mt-[390px] md:grid-cols-[350px_1fr] md:gap-x-0">
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
                  
                    href={row.href}
                    className="hover:opacity-60 transition-opacity break-all"
                  >
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
