"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur-xl ">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <a
          href="#"
          className="text-lg md:text-xl font-semibold tracking-wide text-white"
        >
          Satyam<span className="text-gray-400">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-gray-400 hover:text-white transition"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5"
          aria-label="Toggle menu"
        >
          <span className="w-6 h-[2px] bg-white rounded" />
          <span className="w-6 h-[2px] bg-white rounded" />
          <span className="w-6 h-[2px] bg-white rounded" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mx-4 mb-4 rounded-xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-xl"
          >
            <div className="px-6 py-6 flex flex-col gap-6 text-gray-300">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium hover:text-white transition"
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
