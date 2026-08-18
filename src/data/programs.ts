// Source: AI Workshop Formats — Tech Adoption Mapping Workbook
// "Workshop Formats" sheet (columns E: Mapped Training Program, F: Tech Topics)
// and "Sheet2" (Bootcamps / Tech Adoption Programs columns).

export type ModuleCategory = "Data Engineering" | "Advanced Analytics" | "AI Engineering" | "Cross-Track Electives";

export type Delivery = "Hybrid" | "In-person" | "Virtual";

export type ProgramStatus = "Ready" | "In development";

export interface Module {
  name: string;
  category: ModuleCategory;
  hours: number;
  weeks: number;
  delivery: Delivery;
  status: ProgramStatus;
}

// The 27 EdX Takamol curriculum modules — the building blocks behind the
// Data Engineering / AI Engineering career paths and the two skill paths.
export const MODULES: Module[] = [
  { name: "Python & SQL for Data Engineers", category: "Data Engineering", hours: 34, weeks: 4, delivery: "Hybrid", status: "In development" },
  { name: "ETL & Pipeline Orchestration (Airflow / Kafka)", category: "Data Engineering", hours: 74, weeks: 11, delivery: "Hybrid", status: "In development" },
  { name: "Cloud Data Engineering Foundations (GCP)", category: "Data Engineering", hours: 22, weeks: 2, delivery: "Hybrid", status: "In development" },
  { name: "Spark, Containers & Production Pipelines", category: "Data Engineering", hours: 86, weeks: 12, delivery: "Hybrid", status: "In development" },
  { name: "Cross-Cloud Data Platforms (AWS + Azure)", category: "Data Engineering", hours: 40, weeks: 6, delivery: "Hybrid", status: "In development" },
  { name: "Google Professional Data Engineer — Cert Prep", category: "Data Engineering", hours: 17, weeks: 2, delivery: "Hybrid", status: "In development" },
  { name: "AI Foundations for Data Engineers", category: "Data Engineering", hours: 28, weeks: 4, delivery: "Hybrid", status: "In development" },

  { name: "SQL Foundations for Analysts", category: "Advanced Analytics", hours: 39, weeks: 6, delivery: "Hybrid", status: "In development" },
  { name: "Power BI Foundations & Data Modeling", category: "Advanced Analytics", hours: 89, weeks: 6, delivery: "Hybrid", status: "In development" },
  { name: "Applied Statistics & A/B Testing", category: "Advanced Analytics", hours: 42, weeks: 4, delivery: "Hybrid", status: "In development" },
  { name: "Data Storytelling for Decision-Makers", category: "Advanced Analytics", hours: 26, weeks: 4, delivery: "Hybrid", status: "In development" },
  { name: "Modern Analytics Platforms (Fabric, Synapse)", category: "Advanced Analytics", hours: 30, weeks: 5, delivery: "Hybrid", status: "In development" },
  { name: "Data Engineering Basics for Analysts", category: "Advanced Analytics", hours: 54, weeks: 4, delivery: "Hybrid", status: "In development" },
  { name: "GenAI for Analytics Professionals", category: "Advanced Analytics", hours: 28, weeks: 3, delivery: "Hybrid", status: "In development" },

  { name: "Python & ML Fundamentals", category: "AI Engineering", hours: 78, weeks: 8, delivery: "Hybrid", status: "In development" },
  { name: "Statistics & Applied Machine Learning", category: "AI Engineering", hours: 42, weeks: 4, delivery: "Hybrid", status: "In development" },
  { name: "Deep Learning Foundations (PyTorch)", category: "AI Engineering", hours: 84, weeks: 11, delivery: "Hybrid", status: "In development" },
  { name: "Generative AI & LLM Fundamentals", category: "AI Engineering", hours: 18, weeks: 3, delivery: "Hybrid", status: "In development" },
  { name: "RAG Systems — Vector DBs & Retrieval", category: "AI Engineering", hours: 33, weeks: 6, delivery: "Hybrid", status: "In development" },
  { name: "Applied AI on Azure (AI-102 path)", category: "AI Engineering", hours: 33, weeks: 5, delivery: "Hybrid", status: "In development" },
  { name: "GenAI Systems — Agents, RAG & Evaluation", category: "AI Engineering", hours: 69, weeks: 10, delivery: "Hybrid", status: "In development" },
  { name: "MLOps — CI/CD for Machine Learning", category: "AI Engineering", hours: 40, weeks: 4, delivery: "Hybrid", status: "In development" },
  { name: "AI Ethics, Bias & Governance (KSA / NDMO context)", category: "AI Engineering", hours: 18, weeks: 2, delivery: "Hybrid", status: "In development" },

  { name: "AI Awareness for Non-Technical Staff", category: "Cross-Track Electives", hours: 22, weeks: 4, delivery: "Hybrid", status: "In development" },
  { name: "Prompt Engineering Fundamentals", category: "Cross-Track Electives", hours: 18, weeks: 3, delivery: "Hybrid", status: "In development" },
  { name: "Data Literacy for Managers", category: "Cross-Track Electives", hours: 46, weeks: 4, delivery: "Hybrid", status: "In development" },
  { name: "Cybersecurity Foundations for Technical Staff", category: "Cross-Track Electives", hours: 120, weeks: 8, delivery: "Hybrid", status: "In development" },
];

