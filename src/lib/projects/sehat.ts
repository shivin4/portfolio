import type { Project } from "./types";

export const sehat: Project = {
  id: "sehat",
  codename: "SEHAT",
  title: "SEHAT",
  subtitle: "Telemedicine Platform",
  tagline: "Rural telemedicine built for low bandwidth",
  status: "SIH 2025",
  classification: "HealthTech / Hackathon",
  timeline: "Aug 2025",
  context: "Smart India Hackathon 2025 — Internal Second Runner-Up",
  description:
    "Multilingual telemedicine platform for rural users—queue-based appointments, e-prescriptions, medicine tracking, and an AI symptom checker.",
  highlights: [
    "SIH 2025 internal second runner-up at university level",
    "Queue-based appointments and e-prescriptions",
    "AI symptom checker optimized for low-bandwidth environments",
    "Flutter + Node.js stack for field-ready demos",
  ],
  tech: ["Flutter", "Node.js", "AI Triage"],
  metrics: { event: "SIH 2025", rank: "2nd (internal)", focus: "Rural" },
  accent: "from-cyan-500/20 to-emerald-500/10",
  featured: false,
  priority: 4,
  links: [],
  journey: [
    {
      title: "Hackathon constraint",
      body: "36-hour build sprint with a cross-functional team—production-grade prototype under extreme time pressure.",
    },
    {
      title: "Rural-first design",
      body: "Multilingual UI, queue flows, and lightweight sync for users on unreliable connectivity.",
    },
    {
      title: "Runner-up outcome",
      body: "Validated telemedicine flows for underserved communities—recognized at SIH 2025 internal round.",
    },
  ],
};
