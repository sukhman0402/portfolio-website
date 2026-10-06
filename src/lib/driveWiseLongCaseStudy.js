// Drive Wise DEEP DIVE (the long case study, 13 chapters) on /projects/drive-wise/full.
// Reached from "View the Deep Dive" at the end of the Highlights page
// (the short 5-step case study). Naming: Sukhman, 2026-10-06.
//
// FORMAT (FINAL, Sukhman 2026-10-06): rules in the Placement Drive project,
// claude/case-study-long-format-rules.md. One rule set only: the GeoTab
// Insurance Behance case study. The site header stays; "Back to the short
// case study" sits under it and at the end. Rendered by
// src > components > LongCaseStudy.js (one component per module type).
//
// Text marks: **bold** words; headline parts are [before, highlighted, after].
// Honesty: only real numbers; quotes only where someone said the words;
// targets are labelled as targets. No em dashes in any copy here.

import { WALKTHROUGH_VIDEO, PROTOTYPE, RESEARCH_SITE, driveWiseCaseStudy } from "./driveWiseCaseStudy";

const SCREENS = "/images/projects/drive-wise/short";
// Neutral silhouette placeholders for the anonymous owners (no real faces).
// Swap a file for a real, consented photo later; keep the same name.
const PEOPLE = "/images/projects/drive-wise/long";

// Role and Tools come from the project page itself, so both versions always match.
const info = (label) => driveWiseCaseStudy.infoFields.find((f) => f.label === label).value;