export interface Course {
  name: string;
  format: "Briefing" | "Series" | "Sprint";
  duration: string;
  audience: string;
  delivery: Delivery;
  status: ProgramStatus;
}

// Standalone offerings — not part of a bootcamp or skill path.
export const COURSES: Course[] = [
  { name: "AI for Business", format: "Briefing", duration: "1-2 hrs", audience: "Leadership / Board", delivery: "Virtual", status: "Ready" },
  { name: "AI Literacy", format: "Briefing", duration: "1-2 hrs", audience: "Any audience / all staff levels", delivery: "Virtual", status: "Ready" },
  { name: "Claude Skills", format: "Briefing", duration: "1-2 hrs", audience: "Any audience / all staff levels", delivery: "Virtual", status: "Ready" },
  { name: "AI Business Series", format: "Series", duration: "4-8 weeks", audience: "Technical / semi-technical cohort", delivery: "Virtual", status: "Ready" },
  { name: "Ctrl+ship", format: "Sprint", duration: "1 full day", audience: "Technical practitioners", delivery: "In-person", status: "Ready" },
];

export interface CareerPath {
  name: string;
  moduleCategory?: ModuleCategory; // links to MODULES for teams with a mapped curriculum
  status: ProgramStatus;
}

// The academy's bootcamps — each one is a career path.
export const CAREER_PATHS: CareerPath[] = [
  { name: "AI Engineering", moduleCategory: "AI Engineering", status: "In development" },
  { name: "Software Engineering", status: "In development" },
  { name: "Full-Stack Development", status: "In development" },
  { name: "Data Governance", status: "In development" },
  { name: "Data Engineering", moduleCategory: "Data Engineering", status: "In development" },
  { name: "ML Engineering (MLOps)", status: "In development" },
  { name: "AI & Data Automation", status: "In development" },
  { name: "Data Analytics", status: "In development" },
  { name: "AI Product Builder (Claude)", status: "In development" },
  { name: "Project Management with AI", status: "In development" },
];

// The two module categories that aren't a full bootcamp become skill paths.
export const SKILL_PATH_CATEGORIES: ModuleCategory[] = ["Advanced Analytics", "Cross-Track Electives"];

export const CATEGORY_META: Record<ModuleCategory | "AI", { color: string; blurb: string }> = {
  AI: {
    color: "#45e0c4",
    blurb: "Executive and organization-wide AI fluency, from briefings to hands-on series.",
  },
  "Data Engineering": {
    color: "#6ea8ff",
    blurb: "Pipelines, cloud platforms, and infrastructure for teams shipping production data systems.",
  },
  "Advanced Analytics": {
    color: "#f2b84b",
    blurb: "BI, statistics, and data storytelling for analysts and decision-makers.",
  },
  "AI Engineering": {
    color: "#b79cff",
    blurb: "Machine learning, generative AI, and MLOps for teams building AI systems.",
  },
  "Cross-Track Electives": {
    color: "#ff8f70",
    blurb: "Focused electives that round out a track — literacy, prompting, security, and governance.",
  },
};

export interface PlatformProvider {
  name: string;
  tracks: string[];
}

// Technology-adoption tracks — training on the platforms clients have already licensed.
export const PLATFORM_PROVIDERS: PlatformProvider[] = [
  { name: "Dataiku", tracks: ["Foundation", "Advanced"] },
  { name: "Informatica", tracks: ["Data Governance", "Data Engineering", "IDMC", "MDM"] },
  { name: "Alteryx", tracks: ["Foundation", "Advanced"] },
];

export function modulesFor(category: ModuleCategory): Module[] {
  return MODULES.filter((m) => m.category === category);
}

export function totalHours(modules: Module[]): number {
  return modules.reduce((sum, m) => sum + m.hours, 0);
}

export function totalWeeks(modules: Module[]): number {
  return modules.reduce((sum, m) => sum + m.weeks, 0);
}
