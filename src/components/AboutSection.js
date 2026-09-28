import {
  aboutMeColumns,
  principles,
  workflowCategories,
  journeyEntries,
} from "@/lib/aboutData";
import PrincipleIllustration from "@/components/PrincipleIllustration";
import { workflowIcons } from "@/lib/workflowIcons";
 
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
                {/* Illustration tile (2026-09-28): same reserved 330x191
                    space (160px tall on mobile) that used to hold the grey
                    placeholder, now white per direct instruction, holding
                    the card's animated illustration. The illustration is
                    picked by the card title in lower case ("Evidence" ->
                    "evidence", see src/lib/principleIllustrations.js), so a
                    renamed card shows an empty white tile until its name is
                    added there. overflow-hidden keeps fading circles that
                    drift outward inside the tile. */}
                <div className="mt-4 flex h-40 w-full items-center justify-center overflow-hidden bg-background md:mt-0 md:h-[191px]">
                  <PrincipleIllustration name={p.title.toLowerCase()} />
                </div>
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
          {/* gap-y-[14px] (was gap-y-10/40px, mobile only; desktop columns
              sit side by side so this row-gap isn't used there) — flagged
              2026-09-28: on phones the 3 categories stack, so this gap IS
              the "last icon row -> next category's line" junction, and 40px
              broke the site's image -> line rule. 14px = the same Figma
              value as the desktop Along the Journey gap (node 498:701: icon
              cell ends y=1179, line y=1193); the icon body sits 5px inside
              its cell, so the eye reads 19px. */}
          <div className="grid grid-cols-1 gap-x-10 gap-y-[14px] md:grid-cols-3 md:gap-x-[20px]">
            {workflowCategories.map((cat) => (
              <div key={cat.label} className="border-t-2 border-black pt-[10px]">
                <p className="font-semibold uppercase tracking-[-0.5px]">
                  {cat.label}
                </p>
                {/* Tool icons (2026-09-28, Figma node 498:701 "My Workflow
                    reference"): each 50px grid cell holds an app-icon
                    style tile, sized from the Figma app icon in that
                    frame: a 40px body with 9px corners, inset 5px inside
                    the cell, brand mark centred at 24px. Each tile uses
                    the brand's own colours, not one shared dark theme
                    (Framer blue, Miro yellow, ...; direct instruction,
                    2026-09-28), from workflowIcons.js: bg = tile colour,
                    border = hairline ring for white tiles so they read on
                    the white page, full = the icon is already a square
                    app icon (Miro) and fills the whole 40px body.
                    Reading order = array order in aboutData.js: row 1
                    left to right, then row 2, then row 3 (flex-wrap does
                    the wrapping). The tool name is the accessible label.
                    Hover label (2026-09-28, direct instruction: "while
                    hovering on each icon, it should state the name of the
                    respective application"): a small label (fill #EEEEEE,
                    text #BBBBBB = the text-muted token, 2026-09-28) with the
                    tool name appears above the tile on hover, and on
                    keyboard focus or a tap on phones (each tile is
                    focusable, and phones have no hover). It replaces the
                    browser's own title tooltip, which only appeared after
                    a delay and in the OS style. The first tile in each
                    row of 6 anchors its label to the left edge and the
                    last to the right edge, so long names ("Adobe Creative
                    Cloud") never run off the column or the phone screen.
                    A tool whose official icon is not supplied yet
                    (svg: null) shows its initials. */}
                <div className="mt-4 flex flex-wrap gap-2 md:mt-[30px] md:gap-[6px]">
                  {cat.tools.map((id, i) => {
                    const tool = workflowIcons[id];
                    const labelPosition =
                      i % 6 === 0
                        ? "left-[5px]"
                        : i % 6 === 5
                          ? "right-[5px]"
                          : "left-1/2 -translate-x-1/2";
                    return (
                      <div
                        key={id}
                        tabIndex={0}
                        className="group relative h-[50px] w-[50px] rounded-[11px] outline-none focus-visible:ring-2 focus-visible:ring-black"
                      >
                        <span
                          aria-hidden="true"
                          className={`pointer-events-none absolute bottom-full z-20 mb-[2px] whitespace-nowrap rounded-[4px] bg-[#EEEEEE] px-2 py-1 text-[12px] font-medium leading-[14px] tracking-normal text-muted opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus:opacity-100 ${labelPosition}`}
                        >
                          {tool.name}
                        </span>
                        <span
                          role="img"
                          aria-label={tool.name}
                          className="absolute inset-[5px] flex items-center justify-center overflow-hidden rounded-[9px]"
                          style={{ backgroundColor: tool.bg }}
                        >
                          {tool.svg ? (
                            <span
                              aria-hidden="true"
                              className={`block [&>svg]:h-full [&>svg]:w-full ${
                                tool.full ? "h-full w-full" : "h-6 w-6"
                              }`}
                              dangerouslySetInnerHTML={{ __html: tool.svg }}
                            />
                          ) : (
                            <span
                              aria-hidden="true"
                              className="text-[11px] font-semibold tracking-normal text-[#555555]"
                            >
                              {tool.name
                                .split(" ")
                                .map((w) => w[0])
                                .join("")
                                .slice(0, 2)}
                            </span>
                          )}
                          {/* Hairline ring for white tiles, drawn on top so
                              edge-to-edge icons (ProtoPie, Kaggle,
                              TouchDesigner) don't cover it. */}
                          {tool.border && (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute inset-0 rounded-[9px] ring-1 ring-inset ring-[#E5E5E5]"
                            />
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
 
        {/* Along the Journey: 6 entries (3 columns x 2), each below its own
            border-line, plus a CLOSING line under each column (Figma Lines
            22/23/24). Spacing, all unchanged from the Figma-calibrated
            version: line -> text 10px; title -> detail 0px; detail -> tag
            10px on desktop, 15px on phones (site-wide description -> tag
            exemption, ProjectRow.js); tag -> next line 12px on desktop,
            10px on phones.
 
            Rebuilt 2026-09-28 when the real copy went in. The old layout
            stacked each column separately, so entries in different columns
            had no shared row height, and row 2's tags were lined up by a
            hand-tuned +33px nudge that only worked for the Lorem ipsum line
            counts (2-line title in column 1, 1-line titles in columns 2/3).
            Real titles wrap differently, so that nudge would misalign.
            Now all 9 pieces (6 entries + 3 closing lines) sit in ONE grid:
            on desktop it has 3 rows (entry, entry, closing line) and fills
            column by column (grid-flow-col), so entries in the same row
            share one height. Each entry is a flex column whose tag is pushed
            to the bottom (mt-auto), so every tag in a row lands on the same
            y whatever the title length, which is exactly the Figma
            behaviour (row 2 tags share y=1371 in node 252:1420). pt-[10px]
            on the tag keeps the 10px minimum under the longest entry.
            On phones the grid is one column in the same order; the closing
            lines of columns 1 and 2 stay hidden (they would sit directly on
            the next column's first line, reading as a double line). */}
        {/* pt-[164px] (mobile only) — flagged 2026-09-02: same
            100px-beyond-pt-16 increase as the two gaps above
            (64 + 100 = 164px), applied to mobile only.
            md:pt-[14px] (was md:pt-[70px]) — flagged 2026-09-28: last row
            of My Workflow icons -> Along the Journey line was 70px, far
            off the site's image -> line spacing once the tool rows grew to
            3. Figma node 498:701 ("My Workflow reference"): last icon
            cell ends at y=1179, Along the Journey line at y=1193 = 14px.
            The visible icon body sits 5px inside its cell, so the eye
            reads 19px, same as Figma's app-icon image. */}
        {/* gap-[10px] (was gap-6/24px) — flagged 2026-09-02: same
            title -> line fix as How I Function/My Workflow above. */}
        <div className="grid grid-cols-1 gap-[10px] pt-[164px] md:grid-cols-[350px_1fr] md:gap-x-0 md:pt-[14px]">
          <h2 className="font-bold uppercase tracking-normal md:pt-[10px]">
            Along the Journey
          </h2>
          <div className="grid grid-cols-1 gap-y-[10px] md:grid-flow-col md:grid-cols-3 md:grid-rows-[auto_auto_auto] md:gap-x-[20px] md:gap-y-[12px]">
            {journeyEntries.map((column, colIdx) => [
              ...column.map((entry, i) => (
                <div
                  key={`${colIdx}-${i}`}
                  className="flex flex-col border-t-2 border-black pt-[10px]"
                >
                  <p className="font-semibold tracking-[-0.5px]">
                    {entry.title}
                  </p>
                  <p className="font-normal tracking-[-0.5px]">
                    {entry.detail}
                  </p>
                  <p className="mt-[15px] font-normal tracking-[-0.5px] text-muted md:mt-auto md:pt-[10px]">
                    {entry.tag}
                  </p>
                </div>
              )),
              <div
                key={`close-${colIdx}`}
                className={`border-t-2 border-black ${
                  colIdx !== journeyEntries.length - 1 ? "hidden md:block" : ""
                }`}
                aria-hidden="true"
              />,
            ])}
          </div>
        </div>
      </div>
    </section>
  );
}
 
 
 
 
 
 
