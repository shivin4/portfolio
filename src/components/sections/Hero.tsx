"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassPanel } from "@/components/ui/GlassPanel";
import {
  siteConfig,
  roles,
  heroStats,
  codeSnippets,
} from "@/lib/data";

const PROJECT_NODES = ["LL", "SP", "FL", "SH", "AB", "JB"];

function SystemStatusPanel() {
  return (
    <GlassPanel className="scan-line p-4" glow>
      <div className="mb-3 flex items-center justify-between font-mono text-[10px] text-zinc-500">
        <span>SYSTEM STATUS</span>
        <span className="text-emerald-400">● LIVE</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {heroStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.1 }}
            className="rounded-lg border border-white/5 bg-black/30 p-3"
          >
            <p className="font-mono text-[10px] text-zinc-500">{stat.label}</p>
            <p className="text-xl font-bold text-white">{stat.value}</p>
            <p className="font-mono text-[9px] text-blue-400/70">{stat.status}</p>
          </motion.div>
        ))}
      </div>
    </GlassPanel>
  );
}

function RuntimeLogPanel({ snippetIndex }: { snippetIndex: number }) {
  return (
    <GlassPanel className="p-4 font-mono text-xs">
      <p className="mb-2 text-purple-400/80">// runtime.log</p>
      <AnimatePresence mode="wait">
        <motion.pre
          key={snippetIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="whitespace-pre-wrap text-zinc-400 leading-relaxed"
        >
          {codeSnippets[snippetIndex]}
        </motion.pre>
      </AnimatePresence>
    </GlassPanel>
  );
}

function ProjectNodesPanel() {
  return (
    <GlassPanel className="p-3">
      <p className="font-mono text-[10px] text-zinc-500 mb-2">PROJECT NODES</p>
      <div className="flex flex-wrap gap-1.5">
        {PROJECT_NODES.map((node) => (
          <span
            key={node}
            className="rounded border border-blue-500/20 bg-blue-500/10 px-2 py-0.5 font-mono text-[10px] text-blue-300"
          >
            {node}
          </span>
        ))}
      </div>
    </GlassPanel>
  );
}

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [snippetIndex, setSnippetIndex] = useState(0);

  useEffect(() => {
    const roleTimer = setInterval(
      () => setRoleIndex((i) => (i + 1) % roles.length),
      3200
    );
    const snippetTimer = setInterval(
      () => setSnippetIndex((i) => (i + 1) % codeSnippets.length),
      5000
    );
    return () => {
      clearInterval(roleTimer);
      clearInterval(snippetTimer);
    };
  }, []);

  return (
    <section className="relative overflow-hidden px-6 pt-28 pb-16 md:pb-20 lg:min-h-screen lg:pb-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:gap-6 lg:gap-y-8">
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="mb-4 font-mono text-xs tracking-[0.3em] text-blue-400/80">
            NEURAL WORKSPACE v2.0 — ACCESS GRANTED
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block text-zinc-500 text-xl sm:text-3xl font-medium mb-2">
              Enter the mind of
            </span>
            <span className="holographic-text">{siteConfig.name}</span>
          </h1>

          <div className="mb-8 h-12 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="font-mono text-base text-cyan-400/90 sm:text-xl"
              >
                ▸ {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="max-w-xl text-zinc-400 leading-relaxed text-sm sm:text-base">
            {siteConfig.tagline} Architecting AI products, developer tools, and
            full-stack systems — from LogicLens to health-tech platforms.
          </p>
          <p className="mt-2 font-mono text-xs text-zinc-600">
            {siteConfig.education}
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
            <a
              href="#experiments"
              className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-600/80 to-purple-600/80 px-5 py-2.5 font-mono text-sm transition-transform hover:scale-[1.02] sm:px-6 sm:py-3"
            >
              <span className="relative z-10">Explore Experiments</span>
              <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <a
              href="#channel"
              className="glass-panel rounded-lg px-5 py-2.5 font-mono text-sm text-zinc-300 transition-colors hover:text-white hover:border-cyan-500/30 sm:px-6 sm:py-3"
            >
              Open Channel →
            </a>
          </div>
        </motion.div>

        {/* Mobile & tablet: stacked panels (no absolute positioning) */}
        <div className="flex flex-col gap-4 lg:hidden">
          <SystemStatusPanel />
          <RuntimeLogPanel snippetIndex={snippetIndex} />
          <ProjectNodesPanel />
        </div>

        {/* Desktop: floating dashboard */}
        <div className="relative hidden lg:col-span-5 lg:block lg:min-h-[520px]">
          <motion.div
            className="absolute right-0 top-0 w-full max-w-sm"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <SystemStatusPanel />
          </motion.div>

          <motion.div
            className="absolute left-0 top-48 w-full max-w-[280px]"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <RuntimeLogPanel snippetIndex={snippetIndex} />
          </motion.div>

          <motion.div
            className="absolute right-4 bottom-0 w-48"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <ProjectNodesPanel />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="pointer-events-none absolute bottom-12 left-0 right-0 hidden h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent lg:block"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </section>
  );
}
