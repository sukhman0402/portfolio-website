"use client";
 
import { useState } from "react";
import Link from "next/link";
import Chevron from "./Chevron";
 
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
// projects" exactly: full description, image placeholder, tag + CTA row,
// caption. Only the CTA's destination differs between the two routes,
// hence this prop instead of the hardcoded "/projects" it used to have.
// research items in data.js were extended with the same
// fullDescription/ctaLabel/caption fields projects already carry so this
// component needs zero per-content-type branching.
export default function ProjectRow({ project, expandable = true, basePath = "/projects" }) {
  const [open, setOpen] = useState(!expandable);
 
  return (
    <div className="border-b border-black pt-[10px] pb-[10px] first:border-t">
      <button
        type="button"
        onClick={() => expandable && setOpen((v) => !v)}
        className={`grid w-full grid-cols-[56px_1fr_auto] items-start text-left md:grid-cols-[350px_1fr_auto] ${
          expandable ? "cursor-pointer" : "cursor-default"
        }`}
        aria-expanded={open}
      >
        <span className="font-medium uppercase leading-[18px] tracking-normal">
          {project.index}
        </span>
 
        <span className="flex flex-col gap-0">
          <span className="font-semibold leading-[18px] tracking-[-0.5px]">
            {project.title}
          </span>
          {/* Flagged 2026-09-02, direct instruction: the collapsed one-liner
              keeps the tight leading-[18px] (still correct — matches the
              Figma row height for a single clamped line, same fixed-height
              row convention as ResearchSection's rows). But once expanded,
              this renders project.fullDescription — several lines of real
              paragraph copy, not a row caption — and using that same
              18px/15px (1.2) line-height there read as visibly cramped next
              to the site's paragraph text (Hero/Footer quotes, About Me,
              case study body copy), which all use the browser/Tailwind
              default 1.5 line-height (22.5px on this site's 15px base) with
              no leading- override at all. So: drop the leading-[18px]
              override entirely when open, falling back to that same
              no-override default — deliberately NOT leading-[22.5px] or
              similar, to match the exact mechanism the rest of the site's
              paragraph text already relies on, not just its resulting
              pixel value. expandable=false routes (the /projects listing,
              where every row renders pre-opened) get this fix automatically
              too, since it's the same shared component. */}
          <span
            className={`font-normal tracking-[-0.5px] ${
              open ? "" : "leading-[18px] line-clamp-1"
            }`}
          >
            {open ? project.fullDescription : project.description}
          </span>
        </span>
 
        {expandable && (
          <Chevron
            className={`ml-4 mt-1 h-3 w-3 shrink-0 transition-transform md:ml-6 ${
              open ? "-rotate-90" : "rotate-90"
            }`}
          />
        )}
      </button>
 
      {/* Tag row + (when open) CTA + caption — mirrors the label column /
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
              <Link
                href={`${basePath}/${project.slug}`}
                className="flex items-center gap-1 font-semibold tracking-[-0.5px] hover:opacity-60 transition-opacity"
              >
                {project.ctaLabel}
                <Chevron className="h-2.5 w-2.5" />
              </Link>
            </div>
          ) : (
            <span className="font-normal tracking-[-0.5px] text-muted">
              {project.tag}
            </span>
          )}
 
          {open && (
            <>
              {/* ⚠️ design.md §3a: Figma reserves an empty ~400px region here,
                  inferred to be the cover image — not confirmed. Rendered as
                  a placeholder block so the gap is visible and easy to swap
                  for a real image once confirmed. Label reworded from
                  "Project image placeholder" to "Content image placeholder"
                  (2026-09-03) now that this component is also used by the
                  /research listing — matches the generic wording
                  ProjectTopics.js already uses for the same reason. */}
              <div className="mt-2 flex h-48 w-full items-center justify-center rounded-sm bg-tile text-xs text-black/40 md:h-72">
                Content image placeholder — position unconfirmed (design.md §8.1)
              </div>
              <span className="font-normal tracking-[-0.5px] text-muted">
                {project.caption}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
 
