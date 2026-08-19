# Sukhman — Portfolio Website

Next.js (App Router) + Tailwind CSS build of the [Portfolio-Website Figma file](https://www.figma.com/design/2yjcklO1oFjK8rICoeBD67/Portfolio-Website), following `design.md` as the source of truth for structure and content status.

## Running it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## What's here

- `/` — Landing page: Splash, Hero, Projects, Research, Timeline, About, Footer
- `/projects` — all 6 projects, always-expanded card view
- `/projects/[slug]` — individual project page (shared top framework + proposed case-study skeleton)
- `/research/[slug]` — individual research page (shared top framework + proposed research skeleton)

## Known placeholders — read before publishing

1. **Content.** Everything in `src/lib/data.js` and `src/lib/aboutData.js` is still the Lorem-ipsum "dummy" tier from Figma (design.md §6). The real 4 projects + 4 research pieces need to replace these before launch.
2. **Font.** Figma specifies "SF Pro" (Apple system font), which can't be legally self-hosted for the web. `globals.css` substitutes a system-font stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`) — this renders as San Francisco on Apple devices (matching the design for most visitors) and falls back gracefully elsewhere. Weight mapping: Bold→700, Semibold(590)→600, Medium(510)→500, Regular→400, Light(274)→300.
3. **Two hand-authored icons.** `ScrollIndicator.js` (hero mouse-scroll icon) and `Chevron.js` (the reused rotated-triangle glyph) are simple geometric recreations, not the exact exported Figma assets — the sandbox this was built in couldn't fetch the real SVG bytes from Figma's asset CDN. They're visually equivalent generic UI primitives; swap in the real exports later if pixel-exact fidelity matters here.
4. **`/resume.pdf`** — the RESUME. nav link points here but the file isn't added yet. Drop your resume PDF into `public/resume.pdf`.
5. **Footer "Behance" row** — Figma's original duplicates the Email value (a copy-paste artifact); `Footer.js` ships an explicit `"Add your Behance URL"` placeholder instead so it's obvious to fix, per design.md §8.2.
6. **Project image placement** — the ~400px gap in each expanded project card (between the CTA and caption) is rendered as a labeled gray placeholder block; its position is inferred from Figma, not confirmed (design.md §8.1).
7. **Timeline section** — Figma only had the label `( TIMELINE )`; the horizontal line + hover-updated detail panel here is a working implementation of your stated intent, with placeholder stage data.
8. **Mobile layouts** — only one Figma frame (`Landing Page (M)- Section 01`) has a mobile treatment. Everything else here is a first-pass responsive adaptation (accepted risk per design.md §7.2), not a pixel match to a mobile Figma frame that doesn't exist yet.

## Next steps

- Swap placeholder content for the real 4 projects + 4 research pieces
- Sign off on (or revise) the case-study/research page skeletons in `CaseStudySections.js`
- Add `public/resume.pdf`
- Deploy: create a GitHub repo, push, connect to Vercel (deferred — not done yet per your instructions)
