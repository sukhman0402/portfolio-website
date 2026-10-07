import Link from "next/link";
import { projects } from "@/lib/data";

// Previous / next project at the end of every case study page (Highlights
// and Deep Dive). Approved by Sukhman 2026-10-07: text rows between 2px
// black lines, the same style as the end links above it; the project's
// industry in grey after its name (data.js `industry`). Order follows the
// `projects` list in data.js and wraps around (the first project's
// previous is the last one). A project still on Behance opens there in a
// new tab (↗).

function ArrowLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M14 8H2.5M7 3.5 2.5 8 7 12.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M2 8h11.5M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M3 13 13 3M5 3h8v8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" />
    </svg>
  );
}

function Side({ project, dir }) {
  const external = Boolean(project.externalUrl);
  const href = project.externalUrl || `/projects/${project.slug}`;
  const next = dir === "next";
  // Phones: the two rows stack full width (a 2px line between them);
  // from 640px they sit side by side with a 2px divider.
  const cls = `flex min-w-0 flex-col gap-[6px] py-[28px] transition-opacity hover:opacity-60 ${
    next ? "items-end border-t-2 border-black text-right sm:border-t-0 sm:border-l-2 sm:pl-5" : "sm:pr-5"
  }`;
  const name = (
    <span className="tracking-[-0.5px]">
      <span className="font-semibold">{project.title}</span>
      {project.industry && (
        <>
          {" "}
          <span className="block whitespace-nowrap text-[#6b6b6b] sm:ml-[6px] sm:inline">{project.industry}</span>
        </>
      )}
    </span>
  );
  const inner = (
    <>
      <span className="text-[13px] tracking-[-0.2px] text-[#6b6b6b]">{next ? "Next project" : "Previous project"}</span>
      <span className={`flex items-center gap-[14px] ${next ? "justify-end" : ""}`}>
        {!next && <ArrowLeft />}
        {name}
        {next && (external ? <ArrowUpRight /> : <ArrowRight />)}
        {!next && external && <ArrowUpRight />}
      </span>
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export default function ProjectPager({ slug, className = "" }) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i < 0 || projects.length < 2) return null;
  const n = projects.length;
  const prev = projects[(i - 1 + n) % n];
  const next = projects[(i + 1) % n];
  return (
    <nav aria-label="More projects" className={`grid grid-cols-1 border-y-2 border-black sm:grid-cols-2 ${className}`}>
      <Side project={prev} dir="prev" />
      <Side project={next} dir="next" />
    </nav>
  );
}
