"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import s from "./LongCaseStudy.module.css";

// LONG case study (13 chapters), Sukhman FINAL 2026-10-06. One rule set:
// the GeoTab Insurance Behance case study, with breathing space. Rules live
// in the Placement Drive project, claude/case-study-long-format-rules.md.
// Data: src > lib > driveWiseLongCaseStudy.js. One renderer per module
// type; modules stack with 0 gaps on the #F3F3F3 ground.
//
// Text marks in the data: **bold**. Headlines are [before, highlighted,
// after]; the highlighted part gets the blue caret handles.

const SCREEN = { width: 844, height: 1788 };
const pad2 = (n) => String(n).padStart(2, "0");
const cx = (...c) => c.filter(Boolean).join(" ");

function rich(text) {
  if (!text) return null;
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? <b key={i}>{part.slice(2, -2)}</b> : <Fragment key={i}>{part}</Fragment>
  );
}

// The caret handles stay glued to the first and last words, so a line
// break never leaves a handle alone at the end of the line above.
function Hl({ children }) {
  const words = children.trim().split(" ");
  const start = <i className={s.caret} aria-hidden="true" />;
  const end = <i className={`${s.caret} ${s.caretEnd}`} aria-hidden="true" />;
  if (words.length === 1) {
    return (
      <span className={s.nowrap}>
        {start}
        <span className={s.hl}>{words[0]}</span>
        {end}
      </span>
    );
  }
  const first = words[0];
  const last = words[words.length - 1];
  const middle = words.slice(1, -1).join(" ");
  return (
    <>
      <span className={s.nowrap}>
        {start}
        <span className={cx(s.hl, s.hlStart)}>{first}</span>
      </span>
      <span className={cx(s.hl, s.hlMid)}>{middle ? ` ${middle} ` : " "}</span>
      <span className={s.nowrap}>
        <span className={cx(s.hl, s.hlEnd)}>{last}</span>
        {end}
      </span>
    </>
  );
}

function Head({ parts, quote }) {
  const [a = "", b = "", c = ""] = parts;
  return (
    <>
      {quote && "“"}
      {a}
      {b && <Hl>{b}</Hl>}
      {c}
      {quote && "”"}
    </>
  );
}

function Tag({ children, dark, light, corner }) {
  return <span className={cx(s.tag, dark && s.tagDark, light && s.tagLight, corner && s.tagCorner)}>{children}</span>;
}

function Eyebrow({ e }) {
  if (!e) return null;
  return (
    <div className={s.eb}>
      <div className={s.ebl}>
        <span className={s.ebn}>{`// ${pad2(e.n)}`}</span>
        <span>{e.name}</span>
        <i className={s.sq} aria-hidden="true" />
      </div>
      <div>{e.tag && <Tag>{e.tag}</Tag>}</div>
    </div>
  );
}

function Title({ t, accent, as: As = "h3" }) {
  return (
    <As className={s.tt}>
      {t[0]}
      <span className={accent ? s.ttv : undefined}>{t[1]}</span>
    </As>
  );
}

// Two-column title row: title left, side note (or any node) right.
function TitleRow({ m, right, align }) {
  return (
    <div className={cx(s.g2, align === "end" && s.alignEnd)}>
      <Title t={m.title} />
      {right ?? (m.side && <p className={cx(s.side, s.sideR)}>{rich(m.side)}</p>)}
    </div>
  );
}

function Shot({ src, alt, small }) {
  return <Image src={src} alt={alt} width={SCREEN.width} height={SCREEN.height} className={cx(s.phone, small && s.phoneS)} sizes={small ? "220px" : "260px"} />;
}

// Muted looping video of the working prototype. Plays on its own unless the
// visitor asked for reduced motion; then it waits, with controls.
function AutoVideo({ video, className }) {
  const ref = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      setReducedMotion(query.matches);
      const el = ref.current;
      if (!el) return;
      if (query.matches) el.pause();
      else el.play().catch(() => {});
    };
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);
  return (
    <video
      ref={ref}
      className={className}
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
  );
}

// ---------------------------------------------------------------- modules

