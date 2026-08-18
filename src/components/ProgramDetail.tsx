import Link from "next/link";
import { detailHref, KIND_TAB, type CatalogRef, type ItemKind } from "@/lib/catalog";
import { ArrowRightIcon } from "./icons";

function hexToRgba(hex: string, alpha: number) {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export interface DetailStat {
  label: string;
  value: string;
}

export interface SyllabusItem {
  name: string;
  meta?: string;
}

export interface ProgramDetailProps {
  kind: ItemKind;
  kindLabel: string;
  accentColor: string;
  name: string;
  description: string;
  stats: DetailStat[];
  syllabusTitle: string;
  syllabusNote?: string;
  syllabusItems?: SyllabusItem[];
  emptySyllabusNote?: string;
  audience?: string;
  related: CatalogRef[];
}

export function ProgramDetail({
  kind,
  kindLabel,
  accentColor,
  name,
  description,
  stats,
  syllabusTitle,
  syllabusNote,
  syllabusItems,
  emptySyllabusNote,
  audience,
  related,
}: ProgramDetailProps) {
  const { tab, label: tabLabel } = KIND_TAB[kind];

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <nav className="flex flex-wrap items-center gap-1.5 text-xs text-ink-500">
        <Link href="/programs" className="hover:text-teal-600">
          Programs
        </Link>
        <span aria-hidden>/</span>
        <Link href={`/programs?tab=${tab}`} className="hover:text-teal-600">
          {tabLabel}
        </Link>
        <span aria-hidden>/</span>
        <span className="text-[var(--foreground)]">{name}</span>
      </nav>

      <div className="mt-6 rounded-2xl p-8" style={{ background: hexToRgba(accentColor, 0.08) }}>
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide" style={{ color: accentColor }}>
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: accentColor }} />
          {kindLabel}
        </span>
        <h1 className="mt-3 text-3xl font-semibold leading-tight text-[var(--foreground)] sm:text-4xl">{name}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-500 sm:text-base">{description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {stats.map((s) => (
            <span key={s.label} className="rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-xs text-ink-500">
              <span className="font-semibold text-[var(--foreground)]">{s.value}</span> {s.label}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/#reach-out" className="rounded-full bg-teal-400 px-6 py-2.5 text-sm font-semibold text-[var(--navy-950)] transition hover:bg-teal-300">
            Talk to Us
          </Link>
          <Link href={`/programs?tab=${tab}`} className="rounded-full border border-black/15 px-6 py-2.5 text-sm font-medium text-[var(--foreground)] transition hover:border-black/30">
            Back to {tabLabel}
          </Link>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_280px]">
        <div>
          <section>
            <h2 className="text-xl font-semibold text-[var(--foreground)]">{syllabusTitle}</h2>
            {syllabusNote && <p className="mt-2 text-sm leading-relaxed text-ink-500">{syllabusNote}</p>}

            {syllabusItems && syllabusItems.length > 0 ? (
              <ol className="mt-4 flex flex-col gap-2">
                {syllabusItems.map((item, i) => (
                  <li key={item.name} className="flex items-center justify-between gap-4 rounded-xl border border-black/10 px-4 py-3 text-sm">
                    <span className="text-[var(--foreground)]">
                      <span className="mr-2 text-ink-500">{i + 1}.</span>
                      {item.name}
                    </span>
                    {item.meta && <span className="shrink-0 text-xs text-ink-500">{item.meta}</span>}
                  </li>
                ))}
              </ol>
            ) : (
              emptySyllabusNote && (
                <p className="mt-4 rounded-xl border border-dashed border-black/15 px-4 py-4 text-sm text-ink-500">{emptySyllabusNote}</p>
              )
            )}
          </section>

          {audience && (
            <section className="mt-10">
              <h2 className="text-xl font-semibold text-[var(--foreground)]">Who it&apos;s for</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{audience}</p>
            </section>
          )}
        </div>

        <aside className="h-fit rounded-2xl border border-black/10 p-6 lg:sticky lg:top-24">
          <p className="text-sm font-semibold text-[var(--foreground)]">At a glance</p>
          <dl className="mt-4 flex flex-col gap-3">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center justify-between gap-3 text-sm">
                <dt className="text-ink-500">{s.label}</dt>
                <dd className="font-medium text-[var(--foreground)]">{s.value}</dd>
              </div>
            ))}
          </dl>
          <Link
            href="/#reach-out"
            className="mt-5 block w-full rounded-full bg-teal-400 py-2.5 text-center text-sm font-semibold text-[var(--navy-950)] transition hover:bg-teal-300"
          >
            Talk to Us
          </Link>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="mt-14 border-t border-black/10 pt-10">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">Related programs</h2>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={`${r.kind}-${r.slug}`}
                href={detailHref(r.kind, r.slug)}
                className="flex flex-col rounded-xl border border-black/10 p-5 transition hover:border-teal-400/50"
              >
                <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: r.color }}>
                  {KIND_TAB[r.kind].label.replace(/s$/, "")}
                </span>
                <span className="mt-2 text-sm font-semibold text-[var(--foreground)]">{r.name}</span>
                <span className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-teal-600">
                  View details <ArrowRightIcon />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
