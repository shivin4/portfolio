"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassPanelProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export function GlassPanel({
  children,
  className,
  glow = false,
  ...props
}: GlassPanelProps) {
  return (
    <motion.div
      className={cn(
        "glass-panel relative overflow-hidden rounded-xl",
        glow && "shadow-[0_0_40px_rgba(59,130,246,0.08)]",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
