import Header from "./Header";

// Shared top framework for Individual Project (§5) and Individual Research
// (§5b) pages — header/nav, title, page-number/breadcrumb, divider. Per
// design.md §5 (corrected 2026-08-17): this chrome is identical across
// every individual page; only the content area below it changes per page.
export default function PageTopFramework({ title, index, children }) {
  return (
    <>
      <Header base="/" />
      {/* `main` (not the inner div) is the direct flex child of <body>'s
          flex-col layout — keeping mx-auto off it avoids the flex
          cross-axis auto-margin quirk where a "mx-auto max-w-[...]" element
          shrinks to its content instead of stretching full width when it's
          a direct flex item. Nested mx-auto/max-w divs below are normal
          block descendants of `main`, so they center as expected. */}
      <main className="flex-1">
        <div className="mx-auto max-w-[1440px] px-5 pt-16 sm:px-[30px] md:pt-24">
          <div className="flex items-baseline justify-between border-b border-black pb-3">
            <h1 className="max-w-[680px] font-bold uppercase tracking-normal">
              {title}
            </h1>
            <span className="font-semibold uppercase tracking-normal text-muted">
              {index}
            </span>
          </div>
        </div>
        {children}
      </main>
    </>
  );
}
