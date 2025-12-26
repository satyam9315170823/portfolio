"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  {
    icon: Github,
    href: "https://github.com/yourname",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/yourname",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/yourname",
    label: "Twitter",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gray-800 bg-black">
      {/* Subtle top border glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-600/60 to-transparent" />

      {/* Background Text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span
          className="
            select-none font-extrabold tracking-widest
            text-[18vw] sm:text-[14vw]
            text-white/[0.03]
            uppercase
          "
        >
          SATYAM
        </span>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center gap-8"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              aria-label={label}
              whileHover={{ y: -6, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="
                group relative
                p-4 rounded-xl
                border border-gray-800
                bg-gray-900/60 backdrop-blur
                text-gray-400
                hover:text-white hover:border-gray-600
                transition-all duration-300
              "
            >
              {/* Glow on hover */}
              <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent" />
              </span>

              <Icon className="relative z-10 h-6 w-6" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
