// Real content for the Paytm shortcut submission (added 2026-09-16).
// Per the plan: individual /projects/[slug] and /research/[slug] pages stay
// unlinked/hidden for now — every card's CTA below points straight to an
// external destination (externalUrl) instead of the internal route. See
// ProjectRow.js for how externalUrl / comingSoon are consumed.
//
// The detail-page fields (intro/infoFields/brief/sections, via
// buildDetailFields below) are UNCHANGED dummy content — those only render
// on the hidden internal pages, which are out of scope for this submission.
// Swap them for real case-study content whenever those pages actually ship.
//
// featured: true marks the 4 projects shown on the homepage's "Projects"
// section (ProjectsSection.js does `projects.filter(p => p.featured).slice(0,4)`).
// Bike Dashboard and UN SDGs are part of the 6 reviewed projects but sit on
// the /projects listing page only, not the homepage.
export const projects = [
  {
    slug: "drive-wise",
    index: "01",
    title: "Drive Wise",
    description:
      "A predictive, proactive vehicle-health platform that gives owners real-time visibility into their vehicle's condition and forecasts issues before they happen.",
    fullDescription:
      "A predictive, proactive vehicle-health platform that gives owners real-time visibility into their vehicle's condition and forecasts issues before they happen — so they only pay for genuinely necessary maintenance. Grounded in a 72-respondent survey and a Signal → Need → Opportunity → Feature synthesis mapping real user behaviour to a conceptual predictive-logic model for forecasting component wear.",
    tag: "Automotive · Predictive Data Product",
    ctaLabel: "View Project",
    externalUrl:
      "https://www.behance.net/gallery/249663175/Drive-Wise-Know-your-vehicle-before-it-fails",
    // Cover art (added 2026-09-16, "what should we do about the image
    // placeholders" fix): cropped screenshot of the item's own externalUrl
    // destination (Behance cover / Figma proto splash / the live site's own
    // hero) — see public/images/covers/ and ProjectRow.js's <img> rendering.
    coverImage: "/images/covers/drive-wise.jpg",
    featured: true,
    ...buildDetailFields(5, { closingBodyIndex: 2 }),
  },
  {
    slug: "intelligent-waste-disposal-system",
    index: "02",
    title: "Intelligent Waste Disposal System",
    description:
      "A sensor-based autonomous waste bin combining perception, decision logic, and interactive feedback to encourage responsible disposal — installed and used in a real classroom.",
    fullDescription:
      "A sensor-based autonomous system combining perception, decision logic, and interactive feedback to influence human behaviour around waste disposal in real-world scenarios. Built on real hardware (ultrasonic sensors, OLED displays, voice/audio feedback) with corrective, non-aggressive Hindi voice responses — the working prototype has been installed and used in an actual classroom, not just simulated.",
    tag: "Physical Computing · Embedded AI",
    ctaLabel: "View Project",
    externalUrl:
      "https://www.behance.net/gallery/249605447/Intelligent-Waste-Disposal-System",
    coverImage: "/images/covers/intelligent-waste-disposal-system.jpg",
    featured: true,
    ...buildDetailFields(3),
  },
  {
    slug: "myjio-customer-assistance",
    index: "03",
    title: "MyJio Customer Assistance",
    description:
      "An AI customer-assistance chatbot concept for Jio's app, built around a controlled keyword vocabulary distilled from real customer queries.",
    fullDescription:
      "An AI customer-assistance chatbot concept for Jio's app, designed around a controlled keyword vocabulary — the \"Keyword Rulebook,\" an NLP-style taxonomy (Issue/Condition/Action/Emotion/Frustration/Anger/Sarcasm) built from real Hindi/Hinglish customer phrases, paired with a live emotion slider in the chat UI.",
    tag: "Conversational AI",
    ctaLabel: "View Project",
    externalUrl:
      "https://www.behance.net/gallery/249662667/MyJio-Customer-Assistance",
    coverImage: "/images/covers/myjio-customer-assistance.jpg",
    featured: true,
    ...buildDetailFields(4),
  },
  {
    slug: "interactive-playkit-for-kids",
    index: "04",
    title: "Interactive Playkit for Kids",
    description:
      "A physical + digital play kit for children, combining tactile pieces with story-driven digital interaction. (Published on Behance as \"Play Trail — Interactive Game Design.\")",
    fullDescription:
      "A physical + digital play kit for children, combining tactile pieces with story-driven digital interaction — bridging the gap between physical and digital play. Co-designed for the \"Human Factors in Interaction Design\" module. Published on Behance as \"Play Trail — Interactive Game Design.\"",
    tag: "Children's Phygital Play",
    ctaLabel: "View Project",
    externalUrl:
      "https://www.behance.net/gallery/255115915/Play-Trail-Interactive-Game-Design",
    // Behance's own cover for this project is mostly whitespace around a
    // small centered title (verified via screenshot 2026-09-16) — this is
    // an accurate crop of the real cover, not a placeholder; flagged to
    // Sukhman as a candidate for a richer cover image later.
    coverImage: "/images/covers/interactive-playkit-for-kids.jpg",
    featured: true,
    ...buildDetailFields(6),
  },
  {
    slug: "bike-dashboard-design",
    index: "05",
    title: "Bike Dashboard Design",
    description:
      "A redesigned motorcycle instrument-cluster UI focused on rider readability and cognitive load, grounded in ISO display-readability standards and a real Ducati brand guide.",
    fullDescription:
      "A redesigned motorcycle instrument-cluster UI focused on rider readability and cognitive load in-motion. Backed by a 194-respondent survey and industry standards — ISO 15008 (display readability) and ISO 6727 (automotive iconography) — plus a real Ducati brand style guide as a competitive benchmark.",
    tag: "Automotive HMI",
    ctaLabel: "View Project",
    externalUrl:
      "https://www.behance.net/gallery/249666485/Bike-Dashboard-Design",
    coverImage: "/images/covers/bike-dashboard-design.jpg",
    featured: false,
    ...buildDetailFields(4),
  },
  {
    slug: "un-sdgs",
    index: "06",
    title: "UN Sustainable Development Goals",
    description:
      "A data-visualization series on progress across the UN Sustainable Development Goals, including a country-by-country drill-down explorer.",
    fullDescription:
      "An infographic series visualizing progress across the UN Sustainable Development Goals, built as an interactive Figma prototype — including a \"See where your country stands\" drill-down explorer (currently wired for India; other countries are visual-only for now).",
    tag: "Data Visualization · Civic",
    ctaLabel: "View Project",
    externalUrl:
      "https://www.figma.com/proto/EMzU51XyZk78B0dwyoTE0z/M.DES--Semester-02---Intelligent-Design-Decisions?node-id=1-28352&viewport=494%2C11%2C0.03&t=X4ZtPedOC7ffy0FY-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=49%3A8231&page-id=0%3A1",
    coverImage: "/images/covers/un-sdgs.jpg",
    featured: false,
    ...buildDetailFields(3),
  },
];

