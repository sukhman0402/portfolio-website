// Placeholder content for the About Me / How I Function / My Workflow /
// Along the Journey section (design.md §3, Section 5.0) — 🔴 dummy tier.
// Structure mirrors the Figma layout exactly (3-column bio, 2x3 principle
// grid, 3 workflow categories, 2x3 achievement grid); swap in real copy
// whenever it's ready.
 
// About Me: 3 paragraphs, final copy (Sukhman, 2026-09-25).
// Story: P1 = who he is (plans first), P2 = architecture > Lumen
// Consultancy > Master's in design, P3 = the environment he wants next.
// Rules: semi-formal, no technical terms, no dates or availability, no em
// dashes. Length budget = the Figma dummy text: 2 / 7 / 4 lines at 1440px
// (3 / 8 / 5 at 1280px, 2 / 6 / 4 on phones).
export const aboutMeColumns = [
  "I am someone who plans before building, bringing structure and clarity to every project I take on.",
  "My journey began in architecture, where I learned that good design starts with a sound plan. I then co-founded Lumen Consultancy, leading its design across branding, strategy and operations, and saw how design shapes a business. Today, my Master's in design lets me apply that structured approach to people and products.",
  "I am looking for an environment where I keep learning, take on complex problems, and help shape new systems from the ground up, alongside people who push me to think further.",
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
 
// tools I use, grouped — tile counts are placeholder, not meaningful yet.
// Corrected 2026-08-20 against the exact Rectangle node coordinates in
// Figma node 241:462 (Design=5 single row; AI Assistance=9, wraps to a
// second row at exactly 6 tiles/row given the 330px column width and 6px
// gap; Currently Exploring=4 single row).
export const workflowCategories = [
  { label: "Design", tileCount: 5 },
  { label: "AI Assistance", tileCount: 9 },
  { label: "Currently Exploring", tileCount: 4 },
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
 
