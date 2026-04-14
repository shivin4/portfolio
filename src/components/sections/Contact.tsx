"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { siteConfig } from "@/lib/data";

type TerminalLine = { type: "system" | "user"; text: string };

/** Web3Forms access keys are public; restrict by domain in the Web3Forms dashboard. */
const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [messages, setMessages] = useState<TerminalLine[]>([
    { type: "system", text: "Secure channel initialized." },
    { type: "system", text: "Awaiting transmission from observer..." },
    { type: "system", text: "Fill in your email + message, then press SEND." },
  ]);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const append = (lines: TerminalLine[]) => {
    setMessages((m) => [...m, ...lines]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;

    const trimmedMessage = message.trim();
    const trimmedEmail = email.trim();
    const trimmedName = name.trim() || "Portfolio visitor";

    if (!trimmedEmail || !trimmedMessage) {
      append([
        {
          type: "system",
          text: "ERROR: Email and message are required before transmission.",
        },
      ]);
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      append([
        {
          type: "system",
          text: "ERROR: Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to .env.local and restart dev server.",
        },
      ]);
      return;
    }

    setSending(true);
    append([
      { type: "user", text: `[${trimmedEmail}] ${trimmedMessage}` },
      { type: "system", text: "Encrypting packet and uplinking..." },
    ]);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          subject: `Portfolio — message from ${trimmedName}`,
          from_name: "Shivin Portfolio",
          replyto: trimmedEmail,
          botcheck: "",
        }),
      });

      const raw = await response.text();
      let data: { success?: boolean; message?: string };
      try {
        data = JSON.parse(raw) as { success?: boolean; message?: string };
      } catch {
        append([
          {
            type: "system",
            text: `TRANSMISSION FAILED: Unexpected server response (${response.status}). Check your access key.`,
          },
        ]);
        return;
      }

      if (!data.success) {
        append([
          {
            type: "system",
            text: `TRANSMISSION FAILED: ${data.message ?? "Web3Forms rejected the request."}`,
          },
        ]);
        return;
      }

      append([
        {
          type: "system",
          text: `ACK received — message delivered to ${siteConfig.email}. Shivin will respond soon.`,
        },
      ]);
      setMessage("");
    } catch {
      append([
        {
          type: "system",
          text: "NETWORK ERROR: Could not reach Web3Forms. Check your connection or use email below.",
        },
      ]);
    } finally {
      setSending(false);
    }
  };

  const channels = [
    {
      label: "LinkedIn",
      href: siteConfig.linkedin,
      code: "LNK-01",
      detail: "in/shivinkhandelwal",
    },
    {
      label: "GitHub",
      href: siteConfig.github,
      code: "GH-02",
      detail: "@shivin4",
    },
    {
      label: "Email",
      href: `mailto:${siteConfig.email}`,
      code: "MAIL-03",
      detail: siteConfig.email,
    },
    {
      label: "Phone",
      href: siteConfig.phoneHref,
      code: "TEL-04",
      detail: siteConfig.phone,
    },
  ];

  return (
    <section
      id="channel"
      className="section-glow relative px-6 py-32 pb-40"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-cyan-400/80 mb-3">
            MODULE 05 — SECURE CHANNEL
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Open <span className="holographic-text">Communication</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <GlassPanel className="p-6 font-mono text-sm scan-line" glow>
            <div className="mb-4 flex items-center gap-2 border-b border-white/5 pb-4">
              <span className="h-2 w-2 rounded-full bg-red-500/80" />
              <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
              <span className="h-2 w-2 rounded-full bg-green-500/80" />
              <span className="ml-2 text-zinc-500 text-xs">
                comm://shivin.secure
              </span>
            </div>

            <div
              ref={logRef}
              className="h-48 overflow-y-auto space-y-2 mb-4 text-xs"
            >
              {messages.map((msg, i) => (
                <p
                  key={i}
                  className={
                    msg.type === "system"
                      ? msg.text.startsWith("ERROR") ||
                        msg.text.startsWith("TRANSMISSION FAILED") ||
                        msg.text.startsWith("NETWORK ERROR")
                        ? "text-red-400/90"
                        : msg.text.startsWith("ACK")
                          ? "text-emerald-400/90"
                          : "text-zinc-500"
                      : "text-cyan-400"
                  }
                >
                  {msg.type === "system" ? "> " : "» "}
                  {msg.text}
                </p>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="text"
                name="botcheck"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name (optional)"
                className="w-full rounded border border-white/10 bg-black/40 px-3 py-2 text-xs text-white placeholder:text-zinc-600 focus:border-cyan-500/50 focus:outline-none"
                aria-label="Your name"
                disabled={sending}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com (required)"
                required
                className="w-full rounded border border-white/10 bg-black/40 px-3 py-2 text-xs text-white placeholder:text-zinc-600 focus:border-cyan-500/50 focus:outline-none"
                aria-label="Your email"
                disabled={sending}
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type message..."
                  required
                  className="flex-1 rounded border border-white/10 bg-black/40 px-3 py-2 text-xs text-white placeholder:text-zinc-600 focus:border-cyan-500/50 focus:outline-none"
                  aria-label="Message"
                  disabled={sending}
                />
                <button
                  type="submit"
                  disabled={sending}
                  className="rounded bg-blue-600/60 px-4 py-2 text-xs hover:bg-blue-600/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-w-[72px]"
                >
                  {sending ? "..." : "SEND"}
                </button>
              </div>
            </form>
          </GlassPanel>

          <div className="space-y-4">
            {channels.map((ch, i) => (
              <motion.a
                key={ch.label}
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 8 }}
                className="glass-panel group flex items-center justify-between rounded-xl p-6 transition-all hover:border-cyan-500/30 block"
              >
                <div>
                  <p className="font-mono text-[10px] text-zinc-500">
                    {ch.code}
                  </p>
                  <p className="text-lg font-semibold group-hover:text-cyan-400 transition-colors">
                    {ch.label}
                  </p>
                  <p className="font-mono text-[10px] text-zinc-600 mt-0.5">
                    {ch.detail}
                  </p>
                </div>
                <span className="font-mono text-cyan-400/60 group-hover:text-cyan-400 transition-colors">
                  CONNECT →
                </span>
              </motion.a>
            ))}

            <p className="font-mono text-[10px] text-zinc-600 px-2">
              Easter egg: Press &quot;K&quot; anywhere for a system pulse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
