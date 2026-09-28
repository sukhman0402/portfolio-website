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
  "I look for environments where I keep learning, take on complex problems, and help shape new systems from the ground up, alongside people who push me to think further.",
];
 
// How I Function: 6 principle cards, final copy (Sukhman, 2026-09-28).
// Rules: one-word noun headings; each description stays inside the Figma
// dummy budget (about 12 words / 85 characters) so it sits on exactly
// 2 lines at 1440px, 1280px and on phones. No em dashes.
// Grid order: row 1 = how I think, row 2 = what the work delivers.
export const principles = [
  { title: "Evidence", description: "Surveys, field visits and real data guide my decisions, not my first instinct." },
  { title: "Systems", description: "I map how every part connects before I design a single screen." },
  { title: "Exploration", description: "I chase new tools and ideas, then test which ones truly improve my work." },
  { title: "Simplicity", description: "I strip away what people don't need, until each screen feels calm and clear." },
  { title: "Precision", description: "Small choices in spacing, wording and timing decide how the whole thing feels." },
  { title: "Viability", description: "A design must serve the business as well as the people who use it." },
];
 
// My Workflow: tools per category, final lists (Sukhman, 2026-09-28).
// Rules: max 18 per category (3 rows of 6 at the 330px column width, 50px
// tiles, 6px gap). Order = reading order of the tiles: row 1 left to
// right, then row 2, then row 3. Strongest current tools first, tools used
// earlier last. Each id must exist in src/lib/workflowIcons.js.
export const workflowCategories = [
  {
    label: "Design",
    tools: [
      "figma", "framer", "figjam", "protopie", "blender", "miro",
      "spline", "rive", "webflow", "maze", "notion", "sketch",
      "adobe", "autocad", "sketchup",
    ],
  },
  {
    label: "AI Assistance",
    tools: [
      "claudecode", "figmamake", "perplexity", "notebooklm", "stitch", "cursor",
      "v0", "lovable", "meshy", "flora", "flow", "midjourney",
      "runway", "relume",
    ],
  },
  {
    label: "Currently Exploring",
    tools: [
      "github", "vercel", "colab", "arduino", "nextjs", "react",
      "tailwind", "python", "kaggle", "d3", "esp32", "raspberrypi",
      "lensstudio", "p5", "unity", "touchdesigner", "huggingface", "supabase",
    ],
  },
];
 
// Along the Journey: 6 entries, draft v2 (Sukhman's picks + order, 2026-09-28).
// Each entry = title (what), detail (who / where), tag (status: Finalist,
// Participant, Certified, Ongoing). Array = 3 columns x 2 entries, so on
// desktop row 1 = each column's first entry, row 2 = each column's second.
// Order (direct instruction): row 1 = STI Forum, ETSIF, IAMS (the events);
// row 2 = AI Certifications, Multi-Agent AI System, Digital Cheque System.
// Rules: titles are short Title Case names that stay on ONE line (checked
// at 1440, 1280, 393 and 360px), detail 1 line, no em dashes, no years
// (not confirmed for every event).
export const journeyEntries = [
  [
    { title: "India Japan STI Forum", detail: "Bharat Nōgyō, IISc x Keio University", tag: "Finalist" },
    { title: "AI Certifications", detail: "LaunchEd Global x Skill India, Be10x", tag: "Certified" },
  ],
  [
    { title: "Emerging Tech (ETSIF)", detail: "Dhirubhai Ambani University", tag: "Participant" },
    { title: "Multi-Agent AI System", detail: "OpenClaw as orchestrator, personal project", tag: "Ongoing" },
  ],
  [
    { title: "Indian Academic Makerspaces Summit", detail: "IIT Gandhinagar", tag: "Participant" },
    { title: "Digital Cheque System", detail: "For India, independent exploration", tag: "Ongoing" },
  ],
];
 
 
 
 
