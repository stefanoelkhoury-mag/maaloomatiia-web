import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactBar } from "@/components/ContactBar";
import { ProgramDetail } from "@/components/ProgramDetail";
import { TECH_PROVIDERS } from "@/data/programs";
import { findTechTrack, relatedRefs, slugify } from "@/lib/catalog";

export function generateStaticParams() {
  return TECH_PROVIDERS.flatMap((provider) => provider.tracks.map((track) => ({ slug: slugify(`${provider.name}-${track.name}`) })));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const track = findTechTrack(slug);
  if (!track) return {};
  return {
    title: `${track.provider} ${track.track} — maaloomatiia`,
    description: `${track.provider} ${track.track} technology-adoption track at maaloomatiia.`,
  };
}

export default async function TechTrackPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const track = findTechTrack(slug);
  if (!track) notFound();

  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1 bg-white">
        <ProgramDetail
          kind="technology-tracks"
          kindLabel={track.provider}
          accentColor="#22c9ad"
          name={`${track.provider} ${track.track}`}
          description={`A technology-adoption track on ${track.provider}, ${track.track.toLowerCase()} level — for teams taking ownership of a platform they've already licensed.`}
          stats={[
            { label: "Format", value: "Technology Track" },
            { label: "Provider", value: track.provider },
            { label: "Level", value: track.track },
            { label: "Status", value: "Coming Soon" },
          ]}
          syllabusTitle="What this track covers"
          emptySyllabusNote={`Full curriculum for this track is in development. Talk to us about your ${track.provider} rollout timeline.`}
          related={relatedRefs(track.topics, { kind: "technology-tracks", slug })}
        />
      </main>
      <ContactBar />
      <Footer />
    </div>
  );
}
