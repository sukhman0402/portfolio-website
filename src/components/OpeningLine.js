"use client";

import { useLayoutEffect, useRef, useState } from "react";

// OpeningLine: the description text of a Projects/Research row.
// Shared by ProjectRow.js (with a dropdown) and ResearchRow.js (without).
// Data (src > lib > data.js): `lead` + `more` together make one sentence.
//
// COLLAPSED (Sukhman, 2026-09-25):
//   - Desktop (768px and up) shows 1 line, phones show the top 2 lines.
//   - The text fills the last line all the way to the right edge of the
//     text column, cut mid-word if needed, with ".." right after the last
//     letter (e.g. "...decision logic and int.."). The ".." ends within one
//     letter's width of the edge: letters have different widths, so an
//     exact pixel match isn't possible without stretching the text.
// EXPANDED: the full sentence.
// NOTHING MOVES ON EXPAND: every visible character stays in place, with one
// unavoidable exception: to fill the last collapsed line to the edge, it
// borrows the start of the next word(s); once expanded, those borrowed
// letters sit at the start of the next line, where the sentence really
// wraps. Everything before them stays put.
//
// How: an invisible copy of the full sentence ("probe") is laid out
// underneath at exactly the same width and style as the expanded text.
// Reading each character's position from it tells us which characters
// sit on lines 1..N. The collapsed view then prints those same lines
// (each line as its own row, so the browser can't re-wrap them), and on
// the last line keeps as many characters as fit with the ".." after them. Because the lines are copied from
// a layout identical to the expanded one, every character shown collapsed
// is at the same spot it occupies once expanded. Re-measured whenever the
// column width changes (rotation, resize, font loading).
//
// Before the first measurement (the server-rendered HTML), a CSS line
// clamp is used as a fallback so the row already has the right height.
export default function OpeningLine({ lead, more = "", open = false, className = "" }) {
  const full = lead + more;
  const boxRef = useRef(null);
  const probeRef = useRef(null);
  const dotsRef = useRef(null);
  // { lines: string[], cut: boolean } once measured, null before
  const [layout, setLayout] = useState(null);

  useLayoutEffect(() => {
    if (open) return;
    const box = boxRef.current;
    const probe = probeRef.current;
    const dots = dotsRef.current;
    if (!box || !probe || !dots) return;

    const measure = () => {
      const maxLines = window.matchMedia("(min-width: 768px)").matches ? 1 : 2;
      const node = probe.firstChild;
      if (!node) return;
      const boxRect = box.getBoundingClientRect();
      const dotsWidth = dots.getBoundingClientRect().width;
      const lineHeight = parseFloat(getComputedStyle(box).lineHeight) || 22.5;

      // group characters into lines by their vertical position
      const lines = []; // each: { top, start (index into full), text }
      const range = document.createRange();
      for (let i = 0; i < node.length; i++) {
        range.setStart(node, i);
        range.setEnd(node, i + 1);
        const r = range.getClientRects()[0];
        const ch = node.data[i];
        const last = lines[lines.length - 1];
        if (r && (!last || r.top > last.top + lineHeight / 2)) {
          lines.push({ top: r.top, start: i, text: "" });
        }
        // (a space swallowed at a line break has no box: it stays on the current line)
        if (lines.length) lines[lines.length - 1].text += ch;
      }

      if (lines.length <= maxLines) {
        setLayout({ lines: lines.map((l) => l.text.trimEnd()), cut: false });
        return;
      }

      // Last visible line: instead of stopping where the browser would
      // wrap, keep going through the following words on one line until the
      // text reaches the ".." pinned at the right edge. Measured with a
      // throwaway single-line copy starting at that line's first character.
      const lastStart = lines[maxLines - 1].start;
      const oneLine = document.createElement("span");
      oneLine.style.cssText =
        "position:absolute;left:0;top:0;white-space:pre;visibility:hidden;";
      oneLine.textContent = full.slice(lastStart);
      box.appendChild(oneLine);
      const t = oneLine.firstChild;
      const originX = oneLine.getBoundingClientRect().left;
      const limit = boxRect.width - dotsWidth;
      let end = 0;
      while (end < t.length) {
        range.setStart(t, end);
        range.setEnd(t, end + 1);
        const r = range.getBoundingClientRect();
        if (r.right - originX > limit) break;
        end++;
      }
      box.removeChild(oneLine);

      setLayout({
        lines: [
          ...lines.slice(0, maxLines - 1).map((l) => l.text.trimEnd()),
          full.slice(lastStart, lastStart + end).trimEnd(),
        ],
        cut: true,
      });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(box);
    if (document.fonts?.ready) document.fonts.ready.then(measure);
    return () => ro.disconnect();
  }, [open, full]);

  if (open) {
    return <span className={`block ${className}`}>{full}</span>;
  }

  return (
    <span ref={boxRef} className={`relative block ${className}`}>
      {layout ? (
        layout.lines.map((text, i) => {
          const isLast = i === layout.lines.length - 1;
          return (
            <span key={i} className="relative block whitespace-pre">
              {text}
              {isLast && layout.cut && ".."}
            </span>
          );
        })
      ) : (
        // fallback until measured: browser clamp (its own "…")
        <span className="block line-clamp-2 md:line-clamp-1">{full}</span>
      )}

      {/* Measuring copy: the full sentence laid out exactly like the
          expanded text, invisible and out of the flow. */}
      <span
        ref={probeRef}
        aria-hidden="true"
        className="pointer-events-none invisible absolute inset-x-0 top-0"
      >
        {full}
      </span>
      <span ref={dotsRef} aria-hidden="true" className="invisible absolute left-0 top-0">
        ..
      </span>
    </span>
  );
}
