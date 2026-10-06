// BINA DEEP DIVE (the long case study, 13 chapters) on
// /projects/intelligent-waste-disposal-system/full. Reached from "View the
// Deep Dive" at the end of the Highlights page (src > lib > binaShortCaseStudy.js).
//
// FORMAT (approved by Sukhman, 2026-10-07): the Deep Dive reference differs
// per project. BINA follows "Aethera" (Behance 255758239): cropped thin
// chapter numerals, mono labels, warm panels, soft cards, dark charcoal
// modules. Rules: Placement Drive project, claude/case-study-long-format-rules.md
// and claude/bina/highlights-deep-dive-plan.md. Rendered by
// src > components > BinaDeepDive.js (one component per module `type`).
//
// Text marks: **bold** words. Headlines are [before, green part, after].
// `tone`: "warm" (off-white panel), "dk" (charcoal), or none (white).
// Honesty: only real numbers; anything synthesised, typical or schematic
// says so on the page. No em dashes in any copy here.

const IMG = "/images/projects/intelligent-waste-disposal-system/v2";
export const BINA_CODE = "https://github.com/AnujR17/Intelligent-Waste-Disposal-Systems";
const VIDEO_1 = "https://drive.google.com/file/d/1POXU-sRi890xy3vhEFz6msuPgay7ICIU/view";
const VIDEO_2 = "https://drive.google.com/file/d/1ZH1XbvYx0g8k8Is_SVQKNplau_fcEKek/view";
const pic = (file, width, height, alt) => ({ src: `${IMG}/${file}`, width, height, alt });

// The four success criteria, reused with a status in Testing and Outcome.
const CRITERIA = ["Waste lands inside", "A miss gets picked up", "No false triggers", "Friendly, not scolding"];

