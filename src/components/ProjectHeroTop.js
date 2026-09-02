import Header from "./Header";
 
// Individual Project page — top-of-page furniture, Figma node 179:3614
// "Project 01 (D)- Section 1.0" (2026-09-01 redesign). Renders the real
// global <Header> followed by: hero image -> divider -> "Title" label +
// intro paragraph + 4-field info row -> divider -> "Brief" label +
// paragraph -> divider. Everything below the last divider (the repeatable
// content sections + sticky Contents nav) is ProjectTopics.js instead —
// split out because that part is interactive (client-side scrollspy) while
// this part is static.
//
// This REPLACES PageTopFramework for project detail pages specifically
// (not reused here) — the Figma source starts directly with Header ->
// hero image, no separate title+index breadcrumb row above it, and "exact
// visual copy" was the explicit brief. PageTopFramework itself is left
// untouched: Individual Research pages still use it unchanged, since this
// redesign was scoped to "individual project pages" only.
//
// Spacing (measured off node 179:3614, all values local-frame coordinates
// unless noted):
//   - Header -> hero image: Figma's own preview-header is 38px tall
//     (y=20, height=18), hero image top is at y=58, i.e. a 20px gap. Same
//     indirection as Hero.js/Footer.js's quote blocks: since this section
//     begins immediately after the REAL sticky <Header> in normal flow,
//     that 20px maps 1:1 onto this container's own pt-, regardless of the
//     real Header's actual rendered height (62.5px, taller than Figma's
//     placeholder).
//   - Hero image -> divider: 538 -> 540, a 2px gap (near-flush; treated as
//     the file's other near-zero Figma gaps are — negligible, not a real
//     design interval).
//   - Divider -> "Title" label: 540 -> 549, 9px.
//   - "Title" label -> intro paragraph: 0px extra (paragraph starts right
//     at the label's own 20px line-height, no added margin — same "stack
//     with zero margin" pattern used for Brief below).
//   - Intro paragraph -> info row: 622 -> 672, 50px (paragraph height 54,
//     from y=568).
//   - Info row: label -> value is a bare stacked pair (0 extra margin);
//     columns are 330px wide with a 20px gutter (x=30/380/730/1080),
//     exactly matching AboutSection.js's existing 3-column content-grid
//     convention, just 4 columns here.
//   - Info row -> divider: 708 -> 718, 10px (value row height 18, from
//     y=690).
//   - Divider -> "Brief" label: 718 -> 728, 10px.
//   - "Brief" label -> paragraph: 0px extra (728 + 20px line-height = 748,
//     exact match with the paragraph's own y=748).
//   - Brief paragraph -> divider: 838 -> 848, 10px (paragraph height 90,
//     from y=748) — same 10px-before-divider rhythm used everywhere else
//     on this site (AboutSection, Footer's Contact rows).
export default function ProjectHeroTop({ project }) {
  return (
    <>
      <Header base="/" />
      <div className="mx-auto max-w-[1440px] px-5 sm:px-[30px]">
        {/* Hero image — placeholder tile, real asset pending */}
        <div
          className="mt-8 h-64 w-full bg-tile sm:h-80 md:mt-[20px] md:h-[480px]"
          aria-hidden="true"
          title="Hero image placeholder — no asset in source yet"
        />
 
        {/* mt-0 (mobile only, md:mt-[2px] unchanged) — flagged 2026-09-02:
            site-wide "placeholder image, then line" rule — was mt-2 (8px)
            on mobile, dropped to flush/0px so the hero image placeholder's
            bottom edge touches this divider directly. Desktop's own
            near-flush 2px (documented above as "near-zero, negligible, not
            a real design interval," measured off Figma) is left as-is. */}
        <div className="mt-0 border-t border-black md:mt-[2px]" />
 
        {/* Title + intro + info row */}
        <div className="pt-4 md:pt-[9px]">
          <h2 className="font-bold uppercase tracking-[-1px]">
            {project.introLabel}
          </h2>
          <p className="max-w-[1380px] font-normal tracking-[-0.5px] text-black/80">
            {project.intro}
          </p>
 
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 md:mt-[50px] md:grid-cols-4 md:gap-x-[20px] md:gap-y-0">
            {project.infoFields.map((field) => (
              <div key={field.label}>
                <p className="font-semibold tracking-[-0.5px]">
                  {field.label}
                </p>
                <p className="font-normal tracking-[-0.5px] text-black/80">
                  {field.value}
                </p>
              </div>
            ))}
          </div>
        </div>
 
        <div className="mt-8 border-t border-black md:mt-[10px]" />
 
        {/* Brief */}
        <div className="pt-4 md:pt-[10px]">
          <h2 className="font-bold uppercase tracking-[-1px]">
            {project.briefLabel}
          </h2>
          <p className="whitespace-pre-wrap font-normal tracking-[-0.5px] text-black/80">
            {project.brief}
          </p>
        </div>
 
        <div className="mt-8 border-t border-black md:mt-[10px]" />
      </div>
    </>
  );
}
 
