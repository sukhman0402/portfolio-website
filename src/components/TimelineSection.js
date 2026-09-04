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
//
// ROUND 2 FIXES (2026-09-04, direct instruction from your annotated
// screenshots):
//   Mobile — the line→ticks and ticks→(new divider) gaps are now 170px
//   each (previously 0 and absent), a NEW divider was added above the
//   info panel at a 10px gap (previously missing entirely), the readout
//   below the ticks now shows the selected point's year instead of an
//   "N / 44" position counter, the info-panel layout was rebuilt to
//   match your reference image (thumbnail+title row, description below,
//   tag, then a stacked meta pair with a 15px gap above it), and the
//   selection indicator is now a FIXED marker pinned at the horizontal
//   center at all times — previously the tall tick was one of the 44
//   scrolling buttons, so it visibly slid away from center mid-drag
//   before the debounced selection caught up; now the 44 points render
//   uniformly and simply pass underneath the fixed marker.
//   Desktop — hovering used to be tracked per individual point, so
//   moving the cursor across the ~25px gap BETWEEN two points in the
//   same year-set briefly left every hit-target and flickered the
//   "202X" label back to its default styling. Ticks are now grouped
//   into an invisible per-cluster hover region (CLUSTER_GROUPS below,
//   sized to roughly match your reference screenshot's red boxes) so
//   the label only drops out of its hovered state when the cursor
//   actually leaves that year-set's region — crossing into the next
//   set's region, or the genuinely blank space between two sets,
//   switches/clears it as expected. Each point's own click/hover
//   hit-target is also now 2px wider on each side than its visible bar
//   (TICK_CLICK_PADDING below), since the bars themselves are only
//   1-2px wide and were hard to hit precisely.
const DEFAULT_POINT =
  timelinePoints.find((p) => p.defaultSelected) ?? timelinePoints[0];
 
const MOBILE_VISIBLE_COUNT = 7;
const MOBILE_ITEM_WIDTH = 56; // px — 7 * 56 = 392px, close to the site's 402px mobile reference frame (Hero.js's "Frame Size- Mobile" note) once the section's own side padding is accounted for.
const MOBILE_EDGE_SPACERS = Math.floor(MOBILE_VISIBLE_COUNT / 2); // empty slots on each end so the first/last real point can still scroll to center
 
const CLUSTER_HOVER_PADDING = 15; // px, each side — sizes the invisible per-cluster hover region beyond its outermost ticks. Not a Figma number (nothing about hover regions is specified there) — sized to roughly match the red boxes in your reference screenshot; adjust if you want it tighter/looser.
const TICK_CLICK_PADDING = 2; // px, each side — per direct instruction: extends each point's click/hover hit-target 2px beyond its visible bar.
 
// One group per year-cluster: its own points plus the invisible hover
// region's bounds (in the same "relative to the 1380px content box"
// coordinate space as point.x). Computed once at module load since
// timelinePoints/timelineClusters are static imports, not per-render
// state.
const CLUSTER_GROUPS = timelineClusters.map((cluster, i) => {
  const points = timelinePoints.filter((p) => p.cluster === i);
  const minX = Math.min(...points.map((p) => p.x));
  const maxX = Math.max(...points.map((p) => p.x));
  return {
    ...cluster,
    index: i,
    points,
    left: minX - CLUSTER_HOVER_PADDING,
    width: maxX - minX + CLUSTER_HOVER_PADDING * 2,
  };
});
 
