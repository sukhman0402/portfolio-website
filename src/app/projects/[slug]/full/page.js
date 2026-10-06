import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import ProjectHeroTop from "@/components/ProjectHeroTop";
import ProjectTopics from "@/components/ProjectTopics";
import LongCaseStudy from "@/components/LongCaseStudy";
import Footer from "@/components/Footer";
import { projects, getProjectBySlug } from "@/lib/data";

// FULL case study (13 chapters). /projects/<slug> shows the short 5-step
// case study and ends with "View full case study", which opens this page.
//
// LONG format (Sukhman FINAL 2026-10-06): a project with `long` in data.js
// (Drive Wise) gets the GeoTab Behance style modules (src > components >
// LongCaseStudy.js). The site header stays; "Back to the short case study"
// sits under it and again at the end. The header's own links already lead
// back to the project list.
// A project with only `fullSections` keeps the older layout
// (ProjectHeroTop + ProjectTopics).

export function generateStaticParams() {
  return projects.filter((p) => p.long || p.fullSections?.length).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return {
    title: project ? `${project.title}, full case study | Sukhman` : "Project | Sukhman",
  };
}

function BackLink({ back }) {
  return (
    <Link href={back.href} className="font-semibold tracking-[-0.5px] transition-opacity hover:opacity-60">
      ← {back.label}
    </Link>
  );
}

export default async function FullCaseStudyPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project?.long && !project?.fullSections?.length) notFound();

  if (!project.long) {
    return (
      <>
        <main className="flex-1">
          <ProjectHeroTop project={project} />
          <ProjectTopics sections={project.fullSections} />
        </main>
        <Footer />
      </>
    );
  }

  const { long } = project;
  return (
    <>
      <Header base="/" />
      <main className="flex-1">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-[30px]">
          <h1 className="sr-only">{project.title}, full case study</h1>
          <div className="pt-[18px] pb-[26px]">
            <BackLink back={long.back} />
          </div>
          <LongCaseStudy data={long} />
          <div className="flex flex-wrap gap-x-[30px] gap-y-[6px] pt-[26px] pb-[60px]">
            <BackLink back={long.back} />
            {long.endLinks.map((l) =>
              l.external ? (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="font-semibold tracking-[-0.5px] transition-opacity hover:opacity-60">
                  {l.label} ›
                </a>
              ) : (
                <Link key={l.href} href={l.href} className="font-semibold tracking-[-0.5px] transition-opacity hover:opacity-60">
                  {l.label} ›
                </Link>
              )
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
