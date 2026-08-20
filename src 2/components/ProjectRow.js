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
export default function ProjectRow({ project, expandable = true }) {
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
          <span
            className={`font-normal leading-[18px] tracking-[-0.5px] ${
              open ? "" : "line-clamp-1"
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
                href={`/projects/${project.slug}`}
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
                  inferred to be the project's cover image — not confirmed.
                  Rendered as a placeholder block so the gap is visible and
                  easy to swap for a real image once confirmed. */}
              <div className="mt-2 flex h-48 w-full items-center justify-center rounded-sm bg-tile text-xs text-black/40 md:h-72">
                Project image placeholder — position unconfirmed (design.md §8.1)
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
