"use client";

import { useEffect, useRef } from "react";
import "./MyAlumnusDeepDive.css";

// My Alumnus DEEP DIVE renderer (13 chapters), approved by Sukhman 2026-10-10.
// Reference: "Nexa AI, Analytics Dashboard & AI Assistant" (Behance 248123949).
// Each project's Deep Dive has its own reference (Drive Wise: GeoTab,
// LongCaseStudy.js; BINA: Aethera, BinaDeepDive.js; MyJio: Fintech CRM,
// MyjioDeepDive.js; UN SDGs: AI Workflow Automation, UnSdgsDeepDive.js).
// The markup lives in src > lib > myAlumnusLongCaseStudy.js (generated from
// the approved previews); styles in MyAlumnusDeepDive.css, scoped under .madd.
// Manrope and Google Sans (the product's own typeface) load from
// public > fonts > my-alumnus, declared in the CSS.
//
// The walkthrough video plays by itself (muted, looping) once it is on
// screen, unless the visitor asked for reduced motion.

export default function MyAlumnusDeepDive({ data }) {
  const root = useRef(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const videos = [...el.querySelectorAll("video")];
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      videos.forEach((v) => {
        v.removeAttribute("autoplay");
        v.pause();
        v.controls = true;
      });
      return;
    }
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
    <div ref={root} className="madd">
      <div dangerouslySetInnerHTML={{ __html: data.html }} />
    </div>
  );
}
