"use client";

import { useRef } from "react";
import s from "./BinaFlow.module.css";

// Tap-to-enlarge for the BINA diagram slides (Sukhman, 2026-10-05): on a
// phone the text inside the slides is too small to read, so tapping one
// opens it in a full-screen <dialog> at its own pixel size, where it can be
// scrolled in both directions (and pinch-zoomed). Esc, the close button or
// a tap on the empty area closes it. The native <dialog> gives focus
// trapping and Esc handling for free.
export default function BinaZoom({ src, alt, width, children }) {
  const dlg = useRef(null);

  const open = () => dlg.current?.showModal();
  const close = () => dlg.current?.close();

  return (
    <>
      <button type="button" className={s.zoomBtn} onClick={open} aria-label={`Enlarge: ${alt}`}>
        {children}
        <span className={s.zoomHint}>Tap to enlarge</span>
      </button>
      <dialog
        ref={dlg}
        className={s.zoomDlg}
        aria-label={alt}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <button type="button" className={s.zoomClose} onClick={close} aria-label="Close">
          ✕
        </button>
        <div className={s.zoomScroll} onClick={(e) => e.target === e.currentTarget && close()}>
          {/* Plain <img>: shown at its own size, so the browser loads the file once, unresized. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} width={width} className={s.zoomImg} loading="lazy" />
        </div>
      </dialog>
    </>
  );
}
