// Drive Wise SHORT case study (5 steps): the sections on /projects/drive-wise
// (what "View Project" opens). The full 13-stage case study is on
// /projects/drive-wise/full (src > lib > driveWiseCaseStudy.js); both pages
// share the same top block (intro, info row, Brief, The Problem).
//
// FORMAT (FINAL, Sukhman 2026-10-06): rules in the Placement Drive project,
// claude/case-study-short-format-rules.md. Rendered by
// src > components > ShortStep.js. In short:
//   - each step: heading + intro text, an opening statement, 2 to 5 parts,
//     a closing statement
//   - each part: heading, text (any length, split into paragraphs), then
//     ONE visual holding the conclusion (numbers, quotes, a table, screens)
//   - visuals are page elements (not images) and snap to the 3 case-study
//     columns; the accent is used once per visual
//   - spacing: line > 10 > heading; text > 50 > visual; visual > 10 > line;
//     statements 30 above and below
// No em dashes in any copy here (site rule).

import { WALKTHROUGH_VIDEO, PROTOTYPE, RESEARCH_SITE } from "./driveWiseCaseStudy";

const SCREENS = "/images/projects/drive-wise/short";
const screen = (file, title, text) => ({
  src: `${SCREENS}/${file}.png`,
  width: 844,
  height: 1788,
  title,
  text,
  alt: `Drive Wise screen: ${title}.`,
});

