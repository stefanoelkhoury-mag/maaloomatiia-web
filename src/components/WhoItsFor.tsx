"use client";

import { useState } from "react";
import { BuildingIcon, TrophyIcon, GradCapIcon, UserIcon } from "./icons";

const AUDIENCES = [
  {
    icon: BuildingIcon,
    title: "For Enterprise",
    description:
      "In-house ownership of the platforms you already pay for, with your team trained in your own environment.",
    cta: "For Enterprise",
  },
  {
    icon: TrophyIcon,
    title: "For National Capability Programs",
    description:
      "Sovereign upskilling initiatives that build local Data & AI talent pipelines at national scale.",
  },
  {
    icon: GradCapIcon,
    title: "For Education Partners",
    description:
      "Curriculum and delivery partnerships that bring practitioner-led training into academic programs.",
  },
  {
    icon: UserIcon,
    title: "For Individuals",
    description:
      "Career bootcamps and certifications for professionals building hands-on Data & AI skills.",
  },
];

function KeyboardArt() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[var(--navy-950)] sm:aspect-[5/6]">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 30% 70%, rgba(69,224,196,0.28), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-6 bottom-8 grid grid-cols-8 gap-1.5 opacity-80 sm:inset-x-10"
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-[3px] bg-white/10"
            style={{
              boxShadow: i % 7 === 0 ? "0 0 10px 1px rgba(69,224,196,0.55)" : undefined,
              background: i % 7 === 0 ? "rgba(69,224,196,0.5)" : undefined,
            }}
          />
        ))}
      </div>
      <div
        aria-hidden
        className="absolute inset-x-10 top-10 h-24 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm sm:inset-x-14"
      />
    </div>
  );
}

export function WhoItsFor() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-pad bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow">Who It&apos;s For</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-[var(--foreground)] sm:text-4xl">
          Training for <span className="text-teal-500">teams, nations, campuses, and careers.</span>
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="flex flex-col gap-3">
            {AUDIENCES.map(({ icon: Icon, title, description, cta }, i) => {
              const open = openIndex === i;
              return (
                <div
                  key={title}
                  className={`overflow-hidden rounded-2xl border transition ${
                    open ? "border-teal-400/40 bg-[var(--navy-900)]" : "border-black/10 bg-white"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    className="flex w-full items-center gap-3.5 px-5 py-4 text-left"
                  >
                    <Icon
                      width={20}
                      height={20}
                      className={open ? "shrink-0 text-teal-300" : "shrink-0 text-ink-500"}
                    />
                    <span
                      className={`text-sm font-medium sm:text-base ${
                        open ? "text-white" : "text-[var(--foreground)]"
                      }`}
                    >
                      {title}
                    </span>
                  </button>
                  {open && (
                    <div className="px-5 pb-6 pl-[3.15rem]">
                      <p className="text-sm leading-relaxed text-ink-300">{description}</p>
                      {cta && (
                        <a
                          href="#reach-out"
                          className="mt-4 inline-block rounded-full bg-teal-400 px-5 py-2 text-xs font-semibold text-[var(--navy-950)] transition hover:bg-teal-300"
                        >
                          {cta}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <KeyboardArt />
        </div>
      </div>
    </section>
  );
}
