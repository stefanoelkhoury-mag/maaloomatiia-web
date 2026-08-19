import { LinkNodesIcon, MedalIcon, GlobeIcon, SlidersIcon } from "../icons";
import { FeatureGrid } from "../FeatureGrid";

const FEATURES = [
  {
    icon: LinkNodesIcon,
    title: "Practitioners first.",
    description: "Instructors who design, deploy, and operate these systems, then teach them.",
  },
  {
    icon: MedalIcon,
    title: "Real outputs, not just certificates.",
    description: "Teams finish with working artifacts on their own stack, not a slide deck.",
  },
  {
    icon: SlidersIcon,
    title: "Flexible formats.",
    description: "Instructor-led on site, instructor-led virtual, or self-paced — shaped to how your teams work.",
  },
  {
    icon: GlobeIcon,
    title: "MENA-native delivery.",
    description: "Arabic and English, from hubs in KSA, UAE, Qatar, and Lebanon.",
  },
];

export function EnterpriseWhyItWorks() {
  return (
    <section className="section-pad bg-[var(--navy-950)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="eyebrow">Why It Works</p>
          <h2 className="mx-auto mt-4 max-w-xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Why our training <span className="text-teal-400">delivers results.</span>
          </h2>
        </div>

        <div className="mt-14">
          <FeatureGrid features={FEATURES} columns={4} />
        </div>
      </div>
    </section>
  );
}
