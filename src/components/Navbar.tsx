"use client";

import { useState } from "react";
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

  // Animation variants for the mobile menu
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
      <div className="relative w-full max-w-2xl">
        
        {/* Main Glass Bar */}
        <div className="relative z-50 flex h-14 items-center justify-between rounded-full border border-white/10 bg-black/60 px-6 backdrop-blur-xl shadow-lg shadow-black/20">
          
          {/* Logo */}
          <a
            href="#"
            className="group relative z-50 text-lg font-bold tracking-tight text-white transition-opacity hover:opacity-80"
          >
            Satyam<span className="text-indigo-500">.</span>
          </a>

          {/* Desktop Links with "Magnetic" Sliding Background */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                {/* The sliding background pill */}
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
          </div>

          {/* Animated Hamburger Button */}
          <button
            onClick={() => setOpen(!open)}
            className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden focus:outline-none"
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
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {open && (
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
                    {/* Arrow Icon for style */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-4 w-4 opacity-50"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
