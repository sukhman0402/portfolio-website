// Projects and research shown on the site.
//
// Links (decision 2026-09-29, Sukhman): the internal /projects/<slug> and
// /research/<slug> pages stay UNLINKED until their case-study content is
// written. Every card's CTA (and every homepage Research row) still goes to
// `externalUrl`: the Behance case study, live prototype or full research
// website. To switch an item's page on later, delete its `externalUrl`
// line; ProjectRow.js / ResearchRow.js then link to the internal page.
//
// Cover images (coverSet, below) show on all pages already, including the
// unlinked internal pages, so they are ready when those pages go live.
//
// The detail-page fields (intro/infoFields/brief/sections, via
// buildDetailFields below) are still DUMMY Lorem ipsum. Replace them with
// real case-study content before switching the pages on.
// Drive Wise is the first real one (2026-10-04): its content lives in
// src > lib > driveWiseCaseStudy.js.
//
// DESCRIPTION RULES (2026-09-25, Sukhman):
//   - description     = the opening of the sentence. Must fit ONE line on a
//                       desktop screen. The site adds ".." after it when the
//                       row is collapsed, so don't end it with punctuation.
//   - descriptionMore = the continuation, shown only when expanded (and on
//                       the /projects and /research listing pages). It picks
//                       up exactly where description stops, so start it with
//                       ", " / ". " / ": " / " " as the sentence needs.
//   - No em dashes anywhere in site copy (use a comma, colon or full stop).
//   - Descriptions are about the product only: no Behance, no live/hosted
//     status. Expanded (description + descriptionMore) fits 2 lines on a
//     laptop/desktop screen.
//   - Research items also have `summary`: ONE complete sentence that fits
//     one line on desktop, shown in the homepage Research list (no ".."
//     there on desktop). No participant counts in research copy; those
//     belong on the research's own page.
//
// featured: true marks the 4 projects shown on the homepage's "Projects"
// section (ProjectsSection.js does `projects.filter(p => p.featured).slice(0,4)`).
// Bike Dashboard and UN SDGs are part of the 6 reviewed projects but sit on
// the /projects listing page only, not the homepage.
import { driveWiseCaseStudy } from "./driveWiseCaseStudy";
import { driveWiseShortCaseStudy } from "./driveWiseShortCaseStudy";
import { binaCaseStudy } from "./binaCaseStudy";
 
