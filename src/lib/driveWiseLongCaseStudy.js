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
    // Restored and merged 2026-10-07 (Sukhman: "make the signal - need -
    // opportunity - feature into one table ... make it scroll horizontally").
    // All 21 rows of the sheet "Vehicle Maintenance Medium- Empathy Mapping",
    // tab "Features Listing (22.04.2026)", wording condensed; statements as in
    // the empathy-map tab (21.04.2026), so Thinks 01 reads 10,000 km (decision
    // 05-insights.md). Drive Wise features follow 07-ideation.md 2.2; the
    // true/false is "designed", matching the importance map below.
    {
      type: "trace",
      title: ["From signal to feature", "21 statements, 12 features"],
      side: "Every empathy-map statement was traced in four steps: the **signal** it shows, the **need** behind it, the **opportunity** it opens and the **feature** that answers it. The ideas were then merged into **12 Drive Wise features**.",
      rows: [
        { pos: "Says 01", statement: "I own a two-wheeler and a four-wheeler.", signal: "Owns a vehicle", need: "To register the vehicle", opportunity: "List the vehicle's details", idea: "Company, model, purchase year", features: [["Registration lookup", true]] },
        { pos: "Says 03", statement: "On average I drive 70 km a week.", signal: "Drives in the city, neither short nor long distances", need: "Knowing every ride will be comfortable and safe", opportunity: "A heads-up to the owner", idea: "Selective notifications on certain triggers", features: [["Selective reminders", true]] },
        { pos: "Says 04", statement: "I observe for a few days and then go to the mechanic, if something feels wrong.", signal: "Observes for days, then goes to the mechanic", need: "Not having to carry the vehicle in mind", opportunity: "Updates on what matters, at regular intervals", idea: "Notify when something can go wrong, and when all is well", features: [["Selective reminders", true]] },
        { pos: "Says 05", statement: "I'd be willing to get a service, at nominal pay, which keeps me updated on my vehicle's condition.", signal: "Willing to pay for a service", need: "Updates on the vehicle's condition; no unnoticed problems", opportunity: "There is time in the day for maintenance", idea: "Carefully planned notifications", features: [["Selective reminders", true]] },
        { pos: "Says 06", statement: "I call the service centre and get my vehicle picked up from my place.", signal: "Calls for pick-up and scheduling", need: "Someone to pick up the vehicle, saving effort and time", opportunity: "Services through tie-ups; one ecosystem", idea: "Contact with service centres and mechanics; one platform from start to end", features: [["Pick-up and payment", true]] },
        { pos: "Thinks 01", statement: "Servicing should be done at 10,000 km, 6 months or at a time of excessive noise, whichever happens first.", signal: "Follows a milestone set for every vehicle, not this one", need: "Personal milestones", opportunity: "Personalised parameters", idea: "Individual data input, a personalised outcome for each vehicle", features: [["Short questionnaire", true]] },
        { pos: "Thinks 02", statement: "Whatever reason the mechanic is giving to replace the part is justified.", signal: "The mechanic holds the owner's decision", need: "An independent, trusted guide", opportunity: "Detailed, specific information backed with sources", idea: "Maintenance factors and current condition, with sources", features: [["Priced booking", true]] },
        { pos: "Thinks 03", statement: "I'll get the best personalised service from a local mechanic or brand service centre.", signal: "Blind trust in mechanics and service centres", need: "Awareness with trust", opportunity: "Transparency", idea: "The vehicle's real situation; direction to service centres, mechanics or DIY", features: [["Priced booking", true]] },
        { pos: "Thinks 04", statement: "What if the vehicle breaks down in the middle of a trip?", signal: "Unpredictable situations", need: "Awareness of the vehicle's condition", opportunity: "Nudge the owner's behaviour", idea: "Real-time statistics of the vehicle", features: [["Health score", true]] },
        { pos: "Thinks 05", statement: "I should be able to easily access the user manual and guide.", signal: "Wants to know the vehicle's features when something unknown happens", need: "Easy access to the manual and guide", opportunity: "Flexible information", idea: "The user manual and guide; blogs for basic knowledge", features: [["Manual and DIY help", false]] },
        { pos: "Thinks 06", statement: "It'd be helpful if I can check up on multiple vehicles at the same time.", signal: "Operates several vehicles", need: "Every vehicle's condition in one place", opportunity: "Less repetitive work and time", idea: "A section for owners of several vehicles, like businesses and agencies", features: [["More vehicles, sensors", false]] },
        { pos: "Does 01", statement: "I check the tyre pressure daily.", signal: "Easy, crucial checks are done daily", need: "Knowing the owner's own checks suit the vehicle", opportunity: "Reassurance; honest facts that build trust", idea: "A quick glance at the stats before a trip", features: [["Health score", true]] },
        { pos: "Does 02", statement: "I check the brake oil only when I go for servicing.", signal: "Important factors are neglected", need: "Not missing what matters for the vehicle", opportunity: "Take care of neglected factors", idea: "Highlight the parameters the owner tends to neglect", features: [["Selective reminders", true]] },
        { pos: "Does 03", statement: "I keep a record of bills and receipts from the service centre.", signal: "Effort and memory to keep records", need: "Automated, digital records", opportunity: "Automation and digitisation", idea: "Records entered with less effort; future scheduling", features: [["Digital records", false]] },
        { pos: "Does 04", statement: "I take my vehicle to the mechanic if any unfamiliar warning appears.", signal: "Unfamiliar situations cost time and a trip to the mechanic", need: "Handling unfamiliar situations without physical or mental strain", opportunity: "Predict unfamiliar conditions, and solve them", idea: "Data entry at regular intervals; solutions for problems of every scale", features: [["Short questionnaire", true], ["Decode warnings", true], ["Likely cause", true]] },
        { pos: "Feels 01", statement: "The vehicle is moving roughly.", signal: "Rough, subjective ways to describe the condition", need: "Objective stats about the vehicle", opportunity: "Photos and sound of the vehicle for more personal results", idea: "AI integration", features: [["Decode warnings", true], ["Likely cause", true], ["More vehicles, sensors", false]] },
        { pos: "Feels 02", statement: "It's not that serious; my vehicle is going to work fine without getting checked.", signal: "Unaware of what happens when the vehicle is not at its best", need: "Awareness of the consequences", opportunity: "Create awareness", idea: "Information in light, short pieces", features: [["Decode warnings", true]] },
        { pos: "Feels 03", statement: "I feel frustrated when it takes time at the service centre.", signal: "Time at the service centre is wasted", need: "Productive use of time", opportunity: "Guide the owner through the servicing", idea: "Live status of the servicing; a post-service check-up", features: [["Live tracking", true]] },
        { pos: "Feels 04", statement: "I don't feel sure if the parts changed were actually required or not.", signal: "Unsure of the service", need: "Reliable information and feedback", opportunity: "Detailed, specific information backed with sources", idea: "Step-by-step service and parts breakdown, estimated price, quality assurance", features: [["Priced booking", true]] },
        { pos: "Feels 05", statement: "The final cost is more than the initial estimate.", signal: "Unpredictable extra spending", need: "A close estimate of the cost", opportunity: "Assure the owner of the cost", idea: "Pricing from market analysis, cross-checked with local and online data", features: [["Priced booking", true]] },
        { pos: "Feels 06", statement: "I am being overcharged for the service.", signal: "Lack of trust in the service provider", need: "Trust built on facts and sources", opportunity: "Transparency", idea: "Step-by-step service breakdown with market sources", features: [["Priced booking", true]] },
      ],
      foot: "From the sheet \"Vehicle Maintenance Medium- Empathy Mapping\": statements from the empathy map (21.04.2026), steps from the Features Listing (22.04.2026), wording condensed. Five more ideas in the sheet (progressive questionnaire, live-updating health score, servicing feedback, remove a listed vehicle, emergency assistance) joined the same 12 features. Filled dot: designed (9). Hollow: not designed yet (3).",
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

    // Restored 2026-10-07 (approved in 07-ideation.md 2.6).
    {
      type: "sitemap",
      title: ["Information architecture", "every screen, every step"],
      side: "A sitemap of all the designed screens, in the order the owner meets them. Numbers are the screen numbers in the Figma file (00 to 17); the order follows the logic model above: **information, intelligence, communication.**",
      root: "Drive Wise",
      // Read from the Figma page "Drive Wise" (file XnFEDRfYZhONOXCfCEvygR),
      // frame names and on-screen text, 2026-10-07. Detail lines use the
      // screens' own wording where it exists.
      sections: [
        {
          name: "Onboarding",
          screens: [
            { code: "00", name: "Phone home screen", detail: "The Drive Wise app icon" },
            { code: "01", name: "Splash screen", detail: "Animated logo" },
            { code: "02", name: "Walkthrough", steps: ["Unseen problems", "Unnecessary spending", "Know better", "Drive Wise: Get started"] },
            { code: "03", name: "Welcome", detail: "Sign in or Create account" },
            { code: "03", name: "Sign in", detail: "Phone number, password" },
            { code: "03", name: "Account type", detail: "Individual or Fleet" },
            { code: "03", name: "Create account", steps: ["Name, phone number, password", "Vehicle registration number"] },
            { code: "03", name: "Fetching your details" },
            { code: "04", name: "Confirmation", detail: "\"Yes, this is my vehicle\" or \"Not your vehicle?\"" },
          ],
        },
        {
          name: "Vehicle profile",
          screens: [
            { code: "05", name: "Questionnaire, 6 steps", detail: "A live score after every answer; Custom input or Track activity", steps: ["Usage behaviour: how often, how far, driving style", "Environment: where, and the roads", "Parking", "Maintenance", "Key components", "Risk indicator: accidents, water exposure"] },
            { code: "05", name: "View status", detail: "Leads to Status" },
          ],
        },
        {
          name: "Home",
          screens: [
            { code: "13", name: "Notification permission", detail: "Allow notifications" },
            { code: "15", name: "Location permission", detail: "Find services near you" },
            { code: "16", name: "Daily status", detail: "\"Your vehicle needs attention\", score cards" },
            { code: "16", name: "Servicing status", detail: "\"Your vehicle is undergoing servicing\", Track service progress" },
            { code: "14", name: "Notifications" },
          ],
        },
        {
          name: "Status",
          screens: [
            { code: "06", name: "Top issue", detail: "Breakdown Risk, Take action" },
            { code: "06", name: "Six scores", steps: ["Usage wear", "Road impact", "Service care", "Breakdown risk", "Extra spend", "Vehicle life"] },
            { code: "06", name: "Helpful resources", steps: ["User manual guide", "General guide", "Explore guide"] },
          ],
        },
        {
          name: "Breakdown Risk",
          accent: true,
          screens: [
            { code: "17", name: "Decode dashboard warnings", steps: ["Select warning icons", "System analyses the combination", "Get clear solutions"] },
            { code: "17", name: "Select warning icons", detail: "Icon grid" },
            { code: "17", name: "Choose the likely issue", detail: "e.g. fuel gauge blockage, air filter replacement" },
            { code: "07", name: "Breakdown risk report", steps: ["Active symptoms", "Sensor-based anomalies", "Historical risk factors", "Dashboard warning signal"] },
            { code: "07", name: "Likely cause detected", detail: "Four readings with a percentage each" },
            { code: "07", name: "Get service", detail: "Leads to Service; or See report, Helpful guidance" },
          ],
        },
        {
          name: "Service",
          screens: [
            { code: "08", name: "Service providers", detail: "Categories; nearby providers with rating, distance, hours" },
            { code: "08", name: "Service detail", detail: "Every job and its price, contact, location; Book now" },
            { code: "09", name: "Choose a time", steps: ["Pick-up date", "Pick-up time", "Drop-off estimate"] },
            { code: "09", name: "Checkout", detail: "Pick-up and drop-off address, price break-up; Confirm pick-up" },
            { code: "10", name: "Payment" },
            { code: "11", name: "Booked successfully", detail: "Booking details, Back to home" },
            { code: "12", name: "Track servicing", steps: ["Driver assigned", "Arrival at pick-up", "Reached service centre", "Service start, each job ticked", "Left for drop-off", "Drop-off completed"] },
          ],
        },
      ],
      foot: "Breakdown Risk screens are titled \"Failure Probablity Index\" in the current design; Testing renames them. Questionnaire steps 3 to 5 are designed as tabs; steps 1, 2 and 6 in full. The full three-layer IA with every data field is Behance frame 5.1.",
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
    // User flow + walkthrough, one module (Sukhman, 2026-10-07: "represent
    // it like a flow chart ... place and direct both these sections like
    // User Flow and Prototype video together"). The flow chart follows the
    // designed screens and the Figma user flow (Behance frame 6.2); every
    // branch is a real choice on a screen. Rows run top to bottom; columns:
    // l = left branch, c = main path, r = right branch.
    {
      type: "userFlow",
      title: ["User flow", "first launch to drop-off"],
      side: "One owner, from opening the app to the vehicle coming back. The flow chart shows every decision; the video plays the same journey on the designed screens.",
      video: WALKTHROUGH_VIDEO,
      prototype: PROTOTYPE,
      nodes: [
        { id: "start", row: 0, col: "c", kind: "start", text: "Open Drive Wise" },
        { id: "intro", row: 1, col: "c", text: "Splash, walkthrough (4 slides)" },
        { id: "acct", row: 2, col: "c", kind: "decision", text: "Have an account?" },
        { id: "signin", row: 2, col: "r", text: "Sign in" },
        { id: "type", row: 3, col: "c", kind: "decision", text: "Individual or fleet?" },
        { id: "fleet", row: 3, col: "l", kind: "off", text: "Fleet set-up\n(not designed)" },
        { id: "create", row: 4, col: "c", text: "Name, phone, password" },
        { id: "reg", row: 5, col: "c", text: "Registration number" },
        { id: "fetch", row: 6, col: "c", text: "Fetching your details" },
        { id: "mine", row: 7, col: "c", kind: "decision", text: "Is this your vehicle?" },
        { id: "quiz", row: 8, col: "c", text: "Questionnaire, 6 steps" },
        { id: "status", row: 9, col: "c", text: "Status: six scores, top issue" },
        { id: "act", row: 10, col: "c", kind: "decision", text: "Take action?" },
        { id: "home", row: 10, col: "r", text: "Home: daily status" },
        { id: "decode", row: 11, col: "r", text: "Decode warnings:\nselect icons" },
        { id: "cause", row: 11, col: "c", accent: true, text: "Likely cause detected" },
        { id: "get", row: 12, col: "c", text: "Get service" },
        { id: "prov", row: 13, col: "c", text: "Providers, service detail" },
        { id: "pay", row: 14, col: "c", text: "Pick-up time, checkout, payment" },
        { id: "booked", row: 15, col: "c", text: "Booked successfully" },
        { id: "track", row: 16, col: "c", text: "Track servicing, step by step" },
        { id: "end", row: 17, col: "c", kind: "end", text: "Drop-off completed" },
      ],
      edges: [
        ["start", "intro"], ["intro", "acct"],
        ["acct", "type", "No"], ["acct", "signin", "Yes"], ["signin", "home"],
        ["type", "create", "Individual"], ["type", "fleet", "Fleet"],
        ["create", "reg"], ["reg", "fetch"], ["fetch", "mine"],
        ["mine", "quiz", "Yes"], ["mine", "reg", "No", "loopLeft"],
        ["quiz", "status"], ["status", "act"],
        ["act", "cause", "Yes"], ["act", "home", "Not now"],
        ["home", "decode"], ["decode", "cause"],
        ["cause", "get"], ["get", "prov"], ["prov", "pay"], ["pay", "booked"], ["booked", "track"], ["track", "end"],
      ],
      foot: "Drawn from the designed screens and the Figma user flow (Behance frame 6.2). Fleet is offered on the Account type screen but its set-up was not designed.",
    },
    // Restored 2026-10-07 (approved in 08-design.md 2.6; sources in 04-research.md).
    {
      type: "standards",
      title: ["Standards check", "applied after, not before"],
      side: "Both standards were reviewed in Research. They **did not shape the screens**; the finished screens were checked against them afterwards, and the findings sit in Testing.",
      items: [
        { name: "ISO 15008", scope: "In-vehicle visual displays: legibility of text and symbols shown to the driver.", use: "A phone app is outside its scope; used as a reference for glanceable readings." },
        { name: "ISO 26262", scope: "Road vehicles: functional safety of electrical and electronic systems.", use: "Drive Wise is not a safety system, so its predictions are presented as advice, never as a certified diagnosis." },
      ],
      foot: "Neither standard covers a phone app directly.",
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
