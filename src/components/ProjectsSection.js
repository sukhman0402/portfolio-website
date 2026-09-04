import Link from "next/link";
import ProjectRow from "./ProjectRow";
import Chevron from "./Chevron";
import { projects } from "@/lib/data";
 
// Landing Page Section 2.0 — Projects (design.md §3, Section 2.0 + §3a).
export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);
 
  return (
    <section id="projects" className="-mt-[100px] w-full scroll-mt-24 md:mt-0">
      {/* -mt-[100px] (mobile only, reset at md) — flagged 2026-09-02: pulls
          this whole section up 100px to close the gap the Hero's own
          100px upward shift (previous round) opened up beneath it.
          Desktop is untouched (md:mt-0). */}
      <div className="mx-auto max-w-[1440px] px-5 pt-20 sm:px-[30px] md:pt-28">
        <h2 className="border-b-2 border-black pb-[10px] font-bold uppercase leading-[18px] tracking-normal">
          Projects
        </h2>
 
        <div>
          {featured.map((project) => (
            <ProjectRow key={project.slug} project={project} expandable />
          ))}
        </div>
 
        {/* 60px below the last row's divider per Figma (corrected 2026-08-20).
            Aligned to the content column (x=380 in Figma, same as the row
            titles above it) via the shared 56px/350px label-column offset —
            not flush left with the "01"-"04" index column (corrected
            2026-08-20, per user report: "needs to be in line with the text
            from the above section"). */}
        <Link
          href="/projects"
          className="ml-[56px] mt-[60px] inline-flex items-center gap-1 font-bold uppercase tracking-normal hover:opacity-60 transition-opacity md:ml-[350px]"
        >
          More Projects
          <Chevron className="h-2.5 w-2.5" />
        </Link>
      </div>
    </section>
  );
}
 
