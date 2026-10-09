// UN Sustainable Development Goals case study: the top block on
// /projects/un-sdgs (label, intro, info row, Brief, The Problem), read by
// ProjectHeroTop.js. Copy from the approved Highlights draft (Claude Doc
// "UN SDGs: Highlights draft", 2026-10-09) and claude/un-sdgs/answers.md.
// No em dashes.

export const unSdgsCaseStudy = {
  introLabel: "UN Sustainable Development Goals",
  intro:
    "A single-page website that turns scattered SDG data into one scroll, from the global agenda down to where a reader's own country stands. Every number is labelled for where it came from.",
  infoFields: [
    { label: "Discipline", value: "Sustainability" },
    { label: "Role", value: "Information Designer" },
    { label: "Tools Used", value: "Figma, NotebookLM, Claude Code, GitHub, Vercel" },
    { label: "Timeline", value: "12 days" },
  ],
  briefLabel: "Brief",
  brief:
    "Information Design, M.Des Interaction Design and Intelligent UX, Dhirubhai Ambani University, guided by Prof. Anupam Rana. There was no set topic: pick one through a Google Trends scan, then build a single-page website that shows dense information in the simplest way, so any visitor can find the information and numbers they came for.",
  problemLabel: "The Problem",
  problem:
    "SDG progress is published across many web pages, yearly reports, PDFs and separate charts. There is no single place to see how the world, a region or one country is doing, and one answer can mean moving through many pages.",
};
