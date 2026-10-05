// BINA (Intelligent Waste Disposal System) case study: everything on
// /projects/intelligent-waste-disposal-system below the hero image.
// Final copy approved by Sukhman stage by stage (2026-10-05); the working
// docs live in the Placement Drive project (claude/bina/01-overview.md to
// 13-learnings.md). Edit the copy here, not in data.js.
//
// BINA has its OWN look (ISA reference, claude/bina/14-layout.md): it must
// not resemble Drive Wise. Every section has `flow: "bina"`, which makes
// ProjectTopics.js render it with src > components > BinaFlow.js instead of
// the Drive Wise flow.
//
// SHAPE (read by ProjectHeroTop.js and BinaFlow.js):
//   top block   introLabel, intro, infoFields, briefLabel, brief,
//               problemLabel, problem
//   sections[]  one per Contents label (the stage):
//     { id, tocLabel, flow: "bina", intro?, groups?, topics?, panel?, closing? }
//     intro    one sentence shown on the stage opener (stages without groups)
//     groups   [{ heading, text }] shown as numbered columns on the opener
//     topics   [{ heading, group?, images?, carousel?, videos? }]
//       images    [{ src, width, height, alt }] full width, natural height
//       carousel  { label, images: [...] } pages that swipe sideways under
//                 the first image (Define > Personas)
//       videos    { cards: [...], code } page-code cards with live links
//                 (Outcome > The Working Prototype)
//     panel    Limitations / Learnings: { label, statement, cells: [...] }
//     closing  { title, links: [{ label, href }] } ends the case study
//
// IMAGES: public > images > projects > intelligent-waste-disposal-system,
// exported at 2x (2060 px wide) for a 1030 px column; width/height are the
// real pixel sizes, so the browser reserves the space before each loads.
// No em dashes in any copy here (site rule).

const IMG = "/images/projects/intelligent-waste-disposal-system";
const img = (file, width, height, alt) => ({ src: `${IMG}/${file}.png`, width, height, alt });

const CODE = {
  label: "View the code",
  href: "https://github.com/AnujR17/Intelligent-Waste-Disposal-Systems",
};

