import { notFound } from "next/navigation";
import Header from "@/components/Header";
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
 
const FACTS = [
  { label: "Discipline", key: "discipline" },
  { label: "Timeline", key: "timeline" },
  { label: "Role", key: "role" },
  { label: "Tools Used", key: "tools" },
];
 
// Placeholder topics — same shared skeleton for every research piece until
// real content replaces it.
const TOPICS = [
  {
    heading: "Lorem Ipsum Topic 1",
    body: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
    image: true,
  },
  {
    heading: "Lorem Ipsum Topic 2",
    body: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
    image: false,
  },
  {
    heading: "Lorem Ipsum Topic 3",
    body: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
    image: false,
  },
  {
    heading: "Lorem Ipsum Topic 4",
    body: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
    image: false,
  },
];
 
export default async function ResearchPage({ params }) {
  const { slug } = await params;
  const item = getResearchBySlug(slug);
  if (!item) notFound();
 
  return (
    <>
      <Header base="/" />
      <main className="flex-1">
        <div className="mx-auto max-w-[1440px] px-5 pt-16 sm:px-[30px] md:pt-24">
          {/* Hero image */}
          <div className="h-[300px] w-full border-b border-black bg-[#ddd] md:h-[480px]" />
 
          {/* Title */}
          <div className="mt-8">
            <h2 className="font-bold uppercase tracking-normal">Title</h2>
            <p className="mt-2 max-w-[1030px] font-normal text-black/80">
              {item.fullDescription || item.description}
            </p>
          </div>
 
          {/* Facts grid */}
          <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4">
            {FACTS.map((f) => (
              <div key={f.key}>
                <h3 className="font-bold">{f.label}</h3>
                <p className="text-black/80">{item[f.key] || "Lorem ipsum"}</p>
              </div>
            ))}
          </div>
 
          <div className="mt-8 border-t border-black" />
 
          {/* Brief */}
          <div className="mt-8">
            <h2 className="font-bold uppercase tracking-normal">Brief</h2>
            <p className="mt-2 max-w-[1030px] font-normal text-black/80">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
              mus.
            </p>
            <p className="mt-4 max-w-[1030px] font-normal text-black/80">
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo,
              fringilla vel, aliquet nec, vulputate eget, arcu.
            </p>
          </div>
 
          {/* The Problem — NEW, same style as Brief */}
          <div className="mt-8">
            <h2 className="font-bold uppercase tracking-normal">The Problem</h2>
            <p className="mt-2 max-w-[1030px] font-normal text-black/80">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
              mus.
            </p>
          </div>
 
          {/* Topics: numbered index (left) + content (right) */}
          <div className="mt-8 grid grid-cols-1 gap-8 border-t border-black pt-8 md:grid-cols-[200px_1fr]">
            <div className="flex flex-row flex-wrap gap-4 md:sticky md:top-24 md:flex-col md:self-start md:gap-3">
              {TOPICS.map((t, i) => (
                <a
                  key={t.heading}
                  href={`#topic-${i + 1}`}
                  className={i === 0 ? "font-bold text-black" : "text-black/40"}
                >
                  <span className="mr-2">{String(i + 1).padStart(2, "0")}</span>
                  Lorem Ipsum
                </a>
              ))}
            </div>
 
            <div className="flex flex-col gap-10">
              {TOPICS.map((t, i) => (
                <section key={t.heading} id={`topic-${i + 1}`}>
                  <h2 className="font-bold uppercase tracking-normal">
                    {t.heading}
                  </h2>
                  <p className="mt-2 max-w-[1030px] font-normal text-black/80">
                    {t.body}
                  </p>
                  {t.image && (
                    <div className="mt-4 h-[300px] w-full bg-[#ddd] md:h-[480px]" />
                  )}
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
 
