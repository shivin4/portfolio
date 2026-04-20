import type { Project } from "./types";

export const joblyt: Project = {
  id: "joblyt",
  codename: "JOBLYT",
  title: "Joblyt",
  subtitle: "CV Automation for Recruiters",
  tagline: "AI-powered CV shortlisting for talent acquisition teams",
  status: "INTERNSHIP BUILD",
  classification: "HR Tech / AI",
  timeline: "Jun 2025 – Jul 2025",
  context: "Internship @ Verto Solutions (talent acquisition)",
  description:
    "Full-stack app that turns unstructured JDs and resumes into ranked shortlists—LLM extraction, human review, and explainable semantic matching.",
  longDescription:
    "Recruiters upload PDF/DOCX/TXT, AI maps to structured JSON, teams correct before matching, then a weighted engine scores title, responsibilities, experience, education, and skills—with interview questions and stability flags.",
  highlights: [
    "Groq LLM structured extraction + Sentence Transformers embeddings",
    "Human-in-the-loop JD/CV review before matching decisions",
    "Critical / important / desired skill tiers with tunable weights",
    "Role-based access: Admin, Recruiter, Backend Team via Supabase JWT",
    "Multi-step recruiter stepper: upload → review → match → results",
  ],
  tech: [
    "React",
    "Vite",
    "FastAPI",
    "Groq",
    "Supabase",
    "Sentence Transformers",
    "Tailwind",
  ],
  metrics: { roles: "3", stack: "React+FastAPI", org: "Verto" },
  accent: "from-rose-500/20 to-indigo-500/10",
  featured: false,
  priority: 6,
  links: [],
  architecture:
    "Browser → React (Vite) → FastAPI → Supabase / Groq LLM / Embeddings",
  journey: [
    {
      title: "Understanding Verto's workflow",
      body: "Mapped real shortlisting: JD arrives → CV pile → manual scan → delayed callbacks. Locked MVP: upload → parse → review → match → insights.",
    },
    {
      title: "Backend foundation",
      body: "FastAPI + Supabase persistence, Pydantic JD/CV schemas, JWT auth—structured hiring data before UI or AI layers.",
    },
    {
      title: "Document ingestion & LLM extraction",
      body: "PDF/DOCX text extraction, Groq prompts to JSON, cleanup when models drift—humans stay in control via review screens.",
    },
    {
      title: "Explainable matching engine",
      body: "Semantic similarity across dimensions, skill tiers, location normalization (Gurgaon/Gurugram), per-candidate breakdowns recruiters can defend.",
    },
    {
      title: "Recruiter-facing frontend",
      body: "Stepper flow, drag-and-drop uploads, results dashboard with expandable rows—mirrors batch CVs against one role.",
    },
    {
      title: "Production-minded polish",
      body: "Protected routes, API guards, setup docs, Vitest + pytest—built to hand to a team, not demo once.",
    },
  ],
};
