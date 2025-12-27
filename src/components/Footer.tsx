"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/yourname", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/yourname", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/yourname", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black border-t border-gray-800">
      {/* top divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

      {/* ===== Background ===== */}
      <div className="pointer-events-none absolute inset-0">
        {/* neon center glow */}
        <div className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-[140px]" />

        {/* vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
      </div>

      {/* Background name */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span
          className="
            select-none font-black uppercase tracking-[0.25em]
            text-[20vw] sm:text-[14vw]
            text-emerald-400/10
            drop-shadow-[0_0_60px_rgba(16,185,129,0.25)]
            mask-image:linear-gradient(to_bottom,transparent,black,transparent)
          "
        >
          SATYAM
        </span>
      </div>

      {/* ===== Content ===== */}
      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              aria-label={label}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="
                group relative
                flex h-11 w-11 items-center justify-center
                rounded-full
                border border-gray-800
                bg-gray-900
                text-gray-400
                hover:text-emerald-400 hover:border-emerald-500/60
                transition-colors duration-300
              "
            >
              {/* hover glow */}
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition">
                <span className="absolute inset-0 rounded-full bg-emerald-400/15 blur-md" />
              </span>

              <Icon className="relative z-10 h-5 w-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