export const binaCaseStudy = {
  introLabel: "BINA",
  intro:
    "A sensor-based smart bin that checks every disposal and responds in Hindi. When waste lands inside, it thanks the person; when it falls outside, it asks them to pick it up, then thanks them once they do. Built as a working prototype and used in a classroom for about ten days.",
  infoFields: [
    { label: "Discipline", value: "Waste Management" },
    { label: "Role", value: "Interaction Designer" },
    { label: "Tools Used", value: "Arduino IDE, GitHub, Claude Code, ElevenLabs" },
    { label: "Timeline", value: "11 days" },
  ],
  briefLabel: "Brief",
  brief:
    "Design and build an autonomous, sensor-based system that senses what is happening around it, decides how to respond through its own logic, and gives feedback that changes how people behave in a real, everyday setting.",
  problemLabel: "The Problem",
  problem:
    "Bins are built to hold waste, not to respond to the people using them. When a throw misses, nothing happens: no signal, no reminder, no one watching. People in a hurry walk away, the litter around the bin grows through the day, and over time leaving it there becomes normal. The gap is a moment of feedback, right when the waste is thrown.",

  sections: [
    // 01 RESEARCH
    {
      id: "research",
      tocLabel: "Research",
      flow: "bina",
      groups: [
        {
          heading: "Primary Research",
          text: "Campus bins were looked at informally before designing: how people throw waste, what the bin does when a throw misses, and how the area around it changes through the day.",
        },
        {
          heading: "Secondary Research",
          text: "Published studies were reviewed in two directions: what smart bins already do, and what is known about why people litter and what changes it at the moment of disposal.",
        },
      ],
      topics: [
        {
          heading: "Campus Bin Audit",
          group: "Primary Research",
          images: [img("research-1-1-campus-bin-audit", 2060, 1978, "The bin was there. Nothing about it responded. Five things noticed at campus bins, from memory, and how litter builds through the day.")],
        },
        {
          heading: "Context of Waste Behaviour",
          group: "Secondary Research",
          images: [img("research-1-2-context-of-waste-behaviour", 2060, 1548, "How people throw waste depends on the place, not just the person: environmental conditions, situational cues and surrounding infrastructure, each point tagged by its source.")],
        },
        {
          heading: "Literature Review",
          group: "Secondary Research",
          images: [img("research-1-3-literature-review", 2060, 1890, "Smart bins are smart about collection, not about the people using them: seven peer-reviewed findings and what they mean for BINA.")],
        },
      ],
    },

    // 02 INSIGHTS
    {
      id: "insights",
      tocLabel: "Insights",
      flow: "bina",
      intro:
        "What the audit, the field phrases and the studies add up to: why a miss goes uncorrected, and what a bin would need to do about it.",
      topics: [
        { heading: "Empathy Map", images: [img("insights-2-1-empathy-map", 2060, 1598, "Most misses aren't careless, they're unnoticed: what a person disposing waste thinks, feels, sees, says and does.")] },
        { heading: "Affinity Diagram", images: [img("insights-2-2-affinity-diagram", 2060, 1550, "Four themes behind one uncorrected miss.")] },
        { heading: "Mental Model", images: [img("insights-2-3-mental-model", 2060, 1278, "In the person's mind, the job ends the moment the waste leaves their hand.")] },
        { heading: "Key Insights", images: [img("insights-2-4-key-insights", 2060, 1532, "Three insights that shaped what BINA does, each traced from observation to pattern to insight.")] },
      ],
    },

    // 03 DEFINE
    {
      id: "define",
      tocLabel: "Define",
      flow: "bina",
      intro: "Who BINA is for, what it has to get right, and the problem it answers.",
      topics: [
        {
          heading: "Personas",
          images: [img("define-3-1-personas", 2060, 1580, "One bin, three people with a stake in it: Kabir, a student; Ritu, a faculty member; Ramesh, housekeeping staff. Assumed personas.")],
          carousel: {
            label: "One page per persona",
            images: [
              img("define-3-1a-persona-kabir", 2060, 2576, "Persona 1, Kabir, student: he doesn't see the miss, BINA has to see it for him."),
              img("define-3-1b-persona-ritu", 2060, 2294, "Persona 2, Ritu, faculty member: she wants a clean room without being the one who nags."),
              img("define-3-1c-persona-ramesh", 2060, 2332, "Persona 3, Ramesh, housekeeping staff: he picks up every miss that nobody else noticed."),
            ],
          },
        },
        { heading: "Context & Success Criteria", images: [img("define-3-2-context-success-criteria", 2060, 1210, "Four things BINA had to get right, next to the assumed setting.")] },
        { heading: "Problem Statement", images: [img("define-3-3-problem-statement", 2060, 1062, "Improper waste disposal persists because traditional bins lack real-time detection and corrective feedback.")] },
      ],
    },

    // 04 IDEATION
    {
      id: "ideation",
      tocLabel: "Ideation",
      flow: "bina",
      intro:
        "From the insights to a behaviour: what BINA should be like, how it should speak, and what happens at every step of a throw.",
      topics: [
        { heading: "Alternatives Considered", images: [img("ideation-4-1-alternatives-considered", 2060, 1314, "Three ideas were dropped, each for a reason, and the direction that was chosen.")] },
        { heading: "Personality Framework", images: [img("ideation-4-2-personality-framework", 2060, 1192, "Firm in correction, soft in appreciation: BINA as Caregiver plus Guide, with seven traits.")] },
        { heading: "Interaction Strategy", images: [img("ideation-4-3-interaction-strategy", 2060, 1304, "Speak once, at the right moment, then stay quiet: six interaction rules.")] },
        { heading: "System Concept", images: [img("ideation-4-4-system-concept", 2060, 1260, "Six layers, one loop from notice to response.")] },
        { heading: "Scenarios & User Flow", images: [img("ideation-4-5-scenarios-user-flow", 2060, 2058, "Every throw ends in a thank-you or a second chance: the flow from the code, with three endings.")] },
      ],
    },

    // 05 DESIGN
    {
      id: "design",
      tocLabel: "Design",
      flow: "bina",
      groups: [
        { heading: "System", text: "The hardware and logic underneath: how BINA senses, decides, powers itself and responds." },
        { heading: "Experience", text: "What a person meets at the bin: the eyes, the voice, the service around it, the form and the brand." },
      ],
      topics: [
        { heading: "System Architecture", group: "System", images: [img("design-5-1-system-architecture", 2060, 1512, "Six blocks, one microcontroller in the middle: sensors, Arduino, servo, OLED eyes, audio and a regulated battery supply.")] },
        { heading: "Hardware & Circuit", group: "System", images: [img("design-5-2-hardware-circuit", 2060, 1544, "Built from eleven off-the-shelf parts: pin map read from the code, and the bill of materials.")] },
        { heading: "Power Management", group: "System", images: [img("design-5-3-power-management", 2060, 1326, "The servo needs the most power, so the supply was built around it: two 18650 cells, an LM2596 regulator, and the load of each module.")] },
        { heading: "Sensor Placement", group: "System", images: [img("design-5-4-sensor-placement", 2060, 1522, "One sensor watches the person, two watch the floor: detection zones from the top and mounting height from the front.")] },
        { heading: "Eyes & Voice", group: "Experience", images: [img("design-5-5-eyes-voice", 2060, 2156, "The eyes show the state, the voice says what to do: six states with their eyes and Hindi lines.")] },
        { heading: "Service Blueprint", group: "Experience", images: [img("design-5-6-service-blueprint", 2060, 1350, "Behind a few seconds at the bin, a whole service: person, front stage, back stage and support across four steps.")] },
        { heading: "Physical Form & Specification", group: "Experience", images: [img("design-5-7-physical-form", 2060, 1782, "A plastic bin, a cardboard head and everything inside it: three build photos and the specification.")] },
        { heading: "Brand Identity", group: "Experience", images: [img("design-5-8-brand-identity", 2060, 1266, "BIN plus A, the bin is in the name: logo, palette, type and the Hindi slogan.")] },
      ],
    },

    // 06 TESTING
    {
      id: "testing",
      tocLabel: "Testing",
      flow: "bina",
      intro: "How BINA was tested: each part on its own, then together, then drop after drop until the loop held.",
      topics: [
        { heading: "Component Tests", images: [img("testing-6-1-component-tests", 2060, 1220, "Four parts tested alone, then joined into one program.")] },
        { heading: "Problems & Fixes", images: [img("testing-6-2-problems-fixes", 2060, 1482, "Five problems surfaced, each one changed the build.")] },
        { heading: "Critical Incident: The Lid", images: [img("testing-6-3-critical-incident-lid", 2060, 956, "The lid nearly got cut, the right angle saved it.")] },
        { heading: "Simulated Drops", images: [img("testing-6-4-simulated-drops", 2060, 1378, "Every branch of the loop, tested by hand, and the honest status of each success criterion.")] },
      ],
    },

    // 07 OUTCOME
    {
      id: "outcome",
      tocLabel: "Outcome",
      flow: "bina",
      intro: "What came out of eleven days: a working bin, about ten days in a classroom, and a seminar presentation.",
      topics: [
        {
          heading: "The Working Prototype",
          videos: {
            headline: { lead: "Both paths, ", accent: "working on a real bin." },
            side: { strong: "Demo videos recorded by the team during the project.", rest: " Each opens on Google Drive." },
            cards: [
              {
                label: "Video · Scenario 01",
                title: "Clean throw",
                steps: ["Person walks up; the lid opens", "Waste goes in", 'Happy eyes + "Dhanyavaad."'],
                cta: { label: "Watch Scenario 01", href: "https://drive.google.com/file/d/1POXU-sRi890xy3vhEFz6msuPgay7ICIU/view?usp=sharing" },
              },
              {
                label: "Video · Scenario 02",
                title: "A miss, then a second chance",
                steps: ["Waste lands outside the bin", "BINA asks, in Hindi, to pick it up", "The person picks it up and puts it in", "Happy eyes + the habit line"],
                cta: { label: "Watch Scenario 02", href: "https://drive.google.com/file/d/1ZH1XbvYx0g8k8Is_SVQKNplau_fcEKek/view?usp=sharing" },
                on: true,
              },
            ],
            code: CODE,
          },
        },
        { heading: "In the Classroom", images: [img("outcome-10-2-in-the-classroom", 2060, 948, "About ten days in a real classroom: misses were picked up after the prompt, and people responded well to the eyes and voice. Observed, not counted.")] },
        { heading: "Seminar Presentation", images: [img("outcome-10-3-seminar-presentation", 2060, 1840, "Presented at a seminar on emerging technologies: the team's poster, with names and contact details hidden.")] },
        { heading: "What BINA Shows", images: [img("outcome-10-4-what-bina-shows", 2060, 1084, "What BINA achieved, against the four success criteria.")] },
      ],
    },

    // 08 FUTURE SCOPE
    {
      id: "future-scope",
      tocLabel: "Future Scope",
      flow: "bina",
      intro: "What comes next: proving the effect, fixing what the prototype cannot do, and where a finished BINA could go.",
      topics: [
        { heading: "Measure the Effect", images: [img("future-8-1-measure-the-effect", 2060, 1420, "Seen working, next count it: a proposed baseline, BINA and follow-up study, one measure per success criterion.")] },
        { heading: "The Next Version", images: [img("future-8-2-next-version", 2060, 1452, "Every gap in the prototype is the next feature.")] },
        { heading: "Where BINA Could Go", images: [img("future-8-3-where-bina-could-go", 2060, 1170, "Classrooms and offices now, airports next, crowded places later.")] },
        { heading: "SDG Alignment", images: [img("future-8-4-sdg-alignment", 2060, 1226, "Three UN Sustainable Development Goals it points toward: 11, 12 and 13.")] },
      ],
    },

    // 09 LIMITATIONS
    {
      id: "limitations",
      tocLabel: "Limitations",
      flow: "bina",
      panel: {
        label: "What it can claim",
        statement: { soft: "Tested until it worked, ", plain: "observed in use, ", accent: "not yet measured." },
        cells: [
          {
            title: "The system",
            intro: "BINA works in a narrow, controlled setting.",
            points: [
              { title: "Ultrasonic sensing.", text: "Readings change with the surface, shape and size of the waste and with nearby noise." },
              { title: "Front-facing coverage.", text: "Drops behind the bin, or far to its sides, are not detected." },
              { title: "Fixed thresholds.", text: "Distance ranges were tuned for one room and one bin; a new space would need retuning." },
              { title: "One person at a time.", text: "The logic cannot tell two people apart, so it may thank or ask the wrong person." },
              { title: "Battery powered.", text: "It needs regular charging, and behaviour can suffer as the voltage drops." },
            ],
          },
          {
            title: "The prototype",
            intro: "It is a working prototype, not a product.",
            points: [
              { title: "Built for the brief.", text: "A plastic bin, a cardboard head and a breadboard, assembled in eleven days." },
              { title: "No data logging.", text: "It does not record what happens, so its own use cannot be reviewed." },
            ],
          },
          {
            title: "Research and synthesis",
            intro: "The research shaped the idea; it does not prove the problem's size.",
            points: [
              { title: "Informal observation.", text: "Campus bins and how people used them were observed informally and described from memory; no photos, counts or notes." },
              { title: "No interviews.", text: "Phrases in the empathy map were heard informally and paraphrased." },
              { title: "Assumed personas.", text: "Kabir, Ritu and Ramesh are archetypes, not people who were studied." },
              { title: "Built afterwards.", text: "The affinity diagram, mental model and service blueprint were synthesised for this case study from the existing material." },
              { title: "Informal ideation.", text: "Alternatives were discussed, not scored; role-play of the scenarios was not recorded." },
            ],
          },
          {
            title: "Testing and evidence",
            intro: "BINA was tested until it worked, not measured for its effect.",
            points: [
              { title: "Drops not counted.", text: "Clean throws and misses were simulated many times, with no hit rate or false-trigger rate." },
              { title: "No structured test with people.", text: "Classmates used it during testing, but their reactions were not noted." },
              { title: "Observed, not measured.", text: "In about ten days of classroom use, people were seen picking up misses and responding well, but nothing was counted, so the size of the effect is unknown." },
              { title: "Success criteria unmeasured.", text: "Two of the four criteria (Define) were observed in use; none has a measured result. A study is proposed in Future Scope." },
              { title: "Tuning values not recorded.", text: "Changes made while fixing problems were not logged with before-and-after values." },
            ],
          },
        ],
      },
    },

    // 10 LEARNINGS (first person, the one exception to the neutral voice)
    {
      id: "learnings",
      tocLabel: "Learnings",
      flow: "bina",
      panel: {
        label: "What I took away",
        statement: { plain: "A bin taught me ", accent: "where behaviour actually happens." },
        cells: [
          {
            title: "On behaviour",
            intro: "Designing for behaviour changed where I looked for the problem.",
            points: [
              { title: "Most misses are unnoticed, not careless.", text: "People rarely check where their waste lands, so the design had to make the miss visible instead of blaming the person." },
              { title: "Timing is the interaction.", text: "Feedback only works while the person is still at the bin; a few seconds later, the moment has passed." },
            ],
          },
          {
            title: "On building",
            intro: "Building a physical product taught me things a screen never had.",
            points: [
              { title: "The code is the real specification.", text: "Our slides and our code described different ranges and states; what people actually experience is whatever runs." },
              { title: "Hardware limits shape the experience.", text: "Power, memory and sensor timing decided how smooth the eyes looked and when the voice could play." },
              { title: "Test each part alone first.", text: "Separate test programs for the sensors, lid, eyes and voice made problems far easier to find once everything was joined." },
            ],
          },
          {
            title: "Next time",
            intro: "Four things I would do differently.",
            points: [
              { title: "Count from day one.", text: "A simple event log or tally before and during use, so the effect can be shown, not only seen." },
              { title: "Record what we observe.", text: "Notes and photos in the classroom, plus a short card for the people using it." },
              { title: "Run a structured test with people.", text: "Set tasks and watch, not only open use." },
              { title: "Design for more than one person.", text: "The single-user logic is the first thing a busier space would break." },
            ],
          },
          {
            title: "From architecture to UX",
            intro: "My architecture training showed up in the physical details.",
            points: [
              { title: "Spatial thinking.", text: "Sensor height, the 30° angles and where the bin stands in a room were design decisions, not technical afterthoughts." },
              { title: "Systems thinking.", text: "I saw BINA as one system of sensing, deciding and responding, planned together the way a building's services are." },
            ],
          },
        ],
      },
      closing: { title: "Thank you.", name: "BINA", links: [CODE] },
    },
  ],
};
