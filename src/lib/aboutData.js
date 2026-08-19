// Placeholder content for the About Me / How I Function / My Workflow /
// Along the Journey section (design.md §3, Section 5.0) — 🔴 dummy tier.
// Structure mirrors the Figma layout exactly (3-column bio, 2x3 principle
// grid, 3 workflow categories, 2x3 achievement grid); swap in real copy
// whenever it's ready.

export const aboutMeColumns = [
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean",
  "Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.",
  "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
];

// principles I go by professionally — 2 rows x 3 columns = 6 cards
export const principles = [
  { title: "Lorem ipsum dolor", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget." },
  { title: "Lorem ipsum dolor", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget." },
  { title: "Lorem ipsum dolor", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget." },
  { title: "Lorem ipsum dolor", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget." },
  { title: "Lorem ipsum dolor", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget." },
  { title: "Lorem ipsum dolor", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget." },
];

// tools I use, grouped — tile counts are placeholder, not meaningful yet
export const workflowCategories = [
  { label: "Design", tileCount: 5 },
  { label: "AI Assistance", tileCount: 6 },
  { label: "Currently Exploring", tileCount: 3 },
];

// supports both past achievements and "currently working on" — 2 rows x 3 columns
export const journeyEntries = [
  [
    { title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean", detail: "Lorem ipsum dolor sit amet, consectetuer", tag: "Lorem ipsum" },
    { title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean", detail: "Lorem ipsum dolor sit amet, consectetuer", tag: "Lorem ipsum" },
  ],
  [
    { title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean", detail: "Lorem ipsum dolor sit amet, consectetuer", tag: "Lorem ipsum" },
    { title: "Lorem ipsum dolor", detail: "Lorem ipsum dolor sit amet, consectetuer", tag: "Lorem ipsum" },
  ],
  [
    { title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean", detail: "Lorem ipsum dolor sit amet, consectetuer", tag: "Lorem ipsum" },
    { title: "Lorem ipsum dolor", detail: "Lorem ipsum dolor sit amet, consectetuer", tag: "Lorem ipsum" },
  ],
];
