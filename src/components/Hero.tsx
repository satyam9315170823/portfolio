"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";

/* ------------------ Animation Variants ------------------ */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/* ------------------ Hero Component ------------------ */

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black text-white overflow-hidden selection:bg-white/20 pt-28 sm:pt-32 lg:pt-0 pb-10 sm:pb-14 lg:pb-0">

      {/* ------------------ Background FX ------------------ */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-900/20 via-black/0 to-black/0 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center"
        >
          {/* ------------------ LEFT CONTENT ------------------ */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
            >
              Building reliable, <br />
              <span className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">
                web systems.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-400 max-w-xl mb-8 leading-relaxed"
            >
              I’m <strong className="text-white">Satyam Kumar</strong>, a full-stack
              engineer building scalable web and backend systems with{" "}
              <span className="text-white">MERN</span>,{" "}
              <span className="text-white">Next.js</span>, and{" "}
              <span className="text-white">Go</span>. I ship production-ready
              platforms using <span className="text-white">DevOps</span> and work
              on <span className="text-white">Web3</span> &{" "}
              <span className="text-white">GenAI</span>.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-black bg-white rounded-md transition active:scale-95 hover:bg-gray-100"
              >
                View Selected Work
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white border border-gray-800 rounded-md hover:bg-gray-900 hover:border-gray-600 transition active:scale-95"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </a>
            </motion.div>
          </div>

          {/* ------------------ RIGHT IMAGE ------------------ */}
 <motion.div
  variants={itemVariants}
  initial="hidden"
  animate="visible"
  className="relative flex justify-center lg:justify-end order-1 lg:order-2 mb-12 lg:mb-0"
>
  {/* Floating container */}
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 group"
  >
    {/* Animated Gradient Ring */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute -inset-[6px] rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-40 blur-xl"
    />

    {/* Soft ambient glow */}
    <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-green-500/20 to-purple-600/20 blur-2xl group-hover:opacity-60 transition duration-700" />

    {/* Card */}
    <motion.div
      whileHover={{
        rotateX: 6,
        rotateY: -6,
        scale: 1.05,
      }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
      className="relative w-full h-full rounded-xl overflow-hidden
                 border border-white/10 bg-gray-900/80 backdrop-blur-xl
                 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
    >
      {/* Image */}
      <Image
        src="/p.png"
        alt="Satyam Kumar"
        fill
        priority
        className="object-cover opacity-90 group-hover:opacity-100
                   group-hover:scale-110 transition duration-700 ease-out"
      />

      {/* Noise overlay (luxury feel) */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none" />

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-3 left-0 right-0 px-4"
      >
        <div className="flex flex-wrap justify-center gap-2">
          {["Go", "MERN", "K8s", "Next.js", "Web3", "GenAI"].map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.1 }}
              className="rounded-full px-3 py-1 text-[10px] sm:text-xs
                         bg-white/10 backdrop-blur-md text-gray-200
                         border border-white/20 shadow-sm"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Glass highlight */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-700" />
    </motion.div>
  </motion.div>
</motion.div>


        </motion.div>
      </div>
    </section>
  );
}

