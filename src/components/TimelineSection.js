"use client";
 
import { useCallback, useEffect, useRef, useState } from "react";
import { timelineClusters, timelinePoints } from "@/lib/data";
 
// Landing Page Section 4.0 — Timeline, REDESIGNED 2026-09-04 against your
// finished Figma frames (previously an undesigned placeholder — see git
// history for the old 5-stage hover-only version this replaces).
//
// Figma source (fileKey 2yjcklO1oFjK8rICoeBD67, get_design_context on all
// three, per the figma-design-to-code skill):
//   - 360:1550 "Landing Page (D)- Section 4.0" — default state
//   - 364:1649 "Landing Page (D)- Section 4.1" — hover state
//   - 376:9343 "Landing Page (D)- Section 4.2" — after-click state
//
// Interaction model, reverse-engineered by diffing all three frames
// (per your task description — this section is meant to invite the
// viewer to explore your life events by clicking points on the line):
//   - Exactly one point is "selected" at a time (tall 40px/2px-thick
//     tick + its cluster's year label goes bold black). One point starts
//     pre-selected (data.js's `defaultSelected: true`) — the visual cue
//     that this section is interactive, per your task description.
//   - Hovering a DIFFERENT point adds a SECOND tall tick + a
//     medium-emphasis label (semibold, --muted/#bbb) at the hovered
//     point's cluster, without disturbing the actual selection — both
//     coexist (confirmed: 4.1 shows the 508 selection AND the 1328 hover
//     indicator at once).
//   - Clicking commits the hovered point as the new sole selection: the
//     previous selection's tick/label revert to default, the clicked
//     point's take over the tall/bold-black treatment, and the info
//     panel below updates to that point's content (4.2 confirms the
//     end-state).
//
// Pixel spec — every tick x-position, the 7 cluster/year groupings, and
// the info-panel column layout were extracted directly off the raw Figma
// coordinates (not eyeballed) and live in src/lib/data.js
// (timelinePoints/timelineClusters), per your instruction not to change
// any of that spacing. The vertical rhythm below (mt-[10px] etc.) reuses
// the site-wide title→divider / divider→content / text→line rules
// already established elsewhere on the site — cross-checked against the
// raw Figma deltas and they matched exactly, confirming the extraction.
// The one Figma color with no existing token, #e9e9e9 (default/inactive
// year-label color), is now globals.css's --faint / text-faint — see
// that file's comment. #bbb and #d9d9d9 map onto the existing
// --muted/--tile tokens, used here as text-muted/bg-tile like everywhere
// else on the site.
//
// The outer inter-section spacing (pt-[180px] mobile / md:pt-28 desktop,
// no trailing bottom padding of its own) is UNCHANGED from before this
// redesign, per your instruction to keep that on the site-wide rule
// rather than Figma's own frame-boundary numbers — this section's
// internal layout changed completely, but where it sits relative to
// Research above and About Me below did not.
//
// MOBILE — no Figma mobile frame exists for this redesign (all three
// frames are explicitly "(D)" desktop-only, authored at a fixed 1440px
// canvas with 44 points at absolute, non-scaling pixel positions, so
// there's no natural responsive equivalent). Per your direct instruction
// (2026-09-04): mobile gets its own horizontal-scroll carousel — roughly
// 7 points visible at once, the rest reachable by scrolling; whichever
// point sits at the horizontal center of the viewport is treated as
// selected (info panel updates to match), and you can either scroll a
// point to center or tap it directly to select it (which also
// scroll-snaps it to center). This is my own interaction build per your
// spec, not a Figma replication — see TimelineMobileTrack below and the
// MOBILE_* constants for the specific numbers chosen.
const DEFAULT_POINT =
  timelinePoints.find((p) => p.defaultSelected) ?? timelinePoints[0];
 
const MOBILE_VISIBLE_COUNT = 7;
const MOBILE_ITEM_WIDTH = 56; // px — 7 * 56 = 392px, close to the site's 402px mobile reference frame (Hero.js's "Frame Size- Mobile" note) once the section's own side padding is accounted for.
const MOBILE_EDGE_SPACERS = Math.floor(MOBILE_VISIBLE_COUNT / 2); // empty slots on each end so the first/last real point can still scroll to center
 
