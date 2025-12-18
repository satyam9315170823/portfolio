"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hi, I’m <span className="text-gray-400">Satyam Kumar</span>
            </h1>

            <p className="text-xl text-gray-300 mb-4">
              Full Stack Developer
            </p>

            <p className="text-gray-400 max-w-xl leading-relaxed mb-8">
              I design and build scalable, high-performance web applications
              using <strong>Go</strong>, <strong>MERN</strong>, <strong>Next.js</strong>,
              <strong>Rust</strong>, <strong>Web3</strong>, <strong>DevOps</strong> and
              <strong> Generative AI</strong>.  
              I enjoy solving real-world problems and turning ideas into
              production-ready systems.
            </p>

            {/* SKILLS TAGS */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "GoLang",
                "Next.js",
                "MERN",
                "Rust",
                "Web3",
                "DevOps",
                "Gen AI",
                "C++",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm bg-gray-900 border border-gray-800 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-4">
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
              >
                Download Resume
              </a>

              <a
                href="#projects"
                className="px-6 py-3 border border-gray-700 rounded-lg hover:border-gray-400 transition"
              >
                View Projects
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-gray-800 bg-gray-900">
              <Image
                src="/profile.jpg"
                alt="Satyam Kumar"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
