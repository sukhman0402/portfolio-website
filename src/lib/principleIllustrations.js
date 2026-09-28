// How I Function: geometry + motion for the 6 principle-card illustrations
// (Sukhman, 2026-09-28). Pure data/maths, no React: the client component
// PrincipleIllustration.js draws whatever this file describes.
//
// Design rules (agreed over several review rounds):
//   - One primitive only: an unfilled circle with a 2px black line (same
//     width as every border-t-2 / border-b-2 rule on the site). Meaning comes
//     from how circles are repeated, sized and placed, never from a
//     different drawing per card.
//   - Every icon lives in a 200x200 viewBox and its longest side is 180, so
//     all six read as the same size. Viability is the one exception (see its
//     note).
//   - Loop: 2s still, 2.4s motion, 2s still, motion... Each motion ends on a
//     pose that looks identical to where it started, so the loop never jumps.
//   - Two groups: Evidence, Exploration, Precision move together; Systems,
//     Simplicity, Viability move together, half a cycle (2.2s) later.
//
// Each icon is frame(t) -> list of circles { x, y, r, o } in abstract units,
// t running 0 -> 1 across one motion (o = line opacity).
 
const C = 100; // centre of the 200x200 viewBox
const TAU = Math.PI * 2;
 
export const STATIC_MS = 2000;
export const MOTION_MS = 2400;
export const CYCLE_MS = STATIC_MS + MOTION_MS;
 
// easeInOutCubic: slow start, slow settle.
export function ease(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
 
const ring = (n, R, r, rot = 0) =>
  Array.from({ length: n }, (_, i) => {
    const a = (TAU * i) / n - Math.PI / 2 + rot;
    return { x: R * Math.cos(a), y: R * Math.sin(a), r, o: 1 };
  });
 
// Exploration: a chain of circles, each 1.3x the previous and exactly
// touching it, the chain turning 66deg per step. That makes it a stepped
// logarithmic spiral, so ONE scale-and-rotate about a fixed point (the pole)
// moves every circle onto the next one's place. Circles only ever touch.
const G = 1.3;
const TURN = (66 * Math.PI) / 180;
const K = { re: G * Math.cos(TURN), im: G * Math.sin(TURN) };
const C1 = { re: (1 + G) * Math.cos(TURN), im: (1 + G) * Math.sin(TURN) };
const ONE_MINUS_K = { re: 1 - K.re, im: -K.im };
const DEN = ONE_MINUS_K.re ** 2 + ONE_MINUS_K.im ** 2;
const POLE = {
  re: (C1.re * ONE_MINUS_K.re + C1.im * ONE_MINUS_K.im) / DEN,
  im: (C1.im * ONE_MINUS_K.re - C1.re * ONE_MINUS_K.im) / DEN,
};
function chainCircle(s) {
  const mag = Math.pow(G, s);
  const ang = TURN * s;
  const vx = -POLE.re;
  const vy = -POLE.im;
  return {
    x: POLE.re + mag * (vx * Math.cos(ang) - vy * Math.sin(ang)),
    y: POLE.im + mag * (vx * Math.sin(ang) + vy * Math.cos(ang)),
    r: mag,
  };
}
 
// Viability: centres 1.2694 radii apart, so the shared lens is exactly 1/4
// of each circle's area.
const VIABILITY_GAP = 1.2694091879523859;
 
const ICONS = {
  // 6 circles through one centre. Motion: spiral inward, merge into a single
  // circle, bloom back out turned one petal (60deg).
  evidence: {
    size: 180,
    group: "A",
    frame: (t) => ring(6, (1 + Math.cos(TAU * t)) / 2, 1, (TAU / 6) * t),
  },
  // 8 circles touching in a closed ring. Motion: the ring turns one place.
  systems: {
    size: 180,
    group: "B",
    frame: (t) => ring(8, 1 / Math.sin(Math.PI / 8), 1, (TAU / 8) * t),
  },
  // Growing touching chain. Motion: each circle grows into the next one's
  // place; a new small circle appears, the largest fades out.
  exploration: {
    size: 180,
    group: "A",
    frame: (t) => {
      const out = [];
      for (let k = -1; k <= 5; k++) {
        let o = 1;
        if (k === -1) o = t;
        if (k === 5) o = Math.max(0, 1 - 1.4 * t);
        out.push({ ...chainCircle(k + t), o });
      }
      return out;
    },
  },
  // One circle. Motion: the line unwinds from 12 o'clock, then redraws.
  simplicity: {
    size: 180,
    group: "B",
    frame: (t) => [{ x: 0, y: 0, r: 1, o: 1, trace: t }],
  },
  // 4 concentric rings. Motion: every ring closes one step toward the
  // centre; the innermost fades out, a new outer ring fades in.
  precision: {
    size: 180,
    group: "A",
    frame: (t) => {
      const out = [];
      for (let k = 1; k <= 5; k++) {
        let o = 1;
        if (k === 1) o = 1 - t;
        if (k === 5) o = t;
        out.push({ x: 0, y: 0, r: Math.max(0.001, k - t), o });
      }
      return out;
    },
  },
  // 2 circles sharing 1/4 of their area. Motion: they pass through each
  // other and trade places. Sized by equal ink rather than equal width (the
  // two circles together cover the same area as Simplicity's one circle),
  // because a wide, short shape looks smaller at the same width. That makes
  // it 222 wide, so it overflows its square box sideways (the tile has room).
  viability: {
    size: 222.4,
    group: "B",
    frame: (t) => [
      { x: -VIABILITY_GAP / 2 + VIABILITY_GAP * t, y: 0, r: 1, o: 1 },
      { x: VIABILITY_GAP / 2 - VIABILITY_GAP * t, y: 0, r: 1, o: 1 },
    ],
  },
};
 
// Scale + centre an icon so its rest pose (t = 0, visible circles only) has
// its longest side equal to icon.size inside the 200x200 viewBox.
function makeFitter(icon) {
  const rest = icon.frame(0).filter((c) => c.o > 0);
  const minX = Math.min(...rest.map((c) => c.x - c.r));
  const maxX = Math.max(...rest.map((c) => c.x + c.r));
  const minY = Math.min(...rest.map((c) => c.y - c.r));
  const maxY = Math.max(...rest.map((c) => c.y + c.r));
  const s = icon.size / Math.max(maxX - minX, maxY - minY);
  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  return (c) => ({ ...c, x: C + (c.x - cx) * s, y: C + (c.y - cy) * s, r: c.r * s });
}
 
// Public API: getIllustration("evidence") -> { frame(t), offsetMs } with
// circles already in viewBox units. Returns null for an unknown name.
export function getIllustration(name) {
  const icon = ICONS[name];
  if (!icon) return null;
  const fit = makeFitter(icon);
  return {
    frame: (t) => icon.frame(t).map(fit),
    offsetMs: icon.group === "B" ? CYCLE_MS / 2 : 0,
  };
}
 
