import Link from "next/link";

// Shared global header/nav (design.md §2.1).
// `base` lets pages outside the homepage route section-links back through "/":
// homepage passes base="" (in-page anchors like "#projects"),
// every other page passes base="/" (cross-page anchors like "/#projects").
export default function Header({ base = "/" }) {
  const navItems = [
    { label: "Projects", href: `${base}#projects` },
    { label: "RESEARCH", href: `${base}#research` },
    { label: "About", href: `${base}#about` },
    { label: "CONTACT", href: `${base}#contact` },
  ];

  return (
    // sticky + bg-white so the nav stays pinned on scroll (flagged
    // 2026-08-20 — basic UI practice, not a literal Figma frame detail
    // since Figma's static frames can't encode scroll behaviour).
    <header className="sticky top-0 z-40 w-full bg-white">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-[30px]">
        <Link
          href="/"
          className="font-bold tracking-normal"
          data-node-id="67:321"
        >
          SUKHMAN.
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex lg:gap-12"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-semibold uppercase tracking-normal hover:opacity-60 transition-opacity"
            >
              {item.label}
            </Link>
          ))}
          {/* RESUME. — opens the resume PDF in a new tab.
              TODO: replace /resume.pdf once the resume file is added to /public. */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold uppercase tracking-normal hover:opacity-60 transition-opacity"
          >
            RESUME.
          </a>
        </nav>

        {/* Mobile: condensed nav (mobile treatment inferred — only the Figma
            hero frame has a mobile layout; rest of the site is a first-pass
            responsive adaptation per design.md §7.2). */}
        <nav
          className="flex items-center gap-4 md:hidden"
          aria-label="Primary"
        >
          <Link
            href={`${base}#projects`}
            className="font-semibold uppercase tracking-normal text-[13px]"
          >
            Work
          </Link>
          <Link
            href={`${base}#contact`}
            className="font-semibold uppercase tracking-normal text-[13px]"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
