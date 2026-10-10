"use client";

import { useEffect, useRef } from "react";
import localFont from "next/font/local";
import "./UnSdgsDeepDive.css";

// UN SDGs DEEP DIVE renderer (13 chapters), approved by Sukhman 2026-10-10.
// Reference: "AI Workflow Automation SaaS Dashboard UX/UI Design"
// (Behance 252965935). Each project's Deep Dive has its own reference
// (Drive Wise: GeoTab, LongCaseStudy.js; BINA: Aethera, BinaDeepDive.js;
// MyJio: Fintech CRM, MyjioDeepDive.js).
// The markup lives in src > lib > unSdgsLongCaseStudy.js (generated from the
// approved previews); styles in UnSdgsDeepDive.css, scoped under .undd.
// Inter is the project's own typeface (variable, so the light 200 and 300
// weights of the big numbers render as designed).
//
// The walkthrough video plays by itself (muted, looping) once it is on
// screen, unless the visitor asked for reduced motion; it keeps its controls.

const inter = localFont({
  src: "../fonts/inter-latin-wght-normal.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--f-undd",
});

export default function UnSdgsDeepDive({ data }) {
  const root = useRef(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const videos = [...el.querySelectorAll("video")];
    if (!videos.length || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const v = e.target;
          if (e.isIntersecting) v.play().catch(() => {});
          else v.pause();
        });
      },
      { threshold: 0.35 }
    );
    videos.forEach((v) => io.observe(v));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={root} className={`undd ${inter.variable}`}>
      <div dangerouslySetInnerHTML={{ __html: data.html }} />
    </div>
  );
}
