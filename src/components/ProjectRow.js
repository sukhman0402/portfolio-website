"use client";

import { useState } from "react";
import Link from "next/link";
import Chevron from "./Chevron";

// A single Projects row (design.md §3 Section 2.0 + §3a Section 2.1–2.4,
// and reused always-expanded on /projects per §4).
//
// expandable=true  -> homepage: collapsed one-liner, click to expand in place
// expandable=false -> /projects listing: always renders the expanded card
export default function ProjectRow({ project, expandable = true }) {
  const [open, setOpen] = useState(!expandable);

  return (
    <div className="border-b border-black py-5 first:border-t md:py-6">
      <button
        type="button"
        onClick={() => expandable && setOpen((v) => !v)}
        className={`grid w-full grid-cols-[auto_1fr_auto] items-start gap-x-6 text-left ${
          expandable ? "cursor-pointer" : "cursor-default"
        }`}
        aria-expanded={open}
      >
        <span className="font-medium uppercase tracking-normal pt-0.5">
          {project.index}
        </span>

        <span className="flex flex-col gap-1">
          <span className="font-semibold tracking-[-0.5px]">
            {project.title}
          </span>
          <span
            className={`font-normal tracking-[-0.5px] ${
              open ? "" : "line-clamp-1"
            }`}
          >
            {open ? project.fullDescription : project.description}
          </span>
        </span>

        {expandable && (
          <Chevron
            className={`mt-1.5 h-3 w-3 shrink-0 transition-transform ${
              open ? "-rotate-90" : "rotate-90"
            }`}
          />
        )}
      </button>

      {/* Tag row + (when open) CTA + caption — mirrors the label column /
          content column split used throughout the Figma layout. */}
      <div className="mt-2 grid grid-cols-[auto_1fr] gap-x-6 md:mt-3">
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
