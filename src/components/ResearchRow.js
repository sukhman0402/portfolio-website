import Link from "next/link";
import Chevron from "./Chevron";
 
// A single Research row (design.md §3, Section 3.0) — extracted 2026-09-03
// from ResearchSection.js so it can be shared between the homepage's
// featured-4 list and the new /research "All" listing page, mirroring how
// ProjectRow.js is shared between ProjectsSection.js and /projects.
//
// Unlike ProjectRow, this is NOT expandable — it was already, and remains,
// a direct link straight to the individual research page (no
// fullDescription/caption/image-placeholder fields exist on research items
// in data.js, so there's nothing to expand in place). Markup/spacing is
// unchanged from the original inline version: fixed 56px/350px label
// column, 18px title→description, 15px description→tag, flat 10px row
// padding above/below the divider — matches ProjectRow.js exactly since
// both come from the same Figma row pattern.
export default function ResearchRow({ item }) {
  return (
    <Link
      href={`/research/${item.slug}`}
      className="grid w-full grid-cols-[56px_1fr_auto] items-start border-b border-black pt-[10px] pb-[10px] hover:opacity-70 transition-opacity md:grid-cols-[350px_1fr_auto]"
    >
      <span className="font-medium uppercase leading-[18px] tracking-normal">
        {item.index}
      </span>
      <span className="flex flex-col gap-0">
        <span className="font-semibold leading-[18px] tracking-[-0.5px]">
          {item.title}
        </span>
        <span className="font-normal leading-[18px] tracking-[-0.5px] line-clamp-1">
          {item.description}
        </span>
        <span className="mt-[15px] font-normal tracking-[-0.5px] text-muted">
          {item.tag}
        </span>
      </span>
      <Chevron className="ml-4 mt-1 h-3 w-3 shrink-0 md:ml-6" />
    </Link>
  );
}
 
