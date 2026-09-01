// Placeholder content — 🔴 dummy tier per design.md §6.
// Real project/research names, descriptions and case-study content are
// still pending (design.md §8.4). Swap these objects out once the locked
// list of 4 projects + 4 research pieces is confirmed; slugs are stable
// so routes won't need to change when the copy does.
//
// PROJECT DETAIL FIELDS (added 2026-09-01, Figma node 179:3614 "Project 01
// (D)- Section 1.0" — individual project page redesign):
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
//     variable in length per project (see ProjectTopics.js) — count and
//     body length below vary project-to-project on purpose, standing in for
//     real case-study content of differing depth.
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
    ...buildProjectDetail(5),
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
    ...buildProjectDetail(3),
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
    ...buildProjectDetail(4),
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
    ...buildProjectDetail(6),
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
    ...buildProjectDetail(3),
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
    ...buildProjectDetail(4),
  },
];
 
export const research = [
  {
    slug: "research-01",
    index: "01",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean",
    tag: "Lorem ipsum",
  },
  {
    slug: "research-02",
    index: "02",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean",
    tag: "Lorem ipsum",
  },
  {
    slug: "research-03",
    index: "03",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean",
    tag: "Lorem ipsum",
  },
  {
    slug: "research-04",
    index: "04",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean",
    tag: "Lorem ipsum",
  },
];
 
// Shared placeholder builder for the project-detail fields (see comment
// block at the top of this file). Kept as a function — not static
// per-project literals — specifically so section COUNT and body LENGTH can
// vary project-to-project (some projects get a 2-paragraph body on one
// section, matching the Figma source's own topic-2 example) without
// hand-duplicating near-identical blocks 6 times.
function buildProjectDetail(sectionCount) {
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
    sections: Array.from({ length: sectionCount }).map((_, i) => ({
      id: `section-${i + 1}`,
      tocLabel: "Lorem ipsum",
      heading: `Lorem Ipsum Topic ${i + 1}`,
      body:
        i % 2 === 1
          ? "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n\nAenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim."
          : "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
      image: true,
    })),
  };
}
 
export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
 
export function getResearchBySlug(slug) {
  return research.find((r) => r.slug === slug);
}
 
