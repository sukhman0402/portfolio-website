// Placeholder content — 🔴 dummy tier per design.md §6.
// Real project/research names, descriptions and case-study content are
// still pending (design.md §8.4). Swap these objects out once the locked
// list of 4 projects + 4 research pieces is confirmed; slugs are stable
// so routes won't need to change when the copy does.
//
// DETAIL PAGE FIELDS — shared by Projects AND Research (added 2026-09-01,
// Figma node 179:3614 "Project 01 (D)- Section 1.0" for the individual
// project page redesign; extended to Research 2026-09-03, flagged: "the
// layout for individual research project is not matching with the one we
// finalised for individual project... replicate the same layout" — see
// ProjectHeroTop.js/ProjectTopics.js, now rendered by BOTH
// src/app/projects/[slug]/page.js and src/app/research/[slug]/page.js.
// PageTopFramework.js/CaseStudySections.js (Research's old layout) are no
// longer imported anywhere as of this change — orphaned, safe to delete:
//   - intro: the paragraph under the "Title" label, above the info row.
//   - infoFields: the 4-column Discipline/Timeline/Role/Tools row. The 4
//     FIELDS themselves are confirmed; their exact display LABELS are not
//     finalised yet (flagged directly, not a design.md item) — using these
//     sensible working labels until final wording is given.
//   - brief: the paragraph under the "Brief" label. Supports a blank-line
//     paragraph break (rendered via whitespace-pre-wrap), matching the
//     Figma source which shows Brief as two short paragraphs, not one.
//   - sections: the repeatable right-column content blocks (heading + body
//     + image) that the left-hand sticky Contents nav points at. Deliberately
//     variable in length per item (see ProjectTopics.js) — count and body
//     length below vary item-to-item on purpose, standing in for real
//     case-study/research content of differing depth.
export const projects = [
  {
    slug: "project-01",
    index: "01",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. AeneanCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    tag: "Lorem ipsum",
    ctaLabel: "Lorem ipsum",
    caption: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    featured: true,
    ...buildDetailFields(5, { closingBodyIndex: 2 }),
  },
  {
    slug: "project-02",
    index: "02",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. AeneanCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    tag: "Lorem ipsum",
    ctaLabel: "Lorem ipsum",
    caption: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    featured: true,
    ...buildDetailFields(3),
  },
  {
    slug: "project-03",
    index: "03",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. AeneanCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    tag: "Lorem ipsum",
    ctaLabel: "Lorem ipsum",
    caption: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    featured: true,
    ...buildDetailFields(4),
  },
  {
    slug: "project-04",
    index: "04",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. AeneanCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    tag: "Lorem ipsum",
    ctaLabel: "Lorem ipsum",
    caption: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    featured: true,
    ...buildDetailFields(6),
  },
  {
    slug: "project-05",
    index: "05",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. AeneanCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    tag: "Lorem ipsum",
    ctaLabel: "Lorem ipsum",
    caption: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    featured: false,
    ...buildDetailFields(3),
  },
  {
    slug: "project-06",
    index: "06",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. AeneanCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    tag: "Lorem ipsum",
    ctaLabel: "Lorem ipsum",
    caption: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    featured: false,
    ...buildDetailFields(4),
  },
];
 
