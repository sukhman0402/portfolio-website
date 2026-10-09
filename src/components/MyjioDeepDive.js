"use client";

import { useEffect, useRef } from "react";
import localFont from "next/font/local";
import "./MyjioDeepDive.css";

// MyJio DEEP DIVE renderer (13 chapters), approved by Sukhman 2026-10-09.
// Reference: "Modern Fintech CRM & SaaS App Design" (Behance 252756481).
// Each project's Deep Dive has its own reference (Drive Wise: GeoTab,
// LongCaseStudy.js; BINA: Aethera, BinaDeepDive.js).
// The markup lives in src > lib > myjioLongCaseStudy.js (generated from the
// approved previews); styles in MyjioDeepDive.css, scoped under .mjdd.
//
// Phase marker: while chapters 4 to 9 (the Double Diamond phases) are on
// screen, a small pill pinned under the header shows the current phase.

const serif = localFont({ src: "../fonts/instrument-serif-latin-400-italic.woff2", style: "italic", weight: "400", display: "swap", variable: "--f-serif" });
const inter = localFont({
  src: [
    { path: "../fonts/inter-latin-400-normal.woff2", weight: "400" },
    { path: "../fonts/inter-latin-600-normal.woff2", weight: "600" },
  ],
  display: "swap",
  variable: "--f-inter",
});

// chapter number -> phase index (0 Empathy, 1 Re-frame, 2 Ideation, 3 Prototype)
const PHASE_OF = { 4: 0, 5: 0, 6: 1, 7: 2, 8: 3, 9: 3 };
const PHASES = [
  { name: "Empathy", alt: "Discover", up: true },
  { name: "Re-frame", alt: "Define", up: false },
  { name: "Ideation", alt: "Develop", up: true },
  { name: "Prototype", alt: "Deliver", up: false },
];

function Mini({ up, on, id }) {
  return (
    <svg viewBox="0 0 300 184" preserveAspectRatio="none" aria-hidden="true" style={{ width: 20, height: 13, display: "block", opacity: on ? 1 : 0.35 }}>
      <defs>
        <linearGradient id={`${id}f`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e30513" stopOpacity={on ? 1 : 0.1} />
          <stop offset="1" stopColor="#0a2885" stopOpacity={on ? 1 : 0.1} />
        </linearGradient>
        <linearGradient id={`${id}s`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#e30513" />
          <stop offset="1" stopColor="#0a2885" />
        </linearGradient>
      </defs>
      <polygon points={up ? "0,180 150,4 300,180" : "0,4 300,4 150,180"} fill={`url(#${id}f)`} />
      <path d={up ? "M0,180 L150,4 L300,180" : "M0,4 L150,180 L300,4"} fill="none" stroke={`url(#${id}s)`} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export default function MyjioDeepDive({ data }) {
  const root = useRef(null);
  const rail = useRef(null);

  useEffect(() => {
    const el = root.current;
    const marker = rail.current;
    if (!el || !marker) return;
    const rows = [...el.querySelectorAll(".chrow[data-ch]")];
    const items = [...marker.querySelectorAll("[data-i]")];
    const label = marker.querySelector("[data-label]");
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.35;
      let ch = 0;
      for (const r of rows) if (r.getBoundingClientRect().top < line) ch = Number(r.dataset.ch);
      const p = PHASE_OF[ch];
      marker.classList.toggle("show", p !== undefined);
      if (p === undefined) return;
      items.forEach((it, i) => it.setAttribute("data-on", i === p ? "1" : "0"));
      label.innerHTML = `<b>${PHASES[p].name}</b><span class="g"> / ${PHASES[p].alt}</span>`;
      marker.setAttribute("aria-label", `Current phase: ${PHASES[p].name}`);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={root} className={`mjdd ${serif.variable} ${inter.variable}`}>
      <div dangerouslySetInnerHTML={{ __html: data.html }} />
      <div ref={rail} className="mrail" role="status">
        <div className="rail">
          {PHASES.map((p, i) => (
            <span key={p.name} className="rt" data-i={i} data-on="0">
              <span className="off"><Mini up={p.up} on={false} id={`mr${i}a`} /></span>
              <span className="on"><Mini up={p.up} on id={`mr${i}b`} /></span>
            </span>
          ))}
          <span className="rl" data-label="" />
        </div>
      </div>
    </div>
  );
}
