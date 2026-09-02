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
        {/* pt-[180px] (mobile only, md:pt-[249px] unchanged) — same
            site-wide inter-section rule as Research/Timeline, flagged
            2026-09-02, revised same day from 300px down to 180px (see
            ResearchSection.js for the full note). This is the TOP-LEVEL
            Timeline -> About boundary only. The other 3 subsections below
            (How I Function, My Workflow, Along the Journey) have their own
            separate mobile spacing — see the pt-[164px] note on each,
            flagged the same day: increased 100px beyond their prior pt-16
            (64px), which is a different, unrelated adjustment from this
            section-to-section 300->180px change. */}
        <div className="grid grid-cols-1 gap-6 pt-[180px] md:grid-cols-[350px_1fr] md:gap-x-0 md:pt-[249px]">
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
        {/* pt-[164px] (mobile only, md:pt-[70px] unchanged) — flagged
            2026-09-02: mobile-only internal subsection rhythm, increased
            100px beyond the prior pt-16 (64px), i.e. 64 + 100 = 164px. This
            is the gap from About Me to How I Function specifically, not the
            site-wide section-to-section rule (that one dropped 300->180px
            elsewhere in this same round — an unrelated, separate change). */}
        <div className="grid grid-cols-1 gap-6 pt-[164px] md:grid-cols-[350px_1fr] md:gap-x-0 md:pt-[70px]">
          <h2 className="font-bold uppercase tracking-normal md:pt-[10px]">
            How I Function
          </h2>
          {/* gap-y-0 (mobile only, md:gap-y-0 unchanged) — flagged
              2026-09-02: site-wide "placeholder image, then line" rule —
              every card in this grid ends in the Illustration placeholder
              tile, so the vertical gap between cards IS the "image -> next
              card's own line" junction; was gap-y-10 (40px) on mobile,
              dropped to 0 so that boundary is flush. The card's own
              pt-[10px] above (set from the same rule's other half) still
              supplies the correct 10px from that line down to the next
              card's title, so nothing collapses — only the image-to-line
              segment changed. My Workflow/Along the Journey below don't
              get this treatment: neither ends in a placeholder image
              (small design tiles / plain text respectively), so that part
              of the rule doesn't apply to them. */}
          {/* Each card: pt-[10px] (mobile only, md:pt-[10px] unchanged) —
              flagged 2026-09-02: site-wide "line, then text" rule, set from
              the Projects heading -> divider -> first row reference (that
              gap measures exactly 10px in the live DOM). Was pt-3 (12px) on
              mobile; standardized to 10px to match. */}
          <div className="grid grid-cols-1 gap-x-10 gap-y-0 md:grid-cols-3 md:gap-x-[20px] md:gap-y-0">
            {principles.map((p, i) => (
              <div key={i} className="border-t border-black pt-[10px]">
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
        {/* pt-[164px] (mobile only, md:pt-0 unchanged — desktop keeps its 0px
            gap from How I Function, see note at top of file) — flagged
            2026-09-02: same 100px-beyond-pt-16 increase as How I Function's
            gap above (64 + 100 = 164px), applied to mobile only. */}
        <div className="grid grid-cols-1 gap-6 pt-[164px] md:grid-cols-[350px_1fr] md:gap-x-0 md:pt-0">
          <h2 className="font-bold uppercase tracking-normal md:pt-[10px]">
            My Workflow
          </h2>
          {/* Each card: pt-[10px] (mobile only, md:pt-[10px] unchanged) —
              same site-wide "line, then text" fix as How I Function above
              (was pt-3/12px on mobile). */}
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-3 md:gap-x-[20px]">
            {workflowCategories.map((cat) => (
              <div key={cat.label} className="border-t border-black pt-[10px]">
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
            gap on this site, so no extra spacing value is needed for it.
 
            Row-2 alignment fix 2026-08-23: in Figma (node 252:1420), points
            5 & 6 (row 2, columns 2 & 3 — "Lorem ipsum dolor", single-line
            title, node 252:1481/1483) have their tag pinned to the SAME
            absolute y as point 4's tag (y=1371 for all three columns,
            confirmed in the metadata), even though their own title is one
            line shorter than point 4's two-line title. The closing border
            line below (also a fixed shared y=1401 across all three columns)
            then falls into place on its own via this column's existing
            gap-[12px] rhythm — it only needs the tag above it positioned
            correctly. Title and detail text are untouched — only the tag's
            own top margin changes.
            First pass used +18px (Figma's flat 18px-per-line text bounding
            box) and landed close but not exact — a follow-up pixel diff
            against the live production screenshot (both closing lines
            measured directly, col1 vs col2/3, at the site's actual 2x
            rendered scale) showed a residual ~4-5px gap, i.e. the browser's
            real line-height for this text runs a little taller than
            Figma's tight bounding box. +33px is calibrated against that
            live measurement, not the Figma box alone — verify against a
            fresh screenshot after this deploys, since it was tuned to one
            data point. */}
        {/* pt-[164px] (mobile only, md:pt-[70px] unchanged) — flagged
            2026-09-02: same 100px-beyond-pt-16 increase as the two gaps
            above (64 + 100 = 164px), applied to mobile only. */}
        <div className="grid grid-cols-1 gap-6 pt-[164px] md:grid-cols-[350px_1fr] md:gap-x-0 md:pt-[70px]">
          <h2 className="font-bold uppercase tracking-normal md:pt-[10px]">
            Along the Journey
          </h2>
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-3 md:gap-x-[20px]">
            {journeyEntries.map((column, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-6 md:gap-[12px]">
                {column.map((entry, i) => {
                  const isShortRow2 = colIdx !== 0 && i === 1;
                  // Entry: pt-[10px] (mobile only, md:pt-[10px] unchanged) —
                  // same site-wide "line, then text" fix as How I
                  // Function/My Workflow above (was pt-3/12px on mobile).
                  return (
                    <div key={i} className="border-t border-black pt-[10px]">
                      <p className="font-semibold tracking-[-0.5px]">
                        {entry.title}
                      </p>
                      <p className="font-normal tracking-[-0.5px]">
                        {entry.detail}
                      </p>
                      <p
                        className={`mt-1 font-normal tracking-[-0.5px] text-muted ${
                          isShortRow2 ? "md:mt-[33px]" : "md:mt-[10px]"
                        }`}
                      >
                        {entry.tag}
                      </p>
                    </div>
                  );
                })}
                <div className="border-t border-black" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
 
