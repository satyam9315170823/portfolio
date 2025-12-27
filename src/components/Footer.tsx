"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useRef } from "react";

const socials = [
  { icon: Github, href: "https://github.com/yourname", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/yourname", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/yourname", label: "Twitter" },
];

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // scroll-based motion
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const glow = useTransform(scrollYProgress, [0, 1], [0.08, 0.18]);

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden bg-black border-t border-gray-800"
    >
      {/* top divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgb(var(--accent))/50] to-transparent" />

      {/* ===== Background ===== */}
      <motion.div
        style={{ opacity: glow }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgb(var(--accent))] blur-[160px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
      </motion.div>

      {/* ===== SATYAM Identity ===== */}
     {/* ===== SATYAM Identity ===== */}
<motion.div
  style={{ y }}
  className="pointer-events-none absolute inset-0 flex items-center justify-center"
>
  <div className="relative">
    {/* main text */}
    <span
      className="
        select-none font-black uppercase tracking-[0.25em]
        text-[14vw] sm:text-[10vw]   /* ↓ smaller */
        text-[rgb(var(--accent))/7] /* ↓ dimmer */
        drop-shadow-[0_0_40px_rgba(var(--accent),0.18)]
      "
    >
      SATYAM
    </span>

    {/* scan-line (softer & thinner) */}
    <motion.span
      animate={{ y: ["-30%", "130%"] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
      className="
        absolute left-0 right-0 top-0 h-8
        bg-gradient-to-b
        from-transparent
        via-[rgb(var(--accent))/15]
        to-transparent
        blur-sm
      "
    />

    {/* ambient pulse (very subtle) */}
    <motion.span
      animate={{ opacity: [0.05, 0.12, 0.05] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="
        absolute inset-0
        text-[rgb(var(--accent))/6]
        blur-2xl
      "
    >
      SATYAM
    </motion.span>
  </div>
</motion.div>



      {/* ===== Content ===== */}
    {/* ===== Content (ICONS – STATIC) ===== */}
{/* ===== FIXED SOCIAL ICONS ===== */}
<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="flex gap-4"
  >
    {socials.map(({ icon: Icon, href, label }) => (
      <motion.a
        key={label}
        href={href}
        target="_blank"
        aria-label={label}
        whileHover={{ y: -6, scale: 1.08 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        className="
          group relative
          flex h-11 w-11 items-center justify-center
          rounded-full
          border border-gray-800
          bg-black/80 backdrop-blur
          text-gray-400
          hover:text-[rgb(var(--accent))]
          hover:border-[rgb(var(--accent))/60]
          transition-colors
        "
      >
        {/* hover glow */}
        <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition">
          <span className="absolute inset-0 rounded-full bg-[rgb(var(--accent))/20] blur-md" />
        </span>

        <Icon className="relative z-10 h-5 w-5" />
      </motion.a>
    ))}
  </motion.div>
</div>


    </footer>
  );
}
