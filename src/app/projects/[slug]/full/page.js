import { notFound } from "next/navigation";
import ProjectHeroTop from "@/components/ProjectHeroTop";
import ProjectTopics from "@/components/ProjectTopics";
import Footer from "@/components/Footer";
import { projects, getProjectBySlug } from "@/lib/data";

// FULL case study (13 stages), Sukhman 2026-10-05: /projects/<slug> shows
// the short 4 to 5 step case study and ends with "View the full case study",
// which opens this page. Only projects with `fullSections` in data.js have
// one (Drive Wise first). Same top block as the short page (ProjectHeroTop),
// then the full stages (for Drive Wise: the continuous flow,
// src > lib > driveWiseCaseStudy.js).

// Builds /projects/<slug>/full for every project that has a full case study
// (the [slug] segment is generated here, from the child route).
export function generateStaticParams() {
  return projects.filter((p) => p.fullSections?.length).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return {
    title: project ? `${project.title}, full case study | Sukhman` : "Project | Sukhman",
  };
}

export default async function FullCaseStudyPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project?.fullSections?.length) notFound();

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
