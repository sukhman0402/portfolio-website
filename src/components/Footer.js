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

export default function Footer() {
  return (
    <footer id="contact" className="w-full">
      {/* pt normalized to match every other section's top gap
          (corrected 2026-08-20 — was pt-24/32, an outlier next to
          everything else's pt-20/28, part of the "spacing isn't
          maintained" report). */}
      <div className="mx-auto max-w-[1440px] px-5 pt-20 pb-16 sm:px-[30px] md:pt-28">
        {/* Content column starts at the same 350px offset as every other
            row on the site (corrected 2026-08-20 — was flush against the
            page edge instead of aligned with the label/content split). */}
        <p className="max-w-[680px] text-justify font-bold uppercase leading-[20px] tracking-normal text-black md:ml-[350px]">
          Behind every interaction is a decision, a behaviour and an
          opportunity to create a better experience.
        </p>

        <div className="mt-16 md:mt-20">
          <h2 className="font-bold uppercase tracking-normal text-black">
            Contact
          </h2>

          <dl className="mt-5 divide-y divide-black border-t border-black">
            {CONTACT_ROWS.map((row) => (
              <div
                key={row.label}
                className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <dt className="font-semibold uppercase tracking-[-0.5px]">
                  {row.label}
                </dt>
                <dd className="font-semibold uppercase tracking-[-0.5px] text-right">
                  <a
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
