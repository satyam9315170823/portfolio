"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Code2,
  Share2
} from "lucide-react";

// --- Data ---
const features = [
  {
    title: "System-Oriented Architecture",
    desc: "I don't just write code; I design ecosystems. From microservices in Go to event-driven architectures in Node, I prioritize data flow, bottleneck prevention, and fault tolerance.",
    icon: <Cpu className="w-6 h-6 text-indigo-400" />,
    className: "md:col-span-2",
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "Performance by Default",
    desc: "Optimizing database queries, Redis caching strategies, and minimizing latency are standard procedure.",
    icon: <Zap className="w-6 h-6 text-amber-400" />,
    className: "md:col-span-1",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Production Resilience",
    desc: "Code is only as good as its deployment. I bake in structured logging, Prometheus metrics, and graceful error handling.",
    icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    className: "md:col-span-1",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "The Modern Stack",
    desc: "Leveraging Next.js for the edge, Rust for heavy computation, and Solidity for trustless state. Tools that solve problems, not just for the hype.",
    icon: <Terminal className="w-6 h-6 text-pink-400" />,
    className: "md:col-span-2",
    gradient: "from-pink-500/20 to-rose-500/20",
  },
];

// --- Components ---

/**
 * A Card that tracks mouse movement to create a spotlight effect
 */
const SpotlightCard = ({ children, className = "", gradient = "" }: any) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative border border-white/10 bg-zinc-900/50 overflow-hidden rounded-xl ${className}`}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Inner Gradient Blob (Subtle) */}
      <div className={`absolute -right-10 -top-10 h-64 w-64 rounded-full bg-gradient-to-br ${gradient} opacity-0 blur-3xl transition duration-500 group-hover:opacity-50`} />

      <div className="relative h-full">{children}</div>
    </div>
  );
};

export default function EngineeringApproach() {
  return (
    <section className="relative w-full bg-black py-24 text-white overflow-hidden">
      
      {/* 1. Technical Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ 
             backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)", 
             backgroundSize: "40px 40px" 
           }} 
      />
      
      {/* 2. Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-400 backdrop-blur-md mb-6"
          >
            <Code2 className="w-4 h-4 text-indigo-400" />
            <span>Engineering Philosophy</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60"
          >
            Built for Scale,<br /> Designed for Speed.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-zinc-400"
          >
            My approach blends low-level understanding with high-level product sense.
            I build software that isn't just functional, but durable.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={feature.className}
            >
              <SpotlightCard gradient={feature.gradient} className="h-full">
                <div className="flex h-full flex-col justify-between p-8">
                  
                  {/* Icon & Decor */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 ring-1 ring-white/5">
                      {feature.icon}
                    </div>
                    {/* Decorative bits */}
                    <div className="h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                      {feature.desc}
                    </p>
                  </div>

                  {/* Visual flourish at bottom of card */}
                  {feature.className.includes("col-span-2") && (
                    <div className="absolute bottom-4 right-4 opacity-20">
                      <Share2 className="w-24 h-24 text-white rotate-[-15deg] translate-y-8 translate-x-8" />
                    </div>
                  )}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
