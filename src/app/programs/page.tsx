import { Suspense } from "react";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactBar } from "@/components/ContactBar";
import { ProgramsCatalog } from "@/components/ProgramsCatalog";

export const metadata: Metadata = {
  title: "Programs Catalog — maaloomatiia",
  description:
    "Browse every maaloomatiia program: AI briefings, Data Engineering and AI Engineering bootcamps, Advanced Analytics, and cross-track electives.",
};

export default function ProgramsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1 bg-white">
        <Suspense>
          <ProgramsCatalog />
        </Suspense>
      </main>
      <ContactBar />
      <Footer />
    </div>
  );
}
