"use client";

import { motion } from "framer-motion";
import { 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Globe, 
  GitMerge 
} from "lucide-react";

const features = [
  {
    title: "System-Oriented Architecture",
    desc: "I don't just write code; I design ecosystems. From microservices in Go to event-driven architectures in Node, I prioritize data flow, bottleneck prevention, and fault tolerance.",
    icon: <Cpu className="w-6 h-6 text-indigo-400" />,
    className: "md:col-span-2", // Spans 2 columns
  },
  {
    title: "Performance by Default",
    desc: "Optimizing database queries, implementing Redis caching strategies, and minimizing latency are standard procedure, not afterthoughts.",
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    className: "md:col-span-1",
  },
  {
    title: "Production Resilience",
    desc: "Code is only as good as its deployment. I bake in structured logging, Prometheus metrics, and graceful error handling to ensure 99.9% reliability.",
    icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    className: "md:col-span-1",
  },
  {
    title: "The Modern Stack",
    desc: "Leveraging Next.js for the edge, Rust for heavy computation, and Solidity for trustless state. I use tools that solve problems, not just for the hype.",
    icon: <Terminal className="w-6 h-6 text-pink-400" />,
    className: "md:col-span-2", // Spans 2 columns
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function EngineeringApproach() {
  return (
    <section id="about" className="relative py-20 md:py-16  overflow-hidden">
      {/* Section Grid Background */}
<div className="absolute inset-0 -z-10
  bg-[linear-gradient(to_right,#9ca3af14_1px,transparent_1px),
      linear-gradient(to_bottom,#22c55e18_1px,transparent_1px)]
  bg-[size:28px_28px]
  [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]
" >

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[128px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Engineering Philosophy
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My approach blends low-level understanding with high-level product sense.
            I build software that isn't just functional, but durable.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          {features.map((card, index) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              className={`
                ${card.className}
                group relative
                p-8
                rounded-3xl
                bg-zinc-900/50
                border border-white/10
                hover:border-white/20
                transition-all duration-300
                backdrop-blur-sm
                overflow-hidden
              `}
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon Wrapper */}
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {card.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      </div>
      
    </section>
  );
}