export default function TimelineSection() {
  const [selectedId, setSelectedId] = useState(DEFAULT_POINT.id);
  const [hoveredId, setHoveredId] = useState(null);
 
  const selectedPoint =
    timelinePoints.find((p) => p.id === selectedId) ?? DEFAULT_POINT;
  const hoveredPoint = hoveredId
    ? timelinePoints.find((p) => p.id === hoveredId)
    : null;
 
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1440px] px-5 pt-[180px] sm:px-[30px] md:pt-28">
        <h2 className="font-bold uppercase tracking-[-1.5px] text-black">
          Timeline
        </h2>
        <div className="mt-[10px] border-t-2 border-black" />
 
        {/* MOBILE (below md) */}
        <div className="md:hidden">
          <TimelineMobileTrack
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
          <TimelineInfoPanelMobile point={selectedPoint} />
        </div>
 
        {/* DESKTOP (md and up) — exact Figma replica. overflow-x-auto on
            the outer wrapper is a non-destructive safety net only for the
            768–1439px range the Figma frame never defined (it's a fixed
            1440px canvas) — at >=1440px this content box is exactly
            1380px and never needs to scroll. */}
        <div className="hidden overflow-x-auto md:block">
          <div className="relative w-[1380px]">
            <div className="relative mt-[177px] h-[40px]">
              {timelinePoints.map((point) => {
                const active =
                  point.id === selectedId || point.id === hoveredId;
                return (
                  <button
                    key={point.id}
                    type="button"
                    aria-pressed={point.id === selectedId}
                    aria-label={`${timelineClusters[point.cluster].year} timeline point ${point.id}`}
                    onMouseEnter={() => setHoveredId(point.id)}
                    onMouseLeave={() =>
                      setHoveredId((v) => (v === point.id ? null : v))
                    }
                    onFocus={() => setHoveredId(point.id)}
                    onBlur={() =>
                      setHoveredId((v) => (v === point.id ? null : v))
                    }
                    onClick={() => setSelectedId(point.id)}
                    className={`absolute top-1/2 -translate-y-1/2 bg-black ${
                      active ? "h-[40px] w-[2px]" : "h-[20px] w-px"
                    }`}
                    style={{ left: point.x }}
                  />
                );
              })}
            </div>
 
            <div className="relative mt-[10px] h-[18px]">
              {timelineClusters.map((cluster, i) => {
                const isSelected = selectedPoint.cluster === i;
                const isHovered =
                  !isSelected && hoveredPoint && hoveredPoint.cluster === i;
                return (
                  <span
                    key={i}
                    className={`absolute top-0 whitespace-nowrap tracking-[-0.5px] ${
                      isSelected
                        ? "font-semibold text-black"
                        : isHovered
                          ? "font-semibold text-muted"
                          : "font-normal text-faint"
                    }`}
                    style={{ left: cluster.x }}
                  >
                    {cluster.year}
                  </span>
                );
              })}
            </div>
 
            <div className="mt-[157px] border-t-2 border-black" />
 
            <div className="mt-[10px] grid grid-cols-[50px_260px_680px_1fr] items-start gap-x-5">
              <div className="h-[50px] w-[50px] bg-tile" />
              <p className="font-semibold tracking-[-0.5px] text-black">
                {selectedPoint.title}
              </p>
              <p className="font-normal tracking-[-0.5px] text-black">
                {selectedPoint.description}
              </p>
              <p className="text-right font-normal tracking-[-0.5px] text-black">
                {selectedPoint.metaTop}
              </p>
            </div>
            <div className="grid grid-cols-[50px_260px_680px_1fr] items-start gap-x-5">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <p className="font-normal tracking-[-0.5px] text-muted">
                {selectedPoint.tag}
              </p>
              <p className="text-right font-normal tracking-[-0.5px] text-muted">
                {selectedPoint.metaBottom}
              </p>
            </div>
 
            <div className="mt-[10px] border-t-2 border-black" />
          </div>
        </div>
      </div>
    </section>
  );
}
 
