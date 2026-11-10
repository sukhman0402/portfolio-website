// SWIGGY AGENT DESK HIGHLIGHTS (5 steps): the sections on
// /projects/swiggy-agent-desk (what "View Project" opens).
//
// FORMAT: the Highlights frame of every project (ShortStep.js: lines,
// headings, statements, 50px text to visual). The visuals are Swiggy's own
// (kinds starting with "sw"), drawn by src > components > SwiggyVisuals.js
// to the design approved in PNG review rounds (claude/swiggy/
// highlights-design-decisions.md, 2026-11-10).
//
// Copy from claude/swiggy/highlights-draft.md, approved 2026-11-10.
// Rules: no em dashes, no colons in copy (times keep the prototype's 24-hour
// form, e.g. 19:42). Text inside [[double brackets]] gets the orange
// underline. Accent for statement phrases: O700 #B5530F (the only orange
// used for text).

const ACCENT = "#B5530F";
const IMG = "/images/projects/swiggy-agent-desk/short";
const VID = "/videos/swiggy";

// The Agent Desk Handbook (policy set, rules and sources), hosted like the
// resume: public > Agent-Desk-Handbook.pdf. The prototype link joins here
// and in data.js > panelLinks once it is hosted on Vercel.
export const HANDBOOK = "/Agent-Desk-Handbook.pdf";

const flow = (key, title, stages) => ({
  title,
  stages,
  poster: `${IMG}/flow-${key}.jpg`,
  mp4: `${VID}/flow-${key}.mp4`,
});

// The five playable flows, shared by the Highlights carousel (step 4) and the
// Deep Dive prototype band (chapter 8b).
export const FLOWS = [
  flow("s2", "Wrong item", ["Hand-over from the bot", "Review both customer photos", "Call the restaurant", "Record the restaurant's error", "Pick the fault and a full refund", "Tell the customer, then Confirm", "Close the ticket"]),
  flow("s8", "Missing item", ["Hand-over from the bot", "Review the customer photo", "Message the restaurant", "Record the restaurant's error", "Pick the fault and action, Swiggy pays", "Tell the customer, then Confirm", "Close the ticket"]),
  flow("s3", "Not delivered", ["Hand-over from the bot", "Message the rider", "Record the rider's account", "See the records conflict", "Send the case to review", "Tell the customer, then Confirm", "Close the ticket"]),
  flow("s5", "Quality issue", ["Hand-over from the bot", "Review the customer photo", "Call the customer", "Pick the fault and deny", "Tell the customer, then Confirm", "Close the ticket"]),
  flow("s9", "Late delivery", ["Hand-over from the bot", "Review the customer photo", "Message the rider", "Record the rider's delay", "Pick partial refund and a coupon", "Tell the customer, then Confirm", "Close the ticket"]),
];

