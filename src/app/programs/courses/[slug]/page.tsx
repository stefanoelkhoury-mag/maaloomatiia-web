import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactBar } from "@/components/ContactBar";
import { ProgramDetail } from "@/components/ProgramDetail";
import { CATEGORY_META, COURSES } from "@/data/programs";
import { findCourse, relatedRefs, slugify } from "@/lib/catalog";

export function generateStaticParams() {
  return COURSES.map((course) => ({ slug: slugify(course.name) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = findCourse(slug);
  if (!course) return {};
  return {
    title: `${course.name} — maaloomatiia`,
    description: `${course.name}: a ${course.format.toLowerCase()} for ${course.audience.toLowerCase()}.`,
  };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = findCourse(slug);
  if (!course) notFound();

  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1 bg-white">
        <ProgramDetail
          kind="courses"
          kindLabel="Course"
          accentColor={CATEGORY_META.AI.color}
          name={course.name}
          description={`A single-session ${course.format.toLowerCase()} — ${course.duration}, delivered ${course.delivery.toLowerCase()}.`}
          stats={[
            { label: "Format", value: course.format },
            { label: "Duration", value: course.duration },
            { label: "Delivery", value: course.delivery },
            { label: "Status", value: course.status },
          ]}
          syllabusTitle="Session format"
          emptySyllabusNote={`Delivered as a single ${course.format.toLowerCase()} session (${course.duration}), ${course.delivery.toLowerCase()}.`}
          audience={course.audience}
          related={relatedRefs(course.topics, { kind: "courses", slug })}
        />
      </main>
      <ContactBar />
      <Footer />
    </div>
  );
}
