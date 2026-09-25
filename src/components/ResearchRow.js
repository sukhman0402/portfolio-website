import Link from "next/link";
import Chevron from "./Chevron";
import OpeningLine from "./OpeningLine";

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
//
// externalUrl / comingSoon (added 2026-09-16, matching ProjectRow.js) —
// flagged directly: homepage Research rows were still hardcoded to
// `/research/${slug}`, so clicking one skipped past the external
// Behance/hosted-site link entirely and landed on the (unlinked, dummy-
// content) individual research page instead. Same three-way behavior as
// ProjectRow's CTA now applies to the whole row here:
//   - item.externalUrl set  -> row is a real <a>, opens in a new tab.
//   - item.comingSoon true (no externalUrl yet) -> row renders inert,
//     dimmed, not clickable.
//   - neither set -> unchanged original behavior, links to
//     /research/${slug}.
export default function ResearchRow({ item }) {
  const rowClassName =
    "grid w-full grid-cols-[56px_minmax(0,1fr)_auto] items-start border-b-2 border-black pt-[10px] pb-[10px] md:grid-cols-[350px_minmax(0,1fr)_auto]";

  const content = (
    <>
      <span className="font-medium uppercase leading-[18px] tracking-normal">
        {item.index}
      </span>
      <span className="flex flex-col gap-0">
        <span className="font-semibold leading-[18px] tracking-[-0.5px]">
          {item.title}
        </span>
        {/* Same one-liner rule as ProjectRow.js (2026-09-25): the opening
            line + "..", capped at 2 lines on narrow screens (see
            OpeningLine.js), default line height so it matches the Projects
            rows directly above. */}
        <OpeningLine
          className="font-normal tracking-[-0.5px] break-words"
          lead={item.description}
          more={item.descriptionMore}
        />
        <span className="mt-[15px] font-normal tracking-[-0.5px] text-muted">
          {item.comingSoon ? "Coming Soon" : item.tag}
        </span>
      </span>
      <Chevron className="ml-4 mt-1 h-3 w-3 shrink-0 md:ml-6" />
    </>
  );

  if (item.externalUrl) {
    return (
      <a
        href={item.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${rowClassName} hover:opacity-70 transition-opacity`}
      >
        {content}
      </a>
    );
  }

  if (item.comingSoon) {
    return (
      <div className={`${rowClassName} cursor-default text-black/40`}>
        {content}
      </div>
    );
  }

  return (
    <Link
      href={`/research/${item.slug}`}
      className={`${rowClassName} hover:opacity-70 transition-opacity`}
    >
      {content}
    </Link>
  );
}
