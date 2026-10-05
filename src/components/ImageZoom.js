"use client";

import { useRef } from "react";
import s from "./ImageZoom.module.css";

// Tap-to-enlarge for dense case-study boards (Sukhman, 2026-10-05: the short
// case studies' image boards). Same behaviour as BinaZoom.js, kept separate
// so each case study can change its own look: the image is a button; it
// opens a full-screen <dialog> showing the file at its own pixel size,
// scrollable in both directions (and pinch-zoomable). Esc, the close button
// or a tap on the empty area closes it. The native <dialog> gives focus
// trapping and Esc handling for free. "Tap to enlarge" shows on phones only.
export default function ImageZoom({ src, alt, width, children }) {
  const dlg = useRef(null);

  const open = () => dlg.current?.showModal();
  const close = () => dlg.current?.close();

  return (
    <>
      <button type="button" className={s.btn} onClick={open} aria-label={`Enlarge: ${alt}`}>
        {children}
        <span className={s.hint}>Tap to enlarge</span>
      </button>
      <dialog
        ref={dlg}
        className={s.dlg}
        aria-label={alt}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <button type="button" className={s.close} onClick={close} aria-label="Close">
          ✕
        </button>
        <div className={s.scroll} onClick={(e) => e.target === e.currentTarget && close()}>
          {/* Plain <img>: shown at its own size, so the browser loads the file once, unresized. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} width={width} className={s.img} loading="lazy" />
        </div>
      </dialog>
    </>
  );
}
