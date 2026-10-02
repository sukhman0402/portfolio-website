// My Workflow tool icons: custom line icons (drawn 2026-09-29, approved by
// Sukhman at a 1px stroke; raised to 1.5px on 2026-10-02 to match the new
// 1.5px square box, Figma node 527:1011). Rules: every icon is drawn on the
// same 24 x 24 grid, strokes only (fill="none"), the same 1.5px line
// weight, round line ends and corners, black. The icon renders at 24px (see
// the h-6 w-6 mark in AboutSection.js), so 1 grid unit = 1 screen pixel and
// the line is exactly 1.5px. To add a tool: draw its outline on the 24 x 24
// grid with the same settings and add an entry below (id must match the id
// used in aboutData.js). Logos are trademarks of their owners; these are
// simplified outlines, shown only to name the tools used.
// Fields: name = tool name (hover label + accessible label), svg = the
// icon. (The old per-tile bg/border fields were removed 2026-10-02: every
// tool now sits in the same plain square box, styled in AboutSection.js.)
 
const svg = (paths) =>
  `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
 
export const workflowIcons = {
  figma: {
    name: "Figma",
    svg: svg("<path d=\"M12 2.5H8.8a3.2 3.2 0 0 0 0 6.4H12z\"/><path d=\"M12 2.5h3.2a3.2 3.2 0 0 1 0 6.4H12z\"/><path d=\"M12 8.9H8.8a3.2 3.2 0 0 0 0 6.4H12z\"/><circle cx=\"15.2\" cy=\"12.1\" r=\"3.2\"/><path d=\"M8.8 15.3H12v3.2a3.2 3.2 0 1 1-3.2-3.2z\"/>"),
  },
  framer: {
    name: "Framer",
    svg: svg("<path d=\"M6 2.5h12v6.5H12z\"/><path d=\"M6 9h6l6 6.5H6z\"/><path d=\"M6 15.5h6v6z\"/>"),
  },
  figjam: {
    name: "FigJam",
    svg: svg("<path d=\"M20 13.5V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7.5z\"/><path d=\"M13.5 20v-4.5a2 2 0 0 1 2-2H20\"/>"),
  },
  blender: {
    name: "Blender",
    svg: svg("<path d=\"M9.8 9.2A6.2 6.2 0 1 1 8.6 16\"/><circle cx=\"14.5\" cy=\"13.3\" r=\"2.3\"/><path d=\"M9.8 9.2L3 9.2\"/><path d=\"M8.6 16L3 19.5\"/><path d=\"M3 9.2L8.4 12.9\"/>"),
  },
  miro: {
    name: "Miro",
    svg: svg("<path d=\"M4 20.5L7.5 3.5l3 4\"/><path d=\"M8.5 20.5L12 3.5l3 4\"/><path d=\"M13 20.5L16.5 3.5l3 4\"/>"),
  },
  notion: {
    name: "Notion",
    svg: svg("<path d=\"M4 3.5h12.5l3.5 3.5v13.5H7.5L4 17z\"/><path d=\"M8.5 16.5V8l7 8.5V8\"/>"),
  },
  adobe: {
    name: "Adobe Creative Cloud",
    svg: svg("<path d=\"M7 19a4.5 4.5 0 0 1-.6-8.96 6 6 0 0 1 11.3 1.5A3.75 3.75 0 0 1 17.25 19z\"/><path d=\"M12 15.2c-1.3 1.8-4.5 1.6-4.5-.7s3.2-2.5 4.5-.7 4.5 2.5 4.5.7-3.2-2.5-4.5-.7\"/>"),
  },
  claudecode: {
    name: "Claude Code",
    svg: svg("<path d=\"M5.5 7h13v8.5h-13z\"/><path d=\"M3 10.5h2.5M18.5 10.5H21\"/><path d=\"M7.5 15.5V19M10.5 15.5V19M13.5 15.5V19M16.5 15.5V19\"/><path d=\"M9 10v1.5M15 10v1.5\"/>"),
  },
  figmamake: {
    name: "Figma Make",
    svg: svg("<path d=\"M9 9V7a2.5 2.5 0 1 0-2.5 2.5H9zM9 9h6M15 9V7a2.5 2.5 0 1 1 2.5 2.5H15zM15 9v6M15 15h2.5a2.5 2.5 0 1 1-2.5 2.5zM15 15H9M9 15v2.5A2.5 2.5 0 1 1 6.5 15zM9 15V9\"/>"),
  },
  perplexity: {
    name: "Perplexity",
    svg: svg("<path d=\"M12 3v18\"/><path d=\"M5.5 3.5L12 9.5l6.5-6\"/><path d=\"M4 9.5h16v7h-3.5M4 9.5v7h3.5\"/><path d=\"M7.5 20V13l4.5-3.5 4.5 3.5v7\"/>"),
  },
  notebooklm: {
    name: "NotebookLM",
    svg: svg("<path d=\"M3.5 19v-3a8.5 8.5 0 0 1 17 0v3\"/><path d=\"M7.5 19v-3a4.5 4.5 0 0 1 9 0v3\"/><path d=\"M11.5 19v-3a.5.5 0 0 1 1 0v3\"/>"),
  },
  stitch: {
    name: "Google Stitch",
    svg: svg("<path stroke-dasharray=\"2.4 2.1\" d=\"M17.5 6.2C16 4.3 13.9 3.5 11.6 3.5 8.5 3.5 6.5 5.3 6.5 7.6c0 5.4 11 3.3 11 9 0 2.4-2.2 3.9-5.2 3.9-2.7 0-4.8-1-6-2.8\"/>"),
  },
  cursor: {
    name: "Cursor",
    svg: svg("<path d=\"M12 2.5l8.5 4.9v9.2L12 21.5l-8.5-4.9V7.4z\"/><path d=\"M3.5 7.4h17L12 21.5\"/>"),
  },
  flora: {
    name: "Flora AI",
    svg: svg("<circle cx=\"8\" cy=\"8\" r=\"3.4\"/><circle cx=\"16\" cy=\"8\" r=\"3.4\"/><circle cx=\"8\" cy=\"16\" r=\"3.4\"/><circle cx=\"16\" cy=\"16\" r=\"3.4\"/>"),
  },
  flow: {
    name: "Google Flow",
    svg: svg("<path d=\"M3 8c3-3 6 3 9 0s6-3 9 0\"/><path d=\"M3 13c3-3 6 3 9 0s6-3 9 0\"/><path d=\"M3 18c3-3 6 3 9 0s6-3 9 0\"/>"),
  },
  github: {
    name: "GitHub",
    svg: svg("<path d=\"M15 21.5v-3.5a3.2 3.2 0 0 0-.9-2.5c3-.3 6-1.5 6-6.5a5 5 0 0 0-1.4-3.5 4.6 4.6 0 0 0-.1-3.5s-1.1-.3-3.6 1.4a12.3 12.3 0 0 0-6.5 0C6 1.7 4.9 2 4.9 2a4.6 4.6 0 0 0-.1 3.5A5 5 0 0 0 3.4 9c0 5 3 6.2 6 6.5a3.2 3.2 0 0 0-.9 2.5v3.5\"/><path d=\"M8.5 18.5c-3 1-3.5-1.5-5-2\"/>"),
  },
  vercel: {
    name: "Vercel",
    svg: svg("<path d=\"M12 4l9 15.5H3z\"/>"),
  },
  colab: {
    name: "Google Colab",
    svg: svg("<path d=\"M10.2 8.6a4.8 4.8 0 1 0 0 6.8\"/><path d=\"M13.8 15.4a4.8 4.8 0 1 0 0-6.8\"/>"),
  },
  arduino: {
    name: "Arduino",
    svg: svg("<path d=\"M12 12c-1.6-2.4-3-3.8-5-3.8a3.8 3.8 0 0 0 0 7.6c2 0 3.4-1.4 5-3.8s3-3.8 5-3.8a3.8 3.8 0 0 1 0 7.6c-2 0-3.4-1.4-5-3.8z\"/><path d=\"M5.3 12h3.4M15.3 12h3.4M17 10.3v3.4\"/>"),
  },
  python: {
    name: "Python",
    svg: svg("<path d=\"M12 8H7a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1\"/><path d=\"M8 16v-2.5a2 2 0 0 1 2-2h4a2 2 0 0 0 2-2V6a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v2\"/><path d=\"M12 16h5a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3h-1\"/><path d=\"M16 8v2.5a2 2 0 0 1-2 2h-4a2 2 0 0 0-2 2V18a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2\"/><circle cx=\"10.5\" cy=\"5.6\" r=\".3\"/><circle cx=\"13.5\" cy=\"18.4\" r=\".3\"/>"),
  },
  kaggle: {
    name: "Kaggle",
    svg: svg("<path d=\"M7.5 3v18\"/><path d=\"M17 5.5L7.5 14\"/><path d=\"M11.2 10.7L17 20\"/>"),
  },
  d3: {
    name: "D3.js",
    svg: svg("<path d=\"M3 5h4a7 7 0 0 1 0 14H3z\"/><path d=\"M13 5h4.5a3.5 3.5 0 0 1 0 7H15\"/><path d=\"M15 12h2.5a3.5 3.5 0 0 1 0 7H13\"/>"),
  },
  lensstudio: {
    name: "Lens Studio",
    svg: svg("<path d=\"M3 12l9-4.5 9 4.5-9 4.5z\"/><path d=\"M7.5 4.5l9 4.5v10.5l-9-4.5z\"/>"),
  },
  p5: {
    name: "p5.js",
    svg: svg("<path d=\"M12 12L12.00 4.00\"/><path d=\"M12 12L19.61 9.53\"/><path d=\"M12 12L16.70 18.47\"/><path d=\"M12 12L7.30 18.47\"/><path d=\"M12 12L4.39 9.53\"/>"),
  },
  unity: {
    name: "Unity",
    svg: svg("<path d=\"M12 2.5l8.5 4.9v9.2L12 21.5l-8.5-4.9V7.4z\"/><path d=\"M12 12V6.5M12 12l4.8 2.8M12 12l-4.8 2.8\"/>"),
  },
};
 
 
