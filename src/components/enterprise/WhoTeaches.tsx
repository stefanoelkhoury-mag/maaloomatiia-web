import { BuildingIcon, GlobeIcon, LandmarkIcon } from "../icons";

const SECTORS = [
  { icon: BuildingIcon, label: "Banks" },
  { icon: LandmarkIcon, label: "Government bodies" },
  { icon: GlobeIcon, label: "Telecom operators" },
];

function ProofPanel() {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[var(--navy-900)] p-8 sm:p-10">
      <div>
        <span className="rounded-full border border-teal-400/40 px-3.5 py-1.5 text-xs font-medium text-teal-300">Part of MDS Group</span>
        <p className="mt-6 text-4xl font-semibold text-white sm:text-5xl">10+ years</p>
        <p className="mt-1.5 text-sm text-ink-300">of delivery across the GCC.</p>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6">
        <p className="text-xs font-medium uppercase tracking-wide text-ink-500">Who they&apos;ve built for</p>
        <div className="mt-4 flex flex-col gap-3.5">
          {SECTORS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-teal-300">
                <Icon width={16} height={16} />
              </span>
              <span className="text-sm text-white">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const DELIVERY_FACTS = [
  { label: "Languages", value: "Arabic & English" },
  { label: "Delivery modes", value: "On-site, virtual, or hybrid" },
  { label: "Regional hubs", value: "KSA, UAE, Qatar, Lebanon" },
];

export function WhoTeaches() {
  return (
    <section className="section-pad bg-[var(--navy-950)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <ProofPanel />

          <div>
            <p className="eyebrow">Who Teaches</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Taught by the people <span className="text-teal-400">who do the work.</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ink-300 sm:text-base">
              Our core instructors come from Magnoos, MDS Group&apos;s Data &amp; AI consultancy — the same people
              who design, deploy, and operate these platforms for banks, government bodies, and telecom operators
              across MENA. maaloomatiia is where they teach.
            </p>

            <dl className="mt-8 grid grid-cols-1 gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
              {DELIVERY_FACTS.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs font-medium uppercase tracking-wide text-ink-500">{fact.label}</dt>
                  <dd className="mt-1.5 text-sm font-medium text-white">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