export default function TimelineSection() {
  const [selectedId, setSelectedId] = useState(DEFAULT_POINT.id);
  const [hoveredId, setHoveredId] = useState(null);
  const [hoveredCluster, setHoveredCluster] = useState(null);
 
  const selectedPoint =
    timelinePoints.find((p) => p.id === selectedId) ?? DEFAULT_POINT;
 
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1440px] px-5 pt-[180px] sm:px-[30px] md:pt-28">
        <h2 className="font-bold uppercase tracking-[-1.5px] text-black">
          Timeline
        </h2>
        <div className="mt-[10px] border-t-2 border-black" />
 
        {/* MOBILE (below md) */}
        <div className="md:hidden">
          <div className="mt-[170px]">
            <TimelineMobileTrack
              selectedId={selectedId}
              onSelect={setSelectedId}
            />
          </div>
          <div className="mt-[170px] border-t-2 border-black" />
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
              {CLUSTER_GROUPS.map((group) => (
                <div
                  key={group.index}
                  className="absolute top-0 h-full"
                  style={{ left: group.left, width: group.width }}
                  onMouseEnter={() => setHoveredCluster(group.index)}
                  onMouseLeave={() =>
                    setHoveredCluster((v) => (v === group.index ? null : v))
                  }
                >
                  {group.points.map((point) => {
                    const tall =
                      point.id === selectedId || point.id === hoveredId;
                    const visualWidth = tall ? 2 : 1;
                    const hitWidth = visualWidth + TICK_CLICK_PADDING * 2;
                    return (
                      <button
                        key={point.id}
                        type="button"
                        aria-pressed={point.id === selectedId}
                        aria-label={`${group.year} timeline point ${point.id}`}
                        onMouseEnter={() => setHoveredId(point.id)}
                        onMouseLeave={() =>
                          setHoveredId((v) => (v === point.id ? null : v))
                        }
                        onFocus={() => {
                          setHoveredId(point.id);
                          setHoveredCluster(group.index);
                        }}
                        onBlur={() => {
                          setHoveredId((v) => (v === point.id ? null : v));
                          setHoveredCluster((v) =>
                            v === group.index ? null : v,
                          );
                        }}
                        onClick={() => setSelectedId(point.id)}
                        className="absolute top-1/2 flex -translate-y-1/2 items-center justify-center"
                        style={{
                          left: point.x - group.left - hitWidth / 2,
                          width: hitWidth,
                          height: 40,
                        }}
                      >
                        <span
                          className={`bg-black ${tall ? "h-[40px] w-[2px]" : "h-[20px] w-px"}`}
                        />
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
 
            <div className="relative mt-[10px] h-[18px]">
              {timelineClusters.map((cluster, i) => {
                const isSelected = selectedPoint.cluster === i;
                const isHovered = !isSelected && hoveredCluster === i;
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
 
  const selectedPoint =
    timelinePoints.find((p) => p.id === selectedId) ?? DEFAULT_POINT;
 
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
      <div className="relative">
        {/* Fixed center-selection marker, per direct instruction: "while
            dragging horizontally, the black selection line of
            points/events also moves. i want the black selection line to
            stay at the centre at all times. other points/events move
            behind it". pointer-events-none so it never intercepts taps
            on the real buttons scrolling underneath it. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[40px] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-black"
        />
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
          {timelinePoints.map((point, index) => (
            <button
              key={point.id}
              type="button"
              aria-pressed={point.id === selectedId}
              aria-label={`${timelineClusters[point.cluster].year} timeline point ${point.id}`}
              onClick={() => handlePointClick(index, point.id)}
              className="flex h-[40px] shrink-0 snap-center items-center justify-center"
              style={{ width: MOBILE_ITEM_WIDTH }}
            >
              <span className="h-[20px] w-px bg-black" />
            </button>
          ))}
          {Array.from({ length: MOBILE_EDGE_SPACERS }).map((_, i) => (
            <div
              key={`spacer-end-${i}`}
              className="shrink-0"
              style={{ width: MOBILE_ITEM_WIDTH }}
            />
          ))}
        </div>
      </div>
      {/* Readout below the ticks — now the selected point's year (was an
          "N / 44" counter in the first pass; replaced per direct
          instruction). Always the bold/black "selected" treatment since
          it's reporting the current selection, same as desktop's active
          cluster label. */}
      <p className="mt-[10px] text-center font-semibold tracking-[-0.5px] text-black">
        {timelineClusters[selectedPoint.cluster].year}
      </p>
    </>
  );
}
 
// Mobile info panel — rebuilt per your reference screenshot: thumbnail +
// title share a row, description runs full-width beneath, then tag,
// then a stacked meta pair set off with a 15px gap above it. Still the
// same site-wide spacing rules as the desktop grid
// (divider→content=10px, description→tag=15px) just in a fluid single
// column instead of the desktop's fixed 1380px pixel grid.
function TimelineInfoPanelMobile({ point }) {
  return (
    <>
      <div className="mt-[10px] flex gap-4">
        <div className="h-12 w-12 shrink-0 bg-tile" />
        <div className="flex flex-1 flex-col">
          <p className="font-semibold tracking-[-0.5px] text-black">
            {point.title}
          </p>
          <p className="font-normal tracking-[-0.5px] text-black">
            {point.description}
          </p>
          <p className="mt-[15px] font-normal tracking-[-0.5px] text-muted">
            {point.tag}
          </p>
          <p className="mt-[15px] font-normal tracking-[-0.5px] text-black">
            {point.metaTop}
          </p>
          <p className="font-normal tracking-[-0.5px] text-muted">
            {point.metaBottom}
          </p>
        </div>
      </div>
      <div className="mt-[10px] border-t-2 border-black" />
    </>
  );
}
 
