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
export const research = [
  {
    slug: "research-01",
    index: "01",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean",
    tag: "Lorem ipsum",
    ...buildDetailFields(4, { closingBodyIndex: 1 }),
  },
  {
    slug: "research-02",
    index: "02",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean",
    tag: "Lorem ipsum",
    ...buildDetailFields(3),
  },
  {
    slug: "research-03",
    index: "03",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean",
    tag: "Lorem ipsum",
    ...buildDetailFields(5),
  },
  {
    slug: "research-04",
    index: "04",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean",
    tag: "Lorem ipsum",
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
 
