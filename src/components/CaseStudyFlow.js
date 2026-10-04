import Image from "next/image";
import s from "./CaseStudyFlow.module.css";

// Case study as ONE continuous flow (Sukhman, 2026-10-04), after the GeoTab
// Behance reference. Used by ProjectTopics.js for every section marked
// `flow: true` in the case-study data (src > lib > driveWiseCaseStudy.js);
// the other sections keep the older heading + text + image blocks until
// they are converted, stage by stage.
//
// What a flow stage shows:
//   1. a blue OPENER: "// 01", the stage name, the stage-level texts
//      (blocks that hold sub-topics, e.g. Primary / Secondary research)
//      and a numbered index of the stage's topics
//   2. one MODULE per topic: a stage row ("// 01  Research ■  Primary
//      research" + a "1.1  Interviews" chip), then the topic's approved
//      visual(s) at natural height, then its link, if any. The topic's
//      own intro sentence is not shown: each visual's side note already
//      carries it (Sukhman, 2026-10-04).
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

export function StageMap({ sections, onJump }) {
  return (
    <section className={s.module} aria-labelledby="flow-map-title">
      <div className={s.eyebrow}>
        <div className={s.eyebrowLeft}>
          <span className={s.muted}>{"// 00"}</span>
          <span>Overview</span>
          <i className={s.square} />
        </div>
        <span className={s.chip}>How it runs</span>
      </div>
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

      {topics.map((t) => (
        <section key={t.number} className={s.imgModule} aria-label={`${t.number} ${t.heading}`}>
          <div className={s.eyebrow}>
            <div className={s.eyebrowLeft}>
              <span className={s.muted}>{`// ${num}`}</span>
              <span>{section.tocLabel}</span>
              <i className={s.square} />
              {t.group && <span className={`${s.muted} ${s.group}`}>{t.group}</span>}
            </div>
            <span className={s.chip}>
              {t.number}&nbsp;&nbsp;{t.heading}
            </span>
          </div>
          {t.images?.map((img) => (
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
      ))}
    </>
  );
}
