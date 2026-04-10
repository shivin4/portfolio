"use client";

import { motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { experience } from "@/lib/data";

const typeColors: Record<string, string> = {
  DEPLOYMENT: "text-blue-400 border-blue-500/30",
  MISSION: "text-purple-400 border-purple-500/30",
  ACHIEVEMENT: "text-cyan-400 border-cyan-500/30",
  FUNDING: "text-emerald-400 border-emerald-500/30",
};

export function Experience() {
  return (
    <section
      id="missions"
      className="section-glow relative px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-blue-400/80 mb-3">
            MODULE 03 — MISSION LOGS
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Deployment <span className="holographic-text">Archive</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl">
            Every role is a mission. Every achievement, a system event logged in
            the command center.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent" />

          <div className="space-y-8">
            {experience.map((item, i) => (
              <motion.div
                key={item.org}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12 sm:pl-20"
              >
                <div className="absolute left-2 sm:left-6 top-6 h-4 w-4 rounded-full border-2 border-blue-500 bg-[#050508] shadow-[0_0_12px_rgba(59,130,246,0.5)]" />

                <GlassPanel className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <span
                        className={`inline-block rounded border px-2 py-0.5 font-mono text-[10px] mb-2 ${typeColors[item.type]}`}
                      >
                        {item.type}
                      </span>
                      <h3 className="text-xl font-bold">{item.org}</h3>
                      <p className="text-cyan-400/80 font-medium">{item.role}</p>
                    </div>
                    <p className="font-mono text-xs text-zinc-500">{item.period}</p>
                  </div>

                  <div className="space-y-2 font-mono text-sm">
                    {item.logs.map((log, j) => (
                      <p key={j} className="text-zinc-400">
                        <span className="text-blue-400/60 mr-2">{">"}</span>
                        {log}
                      </p>
                    ))}
                  </div>
                </GlassPanel>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