function Headline({ m }) {
  return (
    <>
      <Eyebrow e={m.eyebrow} />
      <div className={s.headrow}>
        <h2 className={cx(s.hd, m.small && s.hdS)}>
          <Head parts={m.head} />
        </h2>
        {m.side && <p className={s.side}>{rich(m.side)}</p>}
      </div>

      {m.info && (
        <div className={cx(s.g2, s.alignEnd)} style={{ marginTop: 110 }}>
          <div className={cx(s.g2, s.infoGrid)}>
            {m.info.map(([k, v]) => (
              <div key={k} className={cx(s.capcol, s.capFixed)}>
                <div className={s.capK}>{k}</div>
                <div className={s.capX}>{v}</div>
              </div>
            ))}
          </div>
          {m.video && (
            <div className={s.phoneEnd}>
              <AutoVideo video={m.video} className={s.heroVideo} />
            </div>
          )}
        </div>
      )}

      {m.stats && (
        <div className={s.g4} style={{ marginTop: 120 }}>
          {m.stats.map((x, i) => (
            <div key={i} className={s.step}>
              <Tag dark={x.dark}>{x.tag}</Tag>
              <div className={cx(s.num, s.numM)}>{x.n}</div>
              <p className={s.stepTx} style={{ marginTop: 20 }}>
                {rich(x.text)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

function StepCell({ c, hmw }) {
  return (
    <div className={s.step}>
      <Tag dark={c.dark}>{c.tag}</Tag>
      {c.num && <div className={cx(s.num, c.numSize === "m" && s.numM, c.accent && s.accent)}>{c.num}</div>}
      {c.ghost && (
        <div className={cx(s.ghost, s.stepGhost)} style={hmw ? { fontSize: 56 } : undefined}>
          {c.ghost}
        </div>
      )}
      {c.text && (
        <p className={s.stepTx} style={c.numSize === "m" ? { marginTop: 24 } : c.ghost ? { marginTop: hmw ? 34 : 30 } : undefined}>
          {rich(c.text)}
        </p>
      )}
      {c.text2 && <p className={s.stepTx}>{rich(c.text2)}</p>}
      {c.list &&
        c.list.map((x, i) => (
          <div key={i} className={s.listRow}>
            <span className={s.small}>{pad2(i + 1)}</span>
            <p className={s.cap}>{x}</p>
          </div>
        ))}
    </div>
  );
}

function Steps({ m }) {
  const titleInRow = m.rows.some((r) => r.includes("title"));
  const rowGap = m.hmw ? 110 : 120;
  return (
    <>
      <Eyebrow e={m.eyebrow} />
      {!titleInRow && <Title t={m.title} />}
      {m.rows.map((row, ri) => {
        const mt = ri > 0 ? rowGap : m.eyebrow ? 76 : titleInRow ? 0 : 100;
        return (
          <div key={ri} className={s.g4} style={{ marginTop: mt }}>
            {row.map((c, ci) =>
              c === "title" ? (
                <div key={ci}>
                  <Title t={m.title} />
                  {m.titleCap && (
                    <p className={s.cap} style={{ marginTop: 16, maxWidth: 220 }}>
                      {rich(m.titleCap)}
                    </p>
                  )}
                </div>
              ) : c ? (
                <StepCell key={ci} c={c} hmw={m.hmw} />
              ) : (
                <div key={ci} className={s.emptyCell} />
              )
            )}
          </div>
        );
      })}
      {m.foot && (
        <p className={s.small} style={{ marginTop: 60 }}>
          {rich(m.foot)}
        </p>
      )}
    </>
  );
}

function Person({ p }) {
  return (
    <div className={s.person}>
      {p.img ? (
        // Plain img: a small local SVG placeholder, nothing for next/image to optimise
        // eslint-disable-next-line @next/next/no-img-element
        <img className={s.initials} src={p.img} alt="" aria-hidden="true" width={150} height={180} />
      ) : (
        <div className={s.initials} aria-hidden="true">
          {p.initials}
        </div>
      )}
      <div className={s.personCap}>
        <b>{p.name}</b>
        <br />
        {p.meta}
      </div>
    </div>
  );
}

function Quote({ m }) {
  return (
    <>
      <Eyebrow e={m.eyebrow} />
      <h2 className={cx(s.hd, m.small && s.hdS, s.quoteHd, m.eyebrow && s.mt76)}>
        <Head parts={m.quote} quote />
      </h2>
      <div className={cx(s.g2, s.alignEnd)}>
        <Person p={m.person} />
        {m.counts ? (
          <div className={s.counts}>
            {m.counts.map((x, i) => (
              <div key={i} className={s.step}>
                <div className={s.countNum}>
                  {x.n}
                  <span> {x.of}</span>
                </div>
                <p className={s.stepTx} style={{ marginTop: 14 }}>
                  {rich(x.text)}
                </p>
              </div>
            ))}
          </div>
        ) : (
          m.side && (
            <p className={cx(s.side, s.sideR)} style={{ maxWidth: 320 }}>
              {rich(m.side)}
            </p>
          )
        )}
      </div>
      {m.foot && (
        <p className={s.small} style={{ marginTop: 40 }}>
          {rich(m.foot)}
        </p>
      )}
    </>
  );
}

function DataPair({ m }) {
  const p = m.panel;
  const maxDist = p.dist ? Math.max(...p.dist) : 0;
  return (
    <div className={cx(s.g2, s.flushCols)}>
      <div className={s.leftCol}>
        <Title t={m.title} accent />
        <p className={s.cap} style={{ marginTop: 14, maxWidth: 320 }}>
          {rich(m.cap)}
        </p>
        <div className={s.bars}>
          {m.bars.map((b) => (
            <div key={b.label} className={cx(s.barRow, m.wideLabels && s.barRowWide)}>
              <span>{rich(b.label)}</span>
              <div className={s.track}>
                <i className={b.accent ? s.on : undefined} style={{ width: `${b.pct}%` }} />
              </div>
              <span className={s.barVal}>{b.value}</span>
            </div>
          ))}
        </div>
        <p className={s.small} style={{ marginTop: 22 }}>
          {m.note}
        </p>
      </div>
      <div className={s.panel}>
        <Tag dark corner>
          {p.tag}
        </Tag>
        <div className={s.glass}>
          <div className={s.gt}>{p.title}</div>
          <div className={s.gx}>{p.text}</div>
          <div className={s.gn}>
            {p.num}
            {p.small && <small>{p.small}</small>}
          </div>
          {p.after && <div className={s.gx}>{p.after}</div>}
          {p.dist && (
            <div className={s.dist} aria-label={`Answers 1 to 5: ${p.dist.join(", ")}`}>
              {p.dist.map((d, k) => (
                <div key={k}>
                  <span>{d}</span>
                  <i className={k === p.distHigh ? s.hi : undefined} style={{ height: `${(d / maxDist) * 52}px` }} />
                  <span>{k + 1}</span>
                </div>
              ))}
            </div>
          )}
          {p.foot && (
            <div className={s.gx} style={{ marginTop: p.dist ? 14 : 12 }}>
              {p.foot}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const DOT = { y: "Yes", h: "Partly", n: "No" };
function Dot({ c }) {
  if (c === "-") return <span className={s.dash} aria-label="Not stated">–</span>;
  return <i className={cx(s.dot, s[`dot_${c}`])} aria-label={DOT[c]} />;
}

function DotMatrix({ m }) {
  return (
    <>
      <div className={s.g2}>
        <Title t={m.title} />
        <div className={s.sideR} style={{ maxWidth: 240 }}>
          <Tag>{m.tag}</Tag>
          <p className={s.side} style={{ marginTop: 14 }}>
            {rich(m.side)}
          </p>
        </div>
      </div>
      <table className={s.dotm}>
        <thead>
          <tr>
            <th>Tool</th>
            {m.columns.map((c) => (
              <th key={c}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {m.rows.map(([name, cells, target]) => (
            <tr key={name} className={target ? s.dwRow : undefined}>
              <td>{name}</td>
              {cells.split("").map((c, i) => (
                <td key={i}>
                  <Dot c={c} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className={s.leg}>
        <span>
          <i className={cx(s.dot, s.dot_y)} />
          Yes
        </span>
        <span>
          <i className={cx(s.dot, s.dot_h)} />
          Partly
        </span>
        <span>
          <i className={cx(s.dot, s.dot_n)} />
          No
        </span>
        <span>– Not stated</span>
      </div>
    </>
  );
}

function Findings({ m }) {
  return (
    <>
      <TitleRow m={m} />
      <div className={s.rows}>
        {m.rows.map((r, i) => (
          <div key={i} className={s.findRow}>
            <span className={s.ghost}>{`//${pad2(i + 1)}`}</span>
            <div>
              <p className={s.find}>{rich(r.finding)}</p>
              <p className={s.small} style={{ marginTop: 10 }}>
                {r.sources}
              </p>
            </div>
            <div>
              <Tag dark>For Drive Wise</Tag>
              <p className={cx(s.cap, s.findImp)}>{rich(r.implication)}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function Quad({ m }) {
  return (
    <>
      <TitleRow m={m} />
      <div className={s.quad}>
        <div className={s.qv} aria-hidden="true" />
        <div className={s.qh} aria-hidden="true" />
        {m.quads.map((q, i) => (
          <div key={q.name} className={cx(s.q, s[`q${i}`])}>
            <Tag dark>{q.name}</Tag>
            {q.lines.map(([t, a]) => (
              <p key={t} className={a ? s.accent : undefined}>
                {t}
              </p>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

function Personas({ m }) {
  return (
    <>
      <Eyebrow e={m.eyebrow} />
      <div className={cx(s.g2, s.alignEnd, s.mt76)}>
        <Title t={m.title} />
        <p className={cx(s.side, s.sideR)} style={{ maxWidth: 260 }}>
          {rich(m.side)}
        </p>
      </div>
      <div className={cx(s.g2, s.personaGrid)}>
        {m.people.map((p) => (
          <div key={p.name} className={cx(s.pcard, p.dark && s.pcardDark)}>
            <Tag light={p.dark}>{p.type}</Tag>
            <div className={s.pname}>{p.name}</div>
            <div className={s.pmeta}>{p.meta}</div>
            <p className={s.pquote}>{`“${p.quote}”`}</p>
            <div className={s.psrc}>{p.source}</div>
          </div>
        ))}
      </div>
    </>
  );
}

const LEVEL = ["", "Low", "Medium", "High"];
function Voa({ m }) {
  return (
    <>
      <TitleRow m={m} />
      <div className={s.voa}>
        {m.rows.map(([name, today, dw]) => (
          <div key={name} className={s.voaRow}>
            <span>{name}</span>
            <div className={s.pb} aria-label={`Today ${LEVEL[today]}, Drive Wise target ${LEVEL[dw]}`}>
              <i className={s.hatch} style={{ width: `${(today / 3) * 100}%` }} />
              <i className={s.blueFill} style={{ width: `${(dw / 3) * 100}%` }} />
            </div>
          </div>
        ))}
        <div className={s.scale}>
          <div />
          <div>
            <span>Low</span>
            <span>Medium</span>
            <span>High</span>
          </div>
        </div>
      </div>
      <div className={s.leg}>
        <span>
          <i className={cx(s.legSwatch, s.hatch)} />
          Today
        </span>
        <span>
          <i className={cx(s.legSwatch, s.blueFill)} />
          Drive Wise (target)
        </span>
      </div>
    </>
  );
}

// Importance vs difficulty, redesigned (Sukhman, 2026-10-06: "minimal, but
// easy compartments"). Four compartments split at m.split; each point keeps
// its compartment and its order inside it, spread to leave room for names.
function placePoint(x, y, split) {
  const right = x >= split.x;
  const low = y >= split.y;
  const fx = right ? (x - split.x) / (100 - split.x) : x / split.x;
  const fy = low ? (y - split.y) / (100 - split.y) : y / split.y;
  return { q: (low ? 2 : 0) + (right ? 1 : 0), left: (right ? 50 : 0) + 50 * (0.06 + fx * 0.7), top: (low ? 50 : 0) + 50 * (0.2 + fy * 0.72) };
}

function MapModule({ m }) {
  const pts = m.points.map(([name, x, y, designed]) => ({ name, designed, ...placePoint(x, y, m.split) }));
  return (
    <>
      <TitleRow m={m} />
      <div className={s.axLabTop}>More important ↑</div>
      <div className={s.map}>
        {m.compartments.map((label, q) => {
          const inQ = pts.filter((p) => p.q === q);
          return (
            <div key={label} className={s.cell}>
              <div className={s.cellLab}>{label}</div>
              <div className={s.cellCount}>
                {inQ.filter((p) => p.designed).length} of {inQ.length} designed
              </div>
            </div>
          );
        })}
        {pts.map((p, i) => (
          <div key={p.name} className={cx(s.pt, !p.designed && s.ptNo)} style={{ left: `${p.left}%`, top: `${p.top}%` }}>
            <i aria-hidden="true" />
            <span className={s.ptName}>{p.name}</span>
            <span className={s.ptNum} aria-hidden="true">
              {i + 1}
            </span>
            {!p.designed && <span className="sr-only"> (not designed yet)</span>}
          </div>
        ))}
      </div>
      <div className={s.axRow}>
        <span>Easier to build</span>
        <span>Harder →</span>
      </div>
      {/* Phones: the plot is too narrow for 12 names, so points carry numbers and the names sit here */}
      <ol className={s.mapList}>
        {pts.map((p, i) => (
          <li key={p.name} className={p.designed ? undefined : s.ptNo}>
            <span>{i + 1}</span>
            {p.name}
          </li>
        ))}
      </ol>
    </>
  );
}

function Logic({ m }) {
  return (
    <>
      <TitleRow
        m={m}
        right={
          <div className={s.sideR}>
            <Tag dark>{m.tag}</Tag>
          </div>
        }
      />
      <div className={cx(s.g3, s.flushCols, s.logicCols)}>
        {m.columns.map((c) => (
          <div key={c.tag} className={s.logicCol}>
            <div className={cx(s.small, c.accent && s.accent)}>{c.tag}</div>
            <div className={cx(s.logicH, c.accent && s.accent)}>{c.title}</div>
            {c.items.map((x) => (
              <p key={x} className={s.cap}>
                {x}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className={cx(s.g4, s.strip)}>
        {m.strip.map(([a, b]) => (
          <div key={a}>
            <div className={s.small}>{a}</div>
            <div className={s.stripV}>{b}</div>
          </div>
        ))}
      </div>
    </>
  );
}

function Feature({ m }) {
  const text = (
    <div>
      <Title t={m.title} />
      <div className={cx(s.g3, s.featCaps)}>
        {m.captions.map(([k, x]) => (
          <div key={k} className={s.capcol}>
            <div className={s.capK}>{k}</div>
            <div className={s.capX}>{x}</div>
          </div>
        ))}
      </div>
    </div>
  );
  const phone = (
    <div className={s.phoneWrap}>
      <Shot src={m.screen.src} alt={m.screen.alt} />
    </div>
  );
  return (
    <div className={cx(s.g2, s.alignCenter, s.feature)}>
      {m.flip ? phone : text}
      {m.flip ? text : phone}
    </div>
  );
}

function Tiles({ m }) {
  return (
    <>
      <TitleRow m={m} />
      <div className={cx(s.g3, s.flushCols, s.tiles)}>
        {m.tiles.map((t, i) => (
          <div key={t.tag} className={cx(s.tile, i === 1 && s.tileAlt)}>
            <Tag dark corner>
              {t.tag}
            </Tag>
            <Shot src={t.src} alt={t.alt} small />
          </div>
        ))}
      </div>
    </>
  );
}

// User flow + walkthrough in one module (Sukhman, 2026-10-07). Left: a
// traditional flow chart drawn as SVG from m.nodes / m.edges (terminators,
// screens, decision diamonds, hairline arrows). Right: the walkthrough video
// in its framed accent panel, kept in view while the chart scrolls past.
const FC = { W: 640, rowH: 74, y0: 34, h: 40, dh: 56, x: { l: 88, c: 320, r: 548 }, w: { l: 156, c: 250, r: 172 }, dw: 214 };

function fcBox(n) {
  const cx = FC.x[n.col];
  const cy = FC.y0 + n.row * FC.rowH;
  const dec = n.kind === "decision";
  const w = dec ? FC.dw : FC.w[n.col];
  const h = dec ? FC.dh : FC.h;
  return { cx, cy, x1: cx - w / 2, x2: cx + w / 2, y1: cy - h / 2, y2: cy + h / 2, w, h };
}

function FlowChart({ nodes, edges }) {
  const byId = Object.fromEntries(nodes.map((n) => [n.id, { ...n, b: fcBox(n) }]));
  const H = FC.y0 + Math.max(...nodes.map((n) => n.row)) * FC.rowH + FC.h;
  const paths = edges.map(([from, to, label, route], i) => {
    const a = byId[from].b;
    const b = byId[to].b;
    let d;
    let lx;
    let ly;
    let anchor = "start";
    if (route === "loopLeft") {
      const lane = Math.min(a.x1, b.x1) - 34;
      d = `M${a.x1},${a.cy} H${lane} V${b.cy} H${b.x1 - 2}`;
      lx = lane - 6;
      ly = (a.cy + b.cy) / 2;
      anchor = "end";
    } else if (byId[from].row === byId[to].row) {
      const right = b.cx > a.cx;
      const sx = right ? a.x2 : a.x1;
      const ex = right ? b.x1 - 2 : b.x2 + 2;
      d = `M${sx},${a.cy} H${ex}`;
      lx = (sx + ex) / 2;
      ly = a.cy - 7;
      anchor = "middle";
    } else {
      d = `M${a.cx},${a.y2} V${b.y1 - 2}`;
      lx = a.cx + 7;
      ly = (a.y2 + b.y1) / 2 + 4;
    }
    return (
      <g key={i}>
        <path d={d} className={s.fcLine} markerEnd="url(#fcArrow)" />
        {label && (
          <text x={lx} y={ly} textAnchor={anchor} className={s.fcLabel}>
            {label}
          </text>
        )}
      </g>
    );
  });
  return (
    <svg viewBox={`0 0 ${FC.W} ${H}`} className={s.fcSvg} role="img" aria-label="User flow chart">
      <defs>
        <marker id="fcArrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L8,4 L0,8 z" fill="#7a7a7a" />
        </marker>
      </defs>
      {paths}
      {nodes.map((n) => {
        const b = byId[n.id].b;
        const lines = n.text.split("\n");
        const cls = n.accent ? s.fcAccent : n.kind === "start" || n.kind === "end" ? s.fcTerm : n.kind === "decision" ? s.fcDec : n.kind === "off" ? s.fcOff : s.fcStep;
        const shape =
          n.kind === "decision" ? (
            <polygon points={`${b.cx},${b.y1} ${b.x2},${b.cy} ${b.cx},${b.y2} ${b.x1},${b.cy}`} />
          ) : (
            <rect x={b.x1} y={b.y1} width={b.w} height={b.h} rx={n.kind === "start" || n.kind === "end" ? b.h / 2 : 0} />
          );
        return (
          <g key={n.id} className={cls}>
            {shape}
            <text x={b.cx} y={b.cy - ((lines.length - 1) * 15) / 2 + 4.5} textAnchor="middle">
              {lines.map((t, k) => (
                <tspan key={k} x={b.cx} dy={k ? 15 : 0}>
                  {t}
                </tspan>
              ))}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function UserFlow({ m }) {
  const { video, prototype } = m;
  const [showPrototype, setShowPrototype] = useState(false);
  return (
    <>
      <TitleRow m={m} />
      <div className={cx(s.g2, s.ufGrid)}>
        <div>
          <div className={cx(s.scrollHint, s.fcHint)} aria-hidden="true">
            Scroll sideways →
          </div>
          <div className={s.fcScroll}>
            <FlowChart nodes={m.nodes} edges={m.edges} />
          </div>
          {/* the same journey as text, for screen readers */}
          <ol className="sr-only">
            {m.nodes.map((n) => (
              <li key={n.id}>{n.text.replace("\n", " ")}</li>
            ))}
          </ol>
        </div>
        <div className={s.ufSide}>
          <div className={cx(s.panel, s.wPanel)}>
            <Tag dark corner>
              {showPrototype ? "Prototype" : "Walkthrough video"}
            </Tag>
            <div className={s.mat}>
              {showPrototype && prototype ? (
                <iframe src={prototype.embedSrc} title="Drive Wise prototype (Figma)" className={s.proto} allowFullScreen />
              ) : (
                <AutoVideo video={video} className={s.video} />
              )}
            </div>
          </div>
          {prototype && (
            <div className={s.wActions}>
              <button type="button" className={s.btn} onClick={() => setShowPrototype((x) => !x)}>
                {showPrototype ? "Back to the walkthrough" : prototype.buttonLabel}
              </button>
              <a className={s.tlink} href={prototype.openHref} target="_blank" rel="noopener noreferrer">
                Open in Figma ›
              </a>
            </div>
          )}
          {video.credit && (
            <p className={s.small} style={{ marginTop: 20 }}>
              {video.credit}
            </p>
          )}
        </div>
      </div>
      {m.foot && (
        <p className={s.small} style={{ marginTop: 40 }}>
          {rich(m.foot)}
        </p>
      )}
    </>
  );
}

function System({ m }) {
  return (
    <>
      <TitleRow m={m} />
      <div className={cx(s.g2, s.alignEnd, s.sysGrid)}>
        <div>
          <div className={s.aa} aria-hidden="true">
            Aa
          </div>
          <div className={cx(s.g2, s.typeCaps)}>
            {[m.type1, m.type2].map(([k, x]) => (
              <div key={k} className={s.capcol}>
                <div className={s.capK}>{k}</div>
                <div className={s.capX}>{x}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={s.swatches}>
          {m.swatches.map(([hex, name, use, fg]) => (
            <div key={hex} className={cx(s.swatch, hex === "#FFFFFF" && s.swatchWhite)} style={{ background: hex, color: fg }}>
              <div className={s.swN}>{name}</div>
              <div className={s.swU}>
                {use}
                <br />
                {hex}
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className={cx(s.small, s.footNote)}>{m.foot}</p>
    </>
  );
}

function Fixes({ m }) {
  return (
    <>
      <Eyebrow e={m.eyebrow} />
      <div className={cx(s.g2, s.fixGrid, s.mt76)}>
        <div>
          <div className={cx(s.light, s.bigFix)}>
            {m.from}
            <span className={s.accent}> → {m.to}</span>
          </div>
          <p className={s.cap} style={{ marginTop: 20, maxWidth: 340 }}>
            {rich(m.cap)}
          </p>
        </div>
        <div>
          {m.items.map(([a, b], i) => (
            <div key={i} className={s.fixRow}>
              <span className={s.small}>{pad2(i + 1)}</span>
              <div>
                <div className={s.fixA}>{a}</div>
                <div className={s.fixB}>→ {b}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function Scenario({ m }) {
  return (
    <>
      <TitleRow m={m} />
      <div className={s.scen} aria-hidden="true">
        <div className={s.scenAxis} />
        <div className={s.scenFixed} />
        <div className={cx(s.small, s.scenFixedLab)}>Fixed reminder · day {m.max}</div>
        {m.riders.map(([name, use, day, result], i) => {
          const p = (day / m.max) * 100;
          return (
            <div key={name} className={s.scenRow} style={{ top: 30 + i * 85 }}>
              <div>
                <div className={s.scenName}>{name}</div>
                <div className={s.small}>{use}</div>
              </div>
              <div className={s.scenLine}>
                <i style={{ width: `${p}%` }} />
                <b className={s.scenDot} style={{ left: `calc(${p}% - 6px)` }} />
                <span className={s.scenLab} style={{ left: `calc(${Math.min(p, 70)}% + 14px)` }}>
                  Day {day} <small>{result}</small>
                </span>
              </div>
            </div>
          );
        })}
        <div className={cx(s.small, s.scenDay0)}>Day 0</div>
      </div>
      {/* Read by screen readers at every width; shown in place of the chart on phones */}
      <div className={s.scenList}>
        {m.riders.map(([name, use, day, result]) => (
          <p key={name} className={s.cap} style={{ marginTop: 8 }}>
            <b>
              {name}, {use}: Day {day}
            </b>
            , {result}
          </p>
        ))}
      </div>
    </>
  );
}

function Outcome({ m }) {
  return (
    <>
      <Eyebrow e={m.eyebrow} />
      <h2 className={cx(s.hd, s.mt76)}>
        <Head parts={m.head} />
      </h2>
      <div className={cx(s.g4, s.outGrid)}>
        <div className={s.kpiWrap}>
          <div className={s.small} style={{ marginBottom: 12 }}>
            {m.kpiLabel}
          </div>
          {m.kpis.map(([a, b, c]) => (
            <div key={a} className={s.kpiRow}>
              <span>{a}</span>
              <span className={s.kpiFrom}>{b}</span>
              <span>{c}</span>
            </div>
          ))}
        </div>
        <div className={cx(s.outTile, s.outGrey)}>
          <Tag dark corner>
            {m.grey.tag}
          </Tag>
          <div className={cx(s.light, s.outNum)}>{m.grey.num}</div>
          <p className={s.cap} style={{ marginTop: 12 }}>
            {m.grey.text}
          </p>
        </div>
        <div className={cx(s.outTile, s.outBlue)}>
          <Tag dark corner>
            {m.blue.tag}
          </Tag>
          <div className={cx(s.light, s.outNum)}>{m.blue.num}</div>
          <p className={s.cap} style={{ marginTop: 12 }}>
            {m.blue.text}
          </p>
        </div>
      </div>
    </>
  );
}

function Arcs({ m }) {
  return (
    <>
      <Eyebrow e={m.eyebrow} />
      <div className={s.headrow}>
        <h2 className={cx(s.hd, s.hdS)}>
          <Head parts={m.head} />
        </h2>
        <p className={s.side}>{rich(m.side)}</p>
      </div>
      <div className={s.arcs} aria-hidden="true">
        {m.steps.map(([n, , , x]) => (
          <div key={n} className={s.arc} style={{ width: `${x}%` }} />
        ))}
        <div className={s.arcBase} />
        {m.steps.map(([n, , , x]) => (
          <div key={n} className={s.node} style={{ left: `${x}%` }} />
        ))}
      </div>
      <div className={cx(s.g3, s.arcList)}>
        {m.steps.map(([n, t, d], i) => (
          <div key={n}>
            <Tag dark={i > 0}>{`${n} · ${t}`}</Tag>
            <p>{d}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function Learnings({ m }) {
  return (
    <>
      <Eyebrow e={m.eyebrow} />
      <h2 className={cx(s.hd, s.mt76)}>
        <Head parts={m.head} />
      </h2>
      <p className={s.side} style={{ maxWidth: 360, marginTop: 28 }}>
        {rich(m.side)}
      </p>
      <div className={s.g4} style={{ marginTop: 110 }}>
        {m.groups.map((g) => (
          <div key={g.tag} className={s.step}>
            <Tag dark={!g.accent}>{g.tag}</Tag>
            {g.items.map((x) => (
              <p key={x} className={s.cap} style={{ marginTop: 14 }}>
                {x}
              </p>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

// ---------------------------------------------------------- restored (2026-10-07)
// Signal-to-feature trace, Information architecture, User flow and
// Standards check were approved stage content left out of the first Deep
// Dive build; restored in the Deep Dive style.

// Information architecture as a classic sitemap tree (Sukhman, 2026-10-07:
// "like the traditional UI/UX case studies, like a flow chart", then
// "detailed to the very step"): the app at the top, a bus line to its
// sections, each section's screens hanging from a spine, and a screen's own
// steps listed inside its tile. Tiles are fills (no outlines); connectors are
// hairlines. Phones: the branches stack.
function Sitemap({ m }) {
  const n = m.sections.length;
  return (
    <>
      <TitleRow m={m} />
      <div className={s.iaTree} style={{ "--n": n }}>
        <div className={s.iaRoot}>{m.root}</div>
        <div className={s.iaStem} aria-hidden="true" />
        <ol className={s.iaCols} aria-label={`${m.root}: ${n} sections`}>
          {m.sections.map((sec, i) => (
            <li key={sec.name} className={s.iaCol}>
              <div className={cx(s.iaSec, sec.accent && s.iaSecAccent)}>
                <span className={s.iaNum}>{pad2(i + 1)}</span>
                {sec.name}
              </div>
              <ul className={s.iaKids}>
                {sec.screens.map((x, k) => (
                  <li key={k}>
                    <div className={s.iaScr}>
                      <span className={s.iaCode}>{x.code}</span>
                      {x.name}
                    </div>
                    {x.detail && <div className={s.iaDetail}>{x.detail}</div>}
                    {x.steps && (
                      <ol className={s.iaSteps}>
                        {x.steps.map((st) => (
                          <li key={st}>{st}</li>
                        ))}
                      </ol>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
      {m.foot && (
        <p className={s.small} style={{ marginTop: 40 }}>
          {rich(m.foot)}
        </p>
      )}
    </>
  );
}

// Signal → need → opportunity → feature: one wide table that scrolls
// sideways (Sukhman, 2026-10-07). The statement column stays pinned while
// the steps scroll past it.
function Trace({ m }) {
  const heads = ["Empathy statement", "Signal", "Need", "Opportunity", "Feature idea", "Drive Wise feature"];
  return (
    <>
      <TitleRow m={m} />
      <div className={s.scrollHint} aria-hidden="true">
        Scroll sideways →
      </div>
      <div className={s.trScroll} tabIndex={0} role="region" aria-label="Signal to feature table, scrolls sideways">
        <table className={s.trTable}>
          <thead>
            <tr>
              <th className={s.trPin}>#</th>
              {heads.map((h, i) => (
                <th key={h} className={cx(i === 0 && s.trPin2, i === heads.length - 1 && s.accent)}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {m.rows.map((r, i) => (
              <tr key={i}>
                <td className={cx(s.trPin, s.trN)}>{pad2(i + 1)}</td>
                <td className={s.trPin2}>
                  <div className={s.trStmt}>{r.statement}</div>
                  <div className={s.small}>{r.pos}</div>
                </td>
                <td>{r.signal}</td>
                <td>{r.need}</td>
                <td>{r.opportunity}</td>
                <td>{r.idea}</td>
                <td>
                  {r.features.map(([name, designed]) => (
                    <div key={name} className={s.trFeat}>
                      <i className={cx(s.dot, designed ? s.dot_y : s.dot_n)} aria-hidden="true" />
                      {name}
                      {!designed && <span className="sr-only"> (not designed yet)</span>}
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {m.foot && (
        <p className={s.small} style={{ marginTop: 26 }}>
          {rich(m.foot)}
        </p>
      )}
    </>
  );
}

function Standards({ m }) {
  return (
    <>
      <TitleRow m={m} />
      <div className={cx(s.g2, s.stdGrid)}>
        {m.items.map((x) => (
          <div key={x.name} className={s.step}>
            <div className={s.stdName}>{x.name}</div>
            <p className={s.stepTx} style={{ marginTop: 30, maxWidth: 360 }}>
              <b>Covers:</b> {x.scope}
            </p>
            <p className={s.stepTx} style={{ maxWidth: 360 }}>
              <b>How it was used:</b> {x.use}
            </p>
          </div>
        ))}
      </div>
      {m.foot && (
        <p className={s.small} style={{ marginTop: 60 }}>
          {rich(m.foot)}
        </p>
      )}
    </>
  );
}

const RENDER = {
  headline: Headline,
  steps: Steps,
  quote: Quote,
  dataPair: DataPair,
  dotMatrix: DotMatrix,
  findings: Findings,
  quad: Quad,
  personas: Personas,
  voa: Voa,
  map: MapModule,
  logic: Logic,
  feature: Feature,
  tiles: Tiles,
  userFlow: UserFlow,
  system: System,
  fixes: Fixes,
  scenario: Scenario,
  outcome: Outcome,
  arcs: Arcs,
  learnings: Learnings,
  sitemap: Sitemap,
  standards: Standards,
  trace: Trace,
};

// Modules that open a chapter keep the full 120px bottom; follow-on
// modules use the tighter 90px (as in the approved design).
const FULL_BOTTOM = new Set(["overview", "brief", "problem", "research", "insights", "define", "ideation", "design", "testing", "outcome", "future-scope", "limitations", "learnings"]);

export default function LongCaseStudy({ data }) {
  return (
    <div className={s.root}>
      {data.modules.map((m, i) => {
        const Render = RENDER[m.type];
        if (!Render) return null;
        const tight = m.tight || !FULL_BOTTOM.has(m.id);
        return (
          <section key={i} id={m.id} className={cx(s.mod, tight && s.tight)}>
            <Render m={m} />
          </section>
        );
      })}
    </div>
  );
}
