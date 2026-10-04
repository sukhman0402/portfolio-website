"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import s from "./CaseStudyFlow.module.css";

// Case study as ONE continuous flow (Sukhman, 2026-10-04), after the GeoTab
// Behance reference. Used by ProjectTopics.js for every section marked
// `flow: true` in the case-study data (src > lib > driveWiseCaseStudy.js).
//
// What a flow stage shows:
//   1. a blue OPENER: "// 01", the stage name, the stage-level texts
//      (blocks that hold sub-topics, e.g. Primary / Secondary research)
//      and a numbered index of the stage's topics
//   2. one MODULE per topic, each starting with a stage row ("// 01
//      Research ■ Primary research" + a "1.1 Interviews" chip):
//      - a topic with images: its approved visual(s) at natural height,
//        then its link, if any (the topic's own intro sentence is not
//        shown: each visual's side note already carries it)
//      - a topic with `standards`: its text large, plus one cell per standard
//      - a topic with `video`: the walkthrough panel (Final Solution)
//   3. a stage with `flowPanel` (Limitations, Learnings) shows all its
//      topics as ONE 2 x 2 panel instead of one module each
//   4. a stage with `closing` ends the case study with a black band.
// StageMap (top of the flow) lists every stage with its numbered topics.

// A stage's topics, numbered 1.1, 1.2 ...: a block's sub-topics when it
// has them (the block becomes their group), otherwise the block itself.
export function stageTopics(section, stageNumber) {
  const topics = [];
  section.blocks.forEach((block) => {
    if (block.subtopics?.length) {
      block.subtopics.forEach((sub) => topics.push({ ...sub, group: block.heading }));
    } else {
      topics.push({ ...block, group: null });
    }
  });
  return topics.map((t, i) => ({ ...t, number: `${stageNumber}.${i + 1}` }));
}

const pad = (n) => String(n).padStart(2, "0");

function Selection({ before, phrase, after = "" }) {
  return (
    <>
      {before}
      <span className={s.nowrap}>
        <span className={s.caret} />
        <span className={s.sel}>{phrase}</span>
        <span className={s.caret} />
      </span>
      {after}
    </>
  );
}

function Eyebrow({ num, stage, group, chip }) {
  return (
    <div className={s.eyebrow}>
      <div className={s.eyebrowLeft}>
        <span className={s.muted}>{`// ${num}`}</span>
        <span>{stage}</span>
        <i className={s.square} />
        {group && <span className={`${s.muted} ${s.group}`}>{group}</span>}
      </div>
      <span className={s.chip}>{chip}</span>
    </div>
  );
}

