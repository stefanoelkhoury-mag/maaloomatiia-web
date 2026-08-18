"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  CATEGORIES,
  CATEGORY_META,
  PROGRAMS,
  type Delivery,
  type Program,
  type ProgramCategory,
  type ProgramFormat,
} from "@/data/programs";

const FORMATS: ProgramFormat[] = ["Bootcamp", "Briefing", "Series", "Sprint"];
const DELIVERIES: Delivery[] = ["Hybrid", "Virtual", "In-person"];

function toggle<T>(set: Set<T>, value: T): Set<T> {
  const next = new Set(set);
  if (next.has(value)) next.delete(value);
  else next.add(value);
  return next;
}

function FilterGroup<T extends string>({
  title,
  options,
  counts,
  active,
  onToggle,
}: {
  title: string;
  options: T[];
  counts: Record<string, number>;
  active: Set<T>;
  onToggle: (value: T) => void;
}) {
  return (
    <div className="border-b border-black/10 py-5 first:pt-0 last:border-0">
      <p className="text-sm font-semibold text-[var(--foreground)]">{title}</p>
      <div className="mt-3 flex flex-col gap-2.5">
        {options.map((opt) => (
          <label key={opt} className="flex cursor-pointer items-center justify-between gap-2 text-sm">
            <span className="flex items-center gap-2.5">
              <input
                type="checkbox"
                checked={active.has(opt)}
                onChange={() => onToggle(opt)}
                className="h-4 w-4 accent-teal-500"
              />
              <span className={active.has(opt) ? "text-[var(--foreground)]" : "text-ink-500"}>{opt}</span>
            </span>
            <span className="text-xs text-ink-500">{counts[opt] ?? 0}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

function ProgramCard({ program }: { program: Program }) {
  const meta = CATEGORY_META[program.category];
  return (
    <div className="flex flex-col rounded-2xl border border-black/10 bg-white p-6 transition hover:border-teal-400/50 hover:shadow-[0_16px_40px_-24px_rgba(11,18,32,0.35)]">
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide" style={{ color: meta.color }}>
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: meta.color }} />
          {program.category}
        </span>
        {program.status === "In development" && (
          <span className="shrink-0 rounded-full bg-black/5 px-2.5 py-1 text-[0.65rem] font-medium text-ink-500">
            Coming Soon
          </span>
        )}
      </div>

      <h3 className="mt-3 text-base font-semibold leading-snug text-[var(--foreground)]">{program.name}</h3>

      <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink-500">
        <span>{program.format}</span>
        <span aria-hidden>·</span>
        <span>{program.delivery}</span>
        <span aria-hidden>·</span>
        <span>{program.duration}</span>
      </div>

      <p className="mt-3 text-xs text-ink-500">For {program.audience.toLowerCase()}</p>

      <Link
        href="/#reach-out"
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 transition hover:text-teal-500"
      >
        Talk to Us
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 8h11.5M9 3.5 13.5 8 9 12.5" />
        </svg>
      </Link>
    </div>
  );
}

export function ProgramsCatalog() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") as ProgramCategory | null;

  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState<Set<ProgramCategory>>(
    new Set(initialCategory && CATEGORIES.includes(initialCategory) ? [initialCategory] : []),
  );
  const [formats, setFormats] = useState<Set<ProgramFormat>>(new Set());
  const [deliveries, setDeliveries] = useState<Set<Delivery>>(new Set());

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROGRAMS.filter((p) => {
      if (q && !p.name.toLowerCase().includes(q)) return false;
      if (categories.size && !categories.has(p.category)) return false;
      if (formats.size && !formats.has(p.format)) return false;
      if (deliveries.size && !deliveries.has(p.delivery)) return false;
      return true;
    });
  }, [query, categories, formats, deliveries]);

  const counts = useMemo(() => {
    const byCategory: Record<string, number> = {};
    const byFormat: Record<string, number> = {};
    const byDelivery: Record<string, number> = {};
    for (const p of PROGRAMS) {
      byCategory[p.category] = (byCategory[p.category] ?? 0) + 1;
      byFormat[p.format] = (byFormat[p.format] ?? 0) + 1;
      byDelivery[p.delivery] = (byDelivery[p.delivery] ?? 0) + 1;
    }
    return { byCategory, byFormat, byDelivery };
  }, []);

  const activeFilterCount = categories.size + formats.size + deliveries.size;

  function clearAll() {
    setCategories(new Set());
    setFormats(new Set());
    setDeliveries(new Set());
    setQuery("");
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="flex flex-col gap-2">
        <p className="eyebrow" style={{ color: "var(--teal-500)" }}>
          Programs Catalog
        </p>
        <h1 className="max-w-2xl text-3xl font-semibold leading-tight text-[var(--foreground)] sm:text-4xl">
          Every program the academy runs, in one place.
        </h1>
        <p className="mt-1 max-w-2xl text-sm leading-relaxed text-ink-500 sm:text-base">
          Filter by track, format, or delivery mode to find the right fit for your team.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[240px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-[var(--foreground)]">Filters</p>
            {activeFilterCount > 0 && (
              <button onClick={clearAll} className="text-xs font-medium text-teal-600 hover:text-teal-500">
                Clear all
              </button>
            )}
          </div>
          <div className="mt-2">
            <FilterGroup
              title="Track"
              options={CATEGORIES}
              counts={counts.byCategory}
              active={categories}
              onToggle={(v) => setCategories((s) => toggle(s, v))}
            />
            <FilterGroup
              title="Format"
              options={FORMATS}
              counts={counts.byFormat}
              active={formats}
              onToggle={(v) => setFormats((s) => toggle(s, v))}
            />
            <FilterGroup
              title="Delivery"
              options={DELIVERIES}
              counts={counts.byDelivery}
              active={deliveries}
              onToggle={(v) => setDeliveries((s) => toggle(s, v))}
            />
          </div>
        </aside>

        <div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-sm">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-500"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search programs..."
                className="w-full rounded-full border border-black/10 bg-black/[0.02] py-2.5 pl-10 pr-4 text-sm text-[var(--foreground)] outline-none transition focus:border-teal-400 focus:bg-white"
              />
            </div>
            <p className="text-sm text-ink-500">
              {filtered.length} of {PROGRAMS.length} programs
            </p>
          </div>

          {filtered.length > 0 ? (
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((program) => (
                <ProgramCard key={program.name} program={program} />
              ))}
            </div>
          ) : (
            <div className="mt-16 flex flex-col items-center justify-center text-center">
              <p className="text-base font-medium text-[var(--foreground)]">No programs match those filters.</p>
              <button
                onClick={clearAll}
                className="mt-3 rounded-full bg-teal-400 px-5 py-2 text-xs font-semibold text-[var(--navy-950)] transition hover:bg-teal-300"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
