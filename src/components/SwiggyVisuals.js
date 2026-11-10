"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import s from "./SwiggyVisuals.module.css";

// SWIGGY AGENT DESK, Highlights visuals (kinds starting with "sw"), called by
// ShortStep.js. Design approved in PNG review rounds, 2026-11-10
// (claude/swiggy/highlights-design-decisions.md, Placement Drive project):
//   - light orange palette (O700 text only, O500 marks, O300 / O100 / O50 fills)
//   - orange underlines instead of bars, 2px, 2px below the text
//   - 10px from the last line of text to the line below it
//   - no thin black rules above lists, rows or column cards
//   - every arrow is the site chevron
// Visuals snap to the 3 case-study columns (330 / 20 / 330 / 20 / 330).

// "[[text]]" in copy = orange underline.
function Rich({ text }) {
  if (!text) return null;
  return text.split(/(\[\[[^\]]+\]\])/g).map((part, i) =>
    part.startsWith("[[") ? (
      <span key={i} className={s.ul}>
        {part.slice(2, -2)}
      </span>
    ) : (
      part
    ),
  );
}

const ChevronLeft = () => (
  <svg viewBox="0 0 10 10" className={s.chev} aria-hidden="true">
    <path d="M8 1L2 5L8 9" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);
const ChevronRight = () => (
  <svg viewBox="0 0 10 10" className={s.chev} aria-hidden="true">
    <path d="M2 1L8 5L2 9" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export default function SwiggyVisual({ v }) {
  return <div className={s.sv}>{pick(v)}</div>;
}

function pick(v) {
  switch (v.kind) {
    case "swLists":
      return <Lists v={v} />;
    case "swRules":
      return <Rules v={v} />;
    case "swHero":
      return <Hero v={v} />;
    case "swRows":
      return <Rows v={v} />;
    case "swQuote":
      return <Quote v={v} />;
    case "swCols":
      return <Cols v={v} />;
    case "swQuestions":
      return <Questions v={v} />;
    case "swMatrix":
      return <Matrix v={v} />;
    case "swFixes":
      return <Fixes v={v} />;
    case "swLayout":
      return <Layout v={v} />;
    case "swWire":
      return <Wire v={v} />;
    case "swPairs":
      return <Pairs v={v} />;
    case "swTable":
      return <Table v={v} />;
    case "swFlows":
      return <Flows v={v} />;
    case "swStats":
      return <Stats v={v} />;
    case "swMeters":
      return <Meters v={v} />;
    case "swEffort":
      return <Effort v={v} />;
    default:
      return null;
  }
}

// Two (or three) bulleted lists with a grey hairline under each title.
function Lists({ v }) {
  return (
    <div className={s.g3}>
      {v.lists.map((l) => (
        <div key={l.title}>
          <div className={s.grp}>{l.title}</div>
          <ul className={s.lt}>
            {l.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Stats({ v }) {
  return (
    <div className={s.g3}>
      {v.items.map((it) => (
        <div key={it.cap}>
          <div className={s.n40}>{it.value}</div>
          <div className={s.cap}>{it.cap}</div>
        </div>
      ))}
    </div>
  );
}

const Pill = ({ tag }) => <span className={`${s.pill} ${tag === "Assumed" ? s.pillAs : ""}`}>{tag}</span>;

// Stat row + three-column rule table (Code · Rule · Source).
function Rules({ v }) {
  return (
    <>
      <Stats v={{ items: v.stats }} />
      <div className={s.tbl}>
        <div className={`${s.r3} ${s.hd}`}>
          <div>Code</div>
          <div>Rule</div>
          <div>Source</div>
        </div>
        {v.rows.map((r) => (
          <div key={r.code} className={s.r3}>
            <div className={s.k}>{r.code}</div>
            <div>{r.rule}</div>
            <div className={s.pills}>
              <span className={s.mlab}>Source</span>
              {r.tags.map((t) => (
                <Pill key={t} tag={t} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function Hero({ v }) {
  return (
    <div className={s.g3}>
      {v.items.map((it) => (
        <div key={it.value}>
          <div className={s.num}>{it.value}</div>
          <div className={s.cap}>
            <Rich text={it.cap} />
            {it.src && <span className={s.grey}> · {it.src}</span>}
          </div>
        </div>
      ))}
    </div>
  );
}

// Labelled rows: label in column 1, text across columns 2 and 3.
function Rows({ v }) {
  return (
    <div>
      {v.rows.map((r, i) => {
        const dim = v.dimFrom && i >= v.dimFrom;
        return (
          <div key={r.label + i} className={`${s.row} ${dim ? s.dim : ""}`}>
            <div className={s.k}>
              {r.status && <span className={s.st}>{r.status}</span>}
              {r.label}
            </div>
            <div>
              {r.text}
              {r.note && <span className={s.grey}> · {r.note}</span>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Quote({ v }) {
  return (
    <div className={s.g3}>
      <div>
        <p className={s.qt}>
          <Rich text={v.quote} />
        </p>
        <p className={`${s.cap} ${s.grey}`}>{v.who}</p>
      </div>
      <div className={s.span2}>
        {v.rows.map((r) => (
          <div key={r.label} className={`${s.row} ${s.rowSm}`}>
            <div className={s.k}>{r.label}</div>
            <div>
              {r.text}
              {r.note && <span className={s.grey}> · {r.note}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Cols({ v }) {
  return (
    <>
      <div className={s.g3}>
        {v.cols.map((c) => (
          <div key={c.title}>
            <div className={s.ct}>{c.title}</div>
            <div className={s.cap}>{c.text}</div>
            {c.sub && <div className={`${s.cap} ${s.grey}`}>{c.sub}</div>}
          </div>
        ))}
      </div>
      {v.note && <p className={`${s.cap} ${s.grey} ${s.noteTop}`}>{v.note}</p>}
      {v.never && (
        <p className={s.never}>
          <span className={`${s.ct} ${s.ul}`}>Never</span>
          <span className={s.grey}> · </span>
          {v.never}
        </p>
      )}
    </>
  );
}

function Questions({ v }) {
  return (
    <div className={`${s.g3} ${s.rowGap}`}>
      {v.items.map((q, i) => (
        <div key={q.title}>
          <div className={s.qn}>Q{i + 1}</div>
          <div className={s.ct}>{q.title}</div>
          <div className={s.cap}>{q.text}</div>
        </div>
      ))}
    </div>
  );
}

function Matrix({ v }) {
  return (
    <>
      <div className={`${s.r3} ${s.hd}`}>
        {v.head.map((h) => (
          <div key={h}>{h}</div>
        ))}
      </div>
      {v.groups.map((g) => (
        <div key={g.name}>
          <div className={s.grp}>{g.name}</div>
          <div className={s.r3}>
            {g.cells.map((c, k) => (
              <div key={c}>
                <span className={s.mlab}>{v.head[k]}</span>
                {c}
              </div>
            ))}
          </div>
        </div>
      ))}
      {v.note && <p className={`${s.cap} ${s.grey} ${s.noteTop}`}>{v.note}</p>}
    </>
  );
}

function PairRows({ rows, narrow }) {
  return rows.map(([a, b], i) => (
    <div key={a + i} className={`${s.row} ${narrow ? s.rowHalf : ""}`}>
      <div className={s.strike}>{a}</div>
      <div>
        <span className={s.arr} aria-hidden="true">
          →
        </span>
        {b}
      </div>
    </div>
  ));
}

function Fixes({ v }) {
  return (
    <div className={s.c12}>
      <div>
        <div className={s.num}>{v.value}</div>
        <div className={s.cap}>{v.cap}</div>
      </div>
      <div>
        <PairRows rows={v.rows} narrow />
      </div>
    </div>
  );
}

function Pairs({ v }) {
  return (
    <div>
      <PairRows rows={v.rows} />
    </div>
  );
}

function Table({ v }) {
  return (
    <div className={s.tbl}>
      <div className={`${s.r3} ${s.hd}`}>
        {v.head.map((h) => (
          <div key={h}>{h}</div>
        ))}
      </div>
      {v.rows.map((r) => (
        <div key={r[0]} className={s.r3}>
          <div className={s.k}>{r[0]}</div>
          <div>
            <span className={s.mlab}>{v.head[1]}</span>
            {r[1]}
          </div>
          <div>
            <span className={s.mlab}>{v.head[2]}</span>
            {r[2]}
          </div>
        </div>
      ))}
    </div>
  );
}

// Left-to-right layout diagram with the orange reading arrow.
function Layout({ v }) {
  return (
    <>
      <div className={s.schem}>
        <div />
        {v.boxes.map((b) => (
          <div key={b.title} className={b.on ? s.on : ""}>
            {b.title}
            {b.sub && (
              <>
                <br />
                <span className={s.grey2}>{b.sub}</span>
              </>
            )}
          </div>
        ))}
      </div>
      <div className={s.flowline} aria-hidden="true" />
      <div className={`${s.g3} ${s.capsRow}`}>
        {v.caps.map((c) => (
          <div key={c} className={s.cap}>
            {c}
          </div>
        ))}
      </div>
      {v.note && <p className={`${s.cap} ${s.grey} ${s.noteTop}`}>{v.note}</p>}
    </>
  );
}

// Scales a fixed 1030px drawing down to the column width (phones).
function useFit(base) {
  const ref = useRef(null);
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setScale(Math.min(1, e.contentRect.width / base)));
    ro.observe(el);
    return () => ro.disconnect();
  }, [base]);
  return [ref, scale];
}

// Mid-fidelity wireframe of the screen, each area outlined in orange with a
// numbered badge; the same badge sits before its title below.
function Wire({ v }) {
  const [ref, scale] = useFit(1030);
  const bars = (ws) => ws.map((w, i) => <div key={i} className={s.wb} style={{ width: `${w}%` }} />);
  const sec = (title, ws) => (
    <div className={s.ws}>
      <div className={s.wt}>{title}</div>
      {bars(ws)}
    </div>
  );
  const bub = (side, w, h, i) => <div key={i} className={`${s.wbub} ${side === "r" ? s.wbubR : ""}`} style={{ width: `${w}%`, height: h }} />;
  const outlines = [
    [1, 4, 300],
    [2, 313, 398],
    [3, 719, 305],
  ];
  return (
    <>
      <div ref={ref} className={s.wfWrap} style={{ height: 636 * scale }}>
        <div className={s.wf} style={{ transform: `scale(${scale})` }} role="img" aria-label="Wireframe of the Agent Desk screen in four columns">
          <div className={s.wtop}>
            <div className={s.wb} style={{ width: 90, height: 8, margin: 0 }} />
            <div className={s.wb} style={{ width: 160, height: 14, margin: "0 0 0 auto", borderRadius: 7 }} />
          </div>
          <div className={s.wbody}>
            <div className={s.wcol} style={{ width: 39, padding: "10px 7px" }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className={s.wdot} />
              ))}
            </div>
            <div className={s.wcol} style={{ width: 265 }}>
              {sec("Order details", [70, 55, 62, 40, 80, 74])}
              {sec("Order timeline", [60])}
              {sec("Customer evidence", [45])}
              {sec("Interaction history", [50, 66, 50, 66, 50, 66])}
            </div>
            <div className={`${s.wcol} ${s.wflex}`} style={{ width: 408 }}>
              <div className={s.wtabs}>
                <span className={s.wtabOn}>Customer</span>
                <span>Rider</span>
                <span>Restaurant</span>
              </div>
              {sec("AI Summary", [85, 60])}
              <div className={s.wchat}>
                {[["r", 58, 30], ["l", 50, 22], ["r", 62, 38], ["l", 44, 22], ["r", 56, 30], ["l", 52, 22]].map(([a, b, c], i) => bub(a, b, c, i))}
              </div>
              <div className={s.winput} />
            </div>
            <div className={`${s.wcol} ${s.wflex}`} style={{ width: 315, borderRight: 0 }}>
              {sec("Issue type", [90])}
              <div className={s.ws}>
                <div className={s.wt}>History summary</div>
                <div className={s.whist}>
                  {[0, 1, 2].map((i) => (
                    <div key={i}>
                      <div className={s.wb} style={{ width: "60%", height: 16, marginBottom: 6 }} />
                      <div className={s.wb} style={{ width: "80%", height: 6, marginBottom: 0 }} />
                    </div>
                  ))}
                </div>
              </div>
              {sec("Policy checks", [70])}
              {sec("Events by party", [90, 90, 90, 90, 90])}
              <div style={{ flex: 1 }} />
              <div className={s.ws} style={{ borderBottom: 0 }}>
                <div className={s.wt}>Decision</div>
                <div className={s.wbtns}>
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className={s.wbtn} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {outlines.map(([n, l, w]) => (
            <div key={n} className={s.hl} style={{ left: l, width: w }}>
              <span className={s.bdg}>{n}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={`${s.g3} ${s.capsRow}`}>
        {v.areas.map((a) => (
          <div key={a.n}>
            <div className={s.ct}>
              <span className={`${s.bdg} ${s.bdgInl}`}>{a.n}</span>
              {a.title} <span className={s.lay}>{a.layer}</span>
            </div>
            <div className={s.cap}>{a.text}</div>
          </div>
        ))}
      </div>
    </>
  );
}

function Meters({ v }) {
  return (
    <div className={s.g3}>
      {v.items.map((m) => (
        <div key={m.label}>
          <div className={s.n40}>{m.value}</div>
          <div className={`${s.meter} ${s[m.tone]}`} style={{ width: `${m.width}%` }} />
          <div className={s.cap}>{m.label}</div>
        </div>
      ))}
    </div>
  );
}

function Effort({ v }) {
  return (
    <div>
      {v.rows.map((r) => (
        <div key={r.label} className={s.row}>
          <div className={s.k}>{r.label}</div>
          <div className={s.effort}>
            <div className={s.bar} style={{ width: `${Math.round((r.actions / v.max) * 100)}%` }} />
            <div className={s.effortCap}>
              {r.actions} actions · ~{r.secs} s
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// The working prototype: five curated flows in a horizontal carousel. Each
// card = poster of the flow's recording + its own stages. Swipe, scroll or
// the arrows move between flows; the track shows where you are. Clicking a
// card opens the full-screen player: interface at about 90% of the screen,
// flow name bottom left, five clickable bars in the centre, arrows bottom
// right, close top right. Esc closes, arrow keys switch flows.
function Flows({ v }) {
  const flows = v.flows;
  const trackRef = useRef(null);
  const [cur, setCur] = useState(0);
  const [open, setOpen] = useState(null);

  const goCard = useCallback((i) => {
    const el = trackRef.current;
    if (!el) return;
    const n = Math.max(0, Math.min(flows.length - 1, i));
    el.scrollTo({ left: n * el.clientWidth, behavior: "smooth" });
  }, [flows.length]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => setCur(Math.round(el.scrollLeft / Math.max(1, el.clientWidth)));
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div ref={trackRef} className={s.track} aria-roledescription="carousel" aria-label="Prototype flows">
        {flows.map((f, i) => (
          <div key={f.title} className={s.slide} aria-roledescription="slide" aria-label={`${f.title}, ${i + 1} of ${flows.length}`}>
            <div className={s.card}>
              <button type="button" className={s.vid} onClick={() => setOpen(i)} aria-label={`Watch the ${f.title} flow`}>
                <Image src={f.poster} alt="" width={1440} height={900} sizes="(min-width: 768px) 680px, 100vw" className={s.poster} />
                <span className={s.pbtn} aria-hidden="true" />
              </button>
              <div>
                <div className={s.ftitle}>{f.title}</div>
                <ol className={s.stg}>
                  {f.stages.map((st, k) => (
                    <li key={st}>
                      <span className={s.stgN}>{k + 1}</span>
                      {st}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={s.ctrl}>
        <div className={s.bars}>
          {flows.map((f, i) => (
            <button key={f.title} type="button" className={`${s.barBtn} ${i === cur ? s.barOn : ""}`} onClick={() => goCard(i)} aria-label={f.title} title={f.title} />
          ))}
        </div>
        <div className={s.cnt}>
          {cur + 1} / {flows.length}
        </div>
        <div className={s.arrows}>
          <button type="button" className={`${s.ab} ${cur === 0 ? s.abOff : ""}`} onClick={() => goCard(cur - 1)} disabled={cur === 0} aria-label="Previous flow">
            <ChevronLeft />
          </button>
          <button type="button" className={`${s.ab} ${cur === flows.length - 1 ? s.abOff : ""}`} onClick={() => goCard(cur + 1)} disabled={cur === flows.length - 1} aria-label="Next flow">
            <ChevronRight />
          </button>
        </div>
      </div>
      {open !== null && (
        <Player
          flows={flows}
          index={open}
          onChange={(i) => {
            setOpen(i);
            goCard(i);
          }}
          onClose={() => setOpen(null)}
        />
      )}
    </>
  );
}

// Exported for the Deep Dive (SwiggyDeepDive.js, chapter 8b).
export function Player({ flows, index, onChange, onClose }) {
  const f = flows[index];
  const videoRef = useRef(null);
  const closeRef = useRef(null);
  // progress belongs to one flow; a new flow starts at 0
  const [prog, setProg] = useState({ i: index, p: 0 });
  const progress = prog.i === index ? prog.p : 0;
  const [reduced] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && index < flows.length - 1) onChange(index + 1);
      if (e.key === "ArrowLeft" && index > 0) onChange(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, flows.length, onChange, onClose]);

  useEffect(() => {
    const el = videoRef.current;
    if (el && !reduced) el.play().catch(() => {});
  }, [index, reduced]);

  return createPortal(
    <div className={s.ov} role="dialog" aria-modal="true" aria-label={`${f.title} flow`}>
      <div className={s.frame}>
        <video
          key={f.mp4}
          ref={videoRef}
          className={s.video}
          poster={f.poster}
          muted
          playsInline
          autoPlay={!reduced}
          controls={reduced}
          preload="auto"
          onTimeUpdate={(e) => setProg({ i: index, p: e.currentTarget.currentTime / (e.currentTarget.duration || 1) })}
          onEnded={() => index < flows.length - 1 && onChange(index + 1)}
        >
          <source src={f.mp4} type="video/mp4" />
        </video>
        <div className={s.vbar}>
          <i style={{ width: `${Math.round(progress * 100)}%` }} />
        </div>
      </div>
      <button ref={closeRef} type="button" className={s.x} onClick={onClose} aria-label="Close">
        <svg viewBox="0 0 14 14" aria-hidden="true">
          <path d="M2 2l10 10M12 2 2 12" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </button>
      <div className={s.pctl}>
        <div className={s.pt}>{f.title}</div>
        <div className={s.pbars}>
          {flows.map((g, i) => (
            <button key={g.title} type="button" className={`${s.pbar} ${i === index ? s.pbarOn : ""}`} onClick={() => onChange(i)} aria-label={g.title} title={g.title} />
          ))}
        </div>
        <div className={s.parr}>
          <button type="button" className={`${s.pab} ${index === 0 ? s.pabOff : ""}`} onClick={() => onChange(index - 1)} disabled={index === 0} aria-label="Previous flow">
            <ChevronLeft />
          </button>
          <button type="button" className={`${s.pab} ${index === flows.length - 1 ? s.pabOff : ""}`} onClick={() => onChange(index + 1)} disabled={index === flows.length - 1} aria-label="Next flow">
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
