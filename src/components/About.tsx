"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const philosophies = [
  {
    id: "01",
    title: "Radical Simplicity",
    tag: "Architecture",
    description:
      "Complexity is the enemy of execution. I reject over-engineering in favor of systems that are easy to reason about, trivial to debug, and boring to deploy. Simple code doesn't hide bugs.",
    tech: ["Go / Rust", "Microservices", "System Design"],
  },
  {
    id: "02",
    title: "Obsessive Performance",
    tag: "Latency",
    description:
      "We don't optimize for the average case; we optimize for the 99th percentile. From V8 garbage collection tuning to edge-caching strategies, every millisecond is a battle won.",
    tech: ["WASM", "Redis", "Next.js Edge"],
  },
  {
    id: "03",
    title: "Fault Tolerance",
    tag: "Reliability",
    description:
      "Things will break. My systems assume failure as a default state. I build self-healing architectures using idempotent event loops and aggressive circuit breaking.",
    tech: ["Kafka", "Kubernetes", "Chaos Engineering"],
  },
  {
    id: "04",
    title: "The Craft",
    tag: "Quality",
    description:
      "Code is written for humans first, machines second. I enforce strict linting, meaningful testing, and documentation that actually explains 'why', not just 'how'.",
    tech: ["TypeScript", "CI/CD", "Testing Library"],
  },
];

export default function EngineeringManifesto() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="about" className="relative bg-[#050505] text-[#e1e1e1] py-24 px-6 md:px-12 overflow-hidden selection:bg-white selection:text-black">
      
      {/* Subtle Grain Texture Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }} 
      />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-24 md:flex md:justify-between md:items-end border-b border-white/10 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-sm font-mono text-zinc-500 mb-4 tracking-widest uppercase">
              // Engineering Philosophy
            </h2>
            <p className="text-4xl md:text-6xl font-serif tracking-tight leading-[0.95]">
              Form follows <br />
              <span className="italic text-zinc-500">Function.</span>
            </p>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            className="hidden md:block text-zinc-500 max-w-xs text-sm font-mono mt-6 md:mt-0 text-right"
          >
            Crafting digital resilience through <br/> disciplined architecture.
          </motion.p>
        </div>

        {/* Interactive List */}
        <div className="flex flex-col">
          {philosophies.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative border-b border-white/10 cursor-pointer"
            >
              {/* Background Expansion on Hover */}
              <motion.div
                layoutId="highlight"
                className="absolute inset-0 bg-white z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />

              <div className="relative z-10 flex flex-col md:flex-row py-12 px-2 md:px-6 transition-colors duration-300 group-hover:text-black">
                
                {/* ID & Tag */}
                <div className="w-full md:w-1/4 flex flex-row md:flex-col justify-between mb-4 md:mb-0">
                  <span className="font-mono text-xs opacity-50 group-hover:opacity-100 transition-opacity">
                    ({item.id})
                  </span>
                  <span className="font-mono text-xs tracking-widest uppercase mt-0 md:mt-2 opacity-50 group-hover:opacity-100 transition-opacity">
                    {item.tag}
                  </span>
                </div>

                {/* Main Title */}
                <div className="w-full md:w-2/4">
                  <h3 className="text-3xl md:text-5xl font-serif font-light tracking-tight group-hover:translate-x-2 transition-transform duration-500 ease-out">
                    {item.title}
                  </h3>
                </div>

                {/* Interaction Arrow */}
                <div className="w-full md:w-1/4 flex justify-end items-start opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" />
                </div>
              </div>

              {/* Expanded Description */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden relative z-10"
                  >
                    <div className="flex flex-col md:flex-row px-2 md:px-6 pb-12 pt-0 group-hover:text-black">
                      <div className="md:w-1/4" /> {/* Spacer */}
                      <div className="md:w-3/4 flex flex-col md:flex-row gap-8">
                        <p className="text-lg leading-relaxed md:w-2/3 font-light opacity-90">
                          {item.description}
                        </p>
                        <div className="md:w-1/3 flex flex-col gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider opacity-60">
                            Stack
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {item.tech.map((t) => (
                              <span key={t} className="text-sm font-mono border border-black/20 px-2 py-1 rounded-sm">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
