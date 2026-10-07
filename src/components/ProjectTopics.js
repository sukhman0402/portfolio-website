"use client";
 
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Chevron from "./Chevron";
import { FlowStage } from "./CaseStudyFlow";
import { BinaStage } from "./BinaFlow";
import { ShortStep } from "./ShortStep";
import ImageZoom from "./ImageZoom";
 
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
export default function ProjectTopics({ sections, endLinks, after }) {
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
          {/* Continuous-flow case studies (2026-10-04): no stage map; the
              first stage's blue opener sits right under ProjectHeroTop's
              closing divider (Sukhman). */}
          {sections.map((section, i) => (
            // pt-[10px] (was pt-8/32px, mobile only) — flagged 2026-09-02:
            // heading -> line above it (its own border-t, or for the first
            // section, ProjectHeroTop's closing divider) rule, "line, then
            // text" — standardized to 10px like every other instance.
            // pb-[10px] (mobile only) added when closingBody is present:
            // that's a text ending (not an image), so per the site-wide
            // "image + line = 0px, text + line = 10px" split, it needs the
            // same 10px gap down to the NEXT section's border-t that a
            // trailing image already gets for free (image-ending sections
            // still correctly land at 0px, untouched).
            <section
              key={section.id}
              id={section.id}
              className={`scroll-mt-24 ${
                i !== 0 && !section.flow && !section.short ? "border-t-2 border-black" : ""
              } ${section.blocks || section.short ? "" : "pt-[10px]"} ${
                !section.blocks && section.closingBody ? "pb-[10px]" : ""
              }`}
            >
              {section.short ? (
                // Short case-study step (Sukhman, FINAL 2026-10-06):
                // src > components > ShortStep.js
                <ShortStep section={section} index={i} />
              ) : section.flow === "bina" ? (
                // BINA's own look (src > components > BinaFlow.js), 2026-10-05
                <BinaStage section={section} index={i} total={sections.length} />
              ) : section.flow ? (
                <FlowStage section={section} index={i} total={sections.length} />
              ) : section.blocks ? (
                <StageBlocks section={section} />
              ) : (
                <LegacySection section={section} />
              )}
            </section>
          ))}

          {/* Short case studies (Sukhman, 2026-10-05): links at the end of
              the page, the full case study first (same tab), then e.g. the
              research website (new tab). Same CTA style as "View Project"
              (ProjectRow.js): semibold + chevron. Text ending, so 10px above
              the footer's line; the last board above ends flush on the 2px
              divider. */}
          {endLinks?.length > 0 && (
            // One row per link between black lines, bold label + diagonal
            // arrow (Sukhman's reference, 2026-10-06). The first row's top
            // line is the last statement's closing line.
            <ul className="border-t-2 border-black">
              {endLinks.map((link) => {
                const inner = (
                  <>
                    <span>{link.label}</span>
                    <ArrowUpRight />
                  </>
                );
                const cls =
                  "flex w-fit items-center gap-[22px] py-[28px] font-semibold tracking-[-0.5px] transition-opacity hover:opacity-60";
                return (
                  <li key={link.href} className="border-b-2 border-black">
                    {link.external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className={cls}>
                        {inner}
                      </a>
                    ) : (
                      <Link href={link.href} className={cls}>
                        {inner}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
          {after}
        </div>
      </div>
    </div>
  );
}
 

// ---------------------------------------------------------------------------
// OLD single-topic section (heading, body, grey image placeholder, optional
// closingBody). Still used by every project whose case study is not written
// yet (their Lorem ipsum from buildDetailFields in data.js). Unchanged.
function LegacySection({ section }) {
  return (
    <>
      <h2 className="font-bold uppercase tracking-[-1px]">{section.heading}</h2>
      <p className="max-w-[1030px] whitespace-pre-wrap font-normal tracking-[-0.5px] text-black/80">
        {section.body}
      </p>
      {section.image && (
        <div
          className="mt-4 h-64 w-full max-w-[1030px] bg-tile sm:h-80 md:mt-[5px] md:h-[480px]"
          aria-hidden="true"
          title="Content image placeholder (no asset in source yet)"
        />
      )}
      {section.closingBody && (
        <p className="mt-4 max-w-[1030px] whitespace-pre-wrap font-normal tracking-[-0.5px] text-black/80 md:mt-[20px]">
          {section.closingBody}
        </p>
      )}
    </>
  );
}

// ---------------------------------------------------------------------------
// CASE-STUDY LAYOUT (Sukhman, 2026-10-03; built 2026-10-04 for Drive Wise).
// Used when a section has `blocks` (see src > lib > driveWiseCaseStudy.js
// for the data shape). Three heading levels:
//   1. stage     = the Contents label on the left (and a hidden h2 here,
//                  for screen readers)
//   2. topic     = bold uppercase heading + text + image(s)
//   3. sub-topic = semibold heading inside a topic, with its own text and
//                  image (Research > Interviews, Design > Screens > ...)
//
// Spacing follows the site rules (portfolio-site-layout-rules.md §4):
//   - every topic block sits under a 2px divider and starts 10px below it
//     (the first block of a stage uses the stage's own divider)
//   - text -> image: 5px desktop, 16px phones (same as the old image slot)
//   - image -> next divider: flush
//   - text -> next divider: 10px (blocks that end in text, e.g. Limitations)
// New patterns (no earlier rule existed, flagged 2026-10-04):
//   - topic text -> first sub-topic heading, and sub-topic -> sub-topic: 20px
//     (the same 20px the old closingBody used after an image)
//   - two images in one block (Define > Personas): 10px apart
//   - bulleted points (Limitations, Learnings): 10px below the text, 5px
//     between points
//   - images are real files at their natural height, never cropped:
//     `width`/`height` are the file's pixel size (2x), so the space is
//     reserved before the image loads and nothing jumps.
function StageBlocks({ section }) {
  return (
    <>
      <h2 className="sr-only">{section.tocLabel}</h2>
      {section.blocks.map((block, b) => (
        <div
          key={block.heading}
          className={`pt-[10px] ${b !== 0 ? "border-t-2 border-black" : ""} ${
            endsInText(block) ? "pb-[10px]" : ""
          }`}
        >
          <h3 className="font-bold uppercase tracking-[-1px]">{block.heading}</h3>
          <BlockBody item={block} />

          {block.subtopics?.map((sub) => (
            <div key={sub.heading} className="mt-[20px]">
              <h4 className="font-semibold tracking-[-0.5px]">{sub.heading}</h4>
              <BlockBody item={sub} />
            </div>
          ))}

          {block.video && <WalkthroughPanel video={block.video} prototype={block.prototype} />}
        </div>
      ))}
    </>
  );
}

// A block "ends in text" when nothing image-like closes it: then it needs
// the 10px text -> line gap before the next divider.
function endsInText(block) {
  if (block.video) return false;
  if (block.subtopics?.length) return !block.subtopics.at(-1).images?.length;
  return !block.images?.length;
}

// Text, optional bullet points, optional link, then the image(s). Shared by
// topics and sub-topics.
function BlockBody({ item }) {
  return (
    <>
      {item.text && (
        <p className="max-w-[1030px] whitespace-pre-wrap font-normal tracking-[-0.5px] text-black/80">
          {item.text}
        </p>
      )}

      {item.points?.length > 0 && (
        <ul className="mt-[10px] max-w-[1030px] list-disc space-y-[5px] pl-[18px] tracking-[-0.5px] text-black/80 marker:text-black/80">
          {item.points.map((point, k) => (
            <li key={k}>
              {point.title && <span className="font-semibold text-black">{point.title} </span>}
              {point.text}
            </li>
          ))}
        </ul>
      )}

      {/* Same CTA style as the site's "View Project" links (ProjectRow.js):
          semibold + chevron. Opens in a new tab. Sits under the text, so the
          image still closes the block flush against the next divider. */}
      {item.link && (
        <a
          href={item.link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-[5px] flex w-fit items-center gap-1 font-semibold tracking-[-0.5px] transition-opacity hover:opacity-60"
        >
          {item.link.label}
          <Chevron className="h-2.5 w-2.5" />
        </a>
      )}

      {item.images?.map((image, k) => {
        const gap = k === 0 ? "mt-4 md:mt-[5px]" : "mt-[10px]";
        const picture = (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 1440px) 1030px, (min-width: 768px) calc(100vw - 410px), calc(100vw - 40px)"
            className={`block h-auto w-full max-w-[1030px] ${image.zoom ? "" : gap}`}
          />
        );
        // `zoom: true` (short case-study boards): tap to open at full size.
        return image.zoom ? (
          <div key={image.src} className={gap}>
            <ImageZoom src={image.src} alt={image.alt} width={image.width}>
              {picture}
            </ImageZoom>
          </div>
        ) : (
          picture
        );
      })}
    </>
  );
}

// ---------------------------------------------------------------------------
// Outcome > Final Solution: silent looping walkthrough video in a phone
// frame on the case study's light grey ground (#F6F6F6), with a "Try the
// prototype" button that swaps the video for the live Figma prototype.
// The Figma embed only loads on click, so the page stays fast. The
// fallback link opens the prototype in Figma in a new tab (best on phones,
// where the embed is heavy).
// Reduced motion: if the visitor has asked their device for less motion,
// the video does not autoplay; it shows its poster frame with play controls.
function WalkthroughPanel({ video, prototype }) {
  const videoRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [showPrototype, setShowPrototype] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      setReducedMotion(query.matches);
      const el = videoRef.current;
      if (!el) return;
      if (query.matches) el.pause();
      else el.play().catch(() => {});
    };
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, [showPrototype]);

  return (
    <div className="mt-4 flex w-full max-w-[1030px] flex-col items-center bg-[#F6F6F6] px-5 pb-[20px] pt-[40px] md:px-[32px] md:mt-[5px]">
      {showPrototype && prototype ? (
        <iframe
          src={prototype.embedSrc}
          title="Drive Wise prototype (Figma)"
          className="block h-[640px] w-full max-w-[340px] border-0 md:h-[760px] md:max-w-[400px]"
          allowFullScreen
        />
      ) : (
        <video
          ref={videoRef}
          className="block h-auto w-[260px] md:w-[360px]"
          width={video.width}
          height={video.height}
          poster={video.poster}
          aria-label={video.label}
          autoPlay={!reducedMotion}
          muted
          loop
          playsInline
          preload="metadata"
          controls={reducedMotion}
        >
          <source src={video.webm} type="video/webm" />
          <source src={video.mp4} type="video/mp4" />
        </video>
      )}

      {prototype && (
        <div className="mt-[20px] flex flex-wrap items-center justify-center gap-x-[30px] gap-y-[10px]">
          <button
            type="button"
            onClick={() => setShowPrototype((v) => !v)}
            className="flex items-center gap-1 font-semibold tracking-[-0.5px] transition-opacity hover:opacity-60"
          >
            {showPrototype ? "Back to the walkthrough" : prototype.buttonLabel}
            <Chevron className="h-2.5 w-2.5" />
          </button>
          <a
            href={prototype.openHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-semibold tracking-[-0.5px] transition-opacity hover:opacity-60"
          >
            {prototype.openLabel}
            <Chevron className="h-2.5 w-2.5" />
          </a>
        </div>
      )}

      {video.credit && (
        <p className="mt-[20px] self-start text-[12px] leading-[15px] tracking-[-0.3px] text-black/50">
          {video.credit}
        </p>
      )}
    </div>
  );
}

// Diagonal arrow for the end links (2px stroke, square caps).
function ArrowUpRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M3 13 13 3M5 3h8v8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" />
    </svg>
  );
}
