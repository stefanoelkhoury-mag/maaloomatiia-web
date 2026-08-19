"use client";

import { useState } from "react";
import Link from "next/link";
import { OrbitIcon, TreeIcon, ArrowRightIcon } from "../icons";
import { CAREER_PATHS, COURSES, SKILL_PATH_CATEGORIES, TECH_CATEGORIES, providersFor, trackCount } from "@/data/programs";

const TECH_ROWS = TECH_CATEGORIES.map((category) => ({ label: category, count: providersFor(category).length }));
const SKILL_ROWS = [
  { label: "Career paths", count: CAREER_PATHS.length },
  { label: "Skill paths", count: SKILL_PATH_CATEGORIES.length },
  { label: "Courses", count: COURSES.length },
];

const LANES = [
  {
    id: "platforms",
    icon: OrbitIcon,
    navLabel: "Platforms",
    navStat: `${trackCount()} tracks`,
    title: "Training on the platforms in your stack.",
    description:
      "Adoption tracks scoped to your environment, your data, and the roles that touch it — from first login to advanced administration, " +
      `across ${trackCount()} tracks on ${TECH_CATEGORIES.length} platform categories.`,
    rows: TECH_ROWS,
    cta: "Browse by technology",
    href: "/programs?tab=technology-tracks",
  },
  {
    id: "people",
    icon: TreeIcon,
    navLabel: "People",
    navStat: `${CAREER_PATHS.length + SKILL_PATH_CATEGORIES.length + COURSES.length} programs`,
    title: "Training for the people around the stack.",
    description:
      "Programs beyond any single platform — bootcamps and skill paths for technical teams, and briefings for the people who lead them.",
    rows: SKILL_ROWS,
    cta: "Browse skills & leadership programs",
    href: "/programs?tab=career-paths",
  },
];

export function WhatWeTrain() {
  const [activeId, setActiveId] = useState(LANES[0].id);
  const active = LANES.find((l) => l.id === activeId)!;
  const total = Math.max(...active.rows.map((r) => r.count));

  return (
    <section className="section-pad bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow">What We Train</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-[var(--foreground)] sm:text-4xl">
          Technology adoption <span className="text-teal-500">and skills development.</span>
        </h2>

        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[var(--navy-900)] lg:grid lg:grid-cols-[240px_1fr]">
          <div className="flex gap-2 overflow-x-auto border-b border-white/10 p-3 lg:flex-col lg:gap-1.5 lg:overflow-visible lg:border-b-0 lg:border-r lg:p-4">
            {LANES.map((lane) => {
              const Icon = lane.icon;
              const isActive = lane.id === activeId;
              return (
                <button
                  key={lane.id}
                  onClick={() => setActiveId(lane.id)}
                  className={`flex shrink-0 items-center gap-3 rounded-xl px-4 py-3.5 text-left transition ${
                    isActive ? "bg-teal-400/10" : "hover:bg-white/5"
                  }`}
                >
                  <Icon width={18} height={18} className={isActive ? "text-teal-300" : "text-ink-500"} />
                  <span>
                    <span className={`block text-sm font-medium ${isActive ? "text-white" : "text-ink-300"}`}>{lane.navLabel}</span>
                    <span className="block text-xs text-ink-500">{lane.navStat}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="p-8 sm:p-10">
            <h3 className="text-lg font-semibold text-white sm:text-xl">{active.title}</h3>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-300">{active.description}</p>

            <div className="mt-7 flex flex-col gap-3">
              {active.rows.map((row) => (
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

            <Link
              href={active.href}
              className="mt-8 inline-flex w-fit items-center gap-1.5 rounded-full bg-teal-400 px-5 py-2.5 text-xs font-semibold text-[var(--navy-950)] transition hover:bg-teal-300"
            >
              {active.cta}
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
