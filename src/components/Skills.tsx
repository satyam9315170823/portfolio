"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Go", "TypeScript", "JavaScript", "Rust", "Python", "C++", "Solidity"],
  },
  {
    title: "Frontend",
    skills: ["Next.js", "React", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Go APIs", "REST", "GraphQL"],
  },
  {
    title: "Databases & ORM",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "Prisma",
      "Drizzle ORM",
      "Redis",
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      "Docker",
      "Kubernetes",
      "Ansible",
      "CI/CD",
      "Linux",
      "Nginx",
    ],
  },
  {
    title: "Web3 & AI",
    skills: [
      "Ethereum",
      "Solidity",
      "Smart Contracts",
      "Generative AI",
      "LLMs",
      "Vector Databases",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-3">Skills</h2>
          <p className="text-gray-400 max-w-2xl">
            Technologies I use to build scalable, production-ready systems —
            from backend services to cloud infrastructure and AI-powered apps.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="
                relative
                bg-linear-to-b from-gray-900 to-gray-950
                border border-gray-800
                rounded-2xl
                p-6
                hover:border-gray-600
                transition
              "
            >
              {/* Card Title */}
              <h3 className="text-lg font-semibold text-gray-100 mb-5">
                {group.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-3 py-1.5
                      text-sm
                      rounded-full
                      bg-gray-800/70
                      border border-gray-700
                      text-gray-300
                      hover:text-white
                      hover:border-gray-500
                      transition
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
