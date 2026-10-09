import s from "./DoubleDiamond.module.css";

// The Double Diamond as drawn in the project's own deck (MyJio, slide 4
// "03 Methodology / Double-Diamond", Figma 3:11987): four triangles in a
// row, diverge (apex up) and converge (apex down), tinted with the MyJio
// red-to-blue gradient, each with a one-line definition.
// Data: project.process = { label, intro?, phases: [{ name, alt, mode,
// text, links: [{ label, href }], methods?: [], outputs?: [] }] }.
// Highlights shows the strip (name, mode, definition, step links); the
// Deep Dive passes `detail` to add the methods and outputs per phase.
// (Sukhman, 2026-10-09: the Double Diamond is the core of the project.)

export function Triangle({ mode, id, className, solid = false }) {
  const o = solid ? "1" : ".09";
  const up = mode === "diverge";
  const pts = up ? "0,180 150,4 300,180" : "0,4 300,4 150,180";
  const edge = up ? "M0,180 L150,4 L300,180" : "M0,4 L150,180 L300,4";
  return (
    <svg className={className} viewBox="0 0 300 184" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}f`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e30513" stopOpacity={o} />
          <stop offset="1" stopColor="#0a2885" stopOpacity={o} />
        </linearGradient>
        <linearGradient id={`${id}s`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#e30513" />
          <stop offset="1" stopColor="#0a2885" />
        </linearGradient>
      </defs>
      <polygon points={pts} fill={`url(#${id}f)`} />
      <path d={edge} fill="none" stroke={`url(#${id}s)`} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export function DoubleDiamond({ process, detail = false }) {
  return (
    <div className={s.dd}>
      <div className={s.head}>
        <h2 className={s.h}>{process.label}</h2>
        {process.intro && <p className={s.intro}>{process.intro}</p>}
      </div>
      <ol className={s.row}>
        {process.phases.map((p, i) => (
          <li key={p.name} className={s.phase}>
            <div className={s.fig}>
              <span className={`${s.mode} ${p.mode === "diverge" ? s.modeUp : s.modeDown}`}>{p.mode === "diverge" ? "Diverge" : "Converge"}</span>
              <Triangle mode={p.mode} id={`dd${i}`} className={s.tri} />
              <span className={`${s.name} ${p.mode === "diverge" ? s.nameUp : s.nameDown}`}>{p.name}</span>
            </div>
            <p className={s.ttl}>
              {p.name}
              {p.alt && <span className={s.alt}> / {p.alt}</span>}
            </p>
            <p className={s.text}>{p.text}</p>
            {detail && p.methods?.length > 0 && (
              <div className={s.list}>
                <p className={s.lab}>Methods</p>
                <ul>{p.methods.map((m) => <li key={m}>{m}</li>)}</ul>
              </div>
            )}
            {detail && p.outputs?.length > 0 && (
              <div className={s.list}>
                <p className={s.lab}>What came out</p>
                <ul>{p.outputs.map((m) => <li key={m}>{m}</li>)}</ul>
              </div>
            )}
            {p.links?.length > 0 && (
              <p className={s.links}>
                {p.links.map((l) => (
                  <a key={l.href} href={l.href}>{l.label}</a>
                ))}
              </p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

// Small triangle tag for a Highlights step heading: "▲ Empathy".
export function PhaseTag({ phases, uid = "" }) {
  return (
    <span className={s.tag}>
      {phases.map((p, i) => (
        <span key={p.name} className={s.tagItem}>
          {i > 0 && <span className={s.arrow} aria-hidden="true">→</span>}
          <Triangle mode={p.mode} id={`pt${uid}${i}`} className={s.mini} solid />
          {p.name}
        </span>
      ))}
    </span>
  );
}
