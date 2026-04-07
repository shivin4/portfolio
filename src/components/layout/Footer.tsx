"use client";

import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-zinc-600">
          © {new Date().getFullYear()} {siteConfig.name} — Neural Workspace
        </p>
        <p className="font-mono text-[10px] text-zinc-700">
          Built with intent. Deployed with purpose.
        </p>
      </div>
    </footer>
  );
}
