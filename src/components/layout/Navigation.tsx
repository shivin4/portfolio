"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const links = [
  { href: "#mind", label: "Mind" },
  { href: "#experiments", label: "Experiments" },
  { href: "#missions", label: "Missions" },
  { href: "#systems", label: "Systems" },
  { href: "#channel", label: "Channel" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-panel border-b border-blue-500/10 py-2.5"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#"
          className="flex shrink-0 items-center gap-2.5 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50"
          aria-label="Shivin Khandelwal — Home"
        >
          <Image
            src="/logo.png"
            alt=""
            width={40}
            height={40}
            className="h-9 w-9 rounded-lg border border-white/10 object-cover sm:h-10 sm:w-10"
            priority
          />
          <span className="hidden font-mono text-xs tracking-widest text-cyan-400/90 sm:inline">
            shivin.dev
          </span>
        </a>

        <ul className="hidden items-center gap-6 lg:gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative font-mono text-xs uppercase tracking-wider text-zinc-400 transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2 font-mono text-[10px] text-emerald-400/80">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span>ONLINE</span>
        </div>
      </nav>
    </motion.header>
  );
}
