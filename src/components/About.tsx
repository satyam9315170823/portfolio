"use client";

import { motion, Variants } from "framer-motion";
import { 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Layers, 
  ArrowUpRight 
} from "lucide-react";

// --- DATA (Content Preserved) ---
const philosophies = [
  {
    id: "01",
    title: "Scalability is Intentional",
    desc: "I don't write code that just 'works' today. I engineer systems that survive tomorrow. Whether it's decoupling services or enforcing strict type safety, every decision is made to prevent technical debt before it starts.",
    icon: <Layers className="w-5 h-5" />,
    colSpan: "md:col-span-2",
  },
  {
    id: "02",
    title: "Obsessive Performance",
    desc: "A 100ms delay is a UX failure. I aggressively optimize bundles, leverage edge caching, and fine-tune database indexing because speed is a feature, not an afterthought.",
    icon: <Zap className="w-5 h-5" />,
    colSpan: "md:col-span-1",
  },
  {
    id: "03",
    title: "Sleep-Well Reliability",
    desc: "Production shouldn't be scary. By implementing comprehensive logging, graceful degradation, and automated recovery strategies, I ensure the system stays up so I can sleep soundly.",
    icon: <ShieldCheck className="w-5 h-5" />,
    colSpan: "md:col-span-1",
  },
  {
    id: "04",
    title: "Pragmatism Over Hype",
    desc: "I choose tools that solve business problems, not just what's trending on Twitter. Rust for safety, Next.js for scale, and SQL for truth. The stack serves the product, not the other way around.",
    icon: <Cpu className="w-5 h-5" />,
    colSpan: "md:col-span-2",
  },
];

// --- ANIMATIONS ---
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  show: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1] // Custom ease for smooth entry
    } 
  }
};

export default function EngineeringPhilosophy() {
  return (
    <section id="about" className="relative w-full py-32 bg-black text-zinc-100 overflow-hidden selection:bg-zinc-800 selection:text-white">
      
      {/* 1. Technical Grid Background */}
      <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* 2. Soft Ambient Top Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        
        {/* Header - Editorial Style */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 md:flex md:items-end md:justify-between border-b border-white/5 pb-10"
        >
          <div className="max-w-xl relative">
             {/* Decorative small tag */}
             <div className="absolute -top-12 left-0 px-3 py-1 border border-white/10 rounded-full bg-white/5 text-[10px] uppercase tracking-widest text-zinc-400 backdrop-blur-md">
                Core Principles
             </div>

            <h2 className="text-5xl md:text-8xl font-medium tracking-tighter text-white mb-6">
              Code as <span className="font-serif italic text-zinc-500 font-light">craft.</span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
              Software engineering isn't just about syntax. It's about designing architectures that are resilient, maintainable, and remarkably fast.
            </p>
          </div>
          <div className="hidden md:flex flex-col items-end gap-2 opacity-50">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              Est. 2025
            </span>
            <div className="w-12 h-[1px] bg-zinc-700" />
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              Philosophy
            </span>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {philosophies.map((card) => (
            <motion.div
              key={card.id}
              variants={item}
              className={`
                ${card.colSpan} 
                group relative flex flex-col justify-between
                p-8 md:p-10 rounded-3xl
                bg-zinc-900/20
                border border-white/5
                hover:border-white/10
                transition-all duration-500 ease-out
                overflow-hidden
              `}
            >
              {/* Card Background Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-100 transition-opacity duration-500" />
              
              {/* Hover Glow Effect */}
              <div className="absolute -inset-px bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/5 text-zinc-300 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    {/* Icon Glow */}
                    <div className="absolute inset-0 bg-white/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                    {card.icon}
                  </div>
                  <span className="font-mono text-[10px] text-zinc-700 group-hover:text-zinc-500 transition-colors border border-white/5 px-2 py-1 rounded-full">
                    {card.id}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                  {card.desc}
                </p>
              </div>

              {/* Decorative Corner Arrow */}
              <ArrowUpRight className="absolute top-6 right-6 w-5 h-5 text-zinc-800 group-hover:text-zinc-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
