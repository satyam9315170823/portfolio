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
  
  // State to track if we should collapse the navbar (scrolling down)
  const [isCompact, setIsCompact] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // If we scrolled down more than 50px and current scroll is greater than previous
    if (latest > 50 && latest > (previous ?? 0)) {
      setIsCompact(true);
      setOpen(false); // Close mobile menu if open when scrolling down
    } else {
      setIsCompact(false);
    }
  });

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    // Centered Floating Container
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <motion.div
        layout
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        className="relative w-full max-w-2xl"
        // When compact, we can constrain width if desired, or let the content drive it.
        // Here we let the flex content inside drive the width animation.
        style={{ width: isCompact ? "auto" : "100%" }}
      >
        {/* Main Glass Bar */}
        <motion.div
          layout
          className={`relative z-50 flex h-14 items-center justify-between rounded-full border border-white/10 bg-black/60 px-6 backdrop-blur-xl shadow-lg shadow-black/20 ${
            isCompact ? "gap-0" : "gap-4"
          }`}
        >
          {/* Logo */}
          <motion.a
            layout
            href="#"
            className="group relative z-50 text-lg font-bold tracking-tight text-white transition-opacity hover:opacity-80 flex-shrink-0"
          >
            Satyam<span className="text-indigo-500">.</span>
          </motion.a>

          {/* Desktop Links - Hidden when compact */}
          <AnimatePresence mode="popLayout">
            {!isCompact && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
                transition={{ duration: 0.3 }}
                className="hidden md:flex items-center gap-1"
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
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                    {link.name}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Animated Hamburger Button - Hidden when compact on Desktop, Visible on Mobile */}
          {/* Note: On mobile, we might want to keep the hamburger visible even if compact, 
              OR hide it too. Based on your request "scroll up on satyam", 
              I will hide the hamburger when compact to focus purely on "Satyam". */}
          <AnimatePresence>
            {!isCompact && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="md:hidden"
              >
                <button
                  onClick={() => setOpen(!open)}
                  className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 focus:outline-none"
                  aria-label="Toggle menu"
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
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {open && !isCompact && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="absolute left-0 right-0 top-[110%] overflow-hidden rounded-2xl border border-white/10 bg-black/80 p-4 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-2">
                {links.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    variants={itemVariants}
                    onClick={() => setOpen(false)}
                    className="flex w-full items-center justify-between rounded-xl p-3 text-sm font-medium text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {link.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-4 w-4 opacity-50"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}
