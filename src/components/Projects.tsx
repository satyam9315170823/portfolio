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
  {
    title: "SaaS Platform (Featured)",
    description:
      "Production-grade SaaS platform with authentication, payments, dashboards, and scalable backend architecture.",
    category: "Next.js",
    tech: ["Next.js", "TypeScript", "Go", "PostgreSQL", "Docker"],
    live: "https://saas-next.vercel.app",
    repo: "https://github.com/yourname/next-saas",
    featured: true,
  },
  {
    title: "MERN Task Manager",
    description:
      "Full-stack MERN application with JWT auth, role-based access, and real-time updates.",
    category: "MERN",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    live: "https://mern-task.vercel.app",
    repo: "https://github.com/yourname/mern-task",
  },
  {
    title: "GoLang REST API",
    description:
      "High-performance REST API built in Go with PostgreSQL, JWT auth, and clean architecture.",
    category: "GoLang",
    tech: ["Go", "PostgreSQL", "JWT", "Docker"],
    live: "https://golang-api.onrender.com",
    repo: "https://github.com/yourname/golang-api",
  },
  {
    title: "Web3 Voting DApp",
    description:
      "Decentralized voting system using Solidity smart contracts and Ethereum blockchain.",
    category: "Web3",
    tech: ["Solidity", "Ethereum", "Ethers.js", "Next.js"],
    live: "https://web3-voting.vercel.app",
    repo: "https://github.com/yourname/web3-voting",
  },
  {
    title: "Gen AI Chat Assistant",
    description:
      "LLM-powered chat application with embeddings, vector search, and RAG pipeline.",
    category: "GenAI",
    tech: ["Next.js", "LLMs", "Vector DB", "Gen AI"],
    live: "https://genai-chat.vercel.app",
    repo: "https://github.com/yourname/genai-chat",
  },
];

export default function Projects() {
  const [active, setActive] = useState<Category>("All");

  const featuredProject = projects.find((p) => p.featured);
  const filteredProjects =
    active === "All"
      ? projects.filter((p) => !p.featured)
      : projects.filter((p) => p.category === active && !p.featured);

  return (
    <section id="projects" className="py-28 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-4xl font-bold mb-3">Projects</h2>
          <p className="text-gray-400 max-w-2xl">
            Selected projects demonstrating system design, scalability,
            and real-world problem solving.
          </p>
        </motion.div>

        {/* Featured Project */}
        {featuredProject && active === "All" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              mb-20
              bg-linear-to-br from-gray-900 to-gray-950
              border border-gray-800
              rounded-3xl
              p-8
            "
          >
            <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
              Featured Project
            </p>

            <h3 className="text-2xl font-semibold mb-3">
              {featuredProject.title}
            </h3>

            <p className="text-gray-400 max-w-3xl mb-6">
              {featuredProject.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {featuredProject.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 text-sm rounded-full bg-gray-800 border border-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-6 text-sm">
              <a
                href={featuredProject.repo}
                target="_blank"
                className="text-gray-400 hover:text-white"
              >
                GitHub →
              </a>
              <a
                href={featuredProject.live}
                target="_blank"
                className="text-gray-400 hover:text-white"
              >
                Live Demo →
              </a>
            </div>
          </motion.div>
        )}

        {/* Tabs */}
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

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -6 }}
                className="
                  bg-linear-to-b from-gray-900 to-gray-950
                  border border-gray-800
                  rounded-2xl
                  p-6
                  hover:border-gray-600
                  transition
                "
              >
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-5">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-full bg-gray-800 border border-gray-700 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
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
                    Live Demo →
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
