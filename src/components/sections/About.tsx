"use client";

import { motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { mindset } from "@/lib/data";

export function About() {
  return (
    <section
      id="mind"
      className="section-glow relative px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-purple-400/80 mb-3">
            MODULE 01 — COGNITIVE MAP
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Inside the{" "}
            <span className="holographic-text">Builder&apos;s Mind</span>
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-400 leading-relaxed">
            Not a résumé — a neural map of how I think, build, and push
            technology toward human good. Every node represents a conviction
            forged through experiments, hackathons, and real deployments.
          </p>
        </motion.div>

        {/* Neural-inspired layout */}
        <div className="relative">
          <div className="absolute left-1/2 top-1/2 hidden h-px w-3/4 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent lg:block" />
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-purple-500/15 to-transparent lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mindset.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <GlassPanel className="group h-full p-6 transition-shadow hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]">
                  <span className="mb-4 block text-2xl text-cyan-400/60 group-hover:text-cyan-400 transition-colors">
                    {item.icon}
                  </span>
                  <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-4 h-px w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
                </GlassPanel>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 glass-panel rounded-2xl p-6 sm:p-8"
        >
          <p className="font-mono text-xs text-zinc-500 mb-6">
            THOUGHT PIPELINE — RECENT SYNTHESIS
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {[
              { phase: "Observe", desc: "Listen to humans first" },
              { phase: "Architect", desc: "Design systems that scale empathy" },
              { phase: "Experiment", desc: "Ship fast, learn faster" },
              { phase: "Impact", desc: "Measure outcomes in lives touched" },
            ].map((step, i) => (
              <div key={step.phase} className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 font-mono text-xs text-blue-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-semibold">{step.phase}</p>
                  <p className="text-sm text-zinc-500">{step.desc}</p>
                </div>
                {i < 3 && (
                  <span className="hidden sm:block text-zinc-600 mx-2">→</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
