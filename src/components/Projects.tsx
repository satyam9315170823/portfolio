"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "All" | "Typescript" | "Golang" | "Web 3" | "Genai";

const categories: Category[] = [
  "All",
  "Typescript",
  "Golang",
  "Web 3",
  "Genai",
];

type Project = {
  title: string;
  description: string;
  category: Category;
  tech: string[];
  live: string;
  repo: string;
  image: string; // ✅ Added
  featured?: boolean;
};

const projects: Project[] = [
  // ⭐ FEATURED PROJECTS
  {
    title: "LeetCode Practice Platform",
    description:
      "A LeetCode-style coding platform with problem filtering, submissions, execution results, and performance tracking dashboard.",
    category: "Typescript",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    live: "#",
    repo: "#",
    image:
      "https://res.cloudinary.com/dcgh3mayf/image/upload/v1770284069/Screenshot_2026-02-05_150032_losqyk.png",
    featured: true,
  },
  {
    title: "SaaS Platform",
    description:
      "Production-grade SaaS platform with authentication, payments, RBAC, dashboards, and scalable backend architecture.",
    category: "Typescript",
    tech: ["Next.js", "TypeScript", "Go", "PostgreSQL", "Docker"],
    live: "#",
    repo: "#",
    image: "/projects/saas.png",
    featured: true,
  },
  {
    title: "GenAI RAG System",
    description:
      "End-to-end RAG pipeline with embeddings, vector search, prompt orchestration, and observability.",
    category: "Genai",
    tech: ["Next.js", "LLMs", "Vector DB", "LangChain"],
    live: "#",
    repo: "#",
    image: "/projects/rag.png",
    featured: true,
  },

  // OTHER PROJECTS
  {
    title: "GoLang REST API",
    description:
      "High-performance REST API built in Go with clean architecture, JWT authentication, and PostgreSQL.",
    category: "Golang",
    tech: ["Go", "PostgreSQL", "JWT", "Docker"],
    live: "#",
    repo: "#",
    image: "/projects/golang-api.png",
  },
  {
    title: "Web3 Voting DApp",
    description:
      "Decentralized voting application using Solidity smart contracts on Ethereum.",
    category: "Web 3",
    tech: ["Solidity", "Ethereum", "Ethers.js", "Next.js"],
    live: "#",
    repo: "#",
    image: "/projects/web3.png",
  },
  {
    title: "AI Chat Assistant",
    description:
      "LLM-powered chat assistant with context memory and embeddings.",
    category: "Genai",
    tech: ["LLMs", "Vector DB", "Next.js"],
    live: "#",
    repo: "#",
    image: "/projects/ai-chat.png",
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
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 z-10">

        {/* HEADER */}
        <div className="mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Selected Projects
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Real-world systems focused on scalability and engineering depth.
          </p>
        </div>

        {/* FEATURED PROJECTS */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {mainProjects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -8 }}
              className="group relative h-[420px] rounded-2xl overflow-hidden border border-white/10"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-xs uppercase tracking-widest text-indigo-400 mb-2">
                  {project.category}
                </span>

                <h4 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h4>

                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs bg-white/10 border border-white/10 rounded-md text-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6">
                  <a href={project.repo} target="_blank" className="text-sm text-white hover:text-indigo-400">
                    Source Code →
                  </a>
                  <a href={project.live} target="_blank" className="text-sm text-white hover:text-indigo-400">
                    Live Demo →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FILTER TABS */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 text-sm rounded-full border transition ${
                active === cat
                  ? "bg-white text-black border-white"
                  : "text-gray-400 border-gray-700 hover:border-gray-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* OTHER PROJECTS */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {otherProjects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -5 }}
                className="group relative h-64 rounded-xl overflow-hidden border border-gray-800"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition" />

                <div className="absolute inset-0 p-5 flex flex-col justify-end translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-sm text-gray-300 mb-3 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex gap-4 text-sm">
                    <a href={project.repo} target="_blank" className="text-gray-300 hover:text-white">
                      Code
                    </a>
                    <a href={project.live} target="_blank" className="text-gray-300 hover:text-white">
                      Live
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