// research items now carry the same ...buildDetailFields(...) spread as
// projects (added 2026-09-03, flagged: "the layout for individual research
// project is not matching with the one we finalised for individual
// project... replicate the same layout") — see the DETAIL PAGE FIELDS note
// at the top of this file. research-01 demos closingBody, same as
// project-01, so that content-block type is exercised here too.
//
// fullDescription/ctaLabel/caption added 2026-09-03, flagged: "the layout
// for 'all research' is not what we intended. needs to be similar to
// [/projects]" — the /research listing page now reuses ProjectRow.js
// (always-expanded, expandable=false) instead of the compact ResearchRow,
// so these items need the same three fields projects already carry for
// that expanded card (fullDescription, ctaLabel, caption). Homepage
// ResearchSection still uses the compact ResearchRow, unaffected — those
// three fields are simply unused there. Same shared dummy-tier placeholder
// strings projects use (identical across every project item already;
// kept identical here for consistency, not a copy-paste oversight).
export const research = [
  {
    slug: "research-01",
    index: "01",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. AeneanCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    tag: "Lorem ipsum",
    ctaLabel: "Lorem ipsum",
    caption: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    ...buildDetailFields(4, { closingBodyIndex: 1 }),
  },
  {
    slug: "research-02",
    index: "02",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. AeneanCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    tag: "Lorem ipsum",
    ctaLabel: "Lorem ipsum",
    caption: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    ...buildDetailFields(3),
  },
  {
    slug: "research-03",
    index: "03",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. AeneanCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    tag: "Lorem ipsum",
    ctaLabel: "Lorem ipsum",
    caption: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    ...buildDetailFields(5),
  },
  {
    slug: "research-04",
    index: "04",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. AeneanCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    tag: "Lorem ipsum",
    ctaLabel: "Lorem ipsum",
    caption: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    ...buildDetailFields(3),
  },
];
 
// Shared placeholder builder for the detail-page fields (see comment block
// at the top of this file) — used by BOTH projects and research. Kept as a
// function — not static per-item literals — specifically so section COUNT
// and body LENGTH can vary item-to-item (some get a 2-paragraph body on one
// section, matching the Figma source's own topic-2 example) without
// hand-duplicating near-identical blocks a dozen times.
// closingBodyIndex (added 2026-09-01, per direct instruction after spotting
// "Lorem Ipsum Topic 3" newly added to Figma node 179:3614): a second
// content-block TYPE the design now shows alongside the plain
// heading→body→image sections — this one carries an extra paragraph
// BELOW the image too (heading→body→image→closing paragraph), a 20px gap
// off the image per Figma's own measurement (332:1533, x=380 y=2633,
// image bottom at y=2613). Optional per-section, not per-project, since
// real content sections will mix both types once real copy lands — pass
// the 0-based section index that should demo it (see ProjectTopics.js for
// the render side: `section.closingBody`, only rendered when present).
function buildDetailFields(sectionCount, { closingBodyIndex } = {}) {
  return {
    introLabel: "Title",
    intro:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    // Field set is confirmed (design.md-adjacent, per direct instruction);
    // display labels below are working names, not final copy.
    infoFields: [
      { label: "Discipline", value: "Lorem ipsum" },
      { label: "Timeline", value: "Lorem ipsum" },
      { label: "Role", value: "Lorem ipsum" },
      { label: "Tools Used", value: "Lorem ipsum" },
    ],
    briefLabel: "Brief",
    brief:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nDonec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
    sections: Array.from({ length: sectionCount }).map((_, i) => {
      const section = {
        id: `section-${i + 1}`,
        tocLabel: "Lorem ipsum",
        heading: `Lorem Ipsum Topic ${i + 1}`,
        body:
          i % 2 === 1
            ? "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n\nAenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim."
            : "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
        image: true,
      };
      // Literal Figma placeholder text (node 332:1533) — the actual
      // "Lorem Ipsum Topic 3" content block's closing paragraph.
      if (i === closingBodyIndex) {
        section.closingBody =
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. AeneanCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. AeneanCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.\n\nLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. AeneanCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.";
      }
      return section;
    }),
  };
}
 
export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
 
export function getResearchBySlug(slug) {
  return research.find((r) => r.slug === slug);
}
 
