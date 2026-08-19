"use client";

import { useEffect, useState } from "react";

// Landing Page Section 0.0 — Splash Screen (design.md §3, Section 0.0).
// STATUS: concept only in Figma — empty frame, no elements placed. Your
// stated intent: a 2–3s teaser previewing the site's visual language
// (inspiration: Pinterest morph effect w/ mosaic illustrations), skippable,
// non-blocking.
//
// This is a minimal functional placeholder (wordmark fade/scale) that
// satisfies the mechanic — auto-dismiss + tap/scroll/click to skip — so the
// slot exists and works. Replace the visual treatment once the mosaic
// concept is actually designed; the timing/skip logic underneath can stay.
export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const dismiss = () => setLeaving(true);
    const timer = setTimeout(dismiss, 2500);

    window.addEventListener("click", dismiss);
    window.addEventListener("keydown", dismiss);
    window.addEventListener("wheel", dismiss, { passive: true });
    window.addEventListener("touchstart", dismiss, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("click", dismiss);
      window.removeEventListener("keydown", dismiss);
      window.removeEventListener("wheel", dismiss);
      window.removeEventListener("touchstart", dismiss);
    };
  }, []);

  useEffect(() => {
    if (!leaving) return;
    const t = setTimeout(() => setVisible(false), 500);
    return () => clearTimeout(t);
  }, [leaving]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500 ${
        leaving ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      role="presentation"
      aria-hidden="true"
    >
      <span className="animate-pulse font-bold tracking-[-1.5px] text-[15px]">
        SUKHMAN.
      </span>
    </div>
  );
}
