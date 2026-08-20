import {
  aboutMeColumns,
  principles,
  workflowCategories,
  journeyEntries,
} from "@/lib/aboutData";

// Landing Page Section 5.0 — About Me / How I Function / My Workflow /
// Along the Journey (design.md §3, Section 5.0).
//
// Full spacing rewrite 2026-08-20 against exact pixel data pulled from
// Figma node 252:1420 (fresh metadata — node IDs regenerate on file edits;
// this was 241:462 earlier in the same day before another Figma edit).
// Every offset below is a literal Figma coordinate, not an approximation:
//   - Timeline → About Me gap: 249px (this block sits further from the
//     section above it than every other section transition on the site —
//     confirmed via screenshot, it's genuine breathing room, not a missing
//     image).
//   - Content-column gutter: 20px (column x = 380/730/1080, width 330 each
//     — NOT the 40px "gap-10" this file used before).
//   - Label column ↔ content column: 0px extra gap. The 350px column width
//     alone produces the offset (x=30 label start + 350 = 380 content
//     start) — same fixed-column pattern as ProjectRow/Footer. Any grid
//     "gap" here was double-counting the offset.
//   - Border-line → text below it: always a flat 10px (not pt-3/12px).
//   - How I Function / My Workflow / Along the Journey subsection labels
//     sit in the SAME row as their content, at the same y — but the
//     border-line itself is only drawn under the 3 content columns, never
//     under the label. So each h2 gets a borderless pt-[10px] twin of the
//     content's border-t+pt-[10px], to land both at the same baseline
//     without a rule under the label.
//   - Gap BETWEEN subsections is not uniform: About Me → How I Function and
//     My Workflow → Along the Journey are both 70px; How I Function → My
//     Workflow is 0px (How I Function's own reserved space already reaches
//     exactly to My Workflow's border line — confirmed by the numbers
//     lining up exactly, not an assumption).
export default function AboutSection() {
  return (
    <section id="about" className="w-full scroll-mt-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-[30px]">
        {/* About Me */}
        <div className="grid grid-cols-1 gap-6 pt-16 md:grid-cols-[350px_1fr] md:gap-x-0 md:pt-[249px]">
          <h2 className="font-bold uppercase tracking-normal">About Me</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-x-[20px]">
            {aboutMeColumns.map((text, i) => (
              <p key={i} className="font-normal tracking-[-0.5px]">
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* How I Function — each card's title→description is a bare 0px
            gap (leading only); the 191px block below the description is a
            real, exact-pixel reserved area in Figma — confirmed by explicit
            placeholder Frame nodes now visible in the file (Frame 23/25/27/
            24/26/28 under node 252:1420, each 330x191 at exactly this
            position), not just inferred from blank whitespace. */}
        <div className="grid grid-cols-1 gap-6 pt-16 md:grid-cols-[350px_1fr] md:gap-x-0 md:pt-[70px]">
          <h2 className="font-bold uppercase tracking-normal md:pt-[10px]">
            How I Function
          </h2>
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-3 md:gap-x-[20px] md:gap-y-0">
            {principles.map((p, i) => (
              <div key={i} className="border-t border-black pt-3 md:pt-[10px]">
                <p className="font-semibold tracking-[-0.5px]">{p.title}</p>
                <p className="font-normal tracking-[-0.5px] text-muted">
                  {p.description}
                </p>
                <div
                  className="mt-4 h-40 w-full bg-tile md:mt-0 md:h-[191px]"
                  aria-hidden="true"
                  title="Illustration placeholder — exact reserved space per Figma node 252:1420, no image asset in source yet"
                />
              </div>
            ))}
          </div>
        </div>

        {/* My Workflow — 0px gap from How I Function above it (see note at
            top of file); each category's own border-t+pt-[10px] provides
            all the visible separation. Tile gap is 6px (not gap-2/8px) —
            at exactly 330px column width and 6px gaps, AI Assistance's 9
            tiles wrap to 6-then-3 across two rows purely from flex-wrap,
            same as Figma, with no manual row-splitting needed. */}
        <div className="grid grid-cols-1 gap-6 pt-16 md:grid-cols-[350px_1fr] md:gap-x-0 md:pt-0">
          <h2 className="font-bold uppercase tracking-normal md:pt-[10px]">
            My Workflow
          </h2>
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-3 md:gap-x-[20px]">
            {workflowCategories.map((cat) => (
              <div key={cat.label} className="border-t border-black pt-3 md:pt-[10px]">
                <p className="font-semibold uppercase tracking-[-0.5px]">
                  {cat.label}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 md:mt-[30px] md:gap-[6px]">
                  {Array.from({ length: cat.tileCount }).map((_, i) => (
                    <div key={i} className="h-[50px] w-[50px] bg-tile" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Along the Journey — every entry (including the first) sits below
            its own border-line in Figma, unlike the earlier version of this
            file which only bordered entries after the first. Title→detail
            is a bare 0px gap; detail→tag is 10px; tag→next entry's border
            is 12px, produced by the column wrapper's own gap-[12px] (not
            the entry's own border+pt, which only supplies the 10px after
            the line). No trailing pb here — Footer's own pt provides the
            gap to the next section.
            Each column also gets a CLOSING border line after its last entry
            (Line 22/23/24 in Figma, at x=380/730/1080, y=1401) — previously
            missing entirely, since only inter-entry borders were rendered.
            It reuses the same gap-[12px] rhythm as every other tag→divider
            gap on this site, so no extra spacing value is needed for it. */}
        <div className="grid grid-cols-1 gap-6 pt-16 md:grid-cols-[350px_1fr] md:gap-x-0 md:pt-[70px]">
          <h2 className="font-bold uppercase tracking-normal md:pt-[10px]">
            Along the Journey
          </h2>
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-3 md:gap-x-[20px]">
            {journeyEntries.map((column, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-6 md:gap-[12px]">
                {column.map((entry, i) => (
                  <div key={i} className="border-t border-black pt-3 md:pt-[10px]">
                    <p className="font-semibold tracking-[-0.5px]">
                      {entry.title}
                    </p>
                    <p className="font-normal tracking-[-0.5px]">
                      {entry.detail}
                    </p>
                    <p className="mt-1 font-normal tracking-[-0.5px] text-muted md:mt-[10px]">
                      {entry.tag}
                    </p>
                  </div>
                ))}
                <div className="border-t border-black" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
