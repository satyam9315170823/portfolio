"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Cloud, 
  Cpu 
} from "lucide-react";

// Add icons to the data structure
const skillGroups = [
  {
    title: "Languages",
    icon: <Code2 className="w-6 h-6 text-blue-400" />,
    skills: ["Go", "TypeScript", "JavaScript", "Rust", "Python", "C++", "Solidity"],
  },
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6 text-purple-400" />,
    skills: ["Next.js", "React", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6 text-green-400" />,
    skills: ["Node.js", "Express", "Go APIs", "REST", "GraphQL"],
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6 text-yellow-400" />,
    skills: ["MongoDB", "PostgreSQL", "Prisma", "Drizzle ORM", "Redis"],
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud className="w-6 h-6 text-sky-400" />,
    skills: ["Docker", "Kubernetes", "Ansible", "CI/CD", "Linux", "Nginx"],
  },
  {
    title: "Web3 & AI",
    icon: <Cpu className="w-6 h-6 text-pink-400" />,
    skills: ["Ethereum", "Solidity", "Smart Contracts", "Generative AI", "LLMs", "Vector DB"],
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 bg-black overflow-hidden">
      {/* Background Decor (Optional Grid/Glow) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="relative max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
            Technologies I leverage to build scalable, production-ready systems —
            from high-performance backends to intuitive user interfaces.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={itemVariants}
              className="
                group
                relative
                bg-white/5 
                backdrop-blur-sm
                border border-white/10
                rounded-2xl
                p-6
                hover:border-white/20
                hover:bg-white/10
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-2xl hover:shadow-purple-500/10
              "
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                  {group.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-200">
                  {group.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-3 py-1
                      text-sm font-medium
                      rounded-md
                      bg-white/5
                      text-gray-400
                      border border-white/5
                      group-hover:text-white
                      group-hover:bg-white/10
                      group-hover:border-white/20
                      transition-colors duration-300
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
