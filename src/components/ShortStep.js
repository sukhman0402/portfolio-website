"use client";

import { useEffect, useRef, useState } from "react";
import { PhaseTag } from "./DoubleDiamond";
import Image from "next/image";
import Chevron from "./Chevron";
import s from "./ShortStep.module.css";

// SHORT case-study step (Sukhman, FINAL 2026-10-06). Rules:
// claude/case-study-short-format-rules.md in the Placement Drive project.
// Used by ProjectTopics.js for every section with `short: true`; data shape
// in src > lib > driveWiseShortCaseStudy.js.
//
//   line > 10 > STEP HEADING + intro text > 10 > line
//   line > 30 > opening statement > 30 > line
//   per part: line > 10 > PART HEADING + text > 50 > visual > 10 > line
//   line > 30 > closing statement > 30
//
// The first step has no line of its own: ProjectHeroTop's closing divider
// sits right above it. Visuals are page elements that snap to the 3
// case-study columns (330 / 20 / 330 / 20 / 330 inside 1030).

const pad2 = (n) => String(n).padStart(2, "0");

// Optional small grey note under a visual (MyJio, 2026-10-08).
function Note({ text }) {
  return text ? <p className={`${s.small} ${s.noteGap}`}>{text}</p> : null;
}

function Statement({ statement, style, grad }) {
  if (!statement) return null;
  return (
    <p className={`${s.stmt} ${grad}`} style={style}>
      {statement.text} <em>{statement.accent}</em>
    </p>
  );
}

function Paras({ list }) {
  return list?.map((p, i) => (
    <p key={i} className={s.t}>
      {p}
    </p>
  ));
}

// Per-project accent (2026-10-06, BINA): a step may carry `accent` (e.g.
// "#026D00"); it overrides the default Drive Wise blue for every block of
// that step. Highlights stay the same for every project otherwise.
// MyJio (2026-10-08): `gradient` (e.g. "linear-gradient(90deg,#e30513,#0a2885)")
// paints every accent phrase as gradient text instead of a flat colour.
export function ShortStep({ section, index }) {
  const style = section.accent || section.gradient ? { "--accent": section.accent, "--grad": section.gradient } : undefined;
  const grad = section.gradient ? s.grad : "";
  return (
    <>
      <div className={`${s.blk} ${grad} ${index === 0 ? s.first : ""}`} style={style}>
        {section.phase ? (
          // MyJio (2026-10-09): the Double Diamond phase this step belongs to
          <div className={s.hrow}>
            <h2 className={s.h}>{section.heading}</h2>
            <PhaseTag phases={section.phase} uid={section.id} />
          </div>
        ) : (
          <h2 className={s.h}>{section.heading}</h2>
        )}
        <Paras list={section.intro} />
      </div>
      <Statement statement={section.open} style={style} grad={grad} />
      {section.parts.map((part) => (
        // The walkthrough video ends flush on the line below (Sukhman, 2026-10-06)
        <div key={part.heading} className={`${s.blk} ${grad} ${part.visual?.kind === "walkthrough" ? s.flush : ""}`} style={style}>
          <h3 className={s.h}>{part.heading}</h3>
          <Paras list={part.text} />
          {part.visual && (
            <div className={s.visual}>
              <Visual v={part.visual} />
            </div>
          )}
          {/* MyJio (2026-10-08): one short paragraph 50px below the visual */}
          {part.after?.map((p, i) => (
            <p key={i} className={`${s.t} ${s.after}`}>
              {p}
            </p>
          ))}
        </div>
      ))}
      <Statement statement={section.close} style={style} grad={grad} />
    </>
  );
}

