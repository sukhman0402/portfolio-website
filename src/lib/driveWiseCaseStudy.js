// Drive Wise case study: everything on /projects/drive-wise below the hero
// image. Final copy approved by Sukhman stage by stage (2026-10-04); the
// working docs live in the Placement Drive project (claude/drive-wise/
// 01-overview.md to 13-learnings.md). Edit the copy here, not in data.js.
//
// SHAPE (read by ProjectHeroTop.js and ProjectTopics.js):
//   top block   introLabel, intro, infoFields, briefLabel, brief,
//               problemLabel, problem
//   sections[]  one per Contents label (the stage):
//     { id, tocLabel, blocks: [block] }
//   block       { heading, text?, images?, link?, video?, prototype?,
//                 points?, subtopics?: [{ heading, text?, images?, link? }] }
//     heading    bold uppercase topic heading (level 2)
//     text       1 to 3 sentences (Limitations and Learnings may run longer)
//     images     [{ src, width, height, alt }] shown at natural height,
//                stacked in order (Define > Personas has two)
//     link       { label, href } shown under the text, opens in a new tab
//     points     [{ title, text }] bulleted list (Limitations, Learnings)
//     subtopics  smaller headings inside a topic, each with its own text
//                and image (Research, Design > Screens)
//     video      walkthrough video (Outcome > Final Solution)
//     prototype  click-to-load Figma embed + fallback link
//
// IMAGES: public > images > projects > drive-wise > *.png, exported at 2x
// (2060px wide) for a 1030px column. width/height are the real pixel sizes,
// so the browser reserves the right space before each image loads.
// No em dashes in any copy here (site rule).

const IMG = "/images/projects/drive-wise";
const img = (file, width, height, alt) => ({
  src: `${IMG}/${file}.png`,
  width,
  height,
  alt,
});

const RESEARCH_SITE = "/research/drive-wise-research-site.html";

// Figma prototype (file XnFEDRfYZhONOXCfCEvygR, start frame 4143:8055,
// "00. Home Screen- 1"). The prototype's share setting must allow "anyone
// with the link" to view, or the embed shows a sign-in wall.
const FIGMA_PROTO_PATH =
  "XnFEDRfYZhONOXCfCEvygR/M.DES--Semester-02---User-Interface-Design?node-id=4143-8055&starting-point-node-id=4143%3A8055&page-id=2555%3A830&scaling=scale-down&content-scaling=fixed&hotspot-hints=1";

