// Source: AI Workshop Formats — Tech Adoption Mapping Workbook
// "Workshop Formats" sheet (columns E: Mapped Training Program, F: Tech Topics)
// and "Sheet2" (Bootcamps / Tech Adoption Programs columns).

export type ModuleCategory = "Data Engineering" | "Advanced Analytics" | "AI Engineering" | "Cross-Track Electives";

export type Delivery = "Hybrid" | "In-person" | "Virtual";

export type ProgramStatus = "Ready" | "In development";

// Broad subject groupings used to browse the catalog by topic. Every item
// below is tagged with one of these — kept to subjects the academy already
// has real programs behind, rather than the full aspirational domain list.
export type TopicId =
  | "data-engineering"
  | "ai-engineering"
  | "ai-business"
  | "analytics-bi"
  | "data-governance"
  | "software-product"
  | "cross-functional";

export interface Topic {
  id: TopicId;
  name: string;
  blurb: string;
}

export const TOPICS: Topic[] = [
  { id: "data-engineering", name: "Data Engineering", blurb: "Pipelines, cloud platforms, and infrastructure." },
  { id: "ai-engineering", name: "AI Engineering", blurb: "Machine learning, generative AI, and MLOps." },
  { id: "ai-business", name: "AI & Business Enablement", blurb: "Org-wide AI fluency, from briefings to build days." },
  { id: "analytics-bi", name: "Data Analytics & BI", blurb: "BI platforms, statistics, and data storytelling." },
  { id: "data-governance", name: "Data Governance", blurb: "Governance, MDM, and integration platforms." },
  { id: "software-product", name: "Software & Product", blurb: "Engineering roles and delivery disciplines." },
  { id: "cross-functional", name: "Cross-Functional Skills", blurb: "Electives that round out any track." },
];

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
  topics: TopicId[];
}

// Standalone offerings — not part of a bootcamp or skill path.
export const COURSES: Course[] = [
  { name: "AI for Business", format: "Briefing", duration: "1-2 hrs", audience: "Leadership / Board", delivery: "Virtual", status: "Ready", topics: ["ai-business"] },
  { name: "AI Literacy", format: "Briefing", duration: "1-2 hrs", audience: "Any audience / all staff levels", delivery: "Virtual", status: "Ready", topics: ["ai-business"] },
  { name: "Claude Skills", format: "Briefing", duration: "1-2 hrs", audience: "Any audience / all staff levels", delivery: "Virtual", status: "Ready", topics: ["ai-business"] },
  { name: "AI Business Series", format: "Series", duration: "4-8 weeks", audience: "Technical / semi-technical cohort", delivery: "Virtual", status: "Ready", topics: ["ai-business"] },
  { name: "Ctrl+ship", format: "Sprint", duration: "1 full day", audience: "Technical practitioners", delivery: "In-person", status: "Ready", topics: ["ai-engineering"] },
];

export interface CareerPath {
  name: string;
  moduleCategory?: ModuleCategory; // links to MODULES for teams with a mapped curriculum
  status: ProgramStatus;
  topics: TopicId[];
}

// The academy's bootcamps — each one is a career path.
export const CAREER_PATHS: CareerPath[] = [
  { name: "AI Engineering", moduleCategory: "AI Engineering", status: "In development", topics: ["ai-engineering"] },
  { name: "Software Engineering", status: "In development", topics: ["software-product"] },
  { name: "Full-Stack Development", status: "In development", topics: ["software-product"] },
  { name: "Data Governance", status: "In development", topics: ["data-governance"] },
  { name: "Data Engineering", moduleCategory: "Data Engineering", status: "In development", topics: ["data-engineering"] },
  { name: "ML Engineering (MLOps)", status: "In development", topics: ["ai-engineering"] },
  { name: "AI & Data Automation", status: "In development", topics: ["ai-business"] },
  { name: "Data Analytics", status: "In development", topics: ["analytics-bi"] },
  { name: "AI Product Builder (Claude)", status: "In development", topics: ["ai-business"] },
  { name: "Project Management with AI", status: "In development", topics: ["software-product"] },
];

// The two module categories that aren't a full bootcamp become skill paths.
export const SKILL_PATH_CATEGORIES: ModuleCategory[] = ["Advanced Analytics", "Cross-Track Electives"];

export const SKILL_PATH_TOPICS: Record<ModuleCategory, TopicId[]> = {
  "Data Engineering": ["data-engineering"],
  "Advanced Analytics": ["analytics-bi"],
  "AI Engineering": ["ai-engineering"],
  "Cross-Track Electives": ["cross-functional"],
};

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

export type TechCategory = "Data Analytics & BI" | "ML & AI Core" | "Data Engineering & Infrastructure";

export const TECH_CATEGORY_TOPIC: Record<TechCategory, TopicId> = {
  "Data Analytics & BI": "analytics-bi",
  "ML & AI Core": "ai-engineering",
  "Data Engineering & Infrastructure": "data-engineering",
};

