"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { skillEcosystems } from "@/lib/data";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const active = skillEcosystems[activeCategory];

  return (
    <section
      id="systems"
      className="section-glow relative px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-purple-400/80 mb-3">
            MODULE 04 — TECH CONSTELLATION
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Skill <span className="holographic-text">Ecosystems</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl">
            No progress bars — skills exist as interconnected nodes in living
            systems. Select an ecosystem to illuminate its constellation.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4 flex flex-col gap-2">
            {skillEcosystems.map((eco, i) => (
              <button
                key={eco.category}
                type="button"
                onClick={() => setActiveCategory(i)}
                className={`glass-panel rounded-lg p-4 text-left transition-all ${
                  activeCategory === i
                    ? "border-cyan-500/40 shadow-[0_0_20px_rgba(34,211,238,0.1)]"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <p className="font-mono text-xs text-zinc-500">ECOSYSTEM</p>
                <p className="font-semibold">{eco.category}</p>
                <p className="font-mono text-[10px] text-zinc-600 mt-1">
                  {eco.nodes.length} nodes active
                </p>
              </button>
            ))}
          </div>

          <GlassPanel className="lg:col-span-8 min-h-[400px] p-8 relative overflow-hidden">
            <motion.div
              key={active.category}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative h-full min-h-[360px]"
            >
              <p className="font-mono text-xs mb-6" style={{ color: active.color }}>
                ◉ {active.category.toUpperCase()} — NETWORK ACTIVE
              </p>

              {/* Constellation visualization */}
              <div className="relative w-full h-[300px] flex items-center justify-center">
                <motion.div
                  className="absolute h-24 w-24 rounded-full border-2 flex items-center justify-center font-mono text-xs text-center px-2"
                  style={{
                    borderColor: `${active.color}40`,
                    boxShadow: `0 0 40px ${active.color}20`,
                    color: active.color,
                  }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {active.category}
                </motion.div>

                {active.nodes.map((node, i) => {
                  const angle = (i / active.nodes.length) * Math.PI * 2 - Math.PI / 2;
                  const radius = 120 + (i % 2) * 30;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <motion.div
                      key={node}
                      className="absolute"
                      style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.15 }}
                    >
                      <span
                        className="block -translate-x-1/2 -translate-y-1/2 rounded-lg border bg-black/50 px-3 py-1.5 font-mono text-[11px] whitespace-nowrap cursor-default transition-colors hover:text-white"
                        style={{ borderColor: `${active.color}30` }}
                      >
                        {node}
                      </span>
                      <svg
                        className="absolute top-1/2 left-1/2 -z-10 pointer-events-none"
                        style={{
                          width: Math.abs(x) + 50,
                          height: Math.abs(y) + 50,
                          transform: `translate(-50%, -50%)`,
                        }}
                      >
                        <line
                          x1="50%"
                          y1="50%"
                          x2={x > 0 ? "0%" : "100%"}
                          y2={y > 0 ? "0%" : "100%"}
                          stroke={active.color}
                          strokeOpacity={0.15}
                          strokeWidth={1}
                        />
                      </svg>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                {active.nodes.map((node) => (
                  <span
                    key={node}
                    className="rounded-full border px-3 py-1 font-mono text-[10px] text-zinc-400"
                    style={{ borderColor: `${active.color}25` }}
                  >
                    {node}
                  </span>
                ))}
              </div>
            </motion.div>
          </GlassPanel>
        </div>
      </div>
    </section>
  );
}
