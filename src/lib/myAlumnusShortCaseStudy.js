// My Alumnus HIGHLIGHTS (5 steps): the sections on /projects/my-alumnus
// (what "View Project" opens). The 13-chapter Deep Dive is on
// /projects/my-alumnus/full.
//
// FORMAT: the same Highlights rules as every project, rendered by
// src > components > ShortStep.js. My Alumnus adds (2026-10-10): statement
// `rest` (text after the accent), stats `cols: 4`, walkthrough `wide`
// (desktop recording over two columns), kpis `pill` + a "so far" line,
// status item accent, and the `sides` kind (Two Sides of the Gate).
// Accent: gradient #0035F2 to #7896FF, the product's link blue into the
// logo tile's light end (Sukhman, 2026-10-10); solid #0035F2 where a flat
// colour is needed. Copy from the approved Highlights preview and stage docs
// 04 to 10. Desktop screens only. No em dashes in any copy here.

const ACCENT = "#0035F2";
const GRADIENT = "linear-gradient(90deg, #0035F2, #7896FF)";
const IMG = "/images/projects/my-alumnus/short";
const MEDIA = "/images/projects/my-alumnus/media";
const LIVE = "https://myalumnus.vercel.app";
const look = { short: true, accent: ACCENT, gradient: GRADIENT };