// Mobile-only horizontal-scroll carousel — see the file-top comment for
// why this has no Figma source. `selectedId`/`onSelect` are lifted to
// the parent so the shared info panel below can read the same value.
function TimelineMobileTrack({ selectedId, onSelect }) {
  const trackRef = useRef(null);
  const settleTimeout = useRef(null);
 
  const centerOffsetFor = useCallback(
    (index) =>
      (MOBILE_EDGE_SPACERS + index) * MOBILE_ITEM_WIDTH +
      MOBILE_ITEM_WIDTH / 2,
    [],
  );
 
  const scrollToIndex = useCallback(
    (index, smooth) => {
      const el = trackRef.current;
      if (!el) return;
      el.scrollTo({
        left: centerOffsetFor(index) - el.clientWidth / 2,
        behavior: smooth ? "smooth" : "auto",
      });
    },
    [centerOffsetFor],
  );
 
  // Center the pre-selected point on mount, no animation — same "one
  // event already clicked" visual cue the desktop default-selection
  // gives, per your task description.
  useEffect(() => {
    const index = timelinePoints.findIndex((p) => p.id === selectedId);
    if (index >= 0) scrollToIndex(index, false);
    // Mount-only: this positions the initial scroll offset, it must not
    // re-run every time selection changes (clicks already scroll
    // themselves via handlePointClick below).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
 
  const handleScroll = useCallback(() => {
    if (settleTimeout.current) clearTimeout(settleTimeout.current);
    settleTimeout.current = setTimeout(() => {
      const el = trackRef.current;
      if (!el) return;
      const center = el.scrollLeft + el.clientWidth / 2;
      const rawIndex = Math.round(
        (center - MOBILE_EDGE_SPACERS * MOBILE_ITEM_WIDTH - MOBILE_ITEM_WIDTH / 2) /
          MOBILE_ITEM_WIDTH,
      );
      const index = Math.min(
        Math.max(rawIndex, 0),
        timelinePoints.length - 1,
      );
      const point = timelinePoints[index];
      if (point && point.id !== selectedId) onSelect(point.id);
    }, 120);
  }, [onSelect, selectedId]);
 
  const handlePointClick = (index, id) => {
    onSelect(id);
    scrollToIndex(index, true);
  };
 
  return (
    <>
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory overflow-x-auto"
      >
        {Array.from({ length: MOBILE_EDGE_SPACERS }).map((_, i) => (
          <div
            key={`spacer-start-${i}`}
            className="shrink-0"
            style={{ width: MOBILE_ITEM_WIDTH }}
          />
        ))}
        {timelinePoints.map((point, index) => {
          const active = point.id === selectedId;
          return (
            <button
              key={point.id}
              type="button"
              aria-pressed={active}
              aria-label={`${timelineClusters[point.cluster].year} timeline point ${point.id}`}
              onClick={() => handlePointClick(index, point.id)}
              className="flex h-[40px] shrink-0 snap-center items-center justify-center"
              style={{ width: MOBILE_ITEM_WIDTH }}
            >
              <span
                className={`bg-black ${active ? "h-[40px] w-[2px]" : "h-[20px] w-px"}`}
              />
            </button>
          );
        })}
        {Array.from({ length: MOBILE_EDGE_SPACERS }).map((_, i) => (
          <div
            key={`spacer-end-${i}`}
            className="shrink-0"
            style={{ width: MOBILE_ITEM_WIDTH }}
          />
        ))}
      </div>
      {/* Position readout (mt-[10px], same "line/track -> text" gap used
          everywhere else on the site) — added after first-pass testing
          showed that re-centering the newly-selected tick on every click
          erases the only visual cue a point had changed (all 44 points
          currently share identical placeholder copy, same as every one
          of Figma's own three mock frames, so the info panel below can't
          carry that feedback either). This is real UI chrome, not
          placeholder content, so it's not standing in for anything that
          needs to be swapped out later. */}
      <p className="mt-[10px] text-center font-normal tracking-[-0.5px] text-muted">
        {selectedId} / {timelinePoints.length}
      </p>
    </>
  );
}
 
// Mobile info panel — same content/spacing rules as the desktop grid
// (divider→content=10px, description→tag=15px, text→closing line=10px,
// all already established site-wide) laid out in a fluid single column
// instead of the desktop's fixed 1380px pixel grid, matching how
// ProjectRow.js already adapts its own desktop grid down to mobile.
function TimelineInfoPanelMobile({ point }) {
  return (
    <>
      <div className="mt-[10px] flex gap-4">
        <div className="h-12 w-12 shrink-0 bg-tile" />
        <div className="flex flex-1 flex-col">
          <div className="flex items-baseline justify-between gap-4">
            <p className="font-semibold tracking-[-0.5px] text-black">
              {point.title}
            </p>
            <span className="shrink-0 font-normal tracking-[-0.5px] text-black">
              {point.metaTop}
            </span>
          </div>
          <p className="font-normal tracking-[-0.5px] text-black">
            {point.description}
          </p>
          <div className="mt-[15px] flex items-baseline justify-between gap-4">
            <span className="font-normal tracking-[-0.5px] text-muted">
              {point.tag}
            </span>
            <span className="shrink-0 font-normal tracking-[-0.5px] text-muted">
              {point.metaBottom}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-[10px] border-t-2 border-black" />
    </>
  );
}
 
