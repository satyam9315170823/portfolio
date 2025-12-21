"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Copy, Check, Loader2 } from "lucide-react";

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
    <section id="contact" className="py-24 px-4 bg-black relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Work <span className="text-indigo-500">Together</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Have a project in mind? Send me a message and I'll get back to you shortly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {contactInfo.map((item) => (
              <div
                key={item.id}
                className="group relative flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-colors"
              >
                <div className="p-3 rounded-full bg-white/5 text-indigo-400 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-400 mb-1">
                    {item.label}
                  </p>
                  <p className="text-base md:text-lg font-semibold text-white break-all">
                    {item.value}
                  </p>
                </div>

                <button
                  onClick={() => handleCopy(item.value, item.id)}
                  className="p-2 text-gray-500 hover:text-white transition-colors"
                  aria-label="Copy to clipboard"
                >
                  {copied === item.id ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>
            ))}
          </motion.div>

          {/* Right Column: Web3Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name" // Important for Web3Forms
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-gray-600"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email" // Important for Web3Forms
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-gray-600"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message" // Important for Web3Forms
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-gray-600 resize-none"
                  placeholder="How can I help you?"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center justify-center gap-2 w-full bg-white text-black font-semibold py-4 rounded-xl hover:bg-gray-200 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submissionStatus === "success" && (
                <p className="text-green-400 text-sm text-center mt-2 font-medium">
                  ✅ Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {submissionStatus === "error" && (
                <p className="text-red-400 text-sm text-center mt-2 font-medium">
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
