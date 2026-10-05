"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import s from "./BinaFlow.module.css";

// BINA case study flow (Sukhman, 2026-10-05), after the ISA ESG Behance
// reference: its own identity, deliberately NOT the Drive Wise flow.
// Rendered by ProjectTopics.js for every section with `flow: "bina"`
// (data: src > lib > binaCaseStudy.js; rules: claude/bina/14-layout.md).
//
//   - white page, Mulish, text green #026D00 only for key phrases and labels
//   - lines and soft fills use the Figma Documentation gradient
//     white -> #3FAE5A; straight rounded cards, no slanted shapes
//   - one left margin: page-code text starts where the text inside the
//     images starts (40 px of a 1030 px image = 3.88% of the column)
//
// Per stage: a light OPENER ("Stage 01 of 10", stage name, group texts or
// the stage intro, the topic list), then one MODULE per topic (grey topic
// label + the approved image), a PANEL for Limitations and Learnings, and
// a CLOSING panel after the last stage.

const mulish = localFont({
  src: "../fonts/mulish-latin-wght-normal.woff2",
  weight: "200 1000",
  display: "swap",
});

const pad = (n) => String(n).padStart(2, "0");
const SIZES = "(min-width: 1440px) 1030px, (min-width: 768px) calc(100vw - 410px), calc(100vw - 40px)";

function Visual({ image, priority = false }) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes={SIZES}
      className={s.visual}
      priority={priority}
    />
  );
}

// Define > Personas: the overview stays visible; the detailed persona
// pages swipe sideways underneath (scroll-snap, with buttons for mouse and
// keyboard users).
function Carousel({ carousel }) {
  const track = useRef(null);
  const [page, setPage] = useState(0);
  const count = carousel.images.length;

  const go = (i) => {
    const el = track.current;
    if (!el) return;
    const next = Math.max(0, Math.min(count - 1, i));
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
    setPage(next);
  };

  const onScroll = () => {
    const el = track.current;
    if (el) setPage(Math.round(el.scrollLeft / el.clientWidth));
  };

  return (
    <div className={s.carousel}>
      <div className={s.carouselBar}>
        <p className={s.caps}>
          <i className={s.dot} />
          {carousel.label}
        </p>
        <div className={s.carouselNav}>
          <span className={s.count}>{`${page + 1} / ${count}`}</span>
          <button type="button" className={s.navBtn} onClick={() => go(page - 1)} disabled={page === 0} aria-label="Previous page">
            ←
          </button>
          <button type="button" className={s.navBtn} onClick={() => go(page + 1)} disabled={page === count - 1} aria-label="Next page">
            →
          </button>
        </div>
      </div>
      <div ref={track} className={s.track} onScroll={onScroll} tabIndex={0} aria-label={carousel.label}>
        {carousel.images.map((im) => (
          <div key={im.src} className={s.slide}>
            <Visual image={im} />
          </div>
        ))}
      </div>
    </div>
  );
}

// Outcome > The Working Prototype: page code, because each card holds a
// live link to its demo video.
function VideoCards({ videos }) {
  return (
    <div className={s.vid}>
      <h3 className={s.statement}>
        {videos.headline.lead}
        <em>{videos.headline.accent}</em>
      </h3>
      <p className={s.side}>
        <b>{videos.side.strong}</b>
        {videos.side.rest}
      </p>
      <div className={s.vidGrid}>
        {videos.cards.map((c) => (
          <div key={c.title} className={`${s.card} ${c.on ? s.cardOn : ""}`}>
            <p className={s.caps}>
              <i className={s.dot} />
              {c.label}
            </p>
            <h4 className={s.cardTitle}>{c.title}</h4>
            <ol className={s.steps}>
              {c.steps.map((st, k) => (
                <li key={st} className={k === c.steps.length - 1 ? s.stepLast : ""}>
                  <span>{pad(k + 1)}</span>
                  {st}
                </li>
              ))}
            </ol>
            <a className={s.btn} href={c.cta.href} target="_blank" rel="noopener noreferrer">
              {c.cta.label} ↗
            </a>
          </div>
        ))}
      </div>
      <a className={`${s.btn} ${s.btnGhost}`} href={videos.code.href} target="_blank" rel="noopener noreferrer">
        {videos.code.label} ↗
      </a>
    </div>
  );
}

