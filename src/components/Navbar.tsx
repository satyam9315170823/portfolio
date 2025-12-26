"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [scrollDown, setScrollDown] = useState(false);

  const lastScrollY = useRef(0);

  // ✅ Detect scroll direction
  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDown(currentScrollY > lastScrollY.current && currentScrollY > 80);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile dropdown animation
  const menuVariants = {
    closed: { opacity: 0, scale: 0.95, y: -20 },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {/* ✅ Mobile: hide whole navbar on scroll down */}
      {(!scrollDown || typeof window === "undefined") && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
        >
          <div className="relative w-full max-w-2xl">
            {/* Main Bar */}
            <div className="relative z-50 flex h-14 items-center justify-between rounded-full border border-white/10 bg-black/60 px-6 backdrop-blur-xl shadow-lg shadow-black/20">
              
              {/* Logo */}
              <a
                href="#"
                className="relative z-50 text-lg font-bold tracking-tight text-white"
              >
                Satyam<span className="text-indigo-500">.</span>
              </a>

              {/* Desktop Links (hide on scroll down) */}
              <motion.div
                animate={{
                  opacity: scrollDown ? 0 : 1,
                  width: scrollDown ? 0 : "auto",
                }}
                transition={{ duration: 0.3 }}
                className="hidden md:flex items-center gap-1 overflow-hidden"
              >
                {links.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white"
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

              {/* Hamburger */}
              <button
                onClick={() => setOpen(!open)}
                className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
              >
                <motion.span
                  animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="h-0.5 w-6 bg-white rounded-full"
                />
                <motion.span
                  animate={open ? { opacity: 0 } : { opacity: 1 }}
                  className="h-0.5 w-6 bg-white rounded-full"
                />
                <motion.span
                  animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="h-0.5 w-6 bg-white rounded-full"
                />
              </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={menuVariants}
                  className="absolute left-0 right-0 top-[110%] rounded-2xl border border-white/10 bg-black/80 p-4 backdrop-blur-xl md:hidden"
                >
                  <div className="flex flex-col gap-2">
                    {links.map((link) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        variants={itemVariants}
                        onClick={() => setOpen(false)}
                        className="rounded-xl p-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white"
                      >
                        {link.name}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
