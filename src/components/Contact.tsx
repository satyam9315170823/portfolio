"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Send,
  Copy,
  Check,
  Loader2,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [copied, setCopied] = useState<string | null>(null);

  const contactInfo = [
    {
      id: "email",
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "satyamsingh9315170823@gmail.com",
    },
    {
      id: "phone",
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 93151 710823",
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

    const formPayload = new FormData();
    formPayload.append(
      "access_key",
      "9eb2b58a-2a15-4f6e-bcb1-9c5d950c0269"
    );
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const result = await response.json();

      if (result.success) {
        setSubmissionStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmissionStatus("error");
      }
    } catch {
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-14 sm:py-20 md:py-28 px-4 sm:px-6 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-sm mb-5">
            <Sparkles className="w-4 h-4" />
            Available for freelance
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            Let&apos;s Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Together
            </span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto">
            Have a project in mind or want to discuss a new idea? I’m always open
            to creative collaborations and opportunities.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                Contact Details
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Tap to copy contact info.
              </p>
            </div>

            {contactInfo.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl bg-zinc-900/60 border border-white/5 hover:border-indigo-500/40 transition"
              >
                <div className="p-3 sm:p-4 rounded-xl bg-indigo-500/10 text-indigo-400">
                  {item.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm uppercase text-gray-400">
                    {item.label}
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-white break-all">
                    {item.value}
                  </p>
                </div>

                <button
                  onClick={() => handleCopy(item.value, item.id)}
                  className="p-2 sm:p-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition"
                >
                  {copied === item.id ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-xl rounded-3xl" />

            <div className="relative p-6 sm:p-8 md:p-10 bg-zinc-950/80 rounded-2xl border border-white/10">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm sm:text-base"
                    required
                  />

                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm sm:text-base"
                    required
                  />
                </div>

                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm sm:text-base resize-none"
                  required
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 bg-white text-black font-semibold py-3.5 sm:py-4 rounded-xl transition active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {submissionStatus === "success" && (
                  <p className="text-green-400 text-sm text-center">
                    ✅ Message sent successfully!
                  </p>
                )}
                {submissionStatus === "error" && (
                  <p className="text-red-400 text-sm text-center">
                    ❌ Something went wrong. Try again.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
