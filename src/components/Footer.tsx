"use client";

import { motion } from "framer-motion";

const socials = [
  { name: "GitHub", href: "https://github.com/yourname" },
  { name: "LinkedIn", href: "https://linkedin.com/in/yourname" },
  { name: "Twitter", href: "https://twitter.com/yourname" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gray-800 bg-black">
      {/* Ambient gradient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-40 w-[600px] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-3xl" />
      </div>

      {/* Thin top highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-600/60 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-10"
        >
          {/* Name / Brand */}
          <div className="text-center">
            <h3 className="text-xl font-semibold tracking-wide text-white">
              Satyam Kumar
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Full-Stack Engineer · Web · DevOps · Web3 · GenAI
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-5">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="
                  group relative px-6 py-3 rounded-xl
                  border border-gray-800
                  bg-gray-900/60 backdrop-blur
                  text-gray-300
                  transition-all duration-300
                  hover:text-white hover:border-gray-600
                "
              >
                {/* Hover glow */}
                <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition">
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
                </span>

                {/* Text + underline */}
                <span className="relative z-10">
                  {social.name}
                  <span className="block h-px w-0 bg-white/60 transition-all duration-300 group-hover:w-full" />
                </span>
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

          {/* Copyright */}
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Satyam Kumar. Crafted with precision and purpose.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
