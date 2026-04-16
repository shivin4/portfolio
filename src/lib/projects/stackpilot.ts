import type { Project } from "./types";

export const stackpilot: Project = {
  id: "stackpilot",
  codename: "STACKPILOT",
  title: "StackPilot",
  subtitle: "Cloud DevOps Deployment Platform",
  tagline: "Ship student apps from GitHub to a live URL in minutes",
  status: "LIVE",
  classification: "Platform / DevOps",
  timeline: "Jan 2026 – Present",
  description:
    "Self-hosted mini PaaS on Azure. Connect a public GitHub repo, click Deploy, and get a live URL—with Docker builds, JWT auth, gateway routing, and a full ops dashboard.",
  longDescription:
    "StackPilot handles cloning, building, running, logging, and routing. Each deployment gets a public URL under /apps/<id>/. Built for student-tier constraints: ~1 GiB RAM VMs, DuckDNS hostnames, and UI warnings for heavy repos.",
  highlights: [
    "JWT auth with per-user projects and one-click deploy pipeline",
    "Nginx edge → React dashboard → FastAPI → PostgreSQL → Docker apps",
    "Live logs; cancel, stop, restart, and remove deployments",
    "Hosted on Azure for Students with stackpilot.duckdns.org",
    "GoodNotes demo app optimized for low-RAM Docker builds",
  ],
  tech: ["FastAPI", "PostgreSQL", "React", "Docker", "Nginx", "Azure"],
  metrics: { hosting: "Azure VM", domain: "DuckDNS", demo: "GoodNotes" },
  accent: "from-indigo-500/20 to-purple-500/10",
  featured: true,
  priority: 2,
  links: [
    {
      label: "Live Demo",
      href: "http://stackpilot.duckdns.org",
      primary: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/shivin4/StackPilot",
    },
    {
      label: "API Docs",
      href: "http://stackpilot.duckdns.org/api/docs",
    },
    {
      label: "Demo App",
      href: "https://github.com/shivin4/goodnotes",
    },
    {
      label: "Architecture",
      href: "https://github.com/shivin4/StackPilot/blob/main/docs/ARCHITECTURE.md",
    },
  ],
  architecture:
    "Browser → Nginx → React | /api → FastAPI → PostgreSQL | /apps/{id} → gateway → Docker containers",
  journey: [
    {
      title: "From deploying apps to building the platform",
      body: "Goal: mini Heroku showing platform depth—not only app code, but auth, proxy, containers, and real cloud hosting.",
      link: { label: "Source", href: "https://github.com/shivin4/StackPilot" },
    },
    {
      title: "Designing the system first",
      body: "Nginx edge, React dashboard, FastAPI API + gateway, PostgreSQL metadata, Docker Engine via host socket.",
      link: {
        label: "Architecture doc",
        href: "https://github.com/shivin4/StackPilot/blob/main/docs/ARCHITECTURE.md",
      },
    },
    {
      title: "Core platform",
      body: "JWT auth, project CRUD, background deploys (pending → building → running/failed). First wins with node-hello and python-hello samples.",
    },
    {
      title: "Production on Azure for Students",
      body: "B2ats_v2 VM, region constraints, SSH from Windows—documented the full deploy path for others.",
      link: {
        label: "Azure guide",
        href: "https://github.com/shivin4/StackPilot/blob/main/docs/DEPLOY-AZURE.md",
      },
    },
    {
      title: "Public URL",
      body: "DuckDNS hostname + cron to update DNS after VM restarts—resume-linkable dashboard.",
      link: { label: "Live dashboard", href: "http://stackpilot.duckdns.org" },
    },
    {
      title: "GoodNotes demo app",
      body: "React+Vite builds OOM'd on 1 GiB RAM. Rewrote as Express + HTML single-stage Docker—reliable one-click deploys.",
      link: { label: "GoodNotes repo", href: "https://github.com/shivin4/goodnotes" },
    },
    {
      title: "Production hardening",
      body: "Cancel stuck builds, restart/remove deployments, student-tier UI warnings, subpath API fixes for /apps/<id>/api/...",
    },
    {
      title: "Live today",
      body: "Register, deploy GoodNotes or your own Dockerfile repo (EXPOSE 3000/8000), open the live app URL from the dashboard.",
      link: { label: "Try StackPilot", href: "http://stackpilot.duckdns.org" },
    },
  ],
};
