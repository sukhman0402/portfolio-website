"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Chevron from "./Chevron";
import OpeningLine from "./OpeningLine";
 
// A single Projects row (design.md §3 Section 2.0 + §3a Section 2.1–2.4,
// and reused always-expanded on /projects per §4).
//
// Spacing pulled from the live Figma node 2026-08-20 (flagged: previous
// spacing was approximate, not exact): index/title share the same top
// (350px fixed label column, not "auto" width + gap — that's what was
// closing the gap between "01" and the title group); title→description
// is a bare 18px line-height with zero extra margin; description→tag is
// 15px after the description's own rendered line; row padding above/below
// the divider is a flat 10px, not py-5/py-6.
//
// expandable=true  -> homepage: collapsed one-liner, click to expand in place
// expandable=false -> /projects listing: always renders the expanded card
//
// basePath (added 2026-09-03, flagged: "the layout for 'all research' is
// not what we intended. needs to be similar to [the /projects listing
// page]") — this component is now ALSO used by /research (always-expanded,
// same as /projects) so the "all research" listing visually matches "all
// projects" exactly: full description, image placeholder, tag + CTA row.
// Only the CTA's destination differs between the two routes, hence this
// prop instead of the hardcoded "/projects" it used to have. research
// items in data.js were extended with the same fullDescription/ctaLabel
// fields projects already carry so this component needs zero
// per-content-type branching. (caption field still exists on both content
// types in data.js but is no longer rendered here — see the note further
// down where it used to be shown.)
//
// externalUrl / comingSoon (added 2026-09-16, Paytm shortcut submission —
// individual project/research pages stay hidden/unbuilt for now, so every
// card's CTA needs to skip the internal route):
//   - project.externalUrl set  -> CTA is a real <a>, opens in a new tab,
//     pointing at the project's Behance page / working prototype instead
//     of ${basePath}/${slug}.
//   - project.comingSoon true (and no externalUrl yet) -> CTA renders as
//     inert text, not a link — avoids shipping a dead/misleading link for
//     content that isn't ready yet (see data.js TODOs).
//   - neither set -> unchanged original behavior, links to ${basePath}/${slug}.
// Description text: see OpeningLine.js (2-line cap when collapsed, no
// movement on expand, locked line breaks).
//
// Row behaviour (2026-10-22, Sukhman):
//   - Homepage (expandable): a mouse HOVER opens the row and it stays open;
//     only the arrow (now pointing up) closes it again. pointerType is
//     checked so a finger tap on a phone does not count as hover: there, a
//     tap on a closed row opens it, exactly as before.
//   - Open row (homepage) and every row on /projects and /research: the
//     whole section, text and image, opens the project. The arrow is the
//     one exception. The real <Link>/<a> CTA ("View Project") stays as the
//     keyboard and screen-reader route; the section click is a mouse/touch
//     shortcut on top of it, so no link is nested inside another.
//   - Arrow: vertically centred on the closed row, at the title line when
//     open. Its click area is a 60px circle, 5x the 12px arrow.
export default function ProjectRow({ project, expandable = true, basePath = "/projects" }) {
  const [open, setOpen] = useState(!expandable);
  const router = useRouter();
  const href = project.externalUrl || `${basePath}/${project.slug}`;
  const navigable = !project.comingSoon;
  const clickable = !open || navigable;

  function openProject() {
    if (project.externalUrl) {
      window.open(project.externalUrl, "_blank", "noopener,noreferrer");
    } else {
      router.push(href);
    }
  }

  function handleSectionClick(e) {
    // Real links and the arrow button handle their own clicks.
    if (e.target.closest("a, button")) return;
    if (expandable && !open) {
      setOpen(true);
      return;
    }
    if (navigable) openProject();
  }
 
  return (
    // pb-0 when open (2026-09-03, flagged directly: "remove the grey text
    // [caption] in dropdown... instead we will extend the placeholder image
    // [to meet] the horizontal line") — the caption span below the image
    // placeholder is gone (see below), so the image is now the last thing
    // in the open card. Per the site-wide "image + line = 0px, text + line
    // = 10px" rule (already established in ProjectTopics.js for the same
    // image-ending case), the row's own trailing pb- drops to 0 so the
    // image's bottom edge sits flush against this row's closing divider.
    // Collapsed (tag-only, no image) rows are untouched — still pb-[10px].
    //
    // No first:border-t here (removed 2026-09-04, flagged directly: "the
    // Projects/Research heading line needs to be 2px too, like the
    // others"). Every place this component is used (ProjectsSection.js,
    // /app/projects/page.js, /app/research/page.js) already renders a
    // bordered heading/label row directly above this list with zero gap,
    // so a first-row border-t here was a second, independently-declared
    // border sitting flush against the heading's own border-b — the two
    // stacked into what looked like one ~doubled-weight line. Dropping it
    // makes the heading boundary a single clean line at the same width as
    // every other divider on the site, matching ResearchRow.js (used by
    // the homepage's Research teaser), which never had this first-row
    // border to begin with — that section never showed the doubling.
    <div
      className={`relative border-b-2 border-black pt-[10px] ${open ? "pb-0" : "pb-[10px]"} ${
        clickable ? "cursor-pointer" : ""
      }`}
      onPointerEnter={(e) => {
        if (expandable && e.pointerType === "mouse") setOpen(true);
      }}
      onClick={handleSectionClick}
    >
      <div className="grid w-full grid-cols-[56px_minmax(0,1fr)_auto] items-start text-left md:grid-cols-[350px_minmax(0,1fr)_auto]">
        <span className="font-medium uppercase leading-[18px] tracking-normal">
          {project.index}
        </span>
 
        <span className="flex flex-col gap-0">
          <span className="font-semibold leading-[18px] tracking-[-0.5px]">
            {project.title}
          </span>
          {/* Description = one sentence in two parts (2026-09-25, Sukhman's
              rule), both from data.js:
                - project.description     = the opening, written to fit one
                  line on a desktop screen.
                - project.descriptionMore = the continuation.
              Collapsed: opening + "..". Expanded: opening + continuation,
              so the expanded text starts with exactly the same words.
              No line clamp: on narrow screens the opening wraps instead of
              being cut, so it always ends in ".." (never a browser "…").
              Same line height (the site's default 1.5) in BOTH states, so
              every line sits in the same place before and after expanding.
              This replaces the old split (18px collapsed / 22.5px expanded),
              which moved the text ~2px on expand.
              See OpeningLine.js for the 2-line cap and how the line
              breaks are kept identical too. */}
          <OpeningLine
            className="font-normal tracking-[-0.5px] break-words"
            lead={project.description}
            more={project.descriptionMore}
            open={open}
          />
        </span>
 
        {/* Same footprint the arrow had in this grid (16/24px gap + 12px),
            so the description wraps exactly as before. The visible arrow
            is the absolutely placed button at the end of this row. */}
        {expandable && <span aria-hidden="true" className="ml-4 w-3 shrink-0 md:ml-6" />}
      </div>
 
      {/* Tag row + (when open) CTA + image — mirrors the label column /
          content column split used throughout the Figma layout. Same
          first-column width as the row above (fixed px, not "auto" on an
          empty spacer — an empty span has zero intrinsic width, so the two
          grids didn't actually line up before, however close it looked). */}
      <div className="mt-[15px] grid grid-cols-[56px_1fr] md:grid-cols-[350px_1fr]">
        <span aria-hidden="true" />
        <div className="flex flex-col gap-2">
          {open ? (
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-normal tracking-[-0.5px] text-muted">
                {project.tag}
              </span>
              {project.externalUrl ? (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-[15px] font-semibold tracking-[-0.5px] hover:opacity-60 transition-opacity"
                >
                  {project.ctaLabel}
                  <Chevron className="h-2.5 w-2.5" />
                </a>
              ) : project.comingSoon ? (
                <span className="flex items-center gap-[15px] font-semibold tracking-[-0.5px] text-black/40">
                  Coming Soon
                </span>
              ) : (
                <Link
                  href={`${basePath}/${project.slug}`}
                  className="flex items-center gap-[15px] font-semibold tracking-[-0.5px] hover:opacity-60 transition-opacity"
                >
                  {project.ctaLabel}
                  <Chevron className="h-2.5 w-2.5" />
                </Link>
              )}
            </div>
          ) : (
            <span className="font-normal tracking-[-0.5px] text-muted">
              {project.tag}
            </span>
          )}
 
        </div>
      </div>

      {/* Cover image (2026-09-29, direct instruction: Sukhman's own designed
          images from Figma node 519:992). Full content width (1380px on
          desktop, spanning both the label and content columns), in the
          Figma frame's own 1380 x 700 proportions, so the whole designed
          image shows at every screen width (nothing is cropped).
          Figma (Projects page, node 176:3291): tag row ends at y=367, image
          starts at y=367 (0px), image ends 2px above the row's closing line
          (md:mb-[2px], same near-flush 2px as the project page hero).
          Homepage dropdown (expandable) uses coverHome, the /projects and
          /research listings use coverList. */}
      {open && (project.coverHome || project.coverList) && (
        // 10px below the tag row and flush on the closing line (2026-10-22,
        // Sukhman: was 0px above / 2px below, which left the tag touching
        // the image and a sliver of white above the line).
        <div className="relative mt-[10px] aspect-[1380/700] w-full overflow-hidden">
          <Image
            src={expandable ? project.coverHome : project.coverList}
            alt={`${project.title} cover`}
            fill
            sizes="(min-width: 1440px) 1380px, calc(100vw - 40px)"
            className="object-cover"
          />
        </div>
      )}

      {expandable && (
        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? `Collapse ${project.title}` : `Expand ${project.title}`}
          onClick={() => setOpen((v) => !v)}
          className={`absolute right-[-24px] flex h-[60px] w-[60px] items-center justify-center rounded-full ${
            open ? "top-[-10px]" : "top-1/2 -translate-y-1/2"
          }`}
        >
          <Chevron
            className={`h-3 w-3 transition-transform ${open ? "-rotate-90" : "rotate-90"}`}
          />
        </button>
      )}
    </div>
  );
}