function Topic({ t, first }) {
  return (
    <section className={s.module} aria-label={`${t.number} ${t.heading}`}>
      <p className={s.topicLabel}>
        <span className={s.topicNum}>{t.number}</span>
        {t.heading}
        {t.group && <span className={s.topicGroup}>{t.group}</span>}
      </p>
      {t.videos && <VideoCards videos={t.videos} />}
      {t.images?.map((im, k) => (
        <Visual key={im.src} image={im} priority={first && k === 0} />
      ))}
      {t.carousel && <Carousel carousel={t.carousel} />}
    </section>
  );
}

function Panel({ panel }) {
  const { label, statement, cells } = panel;
  return (
    <section className={s.panel} aria-label={label}>
      <p className={s.label}>{label}</p>
      <h3 className={s.statement}>
        {statement.soft && <span className={s.soft}>{statement.soft}</span>}
        {statement.plain}
        <em>{statement.accent}</em>
      </h3>
      <div className={s.quad}>
        {cells.map((c, k) => (
          <div key={c.title} className={s.q}>
            <p className={s.caps}>
              <i className={s.dot} />
              {`${pad(k + 1)} ${c.title}`}
            </p>
            <h4 className={s.qLead}>{c.intro}</h4>
            <ul className={s.points}>
              {c.points.map((p) => (
                <li key={p.title}>
                  <b>{p.title}</b> {p.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Closing({ closing }) {
  return (
    <div className={s.closing}>
      <div className={s.topRow}>
        <span>End of case study</span>
        <span>{closing.name}</span>
      </div>
      <p className={s.closingTitle}>{closing.title}</p>
      <div className={s.closingLinks}>
        {closing.links.map((l) => (
          <a key={l.href} className={s.btn} href={l.href} target="_blank" rel="noopener noreferrer">
            {l.label} ↗
          </a>
        ))}
      </div>
    </div>
  );
}

export function BinaStage({ section, index, total }) {
  const num = index + 1;
  const topics = (section.topics || []).map((t, i) => ({ ...t, number: `${num}.${i + 1}` }));

  return (
    <div className={`${mulish.className} ${s.root}`}>
      <div className={s.opener}>
        <div className={s.topRow}>
          <span>
            <i className={s.dot} />
            {`Stage ${pad(num)} of ${pad(total)}`}
          </span>
          <span>{section.tocLabel}</span>
        </div>
        <h2 className={s.stageName}>{section.tocLabel}</h2>

        {section.groups?.length ? (
          <div className={s.cols}>
            {section.groups.map((g) => (
              <div key={g.heading} className={s.col}>
                <p className={s.caps}>
                  <i className={s.dot} />
                  {g.heading}
                </p>
                <p className={s.colText}>{g.text}</p>
              </div>
            ))}
          </div>
        ) : (
          section.intro && <p className={s.intro}>{section.intro}</p>
        )}

        {topics.length > 0 && (
          <div className={s.meta}>
            <p className={s.label}>In this stage</p>
            {topics.map((t) => (
              <div key={t.number} className={s.metaRow}>
                <span className={s.metaNum}>{t.number}</span>
                <span>{t.heading}</span>
                {t.group && <span className={s.metaGroup}>{t.group}</span>}
              </div>
            ))}
          </div>
        )}
      </div>

      {topics.map((t, i) => (
        <Topic key={t.number} t={t} first={index === 0 && i === 0} />
      ))}
      {section.panel && <Panel panel={section.panel} />}
      {section.closing && <Closing closing={section.closing} />}
    </div>
  );
}
