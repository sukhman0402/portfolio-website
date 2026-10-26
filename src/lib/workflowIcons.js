// My Workflow tool logos (2026-10-25, Sukhman's tile format, Figma node
// 619:1637). Each tool is a full-bleed 50px square tile: the brand colour
// (or black, or #F5F5F5) fills the square and the official mark sits centred inside it.
// Pattern taken from his 7 designed tiles (Framer, Arduino, Kaggle,
// Perplexity, Miro, Colab, Flora), with changes since:
//   - dark mark on white  -> white mark on black (Notion, GitHub, Vercel,
//     Cursor); Perplexity and NotebookLM keep their black mark on #F5F5F5
//     (2026-10-26, Sukhman)
//   - coloured mark on white -> white mark on that colour (Kaggle, Claude Code)
//   - mark with its own colour block keeps it as the tile (Arduino, Miro,
//     Adobe, p5.js, FigJam)
//   - multi-colour mark -> on #F5F5F5 light grey (Figma, Blender, Python,
//     D3, Colab, Lens Studio; 2026-10-26, Sukhman: was black)
// Files live in public/images/workflow/<id>.png at 200 x 200 (4x the 50px
// tile, so they stay sharp on retina screens). Logos are trademarks of
// their owners, shown only to name the tools used.
// To add a tool: export its 50px tile from Figma at 4x, save it as
// public/images/workflow/<id>.png, and add an entry below (id must match
// the id used in aboutData.js).
// Fields: name = tool name (hover label + accessible label), image = tile.

const tile = (id) => `/images/workflow/${id}.png`;

export const workflowIcons = {
  figma: { name: "Figma", image: tile("figma") },
  framer: { name: "Framer", image: tile("framer") },
  figjam: { name: "FigJam", image: tile("figjam") },
  blender: { name: "Blender", image: tile("blender") },
  miro: { name: "Miro", image: tile("miro") },
  notion: { name: "Notion", image: tile("notion") },
  adobe: { name: "Adobe Creative Cloud", image: tile("adobe") },
  claudecode: { name: "Claude Code", image: tile("claudecode") },
  figmamake: { name: "Figma Make", image: tile("figmamake") },
  perplexity: { name: "Perplexity", image: tile("perplexity") },
  notebooklm: { name: "NotebookLM", image: tile("notebooklm") },
  stitch: { name: "Google Stitch", image: tile("stitch") },
  cursor: { name: "Cursor", image: tile("cursor") },
  flora: { name: "Flora AI", image: tile("flora") },
  flow: { name: "Google Flow", image: tile("flow") },
  github: { name: "GitHub", image: tile("github") },
  vercel: { name: "Vercel", image: tile("vercel") },
  colab: { name: "Google Colab", image: tile("colab") },
  arduino: { name: "Arduino", image: tile("arduino") },
  python: { name: "Python", image: tile("python") },
  kaggle: { name: "Kaggle", image: tile("kaggle") },
  d3: { name: "D3.js", image: tile("d3") },
  lensstudio: { name: "Lens Studio", image: tile("lensstudio") },
  p5: { name: "p5.js", image: tile("p5") },
  unity: { name: "Unity", image: tile("unity") },
};
