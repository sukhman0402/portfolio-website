// BINA (Intelligent Waste Disposal System) case study: everything on
// /projects/intelligent-waste-disposal-system below the hero image.
//
// v2 LAYOUT (Sukhman, 2026-10-05): an open, editorial flow after the
// Snabbit Kavach case study (adikrz.netlify.app/snabbit-kavach), replacing
// the boxed v1. Per stage: a small grey label, a large two-tone heading, a
// short intro, then numbered steps ("1. Title" + text) with the team's own
// slides (the ones marked green in the Figma Documentation) as visuals.
// Lists are open text with hairlines, not cards or capsule tags.
//
// Copy comes from the FINAL stage docs (Placement Drive project,
// claude/bina/01-overview.md to 13-learnings.md). Behaviour values follow
// the code that ran (main.ino), not the slides, where the two differ.
// No em dashes anywhere (site rule).
//
// SHAPE (read by ProjectHeroTop.js and BinaFlow.js):
//   sections[] { id, tocLabel, flow: "bina", heading: { lead, accent },
//                intro, blocks: [block], panel?, closing? }
//   block types (BinaFlow.js renders each):
//     step    { num, title, text }            numbered sub-heading + text
//     image   { src, width, height, alt, framed?, caption? }
//     list    { items: [{ title, text, meta? }], cols?, numbered? }
//     groups  { items: [{ title, points: [] }], cols? }
//     quote   { lead, accent }                large statement band
//     stats   { items: [{ value, label }] }
//     photos  { images: [...] }
//     people  { items: [{ photo, name, role, moment, rows: [[k, v]] }], note }
//     spec    { rows: [[label, value]] }
//     links   { items: [{ label, href, ghost? }] }
//     goals   { items: [{ icon, title, target, text }] }
//     note    { text }                        small grey line
//
// IMAGES: public > images > projects > intelligent-waste-disposal-system >
// v2 > *. Slide visuals were cropped from the Figma Documentation (team
// work) with the white page tinted to the frame colour.

const IMG = "/images/projects/intelligent-waste-disposal-system/v2";
const img = (file, width, height, alt, extra = {}) => ({ type: "image", src: `${IMG}/${file}`, width, height, alt, ...extra });
const slide = (n, width, height, alt, extra = {}) => img(`slide-${n}.png`, width, height, alt, { framed: true, ...extra });
const step = (num, title, text) => ({ type: "step", num, title, text });
const note = (text) => ({ type: "note", text });

