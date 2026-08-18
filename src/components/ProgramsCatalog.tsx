"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  CAREER_PATHS,
  CATEGORY_META,
  COURSES,
  MODULES,
  SKILL_PATH_CATEGORIES,
  SKILL_PATH_TOPICS,
  TECH_PROVIDERS,
  TOPICS,
  modulesFor,
  totalHours,
  totalWeeks,
  type CareerPath,
  type Course,
  type Module,
  type ModuleCategory,
  type TopicId,
} from "@/data/programs";
import { BriefcaseIcon, BookStackIcon, MedalIcon, OpenBookIcon, ChevronDownIcon, GridIcon, ChartBarIcon, TreeIcon, OrbitIcon, GradCapIcon, BuildingIcon, LinkNodesIcon } from "./icons";

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

type TabId = "topics" | "career-paths" | "skill-paths" | "technology-tracks" | "courses";
type ItemType = "Career Path" | "Skill Path" | "Technology Track" | "Course";

const TABS: { id: TabId; label: string; icon: typeof BriefcaseIcon }[] = [
  { id: "topics", label: "Topics", icon: GridIcon },
  { id: "career-paths", label: "Career paths", icon: BriefcaseIcon },
  { id: "skill-paths", label: "Skill paths", icon: BookStackIcon },
  { id: "technology-tracks", label: "Technology tracks", icon: MedalIcon },
  { id: "courses", label: "Courses", icon: OpenBookIcon },
];

const TOPIC_ICON: Record<TopicId, typeof BriefcaseIcon> = {
  "data-engineering": TreeIcon,
  "ai-engineering": OrbitIcon,
  "ai-business": GradCapIcon,
  "analytics-bi": ChartBarIcon,
  "data-governance": BuildingIcon,
  "software-product": BriefcaseIcon,
  "cross-functional": LinkNodesIcon,
};

const TYPES: ItemType[] = ["Career Path", "Skill Path", "Technology Track", "Course"];

function BarsIcon({ className }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className={className}>
      <rect x="1" y="9" width="3" height="6" rx="0.6" fill="currentColor" />
      <rect x="6.5" y="5.5" width="3" height="9.5" rx="0.6" fill="currentColor" />
      <rect x="12" y="1.5" width="3" height="13.5" rx="0.6" fill="currentColor" />
    </svg>
  );
}

function CardShell({ id, highlighted, children }: { id: string; highlighted: boolean; children: React.ReactNode }) {
  return (
    <div
      id={id}
      className={`flex flex-col rounded-2xl border bg-white p-6 transition ${
        highlighted ? "border-teal-400 ring-2 ring-teal-400/30" : "border-black/10 hover:border-teal-400/50"
      }`}
    >
      {children}
    </div>
  );
}

function StatRow({ left, right }: { left: string; right: string }) {
  return (
    <div className="mt-4 flex items-center justify-between gap-3 border-t border-dashed border-black/15 pt-3 text-xs">
      <span className="flex items-center gap-1.5 font-medium text-ink-500">
        <BarsIcon className="text-ink-500" />
        {left}
      </span>
      <span className="text-ink-500">{right}</span>
    </div>
  );
}

function ModuleList({ modules }: { modules: Module[] }) {
  return (
    <ul className="mt-3 flex flex-col gap-2 border-t border-black/10 pt-3">
      {modules.map((m) => (
        <li key={m.name} className="flex items-center justify-between gap-3 text-xs text-ink-500">
          <span className="text-[var(--foreground)]">{m.name}</span>
          <span className="shrink-0">{m.hours} hrs</span>
        </li>
      ))}
    </ul>
  );
}

function TalkToUsLink() {
  return (
    <Link href="/#reach-out" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 transition hover:text-teal-500">
      Talk to Us
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 8h11.5M9 3.5 13.5 8 9 12.5" />
      </svg>
    </Link>
  );
}

