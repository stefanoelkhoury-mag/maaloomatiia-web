import Link from "next/link";
import { OrbitIcon, TreeIcon } from "../icons";
import { CAREER_PATHS, COURSES, SKILL_PATH_CATEGORIES, TECH_CATEGORIES, providersFor, trackCount } from "@/data/programs";

function BreakdownBar({ rows, total }: { rows: { label: string; count: number }[]; total: number }) {
  return (
    <div className="mt-7 flex flex-col gap-3">
      {rows.map((row) => (
        <div key={row.label}>
          <div className="flex items-center justify-between text-xs text-ink-300">
            <span>{row.label}</span>
            <span className="font-medium text-white">{row.count}</span>
          </div>
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full bg-teal-400" style={{ width: `${Math.max((row.count / total) * 100, 6)}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

const TECH_ROWS = TECH_CATEGORIES.map((category) => ({ label: category, count: providersFor(category).length }));
const SKILL_ROWS = [
  { label: "Career paths", count: CAREER_PATHS.length },
  { label: "Skill paths", count: SKILL_PATH_CATEGORIES.length },
  { label: "Courses", count: COURSES.length },
];

const PATHS = [
  {
    icon: OrbitIcon,
    title: "Training on the platforms in your stack.",
    description:
      "Adoption tracks scoped to your environment, your data, and the roles that touch it — from first login to advanced administration, across "
      + `${trackCount()} tracks on ${TECH_CATEGORIES.length} platform categories.`,
    rows: TECH_ROWS,
    total: Math.max(...TECH_ROWS.map((r) => r.count)),
    cta: "Browse by technology",
    href: "/programs?tab=technology-tracks",
  },
  {
    icon: TreeIcon,
    title: "Training for the people around the stack.",
    description: "Programs beyond any single platform — bootcamps and skill paths for technical teams, and briefings for the people who lead them.",
    rows: SKILL_ROWS,
    total: Math.max(...SKILL_ROWS.map((r) => r.count)),
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
          {PATHS.map(({ icon: Icon, title, description, rows, total, cta, href }) => (
            <div key={title} className="flex flex-col rounded-2xl border border-white/10 bg-[var(--navy-900)] p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-teal-400/40 text-teal-300">
                <Icon width={20} height={20} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">{description}</p>

              <BreakdownBar rows={rows} total={total} />

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
