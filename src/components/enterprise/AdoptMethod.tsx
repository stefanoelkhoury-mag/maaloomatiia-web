"use client";

import { useState } from "react";

const STEPS = [
  {
    letter: "A",
    title: "Assess",
    description: "We scope your stack, your roles, and where the capability gaps actually sit.",
  },
  {
    letter: "D",
    title: "Design",
    description:
      "We map the curriculum to your environment — the platforms you run, the workflows your teams touch, and the outcomes you need.",
  },
  {
    letter: "O",
    title: "Onboard",
    description: "Instructors and cohorts onboard together, working from your data and your use cases from day one.",
  },
  {
    letter: "P",
    title: "Pilot",
    description: "A pilot cohort runs first — real work, real feedback — before the program scales across teams.",
  },
  {
    letter: "T",
    title: "Transfer",
    description: "Ownership transfers to your team: documentation, playbooks, and the confidence to run it without us.",
  },
];

export function AdoptMethod() {
  const [active, setActive] = useState(0);

  return (
    <section id="adopt-method" className="section-pad bg-white">
      <div className="mx-auto max-w-5xl px-6">
        <p className="eyebrow">How an Engagement Runs</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-[var(--foreground)] sm:text-4xl">
          Every engagement follows our <span className="text-teal-500">ADOPT method.</span>
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-500 sm:text-base">
          A five-step framework for technology adoption, customized to your stack and your team at every step.
        </p>

        <div className="mt-12">
          <div className="relative flex justify-between">
            <div aria-hidden className="absolute left-0 right-0 top-6 h-px bg-black/10" />
            {STEPS.map((step, i) => {
              const isActive = i === active;
              const isPast = i < active;
              return (
                <button key={step.letter} onClick={() => setActive(i)} className="relative z-10 flex flex-col items-center gap-3">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold transition sm:h-14 sm:w-14 ${
                      isActive
                        ? "bg-teal-400 text-[var(--navy-950)]"
                        : isPast
                          ? "border-2 border-teal-400 bg-white text-teal-600"
                          : "border-2 border-black/15 bg-white text-ink-500"
                    }`}
                  >
                    {step.letter}
                  </span>
                  <span className={`hidden text-xs font-medium sm:block ${isActive ? "text-[var(--foreground)]" : "text-ink-500"}`}>
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-10 rounded-2xl border border-teal-400/30 bg-teal-400/5 p-7 sm:p-8">
            <p className="eyebrow">
              {STEPS[active].letter} — {STEPS[active].title}
            </p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--foreground)] sm:text-lg">{STEPS[active].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
