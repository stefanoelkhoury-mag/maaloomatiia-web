import { MODULES, CAREER_PATHS, TECH_PROVIDERS } from "@/data/programs";
import { totalHours } from "@/lib/catalog";

const STATS = [
  { value: `${totalHours(MODULES)}+`, label: "hours of mapped curriculum" },
  { value: `${MODULES.length}`, label: "courses mapped to real roles" },
  { value: `${CAREER_PATHS.length}`, label: "career-path bootcamps" },
  { value: `${TECH_PROVIDERS.length}`, label: "platforms with adoption tracks" },
];

export function EnterpriseHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--navy-950)]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-18%] h-[42rem] w-[64rem] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
        style={{
          background: "radial-gradient(closest-side, rgba(69,224,196,0.35), rgba(34,201,173,0.12) 45%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-full"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(69,224,196,0.18), transparent 60%)" }}
      />

      <div className="relative mx-auto max-w-4xl px-6 pb-16 pt-20 text-center sm:pt-24">
        <p className="eyebrow">For Enterprise</p>

        <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl">
          The stack is decided.
          <br />
          <span className="text-teal-400">We train the team that runs it.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-ink-300 sm:text-lg">
          Platform-specific and skills-based training for enterprise teams across MENA, delivered by the
          practitioners who design, deploy, and operate these systems for organizations like yours.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <a
            href="#reach-out"
            className="w-full rounded-full bg-teal-400 px-7 py-3 text-sm font-semibold text-[var(--navy-950)] transition hover:bg-teal-300 sm:w-auto"
          >
            Talk to Us
          </a>
          <a
            href="#adopt-method"
            className="w-full rounded-full border border-white/25 px-7 py-3 text-sm font-medium text-white transition hover:border-white/50 sm:w-auto"
          >
            See the ADOPT Method
          </a>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-6 py-8 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-semibold text-teal-300 sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs leading-snug text-ink-300 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
