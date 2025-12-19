"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "All" | "MERN" | "Next.js" | "GoLang" | "Web3" | "GenAI";

const categories: Category[] = [
  "All",
  "MERN",
  "Next.js",
  "GoLang",
  "Web3",
  "GenAI",
];

type Project = {
  title: string;
  description: string;
  category: Category;
  tech: string[];
  live: string;
  repo: string;
  featured?: boolean;
};

const projects: Project[] = [
  // ===== FEATURED PROJECTS =====
  {
    title: "SaaS Platform",
    description:
      "Production-grade SaaS platform with authentication, payments, RBAC, dashboards, and scalable backend architecture.",
    category: "Next.js",
    tech: ["Next.js", "TypeScript", "Go", "PostgreSQL", "Docker"],
    live: "#",
    repo: "#",
    featured: true,
  },
  {
    title: "Distributed Task Manager",
    description:
      "High-scale MERN application with background jobs, caching, real-time updates, and role-based access control.",
    category: "MERN",
    tech: ["MongoDB", "Express", "React", "Node.js", "Redis"],
    live: "#",
    repo: "#",
    featured: true,
  },
  {
    title: "GenAI RAG System",
    description:
      "End-to-end RAG pipeline with embeddings, vector search, prompt orchestration, and observability.",
    category: "GenAI",
    tech: ["Next.js", "LLMs", "Vector DB", "LangChain"],
    live: "#",
    repo: "#",
    featured: true,
  },

  // ===== OTHER PROJECTS =====
  {
    title: "GoLang REST API",
    description:
      "High-performance REST API built in Go with clean architecture, JWT authentication, and PostgreSQL.",
    category: "GoLang",
    tech: ["Go", "PostgreSQL", "JWT", "Docker"],
    live: "#",
    repo: "#",
  },
  {
    title: "Web3 Voting DApp",
    description:
      "Decentralized voting application using Solidity smart contracts on Ethereum.",
    category: "Web3",
    tech: ["Solidity", "Ethereum", "Ethers.js", "Next.js"],
    live: "#",
    repo: "#",
  },
  {
    title: "AI Chat Assistant",
    description:
      "LLM-powered chat assistant with context memory and embeddings.",
    category: "GenAI",
    tech: ["LLMs", "Vector DB", "Next.js"],
    live: "#",
    repo: "#",
  },
];

export default function Projects() {
  const [active, setActive] = useState<Category>("All");

  const mainProjects = projects.filter((p) => p.featured);
  const otherProjects =
    active === "All"
      ? projects.filter((p) => !p.featured)
      : projects.filter((p) => !p.featured && p.category === active);

  return (
    <section
      id="projects"
      className="
        relative py-32 overflow-hidden
        bg-[#0a0a0a]
      "
    >
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-20 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">
              Selected Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
            Carefully crafted systems focused on scalability, distributed
            architectures, and real-world engineering challenges.
          </p>
        </motion.div>

        {/* ================= FEATURED PROJECTS ================= */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px bg-gray-800 flex-1" />
            <h3 className="text-xl font-medium text-gray-300 uppercase tracking-widest">
              Featured Work
            </h3>
            <div className="h-px bg-gray-800 flex-1" />
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {mainProjects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -5 }}
                className="
                  group relative flex flex-col justify-between
                  bg-gray-900/40 backdrop-blur-md
                  border border-white/5 hover:border-indigo-500/30
                  rounded-2xl p-8
                  transition-all duration-300 ease-out
                "
              >
                {/* Internal Glow Effect */}
                <div
                  className="
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                    bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))]
                    from-indigo-500/10 via-transparent to-transparent
                    transition-opacity duration-500
                  "
                />

                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h4>
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-300 bg-indigo-500/10 rounded-full border border-indigo-500/20">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-400 leading-relaxed text-sm mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="
                          px-2.5 py-1 text-xs rounded-md
                          bg-gray-800/50 border border-gray-700/50
                          text-gray-300
                          group-hover:bg-gray-800 group-hover:border-gray-600
                          transition-colors
                        "
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-5 pt-6 border-t border-gray-800/50">
                  <a
                    href={project.repo}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group/link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform group-hover/link:-translate-y-0.5"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Source Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group/link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform group-hover/link:-translate-y-0.5"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= FILTER TABS ================= */}
        {/* Changed layout: Stack vertically on mobile (flex-col), row on desktop (md:flex-row) */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
          <span className="text-gray-500 text-sm font-medium whitespace-nowrap">
          
          </span>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`
                  px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 border
                  ${
                    active === cat
                      ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                      : "bg-transparent text-gray-400 border-gray-800 hover:border-gray-600 hover:text-gray-200"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ================= OTHER PROJECTS ================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {otherProjects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -4 }}
                className="
                  group relative
                  bg-black/40 backdrop-blur-sm
                  border border-gray-800 hover:border-gray-600
                  rounded-xl p-6
                  transition-colors duration-300
                "
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-semibold text-gray-200 group-hover:text-white">
                    {project.title}
                  </h4>
                  {/* Links Container */}
                  <div className="flex gap-3">
                    <a
                      href={project.repo}
                      target="_blank"
                      title="View Code"
                      className="text-gray-500 hover:text-white transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      title="Live Demo"
                      className="text-gray-500 hover:text-white transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>

                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="
                        px-2 py-1 text-[10px] uppercase tracking-wider rounded
                        bg-gray-900 border border-gray-800 text-gray-400
                      "
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-[10px] text-gray-500">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
