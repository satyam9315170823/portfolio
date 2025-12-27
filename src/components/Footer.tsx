"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useEffect, useState } from "react";

const socials = [
  { icon: Github, href: "https://github.com/yourname", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/yourname", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/yourname", label: "Twitter" },
];

export default function Footer() {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);
  let scrollTimeout: NodeJS.Timeout;

  // 🧲 auto-hide while scrolling
  useMotionValueEvent(scrollY, "change", () => {
    setHidden(true);
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
      setHidden(false);
    }, 200);
  });

  // 🎭 fade when footer enters view
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setNearFooter(entry.isIntersecting),
      { threshold: 0.3 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: hidden || nearFooter ? 0 : 1,
        y: hidden ? 12 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="
        fixed bottom-6 left-1/2 -translate-x-1/2 z-50 mt-2
      "
    >
      {/* 🪟 Glass dock */}
 {/* 🪟 Glass dock */}
<div
  className="
    flex flex-row          /* horizontal on all screens */
    gap-2 sm:gap-4         /* tighter gap on mobile */
    rounded-full mt-2
    px-3 py-2 sm:px-4 sm:py-3
    bg-black/60
    backdrop-blur-xl
   
    shadow-[0_0_40px_rgba(0,0,0,0.6)]
  "
>
  {socials.map(({ icon: Icon, href, label }) => (
    <motion.a
      key={label}
      href={href}
      target="_blank"
      aria-label={label}
      whileHover={{ y: -4, scale: 1.08 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="
        group relative
        flex items-center justify-center
        h-9 w-9 sm:h-11 sm:w-11     /* 🔽 smaller on mobile */
        rounded-full
        bg-gray-900/70
       
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

      <Icon className="relative z-10 h-4 w-4 sm:h-5 sm:w-5" />
    </motion.a>
  ))}
</div>

    </motion.div>
  );
}
