import { Fragment } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import ImageZoom from "./ImageZoom";
import s from "./BinaDeepDive.module.css";

// BINA DEEP DIVE renderer (13 chapters), approved by Sukhman 2026-10-07.
// Reference: "Aethera" on Behance (255758239). Each project's Deep Dive has
// its own reference (Drive Wise: GeoTab, src > components > LongCaseStudy.js).
// Data and copy: src > lib > binaLongCaseStudy.js. One component per module
// `type`; class names match the approved HTML mocks.
//
// Type: Mulish (text), DM Mono (labels), Inter (only the brand specimen).

const mulish = localFont({ src: "../fonts/mulish-latin-wght-normal.woff2", weight: "200 1000", display: "swap", variable: "--f-mulish" });
const dmMono = localFont({
  src: [
    { path: "../fonts/dm-mono-latin-400-normal.woff2", weight: "400" },
    { path: "../fonts/dm-mono-latin-500-normal.woff2", weight: "500" },
  ],
  display: "swap",
  variable: "--f-mono",
});
const inter = localFont({
  src: [
    { path: "../fonts/inter-latin-400-normal.woff2", weight: "400" },
    { path: "../fonts/inter-latin-600-normal.woff2", weight: "600" },
  ],
  display: "swap",
  variable: "--f-inter",
});

// "mod warm" -> the module classes.
const c = (...names) =>
  names
    .filter(Boolean)
    .join(" ")
    .split(" ")
    .map((n) => s[n] ?? "")
    .join(" ")
    .trim();
const pad2 = (n) => String(n).padStart(2, "0");

function rich(text) {
  if (!text) return null;
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? <b key={i}>{part.slice(2, -2)}</b> : <Fragment key={i}>{part}</Fragment>
  );
}

// Headline parts: [before, green part, after].
function Head({ parts }) {
  const [a = "", b = "", d = ""] = parts;
  return (
    <>
      {a}
      {b && <em>{b}</em>}
      {d}
    </>
  );
}

function Mod({ tone, className, style, id, children }) {
  return (
    <section id={id} className={c("mod", tone, className)} style={style}>
      {children}
    </section>
  );
}

function HeadRow({ head, side, style, dark }) {
  return (
    <div className={c("headrow")} style={style}>
      <h3 className={c("h2")}>
        <Head parts={head} />
      </h3>
      {side && (
        <p className={c("side")} style={dark ? { color: "#c9cbc4" } : undefined}>
          {rich(side)}
        </p>
      )}
    </div>
  );
}

function Down() {
  return (
    <span className={c("down")} aria-hidden="true">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M6 1v10M2 7l4 4 4-4" stroke="#111" strokeWidth="1.2" />
      </svg>
    </span>
  );
}

function Tick() {
  return (
    <span className={c("tick")} aria-hidden="true">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2.5 6.2l2.4 2.3 4.6-5" stroke="#fff" strokeWidth="1.5" />
      </svg>
    </span>
  );
}

function Btn({ href, label, ghost }) {
  return (
    <a className={c("btn", ghost && "ghostb")} href={href} target="_blank" rel="noopener noreferrer">
      {label} ↗
    </a>
  );
}

function Status({ kind, children }) {
  return <span className={c("st2", kind)}>{children}</span>;
}

// The team's cover-slide bin, as line art (Overview, Problem, Define).
const BIN = (
  <>
    <path d="M632 120h236c10 0 15 6 16 14l14 116H602l14-116c1-8 6-14 16-14z" />
    <path d="M636 122a114 100 0 0 0 228 0" />
    <path d="M590 250h320v24H590z" />
    <path d="M596 274l30 266c1 12 8 20 20 20h208c12 0 19-8 20-20l30-266" />
  </>
);

const AUDIT_ICONS = {
  mute: (
    <>
      <path d="M3 8h3l4-3v10l-4-3H3z" />
      <path d="M14 7l4 6M18 7l-4 6" />
    </>
  ),
  clock: (
    <>
      <circle cx="10" cy="10" r="7" />
      <path d="M10 6v4l3 2" />
    </>
  ),
  lid: (
    <>
      <path d="M4 8h12l-1 9H5z" />
      <path d="M3 6.5l13.5-3" />
    </>
  ),
  pin: (
    <>
      <path d="M10 18s5-5.2 5-9a5 5 0 0 0-10 0c0 3.8 5 9 5 9z" />
      <circle cx="10" cy="9" r="1.8" />
    </>
  ),
  full: (
    <>
      <path d="M4 8h12l-1 9H5z" />
      <path d="M6 8c0-2 1.5-3 3-3s2 1 4 0 3 1 3 3" />
    </>
  ),
};

const EYES = {
  rest: (
    <>
      <rect x="52" y="22" width="34" height="26" rx="6" />
      <rect x="114" y="22" width="34" height="26" rx="6" />
    </>
  ),
  open: (
    <>
      <rect x="50" y="17" width="38" height="36" rx="7" />
      <rect x="112" y="17" width="38" height="36" rx="7" />
    </>
  ),
  happy: (
    <>
      <path d="M50 46a19 19 0 0 1 38 0z" />
      <path d="M112 46a19 19 0 0 1 38 0z" />
    </>
  ),
  look: (
    <>
      <rect x="36" y="24" width="34" height="26" rx="6" />
      <rect x="98" y="24" width="34" height="26" rx="6" />
    </>
  ),
  angry: (
    <>
      <path d="M50 24 L88 32 L88 50 L50 50 Z" />
      <path d="M150 24 L112 32 L112 50 L150 50 Z" />
    </>
  ),
};

/* ------------------------------------------------------------- modules */

function Opener({ m }) {
  return (
    <Mod id={m.id}>
      <div className={c("op")}>
        <div className={c("num")} aria-hidden="true">
          {m.num}
        </div>
        <h2 className={c("mono")}>
          <span className="sr-only">{`${m.num} `}</span>
          {m.label[0]}
          <br />
          {m.label[1]}
        </h2>
      </div>
      <div className={c("lead")}>
        <Down />
        <p>{m.lead}</p>
      </div>
      {m.info && (
        <div className={c("info")}>
          {m.info.map(([k, v]) => (
            <div key={k}>
              <p className={c("mono")}>{k}</p>
              <p>{v}</p>
            </div>
          ))}
        </div>
      )}
    </Mod>
  );
}

