"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8"
        >
          {/* Social Buttons */}
          <div className="flex gap-4">
            <a
              href="https://github.com/yourname"
              target="_blank"
              className="px-6 py-3 rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-600 transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourname"
              target="_blank"
              className="px-6 py-3 rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-600 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/yourname"
              target="_blank"
              className="px-6 py-3 rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-600 transition"
            >
              Twitter
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-sm h-px bg-gray-800" />

          {/* Text */}
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Satyam Kumar · Built with Next.js &
            Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