export const swiggyShortCaseStudy = {
  sections: [
    // ------------------------------------------------------------ 1 RESEARCH
    {
      id: "research",
      tocLabel: "Research",
      short: true,
      accent: ACCENT,
      heading: "Research",
      intro: [
        "No Swiggy agent, internal policy or real case data could be reached. So the research worked from what is public and rebuilt the rules a reviewer would follow, tagging each one by where it came from.",
      ],
      open: { text: "With no access inside,", accent: "the rules themselves became the research." },
      parts: [
        {
          heading: "The constraint",
          text: [
            "Swiggy names its in-house agent tool in an engineering post and a job listing, but never shows what a human reviewer sees. No other platform checked publishes this either. Uber Eats and DoorDash publish fault rules and thresholds, not reviewer screens.",
          ],
          visual: {
            kind: "swLists",
            lists: [
              { title: "Reachable", items: ["Swiggy's public documents", "Indian e-commerce law", "Other platforms' rules", "News and legal records", "One expert call"] },
              { title: "Not reachable", items: ["Swiggy agents", "Internal policy and limits", "Real case data", "The current agent screen"] },
            ],
          },
        },
        {
          heading: "Working policy set",
          text: [
            "Nine public Swiggy documents gave 29 published rules, 7 notes on how to read them safely and 9 gaps no public source covers. The gaps were filled with Indian law, other platforms' rules and the project's own placeholders, and every rule carries its source. The full set is recorded in the Agent Desk Handbook.",
          ],
          visual: {
            kind: "swRules",
            stats: [
              { value: "9", cap: "public documents" },
              { value: "29", cap: "published rules" },
              { value: "9", cap: "gaps, filled and tagged" },
            ],
            rows: [
              { code: "P4", rule: "On cash on delivery, the customer need not pay for a wrong or missing order reported before it is marked delivered", tags: ["Published"] },
              { code: "P5", rule: "A photo-based complaint needs at least one customer photo the agent agrees with", tags: ["Assumed"] },
              { code: "P6", rule: "The restaurant's refund terms decide what it pays, and Swiggy pays anything above them", tags: ["Owner", "Assumed"] },
              { code: "T1", rule: "A refund above ₹500 is flagged for a second review", tags: ["Adapted", "Assumed"] },
            ],
          },
        },
        {
          heading: "Where refund errors come from",
          text: [
            "Public evidence points to proof, not history, as the weak spot. A Swiggy-group study traced most of its wrong refunds to poor or missing photos, and a reported Instamart case was refunded on an AI-edited photo.",
          ],
          visual: {
            kind: "swHero",
            items: [
              { value: "25%", cap: "of [[refunds issued wrongly]], mostly on weak photos", src: "Swiggy-group study" },
              { value: "912", cap: "of 10,590 helpline complaints were about unprocessed refunds", src: "2024" },
            ],
          },
        },
        {
          heading: "Customer experience audit",
          text: [
            "To see how claims are checked in practice, complaints were made on test orders, some genuine and some made up on purpose. Every made-up claim was refunded, in both records of the test, while genuine claims got inconsistent answers. Whether those refunds were returned is not recorded.",
          ],
          visual: {
            kind: "swRows",
            rows: [
              { label: "Made-up claims", text: "All refunded" },
              { label: "Genuine claims", text: "Inconsistent, one refused and one refunded" },
              { label: "Not recorded", text: "Dates, the refusal wording, whether refunds were returned" },
            ],
          },
        },
        {
          heading: "Expert view and precedents",
          text: [
            "A short call with a customer-service expert at American Express set the success measure. Other platforms showed what to borrow and what to avoid.",
          ],
          visual: {
            kind: "swQuote",
            quote: "Everything on the agent's screen should help [[reach a decision in less time]].",
            who: "Customer-service expert, American Express · paraphrased",
            rows: [
              { label: "Uber Eats", text: "Fault categories and review triggers", note: "adapted" },
              { label: "DoorDash", text: "Refunds at the value of the affected item", note: "adapted" },
              { label: "Zomato", text: "One opaque \"karma score\" for customers and riders", note: "avoided" },
            ],
          },
        },
      ],
      close: { text: "Every rule on the screen now says where it came from,", accent: "so nothing assumed can pass as Swiggy's own policy." },
    },

    // ------------------------------------------------ 2 INSIGHTS & DEFINE
    {
      id: "insights-define",
      tocLabel: "Insights & Define",
      short: true,
      accent: ACCENT,
      heading: "Insights & Define",
      intro: [
        "The research was combined across sources, and an insight was kept only when at least three different kinds of evidence supported it. Six survived. Together they set one rule for the whole screen.",
      ],
      open: { text: "The screen shows facts and policy checks,", accent: "and never a verdict." },
      parts: [
        {
          heading: "Six insights",
          text: ["Each insight names a gap between how a refund is decided and what the agent can see. The first four shaped the screen most directly."],
          visual: {
            kind: "swRows",
            dimFrom: 4,
            rows: [
              { label: "Insight 1", text: "The policy lists conditions but leaves the outcome to judgement" },
              { label: "Insight 2", text: "Refund mistakes come from weak evidence, not missing history" },
              { label: "Insight 3", text: "Wherever history is collected, it turns into one opaque score" },
              { label: "Insight 4", text: "One decision moves cost across three parties, yet the agent's view looks customer-only" },
              { label: "Insight 5", text: "Speed with no checks rewards the wrong cases" },
              { label: "Insight 6", text: "Rules and deadlines differ by source" },
            ],
          },
        },
        {
          heading: "Three parties, one cost",
          text: [
            "A refund is paid by someone. Food issues fall on the restaurant, delivery issues on the rider or Swiggy, and the two parties who carry the cost have the weakest way to dispute it.",
          ],
          visual: {
            kind: "swCols",
            cols: [
              { title: "Customer", text: "Gets a refund, a coupon or a denial" },
              { title: "Restaurant", text: "Pays for food issues from its payout" },
              { title: "Delivery partner", text: "Carries delivery issues with Swiggy" },
            ],
            note: "The screen shows all three records in one format.",
          },
        },
        {
          heading: "Policy as checks",
          text: ["Instead of a recommendation, each policy rule appears as a check against a recorded fact, with one of four statuses and its source."],
          visual: {
            kind: "swRows",
            rows: [
              { status: "✓", label: "Met", text: "P1 Issue type, taken from the bot or changed by the agent" },
              { status: "×", label: "Not met", text: "P4 Cash on delivery, complaint raised after the order was marked delivered", note: "SW-2091" },
              { status: "?", label: "Unknown", text: "P5 Evidence, until the agent has reviewed the photos", note: "SW-2041" },
              { status: "!", label: "N/A", text: "P5 Evidence, when the issue type needs no photo", note: "SW-2063" },
            ],
          },
        },
        {
          heading: "The three-layer model",
          text: ["Every element on the screen belongs to one layer, and one category is never allowed."],
          visual: {
            kind: "swCols",
            cols: [
              { title: "Data", text: "Raw facts, as recorded", sub: "OTP used at drop-off, 19:42" },
              { title: "Insight", text: "Counts and comparisons traceable to data", sub: "3 refunds in 90 days, dated" },
              { title: "Decision support", text: "Tools that help the agent act and record why", sub: "Agent marks a photo Agree" },
            ],
            never: "verdicts, predictions, scores, pre-selected outcomes",
          },
        },
      ],
      close: { text: "Three principles followed,", accent: "glanceable mid-chat, fair to all three parties, and nothing left to assumption." },
    },

    // ------------------------------------------------------------ 3 IDEATION
    {
      id: "ideation",
      tocLabel: "Ideation",
      short: true,
      accent: ACCENT,
      heading: "Ideation",
      intro: [
        "Ideas came from crossing the nine decisions an agent makes with the three layers. Before any idea could reach the screen, it had to pass a six-question test.",
      ],
      open: { text: "An idea reaches the screen", accent: "only if it passes all six questions." },
      parts: [
        {
          heading: "The admissibility test",
          text: ["Each question names a way an idea could quietly start deciding for the agent."],
          visual: {
            kind: "swQuestions",
            items: [
              { title: "Objective", text: "Two agents read the same value" },
              { title: "Traceable", text: "Its source opens in one step" },
              { title: "No prediction", text: "Shows what is recorded, not what will happen" },
              { title: "No prescription", text: "Leaves the decision to the agent" },
              { title: "Fair", text: "Same form for all three parties" },
              { title: "Saves time", text: "Removes a look-up or a switch" },
            ],
          },
        },
        {
          heading: "34 ideas, nine decisions",
          text: [
            "The matrix crossed decisions such as \"Is there proof?\" and \"Who is at fault?\" with Data, Insight and Decision support, giving 34 ideas, each with an ID later stages refer to.",
          ],
          visual: {
            kind: "swMatrix",
            head: ["Data", "Insight", "Decision support"],
            groups: [
              { name: "Is there proof?", cells: ["Evidence items with origin and times", "Photo sent 40 min after the complaint", "Agent links each item to a check"] },
              { name: "Who is at fault?", cells: ["Rider record, OTP and location", "Conflicting records side by side", "Agent picks the party, the screen shows who pays"] },
              { name: "How much?", cells: ["Order items with prices", "Total of the items selected", "Item checkboxes, no suggested amount"] },
            ],
            note: "3 of 9 decisions shown. The full matrix is in the Full Case-study.",
          },
        },
        {
          heading: "Seven ideas that failed",
          text: ["Seven tempting ideas turned out to be verdicts in disguise. Each was replaced with an objective version that passes."],
          visual: {
            kind: "swFixes",
            value: "7",
            cap: "ideas replaced",
            rows: [
              ["Photo authenticity score", "Where and when the photo was sent"],
              ["\"Most likely at fault\"", "Conflicting records side by side"],
              ["Suggested refund amount", "The agent picks items, the screen adds them up"],
              ["Approve pre-selected", "Equal weight, no default"],
              ["\"Repeat refunder\" tag", "Dated counts with totals"],
              ["Auto-send the reply", "The agent edits and sends"],
              ["Issue type with a confidence score", "The bot's category, confirmed by the agent"],
            ],
          },
        },
        {
          heading: "Layout, read left to right",
          text: ["Two layouts were compared. The chosen one follows how an agent reads a case, from facts that never change, to the live conversation, to the decision."],
          visual: {
            kind: "swLayout",
            boxes: [
              { title: "Case facts", sub: "order, evidence, history" },
              { title: "Live conversation", sub: "customer, rider, restaurant" },
              { title: "Checks and decision", on: true },
            ],
            caps: ["Left · facts that never change", "Centre · the active conversation", "Right · policy checks and the decision"],
            note: "Rejected · one long panel beside the chat, grouped condition by condition.",
          },
        },
      ],
      close: { text: "Every rejected idea left something behind,", accent: "an objective fact the agent can check." },
    },

    // -------------------------------------------------------------- 4 DESIGN
    {
      id: "design",
      tocLabel: "Design",
      short: true,
      accent: ACCENT,
      heading: "Design",
      intro: [
        "The final design is a coded, working prototype with five playable tickets. Every element is labelled with its layer, and every section exists for one decision the agent has to make.",
      ],
      open: { text: "Each section answers one decision,", accent: "and none of them makes it." },
      parts: [
        {
          heading: "One screen, four columns",
          text: [
            "Queue, case, conversation, and insights with the decision sit side by side at 1440 × 900, so nothing needed for a decision is more than a glance away.",
          ],
          visual: {
            kind: "swWire",
            areas: [
              { n: 1, title: "Queue and case", layer: "Data", text: "Open chats, order details, evidence and history" },
              { n: 2, title: "Conversation", layer: "Decision support", text: "Chat with all three parties, AI Summary of the bot" },
              { n: 3, title: "Insights and decision", layer: "Insight", text: "History summary, policy checks, the decision" },
            ],
          },
        },
        {
          heading: "Four decisions that mattered",
          text: ["Four choices shaped how the agent works."],
          visual: {
            kind: "swPairs",
            rows: [
              ["Policy as text", "Policy as checks with sources"],
              ["Different history formats", "One format for all three parties"],
              ["Decision sent after Confirm", "The customer is told before Confirm, and Confirm is never blocked"],
              ["An implicit list of what not to show", "An explicit never-shown list"],
            ],
          },
        },
        {
          heading: "Four conscious calls",
          text: ["In four places the design knowingly departs from a public Swiggy rule, and says why."],
          visual: {
            kind: "swTable",
            head: ["Design keeps", "Departs from", "Why"],
            rows: [
              ["Restaurant refund terms decide what it pays", "Restaurant permission for every refund", "Removes a live wait from every case"],
              ["The agent can call the customer", "No official customer-care phone line", "Calls settle unclear claims faster"],
              ["One decision record", "Keep remedy, money and recovery separate", "One Confirm keeps the path short"],
              ["The photo stays a policy check", "No public rule requires a photo", "A photo is the main customer evidence"],
            ],
          },
        },
        {
          heading: "The working prototype",
          text: [
            "Five flows show the prototype at work, each from the bot's hand-over to a closed ticket. Open any flow to watch it at full size.",
          ],
          visual: { kind: "swFlows", flows: FLOWS },
        },
      ],
      close: { text: "The screen keeps the agent in charge,", accent: "from the first message to the closed ticket." },
    },

    // --------------------------------------------------- 5 TESTING & OUTCOME
    {
      id: "testing-outcome",
      tocLabel: "Testing & Outcome",
      short: true,
      accent: ACCENT,
      heading: "Testing & Outcome",
      intro: [
        "With no agents to test with, a custom AI agent evaluated the interface against the project's own rules and six of Nielsen's heuristics, walking all five tickets from hand-over to Confirm.",
      ],
      open: { text: "The core rule held.", accent: "The gaps are hidden facts, not wrong ones." },
      parts: [
        {
          heading: "How it was evaluated",
          text: ["Each ticket was played along its intended path with a screenshot at every step, and every problem was rated on a 0 to 4 severity scale."],
          visual: {
            kind: "swStats",
            items: [
              { value: "5", cap: "tickets" },
              { value: "13", cap: "heuristics" },
              { value: "141", cap: "screens" },
            ],
          },
        },
        {
          heading: "Never shown",
          text: ["In every ticket, nothing on screen recommended, pre-selected, scored or predicted an outcome."],
          visual: { kind: "swHero", items: [{ value: "5 of 5", cap: "tickets [[passed the never-shown check]]" }] },
        },
        {
          heading: "What it found",
          text: ["Sixteen problems were found and none blocked a decision. Most are facts that sit behind a click or are missing."],
          visual: {
            kind: "swMeters",
            items: [
              { value: "3", label: "major", tone: "o500", width: 33 },
              { value: "9", label: "minor", tone: "o300", width: 100 },
              { value: "4", label: "cosmetic", tone: "grey", width: 44 },
            ],
          },
        },
        {
          heading: "Effort to decide",
          text: [
            "Each ticket took 17 to 21 actions to reach Confirm, an estimated 32 to 42 seconds of expert time. These are estimates from one evaluation, not measured times.",
          ],
          visual: {
            kind: "swEffort",
            max: 21,
            rows: [
              { label: "SW-2041", actions: 21, secs: 41 },
              { label: "SW-2070", actions: 20, secs: 38 },
              { label: "SW-2063", actions: 17, secs: 32 },
              { label: "SW-2091", actions: 17, secs: 33 },
              { label: "SW-2078", actions: 21, secs: 42 },
            ],
          },
        },
        {
          heading: "Where it stands",
          text: ["The three major findings need more thought than a quick fix, so they move to future scope."],
          visual: {
            kind: "swLists",
            lists: [
              { title: "Checked", items: ["The core rule, in all five tickets", "Every ticket can be decided and closed", "Effort per ticket"] },
              { title: "Not yet", items: ["Testing with real agents", "A partial-refund amount", "Multi-line decision drafts", "Policy checks open by default"] },
            ],
          },
        },
      ],
      close: { text: "What the screen can show is proven.", accent: "Whether agents decide faster is the next test." },
    },
  ],
  endLinks: [
    { label: "View Full Case-study", href: "/projects/swiggy-agent-desk/full" },
    { label: "Agent Desk Handbook", href: HANDBOOK, external: true },
  ],
};
