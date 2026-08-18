import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactBar } from "@/components/ContactBar";
import { ProgramDetail } from "@/components/ProgramDetail";
import { CAREER_PATHS } from "@/data/programs";
import { findCareerPath, modulesFor, relatedRefs, slugify, totalHours, totalWeeks } from "@/lib/catalog";

export function generateStaticParams() {
  return CAREER_PATHS.map((path) => ({ slug: slugify(path.name) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const path = findCareerPath(slug);
  if (!path) return {};
  return {
    title: `${path.name} — maaloomatiia`,
    description: `The ${path.name} career path bootcamp at maaloomatiia.`,
  };
}

export default async function CareerPathPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const path = findCareerPath(slug);
  if (!path) notFound();

  const modules = path.moduleCategory ? modulesFor(path.moduleCategory) : [];
  const hasCurriculum = modules.length > 0;
  const hours = totalHours(modules);
  const weeks = totalWeeks(modules);

  const description = hasCurriculum
    ? `An end-to-end bootcamp covering ${modules.length} mapped courses in ${path.moduleCategory} — ${hours} hours over ${weeks} weeks, delivered as a single cohort enrollment.`
    : `An end-to-end bootcamp career path. Full curriculum is in development — talk to us about cohort timing.`;

  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1 bg-white">
        <ProgramDetail
          kind="career-paths"
          kindLabel="Career Path"
          accentColor="#22c9ad"
          name={path.name}
          description={description}
          stats={[
            { label: "Format", value: "Bootcamp" },
            { label: "Duration", value: hasCurriculum ? `${hours} hrs · ${weeks} wks` : "Coming Soon" },
            { label: "Delivery", value: hasCurriculum ? modules[0].delivery : "TBA" },
            { label: "Status", value: path.status },
          ]}
          syllabusTitle="Curriculum"
          syllabusNote={
            hasCurriculum
              ? "One bootcamp enrollment — these courses are delivered together as a single cohort, not registered individually."
              : undefined
          }
          syllabusItems={hasCurriculum ? modules.map((m) => ({ name: m.name, meta: `${m.hours} hrs` })) : undefined}
          emptySyllabusNote="Curriculum is being finalized. Talk to us to be notified when this bootcamp opens for enrollment."
          related={relatedRefs(path.topics, { kind: "career-paths", slug })}
        />
      </main>
      <ContactBar />
      <Footer />
    </div>
  );
}