export const binaLongCaseStudy = {
  renderer: "aethera",
  back: { label: "Back to Highlights", href: "/projects/intelligent-waste-disposal-system" },
  endLinks: [{ label: "View the code", href: BINA_CODE, external: true }],

  modules: [
    // ------------------------------------------------------------ 01 OVERVIEW
    {
      type: "opener",
      id: "overview",
      num: "01",
      label: ["Overview", "The project"],
      lead: "A sensor-based smart bin that checks every disposal and responds in Hindi. When waste lands inside, it thanks the person; when it falls outside, it asks them to pick it up, then thanks them once they do.",
      info: [
        ["Discipline", "Waste Management"],
        ["Role", "Interaction Designer"],
        ["Tools used", "Arduino IDE, GitHub, Claude Code, ElevenLabs"],
        ["Timeline", "11 days"],
      ],
    },
    {
      type: "heroDark",
      eyebrow: "The working prototype",
      head: ["A bin that notices, ", "asks and thanks."],
      sub: "Built as a working prototype from off-the-shelf parts, then used in a classroom for about ten days.",
      caption: "Line drawing after the team's cover slide",
    },

    // --------------------------------------------------------------- 02 BRIEF
    {
      type: "opener",
      id: "brief",
      num: "02",
      label: ["Brief", "The ask"],
      lead: "Design and build an autonomous, sensor-based system that senses what is happening around it, decides how to respond through its own logic, and gives feedback that changes how people behave in a real, everyday setting.",
    },
    {
      type: "goals",
      img: pic("bts-5-head.jpg", 676, 845, "The cardboard head mounted on the bin, with the lid in place."),
      title: "What the brief asked for",
      items: [
        "Sense what is happening around it",
        "Decide how to respond through its own logic",
        "Give feedback people can see and hear",
        "Change how people behave in a real, everyday setting",
      ],
      note: "Open theme · the team chose waste",
    },
    {
      type: "stagger",
      eyebrow: "How BINA answers the brief",
      steps: [
        { title: "Sense", text: "**Three ultrasonic sensors** notice the person and where the waste lands." },
        { title: "Decide", text: "An **Arduino** checks distances against set ranges and timers." },
        { title: "Respond", text: "A **lid** that opens, **eyes** that react and a short **Hindi line**." },
        { title: "Change behaviour", text: "A miss gets **picked up**: observed in class, not counted.", on: true },
      ],
      note: "Staggered steps after the team's slides 6 and 7",
    },

    // ------------------------------------------------------------- 03 PROBLEM
    {
      type: "opener",
      id: "problem",
      num: "03",
      label: ["Problem", "& approach"],
      lead: "Why a passive bin lets misses pile up, and what a bin would have to do at the moment of the throw.",
    },
    {
      type: "problem",
      problem: "Bins are built to hold waste, not to respond to the people using them. When a throw misses, nothing happens. People in a hurry walk away, the litter around the bin grows through the day, and over time leaving it there becomes normal.",
      tile: ["No signal.", "No reminder.", "No one watching."],
      tileNote: "What a passive bin gives after a miss",
      approach: {
        label: "Approach",
        note: "A moment of feedback, right when the waste is thrown",
        cols: [
          { title: "Notice the person", text: "The lid opens when someone comes within 20 to 40 cm, so the bin has already noticed them." },
          { title: "Check the throw", text: "For five seconds, three sensors look for waste on the floor in front of the bin." },
          { title: "Ask, then thank", text: "A polite Hindi request, a re-check, then a thank-you once the waste is in." },
        ],
      },
    },

    // ------------------------------------------------------------ 04 RESEARCH
    {
      type: "opener",
      id: "research",
      num: "04",
      label: ["Research", "Campus + studies"],
      lead: "Before designing, the team looked closely at the campus bins they used every day, then read what is known about smart bins and why people litter.",
    },
    {
      type: "process",
      eyebrow: "How the project ran",
      spans: ["11 days · design and build", "+ 7 days · testing, after the build"],
      phases: [
        { name: "Research", days: 2, items: ["Campus bin audit", "Literature review", "Context model"] },
        { name: "Concept", days: 4, items: ["Empathy map and insights", "Personas and success criteria", "Alternatives, personality", "Interaction rules, scenarios"] },
        { name: "Build", days: 5, on: true, items: ["System and circuit", "Power and sensor placement", "Eyes and Hindi voice", "Assembly on the bin"] },
        { name: "Test", days: 7, items: ["Each part tested alone", "Joined into one program", "Five problems fixed", "Simulated drops, every branch"] },
      ],
      note: "**Days, approximately, as recalled by the team.** Green marks the build. After testing, BINA stood in a classroom for about ten days (Outcome).",
    },
    {
      type: "audit",
      tone: "warm",
      statement: ["The bin was there. ", "Nothing about it responded."],
      label: "What the team noticed at campus bins",
      cards: [
        { icon: "mute", title: "No response", text: "A throw that misses goes unnoticed; nothing signals it." },
        { icon: "clock", title: "Thrown in a hurry", text: "People throw while walking and do not check that it went in." },
        { icon: "lid", title: "Lids avoided", text: "People throw from a distance instead of opening the lid." },
        { icon: "pin", title: "Awkward placement", text: "Bins sit where people do not naturally pass." },
        { icon: "full", title: "Overflow", text: "Full bins are not emptied in time." },
      ],
      dayLabel: "Through the day",
      day: [
        ["Morning", "Clean around the bin"],
        ["Afternoon", "Waste starts lying around"],
        ["Evening", "More of it"],
        ["Night", "The most. Over time, leaving it becomes normal."],
      ],
      key: ["Less", "Green: waste lying around the bin (recalled pattern, not measured)", "More"],
      foot: "Informal audit, recalled from memory · No photos, counts or recordings",
    },
    {
      type: "context",
      statement: "How people throw waste depends on the place, not just the person.",
      side: "A context model built by the team from **observation, reasoning and reading**. Each point is marked by where its support comes from.",
      cols: [
        {
          title: "Environmental conditions",
          points: [
            { src: "Study · Cialdini 1990; Schultz 2013", study: true, text: "Existing litter makes more littering likely." },
            { src: "Team view", text: "Lighting affects how visible the bin area is." },
            { src: "Observed · on campus", text: "Crowding reduces attention to responsibility." },
          ],
        },
        {
          title: "Situational cues",
          points: [
            { src: "Study · Bateson 2015", study: true, text: "Others nearby change behaviour." },
            { src: "Observed", text: "Hurry makes careless throws more likely." },
            { src: "Study · de Kort 2008; counterpoint Ackerman 2026", study: true, text: "Feedback at the moment can change the action." },
          ],
        },
        {
          title: "Surrounding infrastructure",
          points: [
            { src: "Study · Schultz 2013; Robinson 2023", study: true, text: "Distance to a bin changes whether waste goes in." },
            { src: "Study, partial · Linder 2023", study: true, text: "How visible a bin is affects its use." },
            { src: "Team view", text: "A bin that cannot respond gives no reason to correct a miss." },
          ],
        },
      ],
      legend: [
        ["Study", "peer-reviewed source"],
        ["Observed", "informal team observation"],
        ["Team view", "reasoning, not tested"],
        ["", "Crowding was observed on campus; studies elsewhere found the opposite, so this point is local."],
      ],
    },
    {
      type: "literature",
      tone: "warm",
      eyebrow: "Literature review",
      cards: [
        { q: "What do smart bins do today?", big: "79", small: "studies", cap: "reviewed define smart bins by fill-level monitoring and connectivity. The person using the bin is not part of the loop.", src: "Zoumpoulis et al. 2024; Neema & Gor 2022" },
        { q: "Does a bin that prompts people change behaviour?", big: "About half", cap: "less litter with a bin that prompted people, by words or by design, in a field study.", src: "de Kort et al. 2008" },
        { q: "Do watching eyes reduce littering?", big: "About half", cap: "less littering with images of eyes in a university cafeteria, most at quiet times.", src: "Ernest-Jones et al. 2011" },
        {
          q: "Is a voice prompt enough on its own?",
          big: "5",
          small: "points, not significant",
          cap: "In a 30-day trial at 24 bin sites, a motion-triggered voice prompt lowered recycling contamination by 5 points, not a significant change. Bin design lowered it by 9 points, a significant change.",
          bars: [
            { label: "Voice prompt", w: 55.5, value: "5 pts" },
            { label: "Bin design", w: 100, value: "9 pts", on: true },
          ],
          src: "Ackerman et al. 2026 · counterpoint",
        },
      ],
      close: {
        text: ["Smart bins are smart about collection, not about the people using them. The gap: a bin that responds to the person, ", "at the moment of the throw."],
        note: "Sources checked at abstract level. Voice alone may not be enough, so BINA pairs it with eyes and a correction loop, and its effect is not claimed as proven.",
      },
    },

    // ------------------------------------------------------------ 05 INSIGHTS
    {
      type: "opener",
      id: "insights",
      num: "05",
      label: ["Insights", "What it adds up to"],
      lead: "What the audit, the field phrases and the studies add up to: why a miss goes uncorrected, and what a bin would need to do about it.",
    },
    {
      type: "blocks",
      tone: "warm",
      head: ["Most misses aren't careless. ", "They're unnoticed."],
      side: "**Empathy map** of a person disposing waste on campus, from phrases the team heard informally and paraphrased; not recorded interviews.",
      items: [
        { label: "Thinks", list: ["“Someone will clean it.”", "“It doesn’t matter if it’s slightly outside.”", "“I’m in a hurry.”"] },
        { label: "Feels", list: ["Indifferent", "Not accountable", "Rushed or distracted"] },
        { label: "Sees", list: ["A bin that does not respond", "Litter already around it", "No one monitoring"] },
        { label: "Says", list: ["“Ho jaayega.” (It’ll be fine.)", "“Chalta hai.” (It’s okay.)", "Often, nothing"] },
        { label: "Does", list: ["Throws quickly", "Does not check if it went in", "Walks away without correcting"] },
        { label: "Pain points · green", tint: true, list: ["No feedback at the moment", "No reinforcement for doing it right", "No reminder of the shared space"] },
      ],
    },
    {
      type: "affinity",
      head: ["Four themes behind one uncorrected miss."],
      side: "**Affinity diagram, synthesised for this case study** from the audit, the empathy map and the context model. Each note names its source.",
      clusters: [
        { k: "A", title: "The miss goes unseen", notes: [["Bin gives no response", "Audit"], ["Does not check if it went in", "Empathy map"], ["No monitoring", "Empathy map"], ["No feedback at the moment", "Empathy map"]] },
        { k: "B", title: "Hurry wins", notes: [["Throwing while walking", "Audit"], ["“I’m in a hurry.”", "Empathy map"], ["Hurry makes careless throws likely", "Context · observed"], ["Crowding reduces attention", "Context · observed"]] },
        { k: "C", title: "Litter becomes normal", notes: [["Litter builds afternoon to night", "Audit"], ["“Someone will clean it.”", "Empathy map"], ["“Chalta hai.”", "Empathy map"], ["Existing litter invites more", "Context · study"]] },
        { k: "D", title: "The bin adds friction", notes: [["Awkward placement", "Audit"], ["Lids people avoid touching", "Audit"], ["Overflowing bins", "Audit"], ["Lighting and visibility", "Context · team view"]] },
      ],
    },
    {
      type: "lanes",
      tone: "warm",
      panel: true,
      head: ["In the person's mind, the job ends ", "the moment the waste leaves their hand."],
      side: "**Mental model, synthesised for this case study** from the empathy map and the audit. The green row is an opportunity, not yet BINA.",
      cols: ["Approach", "Throw", "Miss", "Walk away"],
      rows: [
        { label: "What the person thinks", cells: ["“It’s just a bin.”", "“Close enough.”", "Does not notice", "“Someone will clean it.” “Done.”"] },
        { label: "What actually happens", cells: ["The bin does not register them", "Waste may land outside", "The miss stays on the floor", "Litter adds up through the day"] },
        { vis: "Line of visibility · what the person never sees above, what a bin could do below" },
        { label: "Green: where a bin could step in", on: true, cells: ["Notice the person", "Check where the waste landed", "Say so, politely, right away", "Confirm the fix and thank them"] },
      ],
    },
    {
      type: "insights",
      head: ["Three insights that shaped what BINA does."],
      cards: [
        { obs: "Waste lands outside and nothing happens; people do not check.", ins: "People cannot correct what they do not notice. Feedback has to come at the moment of the throw, from the bin itself.", on: true },
        { obs: "Litter builds from afternoon to night; existing litter invites more (Cialdini 1990; Keizer 2008).", ins: "The first miss matters most. Getting it picked up keeps the area, and the norm, clean." },
        { obs: "Bins with explicit anti-litter messages collected less than plain bins in a street trial (Linder et al. 2023).", ins: "The correction must be quick, specific and polite, then thank the person." },
      ],
    },

    // -------------------------------------------------------------- 06 DEFINE
    {
      type: "opener",
      id: "define",
      num: "06",
      label: ["Define", "Who and what"],
      lead: "Who BINA is for, what it had to get right, and the problem it answers.",
    },
    {
      type: "personas",
      tone: "warm",
      head: ["One bin, ", "three people with a stake in it."],
      side: "**Assumed archetypes** built from the audit, the field phrases and the studies; not people who were studied. Names are fictional. **AI-generated portraits, not real people.**",
      people: [
        {
          img: pic("kabir.png", 480, 480, "Kabir, AI-generated portrait"),
          name: "Kabir",
          role: "Student",
          stmt: "He doesn't see the miss. BINA has to see it for him.",
          rows: [["Before BINA", "A wrapper drops beside the bin; he walks on."], ["With BINA", "The eyes look toward the miss and a Hindi line asks him to pick it up.", true], ["Needs", "A quick, polite signal, and a thank-you."]],
        },
        {
          img: pic("ritu.png", 480, 480, "Ritu, AI-generated portrait"),
          name: "Ritu",
          role: "Faculty member",
          stmt: "She wants a clean room without being the one who nags.",
          rows: [["Before BINA", "She calls it out or lets it go; more litter by evening."], ["With BINA", "BINA asks the student; she says nothing.", true], ["Needs", "The bin does the reminding, without scolding."]],
        },
        {
          img: pic("ramesh.png", 480, 480, "Ramesh, AI-generated portrait"),
          name: "Ramesh",
          role: "Housekeeping staff",
          stmt: "He picks up every miss that nobody else noticed.",
          rows: [["Before BINA", "The floor is littered by late afternoon; he clears it, it builds again."], ["With BINA", "Misses are picked up by the person who made them.", true], ["Needs", "Fewer misses, and a bin that adds no work. BINA adds one: recharging."]],
        },
      ],
    },
    {
      type: "criteria",
      head: ["Four things BINA had to get right."],
      side: "Set by the team before building, for an assumed setting: an indoor classroom or corridor, **one person at a time**, battery powered, no network. Testing and Outcome report against each one.",
      items: [
        { title: CRITERIA[0], text: "Fewer throws miss the bin." },
        { title: CRITERIA[1], text: "The prompt leads the person to correct it. Green: the criterion the design is built around.", on: true },
        { title: CRITERIA[2], text: "The lid and voice react only to real people and real misses." },
        { title: CRITERIA[3], text: "People respond well to the tone and the eyes." },
      ],
    },
    {
      type: "gradStatement",
      tone: "warm",
      eyebrow: "Problem statement · gradient title after the team's slide 11",
      word: "Behavioral Negligence",
      tags: ["Passive infrastructure", "Interactive intervention", "Environmental responsibility", "Autonomous monitoring"],
      statement: ["Improper waste disposal persists because traditional bins lack ", "real-time detection and corrective feedback", ", resulting in unmonitored and irresponsible environmental behaviour."],
      side: "**The team's problem statement**, traced to insights 01 to 03. The research narrows it to one moment: the throw that misses and goes unnoticed.",
    },
    {
      type: "opportunity",
      eyebrow: "Design opportunity",
      head: ["The gap between intention and action pointed to one place: ", "the bin itself."],
      side: "Turn it from a **static container** into a system that **perceives, decides and gives feedback**, at the moment of disposal.",
    },

    // ------------------------------------------------------------ 07 IDEATION
    {
      type: "opener",
      id: "ideation",
      num: "07",
      label: ["Ideation", "Insight to behaviour"],
      lead: "From the insights to a behaviour: what BINA should be like, how it should speak, and what happens at every step of a throw.",
    },
    {
      type: "drops",
      tone: "warm",
      head: ["Three ideas were dropped. ", "Each lost for a reason."],
      side: "Discussed informally within the team; **not scored on a matrix**. Sorting returns in Future Scope as a later upgrade.",
      items: [
        { label: "Dropped", title: "Lights or a buzzer only", text: "Easy to ignore: a beep does not say what to do." },
        { label: "Dropped", title: "An English voice", text: "Hindi felt more relatable for the people using these bins." },
        { label: "Dropped", title: "A waste-sorting bin", text: "The wrong problem: waste was missing the bin, not landing mixed inside it." },
        { label: "Chosen", title: "Notice, ask, thank", text: "Sensors to notice the miss, a lid that opens for the person, eyes that react, and a short Hindi line that asks, then thanks.", chosen: true },
      ],
    },
    {
      type: "ptab",
      head: ["Firm in correction, ", "soft in appreciation."],
      side: "**Personality framework**, set before the build (the team's slide 45). It guided the voice lines and eye states.",
      items: [
        { title: "Brand archetype", text: "Caregiver + Guide: supports people while gently correcting their actions." },
        { title: "Behavioural role", text: "A silent supervisor that steps in only when needed." },
        { title: "Interaction tone", text: "Polite, direct, never aggressive." },
        { title: "Voice", text: "Clear Hindi, short sentences, neutral to friendly." },
        { title: "Trust and authority", text: "Moderate: firm when correcting, soft when thanking.", on: true },
        { title: "Humanisation", text: "Animated eyes and spoken language suggest awareness." },
        { title: "Perception goal", text: "Seen as helpful, not as authority or punishment." },
        { title: "Experience promise", text: "Throwing waste becomes a short, guided exchange." },
      ],
    },
    {
      type: "rules",
      tone: "warm",
      head: ["Speak once, at the right moment, ", "then stay quiet."],
      side: "Six interaction rules from the team's strategy (slide 21). **Once per event** is confirmed in the code: each line plays once per state change, never on a loop.",
      items: [
        { title: "Notice first", text: "The lid opens when a person comes close; no button." },
        { title: "Respond immediately", text: "Feedback plays right after the check, while the person is still there." },
        { title: "Thank correct use", text: "A clean throw earns a “Dhanyavaad.”" },
        { title: "Correct without blame", text: "A miss triggers a polite request to pick it up." },
        { title: "Speak Hindi, briefly", text: "Short lines the person can understand mid-step." },
        { title: "Once per event", text: "Each line plays once per state change, never on a loop. Green: verified in the code.", on: true },
      ],
    },
    {
      type: "layers",
      head: ["Six layers, one loop from notice to response."],
      side: "The team's **system concept** (slide 17), in its pill-and-connector structure. Hardware details follow in Design.",
      items: [
        { name: "Detection", desc: "Sensors notice the person and where the waste lands" },
        { name: "Decision logic", desc: "The microcontroller checks distances against set ranges" },
        { name: "Actuation", desc: "A servo opens and closes the lid" },
        { name: "Visual feedback", desc: "Two OLED screens show the eyes" },
        { name: "Audio feedback", desc: "A voice module plays Hindi lines" },
        { name: "Reinforcement loop", desc: "The outcome decides whether BINA thanks, asks or re-checks", on: true },
      ],
    },
    {
      type: "scenarios",
      tone: "warm",
      head: ["Every throw ends in ", "a thank-you, or a second chance."],
      side: "Two scenarios from the team's slides 18 and 19, mapped step by step and **acted out informally** before the logic was built. The code that ran adds a third ending.",
      items: [
        { label: "Scenario 01", title: "Successful Disposal", steps: ["A person comes within 20 to 40 cm", "The lid opens; the eyes wake", "Waste goes inside", "5-second check: nothing outside"], end: "Happy eyes + “Dhanyavaad.”" },
        { label: "Scenario 02", title: "Incorrect Disposal", steps: ["A person comes within 20 to 40 cm", "Waste lands outside", "The request to pick it up (7 s)", "5-second re-check: picked up"], end: "Happy eyes + the habit line" },
        { label: "From the code", title: "Not Corrected", dark: true, steps: ["Waste lands outside", "The request to pick it up (7 s)", "5-second re-check: still outside"], end: "Angry eyes, no voice" },
      ],
      note: "Green pill: a thank-you ending · Black pill: the ending added by the code · Person walks away (over 80 cm): the lid closes and BINA waits again",
    },

    // -------------------------------------------------------------- 08 DESIGN
    {
      type: "opener",
      id: "design",
      num: "08",
      label: ["Design", "System + experience"],
      lead: "The hardware and logic underneath, then what a person meets at the bin: the eyes, the voice, the service around it, the form and the brand.",
    },
    {
      type: "arch",
      tone: "warm",
      head: ["Six blocks, ", "one microcontroller in the middle."],
      side: "Redrawn from the team's block diagram (slide 24). Code: Arduino C++, five files on GitHub.",
      core: { label: "Processing", title: "Arduino Uno R3", text: "Distance ranges, timers and states" },
      sats: [
        { pos: "tl", label: "Input", title: "3 ultrasonic sensors", text: "Centre: the person. Two sides, angled 30°: the floor." },
        { pos: "bl", label: "Power", title: "2 × 18650 cells → LM2596", text: "A steady 5 V to every block." },
        { pos: "tr", label: "Actuation", title: "SG90 servo", text: "Opens the lid at 180°, closes it at 0°." },
        { pos: "mr", label: "Visual", title: "2 OLED screens", text: "One eye each, drawn in code." },
        { pos: "br", label: "Audio", title: "MP3 module → amplifier → speaker", text: "Three Hindi lines, generated in ElevenLabs." },
      ],
    },
    {
      type: "ia",
      head: ["From the person entering range ", "to the reset."],
      side: "**Information architecture** in the team's structure (slide 23): states on a spine, what each state touches beside it. Values from the code.",
      spine: [
        { node: "Waiting", at: ["Eyes blink at random", "Lid closed"] },
        { edge: "Centre sensor reads 20 to 40 cm" },
        { node: "Person detected", at: ["Servo 180°: lid opens", "Eyes active"] },
        { edge: "Waste is thrown" },
        { node: "5-second check", at: ["Left, centre, right sensors"] },
        { edge: "Is the waste outside?" },
        { node: "Reset", at: ["Centre reads over 80 cm", "Servo 0°: lid closes"] },
      ],
      no: { label: "No: clean throw · green line", node: "Thank you", at: ["Happy eyes", "“Dhanyavaad.”"] },
      yes: {
        label: "Yes: waste outside · dashed line",
        ask: { node: "Ask", at: ["Eyes look toward the miss", "Request, 7 s"] },
        recheck: "5-second re-check",
        picked: { node: "Picked up", at: ["Happy eyes", "The habit line"] },
        still: { node: "Still outside", at: ["Angry eyes", "No voice"] },
      },
    },
    {
      type: "parts",
      tone: "warm",
      head: ["Built from eleven off-the-shelf parts."],
      side: "Wired on a breadboard, so each part could be **tested alone** before integration. The circuit is the team's diagram.",
      parts: [
        ["Ultrasonic sensor HC-SR04", "× 3"],
        ["Arduino Uno R3", "× 1"],
        ["Servo motor SG90", "× 1"],
        ["OLED display 0.96\" I2C", "× 2"],
        ["MP3 module DY-SV5W", "× 1"],
        ["Mini amplifier", "× 1"],
        ["Speaker 4 Ω 3 W", "× 1"],
        ["LM2596 step-down regulator", "× 1"],
        ["18650 Li-ion cell + holder", "× 2 + 1"],
        ["Breadboard", "× 1"],
        ["Jumper wires", "× 40"],
      ],
      img: pic("slide-27.png", 1058, 770, "The team's circuit diagram"),
      caption: "The team's circuit diagram",
    },
    {
      type: "power",
      head: ["The servo needs the most power, ", "so the supply was built around it."],
      side: "From the team's power plan (slide 28). **Currents are typical ratings, not measured.**",
      blocks: [
        { label: "Source", title: "2 × 18650 Li-ion", items: ["3.7 V each, 7.4 V nominal", "8.4 V fully charged", "2200 mAh per cell"] },
        { label: "Regulation", title: "LM2596 step-down", items: ["Up to 40 V in", "A steady 5 V out", "Up to 3 A"] },
        { label: "Without it", title: "What goes wrong", items: ["Voltage drops and random resets", "Servo jitter", "Distorted audio"] },
      ],
      loadLabel: "Load at 5 V, typical",
      loads: [
        { name: "SG90 servo", w: 100, value: "200 to 700 mA", on: true },
        { name: "Amplifier", w: 43, value: "about 300 mA" },
        { name: "Arduino Uno", w: 7, value: "about 50 mA" },
        { name: "MP3 module", w: 4.3, value: "20 to 30 mA" },
        { name: "OLED, each", w: 2.9, value: "about 20 mA" },
        { name: "HC-SR04, each", w: 2.1, value: "about 15 mA" },
      ],
      note: "Black bar: the servo at its peak · bars to scale at the upper value",
    },
    {
      type: "zones",
      tone: "warm",
      head: ["One sensor watches the person. ", "Two watch the floor."],
      side: "The team's **triangular coverage** idea (slide 29), with the ranges from the code that ran. Placement: 2 inches above the floor, on the front of a bin about 45 cm tall.",
      key: [
        ["Green: person zone.", "The centre sensor sees someone 20 to 40 cm away; closer than 20 cm, it reads waste in front (dashed)."],
        ["Grey: floor zones.", "The side sensors, angled 30° out, see waste on the floor under 30 cm."],
        ["Not covered.", "Drops behind the bin, or far to its sides (Limitations)."],
        ["Zone shapes are schematic,", "not measured beam widths."],
      ],
    },
    {
      type: "eyes",
      tone: "dk",
      head: ["The eyes show the state. ", "The voice says what to do."],
      side: "States as built (main.ino). **Voice lines generated with ElevenLabs** text to speech, played once per event. Eyes drawn in code from simple shapes.",
      states: [
        { shape: "rest", title: "Waiting", meta: "Random blinks, every 3 to 6 s", line: "No voice" },
        { shape: "open", title: "Person near", meta: "20 to 40 cm · lid opens", line: "No voice" },
        { shape: "happy", title: "Clean throw", meta: "Happy", line: "“Dhanyavaad.”", tr: "Thank you." },
        { shape: "look", title: "Miss", meta: "Eyes look toward the waste", line: "“Arey! Arey! Arey! Lagta hai aapse kachra bahar gir gya hai. Kripya isse uthaaye aur andar daale.”", tr: "Looks like your waste fell outside. Please pick it up and put it in." },
        { shape: "happy", title: "Picked up", meta: "Happy", line: "“Dhanyavaad! Safai ko zimmedari nahi, aadat banaiye.”", tr: "Thank you! Make cleanliness a habit, not a duty." },
        { shape: "angry", title: "Still outside", meta: "Angry", line: "No voice" },
      ],
      note: "Eye drawings simplified from the code's shapes; screen colour shown in BINA green for legibility",
    },
    {
      type: "lanes",
      head: ["Behind a few seconds at the bin, ", "a whole service."],
      side: "**Service blueprint, synthesised for this case study** from the code's states and the specification. A miss takes about 17 seconds in the code.",
      cols: ["Approach", "Throw", "Correct, if missed", "Leave"],
      rows: [
        { label: "Person", cells: ["Walks up", "Throws", "Picks the waste up and puts it in", "Walks away"] },
        { label: "Front stage · green", on: true, cells: ["Lid opens, eyes wake", "Happy eyes and thank-you, or the request", "Happy eyes and the habit line, or angry eyes", "Lid closes, eyes rest"] },
        { vis: "Line of visibility" },
        { label: "Back stage · logic", cells: ["Centre sensor 20 to 40 cm → servo", "5-second check on three sensors", "7-second line, then a 5-second re-check", "Centre over 80 cm → reset"] },
        { label: "Support", cells: ["Housekeeping empties the bin", "Batteries recharged periodically", "Code updated through Arduino IDE", ""] },
      ],
    },
    {
      type: "spec",
      tone: "warm",
      head: ["A plastic bin, a cardboard head, ", "and everything inside it."],
      side: "Product specification in the team's structure (slide 46), with the code's ranges.",
      items: [
        { title: "Dimensions", text: "About 45 cm tall; sensors 2 inches above the floor, on the front." },
        { title: "Materials", text: "A standard plastic dustbin with a cardboard head for the eyes and speaker." },
        { title: "Power", text: "2 × 18650 cells, regulated to 5 V; recharged periodically." },
        { title: "Ranges", text: "Person at 20 to 40 cm; waste outside under 30 cm (sides) or under 20 cm (centre)." },
        { title: "Network", text: "Standalone, none." },
        { title: "Prototype cost", text: "₹2,898", big: true },
      ],
    },
    {
      type: "brand",
      head: ["BIN + A. ", "The bin is in the name."],
      side: "Brand identity by the team (slides 43 and 44).",
      logo: pic("slide-43.png", 1270, 400, "BINA logo"),
      colors: [
        ["#026D00", "#fff"],
        ["#3FAE5A", "#111"],
        ["#000000", "#fff"],
        ["#9A9A9A", "#111"],
      ],
      colorNote: "Logo gradient #026D00 to #04D300. #026D00 is the only green used for text (6.0 : 1 on white).",
      slogan: pic("slide-04.png", 1169, 195, "Slogan in Hindi: safai ko zimmedari nahi aadat banao"),
      sloganCaption: "Make cleanliness a habit, not a duty.",
    },

    // ------------------------------------------------------------- 09 TESTING
    {
      type: "opener",
      id: "testing",
      num: "09",
      label: ["Testing", "How it was proven"],
      lead: "Each part on its own, then together, then drop after drop until the loop held.",
    },
    {
      type: "tests",
      tone: "warm",
      head: ["Four parts tested alone, ", "then joined into one program."],
      side: "**Component tests to integration.** Each part had its own small test program before the parts were combined. Test sketches and final code are public on GitHub (5 files).",
      tests: [
        { title: "Ultrasonic sensors × 3", text: "Read all three in turn and print the distances, spaced apart so they do not pick up each other's echo.", file: "ultra-sonic.ino" },
        { title: "Servo motor", text: "Sweep between 0° and 180° to check the lid's full range.", file: "Servo-Motor.ino" },
        { title: "OLED eyes × 2", text: "Cycle every expression on command, drawn in a low-memory mode so two screens fit on one Arduino Uno.", file: "0.96-oled.ino" },
        { title: "MP3 module + speaker", text: "Play the three voice files one after another.", file: "dy-sv-5w-mp3player-Speaker.ino" },
      ],
      integ: { label: "Integration", title: "main.ino", text: "Sensors, lid, eyes and voice in one state machine.", states: ["WAITING", "OBSERVE_5S", "WARNING_PLAYING_7S", "CLEANUP_CHECK_5S"] },
      link: { label: "View the code", href: BINA_CODE },
    },
    {
      type: "code",
      tone: "dk",
      head: ["What the sensors see, ", "the eyes show."],
      side: "**main.ino, lines 12 to 19,** as written in the public repo. The code is the version that ran in the classroom.",
      bar: ["Intelligent-Waste-Disposal-Systems / main.ino", "Sensor-to-eye mapping"],
      // [line number, code, highlighted call or result]
      lines: [
        [12, " * Sensor-to-eye mapping:", ""],
        [13, " *   left  ultrasonic < 30 cm  → ", "lookLeft()"],
        [14, " *   right ultrasonic < 30 cm  → ", "lookRight()"],
        [15, " *   centre < 20 cm            → ", "lookDown()", "   (object below)"],
        [16, " *   centre 20–40 cm           → human detected → servo / state machine", ""],
        [17, " *   AUDIO_THANK (00003) or AUDIO_CLEAR (00002) played → ", "HAPPY 5 s"],
        [18, " *   Still dirty after cleanup  → ", "ANGRY 5 s"],
        [19, " *   Otherwise                  → NORMAL (idle blink)", ""],
      ],
    },
    {
      type: "pairs",
      head: ["Five problems surfaced. ", "Each one changed the build."],
      side: "**Problems as the team met them;** fixes as found in the code and the team's plans. Tuning values were not recorded.",
      cols: ["Problem", "Fix"],
      rows: [
        { title: "Power drops and resets", text: "Two 18650 cells through a step-down regulator to a steady **5 V**, sized for the servo's peaks." },
        { title: "Missed drops at the sides", text: "Side sensors angled **30° outward**, covering the floor in front of the bin." },
        { title: "Audio playing at the wrong time", text: "Trigger pins held off at start-up, a pause while the module boots, and each line played **once per event**." },
        { title: "Lid motor out of line", text: "Servo angle and lid attachment reworked (the lid incident, below)." },
        { title: "Sensor placement and reading accuracy", text: "Sensors set **2 inches** above the floor; readings spaced so the three sensors do not interfere." },
      ],
      trade: { label: "Trade-off", text: "The final code shortened the gap between sensor readings so the eyes animate smoothly: **accuracy traded for a livelier face.**", src: "Source: repo README" },
    },
    {
      type: "incident",
      tone: "warm",
      head: ["The lid nearly got cut. ", "The right angle saved it."],
      side: "**Critical incident,** told from the team's build. No measurements were taken.",
      steps: [
        { label: "01 · What happened", title: "The servo would not line up", text: "The SG90 servo was hard to calibrate against the lid." },
        { label: "02 · On the table", title: "Drop automatic opening", text: "Keep a plain lid and lose the moving part.", cut: true },
        { label: "03 · What changed", title: "Angle and attachment worked out", text: "The team found the servo angle and how to fix the lid to it." },
        { label: "04 · Why it stayed", title: "The lid is the first signal", text: "An opening lid is BINA's first sign that it has noticed the person (interaction rule 1).", on: true },
      ],
      foot: "In the final code the lid opens to **180°** when a person is detected and closes to **0°** once they walk away.",
    },
    {
      type: "checks",
      head: ["Every branch of the loop, ", "tested by hand."],
      side: "**Final checks from the team's assembly plan** (step 10). Many drops, not counted; no hit rate is claimed. Classmates used it during testing; their reactions were not noted.",
      items: [
        { title: "Clean throw", text: "Happy eyes + “Dhanyavaad.”" },
        { title: "Miss", text: "The request to pick it up." },
        { title: "Corrected miss", text: "Happy eyes + the habit line." },
        { title: "Lid reset", text: "The lid closes when the person walks away." },
      ],
      critLabel: "Success criteria after testing",
      crit: [
        { title: CRITERIA[0], status: "Not measured", kind: "no" },
        { title: CRITERIA[1], status: "Works in simulated drops", kind: "ob" },
        { title: CRITERIA[2], status: "Addressed, not measured", kind: "ad" },
        { title: CRITERIA[3], status: "No reactions noted", kind: "no" },
      ],
    },
    {
      type: "photos",
      tone: "dk",
      head: ["Wiring trials, calibration ", "and a lot of debugging."],
      side: "**Behind the scenes,** the team's photos from the build.",
      imgs: [
        pic("bts-1-eyes.jpg", 338, 422, "The two OLED eyes being tested"),
        pic("bts-2-wiring.jpg", 413, 516, "Breadboard wiring with the ultrasonic sensors"),
        pic("bts-3-power.jpg", 431, 538, "Battery pack and voltage regulator on the bench"),
        pic("bts-4-servo.jpg", 630, 787, "Servo fixed to the lid"),
      ],
    },

    // ------------------------------------------------------------- 10 OUTCOME
    {
      type: "opener",
      id: "outcome",
      num: "10",
      label: ["Outcome", "What came out of it"],
      lead: "What came out of eleven days: a working bin, about ten days in a classroom, and a seminar presentation.",
    },
    {
      type: "proto",
      tone: "warm",
      head: ["Both paths, ", "working on a real bin."],
      side: "**Demo videos** recorded by the team during the project. They open on Google Drive.",
      img: pic("slide-41.png", 1294, 998, "BINA, the finished prototype, standing in a corridor with its eyes lit"),
      scenarios: [
        { label: "Scenario 01", title: "Clean throw", flow: ["Waste goes in"], end: "Happy eyes + “Dhanyavaad.”", cta: "Watch Scenario 01", href: VIDEO_1 },
        { label: "Scenario 02", title: "Miss", flow: ["Lands outside", "Request to pick it up", "Picked up"], end: "Happy eyes + habit line", cta: "Watch Scenario 02", href: VIDEO_2 },
      ],
      link: { label: "View the code", href: BINA_CODE },
    },
    {
      type: "classroom",
      head: ["About ten days ", "in a real classroom."],
      side: "**After the build,** BINA stood in a classroom. What is described was observed by the team, not counted.",
      dur: { label: "In daily use", n: "~10", unit: "days", text: "In a classroom, after the build." },
      obs: ["Misses picked up after the prompt.", "People responded well to the eyes and voice."],
      chip: "Observed, not counted",
    },
    {
      type: "seminar",
      tone: "warm",
      head: ["Presented at a seminar on ", "emerging technologies."],
      facts: [
        ["Event", "One-Day Seminar on Emerging Technologies for a Sustainable and Intelligent Future"],
        ["Sub-theme", "Climate Change Technologies"],
        ["Format", "Presented in person, with the poster"],
      ],
      note: "The team's seminar poster. Names, team ID and contact details are hidden.",
      img: pic("seminar-poster.png", 715, 1010, "BINA seminar poster"),
    },
    {
      type: "achieved",
      head: ["What BINA ", "achieved."],
      side: "**Rewritten from the team's conclusion** (slide 49). Classroom effects observed, not counted.",
      label: "In one line",
      line: ["From passive infrastructure to ", "a bin that notices, asks and thanks,", " built from off-the-shelf parts for ₹2,898."],
      crit: [
        { title: CRITERIA[0], status: "Not measured", kind: "no" },
        { title: CRITERIA[1], status: "Observed in class", kind: "ob" },
        { title: CRITERIA[2], status: "Addressed, not measured", kind: "ad" },
        { title: CRITERIA[3], status: "Observed in class", kind: "ob" },
      ],
    },

    // -------------------------------------------------------- 11 FUTURE SCOPE
    {
      type: "opener",
      id: "future-scope",
      num: "11",
      label: ["Future Scope", "What comes next"],
      lead: "Proving the effect, fixing what the prototype cannot do, and where a finished BINA could go.",
    },
    {
      type: "study",
      tone: "warm",
      head: ["Seen working. ", "Next, count it."],
      side: "**Proposed study, not carried out.** One measure for each success criterion.",
      weeks: [
        { label: "Baseline", title: "Plain bin", text: "1 week", span: 1 },
        { label: "Intervention", title: "BINA in place", text: "2 weeks", span: 2, on: true },
        { label: "Follow-up", title: "Plain bin again", text: "1 week: does the habit stay?", span: 1 },
      ],
      metrics: [
        { title: CRITERIA[0], text: "Misses per day around the bin, counted at a fixed time." },
        { title: CRITERIA[1], text: "Share of prompts followed by a pick-up, from BINA's own event log.", on: true },
        { title: CRITERIA[2], text: "Times the lid or voice fires with no person or no miss, from the log and spot checks." },
        { title: CRITERIA[3], text: "A short, anonymous three-question card for people who used it." },
      ],
      log: { label: "Event log", events: ["approach", "clean throw", "miss", "corrected", "not corrected"], note: "Events and times only · no camera, no audio, no names" },
    },
    {
      type: "pairs",
      head: ["Every gap in the prototype ", "is the next feature."],
      side: "**Limitations from the team's evaluation** (slide 48); upgrades proposed.",
      cols: ["Limitation", "Upgrade"],
      rows: [
        { title: "Front-only coverage", text: "Sensors or a floor mat that cover every side, including drops behind the bin." },
        { title: "One person at a time", text: "Telling two people apart, so the right person is thanked or asked." },
        { title: "Battery dependency", text: "A low-battery warning on the eyes, and a mains option where a socket is near." },
        { title: "Fixed distance thresholds", text: "Ranges set on site during installation, since rooms and floors differ." },
        { title: "No data logging", text: "The event log above, also useful to housekeeping: when is the bin busiest?" },
      ],
      later: { label: "Later", title: "Waste classification upgrade", text: "A camera-based model that sorts dry, wet and recyclable waste (slide 48). Kept for later: the problem today is waste missing the bin, not mixed waste inside it. If added, the camera should see the waste, not the people." },
    },
    {
      type: "road",
      tone: "warm",
      head: ["Built for one person at a time, ", "so it goes where people come one by one."],
      side: "**Places named by the team** (slides 46, 48; poster). Order by readiness set for this case study.",
      stages: [
        { kind: "now", label: "Now", title: "Classrooms and offices", text: "Matches the prototype: indoors, one person at a time.", items: [] },
        { kind: "nxt", label: "Next", title: "Airports", text: "Travellers tend to reach a bin one by one, so the single-user logic still holds.", items: ["Louder audio", "Voice lines beyond Hindi"] },
        { kind: "lat", label: "Later · needs multi-person sensing", title: "Crowded public places", text: "Railway stations and other busy spaces.", items: ["Larger-capacity variants, same sensing and logic", "Work with municipal bodies under smart city and public sanitation programmes"] },
      ],
      strip: [
        ["Product", "Lighter, modular casing for easier moving and installation."],
        ["Cost", "Prototype ₹2,898, to be brought down for wider use."],
      ],
    },
    {
      type: "sdg",
      head: ["Three goals it ", "points toward."],
      side: "**Added for this case study;** not part of the original project. Target wording from the UN 2030 Agenda. No impact on these goals was measured.",
      goals: [
        { img: pic("sdg-11.png", 250, 250, "SDG 11 icon"), title: "Sustainable Cities and Communities", target: "Target 11.6 · municipal waste management", text: "Cleaner shared spaces through better disposal at the bin." },
        { img: pic("sdg-12.png", 250, 250, "SDG 12 icon"), title: "Responsible Consumption and Production", target: "Targets 12.8 · 12.5 with sorting", text: "A habit built at the moment of disposal." },
        { img: pic("sdg-13.png", 250, 250, "SDG 13 icon"), title: "Climate Action", target: "Target 13.3 · awareness", text: "Everyday awareness of waste; the weakest of the three links.", weak: true },
      ],
      credit: "SDG icons: United Nations",
    },

    // --------------------------------------------------------- 12 LIMITATIONS
    {
      type: "opener",
      id: "limitations",
      num: "12",
      label: ["Limitations", "What it cannot claim"],
      lead: "Where the system, the prototype, the research and the testing fall short.",
    },
    {
      type: "groups",
      tone: "warm",
      head: ["Four places it falls short, ", "said plainly."],
      side: "**From the team's evaluation** (slide 48) and from what each chapter above could not show.",
      groups: [
        {
          label: "The system",
          title: "A narrow, controlled setting.",
          intro: "BINA works where it was tuned.",
          items: [
            ["Ultrasonic sensing", "Readings change with the surface, shape and size of the waste and with nearby noise."],
            ["Front-facing coverage", "Drops behind the bin, or far to its sides, are not detected."],
            ["Fixed thresholds", "Ranges were tuned for one room and one bin; a new space would need retuning."],
            ["One person at a time", "It cannot tell two people apart, so it may thank or ask the wrong person."],
            ["Battery powered", "It needs regular charging, and behaviour can suffer as the voltage drops."],
          ],
        },
        {
          label: "The prototype",
          title: "A working prototype, not a product.",
          intro: "Built for the brief.",
          items: [
            ["Built in eleven days", "A plastic bin, a cardboard head and a breadboard."],
            ["No data logging", "It does not record what happens, so its own use cannot be reviewed."],
          ],
        },
        {
          label: "Research and synthesis",
          title: "It shaped the idea; it does not prove the problem's size.",
          intro: "What the research was, and was not.",
          items: [
            ["Informal observation", "Campus bins were observed informally and described from memory; no photos, counts or notes."],
            ["No interviews", "Phrases in the empathy map were heard informally and paraphrased."],
            ["Assumed personas", "Kabir, Ritu and Ramesh are archetypes, not people who were studied."],
            ["Built afterwards", "The affinity diagram, mental model and service blueprint were synthesised for this case study."],
            ["Informal ideation", "Alternatives were discussed, not scored; role-play was not recorded."],
          ],
        },
        {
          label: "Testing and evidence",
          title: "Tested until it worked, not measured for its effect.",
          intro: "The biggest gap, and the next step.",
          dark: true,
          items: [
            ["Drops not counted", "Throws and misses were simulated many times, with no hit rate or false-trigger rate."],
            ["No structured test with people", "Classmates used it, but their reactions were not noted."],
            ["Observed, not measured", "In about ten days of classroom use, people picked up misses and responded well; nothing was counted."],
            ["Criteria unmeasured", "Two of four were observed in use; none has a measured result. A study is proposed above."],
            ["Tuning values not recorded", "Fixes were not logged with before-and-after values."],
          ],
        },
      ],
    },

    // ----------------------------------------------------------- 13 LEARNINGS
    // First person: the one exception to the neutral voice.
    {
      type: "opener",
      id: "learnings",
      num: "13",
      label: ["Learnings", "What I took away"],
      lead: "What designing a physical, behaviour-changing product taught me, and what I would do differently.",
    },
    {
      type: "groups",
      tone: "warm",
      head: ["What I would carry ", "into the next project."],
      side: "**In my own words,** the one part of this case study written in the first person.",
      groups: [
        {
          label: "On behaviour",
          title: "It changed where I looked for the problem.",
          items: [
            ["Most misses are unnoticed, not careless", "People rarely check where their waste lands, so the design had to make the miss visible instead of blaming the person."],
            ["Timing is the interaction", "Feedback only works while the person is still at the bin; a few seconds later, the moment has passed."],
          ],
        },
        {
          label: "On building",
          title: "A physical product taught me what a screen never had.",
          items: [
            ["The code is the real specification", "Our slides and our code described different ranges and states; what people experience is whatever runs."],
            ["Hardware limits shape the experience", "Power, memory and sensor timing decided how smooth the eyes looked and when the voice could play."],
            ["Test each part alone first", "Separate test programs made problems far easier to find once everything was joined."],
          ],
        },
        {
          label: "Next time",
          title: "Four things I would do differently.",
          dark: true,
          items: [
            ["Count from day one", "A simple event log or tally before and during use, so the effect can be shown, not only seen."],
            ["Record what we observe", "Notes and photos in the classroom, plus a short card for the people using it."],
            ["Run a structured test with people", "Set tasks and watch, not only open use."],
            ["Design for more than one person", "The single-user logic is the first thing a busier space would break."],
          ],
        },
        {
          label: "From architecture to UX",
          title: "My training showed up in the physical details.",
          items: [
            ["Spatial thinking", "Sensor height, the 30° angles and where the bin stands in a room were design decisions, not technical afterthoughts."],
            ["Systems thinking", "I saw BINA as one system of sensing, deciding and responding, planned together the way a building's services are."],
          ],
        },
      ],
    },
    {
      type: "endCard",
      eyebrow: "BINA · Intelligent Waste Disposal System",
      head: ["Thank you ", "for reading."],
      text: "A bin that notices, asks and thanks. Built in eleven days; the next step is to count what it changes.",
    },
  ],
};