// --------------------------------------------------------------------------
// Visuals: one component per kind. Accent once per visual.
function Visual({ v }) {
  switch (v.kind) {
    case "stats":
      return <Stats v={v} />;
    case "numbers":
      return <Numbers v={v} />;
    case "quotes":
      return <Quotes v={v} />;
    case "checkTable":
      return <CheckTable v={v} />;
    case "lines":
      return <Lines v={v} />;
    case "meters":
      return <Meters v={v} />;
    case "insights":
      return <Insights v={v} />;
    case "personas":
      return <Personas v={v} />;
    case "matrix":
      return <Matrix v={v} />;
    case "flow":
      return <Flow v={v} />;
    case "pairs":
      return <Pairs v={v} />;
    case "walkthrough":
      return <Walkthrough v={v} />;
    case "screens":
      return <Screens v={v} />;
    case "fixes":
      return <Fixes v={v} />;
    case "timeline":
      return <Timeline v={v} />;
    case "kpis":
      return <Kpis v={v} />;
    case "status":
      return <Status v={v} />;
    // MyJio (2026-10-08)
    case "compare":
      return <Compare v={v} />;
    case "hmw":
      return <Hmw v={v} />;
    case "invert":
      return <Invert v={v} />;
    case "sheet":
      return <Sheet v={v} />;
    case "learn":
      return <Learn v={v} />;
    default:
      return null;
  }
}

// Five equal columns, so the gaps between all numbers match (Sukhman, 2026-10-06).
function Stats({ v }) {
  return (
    <div className={s.g5} role="img" aria-label={v.label}>
      {v.items.map((it) => (
        <div key={it.l}>
          <div className={`${s.vlabel} ${it.accent ? s.accentText : ""}`}>{it.tag}</div>
          <div className={s.num}>{it.n}</div>
          <div className={s.lab}>{it.l}</div>
        </div>
      ))}
    </div>
  );
}

function Numbers({ v }) {
  return (
    <>
    <div className={`${s.g3} ${s.stack}`}>
      {v.items.map((it, i) => (
        <div key={i}>
          <div className={`${v.size === "mid" ? s.mid : s.big} ${it.accent ? s.accentText : ""}`}>
            {it.value}
            {it.small && <small>{it.small}</small>}
            {it.then && <span className={s.accentText}> → {it.then}</span>}
          </div>
          <p className={s.cap}>
            {it.cap}
            {it.capAccent && (
              <>
                {" "}
                <b className={s.accentText}>{it.capAccent}</b> {it.capRest}
              </>
            )}
          </p>
        </div>
      ))}
    </div>
    <Note text={v.note} />
    </>
  );
}

function Who({ who, meta }) {
  return (
    <div className={s.who}>
      {who}
      <span>{meta}</span>
    </div>
  );
}

// One row per owner, all in the same format: the quote in column 1, what it
// shows in columns 2 and 3 (Sukhman, 2026-10-06). The counts close the visual.
function Quotes({ v }) {
  return (
    <>
      {v.quotes.map((q) => (
        <div key={q.who} className={`${s.g3} ${s.stack} ${s.qrow}`}>
          <div>
            <Who who={q.who} meta={q.meta} />
            <q className={s.q}>{q.text}</q>
          </div>
          <p className={`${s.cp} ${s.span2} ${s.qnote}`}>
            <b>{q.noteBold}</b> {q.note}
          </p>
        </div>
      ))}
      <div className={`${s.g3} ${s.counts}`}>
        {v.counts.map((c, i) => (
          <div key={i}>
            <div className={s.k}>
              {c.k} <small>{c.small}</small>
            </div>
            <div className={s.v}>{c.v}</div>
          </div>
        ))}
      </div>
      <Note text={v.note} />
    </>
  );
}

function Mark({ c }) {
  if (c === "-") return <span className={s.dash}>–</span>;
  const label = { y: "Yes", h: "Partly", n: "No" }[c];
  return <i className={`${s.m} ${s["m_" + c]}`} role="img" aria-label={label} />;
}

