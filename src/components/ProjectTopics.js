"use client";
 
import { useEffect, useRef, useState } from "react";
 
// Individual Project page — repeatable content sections + sticky left-hand
// Contents nav, Figma node 179:3614 "Project 01 (D)- Section 1.0"
// (2026-09-01 redesign). Pairs with ProjectHeroTop.js, which renders
// everything above this (hero image, Title/intro/info-row, Brief) and ends
// on a divider this component's first section sits directly below.
//
// MOBILE, 2026-09-02: the Contents nav is desktop-only (hidden md:block on
// the <nav> below) — on mobile it isn't sticky (no room for a persistent
// sidebar in a single-column layout), so it loses its wayfinding purpose
// the moment you scroll past it. Decision was to drop it entirely on
// mobile rather than reinvent it as a different mobile widget (a
// collapsible toggle, a tab strip) — a single-column case study is just
// read top to bottom by scrolling, no jump-nav needed there. See the note
// directly on the <nav> element for the full reasoning.
//
// VISUAL spec is the exact Figma copy (see measurements below). The
// INTERACTION (sticky sidebar, current-section highlighting, click-to-jump)
// follows the Interaction Reference site "by principle" per direct
// instruction, not literal external CSS/JS (unreachable from this sandbox —
// only its text content could be fetched) — implemented here as a standard
// IntersectionObserver-driven scrollspy, which is the well-established
// pattern that reference-style sites use for exactly this UI.
//
// Deliberately a single client component (not split nav/content) because
// the nav's active-state logic needs direct refs into the content
// section's own DOM ids — splitting them would just add prop-drilling for
// no benefit, both halves are only ever rendered together anyway.
//
// Structure per section (right column, x=380-1410 in Figma):
//   heading -> 0px extra (flush, label's own line-height) -> body
//   -> 5px -> image -> [divider, right-column only, for every section
//   after the first] -> 10px -> next heading.
// The very FIRST section has no leading divider of its own — Figma's
// divider at that point is the SAME divider that closes ProjectHeroTop's
// "Brief" block (full-width, rendered by the parent), so this component's
// first section only needs the 10px gap down to its heading, not another
// border-t.
//
// SECOND content-block TYPE (added 2026-09-01, `section.closingBody`,
// spotted as "Lorem Ipsum Topic 3" newly added to the Figma source):
// heading -> body -> image -> +20px -> closing paragraph (same body
// styling) -> 10px -> next divider. Optional per section (data.js's
// `buildProjectDetail`'s `closingBodyIndex`) — this is what lets a real
// content section mix "text then image" with "text, image, then more
// text" as the actual case-study content calls for, per direct
// instruction: "different layouts while placing different informations."
//
// Left column (Contents nav, x=30-350, DESKTOP ONLY as of 2026-09-02 — see
// the mobile-removal note above): 9-item list in the source Figma
// frame, rows 25px apart (measured top-to-top; each row's own 20px
// line-height leaves a 5px residual gap, reproduced below as mt-[5px], not
// a flat mt-[25px] which would double-count the line-height). Number
// column is a fixed 39px (label always starts at x=69, 39px in from the
// number's own x=30, regardless of digit count). ACTIVE vs INACTIVE
// styling is read directly off the Figma source, which shows item "01" in
// one state and every other item in the other — the clearest evidence in
// the file itself of the scrollspy behavior asked for:
//   - active:   font-semibold, text-black
//   - inactive: font-normal,   text-[#bbb]
//   both at tracking-[-1px]; number uppercase, label capitalize.
export default function ProjectTopics({ sections }) {
  const [activeId, setActiveId] = useState(sections?.[0]?.id ?? null);
 
  useEffect(() => {
    if (!sections?.length) return;
 
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      // Trigger band near the top of the viewport, just below the sticky
      // Header — a section counts as "current" once it crosses into the
      // top ~30% of the screen, standard scrollspy tuning.
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );
 
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
 
    return () => observer.disconnect();
  }, [sections]);
 
  if (!sections?.length) return null;
 
  const handleJump = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
  };
 
  return (
    <div className="mx-auto max-w-[1440px] px-5 sm:px-[30px]">
      <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] md:gap-x-0">
        {/* Contents — sticky on desktop; REMOVED ENTIRELY on mobile
            (hidden md:block), flagged 2026-09-02, direct instruction: on
            mobile this nav isn't sticky (no room for a persistent sidebar
            in a single-column layout) so it loses all wayfinding value the
            instant you scroll past it — of the 3 options discussed
            (leave as a plain stacked list, a collapsible "Jump to section"
            toggle, a horizontal tab strip), the decision was to drop it
            entirely on mobile rather than rebuild it as some other mobile
            widget: on a single-column case study the reader just scrolls
            straight through, no jump-nav needed. Desktop is completely
            unaffected — same sticky/top-24/pt-[10px] behavior as before,
            only the mobile branch changed.
            md:pt-[10px] aligns the first item's top with "Lorem Ipsum Topic
            1"'s heading on the right: that first section carries its own
            pt-[10px] (the 10px gap down from ProjectHeroTop's closing
            divider, see the note on this component above), which the nav
            didn't have — without it the nav sat 10px higher than the
            heading it points at. Flagged directly 2026-09-01, measured
            exactly via the live page's own DOM (10.0px), not guessed. */}
        <nav aria-label="Contents" className="hidden mb-10 md:block md:sticky md:top-24 md:pt-[10px] md:mb-0 md:h-fit">
          <ol className="flex flex-col">
            {sections.map((section, i) => {
              const active = activeId === section.id;
              return (
                <li key={section.id} className={i !== 0 ? "mt-1 md:mt-[5px]" : ""}>
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => handleJump(e, section.id)}
                    className={`grid grid-cols-[39px_1fr] items-baseline leading-[20px] tracking-[-1px] transition-colors hover:opacity-70 ${
                      active ? "font-semibold text-black" : "font-normal text-[#bbb]"
                    }`}
                    aria-current={active ? "true" : undefined}
                  >
                    <span className="uppercase">{String(i + 1).padStart(2, "0")}</span>
                    <span className="capitalize">{section.tocLabel}</span>
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>
 
        {/* Content sections */}
        <div>
          {sections.map((section, i) => (
            <section
              key={section.id}
              id={section.id}
              className={`scroll-mt-24 pt-8 md:pt-[10px] ${
                i !== 0 ? "border-t border-black" : ""
              }`}
            >
              <h2 className="font-bold uppercase tracking-[-1px]">
                {section.heading}
              </h2>
              <p className="max-w-[1030px] whitespace-pre-wrap font-normal tracking-[-0.5px] text-black/80">
                {section.body}
              </p>
              {section.image && (
                <div
                  className="mt-4 h-64 w-full max-w-[1030px] bg-tile sm:h-80 md:mt-[5px] md:h-[480px]"
                  aria-hidden="true"
                  title="Content image placeholder — no asset in source yet"
                />
              )}
              {section.closingBody && (
                <p className="mt-4 max-w-[1030px] whitespace-pre-wrap font-normal tracking-[-0.5px] text-black/80 md:mt-[20px]">
                  {section.closingBody}
                </p>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
 
