import {
  aboutMeColumns,
  principles,
  workflowCategories,
  journeyEntries,
} from "@/lib/aboutData";
 
// Landing Page Section 5.0 — About Me / How I Function / My Workflow /
// Along the Journey (design.md §3, Section 5.0).
export default function AboutSection() {
  return (
    <section id="about" className="w-full scroll-mt-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-[30px]">
        {/* About Me — label column (350px) beside 3 equal text columns,
            same row pattern as Projects/Research rows and the footer
            contact rows, not a heading stacked on top (corrected 2026-08-20,
            per user report — the original Figma token extraction had this
            right; the component just didn't follow it). */}
        <div className="grid grid-cols-1 gap-6 pt-20 md:grid-cols-[350px_1fr] md:gap-10 md:pt-28">
          <h2 className="font-bold uppercase tracking-[-1.5px]">About Me</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {aboutMeColumns.map((text, i) => (
              <p key={i} className="font-normal tracking-[-0.5px]">
                {text}
              </p>
            ))}
          </div>
        </div>
 
        {/* How I Function */}
        <div className="pt-20 md:pt-28">
          <h2 className="font-bold uppercase tracking-[-1.5px]">
            How I Function
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-8 md:mt-8 md:grid-cols-3">
            {principles.map((p, i) => (
              <div key={i} className="border-t border-black pt-3">
                <p className="font-semibold tracking-[-0.5px]">{p.title}</p>
                <p className="mt-1 font-normal tracking-[-0.5px] text-muted">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
 
        {/* My Workflow — same label-column + 3-content-column pattern as
            About Me (corrected 2026-08-20). */}
        <div className="grid grid-cols-1 gap-6 pt-20 md:grid-cols-[350px_1fr] md:gap-10 md:pt-28">
          <h2 className="font-bold uppercase tracking-[-1.5px]">
            My Workflow
          </h2>
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-3">
            {workflowCategories.map((cat) => (
              <div key={cat.label} className="border-t border-black pt-3">
                <p className="font-semibold uppercase tracking-[-0.5px]">
                  {cat.label}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {Array.from({ length: cat.tileCount }).map((_, i) => (
                    <div key={i} className="h-[50px] w-[50px] bg-tile" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
 
        {/* Along the Journey — same label-column + 3-content-column pattern
            as About Me (corrected 2026-08-20). */}
        <div className="grid grid-cols-1 gap-6 pt-20 pb-20 md:grid-cols-[350px_1fr] md:gap-10 md:pt-28 md:pb-28">
          <h2 className="font-bold uppercase tracking-[-1.5px]">
            Along the Journey
          </h2>
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-3">
            {journeyEntries.map((column, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-6">
                {column.map((entry, i) => (
                  <div
                    key={i}
                    className={i === 0 ? "" : "border-t border-black pt-6"}
                  >
                    <p className="font-semibold tracking-[-0.5px]">
                      {entry.title}
                    </p>
                    <p className="mt-1 font-normal tracking-[-0.5px]">
                      {entry.detail}
                    </p>
                    <p className="mt-1 font-normal tracking-[-0.5px] text-muted">
                      {entry.tag}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
 
