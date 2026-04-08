"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/projects";
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

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false);
  const [tab, setTab] = useState<"overview" | "journey">("overview");

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!project) return;
    setTab("overview");
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!mounted) return null;

  const primaryLink = project?.links.find((l) => l.primary) ?? project?.links[0];
  const secondaryLinks = project?.links.filter((l) => l !== primaryLink) ?? [];
  const hasJourney = (project?.journey?.length ?? 0) > 0;

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          key={project.id}
          className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.button
            type="button"
            aria-label="Close"
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative z-10 flex w-full max-w-3xl max-h-[92vh] flex-col rounded-t-2xl sm:rounded-2xl border border-white/10 bg-[#08080e] shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-1 shrink-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400" />

            {/* Sticky header */}
            <div className="shrink-0 border-b border-white/5 bg-[#08080e]/95 backdrop-blur px-5 sm:px-6 pt-5 pb-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-mono text-[10px] tracking-widest text-purple-400/80">
                    {project.codename}
                    {project.featured && (
                      <span className="ml-2 text-cyan-500/70">★ FEATURED</span>
                    )}
                  </p>
                  <h2
                    id="project-modal-title"
                    className="text-xl sm:text-2xl font-bold truncate"
                  >
                    {project.title}
                  </h2>
                  {project.subtitle && (
                    <p className="text-sm text-zinc-500 mt-0.5">
                      {project.subtitle}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="shrink-0 rounded-lg border border-white/10 p-2 text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                  aria-label="Close"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M4 4l10 10M14 4L4 14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {project.tagline && (
                <p className="mt-2 text-sm text-cyan-400/90">{project.tagline}</p>
              )}

              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span
                  className={cn(
                    "rounded-full border px-2 py-0.5 font-mono text-[9px]",
                    statusStyles(project.status)
                  )}
                >
                  {project.status}
                </span>
                <span className="font-mono text-[10px] text-zinc-500">
                  {project.timeline}
                </span>
                {project.context && (
                  <span className="font-mono text-[10px] text-zinc-600 border border-white/5 rounded px-2 py-0.5">
                    {project.context}
                  </span>
                )}
              </div>

              {hasJourney && (
                <div className="mt-4 flex gap-1 rounded-lg border border-white/5 bg-black/40 p-1">
                  {(["overview", "journey"] as const).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTab(t)}
                      className={cn(
                        "flex-1 rounded-md py-1.5 font-mono text-[10px] uppercase tracking-wider transition-colors",
                        tab === t
                          ? "bg-cyan-500/15 text-cyan-400"
                          : "text-zinc-500 hover:text-zinc-300"
                      )}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-5">
              {tab === "overview" && (
                <div className="space-y-6">
                  <p className="text-zinc-300 leading-relaxed">
                    {project.longDescription ?? project.description}
                  </p>

                  {project.problemStatement && (
                    <div className="space-y-3">
                      <p className="font-mono text-[10px] text-violet-400/90 tracking-wider">
                        PROBLEM STATEMENT — UX ORIGIN
                      </p>
                      <div className="grid gap-3 sm:grid-cols-1">
                        <div className="rounded-xl border border-violet-500/15 bg-violet-500/[0.04] p-4">
                          <p className="font-mono text-[10px] text-zinc-500 mb-2">
                            BACKGROUND
                          </p>
                          <p className="text-sm text-zinc-400 leading-relaxed">
                            {project.problemStatement.background}
                          </p>
                        </div>
                        <div className="rounded-xl border border-amber-500/15 bg-amber-500/[0.04] p-4">
                          <p className="font-mono text-[10px] text-zinc-500 mb-2">
                            THE GAP
                          </p>
                          <p className="text-sm text-zinc-300 leading-relaxed">
                            {project.problemStatement.statement}
                          </p>
                        </div>
                        <div className="rounded-xl border border-cyan-500/15 bg-cyan-500/[0.04] p-4">
                          <p className="font-mono text-[10px] text-zinc-500 mb-3">
                            GOALS
                          </p>
                          <ul className="space-y-2">
                            {project.problemStatement.goals.map((goal) => (
                              <li
                                key={goal}
                                className="flex gap-2 text-sm text-zinc-400"
                              >
                                <span className="text-violet-400/80 shrink-0">
                                  ◇
                                </span>
                                {goal}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {project.howItWorks && (
                    <div>
                      <p className="font-mono text-[10px] text-cyan-400/80 tracking-wider mb-3">
                        HOW IT WORKS
                      </p>
                      <div className="grid gap-3 sm:grid-cols-3">
                        {project.howItWorks.map((card, i) => (
                          <div
                            key={card.title}
                            className="rounded-lg border border-white/5 bg-white/[0.02] p-4"
                          >
                            <p className="font-mono text-[10px] text-purple-400 mb-2">
                              0{i + 1}
                            </p>
                            <p className="font-semibold text-sm mb-1">
                              {card.title}
                            </p>
                            <p className="text-xs text-zinc-500 leading-relaxed">
                              {card.body}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <p className="font-mono text-[10px] text-cyan-400/80 tracking-wider mb-3">
                      KEY CAPABILITIES
                    </p>
                    <ul className="space-y-2">
                      {project.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm text-zinc-400"
                        >
                          <span className="text-cyan-500/80 shrink-0">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.architecture && (
                    <div>
                      <p className="font-mono text-[10px] text-cyan-400/80 tracking-wider mb-2">
                        ARCHITECTURE
                      </p>
                      <pre className="rounded-lg border border-white/5 bg-black/50 p-4 font-mono text-[11px] text-zinc-400 overflow-x-auto whitespace-pre-wrap">
                        {project.architecture}
                      </pre>
                    </div>
                  )}

                  {project.tryIt && (
                    <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5">
                      <p className="font-mono text-xs text-cyan-400 mb-3">
                        {project.tryIt.heading}
                      </p>
                      {project.tryIt.sample && (
                        <pre className="mb-3 rounded-lg bg-black/40 p-3 font-mono text-[11px] text-zinc-400 whitespace-pre-wrap leading-relaxed">
                          {project.tryIt.sample}
                        </pre>
                      )}
                      {project.tryIt.note && (
                        <p className="text-[11px] text-zinc-500 mb-3">
                          {project.tryIt.note}
                        </p>
                      )}
                      <a
                        href={project.tryIt.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex rounded-lg bg-cyan-600/80 px-4 py-2 font-mono text-xs text-white hover:opacity-90 transition-opacity"
                      >
                        {project.tryIt.cta} →
                      </a>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-white/8 bg-white/5 px-2 py-1 font-mono text-[10px] text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {Object.entries(project.metrics).map(([k, v]) => (
                      <div
                        key={k}
                        className="rounded-lg border border-white/5 bg-black/40 px-3 py-2"
                      >
                        <p className="font-mono text-[9px] text-zinc-500 uppercase">
                          {k}
                        </p>
                        <p className="font-mono text-sm text-white">{v}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {tab === "journey" && project.journey && (
                <div className="relative pl-6">
                  <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/40 via-purple-500/20 to-transparent" />
                  <div className="space-y-6">
                    {project.journey.map((step, i) => (
                      <div key={step.title} className="relative">
                        <div className="absolute -left-6 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-cyan-500/60 bg-[#08080e]" />
                        <p className="font-mono text-[10px] text-zinc-600 mb-1">
                          {String(i + 1).padStart(2, "0")}
                        </p>
                        <p className="font-semibold text-zinc-200 mb-1">
                          {step.title}
                        </p>
                        <p className="text-sm text-zinc-500 leading-relaxed">
                          {step.body}
                        </p>
                        {step.link && (
                          <a
                            href={step.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-2 font-mono text-[10px] text-cyan-400 hover:text-cyan-300"
                          >
                            {step.link.label} →
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer CTAs */}
            <div className="shrink-0 border-t border-white/5 px-5 sm:px-6 py-4 flex flex-wrap gap-2 bg-[#08080e]">
              {primaryLink && (
                <a
                  href={primaryLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 font-mono text-xs text-white hover:opacity-90 transition-opacity"
                >
                  {primaryLink.label} →
                </a>
              )}
              {secondaryLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 px-4 py-2 font-mono text-xs text-zinc-400 hover:text-white hover:border-white/20 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-white/10 px-4 py-2 font-mono text-xs text-zinc-500 hover:text-zinc-300 transition-colors ml-auto"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