function CareerPathCard({ path, highlighted }: { path: CareerPath; highlighted: boolean }) {
  const [open, setOpen] = useState(false);
  const modules = path.moduleCategory ? modulesFor(path.moduleCategory) : [];
  const hasCurriculum = modules.length > 0;

  return (
    <CardShell id={`path-${slugify(path.name)}`} highlighted={highlighted}>
      <span className="inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-wide text-teal-600">
        <span className="h-2 w-2 rounded-full bg-teal-500" />
        Career Path
      </span>
      <h3 className="mt-3 text-base font-semibold leading-snug text-[var(--foreground)]">{path.name}</h3>
      {!hasCurriculum && <p className="mt-2 text-xs text-ink-500">Curriculum in development</p>}

      <StatRow left="Bootcamp" right={hasCurriculum ? `${totalHours(modules)} hrs · ${totalWeeks(modules)} wks` : "Coming Soon"} />

      {hasCurriculum && (
        <>
          <button onClick={() => setOpen((v) => !v)} className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-teal-600 hover:text-teal-500">
            {open ? "Hide curriculum" : `View curriculum (${modules.length} courses)`}
            <ChevronDownIcon className={`transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
          {open && <ModuleList modules={modules} />}
        </>
      )}

      <TalkToUsLink />
    </CardShell>
  );
}

function SkillPathCard({ category, highlighted }: { category: ModuleCategory; highlighted: boolean }) {
  const [open, setOpen] = useState(false);
  const modules = modulesFor(category);
  const meta = CATEGORY_META[category];

  return (
    <CardShell id={`path-${slugify(category)}`} highlighted={highlighted}>
      <span className="inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-wide" style={{ color: meta.color }}>
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: meta.color }} />
        Skill Path
      </span>
      <h3 className="mt-3 text-base font-semibold leading-snug text-[var(--foreground)]">{category}</h3>
      <p className="mt-2 text-xs leading-relaxed text-ink-500">{meta.blurb}</p>

      <StatRow left="Skill Path" right={`${totalHours(modules)} hrs · ${totalWeeks(modules)} wks`} />

      <button onClick={() => setOpen((v) => !v)} className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-teal-600 hover:text-teal-500">
        {open ? "Hide courses" : `View courses (${modules.length})`}
        <ChevronDownIcon className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <ModuleList modules={modules} />}

      <TalkToUsLink />
    </CardShell>
  );
}

function TechTrackCard({ provider, track, highlighted }: { provider: string; track: string; highlighted: boolean }) {
  return (
    <CardShell id={`path-${slugify(provider)}-${slugify(track)}`} highlighted={highlighted}>
      <span className="inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-wide text-teal-600">
        <span className="h-2 w-2 rounded-full bg-teal-500" />
        {provider}
      </span>
      <h3 className="mt-3 text-base font-semibold leading-snug text-[var(--foreground)]">{track}</h3>
      <p className="mt-2 text-xs text-ink-500">Technology adoption track</p>
      <StatRow left="Technology Track" right="Coming Soon" />
      <TalkToUsLink />
    </CardShell>
  );
}

function CourseCard({ course, highlighted }: { course: Course; highlighted: boolean }) {
  return (
    <CardShell id={`path-${slugify(course.name)}`} highlighted={highlighted}>
      <span className="inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-wide" style={{ color: CATEGORY_META.AI.color }}>
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: CATEGORY_META.AI.color }} />
        Course
      </span>
      <h3 className="mt-3 text-base font-semibold leading-snug text-[var(--foreground)]">{course.name}</h3>
      <p className="mt-2 text-xs text-ink-500">For {course.audience.toLowerCase()}</p>
      <StatRow left={course.format} right={`${course.delivery} · ${course.duration}`} />
      <TalkToUsLink />
    </CardShell>
  );
}

const TAB_COPY: Record<TabId, { title: string; description: string }> = {
  topics: {
    title: "Topics",
    description: "Browse the full catalog by subject — every career path, skill path, technology track, and course in one place.",
  },
  "career-paths": {
    title: "Career paths",
    description:
      "Multi-week bootcamps that take a team from fundamentals to a deployed, portfolio-ready outcome — each one maps to a role your organization is hiring for.",
  },
  "skill-paths": {
    title: "Skill paths",
    description: "Focused course bundles that build one specific capability, without the full bootcamp commitment.",
  },
  "technology-tracks": {
    title: "Technology tracks",
    description: "Technology-adoption training on the platforms your team has already licensed — from onboarding through advanced administration.",
  },
  courses: {
    title: "Courses",
    description: "Single-session briefings and light programs for teams that want AI fluency without a multi-week commitment.",
  },
};

interface FlatItem {
  key: string;
  type: ItemType;
  topics: TopicId[];
  render: (highlighted: boolean) => React.ReactNode;
}

function useCatalogItems(): FlatItem[] {
  return useMemo(() => {
    const items: FlatItem[] = [];

    for (const path of CAREER_PATHS) {
      items.push({
        key: `career-${path.name}`,
        type: "Career Path",
        topics: path.topics,
        render: (highlighted) => <CareerPathCard key={path.name} path={path} highlighted={highlighted} />,
      });
    }

    for (const category of SKILL_PATH_CATEGORIES) {
      items.push({
        key: `skill-${category}`,
        type: "Skill Path",
        topics: SKILL_PATH_TOPICS[category],
        render: (highlighted) => <SkillPathCard key={category} category={category} highlighted={highlighted} />,
      });
    }

    for (const provider of TECH_PROVIDERS) {
      for (const track of provider.tracks) {
        items.push({
          key: `tech-${provider.name}-${track.name}`,
          type: "Technology Track",
          topics: track.topics,
          render: (highlighted) => (
            <TechTrackCard key={`${provider.name}-${track.name}`} provider={provider.name} track={track.name} highlighted={highlighted} />
          ),
        });
      }
    }

    for (const course of COURSES) {
      items.push({
        key: `course-${course.name}`,
        type: "Course",
        topics: course.topics,
        render: (highlighted) => <CourseCard key={course.name} course={course} highlighted={highlighted} />,
      });
    }

    return items;
  }, []);
}

function TopicsBrowser({ items }: { items: FlatItem[] }) {
  const [selectedTopic, setSelectedTopic] = useState<TopicId | null>(null);
  const [typeFilter, setTypeFilter] = useState<Set<ItemType>>(new Set());

  if (!selectedTopic) {
    return (
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {TOPICS.map((topic) => {
          const Icon = TOPIC_ICON[topic.id];
          const count = items.filter((i) => i.topics.includes(topic.id)).length;
          return (
            <button
              key={topic.id}
              onClick={() => setSelectedTopic(topic.id)}
              className="flex items-center gap-4 rounded-xl border border-black/10 px-5 py-4 text-left transition hover:border-teal-400/50 hover:bg-teal-400/5"
            >
              <Icon width={22} height={22} className="shrink-0 text-teal-600" />
              <span className="flex-1">
                <span className="block text-sm font-semibold text-[var(--foreground)]">{topic.name}</span>
                <span className="block text-xs text-ink-500">{topic.blurb}</span>
              </span>
              <span className="shrink-0 text-xs text-ink-500">{count}</span>
            </button>
          );
        })}
      </div>
    );
  }

  const topic = TOPICS.find((t) => t.id === selectedTopic)!;
  const topicItems = items.filter((i) => i.topics.includes(selectedTopic));
  const filtered = typeFilter.size ? topicItems.filter((i) => typeFilter.has(i.type)) : topicItems;

  const typeCounts: Record<string, number> = {};
  for (const i of topicItems) typeCounts[i.type] = (typeCounts[i.type] ?? 0) + 1;

  function toggleType(t: ItemType) {
    setTypeFilter((prev) => {
      const next = new Set(prev);
      if (next.has(t)) next.delete(t);
      else next.add(t);
      return next;
    });
  }

  return (
    <div className="mt-6">
      <button
        onClick={() => {
          setSelectedTopic(null);
          setTypeFilter(new Set());
        }}
        className="flex items-center gap-1.5 text-sm font-medium text-teal-600 hover:text-teal-500"
      >
        <ChevronDownIcon className="rotate-90" />
        All topics
      </button>

      <div className="mt-4 flex items-center justify-between gap-3">
        <h3 className="text-xl font-semibold text-[var(--foreground)]">{topic.name}</h3>
        <p className="text-sm text-ink-500">
          {filtered.length} of {topicItems.length}
        </p>
      </div>
      <p className="mt-1 text-sm text-ink-500">{topic.blurb}</p>

      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[200px_1fr]">
        <aside>
          <p className="text-sm font-semibold text-[var(--foreground)]">Type</p>
          <div className="mt-3 flex flex-col gap-2.5">
            {TYPES.filter((t) => typeCounts[t]).map((t) => (
              <label key={t} className="flex cursor-pointer items-center justify-between gap-2 text-sm">
                <span className="flex items-center gap-2.5">
                  <input type="checkbox" checked={typeFilter.has(t)} onChange={() => toggleType(t)} className="h-4 w-4 accent-teal-500" />
                  <span className={typeFilter.has(t) ? "text-[var(--foreground)]" : "text-ink-500"}>{t}</span>
                </span>
                <span className="text-xs text-ink-500">{typeCounts[t]}</span>
              </label>
            ))}
          </div>
        </aside>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {filtered.map((item) => item.render(false))}
        </div>
      </div>
    </div>
  );
}

export function ProgramsCatalog() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab") as TabId | null;
  const highlight = searchParams.get("highlight");
  const items = useCatalogItems();

  const [activeTab, setActiveTab] = useState<TabId>(tabParam && TABS.some((t) => t.id === tabParam) ? tabParam : "career-paths");

  useEffect(() => {
    if (highlight) {
      const el = document.getElementById(`path-${slugify(highlight)}`);
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [highlight, activeTab]);

  const counts = useMemo(
    () => ({
      topics: TOPICS.length,
      "career-paths": CAREER_PATHS.length,
      "skill-paths": SKILL_PATH_CATEGORIES.length,
      "technology-tracks": TECH_PROVIDERS.reduce((n, p) => n + p.tracks.length, 0),
      courses: COURSES.length,
    }),
    [],
  );

  const totalModuleHours = useMemo(() => totalHours(MODULES), []);

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <Link
        href="/programs?tab=topics"
        className="flex items-center justify-between gap-4 rounded-2xl px-5 py-3.5 text-sm text-white shadow-lg"
        style={{ background: "linear-gradient(100deg, var(--navy-950) 0%, var(--navy-700) 55%, var(--teal-600) 140%)" }}
      >
        <span className="flex items-center gap-3">
          <span className="rounded-full bg-teal-400 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-[var(--navy-950)]">New</span>
          <span>Browse the full catalog by topic — career paths, skill paths, and technology tracks side by side.</span>
        </span>
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
          <path d="M2 8h11.5M9 3.5 13.5 8 9 12.5" />
        </svg>
      </Link>

      <div className="mt-8 flex flex-col gap-2">
        <p className="eyebrow" style={{ color: "var(--teal-500)" }}>
          Programs Catalog
        </p>
        <h1 className="max-w-2xl text-3xl font-semibold leading-tight text-[var(--foreground)] sm:text-4xl">
          Every program the academy runs, in one place.
        </h1>
        <p className="mt-1 max-w-2xl text-sm leading-relaxed text-ink-500 sm:text-base">
          {CAREER_PATHS.length} career paths, {SKILL_PATH_CATEGORIES.length} skill paths, {counts["technology-tracks"]} technology
          tracks, and {COURSES.length} courses — built from {MODULES.length} mapped modules totaling {totalModuleHours}+ hours.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr]">
        <nav className="flex gap-2 overflow-x-auto pb-2 lg:sticky lg:top-24 lg:flex-col lg:self-start lg:overflow-visible lg:pb-0">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex shrink-0 items-center justify-between gap-3 rounded-xl px-3.5 py-3 text-left text-sm transition ${
                  active ? "bg-teal-400/10 font-semibold text-teal-600" : "text-ink-500 hover:bg-black/[0.03] hover:text-[var(--foreground)]"
                }`}
              >
                <span className="flex items-center gap-3">
                  <Icon width={20} height={20} className={active ? "text-teal-600" : "text-ink-500"} />
                  <span className="whitespace-nowrap">{tab.label}</span>
                </span>
                <span className={`hidden text-xs lg:inline ${active ? "text-teal-600" : "text-ink-500"}`}>{counts[tab.id]}</span>
              </button>
            );
          })}
        </nav>

        <div>
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">{TAB_COPY[activeTab].title}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-500">{TAB_COPY[activeTab].description}</p>

          {activeTab === "topics" && <TopicsBrowser items={items} />}

          {activeTab === "career-paths" && (
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {CAREER_PATHS.map((path) => (
                <CareerPathCard key={path.name} path={path} highlighted={highlight === path.name} />
              ))}
            </div>
          )}

          {activeTab === "skill-paths" && (
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {SKILL_PATH_CATEGORIES.map((category) => (
                <SkillPathCard key={category} category={category} highlighted={highlight === category} />
              ))}
            </div>
          )}

          {activeTab === "technology-tracks" && (
            <>
              <p className="mt-8 text-sm font-semibold text-[var(--foreground)]">Providers</p>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {TECH_PROVIDERS.map((provider) => (
                  <div key={provider.name} className="flex items-center justify-center rounded-xl border border-black/10 px-4 py-5 text-base font-bold tracking-tight text-[var(--foreground)]">
                    {provider.name}
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {TECH_PROVIDERS.flatMap((provider) =>
                  provider.tracks.map((track) => (
                    <TechTrackCard
                      key={`${provider.name}-${track.name}`}
                      provider={provider.name}
                      track={track.name}
                      highlighted={highlight === `${provider.name} ${track.name}`}
                    />
                  )),
                )}
              </div>
            </>
          )}

          {activeTab === "courses" && (
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {COURSES.map((course) => (
                <CourseCard key={course.name} course={course} highlighted={highlight === course.name} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