export const driveWiseCaseStudy = {
  introLabel: "Drive Wise",
  intro:
    "A predictive vehicle-health app concept for everyday two-wheeler and four-wheeler owners. It turns a vehicle's usage, environment and service history into a clear picture of its condition, so owners know what needs attention, and when, before something fails.",
  infoFields: [
    { label: "Discipline", value: "Automotive" },
    { label: "Role", value: "UX Designer" },
    { label: "Tools Used", value: "Figma, FigJam, Google Forms, Sheets, Colab, D3.js" },
    { label: "Timeline", value: "13 days" },
  ],
  briefLabel: "Brief",
  brief:
    "Find a problem hidden in everyday life: something so routine that it is easy to overlook as an opportunity. Discover it, understand it through research, and work towards a solution, with the design frozen by a fixed deadline.",
  problemLabel: "The Problem",
  problem:
    "Vehicle maintenance is mostly reactive. Problems start quietly, as a slight noise or a small change in how the vehicle feels, and owners decide it can wait. By the time something fails, the repair is urgent and expensive. With no clear view of what the vehicle actually needs, owners rely on guesswork and the mechanic's word, unsure whether a repair is really necessary.",

  sections: [
    // 01 RESEARCH
    {
      id: "research",
      tocLabel: "Research",
      // flow: true = shown as the continuous GeoTab-style flow
      // (src > components > CaseStudyFlow.js). Stages are switched over one
      // at a time, Research first (Sukhman, 2026-10-04).
      flow: true,
      blocks: [
        {
          heading: "Primary Research",
          text: "Owners were asked directly, in conversation and at scale: four interviews explored how they decide a vehicle needs attention, and a survey of 72 owners measured how common those patterns are.",
          subtopics: [
            {
              heading: "Interviews",
              text: "Semi-structured conversations with four vehicle owners covered how they decide a vehicle needs attention, how far they trust the service they get, and whether a condition tracker would help.",
              images: [
                img("research-1-1-interviews", 2060, 2376, "Interviews: owners act on signals they can't fully read. Four owner quotes, and what 3 of 4 owners have in common."),
              ],
            },
            {
              heading: "Survey",
              text: "Shared through personal networks and public posts, the survey reached 72 vehicle owners with 15 questions across five themes: vehicle profile, maintenance habits, warning signs and confidence, trusted sources, and spending.",
              images: [
                img("research-1-2-survey-v2", 2060, 3042, "Survey of 72 owners: 72% delayed a service, unsure it was needed; 89% feel overcharged at least sometimes; average confidence 2.7 out of 5; 65% would pay a nominal fee."),
              ],
              link: { label: "View the research website", href: RESEARCH_SITE },
            },
          ],
        },
        {
          heading: "Secondary Research",
          text: "Existing vehicle data, published studies and current products were reviewed to see what is already known about a vehicle's condition, why owners struggle to judge a repair, and which tools already exist.",
          subtopics: [
            {
              heading: "Vehicle Data & Standards",
              text: "Manufacturer manuals, Indian vehicle regulations and diagnostic standards were reviewed to find out what data about a vehicle already exists, and how much of it reaches the owner.",
              images: [
                img("research-2-1-vehicle-data-standards", 2060, 1849, "The vehicle already knows, the owner doesn't: four sources of vehicle data in India, two real service schedules, and the ISO 15008 and ISO 26262 standards."),
              ],
            },
            {
              heading: "Literature Review",
              text: "Studies on expert repair services, predictive maintenance, trust in automation and phone notifications were reviewed to understand why owners struggle to judge a repair, and how a prediction should be presented to them.",
              images: [
                img("research-2-2-literature-review", 2060, 1483, "Literature review: five peer-reviewed sources in three themes, each with what it changed for Drive Wise."),
              ],
            },
            {
              heading: "Gap Analysis",
              text: "Six existing tools were compared on one question: can an everyday owner of any two-wheeler or car use them, without extra hardware, to see their vehicle's condition and what is due next?",
              images: [
                img("research-2-3-gap-analysis", 2060, 1872, "Gap analysis of six tools: each covers a part, none covers the everyday owner."),
              ],
            },
          ],
        },
      ],
    },

    // 02 INSIGHTS
    {
      id: "insights",
      tocLabel: "Insights",
      flow: true,
      blocks: [
        {
          heading: "Empathy Map",
          text: "The four interviews and the survey were combined into one composite empathy map of what owners say, think, do and feel about maintaining their vehicles.",
          images: [
            img("insights-1-empathy-map", 2060, 1920, "Empathy map: owners accept the mechanic's word, and still feel overcharged."),
          ],
        },
        {
          heading: "Owner Types",
          text: "Clustering the 72 survey responses by answer pattern grouped owners into three types, which differ most in whom they trust and whether they would pay for clarity.",
          images: [
            img("insights-2-owner-types-v2", 2060, 1616, "Three owner types: Local-Mechanic Loyalists (34), Self-Directed Researchers (23) and Overcharged Pragmatists (15)."),
          ],
          link: { label: "View the full analysis", href: RESEARCH_SITE },
        },
        {
          heading: "Key Insights",
          text: "Interviews, survey and analysis were read side by side; four insights held across at least two of the three, and secondary research is added where it supports them.",
          images: [
            img("insights-3-key-insights", 2060, 2119, "Four key insights, each held by at least two sources."),
          ],
        },
        {
          heading: "From Signals to Opportunities",
          text: "Each empathy-map statement was traced from the signal it shows, to the need behind it, to the opportunity it opens: 21 statements in all.",
          images: [
            img("insights-4-signals-to-opportunities", 2060, 1425, "Five of the 21 statements traced from signal to need to opportunity."),
          ],
        },
      ],
    },

    // 03 DEFINE
    {
      id: "define",
      tocLabel: "Define",
      flow: true,
      blocks: [
        {
          heading: "Personas",
          text: "Two composite personas were built from the two largest owner types, the interviews and the empathy map: one who looks for information and would pay for clarity, and one who trusts a mechanic he has known for years. Every design decision has to work for both.",
          images: [
            img("define-1a-persona-meera", 2060, 1735, "Persona 1, Meera: owns two vehicles, reads neither. A composite of the Self-Directed Researcher type."),
            img("define-1b-persona-suresh", 2060, 1693, "Persona 2, Suresh: trusts his mechanic, not an app. A composite of the Local-Mechanic Loyalist type."),
          ],
        },
        {
          heading: "Value Opportunity Analysis",
          text: "Today's experience and the Drive Wise concept were rated on seven value opportunities, using the research as evidence for each rating, to see where the concept must add the most value.",
          images: [
            img("define-2-value-opportunity-analysis", 2060, 1456, "Value opportunity analysis: the biggest gains are in confidence and clarity."),
          ],
        },
        {
          heading: "Problem Statement",
          text: "The research was brought together into one evidence-backed problem statement, which the rest of the project designs against.",
          images: [
            img("define-3-problem-statement", 2060, 1267, "Problem statement: everyday owners decide when to service from signals they cannot read. 72% delayed a service, 89% feel overcharged, confidence 2.7 out of 5."),
          ],
        },
      ],
    },

    // 04 IDEATION
    {
      id: "ideation",
      tocLabel: "Ideation",
      flow: true,
      blocks: [
        {
          heading: "How Might We",
          text: "The problem statement and the persona's frustrations were turned into six \"How might we\" questions, one for each gap the research exposed.",
          images: [
            img("ideation-1-how-might-we", 2060, 1451, "Six How Might We questions, one for each gap."),
          ],
        },
        {
          heading: "Opportunities to Features",
          text: "Each opportunity from the 21 traced statements was given one or more features, and the features were merged into twelve that answer them.",
          images: [
            img("ideation-2-opportunities-to-features", 2060, 1713, "21 opportunities merged into 12 features."),
          ],
        },
        {
          heading: "Importance-Difficulty Matrix",
          text: "The twelve features were placed by how strongly the research asks for them and how hard they are to build, which decided what the concept designs now and what waits.",
          images: [
            img("ideation-3-importance-difficulty-matrix", 2060, 1871, "Importance-difficulty matrix of the twelve features."),
          ],
        },
        {
          heading: "Predictive Logic Model",
          text: "The core idea was mapped as one system: what the owner and official records provide, how it is weighed against the manufacturer's schedule, and what the owner is told. It is a concept, not a working model.",
          images: [
            img("ideation-4-predictive-logic-model", 2060, 1247, "Predictive logic model: information, baseline schedule, six derived scores, and what the owner is told."),
          ],
        },
        {
          heading: "Metaphor",
          text: "The app borrows the language of a health check-up, so owners meet a familiar sequence instead of technical terms.",
          images: [
            img("ideation-5-metaphor", 2060, 954, "A health check-up for the vehicle: vital signs, symptoms, diagnosis, treatment, follow-up."),
          ],
        },
        {
          heading: "Information Architecture",
          text: "Everything Drive Wise knows and says was organised into three layers: information, intelligence, and communication and action; the screens follow the same order.",
          images: [
            img("ideation-6-information-architecture", 2060, 1698, "Information architecture in three layers, and the screen sitemap."),
          ],
        },
        {
          heading: "User Flow",
          text: "One scenario was walked end to end, from first opening the app to a car that needs attention being serviced and tracked.",
          images: [
            img("ideation-7-user-flow", 2060, 2219, "User flow: 20 screens from onboarding to a car that needs attention being serviced and tracked."),
          ],
        },
      ],
    },

    // 05 DESIGN
    {
      id: "design",
      tocLabel: "Design",
      flow: true,
      blocks: [
        {
          heading: "Screens",
          text: "The concept was designed as a phone app across 17 screen types; three moments carry the core idea.",
          subtopics: [
            {
              heading: "Onboarding that learns the vehicle",
              text: "The vehicle is found from its registration number, then a six-step questionnaire asks how it is used, with a usage score that updates as each answer is given.",
              images: [
                img("design-1-1-onboarding", 2060, 1780, "Onboarding: account type, registration, confirmation and data input screens."),
              ],
            },
            {
              heading: "Vehicle health at a glance",
              text: "The status screen turns six derived scores into plain words, each with one number and a short reason, so the owner sees what matters before what is technical.",
              images: [
                img("design-1-2-vehicle-health", 2060, 1815, "Status screen: six technical scores shown as six plain-word cards."),
              ],
            },
            {
              heading: "Decoding a warning",
              text: "The owner picks the warning signs they see on their dashboard; the app explains the likely cause, how sure it is, and what to do next.",
              images: [
                img("design-1-3-decoding-a-warning", 2060, 1706, "Decoding a warning: from one dashboard light to a likely cause, in three screens."),
              ],
            },
          ],
        },
        {
          heading: "Book a Service",
          text: "Booking is built around a step-by-step price breakdown, so the owner knows each job and its cost before agreeing, then follows the work without being at the workshop.",
          images: [
            img("design-2-book-a-service", 2060, 3151, "Book a service in six steps: providers, service detail with prices, pick-up scheduling, payment, confirmation and tracking."),
          ],
        },
        {
          heading: "Data Visualisation",
          text: "Every reading is a single number with a plain label and a short reason; colour is used only for urgency.",
          images: [
            img("design-3-data-visualisation", 2060, 1245, "Anatomy of a score card: one number, one label, one reason."),
          ],
        },
        {
          heading: "Standards Check",
          text: "The two standards reviewed in research were not used while designing; the finished screens were checked against them afterwards, and the results are reported in Testing.",
          // flow panel: the two standards, one plain line each
          standards: [
            { name: "ISO 15008", text: "In-vehicle visual displays: legibility of text and symbols" },
            { name: "ISO 26262", text: "Road vehicles: functional safety of electrical and electronic systems" },
          ],
          standardsNote: "Neither covers a phone app directly. See 6.1 Heuristic Evaluation.",
        },
        {
          heading: "Design System",
          text: "A small system keeps the focus on the vehicle: four colours, one typeface in two weights, white cards on a light grey ground, and a line-icon set drawn for vehicle parts.",
          images: [
            img("design-5-design-system", 2060, 1612, "Design system: colour palette, type scale, line icons and core components."),
          ],
        },
      ],
    },

    // 06 TESTING
    {
      id: "testing",
      tocLabel: "Testing",
      flow: true,
      blocks: [
        {
          heading: "Heuristic Evaluation",
          text: "The 20-screen core flow was reviewed, with seven key screens checked in detail, against Nielsen's ten usability heuristics and basic accessibility checks; each issue found was paired with a fix.",
          images: [
            img("testing-1-heuristic-evaluation", 2060, 2281, "Heuristic evaluation: eight issues found, eight fixes planned."),
          ],
        },
        {
          heading: "Prototype Feedback",
          text: "Four people tried the Figma prototype informally and shared their views; this was open feedback, not a structured usability test.",
          images: [
            img("testing-2-prototype-feedback", 2060, 1030, "Prototype feedback from four people: useful, liked the look, and a home-screen widget was suggested."),
          ],
        },
        {
          heading: "Experiments",
          text: "Three synthetic owners with the same scooter but different use were run through the service-timing logic, to check whether it moves the service date where a fixed reminder cannot.",
          images: [
            img("testing-3-experiments", 2060, 1387, "Same scooter, three riders, three different service dates compared with a fixed reminder."),
          ],
        },
      ],
    },

    // 07 OUTCOME
    {
      id: "outcome",
      tocLabel: "Outcome",
      flow: true,
      blocks: [
        {
          heading: "Final Solution",
          // flow panel: headline (approved 10-outcome 2.1) + the five
          // screens the walkthrough shows
          flowHeadline: { before: "Know what the vehicle needs, ", phrase: "before the workshop." },
          screens: [
            { name: "Home", text: "\"Your vehicle needs attention\"" },
            { name: "Status", text: "Six scores in plain words" },
            { name: "Breakdown Risk", text: "Likely cause and what to do" },
            { name: "Service Detail", text: "Every job and its price" },
            { name: "Track Servicing", text: "Each step with a time" },
          ],
          text: "Drive Wise brings the vehicle's condition, the reason behind each warning, and a priced, trackable service into one phone app for any two-wheeler or car, with no extra hardware.",
          video: {
            mp4: "/videos/drive-wise-walkthrough.mp4",
            webm: "/videos/drive-wise-walkthrough.webm",
            poster: "/videos/drive-wise-walkthrough-poster.jpg",
            width: 600,
            height: 1000,
            label: "Walkthrough of the Drive Wise prototype, from the phone home screen to tracking a booked service.",
            credit: "Vehicle images: Hyundai Motor India, used for concept illustration.",
          },
          prototype: {
            embedSrc: `https://embed.figma.com/proto/${FIGMA_PROTO_PATH}&embed-host=sukhman-portfolio`,
            openHref: `https://www.figma.com/proto/${FIGMA_PROTO_PATH}`,
            buttonLabel: "Try the prototype",
            openLabel: "Open the prototype in Figma",
          },
        },
        {
          heading: "Concept Validation",
          text: "Before any screen was designed, the survey asked whether owners would pay a small fee for real-time condition updates and only necessary repairs; after the prototype, four people gave informal feedback.",
          images: [
            img("outcome-2-concept-validation", 2060, 1186, "Concept validation: only 4% said no to paying a nominal fee; 96% would pay, or would if the cost is right."),
          ],
        },
        {
          heading: "Usability Report",
          text: "The heuristic review, the prototype feedback and the scenario test were brought together into one report, ending in the fixes for the next iteration.",
          images: [
            img("outcome-3-usability-report", 2060, 1091, "Usability report: what testing found, and what changes next."),
          ],
        },
        {
          heading: "Target KPIs",
          text: "Five measures were set to judge Drive Wise once it is used, each starting from a baseline found in the research. They are targets, not results.",
          images: [
            img("outcome-4-target-kpis", 2060, 1646, "Five target KPIs, each with a baseline from the research."),
          ],
        },
      ],
    },

    // 08 FUTURE SCOPE
    {
      id: "future-scope",
      tocLabel: "Future Scope",
      flow: true,
      blocks: [
        {
          heading: "From Answers to Vehicle Data",
          text: "Today the owner's answers stand in for data the vehicle already records; the next step is to read it directly, with the owner's permission.",
          images: [
            img("future-1-vehicle-data", 2060, 1099, "From the owner's answers now, to official records and the phone next, to the vehicle's own data later."),
          ],
        },
        {
          heading: "A Model That Learns",
          text: "Once real driving and service records exist, the rule-based logic can be replaced by a model trained on them, as long as every prediction can still explain itself.",
          images: [
            img("future-2-a-model-that-learns", 2060, 1209, "From today's rules to a trained model, with every prediction keeping its reason and confidence level."),
          ],
        },
        {
          heading: "The Next Design Iteration",
          text: "The testing fixes come first, followed by research directions the current screens do not yet answer.",
          images: [
            img("future-3-next-design-iteration", 2060, 1020, "Next iteration: three fixes from testing, then four new directions."),
          ],
        },
        {
          heading: "More Than One Vehicle",
          text: "Almost half of the owners surveyed run both a two-wheeler and a car, so one account for every vehicle in a household is the next scope.",
          images: [
            img("future-4-more-than-one-vehicle", 2060, 990, "48.6% own both a two-wheeler and a car: one household account for every vehicle."),
          ],
        },
        {
          heading: "Fleet",
          text: "The Account Type screen already separates individual owners from fleets; a fleet version would let businesses see every vehicle, driver and service plan in one place, across brands.",
          images: [
            img("future-5-fleet", 2060, 1784, "Fleet concept: the existing Account Type screen and five proposed fleet capabilities."),
          ],
        },
        {
          heading: "Business Model",
          text: "Drive Wise stays free for owners and earns a commission on services booked through the app, with safeguards so that what it earns from workshops never decides what owners are told.",
          images: [
            img("future-6-business-model", 2060, 1303, "Business model: free for owners, a commission per booking from workshops, with safeguards."),
          ],
        },
      ],
    },

    // 09 LIMITATIONS (text only)
    {
      id: "limitations",
      tocLabel: "Limitations",
      flow: true,
      // flow: the four blocks show as ONE 2 x 2 panel
      flowPanel: {
        chip: "Four limits",
        headline: { before: "What this project ", phrase: "can and cannot claim", after: "." },
        skins: ["white", "white", "black", "blue"],
      },
      blocks: [
        {
          heading: "Research",
          text: "The research is indicative, not representative.",
          points: [
            { title: "A modest, convenience sample.", text: "The survey reached 72 owners through personal networks and public posts; its regional and demographic spread was not checked." },
            { title: "What people say, not what they do.", text: "Delay, checking habits and time to diagnose are recalled estimates, not logged behaviour." },
            { title: "Four interviews.", text: "A small sample, and some answers came after a scenario the interviewer described, so they show agreement rather than a need raised unprompted." },
            { title: "No field observation.", text: "Contextual inquiry, unobtrusive measures and an analysis of real service bills were not carried out, so nothing was observed at a workshop." },
            { title: "Secondary sources read at abstract level.", text: "The literature review relied on abstracts and official pages; one service schedule comes from an older model's manual." },
          ],
        },
        {
          heading: "Analysis and Synthesis",
          text: "The analysis points the way; it does not prove cause.",
          points: [
            { title: "Exploratory, not pre-registered.", text: "Hypotheses were chosen after a first look at the data; with 72 responses and nine tests, most results do not survive correction for multiple tests." },
            { title: "Associations, not causes.", text: "\"Feeling overcharged predicts willingness to pay\" is a statistical association." },
            { title: "Owner types are a useful grouping, not a fixed typology.", text: "Three clusters were chosen from a cost curve without a sharp elbow; the attitude map explains 22.5% of the variation." },
            { title: "Composites.", text: "The empathy map and the two personas (Meera and Suresh) combine several people; none describes one real person." },
            { title: "Judgement calls.", text: "Value opportunity ratings and the difficulty side of the importance-difficulty matrix are the designer's assessment, each tied to evidence where possible." },
          ],
        },
        {
          heading: "Design",
          text: "Drive Wise is a concept; its intelligence is designed, not built.",
          points: [
            { title: "The prediction logic is conceptual.", text: "No sensor data, machine learning or backend exists; the scores on the screens are illustrative." },
            { title: "Data access is assumed.", text: "Vehicle lookup by registration number depends on access to official registration data that has not been confirmed." },
            { title: "Illustrative content.", text: "Service prices, vehicle details and workshop listings on the screens are examples, not market data." },
            { title: "Standards were applied after the fact.", text: "ISO 15008 and ISO 26262 were reviewed in research and used to check the finished screens, not to shape them; neither covers a phone app directly." },
            { title: "A fixed timeframe.", text: "The design was produced solo within a 13-day brief." },
            { title: "Commission model risk.", text: "Earning from workshops can pull against the trust the product depends on; safeguards are proposed, not tested." },
          ],
        },
        {
          heading: "Testing and Validation",
          text: "The design has been reviewed and tried, not tested with users in a structured way.",
          points: [
            { title: "No structured usability test or think-aloud session.", text: "Four people tried the prototype informally; no tasks, timings or success rates were recorded." },
            { title: "One evaluator.", text: "The heuristic evaluation was carried out by a single reviewer; three to five evaluators is usual." },
            { title: "A synthetic experiment.", text: "The scenario test used made-up owners and an assumed 20% adjustment for harsh conditions, not real vehicles." },
            { title: "Demand, not usability.", text: "Willingness to pay (65%) was asked before the design existed; it supports the idea, not these screens." },
            { title: "No field validation.", text: "Predicted wear and service dates have not been compared with what workshops actually find, and the KPIs are targets, not results." },
          ],
        },
      ],
    },

    // 10 LEARNINGS (text only, first person: the one exception to the
    // neutral-voice rule)
    {
      id: "learnings",
      tocLabel: "Learnings",
      flow: true,
      flowPanel: {
        chip: "In my words",
        headline: { before: "What this project ", phrase: "taught me", after: "." },
        skins: ["white", "white", "blue", "black"],
      },
      // closing band at the very end of the case study
      closing: {
        title: "Thank you.",
        links: [
          { label: "Try the prototype", href: `https://www.figma.com/proto/${FIGMA_PROTO_PATH}` },
          { label: "View the research website", href: RESEARCH_SITE },
        ],
      },
      blocks: [
        {
          heading: "On Research",
          text: "The research changed what I thought the problem was.",
          points: [
            { title: "Numbers and conversations explain each other.", text: "The survey told me how many owners delay a service; the interviews told me why: a light they can't read and a reminder that knows nothing about their vehicle." },
            { title: "Trust and doubt live together.", text: "Owners accept the mechanic's word and still feel overcharged. Designing for one feeling without the other would have missed the problem." },
            { title: "How I ask shapes the answer.", text: "When I described a scenario in the interviews, I got agreement rather than needs people raised themselves. Their own story has to come first." },
            { title: "Outside research can reframe a problem.", text: "Reading about repairs as a \"credence good\", where the customer can't judge what was needed even afterwards, turned what I saw as a convenience problem into a trust problem." },
          ],
        },
        {
          heading: "On Design",
          text: "I learned that clarity and trust have to be designed, not assumed.",
          points: [
            { title: "Technical data needs plain words.", text: "My six derived scores only became useful once they read as Usage Wear, Road Impact, Breakdown Risk and Extra Spend." },
            { title: "Trust needs reasons, not just answers.", text: "A prediction is only as useful as the explanation and the confidence that come with it." },
            { title: "Test earlier.", text: "Scores pointing in different directions and hard-to-read captions are easy fixes, and even one early review would have caught them sooner." },
          ],
        },
        {
          heading: "Next Time",
          text: "Three things I would bring earlier into the process.",
          points: [
            { text: "Observe a real service visit before designing the booking flow." },
            { text: "Run a structured usability test with set tasks, not only open feedback." },
            { text: "Speak to mechanics as well as owners; they hold the other half of the trust relationship." },
          ],
        },
        {
          heading: "From Architecture to UX",
          text: "My architecture training showed up throughout the project.",
          points: [
            { title: "Systems thinking.", text: "I planned inputs, logic and outputs as one system before drawing a single screen, much like the services of a building." },
            { title: "Layered information.", text: "The app moves from overview to detail, the way drawings move between scales." },
            { title: "An observation habit.", text: "See → Observe → Analyse → Implement set the order of the whole project, and the missing workshop observation is the clearest gap it shows me." },
          ],
        },
      ],
    },
  ],
};
