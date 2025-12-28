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
  // ===== FEATURED PROJECTS =====
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
    tech: ["Go", "PostgreSQL", "Redis", "Docker"],
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

  // ✅ FEATURED: EXACTLY 4
  const mainProjects = projects.filter((p) => p.featured).slice(0, 4);

  // ✅ OTHER PROJECTS: FILTER ONLY NON-FEATURED
  const otherProjects =
    active === "All"
      ? projects.filter((p) => !p.featured)
      : projects.filter((p) => !p.featured && p.category === active);

  return (
    /* ⬇️ EVERYTHING BELOW IS 100% UNCHANGED ⬇️ */
    <section
      id="projects"
      className="
        relative py-32 overflow-hidden
        bg-[#0a0a0a]
      "
    >
      {/* ... YOUR ENTIRE JSX REMAINS EXACTLY THE SAME ... */}
    </section>
  );
}