// research items — see ProjectRow.js for how comingSoon items render (no
// clickable CTA, "Coming Soon" tag) vs. items with a real externalUrl.
// 2 of these are still pending real content/links from Sukhman as of
// 2026-09-16 — see the comingSoon items below.
export const research = [
  {
    slug: "billboards-interactive-communication-systems",
    index: "01",
    title: "Billboards as Interactive Communication Systems",
    description:
      "A smart, interactive billboard system reimagining passive urban advertising as two-way public communication.",
    fullDescription:
      "A smart, interactive billboard system reimagining passive urban advertising as two-way public communication — grounded in the portfolio's most rigorous primary field research (50+ surveys, 15+ interviews conducted in Hindi/Hinglish across Ahmedabad/Gandhinagar).",
    tag: "Service · Urban Design",
    ctaLabel: "View Project",
    externalUrl:
      "https://www.behance.net/gallery/249665017/Billboards-as-Interactive-Communication-Systems",
    coverImage: "/images/covers/billboards-interactive-communication-systems.jpg",
    comingSoon: false,
    ...buildDetailFields(4, { closingBodyIndex: 1 }),
  },
  {
    slug: "canteen-queue-management",
    index: "02",
    title: "Canteen Queue Management",
    description:
      "A crowd-analysis study of canteen queueing behavior — team project.",
    fullDescription:
      "A crowd-analysis study of canteen queueing behavior, built with a teammate (zaletic) and hosted live.",
    tag: "Service Design",
    ctaLabel: "View Project",
    externalUrl: "https://zaletic.github.io/Canteen-Crowd-Analysis/",
    coverImage: "/images/covers/canteen-queue-management.jpg",
    comingSoon: false,
    ...buildDetailFields(3),
  },
  {
    slug: "drive-wise-research",
    index: "03",
    title: "Drive Wise — Research Analysis",
    description:
      "The primary-research site behind Drive Wise: survey data, empathy mapping, and the Signal → Need → Opportunity → Feature synthesis.",
    fullDescription:
      "The research-analysis site behind Drive Wise — the 72-respondent survey, empathy mapping, and the Signal → Need → Opportunity → Feature synthesis table that shaped the platform's predictive-logic model.",
    tag: "Automotive · UX Research",
    ctaLabel: "View Project",
    // Not hosted elsewhere yet — served directly from this site as a
    // static file (public/research/drive-wise-research-site.html), copied
    // from Sukhman's local drive-wise-research-site_2.html (2026-09-16).
    externalUrl: "/research/drive-wise-research-site.html",
    coverImage: "/images/covers/drive-wise-research.jpg",
    comingSoon: false,
    ...buildDetailFields(3),
  },
  {
    slug: "physiotherapy-research-website",
    index: "04",
    title: "Physiotherapy Research Website",
    description:
      "Which body region needs a physiotherapy-kit design intervention most, for severe pediatric trauma / RTA-related orthopedic injury in India.",
    fullDescription:
      "Body-region analysis for pediatric physiotherapy: which region (Arm, Back, Leg, Neck) is most affected in severe pediatric trauma / RTA-related orthopedic injury in India — TITCO-I and South India cohort data, formal hypothesis testing, and 4 physiotherapist interviews feeding real design directions.",
    tag: "Health-Tech · UX Research",
    ctaLabel: "View Project",
    // Hosted directly on this site as a static file
    // (public/research/physiotherapy-research-website.html), copied from
    // Sukhman's local reality-remix-analysis.html (2026-09-16).
    externalUrl: "/research/physiotherapy-research-website.html",
    coverImage: "/images/covers/physiotherapy-research-website.jpg",
    comingSoon: false,
    ...buildDetailFields(3),
  },
];