function HeroDark({ m }) {
  return (
    <Mod tone="dark">
      <svg className={c("gridl")} viewBox="0 0 1380 640" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true">
        <g stroke="rgba(63,174,90,.22)" strokeWidth="1">
          <path d="M0 40H1380M0 202.5H1380M0 232.5H1380M0 302.5H1380M0 590H1380M800 0V640M852.5 0V640M1147.5 0V640M1200 0V640" />
        </g>
        <g stroke="rgba(63,174,90,.6)" strokeWidth="1.2" transform="translate(62.5 -110) scale(1.25)">
          {BIN}
        </g>
      </svg>
      <div className={c("copy")}>
        <p className={c("mono")}>● {m.eyebrow}</p>
        <h3>
          <Head parts={m.head} />
        </h3>
        <p className={c("sub")}>{m.sub}</p>
      </div>
      <p className={c("mono cap2")}>{m.caption}</p>
    </Mod>
  );
}

function Goals({ m }) {
  return (
    <Mod style={{ padding: 0 }}>
      <div className={c("goals")}>
        <div className={c("img")}>
          <Image src={m.img.src} alt={m.img.alt} width={m.img.width} height={m.img.height} sizes="(min-width: 768px) 690px, 100vw" />
        </div>
        <div className={c("gcard")}>
          <span className={c("gicon")} aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#fff" strokeWidth="1.3">
              <circle cx="7" cy="7" r="5.5" />
              <circle cx="7" cy="7" r="2" />
            </svg>
          </span>
          <h3 className={c("h5")}>{m.title}</h3>
          <ul>
            {m.items.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p className={c("mono")}>{m.note}</p>
        </div>
      </div>
    </Mod>
  );
}

function Stagger({ m }) {
  return (
    <Mod>
      <p className={c("mono")}>● {m.eyebrow}</p>
      <div className={c("stagger")}>
        {m.steps.map((st, i) => (
          <div key={st.title} className={c("st", `stp${i}`, st.on && "on")}>
            <div className={c("ghost")}>{pad2(i + 1)}</div>
            <h4>{st.title}</h4>
            <p>{rich(st.text)}</p>
          </div>
        ))}
      </div>
      <p className={c("mono")}>{m.note}</p>
    </Mod>
  );
}

function Problem({ m }) {
  return (
    <Mod style={{ paddingTop: 0 }}>
      <div className={c("pp")}>
        <div className={c("pcard")}>
          <span className={c("chip")}>Problem</span>
          <p className={c("big2")}>{m.problem}</p>
        </div>
        <div className={c("ptile")}>
          <svg className={c("gridl")} viewBox="0 0 1380 640" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true">
            <g stroke="rgba(63,174,90,.22)" strokeWidth="1">
              <path d="M0 120H1380M0 250H1380M0 330H1380M0 560H1380M550 0V640M930 0V640M970 0V640" />
            </g>
            <g stroke="rgba(63,174,90,.55)" strokeWidth="1.4">{BIN}</g>
          </svg>
          <p>
            {m.tile.map((t, i) => (
              <Fragment key={t}>
                {i > 0 && <br />}
                {t}
              </Fragment>
            ))}
          </p>
          <p className={c("mono")}>{m.tileNote}</p>
        </div>
      </div>
      <div className={c("sol")}>
        <div className={c("lead2")}>
          <span className={c("chip g")}>{m.approach.label}</span>
          <p className={c("mono")} style={{ color: "var(--ink)" }}>
            {m.approach.note}
          </p>
        </div>
        {m.approach.cols.map((col, i) => (
          <div key={col.title} className={c("scol", `off${i}`)}>
            <h4 className={c("h6")}>{col.title}</h4>
            <p>{col.text}</p>
          </div>
        ))}
      </div>
    </Mod>
  );
}

function Process({ m }) {
  const total = m.phases.reduce((n, p) => n + p.days, 0);
  const cols = { "--cols": m.phases.map((p) => `${p.days}fr`).join(" ") };
  return (
    <Mod>
      <p className={c("mono")} style={{ marginBottom: 34 }}>
        ● {m.eyebrow}
      </p>
      <div className={c("span")}>
        <div className={c("mono")} style={{ color: "var(--ink)" }}>
          {m.spans[0]}
        </div>
        <div className={c("mono")} style={{ color: "var(--ink)" }}>
          {m.spans[1]}
        </div>
      </div>
      <div className={c("durs")} style={cols} aria-hidden="true">
        {m.phases.map((p) => (
          <div key={p.name}>[ {p.days} days ]</div>
        ))}
      </div>
      <div className={c("phases")} style={cols}>
        {m.phases.map((p) => (
          <div key={p.name} className={c("phase", p.on && "on")}>
            <h4 data-d={`${p.days} days`}>{p.name}</h4>
            <ul>
              {p.items.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={c("ruler")} style={cols} aria-hidden="true" />
      <div className={c("ticks")} aria-hidden="true">
        {Array.from({ length: total + 1 }, (_, i) => (
          <span key={i}>{i}</span>
        ))}
      </div>
      <p className={c("pnote")}>{rich(m.note)}</p>
    </Mod>
  );
}

function Audit({ m }) {
  return (
    <Mod tone={m.tone}>
      <div className={c("panel")}>
        <div className={c("ctx-head")}>
          <h3 className={c("stmt")}>
            <Head parts={m.statement} />
          </h3>
          {m.side && <p className={c("side")}>{rich(m.side)}</p>}
        </div>
        <p className={c("mono")} style={{ marginTop: 64 }}>
          {m.label}
        </p>
        <div className={c("grid5")}>
          {m.cards.map((cd) => (
            <div key={cd.title} className={c("card")}>
              <svg viewBox="0 0 20 20" fill="none" stroke="#111" strokeWidth="1.3" aria-hidden="true">
                {AUDIT_ICONS[cd.icon]}
              </svg>
              <h4 className={c("h5")}>{cd.title}</h4>
              <p>{cd.text}</p>
            </div>
          ))}
        </div>
        <div className={c("day")}>
          <p className={c("mono")}>{m.dayLabel}</p>
          <div className={c("dayrow")}>
            {m.day.map(([t, d]) => (
              <div key={t}>
                <span>{t}</span>
                <small>{d}</small>
              </div>
            ))}
          </div>
          <div className={c("daybar")} style={{ marginTop: 16 }} aria-hidden="true" />
          <div className={c("daykey")}>
            <span className={c("mono")}>{m.key[0]}</span>
            <span className={c("mono")} style={{ color: "var(--ink)" }}>
              {m.key[1]}
            </span>
            <span className={c("mono")}>{m.key[2]}</span>
          </div>
        </div>
        <p className={c("mono foot")}>{m.foot}</p>
      </div>
    </Mod>
  );
}

function Context({ m }) {
  return (
    <Mod tone={m.tone}>
      <div className={c("ctx-head")}>
        <h3 className={c("stmt")} style={{ fontWeight: 300 }}>
          {m.statement}
        </h3>
        <p className={c("side")}>{rich(m.side)}</p>
      </div>
      <div className={c("ctx")}>
        {m.cols.map((col, i) => (
          <div key={col.title} className={c("col")}>
            <div className={c("ghost")}>{pad2(i + 1)}</div>
            <h4 className={c("h5")}>{col.title}</h4>
            {col.points.map((p) => (
              <div key={p.text} className={c("pt")}>
                <span className={c("mono", p.study && "srcStudy")}>{p.src}</span>
                {p.text}
              </div>
            ))}
          </div>
        ))}
      </div>
      <p className={c("legend")}>
        {m.legend.map(([b, t]) => (
          <span key={t}>
            {b && <b>{b}</b>} {t}
          </span>
        ))}
      </p>
    </Mod>
  );
}

function Literature({ m }) {
  return (
    <Mod tone={m.tone}>
      {m.head ? <HeadRow head={m.head} side={m.side} /> : <p className={c("mono")}>● {m.eyebrow}</p>}
      <div className={c("lit")}>
        {m.cards.map((cd, i) => (
          <div key={cd.q} className={c("dc", `dc${i}`)}>
            <h4 className={c("q")}>
              <i>{pad2(i + 1)}</i>
              {cd.q}
            </h4>
            <div className={c("big")}>
              {cd.big} {cd.small && <small>{cd.small}</small>}
            </div>
            <p className={c("cap")}>{cd.cap}</p>
            {cd.bars && (
              <div className={c("bars")}>
                {cd.bars.map((b) => (
                  <div key={b.label} className={c("bar", b.on && "on")}>
                    <span>{b.label}</span>
                    <i style={{ width: `${b.w}%` }} />
                    <span>{b.value}</span>
                  </div>
                ))}
              </div>
            )}
            <p className={c("mono src")}>{cd.src}</p>
          </div>
        ))}
        <div className={c("close")}>
          <p>
            <Head parts={m.close.text} />
          </p>
          <p className={c("mono")}>{m.close.note}</p>
        </div>
      </div>
    </Mod>
  );
}

function Blocks({ m }) {
  return (
    <Mod tone={m.tone}>
      <HeadRow head={m.head} side={m.side} />
      <div className={c("g3")} style={{ marginTop: 50 }}>
        {m.items.map((b) => (
          <div key={b.label} className={c("blk", b.tint && "tint")}>
            <h4 className={c("mono")} style={b.tint ? { color: "var(--accent)" } : undefined}>
              {b.label}
            </h4>
            <ul>
              {b.list.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Mod>
  );
}

function Affinity({ m }) {
  return (
    <Mod tone={m.tone}>
      <HeadRow head={m.head} side={m.side} />
      <div className={c("g4")} style={{ marginTop: 50, gap: 24 }}>
        {m.clusters.map((cl) => (
          <div key={cl.k}>
            <h4 className={c("clh")}>
              <span>{cl.k}</span>
              {cl.title}
            </h4>
            {cl.notes.map(([t, src]) => (
              <div key={t} className={c("sticky")}>
                {t}
                <span className={c("mono")}>{src}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Mod>
  );
}

function Lanes({ m }) {
  return (
    <Mod tone={m.tone}>
      <HeadRow head={m.head} side={m.side} />
      <div className={c("lanes")} style={m.panel ? { background: "#fff", borderRadius: 16, padding: "10px 20px 6px" } : undefined}>
        <div className={c("lh")} style={{ borderTop: 0 }} />
        {m.cols.map((h) => (
          <div key={h} className={c("colh")}>
            {h}
          </div>
        ))}
        {m.rows.map((r, i) =>
          r.vis ? (
            <div key={i} className={c("vis")}>
              {r.vis}
            </div>
          ) : (
            <Fragment key={i}>
              <div className={c("lh", r.on && "on")} style={r.on ? { color: "var(--accent)" } : undefined}>
                {r.label}
              </div>
              {r.cells.map((t, k) => (
                <div key={k} className={c(r.on && "on")}>
                  {t}
                </div>
              ))}
            </Fragment>
          )
        )}
      </div>
    </Mod>
  );
}

function Insights({ m }) {
  return (
    <Mod tone={m.tone}>
      <HeadRow head={m.head} side={m.side} />
      <div className={c("ins3")}>
        {m.cards.map((cd, i) => (
          <div key={cd.ins} className={c("ins", cd.on && "on")} style={{ background: "var(--card)" }}>
            <div className={c("ghost")}>{pad2(i + 1)}</div>
            <span className={c("mono")}>Observation</span>
            <p>{cd.obs}</p>
            <span className={c("mono")}>Insight</span>
            <p className={c("b")}>{cd.ins}</p>
          </div>
        ))}
      </div>
    </Mod>
  );
}

function Personas({ m }) {
  return (
    <Mod tone={m.tone}>
      <HeadRow head={m.head} side={m.side} />
      <div className={c("g3")} style={{ marginTop: 50 }}>
        {m.people.map((p) => (
          <div key={p.name} className={c("per")}>
            <Image src={p.img.src} alt={p.img.alt} width={p.img.width} height={p.img.height} sizes="96px" />
            <h4>{p.name}</h4>
            <p className={c("mono")}>{p.role}</p>
            <p className={c("stmt2")}>{p.stmt}</p>
            <dl>
              {p.rows.map(([k, v, w]) => (
                <Fragment key={k}>
                  <dt>{k}</dt>
                  <dd className={c(w && "with")}>{v}</dd>
                </Fragment>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </Mod>
  );
}

function Criteria({ m }) {
  return (
    <Mod tone={m.tone}>
      <HeadRow head={m.head} side={m.side} />
      <div className={c("g4")} style={{ marginTop: 50 }}>
        {m.items.map((it, i) => (
          <div
            key={it.title}
            className={c("crit")}
            style={it.on ? { background: "linear-gradient(180deg, rgba(63,174,90,.22), rgba(63,174,90,.05))" } : undefined}
          >
            <div className={c("ghost")}>{pad2(i + 1)}</div>
            <h4 className={c("h5")} style={it.on ? { color: "var(--accent)" } : undefined}>
              {it.title}
            </h4>
            <p>{it.text}</p>
          </div>
        ))}
      </div>
    </Mod>
  );
}

function GradStatement({ m }) {
  return (
    <Mod tone={m.tone}>
      {m.head && <HeadRow head={m.head} side={m.side} />}
      <p className={c("mono")} style={m.head ? { marginTop: 50 } : undefined}>
        ● {m.eyebrow}
      </p>
      <p className={c("gradw")} style={{ marginTop: 28 }}>
        {m.word}
      </p>
      <div className={c("tags")}>
        {m.tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <h3 className={c("h2")} style={{ marginTop: 60, maxWidth: 1000 }}>
        <Head parts={m.statement} />
      </h3>
      {!m.head && (
        <p className={c("side")} style={{ marginTop: 22, maxWidth: 520 }}>
          {rich(m.side)}
        </p>
      )}
    </Mod>
  );
}

function Opportunity({ m }) {
  return (
    <Mod tone={m.tone}>
      <div className={c("headrow opp")} style={{ alignItems: "center" }}>
        <div>
          <p className={c("mono")}>● {m.eyebrow}</p>
          <h3 className={c("h2")} style={{ marginTop: 24 }}>
            <Head parts={m.head} />
          </h3>
          <p className={c("side")} style={{ marginTop: 22, maxWidth: 460 }}>
            {rich(m.side)}
          </p>
        </div>
        <svg viewBox="560 100 380 480" style={{ width: "100%", height: "auto" }} fill="none" aria-hidden="true">
          <g stroke="#cfd1cb" strokeWidth="1">
            <path d="M560 120H940M560 250H940M560 274H940M560 560H940M602 100V580M898 100V580" />
          </g>
          <g stroke="#3fae5a" strokeWidth="1.6">
            {BIN}
          </g>
        </svg>
      </div>
    </Mod>
  );
}

function Drops({ m }) {
  return (
    <Mod tone={m.tone}>
      <HeadRow head={m.head} side={m.side} />
      <div className={c("g4")} style={{ marginTop: 50 }}>
        {m.items.map((d) => (
          <div key={d.title} className={c("drop", d.chosen && "chosen")} style={d.chosen ? undefined : { background: "#fff" }}>
            <span className={c("mono")}>{d.label}</span>
            <h4 className={c("h5")}>{d.title}</h4>
            <p>{d.text}</p>
          </div>
        ))}
      </div>
    </Mod>
  );
}

function PTab({ m }) {
  return (
    <Mod tone={m.tone}>
      <HeadRow head={m.head} side={m.side} />
      <div className={c("ptab")}>
        {m.items.map((it) => (
          <div key={it.title} className={c(it.on && "on")}>
            <h4 className={c("h6")}>{it.title}</h4>
            <p>{it.text}</p>
          </div>
        ))}
      </div>
    </Mod>
  );
}

function Rules({ m }) {
  return (
    <Mod tone={m.tone}>
      <HeadRow head={m.head} side={m.side} />
      <div className={c("rules")}>
        {m.items.map((r, i) => (
          <div key={r.title} className={c("rule", r.on && "on")}>
            <div className={c("ghost")}>{pad2(i + 1)}</div>
            <h4 className={c("h5")}>{r.title}</h4>
            <p>{r.text}</p>
          </div>
        ))}
      </div>
    </Mod>
  );
}

function Layers({ m }) {
  return (
    <Mod tone={m.tone}>
      <HeadRow head={m.head} side={m.side} />
      <ol className={c("layers")}>
        {m.items.map((l, i) => (
          <li key={l.name}>
            <div className={c("layer", l.on && "on")}>
              <div className={c("pill")}>{l.name}</div>
              <div className={c("conn")} aria-hidden="true" />
              <div className={c("desc")}>{l.desc}</div>
            </div>
            {i < m.items.length - 1 && <div className={c("vconn")} aria-hidden="true" />}
          </li>
        ))}
      </ol>
    </Mod>
  );
}

function Scenarios({ m }) {
  return (
    <Mod tone={m.tone}>
      <HeadRow head={m.head} side={m.side} />
      <div className={c("scen")}>
        {m.items.map((sc) => (
          <div key={sc.title}>
            <p className={c("mono")}>{sc.label}</p>
            <h4 className={c("gt", sc.dark && "gtDark")}>{sc.title}</h4>
            <ol className={c("chain")}>
              {sc.steps.map((st) => (
                <li key={st}>
                  <div className={c("pill")}>{st}</div>
                  <div className={c("vconn")} aria-hidden="true" />
                </li>
              ))}
              <li>
                <div className={c("pill", sc.dark ? "endk" : "end")}>{sc.end}</div>
              </li>
            </ol>
          </div>
        ))}
      </div>
      <p className={c("mono")} style={{ marginTop: 40 }}>
        {m.note}
      </p>
    </Mod>
  );
}

function Arch({ m }) {
  return (
    <Mod tone={m.tone}>
      <HeadRow head={m.head} side={m.side} />
      <div className={c("arch")}>
        <svg viewBox="0 0 1290 560" preserveAspectRatio="none" aria-hidden="true">
          <g stroke="#3fae5a" strokeWidth="1.2" fill="none">
            <path d="M260 90 L495 250M260 470 L495 310M1030 90 L795 250M1030 280 L795 280M1030 470 L795 310" />
          </g>
        </svg>
        {m.sats.slice(0, 2).map((st) => (
          <Sat key={st.title} st={st} />
        ))}
        <div className={c("core")}>
          <span className={c("mono")} style={{ color: "var(--accent)" }}>
            {m.core.label}
          </span>
          <h4>{m.core.title}</h4>
          <p>{m.core.text}</p>
        </div>
        {m.sats.slice(2).map((st) => (
          <Sat key={st.title} st={st} />
        ))}
      </div>
    </Mod>
  );
}

function Sat({ st }) {
  return (
    <div className={c("sat", `sat-${st.pos}`)}>
      <span className={c("mono")}>{st.label}</span>
      <h5 className={c("h6")}>{st.title}</h5>
      <p>{st.text}</p>
    </div>
  );
}

function Node({ n, color }) {
  return (
    <div className={c("node")}>
      <span className={c("pill")} style={color ? { borderColor: "var(--accent)", color: "var(--accent)" } : undefined}>
        {n.node}
      </span>
      {n.at.map((a) => (
        <span key={a} className={c("at")}>
          {a}
        </span>
      ))}
    </div>
  );
}

function IA({ m }) {
  return (
    <Mod tone={m.tone}>
      <HeadRow head={m.head} side={m.side} />
      <div className={c("ia")}>
        <div>
          {m.spine.map((n) =>
            n.edge ? (
              <div key={n.edge} className={c("spine")}>
                <span className={c("mono")}>{n.edge}</span>
              </div>
            ) : (
              <Node key={n.node} n={n} />
            )
          )}
        </div>
        <div className={c("branch")}>
          <h4 className={c("h6")} style={{ color: "var(--accent)" }}>
            {m.no.label}
          </h4>
          <div className={c("spine")}>
            <Node n={m.no} color />
          </div>
          <h4 className={c("h6")} style={{ marginTop: 22 }}>
            {m.yes.label}
          </h4>
          <div className={c("spine dash")}>
            <Node n={m.yes.ask} />
            <p className={c("mono")} style={{ margin: "12px 0" }}>
              {m.yes.recheck}
            </p>
            <Node n={m.yes.picked} color />
            <p className={c("mono")} style={{ margin: "12px 0" }}>
              or
            </p>
            <Node n={m.yes.still} />
          </div>
        </div>
      </div>
    </Mod>
  );
}

function Parts({ m }) {
  return (
    <Mod tone={m.tone}>
      <HeadRow head={m.head} side={m.side} />
      <div className={c("pc")}>
        <div className={c("parts")}>
          {m.parts.map(([n, q]) => (
            <div key={n}>
              <span>{n}</span>
              <span>{q}</span>
            </div>
          ))}
        </div>
        <figure className={c("circ")}>
          <ImageZoom src={m.img.src} alt={m.img.alt} width={m.img.width}>
            <Image src={m.img.src} alt={m.img.alt} width={m.img.width} height={m.img.height} sizes="(min-width: 1100px) 830px, 100vw" />
          </ImageZoom>
          <figcaption className={c("mono")} style={{ marginTop: 12 }}>
            {m.caption}
          </figcaption>
        </figure>
      </div>
    </Mod>
  );
}

function Power({ m }) {
  return (
    <Mod tone={m.tone}>
      <HeadRow head={m.head} side={m.side} />
      <div className={c("pw")}>
        {m.blocks.map((b) => (
          <div key={b.label} className={c("blk")}>
            <p className={c("mono")}>{b.label}</p>
            <h4 className={c("h5")} style={{ marginTop: 12 }}>
              {b.title}
            </h4>
            <ul>
              {b.items.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={c("loads")} style={{ marginTop: 34, maxWidth: 760 }}>
        <p className={c("mono")} style={{ marginBottom: 8 }}>
          {m.loadLabel}
        </p>
        {m.loads.map((l) => (
          <div key={l.name} className={c("ld", l.on && "on")}>
            <span>{l.name}</span>
            <i style={{ width: `${l.w}%` }} />
            <span>{l.value}</span>
          </div>
        ))}
        <p className={c("mono")} style={{ marginTop: 8 }}>
          {m.note}
        </p>
      </div>
    </Mod>
  );
}

function Zones({ m }) {
  return (
    <Mod tone={m.tone}>
      <HeadRow head={m.head} side={m.side} />
      <div className={c("zones")}>
        <div className={c("views")}>
        <svg viewBox="0 0 640 400" fill="none" role="img" aria-label="Top view of the bin: a green person zone in front, two grey floor zones to the sides, nothing behind.">
          <rect x="0" y="0" width="640" height="400" rx="16" fill="#fff" />
          <path d="M320 300 L250 70 L390 70 Z" fill="rgba(63,174,90,.22)" stroke="#3fae5a" />
          <path d="M375 300 L414 155 L481 194 Z" fill="#ecede8" stroke="#9a9d95" />
          <path d="M265 300 L226 155 L159 194 Z" fill="#ecede8" stroke="#9a9d95" />
          <circle cx="265" cy="300" r="4" fill="#111" />
          <circle cx="320" cy="300" r="4" fill="#111" />
          <circle cx="375" cy="300" r="4" fill="#111" />
          <path d="M320 300 L264 100 L376 100 Z" fill="none" stroke="#3fae5a" strokeDasharray="4 4" />
          <rect x="250" y="300" width="140" height="70" rx="8" fill="#2c2d2a" />
          <text x="320" y="340" fill="#f2f2ee" fontSize="11" textAnchor="middle">BIN (TOP VIEW)</text>
          <text x="320" y="58" fill="#026d00" fontSize="11" textAnchor="middle">PERSON ZONE · 20 TO 40 CM</text>
          <text x="320" y="122" fill="#026d00" fontSize="10" textAnchor="middle">WASTE IN FRONT · UNDER 20 CM</text>
          <text x="490" y="190" fill="#555" fontSize="10">FLOOR ZONE · UNDER 30 CM</text>
          <text x="150" y="190" fill="#555" fontSize="10" textAnchor="end">FLOOR ZONE · UNDER 30 CM</text>
          <text x="490" y="206" fill="#999" fontSize="10">SIDE SENSOR, 30° RIGHT</text>
          <text x="150" y="206" fill="#999" fontSize="10" textAnchor="end">SIDE SENSOR, 30° LEFT</text>
          <text x="320" y="392" fill="#999" fontSize="10" textAnchor="middle">BEHIND THE BIN: NOT COVERED</text>
        </svg>
        {m.front && (
          <svg className={c("front")} viewBox="0 0 640 300" fill="none" role="img" aria-label={`Front view of the bin: ${m.front.height} tall, three sensors ${m.front.sensors}.`}>
            <rect x="0" y="0" width="640" height="300" rx="16" fill="#fff" />
            <text x="24" y="34" fill="#74786f" fontSize="10">FRONT VIEW</text>
            <path d="M40 262H600" stroke="#9a9d95" />
            <path d="M260 52h120l-4 14H264z" stroke="#3fae5a" strokeWidth="1.4" />
            <path d="M256 66h128l-14 196H270z" stroke="#3fae5a" strokeWidth="1.4" />
            <circle cx="290" cy="244" r="5" fill="#111" />
            <circle cx="320" cy="244" r="5" fill="#111" />
            <circle cx="350" cy="244" r="5" fill="#111" />
            <path d="M430 52V262M424 52h12M424 262h12" stroke="#111" />
            <text x="446" y="160" fill="#111" fontSize="11">{m.front.height.toUpperCase()}</text>
            <path d="M210 244V262M204 244h12M204 262h12" stroke="#026d00" />
            <text x="196" y="257" fill="#026d00" fontSize="11" textAnchor="end">{m.front.sensors.toUpperCase()}</text>
            <text x="320" y="290" fill="#74786f" fontSize="10" textAnchor="middle">THREE SENSORS ON THE FRONT FACE · SCHEMATIC, NOT TO SCALE</text>
          </svg>
        )}
        </div>
        <div className={c("zkey")}>
          {m.key.map(([b, t]) => (
            <p key={b}>
              <b>{b}</b> {t}
            </p>
          ))}
        </div>
      </div>
    </Mod>
  );
}

function Eyes({ m }) {
  return (
    <Mod tone={m.tone}>
      <HeadRow head={m.head} side={m.side} dark />
      <div className={c("eyes")}>
        {m.states.map((e) => (
          <div key={e.title} className={c("eye")}>
            <svg viewBox="0 0 200 70" fill="#7de08f" aria-hidden="true">
              {EYES[e.shape]}
            </svg>
            <h4 className={c("h6")}>{e.title}</h4>
            <span className={c("mono")}>{e.meta}</span>
            <p>
              {e.line}
              {e.tr && <small>{e.tr}</small>}
            </p>
          </div>
        ))}
      </div>
      <p className={c("mono")} style={{ marginTop: 30 }}>
        {m.note}
      </p>
    </Mod>
  );
}

function Spec({ m }) {
  return (
    <Mod tone={m.tone}>
      <HeadRow head={m.head} side={m.side} />
      <div className={c(m.img && "specph")}>
        <div className={c("spec2")}>
          {m.items.map((it) => (
            <div key={it.title}>
              <h4 className={c("h6")}>{it.title}</h4>
              <p style={it.big ? { color: "var(--ink)", fontSize: 24, fontWeight: 300, letterSpacing: "-.5px" } : undefined}>{it.text}</p>
            </div>
          ))}
        </div>
        {m.img && (
          <figure className={c("inside")}>
            <Image src={m.img.src} alt={m.img.alt} width={m.img.width} height={m.img.height} sizes="(min-width: 768px) 380px, 100vw" />
            <figcaption className={c("mono")}>{m.caption}</figcaption>
          </figure>
        )}
      </div>
    </Mod>
  );
}

function Brand({ m }) {
  return (
    <Mod tone={m.tone}>
      <HeadRow head={m.head} side={m.side} />
      <div className={c("brand")}>
        <div className={c("logo")} style={{ background: "#f6f9f7" }}>
          <Image src={m.logo.src} alt={m.logo.alt} width={m.logo.width} height={m.logo.height} sizes="(min-width: 768px) 500px, 80vw" />
        </div>
        <div className={c("sw")} style={{ background: "var(--card)" }}>
          <p className={c("mono")}>Colours</p>
          <div className={c("dots")}>
            {m.colors.map(([hex, ink]) => (
              <span key={hex} className={c("dot")} style={{ background: hex, color: ink }}>
                {hex}
              </span>
            ))}
          </div>
          <p className={c("side")} style={{ marginTop: 26 }}>
            {m.colorNote}
          </p>
        </div>
        <div className={c("type")} style={{ background: "var(--card)" }}>
          <p className={c("mono")} style={{ textAlign: "left" }}>
            Type
          </p>
          <p className={c("spec")}>Inter</p>
          <p className={c("abc")}>
            Regular · Semi Bold
            <br />
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
            <br />
            abcdefghijklmnopqrstuvwxyz 0123456789
          </p>
        </div>
        <div className={c("slogan")} style={{ background: "#f6f9f7" }}>
          <Image src={m.slogan.src} alt={m.slogan.alt} width={m.slogan.width} height={m.slogan.height} sizes="(min-width: 768px) 520px, 80vw" />
          <p className={c("mono")} style={{ marginTop: 14 }}>
            {m.sloganCaption}
          </p>
        </div>
      </div>
    </Mod>
  );
}

function Tests({ m }) {
  return (
    <Mod tone={m.tone}>
      <HeadRow head={m.head} side={m.side} />
      <div className={c("tests")}>
        {m.tests.map((t, i) => (
          <div key={t.file} className={c("tc soft")}>
            <div className={c("ghost")}>{pad2(i + 1)}</div>
            <h4 className={c("h5")}>{t.title}</h4>
            <p>{t.text}</p>
            <span className={c("mono")}>{t.file}</span>
          </div>
        ))}
        <div className={c("arrow")} aria-hidden="true">
          <i />
        </div>
        <div className={c("integ")}>
          <span className={c("mono")}>{m.integ.label}</span>
          <h4 className={c("h5")}>{m.integ.title}</h4>
          <p>{m.integ.text}</p>
          <div className={c("states")}>
            {m.integ.states.map((st) => (
              <span key={st}>{st}</span>
            ))}
          </div>
        </div>
      </div>
      <div className={c("btnrow")}>
        <Btn href={m.link.href} label={m.link.label} ghost />
      </div>
    </Mod>
  );
}

function Assembly({ m }) {
  return (
    <Mod tone={m.tone}>
      <HeadRow head={m.head} side={m.side} />
      <div className={c("asm")}>
        <ol className={c("asmflow")} aria-label="Assembly stages">
          {m.flow.map((f, i) => (
            <li key={f}>
              <div className={c("pill", i === m.flow.length - 1 && "pillOn")}>{f}</div>
              {i < m.flow.length - 1 && <div className={c("vconn")} aria-hidden="true" />}
            </li>
          ))}
        </ol>
        <ol className={c("asmsteps")}>
          {m.steps.map((st, i) => (
            <li key={st.title} className={c("asmstep", st.on && "on")}>
              <span className={c("mono")}>Step {pad2(i + 1)}</span>
              <h4 className={c("h6")}>{st.title}</h4>
              <ul>
                {st.items.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </Mod>
  );
}

function Code({ m }) {
  return (
    <Mod tone={m.tone}>
      <HeadRow head={m.head} side={m.side} />
      <figure className={c("code")}>
        <figcaption className={c("bar2")}>
          <span className={c("mono")}>{m.bar[0]}</span>
          <span className={c("mono")}>{m.bar[1]}</span>
        </figcaption>
        <pre>
          {m.lines.map(([n, code, k, after], i) => (
            <Fragment key={n}>
              {i > 0 && "\n"}
              <span className={c("ln")} aria-hidden="true">
                {n}
              </span>
              {code}
              {k && <span className={c("k")}>{k}</span>}
              {after}
            </Fragment>
          ))}
        </pre>
      </figure>
    </Mod>
  );
}

function Pairs({ m }) {
  return (
    <Mod tone={m.tone}>
      <HeadRow head={m.head} side={m.side} />
      <div className={c("pf")}>
        <div className={c("pfh")} aria-hidden="true">
          <span />
          <span className={c("mono")}>{m.cols[0]}</span>
          <span />
          <span className={c("mono")}>{m.cols[1]}</span>
        </div>
        {m.rows.map((r, i) => (
          <div key={r.title} className={c("pfr")}>
            <div className={c("ghost")}>{pad2(i + 1)}</div>
            <h4 className={c("h6")}>{r.title}</h4>
            <span className={c("to")} aria-hidden="true">
              <i />
            </span>
            <p>{rich(r.text)}</p>
          </div>
        ))}
        {m.later && (
          <div className={c("later")}>
            <Status kind="no">{m.later.label}</Status>
            <h4 className={c("h6")}>{m.later.title}</h4>
            <span className={c("to")} />
            <p>{m.later.text}</p>
          </div>
        )}
      </div>
      {m.trade && (
        <div className={c("trade")}>
          <span className={c("mono")} style={{ color: "var(--accent)" }}>
            {m.trade.label}
          </span>
          <span>
            {rich(m.trade.text)}{" "}
            <span className={c("mono")} style={{ display: "inline", textTransform: "none" }}>
              {m.trade.src}
            </span>
          </span>
        </div>
      )}
    </Mod>
  );
}

function Incident({ m }) {
  return (
    <Mod tone={m.tone}>
      <HeadRow head={m.head} side={m.side} />
      <div className={c("inc")}>
        {m.steps.map((st) => (
          <div key={st.title} className={c("ic", st.cut && "cut", st.on && "on")}>
            <span className={c("mono")}>{st.label}</span>
            <h4 className={c("h5")}>
              {st.cut ? <s>{st.title}</s> : st.title}
            </h4>
            <p>{st.text}</p>
          </div>
        ))}
      </div>
      <p className={c("foot2")}>{rich(m.foot)}</p>
    </Mod>
  );
}

function Checks({ m }) {
  return (
    <Mod tone={m.tone}>
      <HeadRow head={m.head} side={m.side} />
      <div className={c("chk")}>
        {m.items.map((it) => (
          <div key={it.title} className={c("ck soft")}>
            <Tick />
            <h4 className={c("h5")}>{it.title}</h4>
            <p>{it.text}</p>
          </div>
        ))}
      </div>
      <p className={c("mono")} style={{ marginTop: 44 }}>
        {m.critLabel}
      </p>
      <div className={c("crow")}>
        {m.crit.map((cr, i) => (
          <div key={cr.title}>
            <span className={c("mono")} style={cr.kind === "ob" ? { color: "var(--accent)" } : undefined}>
              {pad2(i + 1)}
            </span>
            <h4 className={c("h6")}>{cr.title}</h4>
            <Status kind={cr.kind}>{cr.status}</Status>
          </div>
        ))}
      </div>
    </Mod>
  );
}

function Photos({ m }) {
  return (
    <Mod tone={m.tone}>
      <HeadRow head={m.head} side={m.side} />
      <div className={c("ph4")}>
        {m.imgs.map((im) => (
          <Image key={im.src} src={im.src} alt={im.alt} width={im.width} height={im.height} sizes="(min-width: 768px) 320px, 50vw" />
        ))}
      </div>
    </Mod>
  );
}

function Proto({ m }) {
  return (
    <Mod tone={m.tone}>
      <HeadRow head={m.head} side={m.side} />
      <div className={c("proto")}>
        <div className={c("img")}>
          <Image src={m.img.src} alt={m.img.alt} width={m.img.width} height={m.img.height} sizes="(min-width: 768px) 740px, 100vw" />
        </div>
        <div className={c("scs")}>
          {m.scenarios.map((sc) => (
            <div key={sc.label} className={c("sc")}>
              <span className={c("mono")}>{sc.label}</span>
              <h4 className={c("h5")}>{sc.title}</h4>
              <div className={c("flow2")}>
                {sc.flow.map((f) => (
                  <Fragment key={f}>
                    <span>{f}</span>
                    <em aria-hidden="true">→</em>
                  </Fragment>
                ))}
                <span className={c("end")}>{sc.end}</span>
              </div>
              <Btn href={sc.href} label={sc.cta} />
            </div>
          ))}
        </div>
      </div>
      <div className={c("btnrow")}>
        <Btn href={m.link.href} label={m.link.label} ghost />
      </div>
    </Mod>
  );
}

function Classroom({ m }) {
  return (
    <Mod tone={m.tone}>
      <HeadRow head={m.head} side={m.side} />
      <div className={c("cls")}>
        <div className={c("dur")}>
          <span className={c("mono")} style={{ color: "var(--accent)" }}>
            {m.dur.label}
          </span>
          <div className={c("bigno")}>
            {m.dur.n}
            <small>{m.dur.unit}</small>
          </div>
          <p>{m.dur.text}</p>
        </div>
        {m.obs.map((o) => (
          <div key={o} className={c("obs")}>
            <span className={c("chip g")}>{m.chip}</span>
            <p className={c("b")}>{o}</p>
          </div>
        ))}
      </div>
    </Mod>
  );
}

function Seminar({ m }) {
  return (
    <Mod tone={m.tone}>
      <div className={c("sem")}>
        <div>
          <h3 className={c("h2")}>
            <Head parts={m.head} />
          </h3>
          <dl>
            {m.facts.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <p className={c("mono")} style={{ marginTop: 20 }}>
            {m.note}
          </p>
        </div>
        <div className={c("poster")}>
          <ImageZoom src={m.img.src} alt={m.img.alt} width={m.img.width}>
            <Image src={m.img.src} alt={m.img.alt} width={m.img.width} height={m.img.height} sizes="(min-width: 768px) 380px, 100vw" />
          </ImageZoom>
        </div>
      </div>
    </Mod>
  );
}

function Achieved({ m }) {
  return (
    <Mod tone={m.tone}>
      <HeadRow head={m.head} side={m.side} />
      <div className={c("ach")}>
        <div className={c("achs")}>
          <span className={c("mono")}>{m.label}</span>
          <p className={c("b")}>
            <Head parts={m.line} />
          </p>
          {m.note && <p className={c("achn")}>{m.note}</p>}
        </div>
        <div className={c("critg")}>
          {m.crit.map((cr, i) => (
            <div key={cr.title} className={c("cg")}>
              <div className={c("ghost")}>{pad2(i + 1)}</div>
              <h4 className={c("h6")}>{cr.title}</h4>
              <Status kind={cr.kind}>{cr.status}</Status>
            </div>
          ))}
        </div>
      </div>
    </Mod>
  );
}

function Study({ m }) {
  const total = m.weeks.reduce((n, w) => n + w.span, 0);
  return (
    <Mod tone={m.tone}>
      <HeadRow head={m.head} side={m.side} />
      <div className={c("study")}>
        <div className={c("wk")} style={{ "--cols": m.weeks.map((w) => `${w.span}fr`).join(" ") }}>
          {m.weeks.map((w) => (
            <div key={w.label} className={c(w.on && "on")}>
              <span className={c("mono")} style={w.on ? { color: "var(--accent)" } : undefined}>
                {w.label}
              </span>
              <h4 className={c("h6")}>{w.title}</h4>
              <p>{w.text}</p>
            </div>
          ))}
        </div>
        <div className={c("wruler")} aria-hidden="true" />
        <div className={c("wticks")} aria-hidden="true">
          {Array.from({ length: total + 1 }, (_, i) => (
            <span key={i}>{i === 0 ? "Week 0" : i}</span>
          ))}
        </div>
      </div>
      <div className={c("met")}>
        {m.metrics.map((mt, i) => (
          <div key={mt.title} className={c("mc")}>
            <span className={c("mono")} style={mt.on ? { color: "var(--accent)" } : undefined}>
              {pad2(i + 1)}
            </span>
            <h5 className={c("h6")}>{mt.title}</h5>
            <p>{mt.text}</p>
          </div>
        ))}
      </div>
      <div className={c("log")}>
        <span className={c("mono")}>{m.log.label}</span>
        {m.log.events.map((e) => (
          <span key={e} className={c("ev")}>
            {e}
          </span>
        ))}
        <span className={c("no")}>{m.log.note}</span>
      </div>
    </Mod>
  );
}

function Road({ m }) {
  return (
    <Mod tone={m.tone}>
      <HeadRow head={m.head} side={m.side} />
      <div className={c("road")}>
        {m.stages.map((st) => (
          <div key={st.title} className={c("rd", st.kind)}>
            <span className={c("mono")} style={st.kind === "now" ? { color: "var(--accent)" } : undefined}>
              {st.label}
            </span>
            <h4>{st.title}</h4>
            <p>{st.text}</p>
            {st.items.length > 0 && (
              <ul>
                {st.items.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div className={c("pstrip")}>
        {m.strip.map(([k, v]) => (
          <div key={k}>
            <span className={c("mono")}>{k}</span>
            <br />
            {v}
          </div>
        ))}
      </div>
    </Mod>
  );
}

function SDG({ m }) {
  return (
    <Mod tone={m.tone}>
      <HeadRow head={m.head} side={m.side} />
      <div className={c("sdg")}>
        {m.goals.map((g) => (
          <div key={g.title} className={c("sg")}>
            <Image src={g.img.src} alt={g.img.alt} width={g.img.width} height={g.img.height} sizes="88px" />
            <h4 className={c("h5")}>{g.title}</h4>
            <span className={c("mono")}>{g.target}</span>
            <p>{g.text}</p>
          </div>
        ))}
      </div>
      <p className={c("mono")} style={{ marginTop: 18 }}>
        {m.credit}
      </p>
    </Mod>
  );
}

function Groups({ m }) {
  return (
    <Mod tone={m.tone}>
      <HeadRow head={m.head} side={m.side} />
      <div className={c("lim")}>
        {m.groups.map((g, i) => (
          <div key={g.label} className={c("lg", g.dark && "dkc")}>
            <div className={c("top")}>
              <span className={c("mono")}>{g.label}</span>
              <div className={c("ghost")} aria-hidden="true">
                {pad2(i + 1)}
              </div>
            </div>
            <h4 className={c("h5")}>{g.title}</h4>
            {g.intro && <p className={c("intro")}>{g.intro}</p>}
            <ul>
              {g.items.map(([b, t]) => (
                <li key={b}>
                  <b>{b}</b>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Mod>
  );
}

function EndCard({ m }) {
  return (
    <Mod>
      <div className={c("endc")}>
        <svg className={c("gridl")} viewBox="0 0 1290 460" preserveAspectRatio="xMidYMid slice" fill="none" stroke="#3f403b" strokeWidth="1" aria-hidden="true">
          <path d="M0 115H1290M0 230H1290M0 345H1290M215 0V460M430 0V460M645 0V460M860 0V460M1075 0V460" />
        </svg>
        <div className={c("in")}>
          <span className={c("mono")} style={{ color: "#a9aba3" }}>
            {m.eyebrow}
          </span>
          <p className={c("endh")} style={{ marginTop: 24 }}>
            <Head parts={m.head} />
          </p>
          <p>{m.text}</p>
        </div>
      </div>
    </Mod>
  );
}

const MODULES = {
  opener: Opener,
  heroDark: HeroDark,
  goals: Goals,
  stagger: Stagger,
  problem: Problem,
  process: Process,
  audit: Audit,
  context: Context,
  literature: Literature,
  blocks: Blocks,
  affinity: Affinity,
  lanes: Lanes,
  insights: Insights,
  personas: Personas,
  criteria: Criteria,
  gradStatement: GradStatement,
  opportunity: Opportunity,
  drops: Drops,
  ptab: PTab,
  rules: Rules,
  layers: Layers,
  scenarios: Scenarios,
  arch: Arch,
  ia: IA,
  parts: Parts,
  power: Power,
  zones: Zones,
  eyes: Eyes,
  spec: Spec,
  brand: Brand,
  tests: Tests,
  code: Code,
  assembly: Assembly,
  pairs: Pairs,
  incident: Incident,
  checks: Checks,
  photos: Photos,
  proto: Proto,
  classroom: Classroom,
  seminar: Seminar,
  achieved: Achieved,
  study: Study,
  road: Road,
  sdg: SDG,
  groups: Groups,
  endCard: EndCard,
};

export default function BinaDeepDive({ data }) {
  return (
    <div className={`${mulish.variable} ${dmMono.variable} ${inter.variable} ${s.root}`}>
      {data.modules.map((m, i) => {
        const M = MODULES[m.type];
        return M ? <M key={m.id ?? `${m.type}-${i}`} m={m} /> : null;
      })}
    </div>
  );
}

