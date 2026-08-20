import Link from "next/link";
import Chevron from "./Chevron";
import { research } from "@/lib/data";

// Landing Page Section 3.0 — RESEARCH (design.md §3, Section 3.0).
// Same visual row pattern as collapsed Projects rows, but the icon is a
// direct link (no expand/collapse) and there's no "More Research" link
// per design.md §1 (no separate Research listing page).
export default function ResearchSection() {
  const featured = research.slice(0, 4);

  return (
    <section id="research" className="w-full scroll-mt-24">
      <div className="mx-auto max-w-[1440px] px-5 pt-20 sm:px-[30px] md:pt-28">
        <h2 className="border-b border-black pb-3 font-bold uppercase tracking-normal">
          RESEARCH
        </h2>

        <div>
          {featured.map((item) => (
            <Link
              key={item.slug}
              href={`/research/${item.slug}`}
              className="grid w-full grid-cols-[auto_1fr_auto] items-start gap-x-6 border-b border-black py-5 hover:opacity-70 transition-opacity md:py-6"
            >
              <span className="font-medium uppercase tracking-normal pt-0.5">
                {item.index}
              </span>
              <span className="flex flex-col gap-1">
                <span className="font-semibold tracking-[-0.5px]">
                  {item.title}
                </span>
                <span className="font-normal tracking-[-0.5px] line-clamp-1">
                  {item.description}
                </span>
                <span className="mt-1 font-normal tracking-[-0.5px] text-muted">
                  {item.tag}
                </span>
              </span>
              <Chevron className="mt-1.5 h-3 w-3 shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
