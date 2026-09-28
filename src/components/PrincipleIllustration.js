"use client";
 
import { useEffect, useMemo, useRef } from "react";
import {
  getIllustration,
  ease,
  STATIC_MS,
  MOTION_MS,
  CYCLE_MS,
} from "@/lib/principleIllustrations";
 
// How I Function card illustration (Sukhman, 2026-09-28). Geometry and
// timing live in src/lib/principleIllustrations.js; this file only draws.
//
// How it runs:
//   - The first render (also the server render) is the still pose, so the
//     page shows the illustration even before any JavaScript runs.
//   - After that, one requestAnimationFrame loop per icon moves the circles
//     by writing their attributes directly (no React re-render per frame).
//   - All six read the same page clock (performance.now), so each group
//     stays in step without the cards talking to each other.
//   - The loop only runs while the card is on screen (IntersectionObserver)
//     and never runs for visitors who turned on "reduce motion" in their
//     system settings; they get the still pose.
//   - Line width is 2px on screen at every size: vector-effect
//     non-scaling-stroke stops the line from scaling with the drawing.
//   - translate-y-[5px]: the illustration sits 5px below the tile's centre
//     (direct instruction, 2026-09-28).
export default function PrincipleIllustration({ name }) {
  const svgRef = useRef(null);
  const illustration = useMemo(() => getIllustration(name), [name]);
 
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg || !illustration) return;
    const els = svg.querySelectorAll("circle");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let onScreen = false;
 
    const draw = (t) => {
      illustration.frame(t).forEach((c, i) => {
        const el = els[i];
        el.setAttribute("cx", c.x.toFixed(2));
        el.setAttribute("cy", c.y.toFixed(2));
        el.setAttribute("r", c.r.toFixed(2));
        el.setAttribute("stroke-opacity", c.o.toFixed(3));
        if (c.trace !== undefined) {
          // Simplicity: first half erases the line from 12 o'clock
          // clockwise, second half draws it back. pathLength="1" lets the
          // dash values be fractions of the full circle.
          const tt = c.trace;
          if (tt <= 0 || tt >= 1) {
            el.removeAttribute("stroke-dasharray");
            el.removeAttribute("stroke-dashoffset");
          } else if (tt < 0.5) {
            const u = tt * 2;
            el.setAttribute("stroke-dasharray", `${1 - u} 2`);
            el.setAttribute("stroke-dashoffset", `${-u}`);
          } else {
            const v = (tt - 0.5) * 2;
            el.setAttribute("stroke-dasharray", `${v} 2`);
            el.setAttribute("stroke-dashoffset", "0");
          }
        }
      });
    };
 
    const tick = (now) => {
      const phase = (now + CYCLE_MS - illustration.offsetMs) % CYCLE_MS;
      draw(phase < STATIC_MS ? 0 : ease((phase - STATIC_MS) / MOTION_MS));
      raf = requestAnimationFrame(tick);
    };
    const start = () => {
      if (!raf && onScreen && !reduce.matches) raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };
 
    const observer = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        if (onScreen) start();
        else stop();
      },
      { rootMargin: "100px" }
    );
    observer.observe(svg);
 
    const onReduceChange = () => {
      if (reduce.matches) {
        stop();
        draw(0);
      } else start();
    };
    reduce.addEventListener("change", onReduceChange);
 
    return () => {
      stop();
      observer.disconnect();
      reduce.removeEventListener("change", onReduceChange);
    };
  }, [illustration]);
 
  if (!illustration) return null;
 
  return (
    <svg
      ref={svgRef}
      viewBox="0 0 200 200"
      fill="none"
      stroke="#000"
      strokeWidth={2}
      aria-hidden="true"
      className="h-[132px] w-[132px] translate-y-[5px] overflow-visible"
    >
      {illustration.frame(0).map((c, i) => (
        <circle
          key={i}
          cx={c.x.toFixed(2)}
          cy={c.y.toFixed(2)}
          r={c.r.toFixed(2)}
          strokeOpacity={c.o}
          vectorEffect="non-scaling-stroke"
          {...(c.trace !== undefined
            ? { pathLength: 1, transform: `rotate(-90 ${c.x} ${c.y})` }
            : {})}
        />
      ))}
    </svg>
  );
}
 
