import Link from "next/link";
import { CAREER_PATHS } from "@/data/programs";
import { detailHref, modulesFor, slugify, totalHours, totalWeeks } from "@/lib/catalog";
import { ArrowRightIcon } from "../icons";

const FEATURED_TRACKS = [
  { provider: "Dataiku", track: "Foundation" },
  { provider: "Informatica", track: "Data Governance" },
  { provider: "Alteryx", track: "Advanced" },
];

const FEATURED_PATHS = ["AI Engineering", "Data Engineering", "Data Analytics"];

export function ProgramsPreview() {
  const paths = CAREER_PATHS.filter((p) => FEATURED_PATHS.includes(p.name));

  return (
    <section className="section-pad bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Built On Your Stack</p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-[var(--foreground)] sm:text-4xl">
              A live look at <span className="text-teal-500">what&apos;s already mapped out.</span>
            </h2>
          </div>
          <Link href="/programs" className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-500 sm:flex">
            Explore the full catalog
            <ArrowRightIcon />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_TRACKS.map(({ provider, track }) => {
            const slug = slugify(`${provider}-${track}`);
            return (
              <Link key={slug} href={detailHref("technology-tracks", slug)} className="flex flex-col rounded-2xl border border-black/10 p-6 transition hover:border-teal-400/50">
                <span className="inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-wide text-teal-600">
                  <span className="h-2 w-2 rounded-full bg-teal-500" />
                  {provider}
                </span>
                <h3 className="mt-3 text-base font-semibold text-[var(--foreground)]">{track}</h3>
                <p className="mt-2 text-xs text-ink-500">Technology adoption track</p>
                <span className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-teal-600">
                  View details <ArrowRightIcon />
                </span>
              </Link>
            );
          })}

          {paths.map((path) => {
            const modules = path.moduleCategory ? modulesFor(path.moduleCategory) : [];
            const hasCurriculum = modules.length > 0;
            const slug = slugify(path.name);
            return (
              <Link key={slug} href={detailHref("career-paths", slug)} className="flex flex-col rounded-2xl border border-black/10 p-6 transition hover:border-teal-400/50">
                <span className="inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-wide text-teal-600">
                  <span className="h-2 w-2 rounded-full bg-teal-500" />
                  Career Path
                </span>
                <h3 className="mt-3 text-base font-semibold text-[var(--foreground)]">{path.name}</h3>
                <p className="mt-2 text-xs text-ink-500">
                  {hasCurriculum ? `${totalHours(modules)} hrs · ${totalWeeks(modules)} wks` : "Curriculum in development"}
                </p>
                <span className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-teal-600">
                  View details <ArrowRightIcon />
                </span>
              </Link>
            );
          })}
        </div>

        <Link href="/programs" className="mt-8 flex w-fit items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-500 sm:hidden">
          Explore the full catalog
          <ArrowRightIcon />
        </Link>
      </div>
    </section>
  );
}
