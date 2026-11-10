"use client";

import { useCallback, useState } from "react";
import localFont from "next/font/local";
import { Player } from "./SwiggyVisuals";
import { FLOWS } from "@/lib/swiggyShortCaseStudy";
import "./SwiggyDeepDive.css";

// SWIGGY AGENT DESK, DEEP DIVE renderer (13 chapters), approved by Sukhman
// 2026-11-11. Reference: Sistema de NPS (Behance 256750599). Each project's
// Deep Dive has its own reference and renderer (see projects/[slug]/full).
// The markup lives in src > lib > swiggyLongCaseStudy.js (generated from the
// approved previews); styles in SwiggyDeepDive.css, scoped under .swdd.
//
// The one interactive part is chapter 8b, the working prototype: the large
// poster and the five flow cards carry data-flow="<n>", and a click opens the
// same full-screen player the Highlights page uses (SwiggyVisuals.js).

const inter = localFont({ src: "../fonts/inter-latin-wght-normal.woff2", weight: "100 900", display: "swap", variable: "--f-inter" });

export default function SwiggyDeepDive({ data }) {
  const [open, setOpen] = useState(null);

  const onClick = useCallback((e) => {
    const el = e.target.closest("[data-flow]");
    if (el) setOpen(Number(el.dataset.flow));
  }, []);

  return (
    <div className={`swdd ${inter.variable}`} onClick={onClick}>
      {data.sections.map((s) => (
        <div key={s.id} id={`dd-${s.id}`} dangerouslySetInnerHTML={{ __html: s.html }} />
      ))}
      {open !== null && <Player flows={FLOWS} index={open} onChange={setOpen} onClose={() => setOpen(null)} />}
    </div>
  );
}