const CODE = { label: "View the code", href: "https://github.com/AnujR17/Intelligent-Waste-Disposal-Systems" };

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
      heading: { lead: "The bin was there. ", accent: "Nothing about it responded." },
      intro:
        "Before designing, the team looked closely at the campus bins they used every day, then read what is already known about smart bins and about why people litter.",
      blocks: [
        step(1, "Campus bin audit", "An informal audit of the bins the team used every day, recorded here from memory: no photos, counts or recordings were taken."),
        {
          type: "list",
          numbered: true,
          cols: 2,
          items: [
            { title: "No response.", text: "A throw that misses goes unnoticed; nothing signals it." },
            { title: "Awkward placement.", text: "Bins sit where people do not naturally pass." },
            { title: "Lids people avoid touching.", text: "People throw from a distance instead of opening the lid." },
            { title: "Overflow.", text: "Full bins are not emptied in time." },
            { title: "Throwing in a hurry.", text: "People throw while walking and do not check that it went in." },
          ],
        },
        note("Through the day: clean in the morning, waste lying around by afternoon, the most by night; over time, leaving it becomes normal. Pattern recalled, not measured."),
        step(2, "Context of waste behaviour", "A model of what shapes disposal behaviour, built from observation, reasoning and reading. Each point says where its support comes from."),
        {
          type: "groups",
          cols: 3,
          items: [
            {
              title: "Environmental conditions",
              points: [
                "Existing litter makes more littering likely. Study: Cialdini 1990; Schultz 2013",
                "Lighting affects how visible the bin area is. Team view",
                "Crowding reduces attention to responsibility. Observed on campus",
              ],
            },
            {
              title: "Situational cues",
              points: [
                "Others nearby change behaviour. Study: Bateson 2015",
                "Hurry makes careless throws more likely. Observed",
                "Feedback at the moment can change the action. Study: de Kort 2008; counterpoint Ackerman 2026",
              ],
            },
            {
              title: "Surrounding infrastructure",
              points: [
                "Distance to a bin changes whether waste goes in. Study: Schultz 2013; Robinson 2023",
                "How visible a bin is affects its use. Study, partial: Linder 2023",
                "A bin that cannot respond gives no reason to correct a miss. Team view",
              ],
            },
          ],
        },
        note("Crowding was observed on campus; studies in other settings found people litter less when others are around, so this point is local, not general."),
        step(3, "Literature review", "Smart-bin research and behaviour research were read side by side. Sources were checked at abstract level; \"for BINA\" is the team's implication, not the authors' claim."),
        {
          type: "list",
          cols: 2,
          items: [
            { title: "Smart bins report fill levels.", text: "Sensors tell collection crews how full a bin is; the user is not part of the loop.", meta: "Neema & Gor 2022; Ahmed et al. 2024" },
            { title: "Litter signals that littering is normal.", text: "Disorder spreads once it is visible.", meta: "Cialdini et al. 1990; Keizer et al. 2008" },
            { title: "A prompting bin cut litter by about half.", text: "In a field study, a bin that prompted people, by words or by design, halved litter.", meta: "de Kort et al. 2008" },
            { title: "Watching eyes reduced littering.", text: "Images of eyes roughly halved littering in a university cafeteria.", meta: "Ernest-Jones et al. 2011" },
            { title: "Voice alone may not be enough.", text: "A motion-triggered voice prompt at bins had no significant effect; bin design did.", meta: "Ackerman et al. 2026" },
            { title: "On-bin AI can sort waste.", text: "The most \"intelligent\" direction so far, and still about the waste, not the person.", meta: "Sallang et al. 2021" },
          ],
        },
        { type: "quote", lead: "The gap: a bin that responds to the person, ", accent: "at the moment of the throw." },
      ],
    },

    // 02 INSIGHTS
    {
      id: "insights",
      tocLabel: "Insights",
      flow: "bina",
      heading: { lead: "Most misses aren't careless. ", accent: "They're unnoticed." },
      intro: "What the audit, the field phrases and the studies add up to: why a miss goes uncorrected, and what a bin would need to do about it.",
      blocks: [
        step(1, "Empathy map", "What a person disposing waste on campus thinks, feels, sees, says and does, from phrases the team heard informally and paraphrased."),
        {
          type: "groups",
          cols: 3,
          items: [
            { title: "Thinks", points: ["\"Someone will clean it.\"", "\"It doesn't matter if it's slightly outside.\"", "\"I'm in a hurry.\""] },
            { title: "Feels", points: ["Indifferent", "Not accountable", "Rushed or distracted"] },
            { title: "Sees", points: ["A bin that does not respond", "Litter already around it", "No one monitoring"] },
            { title: "Says", points: ["\"Ho jaayega.\" (It'll be fine.)", "\"Chalta hai.\" (It's okay.)", "Often, nothing"] },
            { title: "Does", points: ["Throws quickly", "Does not check if it went in", "Walks away without correcting"] },
            { title: "Pain points", points: ["No feedback at the moment", "No reinforcement for doing it right", "No reminder of the shared space"] },
          ],
        },
        step(2, "Key insights", "Each insight traces back to what was observed and the pattern behind it."),
        {
          type: "list",
          numbered: true,
          big: true,
          items: [
            { title: "People cannot correct what they do not notice.", text: "Feedback has to come at the moment of the throw, from the bin itself.", meta: "Waste lands outside and nothing happens; people do not check." },
            { title: "The first miss matters most.", text: "Getting it picked up keeps the area, and the norm, clean.", meta: "Litter builds from afternoon to night; existing litter invites more (Cialdini 1990; Keizer 2008)." },
            { title: "The correction must be quick, specific and polite.", text: "Then thank the person; a scolding bin would be ignored or resented.", meta: "Bins with explicit anti-litter messages collected less than plain bins in a street trial (Linder et al. 2023)." },
          ],
        },
      ],
    },

    // 03 DEFINE
    {
      id: "define",
      tocLabel: "Define",
      flow: "bina",
      heading: { lead: "One bin, ", accent: "three people with a stake in it." },
      intro: "Who BINA is for, what it has to get right, and the problem it answers.",
      blocks: [
        step(1, "Personas", "Three people meet the same bin in different ways: the one who throws, the one who teaches in the room, and the one who cleans up after both."),
        {
          type: "people",
          items: [
            {
              photo: `${IMG}/kabir.png`,
              name: "Kabir",
              role: "Student",
              moment: "Throws a wrapper while walking to class.",
              rows: [
                ["Wants", "Get to class on time; not be singled out."],
                ["Struggles", "Does not see that the throw missed; \"someone will clean it\"."],
                ["Needs from BINA", "A quick, polite signal at the moment, and a thank-you."],
              ],
            },
            {
              photo: `${IMG}/ritu.png`,
              name: "Ritu",
              role: "Faculty member",
              moment: "Teaches in the room where the bin stands.",
              rows: [
                ["Wants", "A clean room without having to police students."],
                ["Struggles", "Reminding students feels like nagging; litter builds anyway."],
                ["Needs from BINA", "The bin does the reminding, without scolding."],
              ],
            },
            {
              photo: `${IMG}/ramesh.png`,
              name: "Ramesh",
              role: "Housekeeping staff",
              moment: "Cleans around bins, most of it late in the day.",
              rows: [
                ["Wants", "Less waste on the floor; bins that are easy to empty."],
                ["Struggles", "Litter grows from afternoon to night; overflowing bins."],
                ["Needs from BINA", "Fewer misses to pick up; a bin that does not add work."],
              ],
            },
          ],
          note: "Assumed personas built from the audit, field phrases and literature; names are fictional. AI-generated portraits, not real people.",
        },
        step(2, "Success criteria", "Four things BINA had to get right. Testing and Outcome report against each one."),
        {
          type: "list",
          numbered: true,
          cols: 2,
          items: [
            { title: "Waste lands inside.", text: "Fewer throws miss the bin." },
            { title: "A miss gets picked up.", text: "The prompt leads the person to correct it." },
            { title: "No false triggers.", text: "The lid and voice react only to real people and real misses." },
            { title: "Friendly, not scolding.", text: "People respond well to the tone and the eyes." },
          ],
        },
        note("Assumed setting: an indoor classroom or corridor, one person at a time, waste dropped from about arm's length, battery-powered with no network."),
        step(3, "Problem statement", "Improper waste disposal persists because traditional bins lack real-time detection and corrective feedback, resulting in unmonitored and irresponsible environmental behaviour."),
        slide("11", 1278, 296, "Behavioral Negligence, with four tags: passive infrastructure, interactive intervention, environmental responsibility, autonomous monitoring."),
        step(4, "Design opportunity", "The gap between intention and action pointed to one place to intervene: the dustbin itself, turned from a static container into a system that perceives, decides and gives feedback."),
        slide("15", 1524, 1014, "Outline drawing of a swing-lid dustbin, the chosen intervention point.", { maxw: 560 }),
      ],
    },

    // 04 IDEATION
    {
      id: "ideation",
      tocLabel: "Ideation",
      flow: "bina",
      heading: { lead: "Firm in correction, ", accent: "soft in appreciation." },
      intro: "From the insights to a behaviour: what BINA should be like, how it should speak, and what happens at every step of a throw.",
      blocks: [
        step(1, "Alternatives considered", "Three other directions were discussed informally and set aside, each for a reason."),
        {
          type: "list",
          cols: 3,
          items: [
            { title: "Lights or a buzzer only.", text: "Easy to ignore: a beep does not say what to do." },
            { title: "An English voice.", text: "Hindi felt more relatable for the people using these bins." },
            { title: "A waste-sorting bin.", text: "The wrong problem: waste was missing the bin, not landing mixed inside it." },
          ],
        },
        note("Chosen: sensors to notice the miss, a lid that opens for the person, eyes that react, and a short Hindi line that asks, then thanks."),
        step(2, "Personality framework", "Defined before the build, so the voice and eyes would correct people without scolding them."),
        {
          type: "spec",
          rows: [
            ["Brand archetype", "Caregiver + Guide: supports users while gently correcting their actions."],
            ["Behavioural role", "A silent supervisor that steps in only when needed."],
            ["Interaction tone", "Polite, direct, never aggressive."],
            ["Voice", "Clear Hindi prompts, short sentences, neutral to friendly."],
            ["Trust and authority", "Moderate: firm in correction, soft in appreciation."],
            ["Humanisation", "Animated eyes and spoken language suggest awareness."],
            ["Perception goal", "Seen as helpful, not as authority or punishment."],
            ["Experience promise", "Throwing waste becomes a short, guided exchange."],
          ],
        },
        step(3, "System concept", "Six layers, one loop from noticing a person to reinforcing what they did."),
        slide("17", 1275, 809, "System concept: user detection, decision logic, actuation, feedback interface, audio interaction and behaviour reinforcement layers."),
        step(4, "Interaction strategy", "Six rules turn the personality into behaviour. \"Once per event\" is confirmed in the code: each line plays once per state change, never on a loop."),
        slide("21", 927, 675, "Interaction strategy: proactive engagement, immediate feedback, behavioural reinforcement, corrective prompting, conversational nudging, state-based logic control."),
        step(5, "Scenarios and user flow", "Two scenarios, a clean throw and a miss, were mapped step by step and acted out informally before the logic was built."),
        slide("18", 1166, 496, "Scenario 01, Successful Disposal; Scenario 02, Incorrect Disposal.", { maxw: 620 }),
        slide("19", 1200, 789, "User flow for both scenarios, from approach to reset."),
        note("The code that ran adds a third ending: if the waste is still outside after the 5-second re-check, the eyes turn angry and BINA stays silent."),
      ],
    },

    // 05 DESIGN
    {
      id: "design",
      tocLabel: "Design",
      flow: "bina",
      heading: { lead: "Six blocks, ", accent: "one microcontroller in the middle." },
      intro: "The hardware and logic underneath, then what a person meets at the bin: the eyes, the voice and the brand.",
      blocks: [
        step(1, "Information architecture", "How inputs, states and outputs are organised, from the person entering range to the reset."),
        slide("23", 1018, 1367, "Information architecture: start, user enters range, distance data, lid opens, active eyes, is waste inside; yes and no branches to reset.", { maxw: 640 }),
        step(2, "System block diagram", "Six blocks placed on the bin: input, processing, actuation, visual and audio feedback, and power."),
        slide("24", 1270, 845, "Block diagram drawn on the bin, numbered 1 to 6.", { maxw: 640 }),
        step(3, "Components", "Off-the-shelf parts, wired on a breadboard so each could be tested alone before integration."),
        slide("26", 1159, 755, "Components with photos: ultrasonic sensors, Arduino Uno R3, SG90 servo, OLED displays, MP3 module, LM2596 regulator, speaker, breadboard, 18650 batteries, jumper wires."),
        step(4, "Circuit diagram", "How power and signal reach every module, with the LM2596 giving a steady 5 V."),
        slide("27", 1058, 770, "Circuit diagram: three HC-SR04 sensors, Arduino Uno, DY-SV5W MP3 module, speaker, servo, two OLEDs and the LM2596 regulator."),
        step(5, "Power management", "Running six modules from batteries meant regulating the supply, because the servo's current spikes could reset the Arduino."),
        {
          type: "spec",
          rows: [
            ["Source", "2 × 18650 Li-ion, 3.7 V each, 7.4 V nominal, 8.4 V full, 2200 mAh per cell"],
            ["Regulation", "LM2596 step-down: up to 40 V in, steady 5 V out, up to 3 A"],
            ["Biggest load", "SG90 servo, 200 to 700 mA while moving"],
            ["Without it", "Voltage drops, servo jitter, random resets, distorted audio"],
          ],
        },
        note("Currents are typical ratings from the team's power plan, not measured."),
        step(6, "Sensor placement", "Three sensors sit low on the front: the centre one watches for the person, the two angled ones watch the floor for a miss."),
        {
          type: "spec",
          rows: [
            ["Centre sensor", "Straight ahead. Person detected at 20 to 40 cm; waste in front under 20 cm"],
            ["Side sensors", "Angled 30° left and right. Waste on the floor under 30 cm"],
            ["Height", "2 inches above the floor, on the front face of a ~45 cm bin"],
            ["Gap", "Drops behind the bin are not covered"],
          ],
        },
        note("Ranges from the code that ran."),
        step(7, "Emotion board", "Each state of the logic has a face and, where it helps, a short Hindi line. The eyes also look toward the miss: left or right for a side sensor, down for the centre."),
        slide("20", 1118, 653, "Emotion board: happy, dissatisfied, neutral and sympathetic eyes with trigger, visual, audio and purpose."),
        step(8, "Voice", "Lines generated with ElevenLabs text to speech, played once per event."),
        {
          type: "spec",
          rows: [
            ["Clean throw", "\"Dhanyavaad.\" (Thank you.)"],
            ["Miss", "\"Arey! Arey! Arey! Lagta hai aapse kachra bahar gir gya hai. Kripya isse uthaaye aur andar daale.\" (Oh! Looks like your waste fell outside. Please pick it up and put it in.)"],
            ["Picked up", "\"Dhanyavaad! Safai ko zimmedari nahi, aadat banaiye.\" (Thank you! Make cleanliness a habit, not a duty.)"],
            ["Still outside", "Angry eyes, no voice"],
          ],
        },
        step(9, "Brand identity", "The name hides the object inside it: BIN, with the A drawn as a bin."),
        slide("43", 1270, 400, "BINA logo: BIN in black, the A drawn as a bin in a green gradient."),
        slide("44", 1258, 690, "Palette: #026D00, #3FAE5A, #000000, #9A9A9A.", { maxw: 620 }),
        slide("04", 1169, 195, "Slogan in Hindi: safai ko zimmedari nahi, aadat banao. Make cleanliness a habit, not a duty."),
        step(10, "Product specification", "What the built prototype is, in one place."),
        {
          type: "spec",
          rows: [
            ["Size", "About 45 cm tall, sensors 2 inches above the floor"],
            ["Body", "Plastic dustbin with a cardboard head for the eyes and speaker"],
            ["Power", "2 × 18650 cells, regulated to 5 V; recharged periodically"],
            ["Network", "Standalone, none"],
            ["Prototype cost", "₹2,898"],
          ],
        },
      ],
    },

    // 06 TESTING
    {
      id: "testing",
      tocLabel: "Testing",
      flow: "bina",
      heading: { lead: "Four parts tested alone, ", accent: "then joined into one program." },
      intro: "How BINA was tested: each part on its own, then together, then drop after drop until the loop held.",
      blocks: [
        step(1, "Component tests", "Each part had its own small program before the parts were combined. All five files are public on GitHub."),
        {
          type: "list",
          numbered: true,
          cols: 2,
          items: [
            { title: "Ultrasonic sensors.", text: "Read all three in turn and print the distances, spaced so they don't pick up each other's echo." },
            { title: "Servo motor.", text: "Sweep between 0° and 180° to check the full range of the lid." },
            { title: "OLED eyes.", text: "Cycle every expression on command, drawn in a low-memory mode so two screens fit on one Uno." },
            { title: "MP3 module and speaker.", text: "Play the three voice files one after another." },
          ],
        },
        slide("35", 1294, 998, "The integrated program, main.ino, open on GitHub.", { framed: false }),
        step(2, "Building it", "The team's assembly sequence, from preparing the bin body to final system testing."),
        {
          type: "list",
          numbered: true,
          cols: 2,
          compact: true,
          items: [
            { title: "Dustbin body preparation" },
            { title: "Servo motor installation" },
            { title: "Ultrasonic sensor mounting" },
            { title: "OLED display installation" },
            { title: "Audio system integration" },
            { title: "Microcontroller setup" },
            { title: "Power system installation" },
            { title: "Breadboard and wiring" },
            { title: "Software upload and calibration" },
            { title: "Final system testing" },
          ],
        },
        {
          type: "photos",
          images: [
            { src: `${IMG}/bts-1-eyes.jpg`, alt: "The cardboard head with both OLED eyes lit, during wiring." },
            { src: `${IMG}/bts-2-wiring.jpg`, alt: "Sensors, Arduino and breadboard wired on a desk." },
            { src: `${IMG}/bts-3-power.jpg`, alt: "Checking the regulated supply with a multimeter." },
            { src: `${IMG}/bts-4-servo.jpg`, alt: "Fitting the servo to the lid of the bin." },
            { src: `${IMG}/bts-5-head.jpg`, alt: "The head mounted on the bin with the lid in place." },
            { src: `${IMG}/bts-6-inside.jpg`, alt: "Inside the bin: Arduino and wiring." },
          ],
          caption: "Behind the scenes: wiring trials, power checks and fitting the lid.",
        },
        step(3, "Problems and fixes", "Joining the parts surfaced five problems; each changed the build. Tuning values were not recorded."),
        {
          type: "list",
          cols: 1,
          items: [
            { title: "Power drops and resets.", text: "Two 18650 cells through a step-down regulator to a steady 5 V, sized for the servo's peaks." },
            { title: "Missed drops at the sides.", text: "Side sensors angled 30° outward, covering the floor in front of the bin." },
            { title: "Audio playing at the wrong time.", text: "Trigger pins held off at start-up, a pause while the module boots, each line played once per event." },
            { title: "Lid motor out of line.", text: "Servo angle and lid attachment reworked. The team nearly dropped the automatic lid, but kept it: the opening lid is BINA's first signal that it has noticed the person." },
            { title: "Sensor placement and accuracy.", text: "Sensors set 2 inches above the floor; readings spaced so the three don't interfere." },
          ],
        },
        note("Trade-off: the final code shortened the gap between sensor readings from 50 ms to 5 ms (README) so the eyes animate smoothly, giving up some accuracy for a livelier face."),
        step(4, "Simulated drops", "Clean throws and misses were simulated again and again to check every branch of the loop: clean throw, miss, corrected miss and lid reset. Classmates also tried it. Neither the drops nor their reactions were counted."),
      ],
    },

    // 07 OUTCOME
    {
      id: "outcome",
      tocLabel: "Outcome",
      flow: "bina",
      heading: { lead: "A working bin, ", accent: "in a real classroom." },
      intro: "What came out of eleven days: a working bin, about ten days in a classroom, and a seminar presentation.",
      blocks: [
        step(1, "The working prototype", "BINA was built and run end to end: it notices a person, opens its lid, checks where the waste lands and responds. The two demo videos show both paths."),
        img("slide-41.png", 1294, 998, "The built BINA prototype: a green plastic bin with a white cardboard head, two OLED eyes and sensors at the base."),
        {
          type: "links",
          items: [
            { label: "Watch Scenario 01: clean throw", href: "https://drive.google.com/file/d/1POXU-sRi890xy3vhEFz6msuPgay7ICIU/view?usp=sharing" },
            { label: "Watch Scenario 02: a miss, then a second chance", href: "https://drive.google.com/file/d/1ZH1XbvYx0g8k8Is_SVQKNplau_fcEKek/view?usp=sharing" },
            { ...CODE, ghost: true },
          ],
        },
        step(2, "In the classroom", "After the build, BINA stood in a classroom for about ten days. The team saw people pick up their misses after the prompt and respond well to the eyes and voice."),
        {
          type: "stats",
          items: [
            { value: "~10", label: "days in daily classroom use" },
            { value: "2 of 4", label: "success criteria seen in use, none measured" },
            { value: "₹2,898", label: "prototype cost, off-the-shelf parts" },
          ],
        },
        note("Observed, not counted. How often, and whether it lasts, is for a proper study to show (Future Scope)."),
        step(3, "Seminar presentation", "The team presented BINA in person at a one-day university seminar on emerging technologies, under the sub-theme Climate Change Technologies."),
        img("seminar-poster.png", 715, 1010, "The team's seminar poster, with names and contact details hidden.", { narrow: true }),
        { type: "quote", lead: "From passive infrastructure to a bin that ", accent: "notices, asks and thanks." },
      ],
    },

    // 08 FUTURE SCOPE
    {
      id: "future-scope",
      tocLabel: "Future Scope",
      flow: "bina",
      heading: { lead: "Seen working. ", accent: "Next, count it." },
      intro: "What comes next: proving the effect, fixing what the prototype cannot do, and where a finished BINA could go.",
      blocks: [
        step(1, "Measure the effect", "A simple study, not yet carried out: one week with a plain bin, two weeks with BINA, then one week with the plain bin again to see if the habit stays."),
        {
          type: "spec",
          rows: [
            ["Waste lands inside", "Misses per day around the bin, counted at a fixed time"],
            ["A miss gets picked up", "Share of prompts followed by a pick-up, from BINA's own event log"],
            ["No false triggers", "Times the lid or voice fires with no person or no miss"],
            ["Friendly, not scolding", "A short, anonymous three-question card"],
          ],
        },
        note("The event log records only events and times: no camera, no audio, no names."),
        step(2, "The next version", "Each limitation of the prototype points to an upgrade."),
        {
          type: "list",
          cols: 2,
          items: [
            { title: "Front-only coverage.", text: "Sensors or a floor mat that cover every side, including drops behind the bin." },
            { title: "One person at a time.", text: "Telling two people apart, so the right person is thanked or asked." },
            { title: "Battery dependency.", text: "A low-battery warning on the eyes, and a mains option where a socket is near." },
            { title: "Fixed thresholds.", text: "Ranges set on site during installation, since rooms and floors differ." },
            { title: "No data logging.", text: "The event log above, also useful to housekeeping." },
            { title: "Later: waste sorting.", text: "A camera-based model for dry, wet and recyclable waste; the camera should see the waste, not the people." },
          ],
        },
        step(3, "Where BINA could go", "Built for one person at a time, so it goes where people come one by one: classrooms and offices now; airports next, with louder audio and languages beyond Hindi; crowded places like railway stations later, once it can tell people apart."),
        step(4, "SDG alignment", "Three UN Sustainable Development Goals it points toward. This is alignment with their aims, not a measured contribution."),
        {
          type: "goals",
          items: [
            { icon: `${IMG}/sdg-11.png`, title: "Sustainable Cities and Communities", target: "Target 11.6", text: "Cleaner shared spaces through better disposal at the bin." },
            { icon: `${IMG}/sdg-12.png`, title: "Responsible Consumption and Production", target: "Targets 12.8, 12.5", text: "A habit built at the moment of disposal; recycling with the sorting upgrade." },
            { icon: `${IMG}/sdg-13.png`, title: "Climate Action", target: "Target 13.3", text: "Everyday awareness of waste; the weakest of the three links." },
          ],
        },
        note("SDG icons and colours: United Nations, used for information only; no endorsement implied."),
      ],
    },

    // 09 LIMITATIONS
    {
      id: "limitations",
      tocLabel: "Limitations",
      flow: "bina",
      heading: { lead: "Tested until it worked, observed in use, ", accent: "not yet measured." },
      blocks: [],
      panel: {
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
              { title: "Informal ideation.", text: "Alternatives were discussed, not scored; role-play of the scenarios was not recorded." },
            ],
          },
          {
            title: "Testing and evidence",
            intro: "BINA was tested until it worked, not measured for its effect.",
            points: [
              { title: "Drops not counted.", text: "Clean throws and misses were simulated many times, with no hit rate or false-trigger rate." },
              { title: "No structured test with people.", text: "Classmates used it during testing, but their reactions were not noted." },
              { title: "Observed, not measured.", text: "In about ten days of classroom use, people were seen picking up misses and responding well, but nothing was counted." },
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
      heading: { lead: "A bin taught me ", accent: "where behaviour actually happens." },
      blocks: [],
      panel: {
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
              { title: "Test each part alone first.", text: "Separate test programs made problems far easier to find once everything was joined." },
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
      closing: { title: "Thank you.", links: [CODE, { label: "More projects", href: "/projects", internal: true, ghost: true }] },
    },
  ],
};
