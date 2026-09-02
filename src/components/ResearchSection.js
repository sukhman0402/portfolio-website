import Link from "next/link";
import Chevron from "./Chevron";
import { research } from "@/lib/data";
 
// Landing Page Section 3.0 — RESEARCH (design.md §3, Section 3.0).
// Same visual row pattern as collapsed Projects rows, but the icon is a
// direct link (no expand/collapse) and there's no "More Research" link
// per design.md §1 (no separate Research listing page).
//
// Spacing matches ProjectRow.js exactly (both pulled from the same Figma
// row pattern, corrected 2026-08-20): fixed label column (not "auto" +
// gap, which is what was closing the "01"-to-title gap), 18px title→
// description with zero extra margin, 15px description→tag, flat 10px
// row padding above/below the divider.
export default function ResearchSection() {
  const featured = research.slice(0, 4);
 
  return (
    <section id="research" className="w-full scroll-mt-24">
      {/* pt-[180px] (mobile only, md:pt-28 unchanged) — flagged 2026-09-02,
          revised same day: the site-wide mobile inter-section rule was
          originally set to 300px ("space between each section = 300px",
          this being the concrete example given: More Projects -> RESEARCH)
          but 300px read as too large a gap in practice, so the rule value
          itself was lowered to 180px. Since ProjectsSection carries no
          trailing bottom space of its own (same convention as every other
          section on this site — the NEXT section's own top offset is the
          entire gap), this pt- alone produces the full 180px. */}
      <div className="mx-auto max-w-[1440px] px-5 pt-[180px] sm:px-[30px] md:pt-28">
        <h2 className="border-b border-black pb-[10px] font-bold uppercase leading-[18px] tracking-normal">
          RESEARCH
        </h2>
 
        <div>
          {featured.map((item) => (
            <Link
              key={item.slug}
              href={`/research/${item.slug}`}
              className="grid w-full grid-cols-[56px_1fr_auto] items-start border-b border-black pt-[10px] pb-[10px] hover:opacity-70 transition-opacity md:grid-cols-[350px_1fr_auto]"
            >
              <span className="font-medium uppercase leading-[18px] tracking-normal">
                {item.index}
              </span>
              <span className="flex flex-col gap-0">
                <span className="font-semibold leading-[18px] tracking-[-0.5px]">
                  {item.title}
                </span>
                <span className="font-normal leading-[18px] tracking-[-0.5px] line-clamp-1">
                  {item.description}
                </span>
                <span className="mt-[15px] font-normal tracking-[-0.5px] text-muted">
                  {item.tag}
                </span>
              </span>
              <Chevron className="ml-4 mt-1 h-3 w-3 shrink-0 md:ml-6" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
 
