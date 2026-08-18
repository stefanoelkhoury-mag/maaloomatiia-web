export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--navy-950)]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-18%] h-[42rem] w-[64rem] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(69,224,196,0.35), rgba(34,201,173,0.12) 45%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-full"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(69,224,196,0.18), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 pb-24 pt-20 text-center sm:pt-24">
        <p className="eyebrow">The Practitioner Academy for Data &amp; AI</p>

        <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
          Where <span className="text-teal-400">experts teach</span>
          <br />
          what they practice.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-ink-300 sm:text-lg">
          Our instructors deliver Data &amp; AI systems for banks, government
          bodies, and telecom operators across the region. Here, they train
          the teams that have to run them.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <a
            href="#programs"
            className="w-full rounded-full bg-teal-400 px-7 py-3 text-sm font-semibold text-[var(--navy-950)] transition hover:bg-teal-300 sm:w-auto"
          >
            Find Your Program
          </a>
          <a
            href="#reach-out"
            className="w-full rounded-full border border-white/25 px-7 py-3 text-sm font-medium text-white transition hover:border-white/50 sm:w-auto"
          >
            Talk to Us
          </a>
        </div>
      </div>
    </section>
  );
}
