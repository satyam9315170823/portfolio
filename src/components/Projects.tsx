"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "All" | "Typescript" | "Golang" | "Web 3" | "Genai";

const categories: Category[] = ["All", "Typescript", "Golang", "Web 3", "Genai"];

type Project = {
  title: string;
  description: string;
  category: Category;
  tech: string[];
  live: string;
  repo: string;
  image: string;
  featured?: boolean;
};

const projects: Project[] = [
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
            Personal Projects
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Real-world systems focused on scalability and engineering depth.
          </p>
        </div>

        {/* FEATURED */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {mainProjects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              className="group relative h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-black cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-contain transition-all duration-500 md:group-hover:blur-md md:group-hover:scale-105 md:group-hover:brightness-50"
              />

              {/* TEXT ONLY ON DESKTOP */}
              <div className="hidden md:flex absolute inset-0 p-8 flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-xs uppercase tracking-widest text-indigo-400 mb-2">
                  {project.category}
                </span>
                <h4 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h4>
                <p className="text-gray-200 text-sm mb-4">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FILTER */}
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

        {/* OTHER */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProject(project)}
              className="group relative h-64 rounded-xl overflow-hidden border border-gray-800 bg-black cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-contain transition-all duration-500 md:group-hover:blur-md md:group-hover:scale-105 md:group-hover:brightness-50"
              />

              {/* TEXT ONLY ON DESKTOP */}
              <div className="hidden md:flex absolute inset-0 p-5 flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <h4 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zinc-900 rounded-2xl max-w-3xl w-full overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-contain bg-black"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs bg-white/10 border border-white/10 rounded-md text-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6">
                  <a href={selectedProject.repo} target="_blank" className="text-white hover:text-indigo-400">Source Code →</a>
                  <a href={selectedProject.live} target="_blank" className="text-white hover:text-indigo-400">Live Demo →</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