// Shared placeholder builder for the detail-page fields (intro/infoFields/
// brief/sections) — used by BOTH projects and research above. Kept as a
// function so section COUNT and body LENGTH can vary item-to-item. These
// still render dummy Lorem-ipsum content — they only appear on the hidden
// internal /projects/[slug] and /research/[slug] pages, which are out of
// scope for the Paytm shortcut submission (every card's CTA points
// externally instead). Swap for real case-study content when those pages
// actually ship.
function buildDetailFields(sectionCount, { closingBodyIndex } = {}) {
  return {
    introLabel: "Title",
    intro:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    infoFields: [
      { label: "Discipline", value: "Lorem ipsum" },
      { label: "Timeline", value: "Lorem ipsum" },
      { label: "Role", value: "Lorem ipsum" },
      { label: "Tools Used", value: "Lorem ipsum" },
    ],
    briefLabel: "Brief",
    brief:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nDonec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
    sections: Array.from({ length: sectionCount }).map((_, i) => {
      const section = {
        id: `section-${i + 1}`,
        tocLabel: "Lorem ipsum",
        heading: `Lorem Ipsum Topic ${i + 1}`,
        body:
          i % 2 === 1
            ? "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n\nAenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim."
            : "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
        image: true,
      };
      if (i === closingBodyIndex) {
        section.closingBody =
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. AeneanCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. AeneanCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.";
      }
      return section;
    }),
  };
}

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getResearchBySlug(slug) {
  return research.find((r) => r.slug === slug);
}

