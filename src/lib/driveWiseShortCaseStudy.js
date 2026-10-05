// Drive Wise SHORT case study (5 steps): the sections on /projects/drive-wise
// (what "View Project" opens). The full 13-stage case study moved to
// /projects/drive-wise/full (src > lib > driveWiseCaseStudy.js); both pages
// share the same top block (intro, info row, Brief, The Problem).
// Decided by Sukhman, 2026-10-05; working doc in the Placement Drive project:
// claude/drive-wise/short-case-study.md, board sources claude/drive-wise/
// short-boards-*.
//
// Layout: the site's original one, one step per Contents label: heading,
// easy text (1 to 3 sentences), then ONE rich image board at natural height.
// Boards are tap-to-enlarge (`zoom: true`), since their detail is small on
// phones. The Design step shows the walkthrough video instead of a board.
// The page ends with two links (`endLinks`): the full case study (main) and
// the research website.
//
// IMAGES: public > images > projects > drive-wise > short > *.png, 2060px
// wide (2x for the 1030px column), height as the board needs.
// No em dashes in any copy here (site rule).

import { WALKTHROUGH_VIDEO, PROTOTYPE, RESEARCH_SITE } from "./driveWiseCaseStudy";

const IMG = "/images/projects/drive-wise/short";
const board = (file, height, alt) => ({
  src: `${IMG}/${file}.png`,
  width: 2060,
  height,
  alt,
  zoom: true,
});

export const driveWiseShortCaseStudy = {
  sections: [
    {
      id: "research",
      tocLabel: "Research",
      blocks: [
        {
          heading: "Research",
          text: "Four owner interviews and a survey of 72 owners showed that maintenance runs on signals owners can't read: a dashboard light, a fixed reminder, a change in how the vehicle feels.",
          images: [
            board("1-research", 2972, "Research: five methods; 72% delayed a service, unsure it was needed, 89% feel overcharged, confidence 2.7 out of 5; four owner quotes; six tools compared, none covers the everyday owner."),
          ],
        },
      ],
    },
    {
      id: "insight",
      tocLabel: "Insight",
      blocks: [
        {
          heading: "Insight",
          text: "Waiting at the workshop annoys owners as often as doubting the parts, but only feeling overcharged goes with wanting a way to check. The two largest owner types trust very differently, so every decision has to work for both.",
          images: [
            board("2-insight", 3245, "Insight: demand goes with distrust, not inconvenience. Empathy map, three owner types, four key insights, two personas and the problem statement."),
          ],
        },
      ],
    },
    {
      id: "concept",
      tocLabel: "Concept",
      blocks: [
        {
          heading: "Concept",
          text: "The core idea adjusts the manufacturer's fixed service schedule with what the owner tells the app about usage, environment and service history, and explains every result. It is a designed concept, not a working model.",
          images: [
            board("3-concept", 2589, "Concept: 6 questions, 21 opportunities, 12 features, 9 designed; importance vs difficulty; the predictive logic model; a health check-up for the vehicle."),
          ],
        },
      ],
    },
    {
      id: "design",
      tocLabel: "Design",
      blocks: [
        {
          heading: "Design",
          text: "The app borrows the language of a health check-up: six technical scores become plain words, a warning comes with its likely cause and how sure the app is, and a service is booked against a priced list of jobs.",
          video: WALKTHROUGH_VIDEO,
          prototype: PROTOTYPE,
        },
      ],
    },
    {
      id: "outcome",
      tocLabel: "Outcome & Reflection",
      blocks: [
        {
          heading: "Outcome & Reflection",
          text: "Before any screen existed, 65% of surveyed owners said they would pay a small fee for real-time condition updates and only necessary repairs. The design was reviewed against usability heuristics and tried informally by four people; a structured usability test and real vehicle data are still to come.",
          images: [
            board("5-outcome", 3189, "Outcome and reflection: 65% would pay; 8 issues found, 8 fixes planned; scenario test against a fixed reminder; five target KPIs; what is checked and not yet; trust needs reasons, not just answers."),
          ],
        },
      ],
    },
  ],

  // Links at the end of the page: the first is the main one.
  endLinks: [
    { label: "View the full case study", href: "/projects/drive-wise/full" },
    { label: "View the research website", href: RESEARCH_SITE, external: true },
  ],
};
