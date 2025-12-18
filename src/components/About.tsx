"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8">About Me</h2>

          <div className="grid md:grid-cols-2 gap-10">
            
            {/* LEFT TEXT */}
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                I am a <span className="text-gray-200 font-medium">full stack developer</span>{" "}
                with a strong focus on building{" "}
                <span className="text-gray-200">scalable, reliable, and production-ready applications</span>.
                My experience spans across backend systems, modern frontend
                frameworks, cloud infrastructure, Web3 technologies, and
                Generative AI solutions.
              </p>

              <p>
                I enjoy working close to the system level — designing APIs,
                optimizing databases, writing efficient business logic, and
                ensuring applications perform well under real-world load.
                I also care deeply about clean architecture, maintainable code,
                and developer experience.
              </p>

              <p>
                Over time, I’ve built and shipped projects using{" "}
                <span className="text-gray-200">
                  Go, MERN stack, Next.js, Rust, Web3 protocols, DevOps pipelines,
                  and Gen AI models
                </span>.
                These projects have helped me develop a strong understanding of
                end-to-end system design — from UI and backend services to
                deployment and monitoring.
              </p>
            </div>

            {/* RIGHT HIGHLIGHTS */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 space-y-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-100">
                What I Focus On
              </h3>

              <ul className="space-y-4 text-gray-400">
                <li>⚙️ Designing scalable backend systems & APIs</li>
                <li>🧩 Building clean, responsive UI with modern frameworks</li>
                <li>☁️ Automating deployment using DevOps best practices</li>
                <li>🔗 Exploring Web3 & decentralized application architecture</li>
                <li>🤖 Integrating Generative AI into real products</li>
              </ul>

              <div className="pt-4 border-t border-gray-800">
                <p className="text-sm text-gray-500">
                  Currently focused on deepening system design knowledge,
                  contributing to real-world projects, and preparing for
                  high-impact internships and open-source programs like GSoC.
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
