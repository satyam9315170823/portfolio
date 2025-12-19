"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-800 bg-black">
      {/* subtle top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-10"
        >
          {/* Social Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/yourname"
              target="_blank"
              className="group relative px-6 py-3 rounded-xl bg-gray-900/70 border border-gray-800 text-gray-300
                         backdrop-blur transition-all duration-300
                         hover:text-white hover:border-gray-600 hover:bg-gray-900"
            >
              <span className="relative z-10">GitHub</span>
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition
                              bg-gradient-to-r from-gray-700/20 to-gray-500/10" />
            </a>

            <a
              href="https://linkedin.com/in/yourname"
              target="_blank"
              className="group relative px-6 py-3 rounded-xl bg-gray-900/70 border border-gray-800 text-gray-300
                         backdrop-blur transition-all duration-300
                         hover:text-white hover:border-gray-600 hover:bg-gray-900"
            >
              <span className="relative z-10">LinkedIn</span>
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition
                              bg-gradient-to-r from-gray-700/20 to-gray-500/10" />
            </a>

            <a
              href="https://twitter.com/yourname"
              target="_blank"
              className="group relative px-6 py-3 rounded-xl bg-gray-900/70 border border-gray-800 text-gray-300
                         backdrop-blur transition-all duration-300
                         hover:text-white hover:border-gray-600 hover:bg-gray-900"
            >
              <span className="relative z-10">Twitter</span>
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition
                              bg-gradient-to-r from-gray-700/20 to-gray-500/10" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
