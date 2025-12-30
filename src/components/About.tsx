"use client";

import { motion, Variants } from "framer-motion";
import { 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Layers, 
  ArrowUpRight 
} from "lucide-react";

// --- DATA ---
const philosophies = [
  {
    id: "01",
    title: "Scalability is Intentional",
    desc: "I don't write code that just 'works' today. I engineer systems that survive tomorrow. Whether it's decoupling services or enforcing strict type safety, every decision is made to prevent technical debt before it starts.",
    icon: <Layers className="w-5 h-5" />,
    colSpan: "md:col-span-2",
    bg: "bg-gradient-to-br from-zinc-800/50 to-zinc-900/50",
  },
  {
    id: "02",
    title: "Obsessive Performance",
    desc: "A 100ms delay is a UX failure. I aggressively optimize bundles, leverage edge caching, and fine-tune database indexing because speed is a feature, not an afterthought.",
    icon: <Zap className="w-5 h-5" />,
    colSpan: "md:col-span-1",
    bg: "bg-zinc-900/50",
  },
  {
    id: "03",
    title: "Sleep-Well Reliability",
    desc: "Production shouldn't be scary. By implementing comprehensive logging, graceful degradation, and automated recovery strategies, I ensure the system stays up so I can sleep soundly.",
    icon: <ShieldCheck className="w-5 h-5" />,
    colSpan: "md:col-span-1",
    bg: "bg-zinc-900/50",
  },
  {
    id: "04",
    title: "Pragmatism Over Hype",
    desc: "I choose tools that solve business problems, not just what's trending on Twitter. Rust for safety, Next.js for scale, and SQL for truth. The stack serves the product, not the other way around.",
    icon: <Cpu className="w-5 h-5" />,
    colSpan: "md:col-span-2",
    bg: "bg-gradient-to-bl from-zinc-800/50 to-zinc-900/50",
  },
];

// --- VARIANTS (Typed to fix the build error) ---
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.4, 
      ease: "easeOut" 
    } 
  }
};

export default function EngineeringPhilosophy() {
  return (
    <section id="about"  className="relative w-full py-32 bg-zinc-950 text-zinc-100 overflow-hidden">
      
      {/* 1. Subtle Noise Overlay for Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
           style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }} 
      />

      {/* 2. Soft Ambient Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        
        {/* Header - Editorial Style */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 md:flex md:items-end md:justify-between border-b border-white/10 pb-8"
        >
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6">
              Code as <span className="font-serif italic text-zinc-400">craft.</span>
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Software engineering isn't just about syntax. It's about designing architectures that are resilient, maintainable, and remarkably fast.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
              Est. 2025 // Philosophy
            </span>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {philosophies.map((card) => (
            <motion.div
              key={card.id}
              variants={item}
              className={`
                ${card.colSpan} 
                ${card.bg}
                group relative flex flex-col justify-between
                p-8 rounded-2xl
                border border-white/5
                hover:border-white/10
                transition-colors duration-500
                backdrop-blur-sm
              `}
            >
              {/* Hover Interaction: Subtle Lift */}
              <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-zinc-900 rounded-lg border border-white/5 text-zinc-300 group-hover:text-white transition-colors">
                    {card.icon}
                  </div>
                  <span className="font-mono text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors">
                    {card.id}
                  </span>
                </div>

                <h3 className="text-2xl font-medium text-white mb-3 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm md:text-[15px]">
                  {card.desc}
                </p>
              </div>

              {/* Decorative Corner Icon for larger cards */}
              {card.colSpan.includes("col-span-2") && (
                <ArrowUpRight className="absolute top-8 right-8 w-5 h-5 text-zinc-700 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
