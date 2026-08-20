import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectRow from "@/components/ProjectRow";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Projects — Sukhman",
};

// Projects — All page (design.md §4). Same expanded-card row pattern as
// §3a, but always open (not collapsible) and covers all 6 projects.
export default function ProjectsPage() {
  return (
    <>
      <Header base="/" />
      <main className="flex-1">
        <div className="mx-auto max-w-[1440px] px-5 pt-16 sm:px-[30px] md:pt-24">
          <div className="flex items-baseline justify-between border-b border-black pb-3">
            <h1 className="font-bold uppercase tracking-normal">Projects</h1>
            <span className="font-semibold uppercase tracking-normal text-muted">
              ({projects.length})
            </span>
          </div>

          <div>
            {projects.map((project) => (
              <ProjectRow
                key={project.slug}
                project={project}
                expandable={false}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
