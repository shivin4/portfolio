"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { bootLines } from "@/lib/data";

interface BootSequenceProps {
  onComplete: () => void;
}

export function BootSequence({ onComplete }: BootSequenceProps) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"boot" | "access" | "done">("boot");

  useEffect(() => {
    if (visibleLines < bootLines.length) {
      const t = setTimeout(() => setVisibleLines((v) => v + 1), 280);
      return () => clearTimeout(t);
    }
    setPhase("access");
    const progressInterval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(progressInterval);
          setPhase("done");
          setTimeout(onComplete, 600);
          return 100;
        }
        return p + 2;
      });
    }, 40);
    return () => clearInterval(progressInterval);
  }, [visibleLines, onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#050508]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full max-w-2xl px-6 font-mono text-sm">
            <div className="mb-8 flex items-center gap-3 border-b border-blue-500/20 pb-4">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-4 text-zinc-500">shivin://neural-boot</span>
            </div>

            <div className="space-y-1.5 min-h-[200px]">
              {bootLines.slice(0, visibleLines).map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={
                    line.includes("Shivin.exe")
                      ? "text-cyan-400 font-semibold"
                      : line.startsWith("[OK]")
                        ? "text-emerald-400"
                        : "text-zinc-400"
                  }
                >
                  {line}
                  {i === visibleLines - 1 && phase === "boot" && (
                    <span className="terminal-cursor" />
                  )}
                </motion.p>
              ))}
            </div>

            {phase === "access" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8"
              >
                <div className="mb-2 flex justify-between text-xs text-zinc-500">
                  <span>Initializing workspace</span>
                  <span>{progress}%</span>
                </div>
                <div className="h-1 overflow-hidden rounded-full bg-zinc-800">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