export const driveWiseShortCaseStudy = {
  sections: [
    // ------------------------------------------------------------ 1 RESEARCH
    {
      id: "research",
      tocLabel: "Research",
      short: true,
      heading: "Research",
      intro: [
        "Four owner interviews and a survey of 72 owners showed that maintenance runs on signals owners can't read: a dashboard light, a fixed reminder, a change in how the vehicle feels.",
      ],
      open: { text: "Owners decide on signals", accent: "they can't read." },
      parts: [
        {
          heading: "Methods",
          text: [
            "Owners were asked directly, in conversation and at scale. Existing vehicle data, published studies and current products were then reviewed to see what is already known.",
          ],
          visual: {
            kind: "stats",
            label: "Methods: 4 interviews and 72 survey owners (primary); 4 data sources, 5 studies and 6 tools compared (secondary).",
            // five equal columns (Sukhman, 2026-10-06: same spacing between
            // the primary and the secondary numbers)
            items: [
              { tag: "Primary", accent: true, n: "4", l: "Interviews" },
              { tag: "Primary", accent: true, n: "72", l: "Survey owners" },
              { tag: "Secondary", n: "4", l: "Data sources" },
              { tag: "Secondary", n: "5", l: "Studies" },
              { tag: "Secondary", n: "6", l: "Tools compared" },
            ],
          },
        },
        {
          heading: "Survey",
          text: [
            "Shared through personal networks and public posts, the survey reached 72 vehicle owners with 15 questions across five themes: vehicle profile, maintenance habits, warning signs and confidence, trusted sources, and spending.",
          ],
          visual: {
            kind: "numbers",
            items: [
              { value: "72%", cap: "delayed a service, unsure it was needed", accent: true },
              { value: "89%", cap: "feel overcharged, at least sometimes" },
              { value: "2.7", small: " / 5", cap: "confidence explaining why a part needs replacing" },
            ],
          },
        },
        {
          heading: "Interviews",
          text: [
            "Semi-structured conversations with four vehicle owners covered how they decide a vehicle needs attention, how far they trust the service they get, and whether a condition tracker would help.",
            "All four ride a two-wheeler and three also own a car. The conversations were in Hindi and English, so the quotes are translated and lightly edited for clarity. Counts stay as \"x of 4\", never as percentages.",
          ],
          visual: {
            kind: "quotes",
            // one row per owner: the quote in column 1, what it shows in
            // columns 2 and 3 (Sukhman, 2026-10-06), then the counts
            quotes: [
              {
                who: "Owner 1",
                meta: "Two-wheeler + car",
                text: "The whole vehicle goes in for a service; even parts that are fine get checked.",
                noteBold: "Decides by the oil-change light.",
                note: "One light on the dashboard sends the whole vehicle in, whether every part needs it or not.",
              },
              {
                who: "Owner 2",
                meta: "Car + two-wheeler",
                text: "This is always in my mind: does it really require it?",
                noteBold: "Decides by a light and the company reminder.",
                note: "Without knowing what the light refers to, the doubt stays: is the work really needed?",
              },
              {
                who: "Owner 3",
                meta: "Two-wheeler + car",
                text: "Mostly a friend, I guess.",
                noteBold: "Decides by the reminder and the check-engine light.",
                note: "When a warning light comes on, the first step is to ask a friend.",
              },
              {
                who: "Owner 4",
                meta: "Two-wheeler",
                text: "If I can basically remember it, then I don't think I need another reminder.",
                noteBold: "The counterpoint.",
                note: "He decides by feel and past pattern, and trusts one mechanic he knows, so his trust comes from a relationship, not from information. A tracker would feel like extra load to him.",
              },
            ],
            counts: [
              { k: "3", small: "of 4", v: "decide on a signal they can't read" },
              { k: "3", small: "of 4", v: "doubt the work was needed" },
              { k: "3", small: "of 4", v: "would use a tracker" },
            ],
          },
        },
        {
          heading: "Gap analysis",
          text: [
            "Six existing tools were compared on one question: can an everyday owner of any two-wheeler or car use them, without extra hardware, to see their vehicle's condition and what is due next?",
          ],
          visual: {
            kind: "checkTable",
            columns: ["2-wheelers + cars", "Any brand", "No extra hardware", "Condition view", "What's due", "Service record"],
            // y = yes, h = partly, n = no, - = not stated
            rows: [
              { name: "GoMechanic", cells: "nyynn-" },
              { name: "Suzuki Connect", cells: "nnnh--" },
              { name: "TVS Connect", cells: "nnnh-y" },
              { name: "Car Scanner ELM OBD2", cells: "nynyn-" },
              { name: "Drivvo", cells: "yyynhy" },
              { name: "mParivahan", cells: "yyynnh" },
              { name: "Drive Wise", sub: "Target", cells: "yyyyyy", target: true },
            ],
          },
        },
      ],
      close: { text: "Each tool covers a part.", accent: "None covers the everyday owner." },
    },

    // ------------------------------------------------------------- 2 INSIGHT
    {
      id: "insight",
      tocLabel: "Insight",
      short: true,
      heading: "Insight",
      intro: [
        "Waiting at the workshop annoys owners as often as doubting the parts, but only feeling overcharged goes with wanting a way to check. The two largest owner types trust very differently, so every decision has to work for both.",
      ],
      open: { text: "Demand goes with", accent: "distrust, not inconvenience." },
      parts: [
        {
          heading: "Empathy map",
          text: [
            "The four interviews and the survey were combined into one composite empathy map of what owners say, think, do and feel about maintaining their vehicles.",
          ],
          visual: {
            kind: "lines",
            rows: [
              { label: "Says", lines: [{ t: "I own a two-wheeler and a four-wheeler." }, { t: "I observe for a few days, then go to the mechanic." }] },
              { label: "Thinks", lines: [{ t: "Whatever reason the mechanic gives to replace a part is justified.", accent: true }, { t: "What if the vehicle breaks down mid-trip?" }] },
              { label: "Does", lines: [{ t: "I keep the bills and receipts from the service centre." }, { t: "I go to the mechanic if an unfamiliar warning appears." }] },
              { label: "Feels", lines: [{ t: "I don't feel sure the parts changed were actually required.", accent: true }, { t: "I am being overcharged for the service." }] },
            ],
            note: "In blue: the tension. Owners accept the mechanic's word, yet are not sure the parts were needed.",
          },
        },
        {
          heading: "What goes with demand",
          text: [
            "Two frustrations are equally common, but they behave differently. Only one of them goes with wanting a way to check.",
            "This is an association in an exploratory analysis of 72 answers, not a cause.",
          ],
          visual: {
            kind: "numbers",
            size: "mid",
            items: [
              { value: "50%", cap: "are frustrated by waiting at the workshop" },
              { value: "50%", cap: "doubt the parts that were changed" },
              { value: "+0.94", cap: "feeling overcharged goes with wanting to pay for a check; waiting does not", accent: true },
            ],
          },
        },
        {
          heading: "Owner types",
          text: [
            "Clustering the 72 survey responses by answer pattern grouped owners into three types, which differ most in whom they trust and whether they would pay for clarity.",
          ],
          visual: {
            kind: "meters",
            items: [
              { value: "34", of: "of 72", name: "Local-Mechanic Loyalists", sub: "Trust a mechanic they know", share: 38, shareLabel: "would pay" },
              { value: "23", of: "of 72", name: "Self-Directed Researchers", sub: "Look for information first", share: 83, shareLabel: "would pay" },
              { value: "15", of: "of 72", name: "Overcharged Pragmatists", sub: "Feel overcharged most often", share: 100, shareLabel: "would pay", accent: true },
            ],
          },
        },
        {
          heading: "Key insights",
          text: [
            "Interviews, survey and analysis were read side by side; four insights held across at least two of the three.",
          ],
          visual: {
            kind: "insights",
            rows: [
              { no: "01", title: "Maintenance follows generic signals", value: "72%", cap: "delayed a service, unsure it was needed" },
              { no: "02", title: "Demand goes with distrust", value: "89%", cap: "feel overcharged, at least sometimes", accent: true },
              { no: "03", title: "A trusted mechanic replaces information", value: "40%", cap: "trust a local mechanic most" },
              { no: "04", title: "Every extra step costs attention", value: "22%", cap: "keep no maintenance records" },
            ],
          },
        },
        {
          heading: "Personas",
          text: [
            "Two composite personas were built from the two largest owner types, the interviews and the empathy map: one who looks for information and would pay for clarity, and one who trusts a mechanic he has known for years.",
          ],
          visual: {
            kind: "personas",
            people: [
              { name: "Meera, 34", type: "Self-Directed Researcher", line: "Owns two vehicles, reads neither.", points: ["Searches online before the workshop", "Would pay for clarity"] },
              { name: "Suresh, 58", type: "Local-Mechanic Loyalist", line: "Trusts his mechanic, not an app.", points: ["Waits to see if a problem passes", "Unlikely to pay"] },
            ],
            note: { lead: "Two kinds of trust.", bold: "Every design decision has to work for both.", rest: "Both are composites, not real people." },
          },
        },
      ],
      close: { text: "Everyday owners decide when to service, and whether a repair is needed, from", accent: "signals they cannot read." },
    },

    // ------------------------------------------------------------- 3 CONCEPT
    {
      id: "concept",
      tocLabel: "Concept",
      short: true,
      heading: "Concept",
      intro: [
        "The core idea adjusts the manufacturer's fixed service schedule with what the owner tells the app about usage, environment and service history, and explains every result.",
        "It is a designed concept, not a working model.",
      ],
      open: { text: "From what the owner knows", accent: "to what the vehicle needs." },
      parts: [
        {
          heading: "From questions to features",
          text: [
            "The problem statement and the personas' frustrations were turned into questions, then opportunities, then features.",
          ],
          visual: {
            kind: "numbers",
            size: "mid",
            items: [
              { value: "6", cap: "\"How might we\" questions, one for each gap the research exposed" },
              { value: "21", cap: "opportunities, traced from the empathy-map statements" },
              { value: "12", then: "9", cap: "features answer them;", capAccent: "9 are designed", capRest: "in this project" },
            ],
          },
        },
        {
          heading: "Importance vs difficulty",
          text: [
            "The twelve features were placed by how strongly the research asks for them and how hard they are to build, which decided what the concept designs now and what waits.",
          ],
          visual: {
            kind: "matrix",
            columns: ["Easy to build", "Medium", "Hard"],
            // a leading "!" marks a feature that is not designed yet
            rows: [
              { label: "High importance", cells: [["Decode warnings"], ["Health score", "Short questionnaire", "Priced booking", "Selective reminders"], ["Likely cause"]] },
              { label: "Medium importance", cells: [["!Digital records"], ["Pick-up and payment", "Live tracking"], ["Registration lookup"]] },
              { label: "Low importance", cells: [["!Manual and DIY help"], [], ["!More vehicles, sensors"]] },
            ],
            legend: ["designed (9)", "not designed yet (3)", "Difficulty is the designer's estimate"],
          },
        },
        {
          heading: "Predictive logic model",
          text: [
            "The core idea was mapped as one system: what the owner and official records provide, how it is weighed against the manufacturer's schedule, and what the owner is told.",
            "The logic is designed, not built or validated.",
          ],
          visual: {
            kind: "flow",
            steps: [
              { tag: "1 · Information", title: "What goes in", items: ["Registration record", "Owner's answers: usage, roads, parking, last service", "Weighed against the maker's schedule (km or months)"] },
              { tag: "2 · Intelligence", title: "Six scores", items: ["Wear · Environmental stress", "Maintenance discipline", "Failure probability", "Cost inefficiency · Useful life"] },
              { tag: "3 · Communication", title: "What the owner is told", items: ["Health score", "What is due, and when", "Likely cause of a warning", "Every answer with its reason and confidence"], accent: true },
            ],
          },
        },
        {
          heading: "Metaphor",
          text: [
            "The app borrows the language of a health check-up, so owners meet a familiar sequence instead of technical terms.",
          ],
          visual: {
            kind: "pairs",
            rows: [
              ["Vital signs", "Health score", "One number per score, in plain words"],
              ["Symptoms", "Dashboard signs", "The warning lights the owner sees"],
              ["Diagnosis", "Likely cause", "With how sure the app is"],
              ["Treatment", "Priced service", "Every job and its price, before agreeing"],
              ["Follow-up", "Tracking, feedback", "Each step of the service, with a time"],
            ],
          },
        },
      ],
      close: { text: "Every answer comes", accent: "with its reason and how sure the app is." },
    },

    // -------------------------------------------------------------- 4 DESIGN
    {
      id: "design",
      tocLabel: "Design",
      short: true,
      heading: "Design",
      intro: [
        "The app borrows the language of a health check-up: six technical scores become plain words, a warning comes with its likely cause and how sure the app is, and a service is booked against a priced list of jobs.",
      ],
      open: { text: "Six technical scores become", accent: "plain words." },
      parts: [
        {
          heading: "Walkthrough",
          text: [
            "The concept was designed as a phone app across 17 screen types. The walkthrough follows one owner from the home screen to tracking a booked service.",
          ],
          visual: {
            kind: "walkthrough",
            video: WALKTHROUGH_VIDEO,
            prototype: PROTOTYPE,
            screens: [
              { name: "Home", text: "\"Your vehicle needs attention\"" },
              { name: "Status", text: "Six scores in plain words" },
              { name: "Breakdown Risk", text: "Likely cause and what to do" },
              { name: "Service Detail", text: "Every job and its price" },
              { name: "Track Servicing", text: "Each step with a time" },
            ],
          },
        },
        {
          heading: "Three moments",
          text: [
            "Three moments carry the core idea: getting to know the vehicle, showing its health, and explaining a warning.",
          ],
          visual: {
            kind: "screens",
            screens: [
              screen("screen-onboarding", "Onboarding that learns the vehicle", "Found from its registration number, then six short questions on how it is used."),
              screen("screen-health", "Vehicle health at a glance", "Six derived scores in plain words, each with one number and a short reason."),
              screen("screen-warning", "Decoding a warning", "The likely cause of the signs the owner picked, how sure the app is, and what to do next."),
            ],
          },
        },
        {
          heading: "Book a service",
          text: [
            "Booking is built around a step-by-step price breakdown, so the owner knows each job and its cost before agreeing, then follows the work without being at the workshop.",
          ],
          visual: {
            kind: "screens",
            screens: [
              screen("screen-service-detail", "Every job and its price", "The service is broken into jobs, each priced, before the owner agrees."),
              screen("screen-pickup-time", "Pick-up at a chosen time", "The vehicle is collected, so the owner does not wait at the workshop."),
              screen("screen-tracking", "Each step with a time", "The work is followed live, without being at the workshop."),
            ],
          },
        },
      ],
      close: { text: "A service is booked against", accent: "a priced list of jobs." },
    },

    // ------------------------------------------------- 5 OUTCOME & REFLECTION
    {
      id: "outcome",
      tocLabel: "Outcome & Reflection",
      short: true,
      heading: "Outcome & Reflection",
      intro: [
        "Before any screen existed, 65% of surveyed owners said they would pay a small fee for real-time condition updates and only necessary repairs.",
        "The design was reviewed against usability heuristics and tried informally by four people; a structured usability test and real vehicle data are still to come.",
      ],
      open: { text: "Owners want it.", accent: "The design still needs real testing." },
      parts: [
        {
          heading: "Concept validation",
          text: [
            "Before any screen was designed, the survey asked whether owners would pay a small fee for real-time condition updates and only necessary repairs.",
          ],
          visual: {
            kind: "numbers",
            items: [
              { value: "65%", cap: "would pay a small fee for real-time condition updates and only necessary repairs", accent: true },
              { value: "31%", cap: "said it depends on the cost" },
              { value: "4%", cap: "said no" },
            ],
          },
        },
        {
          heading: "Usability review",
          text: [
            "The 20-screen core flow was reviewed against Nielsen's ten usability heuristics and basic accessibility checks. Four people also tried the Figma prototype and shared open feedback; this was not a structured usability test.",
          ],
          visual: {
            kind: "fixes",
            from: "8",
            to: "8",
            cap: "issues found, each paired with a planned fix",
            listLabel: "Three of the fixes",
            items: [
              "Make every score read \"higher = better\", with a one-word status (Good, Watch, Act)",
              "Darken captions to at least 4.5 : 1 contrast (WCAG 2.1)",
              "Label each likely-cause number, with a confidence level",
            ],
          },
        },
        {
          heading: "Scenario test",
          text: [
            "Three synthetic owners with the same scooter but different use were run through the service-timing logic, to check whether it moves the service date where a fixed reminder cannot.",
          ],
          visual: {
            kind: "timeline",
            max: 90,
            riders: [
              { name: "A · City commuter", use: "50 km a week", day: 90, result: "Same day as the reminder" },
              { name: "B · Long-distance", use: "1,000 km a week", day: 21, result: "69 days earlier" },
              { name: "C · Dusty, rough roads", use: "300 km a week", day: 56, result: "34 days earlier" },
            ],
            legend: ["Drive Wise service date", "Fixed reminder, day 90"],
          },
        },
        {
          heading: "Target KPIs",
          text: [
            "Five measures were set to judge Drive Wise once it is used, each starting from a baseline found in the research.",
          ],
          visual: {
            kind: "kpis",
            tag: "Targets, not results",
            heads: ["Baseline (research)", "Target"],
            rows: [
              ["Delay a service, unsure", "72%", "under 40%"],
              ["Confidence explaining a repair", "2.7 / 5", "4 / 5"],
              ["Feel overcharged", "89%", "under 50%"],
              ["Heavy-use services on time", "34 to 69 days late", "80% on time"],
              ["Onboarding completed", "new", "70%"],
            ],
          },
        },
        {
          heading: "Where it stands",
          text: ["What has been checked so far, and what has not."],
          visual: {
            kind: "status",
            lists: [
              { label: "Checked", items: ["Heuristic review", "Informal feedback, 4 people", "Scenario test"] },
              { label: "Not yet", items: ["Structured usability test", "Real vehicle data", "A working model"], muted: true },
            ],
            note: "Willingness to pay shows demand for the idea, not for these screens. The scenario test is synthetic.",
          },
        },
      ],
      close: { text: "Trust needs reasons,", accent: "not just answers." },
    },
  ],

  // Links at the end of the page: the first is the main one.
  endLinks: [
    { label: "View full case study", href: "/projects/drive-wise/full" },
    { label: "View research website", href: RESEARCH_SITE, external: true },
  ],
};