// Timeline (Landing Page Section 4.0) — pixel-exact point positions pulled
// directly from Figma nodes 360:1550 (default), 364:1649 (hover),
// 376:9343 (after-click), fileKey 2yjcklO1oFjK8rICoeBD67. Unchanged from
// the original data.js — not part of the Paytm shortcut submission's scope.
export const timelinePoints = [
  { id: 1, x: 58, cluster: 0 },
  { id: 2, x: 83, cluster: 0 },
  { id: 3, x: 108, cluster: 0 },
  { id: 4, x: 173, cluster: 1 },
  { id: 5, x: 198, cluster: 1 },
  { id: 6, x: 223, cluster: 1 },
  { id: 7, x: 248, cluster: 1 },
  { id: 8, x: 313, cluster: 2 },
  { id: 9, x: 338, cluster: 2 },
  { id: 10, x: 363, cluster: 2 },
  { id: 11, x: 428, cluster: 3 },
  { id: 12, x: 453, cluster: 3 },
  { id: 13, x: 478, cluster: 3, defaultSelected: true },
  { id: 14, x: 503, cluster: 3 },
  { id: 15, x: 568, cluster: 4 },
  { id: 16, x: 593, cluster: 4 },
  { id: 17, x: 618, cluster: 4 },
  { id: 18, x: 643, cluster: 4 },
  { id: 19, x: 668, cluster: 4 },
  { id: 20, x: 693, cluster: 4 },
  { id: 21, x: 718, cluster: 4 },
  { id: 22, x: 743, cluster: 4 },
  { id: 23, x: 808, cluster: 5 },
  { id: 24, x: 833, cluster: 5 },
  { id: 25, x: 858, cluster: 5 },
  { id: 26, x: 883, cluster: 5 },
  { id: 27, x: 908, cluster: 5 },
  { id: 28, x: 933, cluster: 5 },
  { id: 29, x: 958, cluster: 5 },
  { id: 30, x: 983, cluster: 5 },
  { id: 31, x: 1008, cluster: 5 },
  { id: 32, x: 1033, cluster: 5 },
  { id: 33, x: 1058, cluster: 5 },
  { id: 34, x: 1123, cluster: 6 },
  { id: 35, x: 1148, cluster: 6 },
  { id: 36, x: 1173, cluster: 6 },
  { id: 37, x: 1198, cluster: 6 },
  { id: 38, x: 1223, cluster: 6 },
  { id: 39, x: 1248, cluster: 6 },
  { id: 40, x: 1273, cluster: 6 },
  { id: 41, x: 1298, cluster: 6 },
  { id: 42, x: 1323, cluster: 6 },
  { id: 43, x: 1348, cluster: 6 },
  { id: 44, x: 1373, cluster: 6 },
].map((point) => ({
  ...point,
  title: "Lorem ipsum dolor",
  description:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean",
  tag: "Lorem ipsum",
  metaTop: "Lorem ipsum",
  metaBottom: "Lorem ipsum",
}));

export const timelineClusters = [
  { year: "202X", x: 7 },
  { year: "202X", x: 122 },
  { year: "202X", x: 262 },
  { year: "202X", x: 377 },
  { year: "202X", x: 517 },
  { year: "202X", x: 757 },
  { year: "202X", x: 1072 },
];
