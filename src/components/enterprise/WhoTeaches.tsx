function PractitionerArt() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[var(--navy-950)] sm:aspect-[5/6]">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 70% 55% at 70% 30%, rgba(69,224,196,0.28), transparent 60%)" }}
      />
      <div aria-hidden className="absolute inset-x-10 top-10 flex flex-col gap-2.5">
        <div className="h-2.5 w-3/4 rounded-full bg-white/10" />
        <div className="h-2.5 w-1/2 rounded-full bg-white/10" />
      </div>
      <div aria-hidden className="absolute inset-x-8 bottom-10 grid grid-cols-3 gap-2">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-lg border border-white/10"
            style={
              i === 4
                ? { background: "rgba(69,224,196,0.5)", boxShadow: "0 0 16px 2px rgba(69,224,196,0.5)" }
                : { background: "rgba(255,255,255,0.04)" }
            }
          />
        ))}
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
          <PractitionerArt />

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