export const projects = [
  {
    slug: "drive-wise",
    index: "01",
    title: "Drive Wise",
    description:
      "A predictive vehicle-health platform that shows owners their vehicle's real-time condition and forecasts issues before they happen",
    descriptionMore:
      ", so they only pay for necessary maintenance. Backed by a 72-respondent survey and a predictive model of component wear.",
    tag: "Automotive · Predictive Data Product",
    ctaLabel: "View Project",
    // externalUrl removed 2026-10-04 (Sukhman): the case study is live, so
    // "View Project" now opens /projects/drive-wise instead of Behance.
    // Behance: https://www.behance.net/gallery/249663175/Drive-Wise-Know-your-vehicle-before-it-fails
    // Cover images: see coverSet() below (3 designed images per item).
    ...coverSet("drive-wise"),
    featured: true,
    // Case-study page content (final, 2026-10-04): every field below the
    // hero image lives in src > lib > driveWiseCaseStudy.js.
    ...driveWiseCaseStudy,
    // Two formats (Sukhman, 2026-10-05): /projects/drive-wise shows the
    // short 5-step case study (src > lib > driveWiseShortCaseStudy.js) and
    // ends with a link to the full 13-stage one, now on
    // /projects/drive-wise/full (src > app > projects > [slug] > full).
    sections: driveWiseShortCaseStudy.sections,
    endLinks: driveWiseShortCaseStudy.endLinks,
    fullSections: driveWiseCaseStudy.sections,
  },
  {
    slug: "intelligent-waste-disposal-system",
    index: "02",
    title: "Intelligent Waste Disposal System",
    description:
      "A sensor-based autonomous waste bin that combines perception, decision logic and interactive feedback to encourage responsible disposal",
    descriptionMore:
      ", with corrective, non-aggressive Hindi voice responses. Built and tested as a working prototype in a real classroom.",
    tag: "Physical Computing · Embedded AI",
    ctaLabel: "View Project",
    // externalUrl removed 2026-10-05 (Sukhman): the case study is live, so
    // "View Project" now opens /projects/intelligent-waste-disposal-system.
    // Behance: https://www.behance.net/gallery/249605447/Intelligent-Waste-Disposal-System
    ...coverSet("intelligent-waste-disposal-system"),
    featured: true,
    // Case-study page content (final, 2026-10-05): every field below the
    // hero image lives in src > lib > binaCaseStudy.js. Live (linked)
    // since 2026-10-05.
    ...binaCaseStudy,
  },
  {
    slug: "myjio-customer-assistance",
    index: "03",
    title: "MyJio Customer Assistance",
    description:
      "An AI customer-assistance chatbot concept for Jio's app, built on a \"Keyword Rulebook\"",
    descriptionMore:
      ": a taxonomy of real Hindi/Hinglish customer phrases by issue, action and emotion, paired with a live emotion slider in the chat.",
    tag: "Conversational AI",
    ctaLabel: "View Project",
    externalUrl:
      "https://www.behance.net/gallery/249662667/MyJio-Customer-Assistance",
    ...coverSet("myjio-customer-assistance"),
    featured: true,
    ...buildDetailFields(4),
  },
  {
    slug: "interactive-playkit-for-kids",
    index: "04",
    title: "Interactive Playkit for Kids",
    description:
      "A physical + digital play kit for children that combines tactile pieces with story-driven digital interaction",
    descriptionMore:
      ", bridging physical and digital play. Co-designed for the \"Human Factors in Interaction Design\" module.",
    tag: "Children's Phygital Play",
    ctaLabel: "View Project",
    externalUrl:
      "https://www.behance.net/gallery/255115915/Play-Trail-Interactive-Game-Design",
    ...coverSet("interactive-playkit-for-kids"),
    featured: true,
    ...buildDetailFields(6),
  },
  {
    slug: "bike-dashboard-design",
    index: "05",
    title: "Bike Dashboard Design",
    description:
      "A redesigned motorcycle instrument-cluster UI focused on rider readability and cognitive load in motion",
    descriptionMore:
      ", backed by a 194-respondent survey, the ISO 15008 and ISO 6727 standards, and a Ducati brand style guide benchmark.",
    tag: "Automotive HMI",
    ctaLabel: "View Project",
    externalUrl:
      "https://www.behance.net/gallery/249666485/Bike-Dashboard-Design",
    ...coverSet("bike-dashboard-design"),
    featured: false,
    ...buildDetailFields(4),
  },
  {
    slug: "un-sdgs",
    index: "06",
    title: "UN Sustainable Development Goals",
    description:
      "An interactive infographic series visualizing progress across the UN Sustainable Development Goals",
    descriptionMore:
      ", designed in Figma with a \"See where your country stands\" drill-down explorer.",
    tag: "Data Visualization · Civic",
    ctaLabel: "View Project",
    externalUrl:
      "https://www.figma.com/proto/EMzU51XyZk78B0dwyoTE0z/M.DES--Semester-02---Intelligent-Design-Decisions?node-id=1-28352&viewport=494%2C11%2C0.03&t=X4ZtPedOC7ffy0FY-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=49%3A8231&page-id=0%3A1",
    ...coverSet("un-sdgs"),
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
    // summary = the homepage Research list's one-liner (complete, no ".." on
    // desktop, so it must fit one line at 1280px+). See ResearchRow.js.
    summary:
      "A smart, interactive billboard system that turns passive urban advertising into two-way public communication.",
    description:
      "A smart, interactive billboard system reimagining passive urban advertising as two-way public communication",
    descriptionMore:
      ", grounded in public surveys and Hindi/Hinglish field interviews across Ahmedabad and Gandhinagar.",
    tag: "Service · Urban Design",
    ctaLabel: "View Project",
    externalUrl:
      "https://www.behance.net/gallery/249665017/Billboards-as-Interactive-Communication-Systems",
    ...coverSet("billboards-interactive-communication-systems"),
    comingSoon: false,
    ...buildDetailFields(4, { closingBodyIndex: 1 }),
  },
  {
    slug: "canteen-queue-management",
    index: "02",
    title: "Canteen Queue Management",
    // summary = the homepage Research list's one-liner (complete, no ".." on
    // desktop, so it must fit one line at 1280px+). See ResearchRow.js.
    summary:
      "A team study of lunch-hour queues across five campus canteens, and whether a queue system could fix them.",
    description:
      "A team crowd-analysis study of lunch-hour queues across five campus canteens",
    descriptionMore:
      ", measuring how long students wait, how it feels, what it costs them and whether a queue system could fix it.",
    tag: "Service Design",
    ctaLabel: "View Project",
    externalUrl: "https://zaletic.github.io/Canteen-Crowd-Analysis/",
    ...coverSet("canteen-queue-management"),
    comingSoon: false,
    ...buildDetailFields(3),
  },
  {
    slug: "drive-wise-research",
    index: "03",
    title: "Drive Wise: Research Analysis",
    // summary = the homepage Research list's one-liner (complete, no ".." on
    // desktop, so it must fit one line at 1280px+). See ResearchRow.js.
    summary:
      "The primary research behind Drive Wise, from owner surveys and empathy mapping to its predictive-logic model.",
    description:
      "The primary research behind Drive Wise: a survey of vehicle owners, empathy mapping",
    descriptionMore:
      ", and a Signal → Need → Opportunity → Feature synthesis that shaped the platform's predictive-logic model.",
    tag: "Automotive · UX Research",
    ctaLabel: "View Project",
    // Not hosted elsewhere yet — served directly from this site as a
    // static file (public/research/drive-wise-research-site.html), copied
    // from Sukhman's local drive-wise-research-site_2.html (2026-09-16).
    externalUrl: "/research/drive-wise-research-site.html",
    ...coverSet("drive-wise-research"),
    comingSoon: false,
    ...buildDetailFields(3),
  },
  {
    slug: "physiotherapy-research-website",
    index: "04",
    title: "Physiotherapy Research Website",
    // summary = the homepage Research list's one-liner (complete, no ".." on
    // desktop, so it must fit one line at 1280px+). See ResearchRow.js.
    summary:
      "A body-region analysis of pediatric trauma in India, to decide where a physiotherapy product should focus.",
    description:
      "A body-region analysis for a pediatric physiotherapy product, finding which region needs design intervention most",
    descriptionMore:
      " in severe pediatric trauma in India, using TITCO-I and South India cohort data and physiotherapist interviews.",
    tag: "Health-Tech · UX Research",
    ctaLabel: "View Project",
    // Hosted directly on this site as a static file
    // (public/research/physiotherapy-research-website.html), copied from
    // Sukhman's local reality-remix-analysis.html (2026-09-16).
    externalUrl: "/research/physiotherapy-research-website.html",
    ...coverSet("physiotherapy-research-website"),
    comingSoon: false,
    ...buildDetailFields(3),
  },
];
 
