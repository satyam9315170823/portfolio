"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Backend-First Thinking",
    desc: "I design APIs, data models, and services with scalability, maintainability, and performance as first-class concerns.",
  },
  {
    title: "System-Oriented Design",
    desc: "I care about architecture, bottlenecks, and predictable behavior under real-world load, not just happy paths.",
  },
  {
    title: "Modern Engineering Stack",
    desc: "Go, Next.js, MERN, Rust, Web3, DevOps, and Generative AI — used intentionally where they provide real value.",
  },
  {
    title: "Production Mindset",
    desc: "Logging, monitoring, CI/CD, deployments, and failure scenarios are part of the system, not afterthoughts.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-20 sm:py-24 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Heading */}
        {/* Heading */}
<h2 className="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-14 text-center">
  Engineering approach
</h2>


          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {cards.map((card) => (
              <div
                key={card.title}
                className="
                  rounded-2xl
                  p-6 sm:p-8
                  bg-white/5
                  border border-white/10
                  hover:border-white/25
                  transition
                "
              >
                <h3 className="text-lg sm:text-xl font-medium mb-3">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
