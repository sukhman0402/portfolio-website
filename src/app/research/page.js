import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectRow from "@/components/ProjectRow";
import { research } from "@/lib/data";
 
export const metadata = {
  title: "Research — Sukhman",
};
 
// Research — All page (design.md §4, extended 2026-09-03). Mirrors
// src/app/projects/page.js exactly: same heading/count row, same
// max-w-[1440px]/px-5/pt-16/md:pt-24 outer spacing, same border-b divider
// pattern.
//
// Switched from ResearchRow to ProjectRow (2026-09-03), flagged directly:
// "the layout for 'all research' is not what we intended. needs to be
// similar to [/projects]" — reference screenshots showed the /research
// listing still using the homepage's compact direct-link row, when it was
// meant to match /projects' always-expanded card (full description, image
// placeholder, tag + CTA row, caption). ProjectRow now takes a `basePath`
// prop precisely so it can be reused here with the CTA pointing at
// /research/<slug> instead of /projects/<slug> — see ProjectRow.js.
// research items in data.js were extended with the matching
// fullDescription/ctaLabel/caption fields.
//
// ResearchRow.js is unaffected and still powers the homepage's compact
// Research rows (ResearchSection.js) — that part of the design wasn't
// flagged and stays as originally shipped.
export default function ResearchPage() {
  return (
    <>
      <Header base="/" />
      <main className="flex-1">
        <div className="mx-auto max-w-[1440px] px-5 pt-16 sm:px-[30px] md:pt-24">
          <div className="flex items-baseline justify-between border-b border-black pb-3">
            <h1 className="font-bold uppercase tracking-normal">Research</h1>
            <span className="font-semibold uppercase tracking-normal text-muted">
              ({research.length})
            </span>
          </div>
 
          <div>
            {research.map((item) => (
              <ProjectRow
                key={item.slug}
                project={item}
                expandable={false}
                basePath="/research"
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
 