// Cover images (2026-09-29, direct instruction): each project / research
// item has THREE images Sukhman designed in Figma (section "for Claude",
// node 519:992), one per place the item appears:
//   - coverHome: the homepage dropdown (1380 x 700 frame)
//   - coverList: the /projects or /research listing page (1380 x 700)
//   - coverPage: the top of the item's own page (1380 x 480)
// Exported from Figma at 2x (2760px wide) as JPEG, stored in
// public > images > projects > <slug> > home.jpg / list.jpg / page.jpg.
// next/image serves smaller, resized copies to each screen automatically.
// To swap an image later: export the Figma frame at 2x and upload it with
// the same file name.
function coverSet(slug) {
  const base = `/images/covers/projects/${slug}`;
  return {
    coverHome: `${base}/home.jpg`,
    coverList: `${base}/list.jpg`,
    coverPage: `${base}/page.jpg`,
  };
}
 
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
    // Info row order (Sukhman, 2026-10-02): Discipline, Role, Tools, Timeline.
    //   Discipline = the ONE industry the project relates to most (e.g. Automotive).
    //   Role       = the design role that fits the work (e.g. UX Design).
    infoFields: [
      { label: "Discipline", value: "Lorem ipsum" },
      { label: "Role", value: "Lorem ipsum" },
      { label: "Tools Used", value: "Lorem ipsum" },
      { label: "Timeline", value: "Lorem ipsum" },
    ],
    // "The Problem" band below Brief (restored 2026-10-02). Keep it the
    // general, pre-research problem; the evidence-backed problem
    // statement belongs in the Define section further down.
    problemLabel: "The Problem",
    problem:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
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
 
