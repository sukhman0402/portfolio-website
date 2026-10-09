import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import ProjectHeroTop from "@/components/ProjectHeroTop";
import ProjectTopics from "@/components/ProjectTopics";
import LongCaseStudy from "@/components/LongCaseStudy";
import BinaDeepDive from "@/components/BinaDeepDive";
import MyjioDeepDive from "@/components/MyjioDeepDive";
import ProjectPager from "@/components/ProjectPager";
import Footer from "@/components/Footer";
import { projects, getProjectBySlug } from "@/lib/data";

// DEEP DIVE (the full case study, 13 chapters). /projects/<slug> shows the
// HIGHLIGHTS (the short 5-step case study) and ends with "View the Deep
// Dive", which opens this page. Names: Sukhman, 2026-10-06.
//
// LONG format (Sukhman FINAL 2026-10-06): a project with `long` in data.js
// (Drive Wise) gets the GeoTab Behance style modules (src > components >
// LongCaseStudy.js). The site header stays; "Back to Highlights" sits under
// it and again at the end, where the links use the Highlights page's own
// end-link style (rows between 2px black lines, bold label + arrow). The header's own links already lead
// back to the project list.
// Each project's Deep Dive has its own reference, so `long.renderer` picks
// the renderer: "aethera" is BINA's (src > components > BinaDeepDive.js,
// 2026-10-07); "myjio" is MyJio's (src > components > MyjioDeepDive.js,
// Fintech CRM reference, 2026-10-09); no value means Drive Wise's GeoTab modules.
// A project with only `fullSections` keeps the older layout
// (ProjectHeroTop + ProjectTopics).

export function generateStaticParams() {
  return projects.filter((p) => p.long || p.fullSections?.length).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return {
    title: project ? `${project.title}, Deep Dive | Sukhman` : "Project | Sukhman",
  };
}

// Same end-link row as the Highlights page (src > components > ProjectTopics.js).
const END_LINK = "flex w-fit items-center gap-[22px] py-[28px] font-semibold tracking-[-0.5px] transition-opacity hover:opacity-60";

function ArrowUpRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M3 13 13 3M5 3h8v8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" />
    </svg>
  );
}

// The same arrow, pointing back (left), drawn with the same stroke.
function ArrowLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M14 8H2.5M7 3.5 2.5 8 7 12.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" />
    </svg>
  );
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
  const Body = long.renderer === "aethera" ? BinaDeepDive : long.renderer === "myjio" ? MyjioDeepDive : LongCaseStudy;
  return (
    <>
      <Header base="/" />
      <main className="flex-1">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-[30px]">
          <h1 className="sr-only">{project.title}, Deep Dive</h1>
          <div className="pt-[18px] pb-[26px]">
            <BackLink back={long.back} />
          </div>
          <Body data={long} />
          <ul className="mt-[10px] border-t-2 border-black">
            <li className="border-b-2 border-black">
              <Link href={long.back.href} className={END_LINK}>
                <ArrowLeft />
                <span>{long.back.label}</span>
              </Link>
            </li>
            {long.endLinks.map((l) => (
              <li key={l.href} className="border-b-2 border-black">
                {l.external ? (
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className={END_LINK}>
                    <span>{l.label}</span>
                    <ArrowUpRight />
                  </a>
                ) : (
                  <Link href={l.href} className={END_LINK}>
                    <span>{l.label}</span>
                    <ArrowUpRight />
                  </Link>
                )}
              </li>
            ))}
          </ul>
          {/* Previous / next project (2026-10-07). */}
          <ProjectPager slug={slug} joined className="mb-[90px]" />
        </div>
      </main>
      <Footer />
    </>
  );
}
