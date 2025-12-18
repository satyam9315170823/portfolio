"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      {/* subtle background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-30%] left-1/2 h-[360px] w-[360px] -translate-x-1/2 bg-white/5 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center"
        >
          {/* LEFT */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
              Full Stack Engineer
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-5">
              Building reliable,
              <br />
              <span className="text-gray-400">
                production-ready web systems
              </span>
            </h1>

            <p className="text-base text-gray-400 max-w-xl mb-7 leading-relaxed">
              I’m <span className="text-gray-200">Satyam Kumar</span>, a full stack
              developer with a backend-first mindset, focused on scalable APIs,
              clean architecture, and modern web platforms using Go, Next.js,
              and DevOps tooling.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <a
                href="#projects"
                className="w-full sm:w-auto text-center px-6 py-3 text-sm font-medium rounded-lg bg-white text-black hover:bg-gray-200 transition"
              >
                Selected Work
              </a>

              <a
                href="/resume.pdf"
                download
                className="w-full sm:w-auto text-center px-6 py-3 text-sm font-medium rounded-lg border border-gray-700 hover:border-gray-400 hover:text-gray-200 transition"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-end lg:-mr-4">
            <div className="relative w-52 h-52 md:w-60 md:h-60 border border-gray-800">
              <Image
                src="/profile.jpg"
                alt="Satyam Kumar"
                fill
                className="object-cover grayscale hover:grayscale-0 transition duration-500"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
