import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhatWeDo } from "@/components/WhatWeDo";
import { WhoItsFor } from "@/components/WhoItsFor";
import { WhyItWorks } from "@/components/WhyItWorks";
import { ReachOut } from "@/components/ReachOut";
import { ContactBar } from "@/components/ContactBar";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhatWeDo />
        <WhoItsFor />
        <WhyItWorks />
        <ReachOut />
      </main>
      <ContactBar />
      <Footer />
    </div>
  );
}
