"use client";
 
import { useState } from "react";
 
// Landing Page Section 4.0 — Timeline (design.md §3, Section 4.0).
// STATUS: this section is undesigned in Figma — the frame only contains the
// label "( TIMELINE )", centered (both axes) in red (#ef0000), no border —
// unlike every other section header (corrected 2026-08-20; was previously
// styled like a bordered black section heading, which doesn't match).
// Per your stated intent (2026-08-17): a horizontal
// line with circles marking stages, and a single detail panel below that
// updates on hover — not one panel per stage like the Pinterest reference.
//
// The stage data below is a structural placeholder (clearly marked) so the
// interaction actually works end-to-end; swap in your real
// milestones/dates/descriptions whenever they're ready — the mechanic
// won't need to change.
const STAGES = [
  { id: 1, label: "Lorem ipsum", year: "20XX", detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit." },
  { id: 2, label: "Lorem ipsum", year: "20XX", detail: "Aenean commodo ligula eget dolor. Aenean massa." },
  { id: 3, label: "Lorem ipsum", year: "20XX", detail: "Cum sociis natoque penatibus et magnis dis parturient montes." },
  { id: 4, label: "Lorem ipsum", year: "20XX", detail: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis." },
  { id: 5, label: "Lorem ipsum", year: "20XX", detail: "Nulla consequat massa quis enim. Donec pede justo, fringilla." },
];
 
export default function TimelineSection() {
  const [active, setActive] = useState(STAGES[0].id);
  const activeStage = STAGES.find((s) => s.id === active) ?? STAGES[0];
 
  return (
    <section className="w-full">
      {/* pt-[180px] (mobile only, md:pt-28 unchanged) — same site-wide
          inter-section rule as ResearchSection, flagged 2026-09-02, revised
          same day from 300px down to 180px (see ResearchSection.js for the
          full note). Research carries no trailing bottom space of its own,
          so this pt- alone produces the full 180px gap from Research's last
          row. */}
      <div className="mx-auto max-w-[1440px] px-5 pt-[180px] text-center sm:px-[30px] md:pt-28">
        <h2 className="font-bold uppercase tracking-normal text-accent">
          ( Timeline )
        </h2>
 
        <div className="mt-16 md:mt-20">
          <div className="relative flex justify-between">
            <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-black/20" />
            {STAGES.map((stage) => (
              <button
                key={stage.id}
                type="button"
                onMouseEnter={() => setActive(stage.id)}
                onFocus={() => setActive(stage.id)}
                className="group relative z-10 flex flex-col items-center gap-3"
                aria-pressed={active === stage.id}
              >
                <span
                  className={`h-3 w-3 rounded-full border border-black transition-colors ${
                    active === stage.id ? "bg-black" : "bg-white"
                  }`}
                />
                <span className="hidden text-xs font-medium uppercase tracking-[-0.5px] text-muted sm:block">
                  {stage.year}
                </span>
              </button>
            ))}
          </div>
 
          {/* pt-[10px] (mobile only, md:pt-6 unchanged) — flagged
              2026-09-02: site-wide "line, then text" rule, set from the
              Projects heading -> divider -> first row reference (10px in
              the live DOM). Was pt-6 (24px) on mobile; standardized to
              10px. mt-10 (the gap ABOVE this divider, from the stage-dots
              row) is untouched — that's a different kind of boundary, not
              covered by this rule. */}
          <div className="mt-10 border-t-2 border-black pt-[10px] md:pt-6 md:mt-14">
            <p className="font-semibold tracking-[-0.5px]">
              {activeStage.label} — {activeStage.year}
            </p>
            <p className="mt-2 max-w-[680px] font-normal tracking-[-0.5px] text-black/80">
              {activeStage.detail}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
 