// Timeline (Landing Page Section 4.0) — 44 points, final content
// (Sukhman, 2026-10-02), copied from the Google Sheet "Portfolio : Timeline
// Data" via Timeline_Data_Drafts.xlsx. Order = oldest (left) to newest (right).
//
// Fields per point:
//   title       -> bold title (keep to one line, about 37 characters)
//   description -> intro + one standout factor. SAME length band for every
//                  entry: 147 to 165 characters (2 lines on desktop, 4 on
//                  most phones), so the panel never changes shape.
//   tag         -> ONE domain, grey, under the description
//   software    -> right column, top. Every entry should have one; the line
//                  is reserved even when "" so the layout never shifts.
//   link        -> right column, bottom. Either a URL (shown as a short
//                  clickable label, e.g. "Behance ↗") or one status word:
//                  "In Progress..", "Completed" or "Coming Soon". Every entry has one.
//
// x positions follow the Figma spacing rules and must not be hand-edited
// individually: ticks 25px apart inside a year, 65px from the last tick of
// one year to the first tick of the next, year label 51px left of its
// year's first tick. First tick x = 58, last = 1373 (inside the 1380px box).
// Any 44 points across 7 years end at the same 1373, whatever the split.
// Per-year split: 2020: 3, 2021: 2, 2022: 1, 2023: 2, 2024: 6, 2025: 11,
// 2026: 19.
export const timelinePoints = [
  // 2020
  { id: 1, x: 58, cluster: 0,
    title: "Character Sketching",
    description: "Character sketches I draw by hand: a habit that keeps my drawing practice alive and still shapes how I sketch ideas on paper before any digital design work.",
    tag: "Illustration", software: "", link: "In Progress.." },
  { id: 2, x: 83, cluster: 0,
    title: "Campion School, Bhopal",
    description: "Completed my 10th and 12th in the science stream at Campion School, Bhopal: the city I grew up in, and the science foundation I still bring to every design.",
    tag: "Education", software: "", link: "Completed" },
  { id: 3, x: 108, cluster: 0,
    title: "AutoCAD",
    description: "AutoCAD was my everyday drafting tool across all five years of my Bachelor of Architecture, used for the plans, sections and drawings behind every studio project.",
    tag: "Architecture", software: "AutoCAD", link: "Completed" },
  // 2021
  { id: 4, x: 173, cluster: 1,
    title: "Bharat Bhavan Visit",
    description: "Visited Bharat Bhavan, Bhopal's well-known arts centre, for an art exhibition, two years before I went on to redesign its entire brand identity, from logo to bags.",
    tag: "Art", software: "", link: "Completed" },
  { id: 5, x: 198, cluster: 1,
    title: "My Black R15",
    description: "The day I bought my black Yamaha R15, years before I went on to redesign a motorcycle instrument cluster for riders like me in my own Bike Dashboard project.",
    tag: "Personal", software: "", link: "Completed" },
  // 2022
  { id: 6, x: 263, cluster: 2,
    title: "Sehore Village Survey",
    description: "During my B.Arch, I surveyed 100 people in a remote village in Sehore, Madhya Pradesh: my first large field survey, done face to face with the community there.",
    tag: "Field Research", software: "", link: "Completed" },
  // 2023
  { id: 7, x: 328, cluster: 3,
    title: "Figurine Dropshipping",
    description: "A short-run side business I started, sourcing anime figurines from Alibaba and selling them online through dropshipping, from product listings to customer orders.",
    tag: "E-commerce", software: "", link: "Completed" },
  { id: 8, x: 353, cluster: 3,
    title: "Bharat Bhavan Rebrand",
    description: "A complete brand identity redesign for Bharat Bhavan, Bhopal's Charles Correa-designed arts centre: logo, posters, brochures, ID cards, packaging and bags.",
    tag: "Brand Identity", software: "", link: "Completed" },
  // 2024
  { id: 9, x: 418, cluster: 4,
    title: "Auxost: Cardyz",
    description: "Mobile interfaces for Cardyz, plus its NFC business cards and QR standees, letting retail customers tap or scan to see things like a menu, across business types.",
    tag: "Mobile UI", software: "", link: "Completed" },
  { id: 10, x: 443, cluster: 4,
    title: "Auxost: BodyFuel",
    description: "Product development, website design and inventory management for BodyFuel, Auxost's own fitness-supplement brand selling proteins, vitamins and more.",
    tag: "E-commerce", software: "", link: "Completed" },
  { id: 11, x: 468, cluster: 4,
    title: "Auxost: Agency Website",
    description: "Designed the website for Auxost, the marketing agency I interned with, presenting its services and its own product brands, BodyFuel and Cardyz, in one place.",
    tag: "Web Design", software: "", link: "Completed" },
  { id: 12, x: 493, cluster: 4,
    title: "Lumen: HORECA",
    description: "Helped Lassi Corner set up a franchise and a new B2B income line, handling its packaging, marketing and Instagram. The B2B line grew 12% month on month.",
    tag: "Business Strategy", software: "", link: "Completed" },
  { id: 13, x: 518, cluster: 4,
    title: "Lumen: Sports Academy",
    description: "Events, branding and advertising for a client running 3 to 4 sports academies across tennis, pickleball and swimming, all aimed at bringing in new members.",
    tag: "Marketing", software: "", link: "Completed" },
  { id: 14, x: 543, cluster: 4,
    title: "Lumen: Car Rental",
    description: "Growth work for a car-rental client: vehicle photo shoots, brochures, marketing and a full online presence, along with plans for expanding the business further.",
    tag: "Marketing", software: "", link: "Completed" },
  // 2025
  { id: 15, x: 608, cluster: 5,
    title: "Lumen: Strength Station",
    description: "Gym layout, branding, business plan and expansion strategy for Strength Station, bringing my architectural space planning into building a fitness brand.",
    tag: "Spatial Design", software: "", link: "Completed" },
  { id: 16, x: 633, cluster: 5,
    title: "Lumen: Bhopal Barbell Battle",
    description: "A city strength event run end to end by Lumen: venues, vendors, gym-to-gym promotion, online marketing, sponsorships, a full prize pool and prize distribution.",
    tag: "Event Design", software: "", link: "Completed" },
  { id: 17, x: 658, cluster: 5,
    title: "Lumen: OneWorx",
    description: "Business models, brand identity and expansion plans for OneWorx, a co-working space, handled as a client of Lumen Consultancy, the design firm I co-founded.",
    tag: "Brand Strategy", software: "", link: "Completed" },
  { id: 18, x: 683, cluster: 5,
    title: "CEED Interviews",
    description: "Interviewed for M.Des admission at IIT Bombay, IIT Delhi, IIT Kanpur, IIT Guwahati, IIT Roorkee and one more IIT, after the CEED design entrance exam.",
    tag: "Design Education", software: "", link: "Completed" },
  { id: 19, x: 708, cluster: 5,
    title: "Bharat Nōgyō",
    description: "A blockchain-enabled B2B platform linking Indian farmers to Japanese buyers, with 5 role-based dashboards. Finalist at the India Japan STI Forum, IISc Bangalore.",
    tag: "AgriTech", software: "Figma, Figma Make", link: "Completed" },
  { id: 20, x: 733, cluster: 5,
    title: "Prestige University",
    description: "A university website and brand refresh built on Aaker's brand-personality model, as a team of three. Benchmarked against Princeton, Stanford and IIM Ahmedabad.",
    tag: "Brand Strategy", software: "Figma", link: "Completed" },
  { id: 21, x: 758, cluster: 5,
    title: "Aarogya+",
    description: "A health and wellness app with health scores, hydration insights and mental-health tools. Its features are backed by real Kaggle healthcare data analysed in Colab.",
    tag: "Health & Wellness", software: "Figma, Figma Make, Colab, Kaggle", link: "Completed" },
  { id: 22, x: 783, cluster: 5,
    title: "Tatix",
    description: "A speculative skin-worn tattoo that replaces phone taps with gesture, haptic and temperature cues. Grounded in MIT Media Lab research such as AlterEgo and DuoSkin.",
    tag: "Speculative Design", software: "", link: "Completed" },
  { id: 23, x: 808, cluster: 5,
    title: "Samsung Bespoke Refrigerator",
    description: "A redesign of the Samsung Bespoke Family Hub fridge touchscreen, judged on 7 criteria. Prototyped as a working smart-fridge OS with 20+ pages in Figma Make.",
    tag: "Smart Home", software: "Figma Make, Google Colab, Kaggle", link: "Completed" },
  { id: 24, x: 833, cluster: 5,
    title: "Bike Dashboard Design",
    description: "A motorcycle instrument-cluster redesign built for readability in motion. Backed by a 194-person survey, ISO 15008 and ISO 6727, and a Ducati style benchmark.",
    tag: "Automotive", software: "Figma", link: "https://www.behance.net/gallery/249666485/Bike-Dashboard-Design" },
  { id: 25, x: 858, cluster: 5,
    title: "Heuristic Evaluation",
    description: "A solo usability audit of a smart wearable, testing its interface screen by screen against Nielsen's 10 usability heuristics to find where it breaks down.",
    tag: "Usability", software: "", link: "Completed" },
  // 2026
  { id: 26, x: 923, cluster: 6,
    title: "MyJio Customer Assistance",
    description: "A chatbot concept for Jio's app, built on a Keyword Rulebook of real Hindi and Hinglish customer phrases. Pairs every chat with a live emotion slider.",
    tag: "Conversational AI", software: "Figma", link: "https://www.behance.net/gallery/249662667/MyJio-Customer-Assistance" },
  { id: 27, x: 948, cluster: 6,
    title: "Interactive Billboards",
    description: "A smart billboard system turning passive urban advertising into two-way public communication, built on surveys and field interviews in Ahmedabad and Gandhinagar.",
    tag: "Urban Design", software: "", link: "https://www.behance.net/gallery/249665017/Billboards-as-Interactive-Communication-Systems" },
  { id: 28, x: 973, cluster: 6,
    title: "Intelligent Waste Disposal System",
    description: "A sensor-based smart bin that checks every disposal and replies with calm Hindi voice feedback. Built as a working prototype and installed in a real classroom.",
    tag: "Physical Computing", software: "Arduino IDE, GitHub, Claude Code, ElevenLabs", link: "/projects/intelligent-waste-disposal-system" },
  { id: 29, x: 998, cluster: 6,
    title: "UN Sustainable Development Goals",
    description: "An interactive infographic series on progress across the UN Sustainable Development Goals, with a drill-down explorer showing where any country stands.",
    tag: "Data Visualization", software: "Figma", link: "https://www.figma.com/proto/EMzU51XyZk78B0dwyoTE0z/M.DES--Semester-02---Intelligent-Design-Decisions?node-id=1-28352&viewport=494%2C11%2C0.03&t=X4ZtPedOC7ffy0FY-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=49%3A8231&page-id=0%3A1" },
  { id: 30, x: 1023, cluster: 6,
    title: "Interactive Playkit for Kids",
    description: "A play kit for children that joins tactile pieces with story-driven digital interaction, co-designed as a team of two and published on Behance as Play Trail.",
    tag: "Phygital Play", software: "Figma", link: "https://www.behance.net/gallery/255115915/Play-Trail-Interactive-Game-Design" },
  { id: 31, x: 1048, cluster: 6,
    title: "Manch",
    description: "A service design project connecting artists with the people who hire them, built entirely in Figma. Selected to present at the ServDesign Conference 2026.",
    tag: "Service Design", software: "Figma", link: "In Progress.." },
  { id: 32, x: 1073, cluster: 6, defaultSelected: true,
    title: "Drive Wise",
    description: "A predictive vehicle-health platform that forecasts component wear before it fails, so owners only pay for repairs they need. Backed by a 72-owner survey.",
    tag: "Automotive", software: "Figma, FigJam, Google Forms, Sheets, Colab", link: "/projects/drive-wise" },
  { id: 33, x: 1098, cluster: 6,
    title: "StoryLoop",
    description: "A screen-free physiotherapy toy where children move a figurine through a resistance loop to unlock an audio story. Shaped by interviews with physiotherapists.",
    tag: "Health-Tech", software: "ESP32", link: "Completed" },
  { id: 34, x: 1123, cluster: 6,
    title: "Placement Cell",
    description: "Designed the batch placement brochure and supported the placement cell: company outreach lists, recruiter follow-ups and one-to-one work with the cell head.",
    tag: "Brand Design", software: "", link: "In Progress.." },
  { id: 35, x: 1148, cluster: 6,
    title: "Breathe-Dial Nasal Strip",
    description: "A reusable nasal strip that senses breathing overnight and lets the wearer dial in the right opening. Mapped as one ecosystem of sensors, Bluetooth, app and cloud.",
    tag: "Health-Tech", software: "", link: "Completed" },
  { id: 36, x: 1173, cluster: 6,
    title: "Cadbury AR Campaign",
    description: "An augmented-reality marketing campaign for Cadbury, built as an interactive lens in Lens Studio, turning a brand advert into something people can play with.",
    tag: "AR", software: "Lens Studio", link: "Completed" },
  { id: 37, x: 1198, cluster: 6,
    title: "Amazon Rainforest VR",
    description: "An immersive Amazon rainforest experience, with every model built in Blender and the world assembled in Unity. Published and playable on the Meta Quest 3.",
    tag: "VR", software: "Blender, Unity", link: "Completed" },
  { id: 38, x: 1223, cluster: 6,
    title: "Immersive Art Exhibition",
    description: "An immersive virtual art exhibition, with models and scenes built in Blender and then developed in Unity into a space visitors can walk through and explore.",
    tag: "XR", software: "Blender, Unity", link: "Completed" },
  { id: 39, x: 1248, cluster: 6,
    title: "Canteen Queue Management",
    description: "A study of our crowded campus canteen built on reviews from 204 people, shared as a research website. A low-tech queue app for staff and students is in progress.",
    tag: "Service Design", software: "", link: "https://zaletic.github.io/Canteen-Crowd-Analysis/" },
  { id: 40, x: 1273, cluster: 6,
    title: "Bookmark Organiser",
    description: "A Chrome extension to save, categorise and filter bookmarks and clear out dead or duplicate links. Built with Claude Code and published for anyone to install.",
    tag: "Productivity", software: "Claude Code", link: "Completed" },
  { id: 41, x: 1298, cluster: 6,
    title: "Laws of UX: Smartwatch Study",
    description: "A side-by-side study of Google's and Apple's smartwatches, comparing how closely each interface follows the Laws of UX and where one outperforms the other.",
    tag: "Wearables", software: "", link: "Completed" },
  { id: 42, x: 1323, cluster: 6,
    title: "Swiggy Customer Assistance",
    description: "A decision-support concept for Swiggy's customer-support agents, helping them reach the right decision faster whenever a customer query lands on their screen.",
    tag: "Customer Support", software: "", link: "In Progress.." },
  { id: 43, x: 1348, cluster: 6,
    title: "MyAlumnus",
    description: "A gate-security app that manages visitor entry, designed end to end in a quick AI-enabled sprint, with the research, flows and interface all built using AI tools.",
    tag: "Security", software: "", link: "In Progress.." },
  { id: 44, x: 1373, cluster: 6,
    title: "Digital Cheque System",
    description: "A proposed digital cheque system for India, mapped against every current RBI guideline, ahead of an implementation window expected only after 2028.",
    tag: "FinTech", software: "", link: "In Progress.." },
];
 
export const timelineClusters = [
  { year: "2020", x: 7 },
  { year: "2021", x: 122 },
  { year: "2022", x: 212 },
  { year: "2023", x: 277 },
  { year: "2024", x: 367 },
  { year: "2025", x: 557 },
  { year: "2026", x: 872 },
];
 
 
 
 
 
