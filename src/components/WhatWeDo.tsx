import { OrbitIcon, TreeIcon } from "./icons";

function StepPyramid({ label }: { label: string }) {
  const widths = [34, 46, 58, 70, 82, 94];
  return (
    <div className="mt-8 flex flex-col items-center gap-4">
      <div className="flex w-full flex-col items-center gap-1">
        {widths.map((w, i) => (
          <div
            key={i}
            className="h-2 rounded-[2px] bg-gradient-to-r from-teal-500/25 via-teal-400/60 to-teal-500/25"
            style={{ width: `${w}%` }}
          />
        ))}
      </div>
      <p className="eyebrow text-[0.68rem] text-teal-300/90">{label}</p>
    </div>
  );
}

const CARDS = [
  {
    icon: OrbitIcon,
    title: "Technology Adoption",
    label: "Databricks",
    description:
      "Through the ADOPT method, we take your team from vendor licensing to business value, on the platforms you've already invested in.",
  },
  {
    icon: TreeIcon,
    title: "Skills Development",
    label: "Data Governance",
    description:
      "Skill workshops to career bootcamps: practical training that takes people from individual productivity to team capability.",
  },
];

export function WhatWeDo() {
  return (
    <section className="section-pad bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow">What We Do</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-[var(--foreground)] sm:text-4xl">
          Technology adoption and skills development,{" "}
          <span className="text-teal-500">from the practitioners in the field today.</span>
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {CARDS.map(({ icon: Icon, title, label, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-[var(--navy-900)] p-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-teal-400/40 text-teal-300">
                <Icon width={20} height={20} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>

              <StepPyramid label={label} />

              <p className="mt-7 text-sm leading-relaxed text-ink-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
