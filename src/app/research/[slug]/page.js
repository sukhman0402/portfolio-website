import { notFound } from "next/navigation";
import ProjectHeroTop from "@/components/ProjectHeroTop";
import ProjectTopics from "@/components/ProjectTopics";
import Footer from "@/components/Footer";
import { research, getResearchBySlug } from "@/lib/data";
 
export function generateStaticParams() {
  return research.map((r) => ({ slug: r.slug }));
}
 
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getResearchBySlug(slug);
  return { title: item ? `${item.title} — Sukhman` : "Research — Sukhman" };
}
 
// REDESIGN 2026-09-03 — swapped the old PageTopFramework + CaseStudySections
// skeleton for the same ProjectHeroTop + ProjectTopics pair the individual
// Project pages use, per direct instruction: "the layout for individual
// research project is not matching with the one we finalised for individual
// project... replicate the same layout." That skeleton (a shared hardcoded
// SKELETON array, not per-item data) was the design.md §5b placeholder
// pending sign-off — deliberately left behind when Projects got the
// Figma-accurate redesign on 2026-09-01, since that brief was scoped to
// "individual project pages" only. Scope is no longer split: both routes
// now render identically, driven by each item's own ...buildDetailFields()
// data (src/lib/data.js) — same hero image, Title/intro/info-row, Brief,
// sticky Contents nav, and repeatable topic sections as Projects.
//
// ProjectHeroTop/ProjectTopics were already fully generic (no
// Project-specific field names or copy baked in), so no component changes
// were needed — only this route and the research data needed updating.
// PageTopFramework.js and CaseStudySections.js are no longer imported
// anywhere as of this change (orphaned) — safe to delete once this is live,
// though left in place here since deleting isn't a file edit this workflow
// can deliver; flagged separately.
export default async function ResearchPage({ params }) {
  const { slug } = await params;
  const item = getResearchBySlug(slug);
  if (!item) notFound();
 
  return (
    <>
      <main className="flex-1">
        <ProjectHeroTop project={item} />
        <ProjectTopics sections={item.sections} />
      </main>
      <Footer />
    </>
  );
}
 
