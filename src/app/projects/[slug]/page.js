import { notFound } from "next/navigation";
import PageTopFramework from "@/components/PageTopFramework";
import CaseStudySections from "@/components/CaseStudySections";
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

// Proposed narrative skeleton for every project's content area (design.md
// §5) — pending your sign-off, piloted here against every project until
// then. Placeholder body text throughout.
const SKELETON = [
  { heading: "Context / Overview", body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." },
  { heading: "Problem", body: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem." },
  { heading: "Research & Insights", body: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo." },
  { heading: "Process / Ideation", body: "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi." },
  { heading: "Solution", body: "Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim." },
  { heading: "Outcome / Impact", body: "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet." },
  { heading: "Reflection", body: "Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi." },
];

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <PageTopFramework title={project.title} index={project.index}>
        <CaseStudySections sections={SKELETON} />
      </PageTopFramework>
      <Footer />
    </>
  );
}