export interface TechTrack {
  // Empty name means the provider has no published tier breakdown yet —
  // it renders as a single card for the provider itself.
  name: string;
  topics: TopicId[];
}

export interface TechProvider {
  name: string;
  category: TechCategory;
  tracks: TechTrack[];
}

function untiered(topics: TopicId[]): TechTrack[] {
  return [{ name: "", topics }];
}

// Technology-adoption tracks — training on the platforms clients have already
// licensed. Source: Sheet2 "Tech Adoption Programs" (Data Analytics & BI /
// ML & AI Core / Data Engineering & Infrastructure), plus Dataiku, Informatica,
// and Alteryx tier breakdowns confirmed directly.
export const TECH_PROVIDERS: TechProvider[] = [
  // Data Analytics & BI
  { name: "Cloudera", category: "Data Analytics & BI", tracks: untiered(["analytics-bi"]) },
  { name: "Power BI", category: "Data Analytics & BI", tracks: untiered(["analytics-bi"]) },
  { name: "Microstrategy", category: "Data Analytics & BI", tracks: untiered(["analytics-bi"]) },
  { name: "Tableau", category: "Data Analytics & BI", tracks: untiered(["analytics-bi"]) },
  { name: "Qlik", category: "Data Analytics & BI", tracks: untiered(["analytics-bi"]) },
  { name: "Superset", category: "Data Analytics & BI", tracks: untiered(["analytics-bi"]) },
  { name: "Metabase / Grafana", category: "Data Analytics & BI", tracks: untiered(["analytics-bi"]) },
  {
    name: "Alteryx",
    category: "Data Analytics & BI",
    tracks: [
      { name: "Foundation", topics: ["analytics-bi"] },
      { name: "Advanced", topics: ["analytics-bi"] },
    ],
  },

  // ML & AI Core
  {
    name: "Dataiku",
    category: "ML & AI Core",
    tracks: [
      { name: "Foundation", topics: ["ai-engineering"] },
      { name: "Advanced", topics: ["ai-engineering"] },
    ],
  },
  { name: "DataRobot", category: "ML & AI Core", tracks: untiered(["ai-engineering"]) },
  { name: "Databricks", category: "ML & AI Core", tracks: untiered(["ai-engineering"]) },
  { name: "MLflow", category: "ML & AI Core", tracks: untiered(["ai-engineering"]) },
  { name: "TensorFlow", category: "ML & AI Core", tracks: untiered(["ai-engineering"]) },
  { name: "Hugging Face", category: "ML & AI Core", tracks: untiered(["ai-engineering"]) },

  // Data Engineering & Infrastructure
  { name: "AWS (Redshift, Glue)", category: "Data Engineering & Infrastructure", tracks: untiered(["data-engineering"]) },
  { name: "Azure (Synapse, Data Factory)", category: "Data Engineering & Infrastructure", tracks: untiered(["data-engineering"]) },
  { name: "GCP (BigQuery, Dataflow)", category: "Data Engineering & Infrastructure", tracks: untiered(["data-engineering"]) },
  { name: "Snowflake", category: "Data Engineering & Infrastructure", tracks: untiered(["data-engineering"]) },
  { name: "dbt", category: "Data Engineering & Infrastructure", tracks: untiered(["data-engineering"]) },
  {
    name: "Informatica",
    category: "Data Engineering & Infrastructure",
    tracks: [
      { name: "Data Governance", topics: ["data-governance"] },
      { name: "Data Engineering", topics: ["data-engineering"] },
      { name: "IDMC", topics: ["data-governance"] },
      { name: "MDM", topics: ["data-governance"] },
    ],
  },
  { name: "Debezium", category: "Data Engineering & Infrastructure", tracks: untiered(["data-engineering"]) },
  { name: "Kafka", category: "Data Engineering & Infrastructure", tracks: untiered(["data-engineering"]) },
  { name: "NiFi", category: "Data Engineering & Infrastructure", tracks: untiered(["data-engineering"]) },
];

export const TECH_CATEGORIES: TechCategory[] = ["Data Analytics & BI", "ML & AI Core", "Data Engineering & Infrastructure"];

export function providersFor(category: TechCategory): TechProvider[] {
  return TECH_PROVIDERS.filter((p) => p.category === category);
}

export function trackCount(): number {
  return TECH_PROVIDERS.reduce((n, p) => n + p.tracks.length, 0);
}

export function modulesFor(category: ModuleCategory): Module[] {
  return MODULES.filter((m) => m.category === category);
}

export function totalHours(modules: Module[]): number {
  return modules.reduce((sum, m) => sum + m.hours, 0);
}

export function totalWeeks(modules: Module[]): number {
  return modules.reduce((sum, m) => sum + m.weeks, 0);
}
