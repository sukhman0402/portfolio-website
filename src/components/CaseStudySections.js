// Renders a fixed sequence of narrative sections for an individual
// Project or Research page's content area — the part design.md §5/§5b
// leaves as an open design task pending your sign-off (piloting against
// DriveWise for Projects, per §5). Placeholder body copy throughout;
// structure is the part that's proposed, not the words.
export default function CaseStudySections({ sections }) {
  return (
    <div className="mx-auto max-w-[1440px] px-5 sm:px-[30px]">
      {sections.map((section, i) => (
        <section
          key={section.heading}
          className={`grid grid-cols-1 gap-4 py-10 md:grid-cols-[350px_1fr] md:gap-10 md:py-12 ${
            i !== 0 ? "border-t border-black" : "pt-14 md:pt-20"
          }`}
        >
          <h2 className="font-bold uppercase tracking-normal">
            {section.heading}
          </h2>
          <p className="max-w-[1030px] font-normal tracking-[-0.5px] text-black/80">
            {section.body}
          </p>
        </section>
      ))}
    </div>
  );
}
