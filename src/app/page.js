import { notFound } from "next/navigation";
import ProjectHeroTop from "@/components/ProjectHeroTop";
import ProjectTopics from "@/components/ProjectTopics";
import Footer from "@/components/Footer";
import { projects, getProjectBySlug } from "@/lib/data";
 
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
 
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return { title: project ? `${project.title} — Sukhman` : "Project — Sukhman" };
}
 
// REDESIGN 2026-09-01 — full rebuild against Figma node 179:3614 "Project
// 01 (D)- Section 1.0", replacing the previous PageTopFramework +
// CaseStudySections skeleton (design.md §5, "pending your sign-off") for
// Individual Project pages specifically. Per the brief ("exact visual copy
// ... interaction of left 'content' section follows the Interaction
// Reference"), this page no longer uses PageTopFramework at all — the
// Figma source starts directly at Header -> hero image, with no separate
// title+index breadcrumb row above it. Scope is intentionally limited to
// Projects: Individual Research pages (src/app/research/[slug]/page.js)
// still use the untouched PageTopFramework/CaseStudySections pair, since
// the brief said "individual project pages," not Research.
//
// ProjectHeroTop renders Header + hero image + Title/intro/info-row +
// Brief (static, ends on a divider). ProjectTopics renders the sticky
// Contents nav + the repeatable heading/body/image sections below that
// divider (client component — scrollspy). See both files for exact
// per-element spacing pulled from the Figma node.
export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
 
  return (
    <>
      <main className="flex-1">
        <ProjectHeroTop project={project} />
        <ProjectTopics sections={project.sections} />
      </main>
      <Footer />
    </>
  );
}
 