export const driveWiseLongCaseStudy = {
  back: { label: "Back to Highlights", href: "/projects/drive-wise" },
  endLinks: [{ label: "View research website", href: RESEARCH_SITE, external: true }],

  modules: [
    // ------------------------------------------------------------ 01 OVERVIEW
    {
      type: "headline",
      id: "overview",
      eyebrow: { n: 1, name: "Overview", tag: "Case study, concept" },
      head: ["Drive Wise helps owners know ", "what their vehicle needs."],
      side: "A predictive vehicle-health app concept for everyday **two-wheeler and car owners.** It turns usage, environment and service history into a clear picture of the vehicle's condition.",
      info: [
        ["Discipline", "Automotive"],
        ["Role", info("Role")],
        ["Tools", info("Tools Used")],
        ["Status", "Designed concept, not a working model"],
      ],
      video: WALKTHROUGH_VIDEO,
    },

    // --------------------------------------------------------------- 02 BRIEF
    {
      type: "steps",
      id: "brief",
      eyebrow: { n: 2, name: "Brief" },
      title: ["The brief", "in four moves"],
      rows: [
        [
          "title",
          null,
          { tag: "Find", num: "01", text: "A problem **hidden in everyday life**, so routine it is easy to overlook." },
          { tag: "Research", num: "02", text: "Discover it and **understand it through research.**" },
        ],
        [
          null,
          { tag: "Design", num: "03", text: "Work **towards a solution** from what the research shows." },
          { tag: "Deadline", num: "04", text: "The design is **frozen by a fixed deadline:** 13 days." },
          null,
        ],
      ],
    },

    // ------------------------------------------------------------- 03 PROBLEM
    {
      type: "quote",
      id: "problem",
      eyebrow: { n: 3, name: "Problem" },
      quote: ["This is always in my mind: ", "does it really require it?"],
      person: { img: `${PEOPLE}/owner-2.svg`, initials: "O2", name: "Owner 2", meta: "Car + two-wheeler · interview, translated" },
      side: "Vehicle maintenance is mostly reactive. Problems start quietly, owners decide they can wait, and by the time something fails the repair is **urgent and expensive.** With no clear view of what the vehicle needs, owners rely on **guesswork and the mechanic's word.**",
    },

    // ------------------------------------------------------------ 04 RESEARCH
    {
      type: "headline",
      id: "research",
      eyebrow: { n: 4, name: "Research", tag: "Survey, n = 72" },
      head: ["", "72% delayed a service,", " unsure it was needed."],
      side: "**4 interviews** and a **survey of 72 owners**, then 4 data sources, 5 studies and 6 tools compared.",
      stats: [
        { tag: "Primary", n: "4", text: "**Interviews** with vehicle owners" },
        { tag: "Primary", n: "72", text: "**Survey answers**, 15 questions" },
        { tag: "Secondary", dark: true, n: "4", text: "**Data sources**, from OBD-II to the maker's schedule" },
        { tag: "Secondary", dark: true, n: "6", text: "**Tools compared**, plus 5 published studies" },
      ],
    },
    {
      type: "dataPair",
      title: ["Feel overcharged", "89%"],
      cap: "Owners who feel overcharged for a service, **at least sometimes.**",
      bars: [
        { label: "Sometimes", value: "44 · 61.1%", pct: 61.1, accent: true },
        { label: "Yes, frequently", value: "20 · 27.8%", pct: 27.8, accent: true },
        { label: "Rarely or never", value: "8 · 11.1%", pct: 11.1 },
      ],
      note: "n = 72. Sometimes + frequently = 89%.",
      panel: {
        tag: "Confidence",
        title: "Explaining a repair",
        text: "\"How confident are you explaining why a part needs replacing?\" (1 to 5)",
        num: "2.7",
        small: " / 5",
        dist: [17, 13, 24, 10, 8],
        distHigh: 2,
        foot: "Only 18 of 72 rate themselves 4 or 5.",
      },
    },
    {
      type: "quote",
      quote: ["The whole vehicle goes in for a service; ", "even parts that are fine get checked."],
      small: true,
      person: { img: `${PEOPLE}/owner-1.svg`, initials: "O1", name: "Owner 1", meta: "Two-wheeler + car · interview, translated" },
      // Of the 4 interviewed owners
      counts: [
        { n: "3", of: "of 4", text: "**decide on a signal** they can't read" },
        { n: "3", of: "of 4", text: "**doubt the work** was needed" },
        { n: "3", of: "of 4", text: "**would use** a condition tracker" },
      ],
      foot: "Counterpoint: Owner 4 trusts one mechanic he knows. \"If I can basically remember it, then I don't think I need another reminder.\"",
    },
    {
      type: "dotMatrix",
      title: ["Each tool covers a part.", "None covers the everyday owner."],
      tag: "Gap analysis",
      side: "Checked against each tool's own listing; **\"not stated\"** means the listing does not claim it.",
      columns: ["Two-wheelers and cars", "Any brand", "No extra hardware", "Condition view", "What's due", "Service record"],
      rows: [
        ["GoMechanic", "nyynn-"],
        ["Suzuki Connect", "nnnh--"],
        ["TVS Connect", "nnnh-y"],
        ["Car Scanner ELM OBD2", "nynyn-"],
        ["Drivvo", "yyynhy"],
        ["mParivahan", "yyynnh"],
        ["Drive Wise (target)", "yyyyyy", true],
      ],
    },
    {
      type: "steps",
      title: ["The vehicle already knows.", "The owner doesn't."],
      rows: [
        [
          { tag: "OBD-II", ghost: "//01", text: "**Records:** standard fault codes and live engine data. Cars since 2013, two-wheelers since 2023.", text2: "**Reaches the owner:** one \"check engine\" light." },
          { tag: "Registration", dark: true, ghost: "//02", text: "**Records:** make, model, fuel, age, insurance and fitness validity (VAHAN, mParivahan).", text2: "**Reaches the owner:** only if the owner looks it up." },
          { tag: "Pollution check", dark: true, ghost: "//03", text: "**Records:** emissions test, 1 year after registration, then every 6 months.", text2: "**Reaches the owner:** a certificate with an expiry date." },
          { tag: "Maker's schedule", dark: true, ghost: "//04", text: "**Records:** fixed km or months, \"whichever is earlier\".", text2: "**Reaches the owner:** one reminder, the same for every owner." },
        ],
      ],
      foot: "Standards reviewed: ISO 15008 (display legibility, used as a reference) and ISO 26262 (functional safety; Drive Wise gives advice, never a certified diagnosis).",
    },
    {
      type: "findings",
      title: ["Five studies,", "three findings"],
      side: "Peer-reviewed sources, read at abstract level. The right column is the **design implication**, not the authors' claim.",
      rows: [
        { finding: "Repairs are a **credence good**: the customer cannot judge what was needed, even afterwards. Customers who know the going price are quoted differently.", sources: "Dulleck & Kerschbamer 2006; Busse et al. 2017", implication: "Owners walk into the workshop with a record of what is due and why." },
        { finding: "Machine-learning wear prediction needs **large labelled datasets** that are rarely public, and still lacks explainable methods.", sources: "Theissler et al. 2021", implication: "The model stays conceptual; machine learning moves to Future Scope." },
        { finding: "People rely on automation through **trust that matches what it can do**; even useful notifications interrupt.", sources: "Lee & See 2004; Mehrotra et al. 2016", implication: "Every prediction shows why and how sure it is; alerts are few and well timed." },
      ],
    },

    // ------------------------------------------------------------ 05 INSIGHTS
    {
      type: "headline",
      id: "insights",
      eyebrow: { n: 5, name: "Insights", tag: "Exploratory, n = 72" },
      head: ["Demand goes with ", "distrust, not inconvenience."],
      side: "50% are frustrated by waiting and 50% doubt the parts. Only **feeling overcharged** goes with wanting to pay for a check (β +0.94). **An association, not a cause.**",
    },
    {
      type: "quad",
      title: ["Empathy map", "one owner, four views"],
      side: "A composite of the 4 interviews and the survey. **In blue: the tension.** Owners accept the mechanic's word, yet are not sure the parts were needed.",
      quads: [
        { name: "Says", lines: [["I own a two-wheeler and a four-wheeler."], ["I observe for a few days, then go to the mechanic."]] },
        { name: "Thinks", lines: [["Whatever reason the mechanic gives to replace a part is justified.", true], ["What if the vehicle breaks down mid-trip?"]] },
        { name: "Does", lines: [["I keep the bills and receipts from the service centre."], ["I go to the mechanic if an unfamiliar warning appears."]] },
        { name: "Feels", lines: [["I don't feel sure the parts changed were actually required.", true], ["I am being overcharged for the service."]] },
      ],
    },
    {
      type: "dataPair",
      title: ["Owner types", "3 clusters"],
      cap: "72 answers clustered by pattern. They differ most in **whom they trust** and **whether they would pay.**",
      wideLabels: true,
      bars: [
        { label: "**34** of 72 · Local-Mechanic Loyalists", value: "38% pay", pct: 38 },
        { label: "**23** of 72 · Self-Directed Researchers", value: "83% pay", pct: 83 },
        { label: "**15** of 72 · Overcharged Pragmatists", value: "100% pay", pct: 100, accent: true },
      ],
      note: "Bars: the share of each type that would pay a small fee.",
      panel: {
        tag: "Overcharged Pragmatists",
        title: "The type that acts fastest",
        text: "Feel overcharged most often; 67% did not delay a service.",
        num: "100%",
        after: "would pay a small fee",
        foot: "15 of 72 owners.",
      },
    },
    {
      type: "steps",
      title: ["Key insights", "each from two or more sources"],
      rows: [
        [
          { tag: "Insight 01", dark: true, num: "72%", numSize: "m", text: "**Maintenance follows generic signals.** Delayed a service, unsure it was needed." },
          { tag: "Insight 02", num: "89%", numSize: "m", accent: true, text: "**Demand goes with distrust.** Feel overcharged, at least sometimes." },
          { tag: "Insight 03", dark: true, num: "40%", numSize: "m", text: "**A trusted mechanic replaces information.** Trust a local mechanic most." },
          { tag: "Insight 04", dark: true, num: "22%", numSize: "m", text: "**Every extra step costs attention.** Keep no maintenance records." },
        ],
      ],
    },

    // -------------------------------------------------------------- 06 DEFINE
    {
      type: "personas",
      id: "define",
      eyebrow: { n: 6, name: "Define", tag: "Composite personas" },
      title: ["Two kinds of trust,", "one design"],
      side: "Built from the two largest owner types, the interviews and the empathy map. **Every design decision has to work for both.** Neither is a real person.",
      people: [
        { name: "Meera, 34", meta: "Marketing manager · Pune · 23 of 72 are like her", type: "Self-Directed Researcher", quote: "This is always in my mind: does it really require it?", source: "Quote from Owner 2" },
        { name: "Suresh, 58", meta: "Runs a hardware shop · Ahmedabad · 34 of 72 are like him", type: "Local-Mechanic Loyalist", quote: "I am very assured because I am known to that guy.", source: "Quote from Owner 4", dark: true },
      ],
    },
    {
      type: "voa",
      title: ["Value opportunities", "today vs Drive Wise"],
      side: "Seven classes (Cagan & Vogel). Each \"today\" rating is tied to research evidence; the Drive Wise ratings are **targets**, judged by the designer.",
      // 1 = low, 2 = medium, 3 = high
      rows: [
        ["Emotion", 1, 3],
        ["Ergonomics", 2, 3],
        ["Core technology", 1, 2],
        ["Quality", 2, 2],
        ["Impact", 1, 2],
        ["Identity", 1, 2],
        ["Aesthetics", 1, 3],
      ],
    },
    {
      type: "headline",
      eyebrow: { n: 6, name: "Define", tag: "Problem statement" },
      small: true,
      tight: true,
      head: ["Everyday owners decide when to service, and whether a repair is needed, from ", "signals they cannot read."],
      side: "They need a clear, personal view of **what their vehicle needs and why**, before they reach the workshop.",
    },

    // ------------------------------------------------------------ 07 IDEATION
    {
      type: "headline",
      id: "ideation",
      eyebrow: { n: 7, name: "Ideation", tag: "6 → 21 → 12 → 9" },
      head: ["Six questions, ", "nine features designed."],
      side: "6 How-might-we questions, **21 opportunities**, 12 features; **9 designed** in this project, 3 left for later.",
    },
    {
      type: "steps",
      title: ["How might we", "six questions"],
      hmw: true,
      rows: [
        [
          "title",
          null,
          { tag: "For Meera", ghost: "//01", text: "**How might we** turn a single dashboard light into an **explanation an owner can act on?**" },
          { tag: "Timing", dark: true, ghost: "//02", text: "**How might we** time a service by **how each vehicle is used**, not one interval for everyone?" },
        ],
        [
          { tag: "Price", dark: true, ghost: "//03", text: "**How might we** help owners walk into the workshop knowing **what is needed and what it should cost?**" },
          { tag: "For Meera", ghost: "//04", text: "**How might we** let owners **follow the work** without being there?" },
          null,
          null,
        ],
        [
          null,
          null,
          { tag: "For Suresh", ghost: "//05", text: "**How might we** work **with an owner's trusted mechanic** rather than replace him?" },
          { tag: "For Suresh", ghost: "//06", text: "**How might we** keep inputs and alerts **few, and every one worth it?**" },
        ],
      ],
    },
    {
      type: "map",
      title: ["Importance vs difficulty", "what is designed now"],
      side: "**Filled:** designed (9). **Hollow:** not designed yet (3). Difficulty is the designer's estimate.",
      // x = difficulty (0 easy, 100 hard), y = importance (0 high, 100 low).
      // The points are drawn in four compartments split at x 60 and y 44
      // (the old pale-blue area was the top-left one, left unlabelled).
      split: { x: 60, y: 44 },
      compartments: ["More important, easier", "More important, harder", "Less important, easier", "Less important, harder"],
      points: [
        ["Decode warnings", 10, 20, true],
        ["Health score", 40, 14, true],
        ["Short questionnaire", 46, 24, true],
        ["Priced booking", 36, 31, true],
        ["Selective reminders", 52, 37, true],
        ["Likely cause", 76, 18, true],
        ["Digital records", 12, 50, false],
        ["Pick-up and payment", 40, 50, true],
        ["Live tracking", 48, 58, true],
        ["Registration lookup", 74, 54, true],
        ["Manual and DIY help", 10, 82, false],
        ["More vehicles, sensors", 72, 84, false],
      ],
    },
    {
      type: "logic",
      title: ["Predictive logic model", "one system"],
      tag: "Concept, not built",
      columns: [
        { tag: "1 · Information", title: "What goes in", items: ["Registration record", "Owner's answers: usage, roads, parking, last service", "The maker's schedule as the baseline"] },
        { tag: "2 · Intelligence", title: "Six scores", items: ["Wear · Environmental stress", "Maintenance discipline", "Failure probability", "Cost inefficiency · Useful life"] },
        { tag: "3 · Communication", title: "What the owner is told", items: ["Health score", "What is due, and when", "Likely cause of a warning", "Every answer with its reason and confidence"], accent: true },
      ],
      strip: [
        ["Metaphor", "A health check-up"],
        ["Vital signs → Symptoms", "Health score → Dashboard signs"],
        ["Diagnosis → Treatment", "Likely cause → Priced service"],
        ["Follow-up", "Tracking, feedback"],
      ],
    },

    // -------------------------------------------------------------- 08 DESIGN
    {
      type: "headline",
      id: "design",
      eyebrow: { n: 8, name: "Design", tag: "17 screen types" },
      head: ["Six technical scores become ", "plain words."],
      side: "A phone app in the language of a **health check-up**: scores in plain words, a warning with its **likely cause and how sure the app is**, a service booked against a priced list of jobs.",
    },
    {
      type: "feature",
      title: ["Onboarding", "that learns the vehicle"],
      screen: { src: `${SCREENS}/screen-onboarding.png`, alt: "Onboarding questionnaire with the usage score." },
      captions: [["Registration lookup", "The vehicle is found from its number."], ["Six questions", "How it is used, where, and how often."], ["Usage score", "Updates as each answer is given."]],
    },
    {
      type: "feature",
      flip: true,
      title: ["Vehicle health", "at a glance"],
      screen: { src: `${SCREENS}/screen-health.png`, alt: "Vehicle status screen with six scores." },
      captions: [["Six scores", "Usage Wear, Road Impact, Breakdown Risk and more."], ["Plain words", "What matters before what is technical."], ["One number + a reason", "No gauges, no technical units."]],
    },
    {
      type: "feature",
      title: ["Decoding", "a warning"],
      screen: { src: `${SCREENS}/screen-warning.png`, alt: "Likely cause of the warning signs, with severity." },
      captions: [["Pick the signs", "Icons, not typing: recognition over recall."], ["Likely cause", "Ranked, with severity."], ["What to do next", "Straight into a priced service."]],
    },
    {
      type: "tiles",
      title: ["Book a service", "every job, priced first"],
      side: "The breakdown adds up and matches the payment: **₹400 + 600 + 700 + 500 + 800 = ₹3,000.**",
      tiles: [
        { tag: "Service detail", src: `${SCREENS}/screen-service-detail.png`, alt: "Service detail with the price of every job." },
        { tag: "Pick-up time", src: `${SCREENS}/screen-pickup-time.png`, alt: "Choosing a pick-up time." },
        { tag: "Track servicing", src: `${SCREENS}/screen-tracking.png`, alt: "Tracking each step of the service with a time." },
      ],
    },
    {
      type: "walkthrough",
      title: ["Walkthrough", "home to tracking"],
      video: WALKTHROUGH_VIDEO,
      prototype: PROTOTYPE,
      screens: [
        ["Home", "\"Your vehicle needs attention\""],
        ["Status", "Six scores in plain words"],
        ["Breakdown Risk", "Likely cause and what to do"],
        ["Service Detail", "Every job and its price"],
        ["Track Servicing", "Each step with a time"],
      ],
    },
    {
      type: "system",
      title: ["Design system", "small on purpose"],
      side: "Four colours, one typeface in two weights, **white cards on a light grey ground** (#F6F6F6), and 24 line icons drawn for vehicle parts.",
      type1: ["SF Pro Display", "Regular and Medium"],
      type2: ["Scale", "14 px captions · 16 px buttons · 24 px numbers and titles"],
      swatches: [
        ["#0A56C3", "Blue", "Action, focus", "#fff"],
        ["#0D0D0D", "Near-black", "Text, buttons", "#fff"],
        ["#CDCDCD", "Grey", "Captions, lines", "#0D0D0D"],
        ["#FFFFFF", "White", "Cards", "#0D0D0D"],
      ],
      foot: "Caption grey #CDCDCD on white is about 1.6 : 1 contrast, below WCAG's 4.5 : 1. Found in Testing, fix planned.",
    },

    // ------------------------------------------------------------- 09 TESTING
    {
      type: "fixes",
      id: "testing",
      eyebrow: { n: 9, name: "Testing", tag: "Heuristic review" },
      from: "8",
      to: "8",
      cap: "The **20-screen core flow** against Nielsen's ten heuristics and basic accessibility checks: **8 issues found, 8 fixes planned.** One evaluator; severity kept off the page.",
      items: [
        ["Scores point in different directions", "Every score reads \"higher = better\", with a status word"],
        ["Captions are light grey, hard to read", "Darken to at least 4.5 : 1 contrast"],
        ["Likely-cause numbers are unlabelled", "Label each, with a confidence level"],
        ["Severity dots rely on colour alone", "A word beside each dot"],
        ["A pick-up can't be cancelled or moved", "Reschedule and cancel in tracking"],
        ["Placeholder text on three screens", "Final copy"],
        ["\"Failure Probablity Index\": a typo, a technical title", "Retitle it \"Breakdown Risk\""],
        ["Content scrolls under the tab bar", "Padding below the last card"],
      ],
    },
    {
      type: "scenario",
      title: ["Scenario test", "one scooter, three riders"],
      side: "Three **synthetic** owners run through the service-timing logic. The harsh-use adjustment is an assumption.",
      max: 90,
      riders: [
        ["A · City commuter", "50 km a week", 90, "same day as the reminder"],
        ["B · Long-distance", "1,000 km a week", 21, "69 days earlier"],
        ["C · Dusty, rough roads", "300 km a week", 56, "34 days earlier"],
      ],
    },
    {
      type: "quote",
      quote: ["If it would appear as a widget on my home screen, ", "it'd be useful."],
      small: true,
      person: { img: `${PEOPLE}/prototype-feedback.svg`, initials: "P", name: "Prototype feedback", meta: "1 of 4 people, informal" },
      side: "Four people tried the Figma prototype and shared open feedback: they found it useful and liked the look. **Not a structured usability test**: no tasks, timings or success rates were recorded.",
    },

    // ------------------------------------------------------------- 10 OUTCOME
    {
      type: "outcome",
      id: "outcome",
      eyebrow: { n: 10, name: "Outcome", tag: "Before the design" },
      head: ["Owners want it. ", "The design still needs real testing."],
      kpiLabel: "Target KPIs · targets, not results",
      kpis: [
        ["Delay a service, unsure", "72%", "under 40%"],
        ["Confidence explaining a repair", "2.7 / 5", "4 / 5"],
        ["Feel overcharged", "89%", "under 50%"],
        ["Heavy-use services on time", "34 to 69 days late", "80% on time"],
        ["Onboarding completed", "new", "70%"],
      ],
      grey: { tag: "Usability", num: "8 → 8", text: "issues found, fixes planned" },
      blue: { tag: "Concept validation", num: "65%", text: "would pay a small fee for real-time condition updates and only necessary repairs (n = 72)" },
    },

    // -------------------------------------------------------- 11 FUTURE SCOPE
    {
      type: "arcs",
      id: "future-scope",
      eyebrow: { n: 11, name: "Future scope", tag: "Concept, not designed" },
      head: ["The vehicle already knows. ", "Next, Drive Wise listens."],
      side: "Six next steps, from **reading the vehicle's own data** to a fleet version and a business model with safeguards.",
      steps: [
        ["01", "Vehicle data", "Read OBD-II and registration data directly, with the owner's permission.", 12],
        ["02", "A model that learns", "Train on real service records; every prediction keeps its reason.", 27],
        ["03", "Next iteration", "The 8 fixes first, then a \"share with my mechanic\" report.", 42],
        ["04", "More than one vehicle", "48.6% own both a two-wheeler and a car: one account for every vehicle.", 57],
        ["05", "Fleet", "The Account Type screen already separates fleets: every vehicle, driver and plan in one view.", 72],
        ["06", "Business model", "Free for owners, commission per booking; providers never ordered by commission.", 87],
      ],
    },

    // --------------------------------------------------------- 12 LIMITATIONS
    {
      type: "steps",
      id: "limitations",
      eyebrow: { n: 12, name: "Limitations" },
      title: ["What this", "does not show"],
      titleCap: "Stated plainly, so the evidence is read **at its real strength.**",
      rows: [
        [
          "title",
          { tag: "Research", dark: true, list: ["A modest convenience sample of 72, spread not checked", "What people say, not what they do", "Four interviews, some after a described scenario", "No field observation at a workshop", "Sources read at abstract level"], numbered: true },
          { tag: "Analysis", dark: true, list: ["Exploratory, not pre-registered; most results don't survive correction", "Associations, not causes", "Owner types are a grouping, not a typology", "Empathy map and personas are composites", "Some ratings are the designer's judgement"], numbered: true },
          { tag: "Design", dark: true, list: ["The prediction logic is conceptual; scores are illustrative", "Access to registration data is assumed", "Prices, vehicles and workshops are examples", "Standards were applied after the fact", "Designed in 13 days"], numbered: true },
        ],
      ],
    },

    // ----------------------------------------------------------- 13 LEARNINGS
    {
      type: "learnings",
      id: "learnings",
      eyebrow: { n: 13, name: "Learnings" },
      head: ["Trust needs reasons, ", "not just answers."],
      side: "A prediction is only as useful as the explanation and the confidence that come with it.",
      groups: [
        { tag: "On research", items: ["Numbers and conversations explain each other.", "Trust and doubt live together.", "How I ask shapes the answer.", "Outside research can reframe a problem."] },
        { tag: "On design", accent: true, items: ["Technical data needs plain words.", "Trust needs reasons, not just answers.", "Test earlier."] },
        { tag: "Next time", items: ["Observe a real service visit first.", "Run a structured usability test.", "Speak to mechanics as well as owners."] },
        { tag: "From architecture", items: ["Systems thinking: inputs, logic, outputs.", "Layered information, like drawings at scales.", "See → Observe → Analyse → Implement."] },
      ],
    },
  ],
};
