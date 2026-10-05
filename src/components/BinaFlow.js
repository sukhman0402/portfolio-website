import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import s from "./BinaFlow.module.css";
import BinaZoom from "./BinaZoom";

// BINA case study flow, v2 (Sukhman, 2026-10-05). Open, editorial layout
// after the Snabbit Kavach case study: no bordered cards, no capsule tags.
// Rendered by ProjectTopics.js for every section with `flow: "bina"`
// (data: src > lib > binaCaseStudy.js, block types listed at its top).
//
//   - per stage: grey uppercase label, two-tone heading (black + #026D00),
//     a short intro in a narrow column
//   - numbered steps ("1. Title" + text), each followed by its visual
//   - visuals: the team's Figma slides, centred in a full-width #F6F9F7 frame
//   - lists are open text separated by hairlines; tinted tiles only once
//     (Outcome stats); one statement band per stage at most

const mulish = localFont({
  src: "../fonts/mulish-latin-wght-normal.woff2",
  weight: "200 1000",
  display: "swap",
});

const pad = (n) => String(n).padStart(2, "0");
const SIZES = "(min-width: 1440px) 1030px, (min-width: 768px) calc(100vw - 410px), calc(100vw - 40px)";

function Two({ lead, accent }) {
  return (
    <>
      {lead}
      <em>{accent}</em>
    </>
  );
}

function Picture({ b, priority }) {
  const maxw = b.maxw || (b.narrow ? 520 : undefined);
  const pic = (
    <Image
      src={b.src}
      alt={b.alt}
      width={b.width}
      height={b.height}
      sizes={SIZES}
      priority={priority}
      className={s.pic}
      style={maxw ? { maxWidth: `${maxw}px` } : undefined}
    />
  );
  return (
    <figure className={`${s.figure} ${b.framed ? s.framed : s.bare}`}>
      {b.framed ? (
        <BinaZoom src={b.src} alt={b.alt} width={b.width}>
          {pic}
        </BinaZoom>
      ) : (
        pic
      )}
      {b.caption && <figcaption className={s.caption}>{b.caption}</figcaption>}
    </figure>
  );
}

function List({ b }) {
  return (
    <ol className={`${s.list} ${s[`c${b.cols || 1}`]} ${b.big ? s.listBig : ""} ${b.compact ? s.listCompact : ""}`}>
      {b.items.map((it, k) => (
        <li key={it.title} className={s.item}>
          {b.numbered && <span className={s.itemNum}>{pad(k + 1)}</span>}
          <div>
            <p className={s.itemTitle}>{it.title}</p>
            {it.text && <p className={s.itemText}>{it.text}</p>}
            {it.meta && <p className={s.itemMeta}>{it.meta}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}

function Groups({ b }) {
  return (
    <div className={`${s.list} ${s[`c${b.cols || 3}`]}`}>
      {b.items.map((g) => (
        <div key={g.title} className={s.item}>
          <div>
            <p className={s.itemTitle}>{g.title}</p>
            <ul className={s.points}>
              {g.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

function Spec({ b }) {
  return (
    <dl className={s.spec}>
      {b.rows.map(([k, v]) => (
        <div key={k} className={s.specRow}>
          <dt>{k}</dt>
          <dd>{v}</dd>
        </div>
      ))}
    </dl>
  );
}

function People({ b }) {
  return (
    <>
      <div className={s.people}>
        {b.items.map((p) => (
          <div key={p.name} className={s.person}>
            <Image src={p.photo} alt={`${p.name}, AI-generated portrait`} width={160} height={160} className={s.face} />
            <p className={s.personName}>{p.name}</p>
            <p className={s.personRole}>{p.role}</p>
            <p className={s.moment}>{p.moment}</p>
            <dl className={s.personRows}>
              {p.rows.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
      {b.note && <p className={s.note}>{b.note}</p>}
    </>
  );
}

function Btn({ l }) {
  const cls = `${s.btn} ${l.ghost ? s.btnGhost : ""}`;
  if (l.internal) {
    return (
      <Link className={cls} href={l.href}>
        {l.label} →
      </Link>
    );
  }
  return (
    <a className={cls} href={l.href} target="_blank" rel="noopener noreferrer">
      {l.label} ↗
    </a>
  );
}

function Block({ b, priority }) {
  switch (b.type) {
    case "step":
      return (
        <div className={s.step}>
          <h3 className={s.stepTitle}>{`${b.num}. ${b.title}`}</h3>
          {b.text && <p className={s.text}>{b.text}</p>}
        </div>
      );
    case "image":
      return <Picture b={b} priority={priority} />;
    case "list":
      return <List b={b} />;
    case "groups":
      return <Groups b={b} />;
    case "spec":
      return <Spec b={b} />;
    case "people":
      return <People b={b} />;
    case "quote":
      return (
        <blockquote className={s.quote}>
          <Two lead={b.lead} accent={b.accent} />
        </blockquote>
      );
    case "stats":
      return (
        <div className={s.stats}>
          {b.items.map((it) => (
            <div key={it.label} className={s.stat}>
              <p className={s.statValue}>{it.value}</p>
              <p className={s.statLabel}>{it.label}</p>
            </div>
          ))}
        </div>
      );
    case "photos":
      return (
        <figure className={s.photoWrap}>
          <div className={s.photos}>
            {b.images.map((im) => (
              <Image key={im.src} src={im.src} alt={im.alt} width={400} height={500} className={s.photo} sizes="(min-width: 768px) 330px, 50vw" />
            ))}
          </div>
          {b.caption && <figcaption className={s.caption}>{b.caption}</figcaption>}
        </figure>
      );
    case "links":
      return (
        <div className={s.links}>
          {b.items.map((l) => (
            <Btn key={l.href} l={l} />
          ))}
        </div>
      );
    case "goals":
      return (
        <div className={s.goals}>
          {b.items.map((g) => (
            <div key={g.title} className={s.goal}>
              <Image src={g.icon} alt={g.title} width={88} height={88} className={s.goalIcon} />
              <div>
                <p className={s.itemTitle}>{g.title}</p>
                <p className={s.itemMeta}>{g.target}</p>
                <p className={s.itemText}>{g.text}</p>
              </div>
            </div>
          ))}
        </div>
      );
    case "note":
      return <p className={s.note}>{b.text}</p>;
    default:
      return null;
  }
}

function Panel({ panel }) {
  return (
    <div className={s.quad}>
      {panel.cells.map((c, k) => (
        <div key={c.title} className={s.cell}>
          <p className={s.cellLabel}>{`${pad(k + 1)}  ${c.title}`}</p>
          <p className={s.cellLead}>{c.intro}</p>
          <ul className={s.cellPoints}>
            {c.points.map((p) => (
              <li key={p.title}>
                <b>{p.title}</b> {p.text}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function BinaStage({ section, index }) {
  return (
    <div className={`${mulish.className} ${s.root} ${index === 0 ? s.first : ""}`}>
      <p className={s.label}>{`${pad(index + 1)}  ·  ${section.tocLabel}`}</p>
      <h2 className={s.heading}>
        <Two {...section.heading} />
      </h2>
      {section.intro && <p className={s.intro}>{section.intro}</p>}

      {section.blocks?.map((b, k) => (
        <Block key={k} b={b} priority={index === 0 && k < 2} />
      ))}
      {section.panel && <Panel panel={section.panel} />}

      {section.closing && (
        <div className={s.closing}>
          <p className={s.closingTitle}>{section.closing.title}</p>
          <div className={s.links}>
            {section.closing.links.map((l) => (
              <Btn key={l.href} l={l} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
