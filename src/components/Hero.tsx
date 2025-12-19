"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download, Terminal, Database, Globe } from "lucide-react"; // npm i lucide-react

// Animation Variants for staggering
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-black text-white overflow-hidden selection:bg-white/20">
      
      {/* --- BACKGROUND FX --- */}
      
      {/* 1. Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* 2. Radial Gradient / Spotlight */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-900/20 via-black/0 to-black/0 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center"
        >
          {/* --- LEFT CONTENT --- */}
          <div className="flex flex-col justify-center">
            
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="mb-6 flex items-center space-x-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-xs font-mono text-green-400 uppercase tracking-widest">
                Available for New Projects
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Building reliable, <br />
              <span className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">
                web systems.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-lg text-gray-400 max-w-xl mb-8 leading-relaxed">
              I’m <strong className="text-white">Satyam Kumar</strong>. I engineer scalable APIs and clean architecture using 
              <span className="inline-flex items-center mx-1 text-blue-400"><Database className="w-3 h-3 mr-1"/>Go</span>, 
              <span className="inline-flex items-center mx-1 text-white"><Globe className="w-3 h-3 mr-1"/>Next.js</span>, and 
              <span className="inline-flex items-center mx-1 text-orange-400"><Terminal className="w-3 h-3 mr-1"/>DevOps</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-black bg-white rounded-full overflow-hidden transition-transform active:scale-95 hover:bg-gray-100"
              >
                <span>View Selected Work</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white border border-gray-800 rounded-full hover:bg-gray-900 hover:border-gray-600 transition-colors active:scale-95"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </a>
            </motion.div>
          </div>

          {/* --- RIGHT VISUAL --- */}
          <motion.div variants={itemVariants} className="relative flex justify-center lg:justify-end">
            
            {/* The Image Container */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 group">
              
              {/* Abstract decorative circles behind */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition duration-1000"></div>
              
              {/* The Image Itself */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-gray-800 bg-gray-900 shadow-2xl rotate-3 group-hover:rotate-0 transition duration-500 ease-out">
                <Image
                  src="/profile.jpg" 
                  alt="Satyam Kumar"
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition duration-500"
                  priority
                />
                
                {/* Tech overlay at bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                    <div className="flex gap-3 justify-center">
                        <div className="bg-gray-800/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-gray-300 border border-gray-700">GO</div>
                        <div className="bg-gray-800/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-gray-300 border border-gray-700">NEXT</div>
                        <div className="bg-gray-800/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-gray-300 border border-gray-700">DOCKER</div>
                    </div>
                </div>
              </div>
            </div>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
}
