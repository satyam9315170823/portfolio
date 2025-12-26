"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isCompact, setIsCompact] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 50) {
      setIsCompact(true);
      setOpen(false);
    } else if (latest < previous) {
      setIsCompact(false);
    }
  });

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.8 }}
        onMouseEnter={() => setIsCompact(false)}
        className="relative flex items-center rounded-full border border-white/10 bg-black/60 backdrop-blur-2xl shadow-2xl shadow-black/40 overflow-hidden"
        style={{ height: 58 }}
      >
        {/* LOGO */}
        <motion.div 
          layout="position" 
          className="relative z-20 flex items-center px-6"
        >
            <a href="#" className="text-lg font-bold tracking-tight text-white whitespace-nowrap">
              Satyam<span className="text-indigo-500">.</span>
            </a>
        </motion.div>

        {/* DESKTOP LINKS */}
        <AnimatePresence mode="popLayout">
          {!isCompact && (
            <motion.div
              initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              // ADDED ml-8 HERE FOR SPACING
              className="hidden md:flex items-center gap-1 pr-2 ml-8"
            >
              {links.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
                >
                  {hoveredIndex === index && (
                    <motion.span
                      layoutId="bubble"
                      className="absolute inset-0 -z-10 rounded-full bg-white/10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* HAMBURGER (Mobile) */}
        <div className="md:hidden flex items-center pr-6 pl-2">
             <AnimatePresence mode="popLayout">
                {!isCompact && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setOpen(!open)}
                        className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 focus:outline-none"
                    >
                        <motion.span
                        animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                        className="h-0.5 w-6 rounded-full bg-white"
                        />
                        <motion.span
                        animate={open ? { opacity: 0 } : { opacity: 1 }}
                        className="h-0.5 w-6 rounded-full bg-white"
                        />
                        <motion.span
                        animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                        className="h-0.5 w-6 rounded-full bg-white"
                        />
                    </motion.button>
                )}
             </AnimatePresence>
        </div>
      </motion.div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {open && !isCompact && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="absolute top-20 left-4 right-4 rounded-2xl border border-white/10 bg-black/80 p-4 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-between rounded-xl p-3 text-sm font-medium text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
