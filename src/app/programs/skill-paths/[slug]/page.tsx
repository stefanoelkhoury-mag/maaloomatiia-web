import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactBar } from "@/components/ContactBar";
import { ProgramDetail } from "@/components/ProgramDetail";
import { CATEGORY_META, SKILL_PATH_CATEGORIES, SKILL_PATH_TOPICS } from "@/data/programs";
import { findSkillPath, modulesFor, relatedRefs, slugify, totalHours, totalWeeks } from "@/lib/catalog";

export function generateStaticParams() {
  return SKILL_PATH_CATEGORIES.map((category) => ({ slug: slugify(category) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = findSkillPath(slug);
  if (!category) return {};
  return {
    title: `${category} — maaloomatiia`,
    description: CATEGORY_META[category].blurb,
  };
}

export default async function SkillPathPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = findSkillPath(slug);
  if (!category) notFound();

  const modules = modulesFor(category);
  const meta = CATEGORY_META[category];
  const hours = totalHours(modules);
  const weeks = totalWeeks(modules);

  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1 bg-white">
        <ProgramDetail
          kind="skill-paths"
          kindLabel="Skill Path"
          accentColor={meta.color}
          name={category}
          description={`A skill path bundling ${modules.length} individual courses — ${hours} hours over ${weeks} weeks. ${meta.blurb}`}
          stats={[
            { label: "Format", value: "Skill Path" },
            { label: "Duration", value: `${hours} hrs · ${weeks} wks` },
            { label: "Delivery", value: modules[0]?.delivery ?? "Hybrid" },
            { label: "Courses", value: `${modules.length}` },
          ]}
          syllabusTitle="Courses in this skill path"
          syllabusNote="These courses build one specific capability together — take the full path, or pick individual courses that fit your team's gap."
          syllabusItems={modules.map((m) => ({ name: m.name, meta: `${m.hours} hrs` }))}
          related={relatedRefs(SKILL_PATH_TOPICS[category], { kind: "skill-paths", slug })}
        />
      </main>
      <ContactBar />
      <Footer />
    </div>
  );
}
