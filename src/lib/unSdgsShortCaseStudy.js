// UN SDGs HIGHLIGHTS (5 steps): the sections on /projects/un-sdgs (what
// "View Project" opens). The 13-chapter Deep Dive is on /projects/un-sdgs/full.
//
// FORMAT: the same Highlights rules as every project
// (claude/case-study-short-format-rules.md, Placement Drive project), rendered
// by src > components > ShortStep.js with existing visual kinds only. UN SDGs
// changes only the accent (UN blue #009EDB, Sukhman 2026-10-09). Copy from the
// Claude Doc "UN SDGs: Highlights draft" (2026-10-09); facts from
// claude/un-sdgs/answers.md. No em dashes in any copy here.

const ACCENT = "#009EDB";
const IMG = "/images/projects/un-sdgs/short";
const LIVE = "https://un-sdgs.vercel.app";
const shot = (file, width, height, alt) => ({ src: `${IMG}/${file}`, width, height, alt });

export const unSdgsShortCaseStudy = {
  sections: [
    // ------------------------------------------------- 1 DATA COLLECTION
    {
      id: "data-collection",
      tocLabel: "Data Collection",
      short: true,
      accent: ACCENT,
      heading: "Data Collection",
      intro: [
        "The official UN SDG website holds the data, but it is spread across pages, yearly reports and separate charts. Every file was collected, read and sorted before any design began.",
      ],
      open: { text: "Every number collected reached the page,", accent: "labelled for where it came from." },
      parts: [
        {
          heading: "Collection",
          text: [
            "About 30 GB of files came from many pages of the UN SDG website over two to three days. Each file was read to understand what it held before anything was drawn.",
          ],
          visual: {
            kind: "numbers",
            items: [
              { value: "~30", small: " GB", cap: "of files collected from the UN SDG website" },
              { value: "2 to 3", small: " days", cap: "to collect them and read what each one held" },
              { value: "7", cap: "sources: 6 UN and UNDP, 1 SDSN", accent: true },
            ],
          },
        },
        {
          heading: "Official vs derived",
          text: [
            "The UN does not publish a completion percentage for each goal, and each year sits in its own report. These figures were compiled across the yearly reports with NotebookLM.",
            "The country scores and ranks also came through NotebookLM. They match SDSN's Sustainable Development Report 2025, which is now credited as a source.",
          ],
          visual: {
            kind: "compare",
            labelCol: true,
            columns: [
              { name: "Shows", sub: "what the part answers" },
              { name: "Source", sub: "where the numbers came from" },
              { name: "Label", sub: "as marked on the site" },
            ],
            rows: [
              { label: "Part 2", cells: ["17 goals and their targets", "UN SDG website", "Official"] },
              { label: "Part 3", cells: ["% progress per goal, 2016 to 2025", "UN yearly reports, compiled with NotebookLM", "Derived, an approximation"], accent: true },
              { label: "Part 4", cells: ["Progress by region over time", "UN SDG website", "Official"] },
              { label: "Part 5", cells: ["Goal status by country, on a map", "UN SDG website", "Official"] },
              { label: "Part 6", cells: ["Country score, rank and 17 goal values", "NotebookLM, matches SDR 2025", "Derived"] },
            ],
          },
        },
        {
          heading: "What was kept",
          text: [
            "Nothing collected was left out. Where data did not fit a form, a way was found and stated on the site, as with the NotebookLM figures.",
          ],
          visual: {
            kind: "numbers",
            items: [
              { value: "17", cap: "goals, each with its own screen" },
              { value: "169", cap: "targets, shortened to one line each" },
              { value: "193", cap: "countries: 167 scored, 26 without data", accent: true },
            ],
          },
        },
      ],
      close: { text: "A number earns trust only when the reader can see", accent: "where it came from." },
    },

    // ------------------------------------------------- 2 STRUCTURE
    {
      id: "structure",
      tocLabel: "Structure",
      short: true,
      accent: ACCENT,
      heading: "Structure",
      intro: [
        "The site is for anyone, but mainly for researchers and students, who look up SDG information the most. Its job is to put the global picture, every country and what the goals mean on one platform.",
      ],
      open: { text: "The story zooms from", accent: "the whole world down to one country." },
      parts: [
        {
          heading: "From inventory to structure",
          text: [
            "Everything on the UN SDG website was listed and sorted into categories. Those were regrouped into new categories by the kind of information and the pattern it needed.",
            "The structure was then tested against one question: how dense should the information get as the reader goes deeper?",
          ],
          visual: {
            kind: "flow",
            steps: [
              { tag: "01", title: "Inventory", items: ["Everything on the UN SDG website", "Listed and sorted into categories"] },
              { tag: "02", title: "Own categories", items: ["Regrouped by kind of information", "And by the pattern it needs"] },
              { tag: "03", title: "7 parts", items: ["Ordered from wide to narrow", "Denser as the reader goes deeper"], accent: true },
            ],
          },
        },
        {
          heading: "The sequence",
          text: [
            "The 7 parts open wide and narrow down, in the order \"overview first, zoom and filter, then details on demand\". After the reader reaches their own country, an informal part offers something they did not come for, and the sources close the page.",
          ],
          visual: {
            kind: "flow",
            align: true,
            steps: [
              { tag: "Overview", title: "The whole agenda", items: ["1 The UN at a glance", "2 17 goals", "3 The global agenda, 2015 to 2030"] },
              { tag: "Zoom", title: "Regions and nations", items: ["4 Progress by region over time", "5 The world map by goal"] },
              { tag: "Detail", title: "One country", items: ["6 See where your country stands"], accent: true },
              { tag: "Close", title: "Beyond the question", items: ["7 What's shifting across the world", "Methodology and Sources"] },
            ],
          },
        },
        {
          heading: "Why part 2 is read, not skipped",
          text: [
            "Visitors asked why they had to scroll through all 17 goals. It is a deliberate choice: meeting every goal first makes the rest readable. Anyone who wants to pass through can, because the scroll is straight and quick.",
          ],
        },
      ],
      close: { text: "Each part answers", accent: "one question before the next one opens." },
    },

    // ------------------------------------------------- 3 CHART CHOICES
    {
      id: "chart-choices",
      tocLabel: "Chart Choices",
      short: true,
      accent: ACCENT,
      heading: "Chart Choices",
      intro: [
        "With the content sorted, each part needed a form. Forms were explored in D3.js examples, then chosen by one rule: the kind of information in a section decides its simplest form.",
      ],
      open: { text: "The data decides the form,", accent: "not the other way round." },
      parts: [
        {
          heading: "Question to form",
          text: [
            "Each part answers one question, and each form is one most people already know how to read. Colour and motion carry the interaction, so no chart needs a complex infographic.",
          ],
          visual: {
            kind: "screens",
            wide: true,
            screens: [
              { ...shot("form-dial.jpg", 660, 495, "Part 3: a dial with a year wheel and 17 goal tiles showing percentage progress"), tag: "Part 3 · Dial", title: "How far has each goal come?", text: "15 years to show, so a timeline wheel, the centre holds every goal's number." },
              { ...shot("form-chart.jpg", 660, 495, "Part 4: a line chart of progress by region, 2016 to 2025"), tag: "Part 4 · Line chart", title: "How has each region moved?", text: "Two measures, time and progress: two axes and one line per region." },
              { ...shot("form-map.jpg", 660, 495, "Part 5: a world map coloured by status for one goal, with the 17 goal tiles and a 5-colour legend"), tag: "Part 5 · Map", title: "Where does each country stand?", text: "A global question gets a global map, recoloured by the goal chosen.", accent: true },
            ],
          },
        },
        {
          heading: "Colour as meaning",
          text: [
            "The UN SDG guidelines were read in full, so the 17 goal colours and icons are used exactly as given. Status uses the colours most people read without a key.",
          ],
          visual: {
            kind: "lines",
            rows: [
              { label: "Goal colours", lines: [{ t: "17 colours and icons, used exactly as the UN guidelines give them." }] },
              { label: "Status colours", lines: [{ t: "Green on track, yellow and orange for growing challenges, red for major ones, grey where there is no data.", accent: true }] },
              { label: "Type", lines: [{ t: "Inter, kept neutral, because colour already does a lot of the work." }] },
            ],
          },
        },
        {
          heading: "The country card",
          text: [
            "The card is built around where attention goes. Two-thirds is for a quick read: the country's score and rank on the left, its outline and introduction in the centre. The last third holds the dense part, all 17 goals.",
          ],
          visual: {
            kind: "flow",
            steps: [
              { tag: "Quick read", title: "The numbers", items: ["Country score and rank", "Statistical performance, 2016 and 2023"], img: shot("card-numbers.jpg", 660, 1160, "India's card, left third: country score 67.0, rank 99 of 167") },
              { tag: "Quick read", title: "The country", items: ["Outline, name and region", "Population and economy type"], img: shot("card-country.jpg", 660, 1160, "India's card, centre: the country's outline, name and introduction") },
              { tag: "Dense", title: "All 17 goals", items: ["One bar per goal, in its UN colour", "Percentage beside each bar"], img: shot("card-goals.jpg", 660, 1160, "India's card, right third: 17 goal bars with percentages"), accent: true },
            ],
          },
        },
        {
          heading: "Missing data is shown",
          text: [
            "Countries without a score are shown as \"NA\", not hidden, and the map greys out goals with no data. The most-cited SDG index follows the same rule.",
          ],
          visual: {
            kind: "meters",
            items: [
              { value: "26", of: "of 193", name: "Countries without a score", sub: "Shown as NA on their card, grey on the map", share: 13, shareLabel: "of all countries", accent: true },
            ],
          },
        },
      ],
      close: { text: "Familiar forms leave the reader's attention", accent: "for the numbers." },
    },

    // ------------------------------------------------- 4 INTERACTION
    {
      id: "interaction",
      tocLabel: "Interaction",
      short: true,
      accent: ACCENT,
      heading: "Interaction",
      intro: [
        "The site holds many views of the same data. To keep it simple, the reader controls one thing at a time, and everything else stays still.",
      ],
      open: { text: "The reader changes", accent: "one thing at a time: a year, a region, a goal or a country." },
      parts: [
        {
          heading: "What the reader controls",
          text: [
            "The year wheel turns the dial, a region line lights up on hover, a goal tile recolours the map, and a letter opens a list of countries. Each control changes one view and leaves the rest of the page as it was.",
          ],
          visual: {
            kind: "numbers",
            items: [
              { value: "15", cap: "years on the dial, and 7 regions on the line chart" },
              { value: "17", cap: "goals that recolour the world map" },
              { value: "193", cap: "countries in the A to Z explorer", accent: true },
            ],
          },
        },
        {
          heading: "Built by hand in Figma",
          text: [
            "The prototype has more than 500 screens, built from components and variants. Figma could not do two things the explorer needed: a search box, and switching back after a country was chosen from the A to Z list. So the prototype showed one working country, India.",
          ],
          visual: {
            kind: "fixes",
            from: "1",
            to: "193",
            cap: "countries working: Figma prototype to live site",
            listLabel: "What the live site adds",
            items: [
              "Every country opens from the A to Z list",
              "The chosen card stays open while you browse other letters",
              "Year and percentage at each point of the regional chart",
              "Country name, status and flag on the map, on hover",
            ],
          },
        },
        {
          heading: "On the live site",
          text: [
            "The design was then coded as a live website with Claude Code, every Figma colour and word unchanged. What Figma could not prototype now works, and feedback from the exhibition is built in.",
          ],
          visual: {
            kind: "walkthrough",
            video: {
              mp4: "/videos/un-sdgs-walkthrough.mp4",
              webm: "/videos/un-sdgs-walkthrough.webm",
              poster: "/videos/un-sdgs-walkthrough-poster.jpg",
              width: 660,
              height: 372,
              label: "Walkthrough of the live UN SDGs website: the progress dial, the regional chart, the world map, the country explorer and the news glimpses",
            },
            screens: [
              { name: "Progress dial", text: "Pick a year, 17 goals show their progress." },
              { name: "Regional chart", text: "Hover a line for the region, year and percentage." },
              { name: "World map", text: "Pick a goal, hover a country for its status." },
              { name: "Country explorer", text: "A to Z, all 193 countries." },
              { name: "Glimpses", text: "Recent UN stories, linked to the source." },
            ],
            links: [{ label: "View live website", href: LIVE }],
          },
        },
      ],
      close: { text: "What Figma could not prototype,", accent: "the live site now does." },
    },

    // ------------------------------------------------- 5 FEEDBACK & OUTCOME
    {
      id: "feedback-outcome",
      tocLabel: "Feedback & Outcome",
      short: true,
      accent: ACCENT,
      heading: "Feedback & Outcome",
      intro: [
        "The Figma prototype was reviewed in two settings: an open campus exhibition, where people used it on a desktop without a task, and a jury of two professors.",
      ],
      open: { text: "Readers understood it without instructions, and", accent: "one flaw is still open." },
      parts: [
        {
          heading: "Who reviewed it",
          text: [
            "The visitors came from different backgrounds, so the site had to explain itself to designers and non-designers alike.",
          ],
          visual: {
            kind: "numbers",
            size: "mid",
            items: [
              { value: "25 to 30", cap: "people used it at the campus exhibition" },
              { value: "4", cap: "groups: design classmates, technical students, working professionals and the jury" },
              { value: "0", cap: "had to ask what the site was for", accent: true },
            ],
          },
        },
        {
          heading: "What they said",
          text: [
            "The comments fell into six themes: four confirmed choices the site was built on, one asked for more, and one found a problem.",
          ],
          visual: {
            kind: "lines",
            rows: [
              { label: "Clarity", lines: [{ t: "Clean and systematic, sections divided so the scroll is easy." }] },
              { label: "Colour", lines: [{ t: "A lot of colour, kept in balance, no colour pulls focus from the content." }] },
              { label: "Interaction", lines: [{ t: "Soft and smooth, with no visual disturbance." }] },
              { label: "The close", lines: [{ t: "The glimpses in part 7 give the page an informal, welcome end." }] },
              { label: "Trust", lines: [{ t: "The jury asked for a clear account of how the data was derived." }] },
              { label: "The map", lines: [{ t: "Some status colours match goal colours, so the coloured world can read as the 17 goals.", accent: true }] },
            ],
          },
        },
        {
          heading: "What it led to",
          text: [
            "Each comment that pointed at a gap became a change on the live site, except the map, which is the next fix.",
          ],
          visual: {
            kind: "invert",
            head: ["Feedback", "Change", "Result"],
            rows: [
              { fails: "Only India worked in the country explorer", flip: "Every country coded on the live site", lead: "193 countries" },
              { fails: "Regional chart: lines without exact values", flip: "Hover shows the year and % at each point", lead: "Exact values on demand" },
              { fails: "Jury: show how the data was derived", flip: "Methodology rewritten, derived figures labelled, SDR 2025 credited", lead: "Sources on the page" },
              { fails: "Why scroll through all 17 goals?", flip: "Kept as a deliberate choice, the scroll stays quick", lead: "Every goal met first" },
              { fails: "Map colours read as goal colours", flip: "Separate status colours from goal colours", lead: "Next fix", accent: true },
            ],
          },
        },
        {
          heading: "What is next",
          text: [
            "The live site is desktop first. The next round fixes the map and adds smaller screens, later rounds add live data and new ways to compare.",
          ],
          visual: {
            kind: "status",
            lists: [
              { label: "Next", items: ["Separate status colours from goal colours", "Phone and tablet layouts"] },
              { label: "Later", muted: true, items: ["Live data through the UN SDG API", "Compare two countries", "Trend arrows per goal", "Language change"] },
            ],
            note: "An independent student project, not affiliated with the United Nations.",
          },
        },
      ],
      close: { text: "Clean is where it starts,", accent: "showing the sources is what earns trust." },
    },
  ],
  // End links: the Deep Dive (/projects/un-sdgs/full, 2026-10-10), then the live website.
  endLinks: [
    { label: "View the Deep Dive", href: "/projects/un-sdgs/full" },
    { label: "View live website", href: LIVE, external: true },
  ],
};
