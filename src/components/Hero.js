import ScrollIndicator from "./ScrollIndicator";

// Landing Page Section 1.0 — Hero (design.md §3, Section 1.0).
// Greeting + opening statement copy are FINAL (🟢) — do not reword.
//
// Placement corrected 2026-08-20 (flagged by user): Figma positions this
// row at y=441 of a 900px frame — roughly vertical-center, not glued to
// the bottom — and the headline sits in the same 350px-label/680px-content
// column split used everywhere else on the site (starting at x=380, NOT
// flush against the right edge). The previous `justify-end` + `justify-
// between` layout pushed both lines hard against the bottom-right corner.
export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] w-full flex-col justify-center md:min-h-[90vh]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-[30px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end">
          <p className="font-light tracking-normal text-muted md:w-[350px] md:shrink-0">
            hi! i&rsquo;m sukhman..
          </p>
          <p className="max-w-[680px] text-justify font-bold uppercase tracking-normal leading-[20px] text-black">
            Through structure, strategy and design thinking, I craft
            interaction and experience designs that connect human behaviour
            with digital systems.
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-16 left-1/2 -translate-x-1/2 text-black/60 md:bottom-20">
        <ScrollIndicator className="h-7 w-5" />
      </div>
    </section>
  );
}
