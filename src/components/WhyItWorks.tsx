import { LinkNodesIcon, MedalIcon, GlobeIcon } from "./icons";
import { FeatureGrid } from "./FeatureGrid";

const FEATURES = [
  {
    icon: LinkNodesIcon,
    title: "Taught by practitioners.",
    description:
      "Our core instructors are engineers, architects, and consultants who teach what they've shipped.",
  },
  {
    icon: MedalIcon,
    title: "Real outputs, not just certificates.",
    description:
      "Every program ends with something that works: a deployed app, a production pipeline, a live use case.",
  },
  {
    icon: GlobeIcon,
    title: "MENA-native, in two languages.",
    description: "Flexible delivery across the region in Arabic and English. On site or live online.",
  },
];

const PARTNERS = ["Informatica", "Cloudera", "Alteryx", "DataRobot", "Dataiku", "Microsoft"];

export function WhyItWorks() {
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
          <FeatureGrid features={FEATURES} />
        </div>

        <div className="mt-24 text-center">
          <p className="eyebrow">The Track Record</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
            More than a decade of delivery{" "}
            <span className="text-teal-400">stands behind every program.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-ink-300 sm:text-base">
            maaloomatiia is part of MDS Group. Our instructors come from
            Magnoos, the group&apos;s Data &amp; AI consultancy, the same
            people who deploy these systems across the GCC. maaloomatiia is
            where they teach.
          </p>

          <div className="mt-8 flex justify-center">
            <span className="rounded-full border border-teal-400/40 px-5 py-2 text-xs font-medium text-teal-300">
              Platform Partnerships
            </span>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {PARTNERS.map((name) => (
              <span
                key={name}
                className="text-sm font-medium tracking-wide text-white/50 transition hover:text-white/80"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
