// Placeholder content — 🔴 dummy tier per design.md §6.
// Real project/research names, descriptions and case-study content are
// still pending (design.md §8.4). Swap these objects out once the locked
// list of 4 projects + 4 research pieces is confirmed; slugs are stable
// so routes won't need to change when the copy does.

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

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getResearchBySlug(slug) {
  return research.find((r) => r.slug === slug);
}
