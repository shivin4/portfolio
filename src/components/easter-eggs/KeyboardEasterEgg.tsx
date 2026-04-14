"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function KeyboardEasterEgg({
  show,
  onHide,
}: {
  show: boolean;
  onHide: () => void;
}) {
  useEffect(() => {
    if (!show) return;
    const t = setTimeout(onHide, 2000);
    return () => clearTimeout(t);
  }, [show, onHide]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9998] flex items-center justify-center pointer-events-none"
        >
          <div className="glass-panel rounded-2xl px-8 py-6 font-mono text-center">
            <p className="text-cyan-400 text-sm">SYSTEM PULSE DETECTED</p>
            <p className="text-zinc-400 text-xs mt-2">
              Curiosity acknowledged. You&apos;re the kind of builder I like.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