// Timeline (Landing Page Section 4.0, redesigned 2026-09-04 — see
// src/components/TimelineSection.js) — pixel-exact point positions pulled
// directly from Figma nodes 360:1550 (default), 364:1649 (hover),
// 376:9343 (after-click), fileKey 2yjcklO1oFjK8rICoeBD67. Per direct
// instruction ("the section should be the exact replication of my design
// in Figma file... do not change [spacing] on your own"), every `x` below
// is the tick's raw Figma left-coordinate minus 30 (the frame's own
// left/right padding, already supplied by this component's
// `sm:px-[30px]` wrapper on the desktop branch — see TimelineSection.js
// for how these map onto the 1380px-wide content box at the 1440px
// desktop canvas Figma was authored at).
//
// 44 points, grouped into 7 clusters by gap size (25px within a cluster,
// 65px between clusters, both confirmed directly off the raw coordinates
// — not a rounding choice). `cluster` is the 0-based index into
// timelineClusters below, used to brighten that cluster's year label
// whenever one of its points is hovered/selected (confirmed by comparing
// all three Figma frames: hovering/selecting any point in a cluster
// affects that cluster's single shared label, not a per-point label).
// id 13 (x:478) is the point shown selected by default in node 360:1550
// — this is the "one event already clicked" visual cue from the original
// task description, so the component should initialize its selection to
// this id.
export const timelinePoints = [
  { id: 1, x: 58, cluster: 0 },
  { id: 2, x: 83, cluster: 0 },
  { id: 3, x: 108, cluster: 0 },
  { id: 4, x: 173, cluster: 1 },
  { id: 5, x: 198, cluster: 1 },
  { id: 6, x: 223, cluster: 1 },
  { id: 7, x: 248, cluster: 1 },
  { id: 8, x: 313, cluster: 2 },
  { id: 9, x: 338, cluster: 2 },
  { id: 10, x: 363, cluster: 2 },
  { id: 11, x: 428, cluster: 3 },
  { id: 12, x: 453, cluster: 3 },
  { id: 13, x: 478, cluster: 3, defaultSelected: true },
  { id: 14, x: 503, cluster: 3 },
  { id: 15, x: 568, cluster: 4 },
  { id: 16, x: 593, cluster: 4 },
  { id: 17, x: 618, cluster: 4 },
  { id: 18, x: 643, cluster: 4 },
  { id: 19, x: 668, cluster: 4 },
  { id: 20, x: 693, cluster: 4 },
  { id: 21, x: 718, cluster: 4 },
  { id: 22, x: 743, cluster: 4 },
  { id: 23, x: 808, cluster: 5 },
  { id: 24, x: 833, cluster: 5 },
  { id: 25, x: 858, cluster: 5 },
  { id: 26, x: 883, cluster: 5 },
  { id: 27, x: 908, cluster: 5 },
  { id: 28, x: 933, cluster: 5 },
  { id: 29, x: 958, cluster: 5 },
  { id: 30, x: 983, cluster: 5 },
  { id: 31, x: 1008, cluster: 5 },
  { id: 32, x: 1033, cluster: 5 },
  { id: 33, x: 1058, cluster: 5 },
  { id: 34, x: 1123, cluster: 6 },
  { id: 35, x: 1148, cluster: 6 },
  { id: 36, x: 1173, cluster: 6 },
  { id: 37, x: 1198, cluster: 6 },
  { id: 38, x: 1223, cluster: 6 },
  { id: 39, x: 1248, cluster: 6 },
  { id: 40, x: 1273, cluster: 6 },
  { id: 41, x: 1298, cluster: 6 },
  { id: 42, x: 1323, cluster: 6 },
  { id: 43, x: 1348, cluster: 6 },
  { id: 44, x: 1373, cluster: 6 },
].map((point) => ({
  ...point,
  // Shared dummy-tier placeholder (design.md §6) — literal Figma text,
  // identical per point for the same reason data.js's other placeholder
  // arrays keep identical copy across items (see buildDetailFields above):
  // no real milestone content exists yet, and every point in every one of
  // the three Figma frames shows this exact same info-panel copy
  // regardless of which point is selected.
  title: "Lorem ipsum dolor",
  description:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean",
  tag: "Lorem ipsum",
  metaTop: "Lorem ipsum",
  metaBottom: "Lorem ipsum",
}));
 
// One shared label per cluster (literal "202X" in every Figma frame, not
// varying per cluster — kept as-is, same reasoning as the point content
// above). `x` is the label's raw Figma left-coordinate minus 30, same
// convention as timelinePoints — confirmed to equal (first point in the
// cluster).x - 51 for all 7 clusters, not independently eyeballed.
export const timelineClusters = [
  { year: "202X", x: 7 },
  { year: "202X", x: 122 },
  { year: "202X", x: 262 },
  { year: "202X", x: 377 },
  { year: "202X", x: 517 },
  { year: "202X", x: 757 },
  { year: "202X", x: 1072 },
];
 
