import ScrollIndicator from "./ScrollIndicator";

// Landing Page Section 1.0 — Hero (design.md §3, Section 1.0).
// Greeting + opening statement copy are FINAL (🟢) — do not reword.
export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] w-full flex-col justify-end md:min-h-[90vh]">
      <div className="mx-auto w-full max-w-[1440px] px-5 pb-24 sm:px-[30px] md:pb-32">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="font-light tracking-[-1px] text-muted">
            hi! i&rsquo;m sukhman..
          </p>
          <p className="max-w-[680px] font-bold uppercase tracking-[-1px] leading-[20px] text-black md:text-right">
            Through structure, strategy and design thinking, I craft
            interaction and experience designs that connect human behaviour
            with digital systems.
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-black/60 md:bottom-10">
        <ScrollIndicator className="h-7 w-5" />
      </div>
    </section>
  );
}
