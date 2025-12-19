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
  // ===== MAIN / FEATURED PROJECTS =====
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
      "High-scale MERN application with JWT auth, background jobs, caching, and real-time updates.",
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
      "High-performance REST API with clean architecture, JWT auth, and PostgreSQL.",
    category: "GoLang",
    tech: ["Go", "PostgreSQL", "JWT", "Docker"],
    live: "#",
    repo: "#",
  },
  {
    title: "Web3 Voting DApp",
    description:
      "Decentralized voting application using Solidity smart contracts.",
    category: "Web3",
    tech: ["Solidity", "Ethereum", "Ethers.js", "Next.js"],
    live: "#",
    repo: "#",
  },
  {
    title: "AI Chat Assistant",
    description:
      "LLM-powered chat app with context memory and embeddings.",
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
      : projects.filter(
          (p) => !p.featured && p.category === active
        );

  return (
    <section id="projects" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-gray-400 max-w-2xl">
            A selection of complex, real-world projects focused on scalability,
            system design, and modern engineering practices.
          </p>
        </motion.div>

        {/* ================= MAIN PROJECTS ================= */}
        <div className="mb-24">
          <h3 className="text-2xl font-semibold mb-8">
            Featured Projects
          </h3>

          <div className="grid lg:grid-cols-3 gap-8">
            {mainProjects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -8 }}
                className="
                  relative
                  bg-gradient-to-br from-gray-900 to-gray-950
                  border border-gray-800
                  rounded-3xl
                  p-8
                  hover:border-gray-600
                  transition
                "
              >
                <h4 className="text-xl font-semibold mb-3">
                  {project.title}
                </h4>

                <p className="text-gray-400 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-xs rounded-full bg-gray-800 border border-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 text-sm">
                  <a
                    href={project.repo}
                    target="_blank"
                    className="text-gray-400 hover:text-white"
                  >
                    GitHub →
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-gray-400 hover:text-white"
                  >
                    Live →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= FILTER TABS ================= */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm border transition
                ${
                  active === cat
                    ? "bg-white text-black border-white"
                    : "bg-gray-900 text-gray-300 border-gray-800 hover:border-gray-600"
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
                  bg-gradient-to-b from-gray-900 to-gray-950
                  border border-gray-800
                  rounded-2xl
                  p-6
                  hover:border-gray-600
                  transition
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
                      className="px-3 py-1 text-xs rounded-full bg-gray-800 border border-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 text-sm">
                  <a
                    href={project.repo}
                    target="_blank"
                    className="text-gray-400 hover:text-white"
                  >
                    GitHub →
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-gray-400 hover:text-white"
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
