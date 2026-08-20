import Link from "next/link";
import ProjectRow from "./ProjectRow";
import Chevron from "./Chevron";
import { projects } from "@/lib/data";

// Landing Page Section 2.0 — Projects (design.md §3, Section 2.0 + §3a).
export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section id="projects" className="w-full scroll-mt-24">
      <div className="mx-auto max-w-[1440px] px-5 pt-20 sm:px-[30px] md:pt-28">
        <h2 className="border-b border-black pb-3 font-bold uppercase tracking-normal">
          Projects
        </h2>

        <div>
          {featured.map((project) => (
            <ProjectRow key={project.slug} project={project} expandable />
          ))}
        </div>

        <Link
          href="/projects"
          className="mt-8 inline-flex items-center gap-1 font-bold uppercase tracking-normal hover:opacity-60 transition-opacity"
        >
          More Projects
          <Chevron className="h-2.5 w-2.5" />
        </Link>
      </div>
    </section>
  );
}
