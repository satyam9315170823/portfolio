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
        relative py-28 overflow-hidden
        bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
        from-gray-900/40 via-gray-950 to-black
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Projects
          </h2>
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            Carefully crafted projects focused on scalability, system design,
            and real-world engineering challenges.
          </p>
        </motion.div>

        {/* ================= FEATURED PROJECTS ================= */}
        <div className="mb-24">
          <h3 className="text-2xl font-semibold mb-10">
            Featured Projects
          </h3>

          <div className="grid lg:grid-cols-3 gap-8">
            {mainProjects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -8, scale: 1.01 }}
                className="
                  relative
                  bg-gradient-to-br from-gray-900/80 to-gray-950/80
                  backdrop-blur-xl
                  border border-gray-800/60
                  rounded-3xl
                  p-8
                  shadow-[0_0_0_1px_rgba(255,255,255,0.04)]
                  hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.15)]
                  transition-all duration-300
                "
              >
                {/* Glow */}
                <div className="
                  absolute inset-0 -z-10
                  bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10
                  blur-2xl opacity-60
                " />

                <h4 className="text-xl font-semibold mb-3 tracking-tight">
                  {project.title}
                </h4>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="
                        px-3 py-1.5 text-xs rounded-full
                        bg-white/5 border border-white/10
                        text-gray-300 backdrop-blur-md
                      "
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 text-sm">
                  <a
                    href={project.repo}
                    target="_blank"
                    className="text-gray-400 hover:text-white transition hover:underline underline-offset-4"
                  >
                    GitHub →
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-gray-400 hover:text-white transition hover:underline underline-offset-4"
                  >
                    Live →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-20 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

        {/* ================= FILTER TABS ================= */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300
                ${
                  active === cat
                    ? "bg-white text-black shadow-md"
                    : "bg-white/5 text-gray-300 hover:bg-white/10"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ================= OTHER PROJECTS ================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {otherProjects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -6 }}
                className="
                  bg-gradient-to-b from-gray-900/70 to-gray-950/70
                  backdrop-blur-lg
                  border border-gray-800/60
                  rounded-2xl
                  p-6
                  hover:border-gray-600
                  hover:shadow-lg
                  transition-all duration-300
                "
              >
                <h4 className="text-lg font-semibold mb-2">
                  {project.title}
                </h4>

                <p className="text-gray-400 text-sm mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="
                        px-3 py-1 text-xs rounded-full
                        bg-white/5 border border-white/10
                        text-gray-300
                      "
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 text-sm">
                  <a
                    href={project.repo}
                    target="_blank"
                    className="text-gray-400 hover:text-white transition hover:underline underline-offset-4"
                  >
                    GitHub →
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-gray-400 hover:text-white transition hover:underline underline-offset-4"
                  >
                    Live →
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
