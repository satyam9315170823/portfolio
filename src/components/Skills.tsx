"use client";

import { motion, Variants } from "framer-motion";
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Cloud, 
  Cpu 
} from "lucide-react";

// --- DATA ---
const skillGroups = [
  {
    title: "Languages",
    // Added explicit color class for dynamic styling
    color: "text-blue-400",
    glow: "group-hover:shadow-blue-500/20",
    bg: "group-hover:bg-blue-500/10",
    border: "group-hover:border-blue-500/20",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["Go", "TypeScript", "JavaScript", "Rust", "Python", "C++", "Solidity"],
  },
  {
    title: "Frontend",
    color: "text-purple-400",
    glow: "group-hover:shadow-purple-500/20",
    bg: "group-hover:bg-purple-500/10",
    border: "group-hover:border-purple-500/20",
    icon: <Layout className="w-5 h-5" />,
    skills: ["Next.js", "React", "Tailwind CSS", "shadcn"],
  },
  {
    title: "Backend",
    color: "text-emerald-400",
    glow: "group-hover:shadow-emerald-500/20",
    bg: "group-hover:bg-emerald-500/10",
    border: "group-hover:border-emerald-500/20",
    icon: <Server className="w-5 h-5" />,
    skills: ["Node.js", "Express", "Go APIs", "REST", "GraphQL","Grpc","Kafka" ,"tRPC"],
  },
  {
    title: "Databases",
    color: "text-amber-400",
    glow: "group-hover:shadow-amber-500/20",
    bg: "group-hover:bg-amber-500/10",
    border: "group-hover:border-amber-500/20",
    icon: <Database className="w-5 h-5" />,
    skills: ["MongoDB", "PostgreSQL", "Prisma", "Drizzle ORM", "Redis"],
  },
  {
    title: "DevOps & Cloud",
    color: "text-sky-400",
    glow: "group-hover:shadow-sky-500/20",
    bg: "group-hover:bg-sky-500/10",
    border: "group-hover:border-sky-500/20",
    icon: <Cloud className="w-5 h-5" />,
    skills: ["Docker", "Kubernetes", "Ansible", "CI/CD", "AWS","Jenkins",Terraform, "Nginx"],
  },
  {
    title: "Web3 & AI",
    color: "text-rose-400",
    glow: "group-hover:shadow-rose-500/20",
    bg: "group-hover:bg-rose-500/10",
    border: "group-hover:border-rose-500/20",
    icon: <Cpu className="w-5 h-5" />,
    skills: ["Ethereum", "Solidity", "Smart Contracts","Langchain","Langgraph","Mcp","Rust" ,"OpenAI API", "Vector DB"],
  },
];

// --- ANIMATION ---
const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 bg-zinc-950 overflow-hidden text-zinc-200 selection:bg-zinc-800 selection:text-white">
      
      {/* 1. Subtle Noise Overlay (Consistent with Philosophy Section) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
           style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }} 
      />

      {/* 2. Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-400 mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            STACK OVERVIEW
          </div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">
            Technical <span className="font-serif italic text-zinc-500">Arsenal.</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed font-light">
            I don't just use tools; I select the right infrastructure for the job. 
            A curated stack focused on type-safety, scalability, and developer experience.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={item}
              className={`
                group relative
                flex flex-col
                h-full
                p-6
                bg-zinc-900/40
                border border-white/5
                rounded-2xl
                hover:border-white/10
                transition-all duration-300
                backdrop-blur-sm
              `}
            >
              {/* Hover Glow Effect (Colored based on category) */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.02] to-transparent rounded-2xl`} />

              {/* Card Header */}
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="flex items-center gap-3">
                  <div className={`
                    p-2.5 rounded-lg 
                    bg-white/5 border border-white/5 
                    text-zinc-400 
                    transition-all duration-300
                    ${group.color} 
                    ${group.bg} 
                    ${group.border}
                  `}>
                    {group.icon}
                  </div>
                  <h3 className="text-lg font-medium text-zinc-200 tracking-tight">
                    {group.title}
                  </h3>
                </div>
              </div>

              {/* Skills Tags - "Terminal Style" */}
              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-2.5 py-1
                      text-[11px] font-mono tracking-wide
                      rounded-[4px]
                      bg-white/5
                      text-zinc-400
                      border border-white/5
                      transition-all duration-300
                      hover:text-zinc-200
                      hover:bg-white/10
                      hover:border-white/20
                      cursor-default
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
