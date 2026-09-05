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
//   - Timeline → About Me gap: originally 249px, this block sitting
//     further from the section above it than every other section
//     transition on the site (confirmed via screenshot, it's genuine
//     breathing room, not a missing image) — superseded 2026-09-05 by
//     direct instruction to 300px desktop (see the md:pt-[300px] comment
//     below); mobile's separate 180px rule is untouched.
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
        {/* pt-[180px] (mobile only) — same site-wide inter-section rule as
            Research/Timeline, flagged 2026-09-02, revised same day from
            300px down to 180px (see ResearchSection.js for the full
            note). This is the TOP-LEVEL Timeline -> About boundary only.
            The other 3 subsections below (How I Function, My Workflow,
            Along the Journey) have their own separate mobile spacing —
            see the pt-[164px] note on each, flagged the same day:
            increased 100px beyond their prior pt-16 (64px), which is a
            different, unrelated adjustment from this section-to-section
            300->180px change.
 
            md:pt-[300px] — 2026-09-05 direct instruction: "spacing
            between 'Timeline' section and 'About Me' section to be
            300px" (desktop only, per your follow-up — mobile's
            pt-[180px] above is untouched). Was md:pt-[249px], the
            Figma-measured value this file's top comment documents;
            superseded here per this direct instruction. Same
            no-trailing-bottom-padding convention still applies (Timeline
            itself adds no bottom space of its own), so this one value is
            still the entire desktop Timeline -> About Me gap. */}
        {/* gap-[10px] (was gap-6/24px) — flagged 2026-09-02: "About Me" title
            -> divider rule, same "line, then text" family as How I
            Function/My Workflow/Along the Journey below, applied on BOTH
            breakpoints since this row-gap is otherwise unused on desktop
            (label|content sit side by side there, single row). */}
        <div className="grid grid-cols-1 gap-[10px] pt-[180px] md:grid-cols-[350px_1fr] md:gap-x-0 md:pt-[300px]">
          <h2 className="font-bold uppercase tracking-normal md:pt-[10px]">
            About Me
          </h2>
          {/* Divider ADDED 2026-09-02, direct instruction: "About Me" had no
              line between its title and body copy, unlike How I
              Function/My Workflow/Along the Journey which all sit below a
              border-line. New border-t on the content column only (never
              under the label), matching that exact convention — h2 gets the
              same borderless md:pt-[10px] twin those other 3 labels use, so
              both land at the same baseline on desktop. border-t + pt-[10px]
              on both breakpoints since this is a brand-new element, not an
              existing desktop value being preserved. */}
          <div className="grid grid-cols-1 gap-[28px] border-t-2 border-black pt-[10px] md:grid-cols-3 md:gap-x-[20px] md:pt-[10px]">
            {/* gap-[28px] (was gap-8/32px) — flagged 2026-09-02: paragraph
                -> paragraph rule, matching the Brief paragraph-break gap
                (confirmed 28px = one blank line). Mobile only — desktop's
                3 columns sit in a single row, this gap is column-gutter
                territory there (md:gap-x-[20px]), not paragraph spacing. */}
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
        {/* gap-[10px] (was gap-6/24px) — flagged 2026-09-02: "How I
            Function" title -> line (card 1's own border-t) was more than
            10px on mobile; standardized to match the site-wide rule.
            Desktop unaffected — this row-gap isn't used there (label sits
            beside content, single row). */}
        <div className="grid grid-cols-1 gap-[10px] pt-[164px] md:grid-cols-[350px_1fr] md:gap-x-0 md:pt-[70px]">
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
              <div key={i} className="border-t-2 border-black pt-[10px]">
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
        {/* gap-[10px] (was gap-6/24px) — flagged 2026-09-02: same
            title -> line fix as How I Function above. */}
        <div className="grid grid-cols-1 gap-[10px] pt-[164px] md:grid-cols-[350px_1fr] md:gap-x-0 md:pt-0">
          <h2 className="font-bold uppercase tracking-normal md:pt-[10px]">
            My Workflow
          </h2>
          {/* Each card: pt-[10px] (mobile only, md:pt-[10px] unchanged) —
              same site-wide "line, then text" fix as How I Function above
              (was pt-3/12px on mobile). */}
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-3 md:gap-x-[20px]">
            {workflowCategories.map((cat) => (
              <div key={cat.label} className="border-t-2 border-black pt-[10px]">
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
        {/* gap-[10px] (was gap-6/24px) — flagged 2026-09-02: same
            title -> line fix as How I Function/My Workflow above. */}
        <div className="grid grid-cols-1 gap-[10px] pt-[164px] md:grid-cols-[350px_1fr] md:gap-x-0 md:pt-[70px]">
          <h2 className="font-bold uppercase tracking-normal md:pt-[10px]">
            Along the Journey
          </h2>
          {/* gap-y-[10px] (was gap-y-8/32px, mobile only) — flagged
              2026-09-02: on mobile the 3 columns stack (grid-cols-1), so
              each column's own closing border-t (below) landed directly
              above the NEXT column's first entry border-t — two lines
              with a bare 32px gap and no content between them, reading as
              a duplicate/double line. Fixed alongside hiding the
              redundant closing lines below; this gap is now the sole
              "content -> next line" boundary between columns, so it gets
              the standard 10px like everywhere else. Desktop unaffected —
              columns sit side by side there, this row-gap isn't used. */}
          <div className="grid grid-cols-1 gap-x-10 gap-y-[10px] md:grid-cols-3 md:gap-x-[20px]">
            {journeyEntries.map((column, colIdx) => (
              // gap-[10px] (was gap-6/24px, mobile only, md:gap-[12px]
              // unchanged) — flagged 2026-09-02: grey tag -> next line
              // (or the column's closing border) was more than 10px on
              // mobile; standardized to match the site-wide rule. Desktop's
              // 12px is a separate, already-calibrated "tag -> divider"
              // rhythm reused site-wide (see the file-top note) — left as-is.
              <div key={colIdx} className="flex flex-col gap-[10px] md:gap-[12px]">
                {column.map((entry, i) => {
                  const isShortRow2 = colIdx !== 0 && i === 1;
                  // Entry: pt-[10px] (mobile only, md:pt-[10px] unchanged) —
                  // same site-wide "line, then text" fix as How I
                  // Function/My Workflow above (was pt-3/12px on mobile).
                  return (
                    <div key={i} className="border-t-2 border-black pt-[10px]">
                      <p className="font-semibold tracking-[-0.5px]">
                        {entry.title}
                      </p>
                      <p className="font-normal tracking-[-0.5px]">
                        {entry.detail}
                      </p>
                      {/* mt-[15px] (was mt-1/4px, mobile only) — flagged
                          2026-09-02: detail -> tag rule, matching the
                          site-wide description->tag exemption (ProjectRow.js,
                          15px). md: values untouched — md:mt-[33px] is a
                          separate, unrelated row-2 cross-column alignment
                          calibration (see the file-top note), not a plain
                          detail->tag spacing value. */}
                      <p
                        className={`mt-[15px] font-normal tracking-[-0.5px] text-muted ${
                          isShortRow2 ? "md:mt-[33px]" : "md:mt-[10px]"
                        }`}
                      >
                        {entry.tag}
                      </p>
                    </div>
                  );
                })}
                {/* Closing line: hidden on mobile for every column except
                    the last (hidden md:block), flagged 2026-09-02 — this is
                    the redundant line that caused the "double line" issue
                    fixed above. Desktop keeps it on all 3 columns, unchanged
                    (they sit side by side there, so it's never adjacent to
                    another column's opening line). */}
                <div
                  className={`border-t-2 border-black ${
                    colIdx !== journeyEntries.length - 1 ? "hidden md:block" : ""
                  }`}
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
 