export function StageMap({ sections, onJump }) {
  return (
    <section className={s.module} aria-labelledby="flow-map-title">
      <Eyebrow num="00" stage="Overview" chip="How it runs" />
      <div className={s.head}>
        <h2 id="flow-map-title" className={s.headline}>
          <Selection before="Ten stages, " phrase="one flow" after=", from research to learnings." />
        </h2>
        <p className={s.side}>
          Every visual below carries its <b>stage number and topic</b> in its top row, so you always know
          where you are.
        </p>
      </div>
      <div className={s.map}>
        {sections.map((section, i) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => onJump?.(e, section.id)}
            className={s.mapCell}
          >
            <span className={s.ghost}>{pad(i + 1)}</span>
            <p className={s.mapName}>{section.tocLabel}</p>
            <ul className={s.mapList}>
              {stageTopics(section, i + 1).map((t) => (
                <li key={t.number}>
                  <span className={s.mapNum}>{t.number}</span>
                  <span>{t.heading}</span>
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  );
}

function ImageTopic({ t, num, stage }) {
  return (
    <section className={s.imgModule} aria-label={`${t.number} ${t.heading}`}>
      <Eyebrow num={num} stage={stage} group={t.group} chip={`${t.number}  ${t.heading}`} />
      {t.images.map((img) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          sizes="(min-width: 1440px) 1030px, (min-width: 768px) calc(100vw - 410px), calc(100vw - 40px)"
          className={s.visual}
        />
      ))}
      {t.link && (
        <div className={s.linkRow}>
          <a className={s.linkChip} href={t.link.href} target="_blank" rel="noopener noreferrer">
            {t.link.label} ↗
          </a>
        </div>
      )}
    </section>
  );
}

function StandardsTopic({ t, num, stage }) {
  return (
    <section className={s.module} aria-label={`${t.number} ${t.heading}`}>
      <Eyebrow num={num} stage={stage} group={t.group} chip={`${t.number}  ${t.heading}`} />
      <div className={s.std}>
        <p className={s.say}>{t.text}</p>
        <div>
          <div className={s.stdCells}>
            {t.standards.map((st) => (
              <div key={st.name} className={s.stdCell}>
                <span className={s.chip}>{st.name}</span>
                <p>{st.text}</p>
              </div>
            ))}
          </div>
          {t.standardsNote && <p className={s.note}>{t.standardsNote}</p>}
        </div>
      </div>
    </section>
  );
}

// Final Solution: the walkthrough video (silent, looping) beside the five
// screens it shows. "Try the prototype" swaps the video for the live Figma
// prototype, which only loads on click so the page stays fast. Visitors who
// ask their device for less motion get the poster frame with play controls.
function VideoTopic({ t, num, stage }) {
  const videoRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [showPrototype, setShowPrototype] = useState(false);
  const { video, prototype } = t;

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      setReducedMotion(query.matches);
      const el = videoRef.current;
      if (!el) return;
      if (query.matches) el.pause();
      else el.play().catch(() => {});
    };
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, [showPrototype]);

  return (
    <section className={s.module} aria-label={`${t.number} ${t.heading}`}>
      <Eyebrow num={num} stage={stage} group={t.group} chip={`${t.number}  ${t.heading}`} />
      <div className={s.head}>
        <h3 className={s.headline}>
          <Selection {...t.flowHeadline} />
        </h3>
        <p className={s.side}>{t.text}</p>
      </div>
      <div className={s.final}>
        <div className={s.finalStage}>
          {showPrototype && prototype ? (
            <iframe
              src={prototype.embedSrc}
              title="Drive Wise prototype (Figma)"
              className={s.proto}
              allowFullScreen
            />
          ) : (
            <video
              ref={videoRef}
              className={s.video}
              width={video.width}
              height={video.height}
              poster={video.poster}
              aria-label={video.label}
              autoPlay={!reducedMotion}
              muted
              loop
              playsInline
              preload="metadata"
              controls={reducedMotion}
            >
              <source src={video.webm} type="video/webm" />
              <source src={video.mp4} type="video/mp4" />
            </video>
          )}
        </div>
        <div className={s.finalList}>
          {t.screens?.map((sc, k) => (
            <div key={sc.name} className={s.finalRow}>
              <span className={s.ghost}>{`//${pad(k + 1)}`}</span>
              <div>
                <p className={s.finalName}>{sc.name}</p>
                <p className={s.finalText}>{sc.text}</p>
              </div>
            </div>
          ))}
          <div className={s.finalActions}>
            {prototype && (
              <>
                <button type="button" className={s.linkChip} onClick={() => setShowPrototype((v) => !v)}>
                  {showPrototype ? "Back to the walkthrough" : prototype.buttonLabel}
                </button>
                <a className={s.textLink} href={prototype.openHref} target="_blank" rel="noopener noreferrer">
                  {prototype.openLabel} ↗
                </a>
              </>
            )}
            {video.credit && <p className={s.note}>{video.credit}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

// Limitations / Learnings: every topic in one 2 x 2 panel.
function PanelStage({ section, topics, num }) {
  const { chip, headline, skins = [] } = section.flowPanel;
  return (
    <section className={s.module} aria-label={section.tocLabel}>
      <Eyebrow num={num} stage={section.tocLabel} chip={chip} />
      <div className={s.head}>
        <h3 className={s.headline}>
          <Selection {...headline} />
        </h3>
      </div>
      <div className={s.panel}>
        {topics.map((t, k) => {
          const skin = skins[k] || "white";
          const numbered = t.points?.every((p) => !p.title);
          return (
            <div key={t.number} className={`${s.cell} ${s[skin]}`}>
              <div className={s.cellTop}>
                <span className={`${s.chip} ${skin === "white" ? "" : s.chipLight}`}>{`${t.number}  ${t.heading}`}</span>
                <span className={s.ghost}>{`//${pad(k + 1)}`}</span>
              </div>
              <p className={s.cellLead}>{t.text}</p>
              <ul className={s.points}>
                {t.points?.map((p, i) => (
                  <li key={i}>
                    {numbered ? <span className={s.pointNum}>{`//${pad(i + 1)}`}</span> : <i className={s.pointMark} />}
                    <span>
                      {p.title && <b>{p.title} </b>}
                      {p.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Closing({ closing }) {
  return (
    <div className={s.closing}>
      <div className={s.openerTop}>
        <span>{"// End"}</span>
        <span>Drive Wise</span>
      </div>
      <p className={s.openerTitle}>{closing.title}</p>
      <div className={s.closingLinks}>
        {closing.links.map((l) => (
          <a key={l.href} className={`${s.linkChip} ${s.linkChipLight}`} href={l.href} target="_blank" rel="noopener noreferrer">
            {l.label} ↗
          </a>
        ))}
      </div>
    </div>
  );
}

export function FlowStage({ section, index, total }) {
  const num = pad(index + 1);
  const topics = stageTopics(section, index + 1);
  const stageTexts = section.blocks.filter((b) => b.subtopics?.length && b.text);

  return (
    <>
      <div className={s.opener}>
        <div className={s.openerTop}>
          <span>{`// ${num}`}</span>
          <span>{`${num} / ${pad(total)}`}</span>
        </div>
        <h2 className={s.openerTitle}>{section.tocLabel}</h2>
        <div className={s.openerBody}>
          <div>
            {stageTexts.map((b) => (
              <div key={b.heading} className={s.openerText}>
                <p className={s.openerLabel}>{b.heading}</p>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
          <ul className={s.index}>
            {topics.map((t) => (
              <li key={t.number}>
                <span className={s.indexNum}>{t.number}</span>
                <span>{t.heading}</span>
                {t.group && <span className={s.indexGroup}>{t.group}</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {section.flowPanel ? (
        <PanelStage section={section} topics={topics} num={num} />
      ) : (
        topics.map((t) => {
          const props = { t, num, stage: section.tocLabel };
          if (t.video) return <VideoTopic key={t.number} {...props} />;
          if (t.standards) return <StandardsTopic key={t.number} {...props} />;
          if (t.images?.length) return <ImageTopic key={t.number} {...props} />;
          return null;
        })
      )}

      {section.closing && <Closing closing={section.closing} />}
    </>
  );
}
