"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Copy, Check, Loader2, Sparkles } from "lucide-react";

export default function Contact() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State for submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle");

  // State for copy feedback
  const [copied, setCopied] = useState<string | null>(null);

  const contactInfo = [
    {
      id: "email",
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "satyamsingh9315170823@gmail.com",
      display: "satyamsingh...gmail.com",
    },
    {
      id: "phone",
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "93151710823",
      display: "+91 93151 710823",
    },
  ];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus("idle");

    // 1. Create FormData object
    const formPayload = new FormData();
    // REPLACE WITH YOUR ACTUAL ACCESS KEY FROM WEB3FORMS
    formPayload.append("access_key", "9eb2b58a-2a15-4f6e-bcb1-9c5d950c0269");
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("message", formData.message);

    try {
      // 2. Send data to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const result = await response.json();

      if (result.success) {
        setSubmissionStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        console.error("Error:", result);
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 overflow-hidden bg-black selection:bg-indigo-500/30">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] -z-10 animate-pulse delay-1000" />
      
      {/* Dot pattern overlay for texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Available for freelance</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Together</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss a new idea? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-2 mb-4">
                <h3 className="text-2xl font-semibold text-white">Contact Details</h3>
                <p className="text-gray-400">Click the copy icon to copy details to your clipboard.</p>
            </div>

            {contactInfo.map((item) => (
              <div
                key={item.id}
                className="group relative flex items-center gap-5 p-6 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-indigo-500/30 hover:bg-zinc-900/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                <div className="flex-shrink-0 p-4 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 text-indigo-400 group-hover:text-white group-hover:from-indigo-500 group-hover:to-purple-500 transition-all duration-300 shadow-inner border border-white/5">
                  {item.icon}
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-400 mb-1 tracking-wide uppercase">
                    {item.label}
                  </p>
                  <p className="text-base md:text-lg font-medium text-white truncate">
                    {item.value}
                  </p>
                </div>

                <button
                  onClick={() => handleCopy(item.value, item.id)}
                  className="p-3 rounded-xl text-gray-500 hover:text-white hover:bg-white/10 transition-all active:scale-95"
                  aria-label="Copy to clipboard"
                  title="Copy to clipboard"
                >
                  {copied === item.id ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>
            ))}

            {/* Decorational Element */}
            <div className="hidden lg:block p-8 rounded-3xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-white/5 mt-4">
                <p className="text-indigo-200 italic">"Great things in business are never done by one person. They're done by a team of people."</p>
                <p className="text-indigo-400/60 mt-2 text-sm">— Steve Jobs</p>
            </div>
          </motion.div>

          {/* Right Column: Web3Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Form Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[2rem] opacity-20 blur-xl" />
            
            <div className="relative p-8 md:p-10 rounded-[2rem] bg-zinc-950/80 border border-white/10 backdrop-blur-xl shadow-2xl">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all duration-300 placeholder:text-gray-600"
                            placeholder="John Doe"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all duration-300 placeholder:text-gray-600"
                            placeholder="john@example.com"
                            required
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all duration-300 placeholder:text-gray-600 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative flex items-center justify-center gap-3 w-full bg-white text-black font-bold py-4 rounded-xl overflow-hidden transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <span className="relative flex items-center gap-2">
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            Send Message
                            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                    )}
                  </span>
                </button>

                {/* Status Messages */}
                {submissionStatus === "success" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium text-center flex items-center justify-center gap-2"
                  >
                    <Check className="w-4 h-4" /> Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                {submissionStatus === "error" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium text-center"
                  >
                    ❌ Something went wrong. Please try again.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
