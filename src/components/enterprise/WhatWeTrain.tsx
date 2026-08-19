import Link from "next/link";
import { OrbitIcon, TreeIcon } from "../icons";
import { CAREER_PATHS, TECH_PROVIDERS, COURSES } from "@/data/programs";

function StepPyramid({ label }: { label: string }) {
  const widths = [34, 46, 58, 70, 82, 94];
  return (
    <div className="mt-8 flex flex-col items-center gap-4">
      <div className="flex w-full flex-col items-center gap-1">
        {widths.map((w, i) => (
          <div key={i} className="h-2 rounded-[2px] bg-gradient-to-r from-teal-500/25 via-teal-400/60 to-teal-500/25" style={{ width: `${w}%` }} />
        ))}
      </div>
      <p className="eyebrow text-[0.68rem] text-teal-300/90">{label}</p>
    </div>
  );
}

const TECH_EXAMPLES = TECH_PROVIDERS.map((p) => p.name);
const SKILL_EXAMPLES = [...CAREER_PATHS.slice(0, 3).map((p) => p.name), COURSES[1].name];

const PATHS = [
  {
    icon: OrbitIcon,
    title: "Training on the platforms in your stack.",
    label: "Dataiku",
    description:
      "Adoption tracks scoped to your environment, your data, and the roles that touch it — from first login to advanced administration.",
    examples: TECH_EXAMPLES,
    cta: "Browse by technology",
    href: "/programs?tab=technology-tracks",
  },
  {
    icon: TreeIcon,
    title: "Training for the people around the stack.",
    label: "Career & Skill Paths",
    description: "Programs beyond any single platform — bootcamps and skill paths for technical teams, and briefings for the people who lead them.",
    examples: SKILL_EXAMPLES,
    cta: "Browse skills & leadership programs",
    href: "/programs?tab=career-paths",
  },
];

export function WhatWeTrain() {
  return (
    <section className="section-pad bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow">What We Train</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-[var(--foreground)] sm:text-4xl">
          Technology adoption <span className="text-teal-500">and skills development.</span>
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {PATHS.map(({ icon: Icon, title, label, description, examples, cta, href }) => (
            <div key={title} className="flex flex-col rounded-2xl border border-white/10 bg-[var(--navy-900)] p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-teal-400/40 text-teal-300">
                <Icon width={20} height={20} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>

              <StepPyramid label={label} />

              <p className="mt-7 text-sm leading-relaxed text-ink-300">{description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {examples.map((ex) => (
                  <span key={ex} className="rounded-full border border-white/10 px-3 py-1 text-xs text-ink-300">
                    {ex}
                  </span>
                ))}
              </div>

              <Link
                href={href}
                className="mt-7 inline-flex w-fit items-center gap-1.5 rounded-full bg-teal-400 px-5 py-2.5 text-xs font-semibold text-[var(--navy-950)] transition hover:bg-teal-300"
              >
                {cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
