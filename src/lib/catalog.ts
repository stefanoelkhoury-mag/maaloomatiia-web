import {
  CAREER_PATHS,
  CATEGORY_META,
  COURSES,
  SKILL_PATH_CATEGORIES,
  SKILL_PATH_TOPICS,
  TECH_PROVIDERS,
  TOPICS,
  modulesFor,
  totalHours,
  totalWeeks,
  type CareerPath,
  type Course,
  type ModuleCategory,
  type TopicId,
} from "@/data/programs";

export type ItemKind = "career-paths" | "skill-paths" | "technology-tracks" | "courses";

export const KIND_LABEL: Record<ItemKind, string> = {
  "career-paths": "Career Path",
  "skill-paths": "Skill Path",
  "technology-tracks": "Technology Track",
  courses: "Course",
};

export const KIND_TAB: Record<ItemKind, { tab: string; label: string }> = {
  "career-paths": { tab: "career-paths", label: "Career paths" },
  "skill-paths": { tab: "skill-paths", label: "Skill paths" },
  "technology-tracks": { tab: "technology-tracks", label: "Technology tracks" },
  courses: { tab: "courses", label: "Courses" },
};

export function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export interface CatalogRef {
  kind: ItemKind;
  slug: string;
  name: string;
  topics: TopicId[];
  color: string;
}

export function allRefs(): CatalogRef[] {
  const refs: CatalogRef[] = [];

  for (const path of CAREER_PATHS) {
    refs.push({ kind: "career-paths", slug: slugify(path.name), name: path.name, topics: path.topics, color: "#22c9ad" });
  }
  for (const category of SKILL_PATH_CATEGORIES) {
    refs.push({
      kind: "skill-paths",
      slug: slugify(category),
      name: category,
      topics: SKILL_PATH_TOPICS[category],
      color: CATEGORY_META[category].color,
    });
  }
  for (const provider of TECH_PROVIDERS) {
    for (const track of provider.tracks) {
      refs.push({
        kind: "technology-tracks",
        slug: slugify(`${provider.name}-${track.name}`),
        name: `${provider.name} ${track.name}`,
        topics: track.topics,
        color: "#22c9ad",
      });
    }
  }
  for (const course of COURSES) {
    refs.push({ kind: "courses", slug: slugify(course.name), name: course.name, topics: course.topics, color: CATEGORY_META.AI.color });
  }

  return refs;
}

export function findCareerPath(slug: string): CareerPath | undefined {
  return CAREER_PATHS.find((p) => slugify(p.name) === slug);
}

export function findSkillPath(slug: string): ModuleCategory | undefined {
  return SKILL_PATH_CATEGORIES.find((c) => slugify(c) === slug);
}

export function findTechTrack(slug: string): { provider: string; track: string; topics: TopicId[] } | undefined {
  for (const provider of TECH_PROVIDERS) {
    for (const track of provider.tracks) {
      if (slugify(`${provider.name}-${track.name}`) === slug) {
        return { provider: provider.name, track: track.name, topics: track.topics };
      }
    }
  }
  return undefined;
}

export function findCourse(slug: string): Course | undefined {
  return COURSES.find((c) => slugify(c.name) === slug);
}

export function detailHref(kind: ItemKind, slug: string): string {
  return `/programs/${kind}/${slug}`;
}

export function relatedRefs(topics: TopicId[], exclude: { kind: ItemKind; slug: string }, limit = 3): CatalogRef[] {
  return allRefs()
    .filter((r) => !(r.kind === exclude.kind && r.slug === exclude.slug))
    .filter((r) => r.topics.some((t) => topics.includes(t)))
    .slice(0, limit);
}

export function topicName(id: TopicId): string {
  return TOPICS.find((t) => t.id === id)?.name ?? id;
}

export { modulesFor, totalHours, totalWeeks };
