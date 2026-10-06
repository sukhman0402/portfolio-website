// BINA HIGHLIGHTS (5 steps): the sections on
// /projects/intelligent-waste-disposal-system (what "View Project" opens).
// The 13-chapter Deep Dive is on /projects/intelligent-waste-disposal-system/full.
//
// FORMAT: the same Highlights rules as every project
// (claude/case-study-short-format-rules.md, Placement Drive project), rendered
// by src > components > ShortStep.js. BINA only changes the accent (#026D00).
// Content from BINA's FINAL stage docs (claude/bina/04 to 13); plan in
// claude/bina/highlights-deep-dive-plan.md. No em dashes in any copy here.

const ACCENT = "#026D00";
const IMG = "/images/projects/intelligent-waste-disposal-system/v2";
const CODE = "https://github.com/AnujR17/Intelligent-Waste-Disposal-Systems";
const pic = (file, width, height, title, text, alt) => ({ src: `${IMG}/${file}`, width, height, title, text, alt });

export const binaShortCaseStudy = {
  sections: [
    // ------------------------------------------------- 1 RESEARCH & INSIGHT
    {
      id: "research",
      tocLabel: "Research & Insight",
      short: true,
      accent: ACCENT,
      heading: "Research & Insight",
      intro: [
        "Before designing, the team looked closely at the campus bins they used every day, then read what is already known about smart bins and about why people litter.",
        "The look at campus bins was informal and is recalled from memory; the studies were checked one by one at abstract level.",
      ],
      open: { text: "The bin was there.", accent: "Nothing about it responded." },
      parts: [
        {
          heading: "Campus bin audit",
          text: [
            "The team noted what happens at the bins people actually use: how waste is thrown, what the bin does when a throw misses, and how the area around it changes through the day.",
            "The pattern through the day was the clearest: clean in the morning, waste lying around by afternoon, the most by night. Over time, leaving it there becomes normal.",
          ],
          visual: {
            kind: "lines",
            rows: [
              { label: "No response", lines: [{ t: "A throw that misses goes unnoticed; nothing signals it.", accent: true }] },
              { label: "Thrown in a hurry", lines: [{ t: "People throw while walking and do not check that it went in." }] },
              { label: "Lids avoided", lines: [{ t: "People throw from a distance instead of opening the lid." }] },
              { label: "Awkward placement", lines: [{ t: "Bins sit where people do not naturally pass." }] },
              { label: "Overflow", lines: [{ t: "Full bins are not emptied in time." }] },
            ],
            note: "Informal audit, from memory: no photos, counts or recordings were taken.",
          },
        },
        {
          heading: "What studies say",
          text: [
            "Smart-bin research and behaviour research were read side by side, to see what existing bins focus on and what is known about changing behaviour at the bin itself.",
          ],
          visual: {
            kind: "lines",
            rows: [
              { label: "Smart bins today", lines: [{ t: "Sensors report how full a bin is, so collection can be planned. The person using the bin is not part of the loop. (Neema & Gor 2022; Zoumpoulis et al. 2024)" }] },
              { label: "What changes behaviour", lines: [{ t: "A bin that prompted people, by words or by design, cut litter by about half in a field study. (de Kort et al. 2008)" }, { t: "Images of watching eyes roughly halved littering in a university cafeteria. (Ernest-Jones et al. 2011)" }] },
              { label: "Counterpoint", lines: [{ t: "A motion-triggered voice prompt at bins had no significant effect; bin design did. (Ackerman et al. 2026)" }] },
              { label: "The gap", lines: [{ t: "A bin that responds to the person, at the moment of the throw.", accent: true }] },
            ],
            note: "Because voice alone may not be enough, BINA pairs its voice with eyes and a correction loop, and its effect is not claimed as proven.",
          },
        },
        {
          heading: "Empathy map",
          text: [
            "The phrases the team heard around campus bins were mapped into what a person thinks, says and does at the moment of throwing, and where it hurts.",
          ],
          visual: {
            kind: "lines",
            rows: [
              { label: "Thinks", lines: [{ t: "“Someone will clean it.”" }, { t: "“It doesn’t matter if it’s slightly outside.”" }] },
              { label: "Says", lines: [{ t: "“Ho jaayega.” (It'll be fine.)" }, { t: "“Chalta hai.” (It's okay.)" }] },
              { label: "Does", lines: [{ t: "Throws quickly and does not check if it went in.", accent: true }, { t: "Walks away without correcting." }] },
              { label: "Pain points", lines: [{ t: "No feedback at the moment, no reinforcement for doing it right." }] },
            ],
            note: "Phrases heard informally on campus and paraphrased; not recorded interviews.",
          },
        },
        {
          heading: "Key insights",
          text: [
            "The audit, the field phrases and the studies were read together. Three insights shaped what BINA does.",
          ],
          visual: {
            kind: "insights",
            rows: [
              { no: "01", title: "Misses are unnoticed, not careless", from: "Waste lands outside and nothing happens; people do not check.", cap: "Feedback has to come at the moment of the throw, from the bin itself.", accent: true },
              { no: "02", title: "The first miss matters most", from: "Litter builds from afternoon to night; existing litter invites more (Cialdini 1990; Keizer 2008).", cap: "Getting the first miss picked up keeps the area, and the norm, clean." },
              { no: "03", title: "Tone decides the response", from: "Bins with explicit anti-litter messages collected less than plain bins in a street trial (Linder et al. 2023).", cap: "The correction must be quick, specific and polite, then thank the person." },
            ],
          },
        },
      ],
      close: { text: "People cannot correct", accent: "what they do not notice." },
    },
    // ------------------------------------------------------------ 2 CONCEPT
    {
      id: "concept",
      tocLabel: "Concept",
      short: true,
      accent: ACCENT,
      heading: "Concept",
      intro: [
        "From the insights to a behaviour: who BINA is for, what it had to get right, how it should sound, and what happens at every step of a throw.",
      ],
      open: { text: "One bin,", accent: "three people with a stake in it." },
      parts: [
        {
          heading: "Personas",
          text: [
            "Three people meet the same bin in different ways: the one who throws, the one who teaches in the room, and the one who cleans up after both.",
          ],
          visual: {
            kind: "personas",
            people: [
              { photo: `${IMG}/kabir.png`, name: "Kabir", type: "Student", line: "Doesn't see the miss, so BINA has to see it for him.", points: ["Throws while walking to class", "Needs a quick, polite signal and a thank-you"] },
              { photo: `${IMG}/ritu.png`, name: "Ritu", type: "Faculty member", line: "Wants a clean room without being the one who nags.", points: ["Reminding students feels like nagging", "Needs the bin to do the reminding"] },
              { photo: `${IMG}/ramesh.png`, name: "Ramesh", type: "Housekeeping staff", line: "Picks up every miss that nobody else noticed.", points: ["Litter grows from afternoon to night", "Needs fewer misses, and no extra work"] },
            ],
            note: { lead: "Assumed archetypes, not people who were studied.", bold: "Names are fictional.", rest: "AI-generated portraits, not real people." },
          },
        },
        {
          heading: "Success criteria",
          text: [
            "Before building, the team set four things BINA had to get right. Testing and the classroom are reported against each one.",
          ],
          visual: {
            kind: "lines",
            rows: [
              { label: "01 Inside", lines: [{ t: "Waste lands inside: fewer throws miss the bin." }] },
              { label: "02 Picked up", lines: [{ t: "A miss gets picked up: the prompt leads the person to correct it.", accent: true }] },
              { label: "03 No false triggers", lines: [{ t: "The lid and voice react only to real people and real misses." }] },
              { label: "04 Friendly", lines: [{ t: "Friendly, not scolding: people respond well to the tone and the eyes." }] },
            ],
          },
        },
        {
          heading: "Three ideas dropped",
          text: [
            "Three other directions were discussed informally and set aside. The team chose sensors to notice the miss, a lid that opens for the person, eyes that react, and a short Hindi line that asks, then thanks.",
          ],
          visual: {
            kind: "pairs",
            rows: [
              ["Lights or a buzzer only", "Easy to ignore", "A beep does not say what to do."],
              ["An English voice", "Less relatable", "Hindi felt closer to the people using these bins."],
              ["A waste-sorting bin", "The wrong problem", "Waste was missing the bin, not landing mixed inside it."],
            ],
          },
        },
        {
          heading: "Personality",
          text: [
            "How BINA should behave and speak was defined before the build, so the voice and eyes would correct people without scolding them.",
          ],
          visual: {
            kind: "lines",
            rows: [
              { label: "Archetype", lines: [{ t: "Caregiver + Guide: supports people while gently correcting them." }] },
              { label: "Tone", lines: [{ t: "Polite, direct, never aggressive; clear Hindi in short sentences." }] },
              { label: "Authority", lines: [{ t: "Firm in correction, soft in appreciation.", accent: true }] },
              { label: "Perception goal", lines: [{ t: "Seen as helpful, not as authority or punishment." }] },
            ],
          },
        },
        {
          heading: "From throw to response",
          text: [
            "Two scenarios, a clean throw and a miss, were mapped step by step and acted out informally before the logic was built.",
            "The flow below follows the code that ran, which adds a third ending: if the waste is still outside after the re-check, the eyes turn angry and BINA stays silent.",
          ],
          visual: {
            kind: "flow",
            steps: [
              { tag: "1 · Notice", title: "A person comes close", items: ["Centre sensor sees someone at 20 to 40 cm", "The lid opens and the eyes wake"] },
              { tag: "2 · Check", title: "Where did the waste land?", items: ["Three sensors check for 5 seconds", "Clean throw: happy eyes and “Dhanyavaad.” (Thank you.)"] },
              { tag: "3 · Respond", title: "A miss gets a second chance", items: ["A polite Hindi request to pick it up", "Picked up within 5 seconds: thanks and the habit line", "Still outside: angry eyes, no voice"], accent: true },
            ],
          },
        },
      ],
      close: { text: "Every throw ends in", accent: "a thank-you, or a second chance." },
    },

    // ------------------------------------------------------------- 3 DESIGN
    {
      id: "design",
      tocLabel: "Design",
      short: true,
      accent: ACCENT,
      heading: "Design",
      intro: [
        "The hardware and logic underneath, then what a person meets at the bin: the lid, the eyes, the voice and the brand.",
      ],
      open: { text: "One sensor watches the person.", accent: "Two watch the floor." },
      parts: [
        {
          heading: "System",
          text: [
            "Six blocks connect input to response. Sensors feed an Arduino, which drives the lid, the eyes and the voice. Two batteries run everything through a regulator that holds a steady 5 V, because the servo's current spikes could reset the Arduino.",
          ],
          visual: {
            kind: "flow",
            steps: [
              { tag: "1 · Input", title: "Three ultrasonic sensors", items: ["Centre: the person", "Two sides, angled 30°: the floor"] },
              { tag: "2 · Processing", title: "Arduino Uno R3", items: ["Distance ranges", "Timers and states"] },
              { tag: "3 · Response", title: "Lid, eyes and voice", items: ["SG90 servo opens the lid", "Two OLED screens show the eyes", "MP3 module and speaker play Hindi lines"], accent: true },
            ],
          },
        },
        {
          heading: "Sensor placement",
          text: [
            "Three sensors sit low on the front of the bin. The centre one watches for the person; the two angled ones watch the floor for a miss. Drops behind the bin are not covered.",
          ],
          visual: {
            kind: "numbers",
            size: "mid",
            items: [
              { value: "20 to 40", small: " cm", cap: "centre sensor: a person is at the bin" },
              { value: "under 30", small: " cm", cap: "side sensors: waste on the floor beside the bin", accent: true },
              { value: "2", small: " in", cap: "above the floor, on the front of a bin about 45 cm tall" },
            ],
          },
        },
        {
          heading: "Eyes and voice",
          text: [
            "Each state of the logic has a face and, where it helps, a short Hindi line. The lines were generated with ElevenLabs text to speech and play once per event, never on a loop. The eyes also look toward the miss.",
          ],
          visual: {
            kind: "pairs",
            rows: [
              ["Waiting", "Calm eyes, random blinks", "No voice"],
              ["Person near", "Eyes wake, lid opens", "No voice"],
              ["Clean throw", "Happy eyes", "“Dhanyavaad.” (Thank you.)"],
              ["Miss", "Eyes look toward the waste", "“Arey! Arey! Arey! Lagta hai aapse kachra bahar gir gya hai. Kripya isse uthaaye aur andar daale.” (Looks like your waste fell outside. Please pick it up and put it in.)"],
              ["Picked up", "Happy eyes", "“Dhanyavaad! Safai ko zimmedari nahi, aadat banaiye.” (Thank you! Make cleanliness a habit, not a duty.)"],
              ["Still outside", "Angry eyes", "No voice"],
            ],
          },
        },
        {
          heading: "Brand",
          text: [
            "The name hides the object inside it: BIN, with the A drawn as a bin. The team's palette and Hindi slogan carry the same idea of a habit, not a duty.",
          ],
          visual: {
            kind: "screens",
            wide: true,
            screens: [
              pic("slide-43.png", 1270, 400, "BIN + A", "The bin is in the name.", "BINA logo: BIN in black, the A drawn as a green bin."),
              pic("slide-44.png", 1258, 690, "Palette", "Two greens, black and grey.", "BINA palette: #026D00, #3FAE5A, #000000, #9A9A9A."),
              pic("slide-04.png", 1169, 195, "Slogan", "Make cleanliness a habit, not a duty.", "BINA slogan in Hindi, in a white-to-green gradient."),
            ],
          },
        },
      ],
      close: { text: "The eyes show the state.", accent: "The voice says what to do." },
    },

    // -------------------------------------------------------- 4 BUILD & TEST
    {
      id: "build-test",
      tocLabel: "Build & Test",
      short: true,
      accent: ACCENT,
      heading: "Build & Test",
      intro: [
        "BINA was built by the team in five days and tested over seven more: each part on its own, then together, then drop after drop until every branch of the loop held.",
      ],
      open: { text: "Four parts tested alone,", accent: "then joined into one program." },
      parts: [
        {
          heading: "Parts and power",
          text: [
            "Off-the-shelf parts on a plastic bin with a cardboard head, wired on a breadboard so each could be tested alone before they were joined.",
          ],
          visual: {
            kind: "stats",
            label: "Built from 11 off-the-shelf parts: 3 ultrasonic sensors, 2 OLED eyes, a regulated 5 V supply; prototype cost 2,898 rupees.",
            items: [
              { tag: "Parts", n: "11", l: "Off-the-shelf" },
              { tag: "Sensors", n: "3", l: "Ultrasonic" },
              { tag: "Eyes", n: "2", l: "OLED screens" },
              { tag: "Supply", n: "5 V", l: "From 2 cells" },
              { tag: "Cost", accent: true, n: "₹2,898", l: "Prototype" },
            ],
          },
        },
        {
          heading: "Tests",
          text: [
            "Each part had its own small test program before the parts were combined. Clean throws and misses were then simulated again and again; the drops were not counted.",
          ],
          visual: {
            kind: "flow",
            steps: [
              { tag: "1 · Alone", title: "Four test programs", items: ["Sensors read in turn", "Servo swept 0° to 180°", "Every eye expression", "All three voice lines"] },
              { tag: "2 · Together", title: "One program", items: ["Sensors, lid, eyes and voice in one state machine"] },
              { tag: "3 · Checked", title: "Every branch, by hand", items: ["Clean throw", "Miss", "Corrected miss", "Lid reset"], accent: true },
            ],
          },
        },
        {
          heading: "Problems and fixes",
          text: [
            "Joining the parts surfaced five problems; each changed the build. Before-and-after values were not recorded.",
          ],
          visual: {
            kind: "fixes",
            from: "5",
            to: "5",
            cap: "problems met while joining the parts, each fixed in the build",
            listLabel: "Problem and fix",
            items: [
              "Power drops and resets: two cells through a regulator to a steady 5 V",
              "Missed drops at the sides: side sensors angled 30° outward",
              "Audio at the wrong time: pins held off at start-up, one line per event",
              "Lid motor out of line: servo angle and lid attachment reworked",
              "Reading accuracy: sensors 2 in above the floor, readings spaced apart",
            ],
          },
        },
        {
          heading: "The lid incident",
          text: [
            "Getting the servo to open the lid reliably was hard enough that the team considered dropping the automatic lid altogether.",
          ],
          visual: {
            kind: "lines",
            rows: [
              { label: "What happened", lines: [{ t: "The servo would not line up with the lid; it was hard to calibrate." }] },
              { label: "On the table", lines: [{ t: "Drop automatic opening and keep a plain lid." }] },
              { label: "What changed", lines: [{ t: "The team worked out the servo angle and how to attach the lid to it." }] },
              { label: "Why it stayed", lines: [{ t: "The opening lid is BINA's first signal that it has noticed the person.", accent: true }] },
            ],
            note: "Told from the team's build; nothing was measured.",
          },
        },
        {
          heading: "Behind the scenes",
          text: [
            "Photos from the build: wiring trials, the eyes coming to life and the lid being fitted.",
          ],
          visual: {
            kind: "screens",
            screens: [
              pic("bts-1-eyes.jpg", 338, 422, "The eyes", "Both OLED eyes lit inside the cardboard head.", "The cardboard head with both OLED eyes lit, during wiring."),
              pic("bts-2-wiring.jpg", 413, 516, "The wiring", "Sensors, Arduino and breadboard, tested on a desk.", "Sensors, Arduino and breadboard wired on a desk."),
              pic("bts-4-servo.jpg", 630, 787, "The lid", "Fitting the servo that opens the lid.", "Fitting the servo to the lid of the bin."),
            ],
          },
        },
      ],
      close: { text: "Five problems surfaced.", accent: "Each one changed the build." },
    },

    // ------------------------------------------------ 5 OUTCOME & REFLECTION
    {
      id: "outcome",
      tocLabel: "Outcome & Reflection",
      short: true,
      accent: ACCENT,
      heading: "Outcome & Reflection",
      intro: [
        "BINA was built and run end to end, then stood in a classroom for about ten days. People were seen picking up their misses and responding well to the eyes and voice.",
        "Nothing was counted, so how much it changes behaviour is still to be measured.",
      ],
      open: { text: "A working bin,", accent: "in a real classroom." },
      parts: [
        {
          heading: "The working prototype",
          text: [
            "BINA notices a person, opens its lid, checks where the waste lands and responds. Two demo videos recorded by the team show both paths. The team also presented BINA at a one-day university seminar on emerging technologies.",
          ],
          visual: {
            kind: "walkthrough",
            image: { src: `${IMG}/slide-41.png`, width: 1294, height: 998, alt: "The built BINA prototype: a green plastic bin with a white cardboard head, two OLED eyes and sensors at the base." },
            screens: [
              { name: "Scenario 01", text: "Clean throw: waste goes in, happy eyes and “Dhanyavaad.”" },
              { name: "Scenario 02", text: "A miss: the request, the pick-up, then thanks and the habit line" },
            ],
            links: [
              { label: "Watch Scenario 01", href: "https://drive.google.com/file/d/1POXU-sRi890xy3vhEFz6msuPgay7ICIU/view?usp=sharing" },
              { label: "Watch Scenario 02", href: "https://drive.google.com/file/d/1ZH1XbvYx0g8k8Is_SVQKNplau_fcEKek/view?usp=sharing" },
              { label: "View the code", href: CODE },
            ],
          },
        },
        {
          heading: "In the classroom",
          text: [
            "After testing, BINA stood in a classroom for about ten days. The team watched how people used it but counted nothing, so two of the four success criteria were seen in use and none has a measured result.",
          ],
          visual: {
            kind: "status",
            lists: [
              { label: "Seen in use", items: ["A miss gets picked up after the prompt", "Friendly, not scolding: good reactions to the eyes and voice"] },
              { label: "Not measured", items: ["Waste lands inside", "No false triggers (addressed in testing)"], muted: true },
            ],
            note: "About ten days of classroom use. Observed, not counted.",
          },
        },
        {
          heading: "Next: count it",
          text: [
            "A simple study, not yet carried out: one week with a plain bin, two weeks with BINA, then one week with the plain bin again to see if the habit stays. BINA would log only events and times: no camera, no audio, no names.",
          ],
          visual: {
            kind: "pairs",
            rows: [
              ["Waste lands inside", "Misses per day", "Counted around the bin at a fixed time"],
              ["A miss gets picked up", "Share of prompts followed by a pick-up", "From BINA's own event log"],
              ["No false triggers", "Lid or voice with no person or no miss", "From the log and spot checks"],
              ["Friendly, not scolding", "A three-question card", "Short and anonymous, for people who used it"],
            ],
          },
        },
        {
          heading: "What I took away",
          text: ["The lessons I carry from building a physical product with a team."],
          visual: {
            kind: "lines",
            rows: [
              { label: "Behaviour", lines: [{ t: "Most misses are unnoticed, not careless, so the design had to make the miss visible instead of blaming the person." }] },
              { label: "Timing", lines: [{ t: "Feedback only works while the person is still at the bin; a few seconds later, the moment has passed.", accent: true }] },
              { label: "Building", lines: [{ t: "The code is the real specification: what people experience is whatever runs, not what the slides say." }] },
              { label: "Next time", lines: [{ t: "Count from day one, so the effect can be shown, not only seen." }] },
            ],
          },
        },
      ],
      close: { text: "Seen working.", accent: "Next, count it." },
    },

  ],
  endLinks: [
    { label: "View the Deep Dive", href: "/projects/intelligent-waste-disposal-system/full" },
    { label: "View the code", href: CODE, external: true },
  ],
};
