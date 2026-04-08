"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { ProjectModal } from "@/components/sections/ProjectModal";
import { projects } from "@/lib/projects";
import { cn } from "@/lib/utils";

function statusStyles(status: string) {
  const s = status.toUpperCase();
  if (s.includes("RELEASED") || s.includes("LIVE") || s === "SHIPPED")
    return "border-emerald-500/30 bg-emerald-500/10 text-emerald-400";
  if (s.includes("BETA") || s.includes("PRODUCTION"))
    return "border-blue-500/30 bg-blue-500/10 text-blue-400";
  if (s.includes("PROTOTYPE") || s.includes("INTERNSHIP") || s.includes("SIH"))
    return "border-amber-500/30 bg-amber-500/10 text-amber-400";
  return "border-zinc-500/30 bg-zinc-500/10 text-zinc-400";
}

function gridClass(priority: number) {
  if (priority === 1) return "md:col-span-2 lg:col-span-2";
  if (priority === 2) return "lg:col-span-1";
  return "";
}

export function Projects() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = projects.find((p) => p.id === activeId) ?? null;

  return (
    <section id="experiments" className="section-glow relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-cyan-400/80 mb-3">
            MODULE 02 — CLASSIFIED EXPERIMENTS
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Project <span className="holographic-text">Laboratory</span>
          </h2>
          <p className="mt-3 text-zinc-500 max-w-2xl text-sm leading-relaxed">
            Six builds — from shipped desktop tools and live cloud platforms to
            hackathon health-tech and internship systems. Click for overview,
            journey, and links.
          </p>
        </motion.div>

        {/* Featured strip */}
        <div className="mb-6 flex flex-wrap gap-2">
          {projects
            .filter((p) => p.featured)
            .map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActiveId(p.id)}
                className="font-mono text-[10px] rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-1 text-cyan-400/90 hover:bg-cyan-500/20 transition-colors"
              >
                ★ {p.title}
              </button>
            ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.35 }}
              className={gridClass(project.priority)}
            >
              <button
                type="button"
                onClick={() => setActiveId(project.id)}
                className="group w-full text-left h-full"
              >
                <GlassPanel
                  className={cn(
                    "relative h-full min-h-[190px] p-5 transition-[border-color,box-shadow] duration-200",
                    "hover:border-cyan-500/20 hover:shadow-[0_0_28px_rgba(34,211,238,0.05)]",
                    project.priority === 1 &&
                      "min-h-[220px] border-blue-500/15",
                    activeId === project.id && "border-cyan-500/25"
                  )}
                >
                  <div
                    className={cn(
                      "absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                      project.accent
                    )}
                  />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="font-mono text-[10px] tracking-widest text-purple-400/80">
                            {project.codename}
                          </p>
                          {project.featured && (
                            <span className="text-[9px] text-cyan-500/70">
                              ★
                            </span>
                          )}
                        </div>
                        <h3 className="mt-0.5 text-lg font-bold sm:text-xl truncate">
                          {project.title}
                        </h3>
                        {project.subtitle && (
                          <p className="text-[11px] text-zinc-500 truncate">
                            {project.subtitle}
                          </p>
                        )}
                      </div>
                      <span
                        className={cn(
                          "shrink-0 rounded-full border px-1.5 py-0.5 font-mono text-[8px] max-w-[88px] text-center leading-tight",
                          statusStyles(project.status)
                        )}
                      >
                        {project.status}
                      </span>
                    </div>

                    <p className="font-mono text-[9px] text-zinc-600 mb-2">
                      {project.timeline}
                    </p>

                    <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2 flex-1">
                      {project.description}
                    </p>

                    <div className="mt-3 flex items-end justify-between gap-2 pt-3 border-t border-white/5">
                      <div className="flex flex-wrap gap-1">
                        {project.tech.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="rounded border border-white/5 bg-black/30 px-1.5 py-0.5 font-mono text-[8px] text-zinc-500"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <span className="font-mono text-[10px] text-zinc-600 group-hover:text-cyan-400/80 shrink-0 transition-colors">
                        Open →
                      </span>
                    </div>
                  </div>
                </GlassPanel>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActiveId(null)} />
    </section>
  );
}
