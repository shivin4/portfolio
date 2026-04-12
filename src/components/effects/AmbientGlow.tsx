"use client";

import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

export function AmbientGlow() {
  const { x, y } = useMousePosition();

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 20%, rgba(59,130,246,0.08) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 80%, rgba(139,92,246,0.06) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 50% 50%, rgba(34,211,238,0.03) 0%, transparent 50%)
          `,
        }}
      />
      <motion.div
        className="pointer-events-none fixed z-0 h-[500px] w-[500px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
          left: x - 250,
          top: y - 250,
        }}
        animate={{ left: x - 250, top: y - 250 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
      <div className="pointer-events-none fixed inset-0 z-[2] grid-overlay opacity-30" />
    </>
  );
}
