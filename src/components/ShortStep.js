"use client";

import { useEffect, useRef, useState } from "react";
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

function Statement({ statement }) {
  if (!statement) return null;
  return (
    <p className={s.stmt}>
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

export function ShortStep({ section, index }) {
  return (
    <>
      <div className={`${s.blk} ${index === 0 ? s.first : ""}`}>
        <h2 className={s.h}>{section.heading}</h2>
        <Paras list={section.intro} />
      </div>
      <Statement statement={section.open} />
      {section.parts.map((part) => (
        <div key={part.heading} className={s.blk}>
          <h3 className={s.h}>{part.heading}</h3>
          <Paras list={part.text} />
          {part.visual && (
            <div className={s.visual}>
              <Visual v={part.visual} />
            </div>
          )}
        </div>
      ))}
      <Statement statement={section.close} />
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
    default:
      return null;
  }
}

function Stats({ v }) {
  return (
    <div className={`${s.g3} ${s.stats}`} role="img" aria-label={v.label}>
      {v.columns.map((col, i) => (
        <div key={i}>
          <div className={`${s.vlabel} ${col.accent ? s.accentText : ""}`}>{col.tag}</div>
          <div className={col.items.length > 1 ? s.trio : ""}>
            {col.items.map((it) => (
              <div key={it.l}>
                <div className={s.num}>{it.n}</div>
                <div className={s.lab}>{it.l}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Numbers({ v }) {
  return (
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

function Quotes({ v }) {
  return (
    <>
      <div className={`${s.g3} ${s.stack}`}>
        {v.quotes.map((q) => (
          <div key={q.who}>
            <Who who={q.who} meta={q.meta} />
            <q className={s.q}>{q.text}</q>
          </div>
        ))}
      </div>
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
      {v.counter && (
        <div className={`${s.g3} ${s.stack} ${s.row3}`}>
          <div>
            <Who who={v.counter.who} meta={v.counter.meta} />
            <q className={s.q}>{v.counter.text}</q>
          </div>
          <p className={`${s.cp} ${s.span2}`}>
            <b>{v.counter.noteBold}</b> {v.counter.note}
          </p>
        </div>
      )}
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
    <div className={`${s.rowlist} ${s.keyins}`}>
      {v.rows.map((r) => (
        <div key={r.no} className={s.g3}>
          <div>
            <span className={s.rlab}>{r.no}</span>
            <div className={`${s.ft} ${s.gap6}`}>{r.title}</div>
          </div>
          <div className={`${s.mid} ${s.mid40} ${r.accent ? s.accentText : ""}`}>{r.value}</div>
          <p className={`${s.cap} ${s.cap0}`}>{r.cap}</p>
        </div>
      ))}
    </div>
  );
}

function Personas({ v }) {
  return (
    <div className={`${s.g3} ${s.stack}`}>
      {v.people.map((p) => (
        <div key={p.name} className={s.persona}>
          <div className={s.pnm}>{p.name}</div>
          <div className={s.pty}>{p.type}</div>
          <p className={s.phl}>&ldquo;{p.line}&rdquo;</p>
          <ul>
            {p.points.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        </div>
      ))}
      <p className={`${s.cp} ${s.selfEnd}`}>
        {v.note.lead} <b>{v.note.bold}</b> {v.note.rest}
      </p>
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
          <b className={s.ink}>Bold</b>&nbsp; {v.legend[0]}
        </span>
        <span className={s.muted}>Grey&nbsp; {v.legend[1]}</span>
        <span>{v.legend[2]}</span>
      </div>
    </>
  );
}

function Flow({ v }) {
  return (
    <div className={`${s.g3} ${s.stack}`}>
      {v.steps.map((st) => (
        <div key={st.title} className={s.flow}>
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
        {showPrototype && prototype ? (
          <iframe src={prototype.embedSrc} title="Drive Wise prototype (Figma)" className={s.proto} allowFullScreen />
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
      <div className={s.span2}>
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
        {video.credit && <p className={`${s.small} ${s.credit}`}>{video.credit}</p>}
      </div>
    </div>
  );
}

function Screens({ v }) {
  return (
    <div className={`${s.g3} ${s.shots}`}>
      {v.screens.map((sc) => (
        <div key={sc.src}>
          <Image
            src={sc.src}
            alt={sc.alt}
            width={sc.width}
            height={sc.height}
            sizes="240px"
            className={s.phone}
          />
          <div className={s.ttl}>{sc.title}</div>
          <p className={s.dsc}>{sc.text}</p>
        </div>
      ))}
    </div>
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