export const myAlumnusShortCaseStudy = {
  sections: [
    // ------------------------------------------------- 1 RESEARCH
    {
      id: "research",
      tocLabel: "Research",
      ...look,
      heading: "Research",
      intro: [
        "Research started at the gate itself. Three alumni and a main-gate guard were interviewed, one alumna's entry was observed from arrival to register, and the admin office explained what happens when the gate calls.",
        "The current process was then scored touchpoint by touchpoint. Campus security rules and data law were read, and existing visitor products were compared against what the research said the gate needs.",
      ],
      open: { text: "Access depends on", accent: "who picks up the phone,", rest: " not on who the visitor is." },
      parts: [
        {
          heading: "Methods",
          text: ["Two field methods with the people at the gate, an audit of today's process, then desk research into rules and existing products."],
          visual: {
            kind: "stats",
            label: "Research methods: 4 interviews, 2 field visits, 21 touchpoints audited, 5 rule documents, 3 products taken apart",
            items: [
              { tag: "Primary", n: "4", l: "Interviews", accent: true },
              { tag: "Primary", n: "2", l: "Field visits", accent: true },
              { tag: "Primary", n: "21", l: "Touchpoints audited", accent: true },
              { tag: "Secondary", n: "5", l: "Rule documents" },
              { tag: "Secondary", n: "3", l: "Products taken apart" },
            ],
          },
        },
        {
          heading: "Interviews",
          text: [
            "One-on-one interviews with three alumni who visit their campus, and with a guard at its main gate. The alumni were asked how a visit goes today; the guard was asked what he does when he doesn't know someone.",
          ],
          visual: {
            kind: "quotes",
            quotes: [
              {
                who: "A1",
                meta: "Alumnus · English",
                text: "The guard calls the person whom I am going to meet and sometimes … when the person says that he is not available or he is not in the college then the guard is like no you can't come",
                noteBold: "Entry hangs on the host.",
                note: "With no ID since graduation, the only check left is a phone call, and a missed call means a refusal.",
              },
              {
                who: "A3",
                meta: "Alumnus · Hindi",
                text: "वो guards मुझे identify नहीं कर रहे थे और उनके पास कोई record भी नहीं है…",
                noteBold: "No record to check against.",
                note: "\"The guards weren't identifying me, and they don't have any record through which they could identify us.\" The whole sequence took 30 minutes.",
              },
              {
                who: "G1",
                meta: "Main-gate guard · Hindi",
                text: "वो बोलते हैं कि हम alumni हैं। तो फिर हम उनको entry करके उनको जाने देते हैं। बाकी और कोई procedure नहीं है।",
                noteBold: "Trust, not verification.",
                note: "\"They say they're alumni. Then we make an entry and let them go. There's no other procedure.\"",
              },
            ],
            note: "Participants are anonymous and consented to being recorded and quoted. Hindi is translated for this case study.",
          },
        },
        {
          heading: "At the Gate",
          text: [
            "One alumna's entry at the main gate was observed in full on a weekday afternoon. The next day, the staff member who handles the gate's escalations walked through the same process from the admin office.",
          ],
          visual: {
            kind: "flow",
            steps: [
              { tag: "1 · Guards", title: "Nobody recognises her", items: ["The guards consult each other, then the head guard", "Vehicles keep interrupting while she waits"] },
              { tag: "2 · Admin office", title: "\"There was no one available.\"", items: ["One person covers security and other departments", "The alumni list sits with the alumni club"] },
              { tag: "3 · Host", title: "The professor picks up", items: ["He confirms the visit by phone", "She signs the register by hand; her exit is never recorded"], accent: true },
            ],
            note: "Field notes and recordings from two visits; names and the campus are not shown.",
          },
        },
        {
          heading: "Gap Analysis",
          text: [
            "The needs found at the gate were checked against what four kinds of product document: a residential gate app, a workplace visitor system, a school screening system and alumni-ID apps.",
          ],
          visual: {
            kind: "lines",
            rows: [
              { label: "Own record", lines: [{ t: "Only Raptor checks against its own records; Envoy and alumni-ID apps do it in part; MyGate doesn't." }] },
              { label: "Name-only walk-in", lines: [{ t: "MyGate and Envoy only in part; Raptor needs a government ID; not found for alumni-ID apps." }] },
              { label: "Alumni record", lines: [{ t: "Only alumni-ID apps keep one; no visitor product does." }] },
              { label: "Guard console", lines: [{ t: "MyGate, Envoy and Raptor have one; alumni-ID apps don't document one." }] },
              { label: "Timed escalation", lines: [{ t: "Not documented by any product.", accent: true }] },
              { label: "Exit tracking", lines: [{ t: "MyGate and Raptor; not found for Envoy or alumni-ID apps." }] },
              { label: "Overstay", lines: [{ t: "Only MyGate." }] },
              { label: "Family visits", lines: [{ t: "Not documented by any product." }] },
            ],
            note: "Products: MyGate, Envoy, Raptor, alumni-ID apps (ID123, AlmaShines). From product pages and help centres; \"not found\" means not documented, not impossible. My Alumnus covers all eight.",
          },
          after: [
            "No product says what happens when the approver doesn't answer, none joins an alumni record to a guard's decision, and none lets in a walk-in who carries nothing.",
          ],
        },
      ],
      close: { text: "No product joins", accent: "the alumni record to the gate decision." },
    },

    // ------------------------------------------------- 2 INSIGHT & DEFINE
    {
      id: "insight-define",
      tocLabel: "Insight & Define",
      ...look,
      heading: "Insight & Define",
      intro: [
        "Fifty single observations from the research were grouped bottom-up, with no categories set in advance, until seven themes held.",
        "The two people who meet at the gate, the guard and the alumnus, were then mapped for what each says, does, thinks and feels, and turned into personas and one refined problem.",
      ],
      open: { text: "The guard carries", accent: "the responsibility for a decision", rest: " he has no information to make." },
      parts: [
        {
          heading: "Seven Themes",
          text: [
            "Each observation went on its own note, with its source: alumni, the guard, the two field visits, the rules and the competitors. The groups were named only once they formed.",
          ],
          visual: {
            kind: "lines",
            rows: [
              { label: "01 · 8", lines: [{ t: <b>Recognition lives in people, not records</b> }, { t: "When the guards change, the campus forgets its alumni." }] },
              { label: "02 · 6", lines: [{ t: <b>Graduation takes away the only proof</b> }, { t: "The only credential that proves you belong is returned the day you graduate." }] },
              { label: "03 · 12", lines: [{ t: <b>Every doubt becomes a chain of phone calls</b> }, { t: "Access depends on who picks up the phone, not on who the visitor is.", accent: true }] },
              { label: "04 · 6", lines: [{ t: <b>The visitor pays for the uncertainty</b> }, { t: "The cost of not knowing falls on the alumnus, as waiting time." }] },
              { label: "05 · 9", lines: [{ t: <b>Records are written, but never read</b> }, { t: "The process records data but has no memory." }] },
              { label: "06 · 4", lines: [{ t: <b>Knowing in advance makes the check disappear</b> }, { t: "When the gate already knows who's coming, verification becomes opening the gate." }] },
              { label: "07 · 4", lines: [{ t: <b>The rules exist; going digital adds obligations</b> }, { t: "Consent, correction and erasure become product requirements." }] },
            ],
            note: "Theme number · observations. 50 observations from 6 sources: 15 alumni, 8 guard, 12 gate visit, 6 admin office, 6 rules, 3 competitors; one stayed unclustered.",
          },
        },
        {
          heading: "Two Sides of the Gate",
          text: [
            "One map for each person the research met at the gate. What they say is quoted; what they do was seen or reported; what they think and feel is drawn from that evidence.",
          ],
          visual: {
            kind: "sides",
            people: ["Guard", "Alumnus"],
            rows: [
              { label: "Says", cells: ["\"Without information we can't let them in.\"", "\"The earlier guards knew us by face, so we used to get easy access.\""] },
              { label: "Feels", cells: ["Exposed: accountable for every entry", "Like an outsider at their own campus"] },
              { label: "Missing", cells: ["A record to check against", "Proof to show"], accent: true },
              { label: "Pays with", cells: ["Accountability for a decision he can't verify", "Waiting time and dignity"] },
              { label: "Wants", cells: ["A decision that doesn't hang on someone answering", "Recognised by name, with nothing to carry"] },
            ],
            note: "Says rows are translated from Hindi.",
          },
        },
        {
          heading: "Personas",
          text: [
            "One persona for each role at the gate. The alumnus and the guard come straight from the interviews and the field visits; the admin is partly inferred from the admin-office session. Names are illustrative.",
          ],
          visual: {
            kind: "personas",
            people: [
              {
                name: "Rohan Mehta",
                type: "Returning alumnus · research-based",
                line: "Asked who he is on every visit, with nothing left to prove it.",
                points: ["Get in quickly, be recognised as someone who belongs", "Turned away when the host is unavailable", "Needs entry that doesn't hinge on a call"],
                photo: `${IMG}/persona-rohan.jpg`,
              },
              {
                name: "Ramesh Yadav",
                type: "Main-gate guard · research-based",
                line: "Accountable for every entry, with nothing to check against.",
                points: ["Let the right people in, keep the gate moving", "Calls go unanswered; vehicles, deliveries and students at once", "Needs to know in advance who's coming"],
                photo: `${IMG}/persona-ramesh.jpg`,
              },
              {
                name: "Sunil Patel",
                type: "University admin · partly inferred",
                line: "The first call when the gate is unsure, with no data and other duties.",
                points: ["Spend less time on gate matters, look back at incidents", "No access to alumni data; incidents on paper", "Needs one view of holds and overstays"],
                photo: `${IMG}/persona-sunil.jpg`,
              },
            ],
            note: {
              lead: "A fourth persona, the student who brings her family in, is a proto-persona drawn from assumptions, still to be validated.",
              bold: "",
              rest: "Portraits: AI-generated with ElevenLabs, not real people.",
            },
          },
        },
        {
          heading: "Problem Statement",
          text: [
            "Research changed the starting problem in three ways. The register's real weakness isn't missing authentication: there's nothing to check against. Time is lost to the phone chain, and the visitor is the one who pays. And the same gap affects every expected visitor, not only alumni.",
            <b key="ps">
              Campuses have no reliable way to confirm who a visitor is at the gate: returning alumni first, but also visiting faculty, placement representatives and students&apos; families. So access depends on a guard&apos;s memory and on whoever answers the phone.
            </b>,
          ],
        },
      ],
      close: { text: "Every persona depends on the same thing:", accent: "a record that connects the person at the gate to the institution." },
    },

    // ------------------------------------------------- 3 IDEATION
    {
      id: "ideation",
      tocLabel: "Ideation",
      ...look,
      heading: "Ideation",
      intro: [
        "Every finding was turned into a question that starts with \"how might we\". The questions the concept already answered were set aside, and the open ones with the most impact went forward.",
        "Each persona was then walked through the product, from the everyday case to the edge cases the research surfaced. That settled the guard's decision path and how the two consoles share one record.",
      ],
      open: { text: "Ask, don't show:", accent: "the visitor supplies the detail", rest: " an impersonator couldn't read off the screen." },
      parts: [
        {
          heading: "How Might We",
          text: ["24 questions came from the research across the seven themes. 10 were already answered by the concept; these 6 led the design."],
          visual: {
            kind: "lines",
            rows: [
              { label: "01", lines: [{ t: <>How might we make logging a visitor <b>as quick as writing in a register?</b></>, accent: true }] },
              { label: "02", lines: [{ t: <>How might we let a waiting visitor <b>know what&apos;s happening</b> when they have no app?</> }] },
              { label: "03", lines: [{ t: <>How might we make the fallback <b>to the host dependable?</b></> }] },
              { label: "04", lines: [{ t: <>How might we keep the gate working <b>when the network or device fails?</b></> }] },
              { label: "05", lines: [{ t: <>How might we tell apart <b>two visitors with the same name,</b> and stop someone using a real alumnus&apos;s name?</> }] },
              { label: "06", lines: [{ t: <>How might we help the admin <b>get alumni data in</b> when it&apos;s held elsewhere today?</> }] },
            ],
          },
        },
        {
          heading: "The Guard's Decision",
          text: [
            "Nine scenarios walked each persona through the product: found and approved, not found, same name, an expected faculty visitor, a student's family, an overstay at shift change, the network down, the admin's weekly review, and arrival after hours. Together they fixed one decision path for the guard.",
          ],
          visual: {
            kind: "flow",
            steps: [
              { tag: "1 · Who is it?", title: "Ask the name first", items: ["One match: open the record", "Several: ask the batch or department before anything is shown", "None: put on hold"] },
              { tag: "2 · Can they come in now?", title: "Visiting hours, 10 AM to 6 PM", items: ["Inside: continue", "Outside: Approve is locked", "Deny or Put on hold only"] },
              { tag: "3 · Is it them?", title: "Check the photo", items: ["Matches: Approve, purpose logged", "Doesn't match: put on hold", "Call the host first, then the admin"], accent: true },
            ],
          },
          after: [
            "A held visitor never waits without a next step. The host is called first; if no one can confirm within the campus limit of 10 minutes, the case passes to the admin. A denial is always logged with a reason.",
          ],
        },
        {
          heading: "Two Consoles, One Record",
          text: [
            "The guard console stays flat and search-first: one Home, with every decision within two taps of it. The admin console follows a standard navigation with sub-pages. Both read and write the same record.",
          ],
          visual: {
            kind: "lines",
            rows: [
              { label: "Guard console", lines: [{ t: "Home: search · Expected today · Inside now · On hold" }, { t: "Visitor record → Approve / Deny / Put on hold → Mark exit" }] },
              { label: "Admin console", lines: [{ t: "Dashboard · People · Expected visits · History" }, { t: "Staff & devices · Reports · Settings" }] },
              { label: "Shared record", lines: [{ t: "Person: alumnus, student, visitor", accent: true }, { t: "Visit: entry, exit, decision, purpose · Hold: who was asked, when, outcome" }] },
            ],
          },
          after: [
            "A student becomes an alumnus by a change of status on the same record. A visit's exit time starts empty, so one field gives both exit tracking and overstays.",
          ],
        },
      ],
      close: { text: "Every unclear case gets", accent: "a named next step and a time limit." },
    },

    // ------------------------------------------------- 4 DESIGN & BUILD
    {
      id: "design-build",
      tocLabel: "Design & Build",
      ...look,
      heading: "Design & Build",
      intro: [
        "The design moved from grey-box wireframes of both consoles to mockups built on one set of tokens, then to a clickable prototype, and finally to a working app that every test ran on.",
        "Each visual foundation was chosen from three options: a recommendation, the way MyGate does it, and an outside reference reshaped for a gate.",
      ],
      open: { text: "The routine case takes", accent: "three taps:", rest: " type the name, check the photo, approve." },
      parts: [
        {
          heading: "Walkthrough",
          text: [
            "A guard's shift in under a minute, at real speed on desktop: an alumna approved from Home, two people with the same name resolved by asking first, a held visitor waiting on the host's call, and an exit marked.",
          ],
          visual: {
            kind: "walkthrough",
            wide: true,
            video: {
              mp4: `${MEDIA}/my-alumnus-walkthrough.mp4`,
              webm: `${MEDIA}/my-alumnus-walkthrough.webm`,
              poster: `${MEDIA}/my-alumnus-walkthrough-poster.jpg`,
              width: 1280,
              height: 800,
              label: "Walkthrough of the My Alumnus guard console on desktop: approve, same name, on hold, mark exit.",
              credit: "Screens from the working app; Sample University and its people are fictional.",
            },
            screens: [
              { name: "Search by name", text: "Approve with the purpose picked" },
              { name: "Same name", text: "Ask the batch before any record shows" },
              { name: "On hold", text: "The host to call, a timer, the next step" },
              { name: "Mark exit", text: "The visit closes; Inside now updates" },
            ],
            links: [{ label: "Try the live demo", href: LIVE }],
          },
        },
        {
          heading: "Three Moments at the Gate",
          text: ["The three screens a guard meets most. Each answers two questions: what does he need to know, and what does he do next."],
          visual: {
            kind: "screens",
            wide: true,
            screens: [
              { src: `${IMG}/g01.png`, width: 628, height: 532, alt: "Guard console Home, desktop layout. Sample data.", title: "Home", text: "Search first, with who is inside right underneath." },
              { src: `${IMG}/g06.png`, width: 628, height: 532, alt: "Visitor record, desktop layout. Sample data.", title: "Visitor record", text: "Photo, batch and department; Approve, Deny and Put on hold are the largest controls on screen." },
              { src: `${IMG}/g13.png`, width: 628, height: 532, alt: "On hold, desktop layout. Sample data.", title: "On hold", text: "The host's name and number to call, a timer and the next step." },
            ],
          },
          after: [
            "Decision colours never change meaning: Approve green, Deny red, Hold amber, each with a label. Approve locks itself outside visiting hours, or for someone already inside, and says why.",
          ],
        },
        {
          heading: "Design System",
          text: [
            "The visual language lives in code as design tokens, so the mockups, the prototype and the live app are styled from the same files. A contrast check runs on every build.",
          ],
          visual: {
            kind: "numbers",
            size: "mid",
            items: [
              { value: "565", cap: "design tokens in three tiers: primitives, semantic roles, components" },
              { value: "81", cap: "text and background pairs held to their contrast minimum, light and dark" },
              { value: "0", cap: "automated accessibility violations across the 50 mockup pages", accent: true },
            ],
            note: "Typeface Google Sans. Brand blue Signal #2F5DFF; links use #0035F2, because the brand blue fell below AA as text.",
          },
        },
        {
          heading: "Built AI-Native",
          text: [
            "The app was built with Claude on Next.js, a Supabase database with row-level security, and Vercel hosting. Research, direction and every decision stayed with the designer. Three short iterations followed the evaluations, each approved before it went live.",
          ],
          visual: {
            kind: "lines",
            rows: [
              { label: "Iteration 1", lines: [{ t: "Held visitors: the host is called first; the admin decides only if the host can't confirm.", accent: true }] },
              { label: "Iteration 2", lines: [{ t: "One device per gate · a new guard Home · \"On hold\" naming · deny reasons from a list · a hosts list · reports redesigned." }] },
              { label: "Iteration 3", lines: [{ t: "Close spellings for misspelt names · a shorter hold form with a host picker · \"Left before a decision\" · Mark exit on the record." }] },
            ],
          },
        },
      ],
      close: { text: "A working product,", accent: "not a prototype:", rest: " every test ran on the app itself." },
    },

    // ------------------------------------------------- 5 TESTING & OUTCOME
    {
      id: "testing-outcome",
      tocLabel: "Testing & Outcome",
      ...look,
      heading: "Testing & Outcome",
      intro: [
        "Both consoles were reviewed against usability heuristics and walked through task by task as a first-time user would meet them; both reviews were run with Claude as a single expert evaluator.",
        "A script then drove the real guard console through a busy queue. Finally, a working security guard used the live app at a gate for the first time, in English and Hindi.",
      ],
      open: { text: "Fast where it's routine;", accent: "the open risk is trust in the record." },
      parts: [
        {
          heading: "Four Methods",
          text: ["Three methods predict and one observes; each found something the others didn't."],
          visual: {
            kind: "stats",
            cols: 4,
            label: "Four methods: 22 problems in the expert review, 8 of 13 tasks clean in the walkthrough, 12 visitors simulated, 1 real guard",
            items: [
              { tag: "Expert review", n: "22", l: "Problems: 4 major, 11 minor, 7 cosmetic" },
              { tag: "Walkthrough", n: "8 / 13", l: "First-time tasks clean" },
              { tag: "Simulation", n: "12", l: "Visitors in the queue" },
              { tag: "Real guard", n: "1", l: "Guard, 5 tasks, two languages", accent: true },
            ],
            note: "The expert review and the walkthrough were AI-run, with one evaluator who also built the app.",
          },
        },
        {
          heading: "A Busy Gate, Simulated",
          text: [
            "A script drove the real guard console through 12 visitors arriving a minute apart, before and after the fixes from the expert review. Guard time was estimated with the Keystroke-Level Model; holds were counted at the 10-minute worst case.",
          ],
          visual: {
            kind: "numbers",
            size: "mid",
            items: [
              { value: "4 → 1", cap: "visitors held at the gate" },
              { value: "1:12", cap: "mean time at the gate, down from 3:43 (min:s)", accent: true },
              { value: "5–16 s", cap: "guard time for each routine entry" },
            ],
            note: "Model estimates on the evaluation build, before the three iterations; not real users.",
          },
          after: [
            "Almost all waiting came from holds, not taps. Three of the four holds were avoidable: two misspelt names, and a visitor waiting for an admin who wasn't signed in. The hold left is the right one: a guest not on record still waits for a person to decide.",
          ],
        },
        {
          heading: "A Real Guard",
          text: [
            "A working security guard used the live app for the first time while five visitors came to the gate: tasks 1 to 3 in English, 4 and 5 in Hindi. What was saved was checked against the app's own audit trail.",
          ],
          visual: {
            kind: "numbers",
            size: "mid",
            items: [
              { value: "15 s", cap: "and 3 taps to approve a regular alumnus" },
              { value: "4 of 5", cap: "tasks completed, both Hindi tasks on first use" },
              { value: "1", cap: "approval silently not saved", accent: true },
            ],
            note: "One session, one guard; notes from the facilitator, recorded straight after.",
          },
          after: [
            "The same-name screen worked as intended: the guard asked for the batch before choosing. But one Approve tap saved nothing and showed nothing, so the guard took it as done.",
          ],
        },
        {
          heading: "Where It Stands",
          text: [
            "After testing, three build iterations went live. 23 of the 27 evaluation findings were fixed or designed away, one is a training item by design, and three stay open by decision. What is still open is listed, not hidden.",
          ],
          visual: {
            kind: "status",
            lists: [
              { label: "Fixed and live", items: ["Close spellings for misspelt names", "The host is called first", "A shorter hold form with a host picker", "Mark exit on the record", "\"Left before a decision\""] },
              { label: "Open by decision", items: ["Out-of-hours expected visits", "No gate phone for the admin", "No undo for a decision"], muted: true },
              {
                label: "Open from the guard session",
                items: ["An approval can fail without any sign", "A host's call can admit a photo mismatch (accepted risk)", "Back needed after a held approval", "The hold form can save the wrong reason"],
                muted: true,
                accent: 0,
              },
            ],
          },
          after: [
            "The next version's first job is plain: every decision ends in a visible result, with \"Saving…\" on tap, an error if nothing comes back, and a return to Home with the green confirmation.",
          ],
        },
        {
          heading: "Targets for a Pilot",
          text: [
            "The live app runs on sample data, so none of these are results yet. Each has a baseline from the research, evidence from the tests so far, and a target to agree with a pilot university.",
          ],
          visual: {
            kind: "kpis",
            tag: "Targets, not results",
            pill: true,
            heads: ["Today (research)", "Pilot target"],
            rows: [
              ["Time to a decision, regular alumnus", "up to ~30 min", "under 1 min", "So far: 15 s, 3 taps (one guard)"],
              ["Visitors decided without a hold", "near zero", "most visitors", "So far: 11 of 12 (simulation)"],
              ["Holds resolved within 10 minutes", "no limit", "every hold", "So far: both held visitors (one session)"],
              ["Visits with a recorded exit", "none", "every visit", "So far: marked unaided (Hindi)"],
              ["Decisions saved and confirmed", "no baseline", "no silent failures", "So far: 1 of 4 approvals lost"],
            ],
          },
        },
      ],
      close: { text: "The guard decides fast.", accent: "Next, every decision has to prove it was saved." },
    },
  ],
  endLinks: [
    { label: "View the Deep Dive", href: "/projects/my-alumnus/full" },
    { label: "Try the live demo", href: LIVE, external: true },
  ],
};
