import type { Project } from "./types";

const LIVE = "https://factlens-hu3vun2q2lvg42yuayruxy.streamlit.app/";

export const factlens: Project = {
  id: "factlens",
  codename: "FACTLENS",
  title: "FactLens",
  subtitle: "NLP Explanation Verifier",
  tagline: "Verify NLP explanations against trusted research sources",
  status: "LIVE DEMO",
  classification: "AI / NLP / Full-Stack",
  timeline: "Feb 2026 – Present",
  description:
    "Paste an explanation. Get scored, citation-backed verdicts from open-access NLP papers—not a generic chatbot answer.",
  longDescription:
    "FactLens parses text into claims (spaCy), retrieves evidence via FAISS + Sentence-Transformers, evaluates with DeBERTa NLI, and returns a weighted composite score. The public demo uses a papers-only index (503 chunks, 10 papers)—textbooks stay local for copyright.",
  highlights: [
    "Claim-level verification with citation-backed evidence",
    "3-stage pipeline: linguistic parsing → FAISS retrieval → NLI scoring",
    "Composite score: accuracy (50%) + completeness (30%) + logic (20%)",
    "Papers-only public demo via GitHub Releases + Streamlit Cloud",
    "Copyright-safe: textbooks local-only, demo KB shipped as release asset",
  ],
  howItWorks: [
    {
      title: "Linguistic analysis",
      body: "spaCy parses sentences, extracts entities and noun phrases, and builds SVO claims for verification.",
    },
    {
      title: "Neural retrieval",
      body: "Claims encoded and matched against a FAISS index from open-access NLP papers with SQLite metadata.",
    },
    {
      title: "NLI evaluation",
      body: "DeBERTa cross-encoder scores entailment/neutral/contradiction with per-claim citations.",
    },
  ],
  tech: [
    "Python",
    "spaCy",
    "FAISS",
    "Sentence-Transformers",
    "PyTorch",
    "DeBERTa",
    "Streamlit",
    "SQLite",
  ],
  metrics: { chunks: "503", papers: "10", stages: "3" },
  accent: "from-purple-500/20 to-cyan-500/10",
  featured: true,
  priority: 3,
  links: [
    { label: "Try Live Demo", href: LIVE, primary: true },
    { label: "GitHub", href: "https://github.com/shivin4/factlens" },
    {
      label: "Demo KB Release",
      href: "https://github.com/shivin4/factlens/releases/tag/v1.0.0",
    },
  ],
  architecture:
    "User explanation → spaCy claims → FAISS + mpnet retrieval → DeBERTa NLI → composite score + Streamlit dashboard",
  tryIt: {
    heading: "Try the live demo",
    sample:
      "Word2vec learns dense word vectors from local context. Transformers use self-attention instead of recurrence. BERT is pretrained with masked language modeling.",
    note: "First run on free CPU may take several minutes; keep BERTScore off for faster runs.",
    href: LIVE,
    cta: "Open FactLens Demo",
  },
  journey: [
    {
      title: "Can I trust my own explanation?",
      body: "Studying NLP, I wrote explanations of word2vec, attention, BERT—but had no citation-backed way to verify them. I wanted evidence, not vague AI answers.",
    },
    {
      title: "From idea to 3-stage architecture",
      body: "Scoped: (1) claim extraction, (2) dense retrieval over papers, (3) NLI + composite scoring. Domain v1: NLP with open-access papers as public KB.",
    },
    {
      title: "Building the knowledge base",
      body: "Ingest 10 open-access papers → chunk → embed (multi-qa-mpnet) → FAISS + SQLite. 503 chunks, rebuildable locally or via GitHub Releases.",
      link: {
        label: "Demo KB release",
        href: "https://github.com/shivin4/factlens/releases/tag/v1.0.0",
      },
    },
    {
      title: "Parse, retrieve, evaluate",
      body: "spaCy for SVO claims, top-k FAISS per claim, DeBERTa NLI aggregating accuracy, completeness, and logic.",
      link: {
        label: "Pipeline code",
        href: "https://github.com/shivin4/factlens",
      },
    },
    {
      title: "From script to product",
      body: "Streamlit dashboard: paste text, tune retrieval, view score cards and per-claim verdicts with citations.",
      link: { label: "Streamlit app", href: LIVE },
    },
    {
      title: "The deployment battle",
      body: "Excluded copyrighted books from git, packaged papers-only KB, fixed Streamlit Cloud deps (Python 3.11, NumPy, PyTorch/transformers), tuned for free-tier CPU.",
    },
    {
      title: "Live, linkable, interview-ready",
      body: "Full pipeline—ingest, index, analyze, score, cite, deploy—with public demo and open source.",
      link: { label: "Try live demo", href: LIVE },
    },
  ],
};
