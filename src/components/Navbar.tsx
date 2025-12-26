"use client";

import { useEffect, useState } from "react";
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

  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");
  const [isMobile, setIsMobile] = useState(false);

  // Detect scroll direction
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      setScrollDir(currentY > lastScrollY ? "down" : "up");
      lastScrollY = currentY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

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
      {/* Mobile: hide entire navbar on scroll down */}
      {!(isMobile && scrollDir === "down") && (
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
        >
          <div className="relative w-full max-w-2xl">
            {/* Main Bar */}
            <div className="relative z-50 flex h-14 items-center justify-between rounded-full border border-white/10 bg-black/60 px-6 backdrop-blur-xl shadow-lg shadow-black/20">
              {/* Logo */}
              <a
                href="#"
                className="text-lg font-bold tracking-tight text-white"
              >
                Satyam<span className="text-indigo-500">.</span>
              </a>

              {/* Desktop Links (hidden on scroll down) */}
              <AnimatePresence>
                {scrollDir === "up" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="hidden md:flex items-center gap-1"
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
                          />
                        )}
                        {link.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Hamburger */}
              <button
                onClick={() => setOpen(!open)}
                className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
              >
                <motion.span
                  animate={open ? { rotate: 45, y: 6 } : {}}
                  className="h-0.5 w-6 bg-white rounded-full"
                />
                <motion.span
                  animate={open ? { opacity: 0 } : {}}
                  className="h-0.5 w-6 bg-white rounded-full"
                />
                <motion.span
                  animate={open ? { rotate: -45, y: -6 } : {}}
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
                  {links.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      variants={itemVariants}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl p-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
