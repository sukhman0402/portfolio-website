import { notFound } from "next/navigation";
import PageTopFramework from "@/components/PageTopFramework";
import CaseStudySections from "@/components/CaseStudySections";
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

// Proposed narrative skeleton for every research page's content area
// (design.md §5b) — deliberately distinct from the Project skeleton since
// research pieces are methodology-led, not shipped-product case studies.
// Also assumes the same shared top framework as Projects (inferred,
// unconfirmed per design.md §8.5).
const SKELETON = [
  { heading: "Research Question / Motivation", body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." },
  { heading: "Method", body: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem." },
  { heading: "Process", body: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae." },
  { heading: "Findings / Insights", body: "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi." },
  { heading: "Implications / Recommendations", body: "Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim." },
  { heading: "Reflection", body: "Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi." },
];

export default async function ResearchPage({ params }) {
  const { slug } = await params;
  const item = getResearchBySlug(slug);
  if (!item) notFound();

  return (
    <>
      <PageTopFramework title={item.title} index={item.index}>
        <CaseStudySections sections={SKELETON} />
      </PageTopFramework>
      <Footer />
    </>
  );
}
