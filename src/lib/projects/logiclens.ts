import type { Project } from "./types";

export const logiclens: Project = {
  id: "logiclens",
  codename: "LOGICLENS",
  title: "LogicLens",
  subtitle: "Code Dependency Analyzer",
  tagline: "See your codebase as a graph. Understand it faster. Change it with confidence.",
  status: "v1.1.0 RELEASED",
  classification: "Developer Tools / AI",
  timeline: "Apr 2026 – Present",
  description:
    "Local-first Windows desktop app that turns any repository into an interactive dependency map—with semantic search, Git context, and optional AI impact analysis.",
  longDescription:
    "Unlike tools that need Docker, Neo4j, or a cloud backend, LogicLens keeps everything on disk—SQLite for structure, ChromaDB for embeddings, Tree-sitter for parsing. Optional Groq and CrewAI power explanations and what-if blast-radius reports when you provide API keys.",
  highlights: [
    "Native desktop shell (pywebview + Flask) with multi-language analysis",
    "Dual persistence: structural graph + semantic vectors",
    "Incremental re-analysis with file fingerprinting",
    "Graph UI with hierarchy layouts, tracing, and Git insights",
    "PyInstaller + Inno Setup packaging and GitHub Pages product site",
  ],
  tech: [
    "Python",
    "Flask",
    "SQLite",
    "ChromaDB",
    "Tree-sitter",
    "Groq",
    "PyInstaller",
  ],
  metrics: { platform: "Windows", release: "v1.1.0", parser: "Tree-sitter" },
  accent: "from-blue-500/20 to-cyan-500/10",
  featured: true,
  priority: 1,
  links: [
    {
      label: "Download App",
      href: "https://shivin4.github.io/logiclens/",
      primary: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/shivin4/logiclens",
    },
  ],
  architecture:
    "Repo → Tree-sitter parse → SQLite graph + Chroma embeddings → vis-network UI → optional Groq/CrewAI what-if (SSE)",
  journey: [
    {
      title: "The problem I kept hitting",
      body: "Every new codebase: outdated READMEs, grep that finds strings not relationships, risky refactors. I wanted structure visually, locally, with real what-if analysis—no graph DB server.",
    },
    {
      title: "From idea to MVP",
      body: "Walk repo → Tree-sitter → nodes/edges → vis-network in browser. Flask API + SQLite + pywebview so it felt like software, not a script.",
    },
    {
      title: "Making it feel like a product",
      body: "File menu, recent projects, onboarding, per-project Chroma collections, welcome screen—installable software others could run.",
    },
    {
      title: "Intelligence layer",
      body: "ChromaDB semantic search, Groq explanations, CrewAI what-if reports with SSE streaming—agents query SQLite + Chroma, not hallucinated structure.",
    },
    {
      title: "Performance and trust",
      body: "Fingerprint manifests for incremental analyze, Git churn context, storage APIs, safer streaming on packaged builds.",
    },
    {
      title: "Graph UX at scale",
      body: "Hierarchy/physics layouts, contrast-aware labels, call tracing—graphs stayed readable on real projects.",
    },
    {
      title: "Shipping v1.1.0",
      body: "PyInstaller, Inno Setup, GitHub Releases installer, Pages product site, in-app update check. Distribution was as important as the analyzer.",
      link: {
        label: "Download v1.1.0",
        href: "https://shivin4.github.io/logiclens/",
      },
    },
  ],
};

// LogicLens v1.1.0 — public release: https://shivin4.github.io/logiclens/
