"use client";

import { useState, type FormEvent } from "react";

const DEFAULT_INTERESTS = [
  "Enterprise Training",
  "Higher Education Programs",
  "National Talent Programs",
  "Individual Training",
  "Other",
];

export interface ReachOutProps {
  eyebrow?: string;
  heading?: string;
  highlight?: string;
  intro?: string;
  interests?: string[];
  defaultInterest?: string;
}

export function ReachOut({
  eyebrow = "Reach Out",
  heading = "The first conversation costs nothing.",
  highlight = "The capability gap does.",
  intro = "Tell us who you're training, whether that's a team, a cohort, a workforce, or yourself. We'll point you to the right program in one call.",
  interests = DEFAULT_INTERESTS,
  defaultInterest,
}: ReachOutProps) {
  const [interest, setInterest] = useState(defaultInterest ?? interests[0]);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="reach-out" className="section-pad bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--foreground)] sm:text-4xl">
              {heading} <span className="text-teal-500">{highlight}</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-500 sm:text-base">{intro}</p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_20px_60px_-25px_rgba(11,18,32,0.35)] sm:p-8">
            {submitted ? (
              <div className="flex min-h-[22rem] flex-col items-center justify-center text-center">
                <p className="text-lg font-semibold text-[var(--foreground)]">
                  Thanks — we&apos;ve got it.
                </p>
                <p className="mt-2 max-w-xs text-sm text-ink-500">
                  A member of our team will be in touch shortly to schedule
                  your call.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <p className="mb-3 text-sm font-medium text-[var(--foreground)]">
                    I&apos;m interested in...
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((option) => {
                      const active = option === interest;
                      return (
                        <button
                          type="button"
                          key={option}
                          onClick={() => setInterest(option)}
                          className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                            active
                              ? "bg-teal-400 text-[var(--navy-950)]"
                              : "bg-black/5 text-ink-500 hover:bg-black/10"
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <Field label="Full Name" name="name" required />
                <Field label="Organization" name="organization" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone Number (Optional)" name="phone" type="tel" />

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[var(--foreground)]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full rounded-lg border border-black/10 bg-black/[0.02] px-3.5 py-2.5 text-sm text-[var(--foreground)] outline-none transition focus:border-teal-400 focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-1 w-full rounded-full bg-teal-400 py-3 text-sm font-semibold text-[var(--navy-950)] transition hover:bg-teal-300"
                >
                  Talk to Us
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-[var(--foreground)]">
        {label}
        {required && <span className="text-teal-500"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-black/10 bg-black/[0.02] px-3.5 py-2.5 text-sm text-[var(--foreground)] outline-none transition focus:border-teal-400 focus:bg-white"
      />
    </div>
  );
}
