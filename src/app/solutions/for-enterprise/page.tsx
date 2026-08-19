import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactBar } from "@/components/ContactBar";
import { ReachOut } from "@/components/ReachOut";
import { EnterpriseHero } from "@/components/enterprise/EnterpriseHero";
import { WhatWeTrain } from "@/components/enterprise/WhatWeTrain";
import { AdoptMethod } from "@/components/enterprise/AdoptMethod";
import { WhoTeaches } from "@/components/enterprise/WhoTeaches";
import { EnterpriseWhyItWorks } from "@/components/enterprise/EnterpriseWhyItWorks";
import { ProgramsPreview } from "@/components/enterprise/ProgramsPreview";
import { EnterpriseFAQ } from "@/components/enterprise/EnterpriseFAQ";

export const metadata: Metadata = {
  title: "For Enterprise — maaloomatiia",
  description:
    "Platform-specific and skills-based training for enterprise teams across MENA, delivered by the practitioners who design, deploy, and operate these systems — built around our ADOPT method.",
};

export default function ForEnterprisePage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <EnterpriseHero />
        <WhatWeTrain />
        <AdoptMethod />
        <WhoTeaches />
        <EnterpriseWhyItWorks />
        <ProgramsPreview />
        <EnterpriseFAQ />
        <ReachOut
          eyebrow="Reach Out"
          heading="Let's talk about your stack."
          highlight="We'll shape the ADOPT engagement around it."
          intro="Tell us what platforms you're running and who needs to own them. One call gets you a scoped Assess phase."
          interests={["Enterprise Training", "Higher Education Programs", "National Talent Programs", "Individual Training", "Other"]}
          defaultInterest="Enterprise Training"
        />
      </main>
      <ContactBar />
      <Footer />
    </div>
  );
}
