import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResearchRow from "@/components/ResearchRow";
import { research } from "@/lib/data";
 
export const metadata = {
  title: "Research — Sukhman",
};
 
// Research — All page (design.md §4, extended 2026-09-03). Mirrors
// src/app/projects/page.js exactly: same heading/count row, same
// max-w-[1440px]/px-5/pt-16/md:pt-24 outer spacing, same border-b divider
// pattern. Uses ResearchRow (not ProjectRow) since Research rows are plain
// direct links, not expand-in-place cards — see ResearchRow.js.
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
              <ResearchRow key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
 
