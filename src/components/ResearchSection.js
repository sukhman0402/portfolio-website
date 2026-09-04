import Link from "next/link";
import ResearchRow from "./ResearchRow";
import Chevron from "./Chevron";
import { research } from "@/lib/data";
 
// Landing Page Section 3.0 — RESEARCH (design.md §3, Section 3.0).
// Row markup lives in ResearchRow.js (extracted 2026-09-03) — a direct link
// (no expand/collapse), shared with the new /research "All" listing page.
//
// "More Research" link added 2026-09-03, flagged: "we need to add a 'More
// Research' button after 'Research' section, the same way there is a 'More
// Projects' section after 'Projects'." Reverses the original design.md §1
// decision noted here previously ("no separate Research listing page") —
// styled identically to ProjectsSection.js's "More Projects" link (same
// classes: 56px/350px label-column offset, mt-[60px] below the last row's
// divider) so the two sections read as one consistent pattern.
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
          entire gap), this pt- alone produces the full 180px. Unaffected by
          the "More Research" link added below (2026-09-03): that link adds
          height to the BOTTOM of this section, not the top, so the gap
          this pt- controls (Projects -> Research) is unchanged; the gap
          this section hands off to Timeline below is likewise still
          entirely Timeline's own top offset to set, per the same
          no-trailing-bottom-padding convention — verified unchanged. */}
      <div className="mx-auto max-w-[1440px] px-5 pt-[180px] sm:px-[30px] md:pt-28">
        <h2 className="border-b-2 border-black pb-[10px] font-bold uppercase leading-[18px] tracking-normal">
          RESEARCH
        </h2>
 
        <div>
          {featured.map((item) => (
            <ResearchRow key={item.slug} item={item} />
          ))}
        </div>
 
        {/* Mirrors ProjectsSection.js's "More Projects" link exactly — same
            60px gap below the last row's divider, same label-column-aligned
            indent (56px mobile / 350px desktop, matching the row titles
            above it, not the "01"-"04" index column). */}
        <Link
          href="/research"
          className="ml-[56px] mt-[60px] inline-flex items-center gap-1 font-bold uppercase tracking-normal hover:opacity-60 transition-opacity md:ml-[350px]"
        >
          More Research
          <Chevron className="h-2.5 w-2.5" />
        </Link>
      </div>
    </section>
  );
}
 
