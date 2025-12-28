"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "All" | "TypeScript" | "GoLang" | "Web3" | "GenAI";

const categories: Category[] = [
  "All",
  "TypeScript",
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
  // ===== FEATURED PROJECTS (EXACTLY 4) =====
  {
    title: "SaaS Platform",
    description:
      "Production-grade SaaS platform with authentication, payments, RBAC, dashboards, and scalable backend architecture.",
    category: "TypeScript",
    tech: ["Next.js", "TypeScript", "Go", "PostgreSQL", "Docker"],
    live: "#",
    repo: "#",
    featured: true,
  },
  {
    title: "Distributed Task Manager",
    description:
      "High-scale application with background jobs, caching, real-time updates, and role-based access control.",
    category: "TypeScript",
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
  {
    title: "Go Distributed API",
    description:
      "High-performance distributed REST API with clean architecture, JWT auth, caching, and observability.",
    category: "GoLang",
    tech: ["Go", "PostgreSQL", "Redis", "Docker", "OpenTelemetry"],
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
      "LLM-powered chat assistant with memory, embeddings, and context-aware responses.",
    category: "GenAI",
    tech: ["LLMs", "Vector DB", "Next.js"],
    live: "#",
    repo: "#",
  },
];

export default function Projects() {
  const [active, setActive] = useState<Category>("All");

  // ✅ Featured projects (max 4)
  const mainProjects = projects.filter((p) => p.featured).slice(0, 4);

  // ✅ Filter logic (NO featured duplication)
  const otherProjects =
    active === "All"
      ? projects.filter((p) => !p.featured)
      : projects.filter(
          (p) => !p.featured && p.category === active
        );

  return (
    <section id="projects" className="relative py-32 overflow-hidden bg-[#0a0a0a]">
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* ================= FEATURED PROJECTS ================= */}
        <div className="mb-24">
          <h3 className="mb-10 text-xl font-medium text-gray-300 uppercase tracking-widest text-center">
            Featured Work
          </h3>

          <div className="grid lg:grid-cols-3 gap-6">
            {mainProjects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -5 }}
                className="bg-gray-900/40 border border-white/5 rounded-2xl p-8"
              >
                <h4 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h4>
                <p className="text-gray-400 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs rounded-md bg-gray-800 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= FILTER BUTTONS ================= */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition
                ${
                  active === cat
                    ? "bg-white text-black border-white"
                    : "text-gray-400 border-gray-700 hover:text-white"
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
                className="bg-black/40 border border-gray-800 rounded-xl p-6"
              >
                <h4 className="text-lg font-semibold text-gray-200 mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-500 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-[10px] uppercase bg-gray-900 border border-gray-800 text-gray-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