function CheckTable({ v }) {
  return (
    <>
      <table className={s.table}>
        <colgroup>
          <col className={s.toolCol} />
          {v.columns.map((c) => (
            <col key={c} />
          ))}
        </colgroup>
        <thead>
          <tr>
            <th>Tool</th>
            {v.columns.map((c, i) => (
              <th key={c}>
                <span className={s.full}>{c}</span>
                <span className={s.short} aria-hidden="true">
                  {i + 1}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {v.rows.map((r) => (
            <tr key={r.name} className={r.target ? s.target : ""}>
              <td>
                {r.name}
                {r.sub && <span>{r.sub}</span>}
              </td>
              {[...r.cells].map((c, i) => (
                <td key={i}>
                  <Mark c={c} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <ol className={s.key} aria-hidden="true">
        {v.columns.map((c, i) => (
          <li key={c}>
            <b>{i + 1}</b> {c}
          </li>
        ))}
      </ol>
      <div className={s.legend}>
        <span>
          <Mark c="y" />
          Yes
        </span>
        <span>
          <Mark c="h" />
          Partly
        </span>
        <span>
          <Mark c="n" />
          No
        </span>
        <span>– Not stated</span>
      </div>
    </>
  );
}

function Lines({ v }) {
  return (
    <>
      <div className={s.rowlist}>
        {v.rows.map((r) => (
          <div key={r.label} className={s.g3}>
            <div className={s.rlab}>{r.label}</div>
            <div className={s.span2}>
              {r.lines.map((l, i) => (
                <p key={i} className={`${s.line} ${l.accent ? s.accentText : ""}`}>
                  {l.t}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      {v.note && <p className={`${s.small} ${s.noteGap}`}>{v.note}</p>}
    </>
  );
}

function Meters({ v }) {
  return (
    <div className={`${s.g3} ${s.stack}`}>
      {v.items.map((it) => (
        <div key={it.name}>
          <div className={s.mid}>
            {it.value}
            <small> {it.of}</small>
          </div>
          <div className={`${s.ft} ${s.gap12}`}>{it.name}</div>
          <p className={s.small}>{it.sub}</p>
          <div className={`${s.meter} ${it.accent ? s.meterAccent : ""}`}>
            <i style={{ width: `${it.share}%` }} />
          </div>
          <p className={`${s.small} ${s.gap6}`}>
            <b className={it.accent ? s.accentText : s.ink}>{it.share}%</b> {it.shareLabel}
          </p>
        </div>
      ))}
    </div>
  );
}

function Insights({ v }) {
  return (
    <div className={`${s.rowlist} ${s.keyins} ${v.center ? s.keyinsC : ""}`}>
      {v.rows.map((r) => (
        <div key={r.no} className={s.g3}>
          <div>
            <span className={s.rlab}>{r.no}</span>
            <div className={`${s.ft} ${s.gap6} ${!r.value && r.accent ? s.accentText : ""}`}>{r.title}</div>
          </div>
          {/* A finding without a number (BINA) shows what it came from instead. */}
          {r.value ? (
            <div className={`${s.mid} ${s.mid40} ${r.accent ? s.accentText : ""}`}>{r.value}</div>
          ) : (
            <p className={`${s.small} ${s.fromText}`}>{r.from}</p>
          )}
          <p className={`${s.cap} ${s.cap0}`}>{r.cap}</p>
        </div>
      ))}
    </div>
  );
}

// `align` (MyJio, 2026-10-08): the columns share rows (CSS subgrid), so names,
// lines and every hairline sit at the same height across columns.
// `shared` adds a last column for what the people have in common.
function Personas({ v }) {
  const pts = [...v.people.map((p) => p.points.length), v.shared ? v.shared.points.length : 0];
  const style = v.align ? { "--rows": 4 + Math.max(...pts) } : undefined;
  return (
    <div className={`${s.g3} ${s.stack} ${v.align ? s.aligned : ""}`} style={style}>
      {v.people.map((p) => (
        <div key={p.name} className={s.persona}>
          {/* BINA (2026-10-06): optional portrait, labelled in the note */}
          {p.photo && <Image src={p.photo} alt={`${p.name}, AI-generated portrait, not a real person`} width={112} height={112} className={s.pphoto} />}
          <div className={s.pnm}>{p.name}</div>
          <div className={s.pty}>{p.type}</div>
          <p className={s.phl}>{p.line}</p>
          <ul>
            {p.points.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        </div>
      ))}
      {v.shared && (
        <div className={`${s.persona} ${s.pshared}`}>
          <div className={s.ppair} aria-hidden="true">
            {v.people.filter((p) => p.photo).map((p) => (
              <Image key={p.name} src={p.photo} alt="" width={112} height={112} className={s.pphoto} />
            ))}
          </div>
          <div className={`${s.pnm} ${s.accentText}`}>{v.shared.name}</div>
          <div className={s.pty}>{v.shared.type}</div>
          <p className={s.phl}>{v.shared.line}</p>
          <ul>
            {v.shared.points.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        </div>
      )}
      {/* With three people the note takes its own row (BINA, 2026-10-07) */}
      {v.note && (
        <p className={`${s.cp} ${v.people.length > 2 ? s.noteRow : s.selfEnd}`}>
          {v.note.lead} <b>{v.note.bold}</b> {v.note.rest}
        </p>
      )}
    </div>
  );
}

function Matrix({ v }) {
  return (
    <>
      <div className={`${s.g3} ${s.keep3} ${s.mxHead}`}>
        {v.columns.map((c) => (
          <div key={c} className={s.rlab}>
            {c}
          </div>
        ))}
      </div>
      <div className={s.mxRows}>
      {v.rows.map((r) => (
        <div key={r.label} className={`${s.g3} ${s.keep3} ${s.mxrow}`}>
          <div className={`${s.rlab} ${s.mxLabel}`}>{r.label}</div>
          {r.cells.map((cell, i) => (
            <div key={i} className={s.feat}>
              {cell.map((f) =>
                f.startsWith("!") ? (
                  <span key={f} className={`${s.ft} ${s.ftNo}`}>
                    {f.slice(1)}
                  </span>
                ) : (
                  <span key={f} className={s.ft}>
                    {f}
                  </span>
                ),
              )}
            </div>
          ))}
        </div>
      ))}
      </div>
      <div className={`${s.legend} ${s.gap12}`}>
        <span>
          <b className={s.legKey}>Bold</b> {v.legend[0]}
        </span>
        <span>
          <b className={s.legKey}>Grey</b> {v.legend[1]}
        </span>
        <span>{v.legend[2]}</span>
      </div>
    </>
  );
}

// MyJio (2026-10-08): `align` shares rows across columns (subgrid); a step
// may lead with a UI image (`img` { src, width, height, alt }).
function Flow({ v }) {
  const hasImg = v.steps.some((st) => st.img);
  const style = v.align ? { "--rows": 2 + Math.max(...v.steps.map((st) => st.items.length)) + (hasImg ? 1 : 0) } : undefined;
  return (
    <>
    <div className={`${s.g3} ${s.stack} ${v.align ? s.aligned : ""}`} style={style}>
      {v.steps.map((st) => (
        <div key={st.title} className={s.flow}>
          {st.img && <Image src={st.img.src} alt={st.img.alt} width={st.img.width} height={st.img.height} sizes="330px" className={s.featImg} />}
          <span className={`${s.rlab} ${st.accent ? s.accentText : ""}`}>{st.tag}</span>
          <div className={`${s.flowh} ${st.accent ? s.accentText : ""}`}>{st.title}</div>
          <ul>
            {st.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <Note text={v.note} />
    </>
  );
}

function Pairs({ v }) {
  return (
    <div className={s.rowlist}>
      {v.rows.map(([a, b, c]) => (
        <div key={a} className={s.g3}>
          <div className={s.ft}>{a}</div>
          <div className={s.ft}>{b}</div>
          <p className={s.small}>{c}</p>
        </div>
      ))}
    </div>
  );
}

// Walkthrough video (silent, looping) in column 1; "Try the prototype"
// swaps it for the live Figma prototype, loaded only on click. Visitors who
// ask their device for less motion get the poster frame with controls.
function Walkthrough({ v }) {
  const { video, prototype, screens } = v;
  const videoRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [showPrototype, setShowPrototype] = useState(false);

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
    <div className={`${s.g3} ${s.vid}`}>
      <div>
        {/* BINA (2026-10-06): a photo of the built prototype instead of a video */}
        {v.image ? (
          <Image src={v.image.src} alt={v.image.alt} width={v.image.width} height={v.image.height} sizes="330px" className={s.video} />
        ) : showPrototype && prototype ? (
          <iframe src={prototype.embedSrc} title={prototype.title || "Drive Wise prototype (Figma)"} className={s.proto} allowFullScreen />
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
      <div className={`${s.span2} ${s.vside}`}>
        <div className={s.vlist}>
          {screens.map((sc, i) => (
            <div key={sc.name} className={s.vrow}>
              <div className={s.ft}>
                <span className={`${s.rlab} ${s.vnum}`}>{pad2(i + 1)}</span>
                {sc.name}
              </div>
              <p className={`${s.small} ${s.ink}`}>{sc.text}</p>
            </div>
          ))}
        </div>
        {v.links?.map((l, i) => (
          <a key={l.href} className={i === 0 ? s.btn : s.tlink} href={l.href} target="_blank" rel="noopener noreferrer">
            {l.label}
            {i === 0 ? " ↗" : <Chevron className="h-2.5 w-2.5" />}
          </a>
        ))}
        {prototype && (
          <>
            <button type="button" className={s.btn} onClick={() => setShowPrototype((x) => !x)}>
              {showPrototype ? "Back to the walkthrough" : prototype.buttonLabel}
            </button>
            <a className={s.tlink} href={prototype.openHref} target="_blank" rel="noopener noreferrer">
              {prototype.openLabel}
              <Chevron className="h-2.5 w-2.5" />
            </a>
          </>
        )}
        {/* Image credit: bottom of the column, left-aligned with the links above, 10px above the line */}
        {video?.credit && <p className={`${s.small} ${s.credit}`}>{video.credit}</p>}
      </div>
    </div>
  );
}

function Screens({ v }) {
  return (
    <>
    <div className={`${s.g3} ${s.shots}`}>
      {v.screens.map((sc) => (
        <div key={sc.src}>
          <Image
            src={sc.src}
            alt={sc.alt}
            width={sc.width}
            height={sc.height}
            sizes={v.wide ? "330px" : "240px"}
            className={v.wide ? s.wideShot : `${s.phone} ${v.framed ? s.phoneFramed : ""}`}
          />
          {sc.tag && <span className={`${s.rlab} ${s.shotTag} ${sc.accent ? s.accentText : ""}`}>{sc.tag}</span>}
          <div className={`${s.ttl} ${sc.tag ? s.ttlTight : ""}`}>{sc.title}</div>
          <p className={s.dsc}>{sc.text}</p>
        </div>
      ))}
    </div>
    <Note text={v.note} />
    </>
  );
}

function Fixes({ v }) {
  return (
    <div className={`${s.g3} ${s.stack}`}>
      <div>
        <div className={s.big}>
          {v.from} <span className={s.accentText}>→ {v.to}</span>
        </div>
        <p className={s.cap}>{v.cap}</p>
      </div>
      <div className={`${s.span2} ${s.flow}`}>
        <span className={s.rlab}>{v.listLabel}</span>
        <ul>
          {v.items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Timeline({ v }) {
  return (
    <>
      <div className={`${s.g3} ${s.stack}`}>
        {v.riders.map((r) => (
          <div key={r.name}>
            <div className={s.ft}>{r.name}</div>
            <p className={s.small}>{r.use}</p>
            <div className={s.track} role="img" aria-label={`Service on day ${r.day}; fixed reminder on day ${v.max}.`}>
              <div className={s.bar} style={{ width: `${(r.day / v.max) * 100}%` }} />
              <div className={s.fix} />
            </div>
            <div className={s.daynum}>
              Day {r.day} <small>{r.result}</small>
            </div>
          </div>
        ))}
      </div>
      <div className={`${s.legend} ${s.gap12}`}>
        <span>
          <i className={`${s.m} ${s.m_accent}`} />
          {v.legend[0]}
        </span>
        <span>| {v.legend[1]}</span>
      </div>
    </>
  );
}

function Kpis({ v }) {
  return (
    <div className={`${s.rowlist} ${s.kpis}`}>
      <div className={`${s.g3} ${s.kpiHead}`}>
        <div>
          <span className={s.tag}>{v.tag}</span>
        </div>
        <div className={s.rlab}>{v.heads[0]}</div>
        <div className={s.rlab}>{v.heads[1]}</div>
      </div>
      {v.rows.map(([nm, from, to]) => (
        <div key={nm} className={s.g3}>
          <div className={s.kpiName}>{nm}</div>
          <div className={s.kpiFrom}>{from}</div>
          <div className={s.kpiTo}>{to}</div>
        </div>
      ))}
      {v.note && <p className={`${s.small} ${s.kpiNote}`}>{v.note}</p>}
    </div>
  );
}

function Status({ v }) {
  return (
    <div className={`${s.g3} ${s.stack}`}>
      {v.lists.map((l) => (
        <div key={l.label} className={`${s.stand} ${l.muted ? s.standNo : ""}`}>
          <span className={s.rlab}>{l.label}</span>
          <ul>
            {l.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </div>
      ))}
      <p className={`${s.cp} ${s.selfEnd}`}>{v.note}</p>
    </div>
  );
}

// --------------------------------------------------------------------------
// MyJio (2026-10-08) kinds.

// Column header: a logo, a colour dot (`swatch`) or the name alone.
function CmpHead({ c }) {
  return (
    <div className={s.cmpBrand}>
      {c.logo && <Image src={c.logo} alt={`${c.name} logo`} width={64} height={64} className={s.cmpLogo} />}
      {c.swatch && <span className={s.swatch} style={{ background: c.swatch }} aria-hidden="true" />}
      <div>
        <div className={s.ft}>{c.name}</div>
        <div className={s.small}>{c.sub}</div>
      </div>
    </div>
  );
}

// Side-by-side comparison. Default: three columns, each row's label above
// its three verdicts. `labelCol`: four columns, labels in the first.
// A row with `big` shows large numbers (totals); the accent goes on its
// first cell only.
function Compare({ v }) {
  const g = v.labelCol ? s.g4 : `${s.g3} ${s.keep3}`;
  return (
    <>
      <div className={`${g} ${s.cmpHead}`}>
        {v.labelCol && <div />}
        {v.columns.map((c) => (
          <CmpHead key={c.name} c={c} />
        ))}
      </div>
      <div>
        {v.rows.map((r) => (
          <div key={r.label} className={`${g} ${s.cmprow}`}>
            <div className={`${s.rlab} ${v.labelCol ? s.cmpL4 : s.cmpLabel} ${r.accent ? s.accentText : ""}`}>{r.label}</div>
            {r.cells.map((c, i) =>
              r.big ? (
                <div key={i} className={`${s.num} ${s.num0} ${i === 0 && r.accent ? s.accentText : ""}`}>{c}</div>
              ) : (
                <p key={i} className={s.cv}>{c}</p>
              ),
            )}
          </div>
        ))}
      </div>
      <Note text={v.note} />
    </>
  );
}

// Stakeholder needs, each turned into numbered "How might we" questions.
function Hmw({ v }) {
  return (
    <div className={`${s.g3} ${s.stack}`}>
      {v.cols.map((c) => (
        <div key={c.tag}>
          <span className={`${s.rlab} ${c.accent ? s.accentText : ""}`}>{c.tag}</span>
          <p className={`${s.phl} ${s.hmwNeed}`}>{c.need}</p>
          {c.qs.map((q) => (
            <div key={q.no} className={s.hmwQ}>
              <span className={s.rlab}>How might we · {q.no}</span>
              <p className={s.hq}>
                {q.pre}
                <b>{q.key}</b>
                {q.post}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// Three columns with a header row: what failed (grey), what it became, what it led to.
function Invert({ v }) {
  return (
    <>
      <div className={`${s.g3} ${s.keep3} ${s.mxHead}`}>
        {v.head.map((h) => (
          <div key={h} className={s.rlab}>
            {h}
          </div>
        ))}
      </div>
      <div className={`${s.rowlist} ${s.inv}`}>
        {v.rows.map((r) => (
          <div key={r.lead} className={`${s.g3} ${s.keep3}`}>
            <p className={s.invFail}>{r.fails}</p>
            <div className={s.ft}>{r.flip}</div>
            <div className={`${s.ft} ${r.accent ? s.accentText : ""}`}>{r.lead}</div>
          </div>
        ))}
      </div>
      <Note text={v.note} />
    </>
  );
}

// A dense spreadsheet: one column per category under band headers, one
// keyword per cell, row numbers, a totals row. Scrolls sideways inside its
// own box when wider than the column (row numbers stay pinned).
function Sheet({ v }) {
  const rows = Math.max(...v.cols.map((c) => c.words.length));
  return (
    <>
      <div className={s.sheetWrap} tabIndex={0} role="region" aria-label={v.label}>
        <table className={s.sheet}>
          <thead>
            <tr>
              <th className={s.rn} rowSpan={2} />
              {v.bands.map((b) => (
                <th key={b.name} className={s.band} colSpan={b.span}>
                  <b>{b.name}</b>
                  <span>{b.does}</span>
                </th>
              ))}
            </tr>
            <tr>
              {v.cols.map((c) => (
                <th key={c.name} className={s.cat}>
                  <span className={c.accent ? s.accentText : ""}>{c.name}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: rows }).map((_, r) => (
              <tr key={r}>
                <td className={s.rn}>{r + 1}</td>
                {v.cols.map((c) => {
                  const w = c.words[r];
                  if (!w) return <td key={c.name} />;
                  return (
                    <td key={c.name} className={w.new ? s.kwNew : s.kw}>
                      {w.w}
                      {w.hi && <i className={s.hi}>HI</i>}
                      {w.n && <span className={s.cnt}> ({w.n})</span>}
                    </td>
                  );
                })}
              </tr>
            ))}
            <tr className={s.tot}>
              <td className={s.rn}>Σ</td>
              {v.cols.map((c) => (
                <td key={c.name}>{c.words.length} words</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div className={`${s.legend} ${s.sheetKey}`}>
        {v.legend.map(([k, t]) => (
          <span key={k}>
            <b className={s.legKey}>{k}</b>
            {t}
          </span>
        ))}
      </div>
      <Note text={v.note} />
    </>
  );
}

// Learnings: the lesson, what happened, what to do next time.
function Learn({ v }) {
  return (
    <>
      <div className={`${s.g3} ${s.keep3} ${s.mxHead}`}>
        {v.head.map((h) => (
          <div key={h} className={s.rlab}>
            {h}
          </div>
        ))}
      </div>
      <div className={`${s.rowlist} ${s.inv}`}>
        {v.rows.map((r) => (
          <div key={r.no} className={`${s.g3} ${s.keep3}`}>
            <div>
              <span className={`${s.rlab} ${s.block}`}>{r.no}</span>
              <div className={`${s.ft} ${s.gap6} ${r.accent ? s.accentText : ""}`}>{r.title}</div>
            </div>
            <p className={s.t3b}>{r.happened}</p>
            <p className={s.t3c}>{r.next}</p>
          </div>
        ))}
      </div>
    </>
  );
}
