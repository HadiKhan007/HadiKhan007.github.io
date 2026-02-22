"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaRocket,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const { default: emailjs } = await import("@emailjs/browser");
      emailjs.init("5m45IzjeBEvmngDG9");

      const serviceId = "service_g2fyp4k";
      const templateId = "template_7ljzhyf";
      const publicKey = "5m45IzjeBEvmngDG9";

      // Timestamp
      const time = new Date().toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      const year = new Date().getFullYear().toString();

      // IMPORTANT: Use the exact variable names from your EmailJS template
      // Based on your template, it should be: {{name}}, {{email}}, {{message}}, {{time}}, {{year}}
      const templateParams = {
        name: data.name,
        email: data.email,
        message: data.message,
        time: time,
        year: year,
        reply_to: data.email,
        // Also include common alternative names for compatibility
        from_name: data.name,
        from_email: data.email,
        to_name: "Ali Haider",
      };

      // Send email
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message:
          "Got it. I'll read your message and reply soon.",
      });
      reset();
    } catch (error: unknown) {
      let errorMessage = "Failed to send message. ";
      if (error && typeof error === "object") {
        if ("text" in error && typeof (error as { text?: string }).text === "string") {
          errorMessage += (error as { text: string }).text;
        } else if ("message" in error && typeof (error as { message?: string }).message === "string") {
          errorMessage += (error as { message: string }).message;
        }
      }

      errorMessage +=
        " Email me directly at alihaidercs17@gmail.com if it keeps failing.";

      setSubmitStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "alihaidercs17@gmail.com",
      href: "mailto:alihaidercs17@gmail.com",
    },
    {
      icon: FaGithub,
      title: "GitHub",
      value: "HadiKhan007",
      href: "https://github.com/HadiKhan007",
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "Ali Haider",
      href: "https://www.linkedin.com/in/alihaider17/",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] relative overflow-hidden">
      <div className="bg-animation" aria-hidden="true" />
      {/* Floating background elements */}
      <motion.div className="absolute top-40 left-16 opacity-[0.06] hidden lg:block pointer-events-none" animate={{ y: [0, -16, 0], rotate: [0, 4, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
        <FaEnvelope className="text-[#6366f1] text-6xl" />
      </motion.div>
      <motion.div className="absolute bottom-40 right-20 opacity-[0.06] hidden lg:block pointer-events-none" animate={{ y: [0, -12, 0], rotate: [0, -3, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
        <FaPaperPlane className="text-[#ec4899] text-5xl" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6366f1]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="page-top-badge"
          >
            <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse shrink-0" />
            Available for new projects
          </motion.h2>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-[#f8fafc]">
            <span className="gradient-text">Say hello</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#94a3b8] max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? I check email daily.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <div className="section-tag mb-3">Reach me</div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#f8fafc]">
                Contact
              </h2>
              <p className="text-[#94a3b8] text-lg">
                Email, GitHub, LinkedIn—pick what works.
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="relative rounded-3xl p-6 bg-[#13131f] border border-white/[0.05] hover:border-[#6366f1]/30 transition-all duration-400 hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div
                        className="p-4 rounded-xl"
                        style={{ background: "var(--gradient-1)" }}
                      >
                        <method.icon className="text-white text-2xl" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-[#f8fafc] mb-1">
                          {method.title}
                        </h3>
                        <a
                          href={method.href}
                          target={
                            method.href.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            method.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-[#94a3b8] hover:text-[#6366f1] transition-colors text-lg"
                        >
                          {method.value}
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative rounded-3xl p-6 bg-[#13131f] border border-white/[0.05] hover:border-[#6366f1]/30 glass-card hover-lift transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="p-3 rounded-xl"
                  style={{ background: "var(--gradient-2)" }}
                >
                  <FaRocket className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-[#f8fafc]">
                  Response time
                </h3>
              </div>
              <p className="text-[#94a3b8] leading-relaxed">
                I aim for a reply within 24 hours. If you&apos;re on a tight deadline, mention it and I&apos;ll prioritize.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl p-8 lg:p-10 bg-[#13131f] border border-white/[0.05] glass-card hover-lift overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#6366f1]/10 to-transparent rounded-full blur-3xl" />
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="p-3 rounded-xl"
                  style={{ background: "var(--gradient-1)" }}
                >
                  <FaPaperPlane className="text-white text-xl" />
                </div>
                <h2 className="text-3xl font-bold text-[#f8fafc]">
                  Send a message
                </h2>
              </div>

              {/* Status Messages */}
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                    submitStatus.type === "success"
                      ? "bg-[#10b981]/20 border border-[#10b981]/30"
                      : "bg-[#ef4444]/20 border border-[#ef4444]/30"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <FaCheckCircle className="text-[#10b981] flex-shrink-0" />
                  ) : (
                    <FaExclamationTriangle className="text-[#ef4444] flex-shrink-0" />
                  )}
                  <p className="text-sm text-[#f8fafc]">{submitStatus.message}</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[#94a3b8] mb-2 font-medium"
                  >
                    Name
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    id="name"
                    className="w-full px-4 py-4 bg-[#1c1c2e] border border-white/[0.08] rounded-xl text-[#f8fafc] placeholder-[#64748b] focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                      <span>⚠️</span> {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[#94a3b8] mb-2 font-medium"
                  >
                    Email
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email address",
                      },
                    })}
                    type="email"
                    id="email"
                    className="w-full px-4 py-4 bg-[#1c1c2e] border border-white/[0.08] rounded-xl text-[#f8fafc] placeholder-[#64748b] focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent transition-all duration-300"
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                      <span>⚠️</span> {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[#94a3b8] mb-2 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                    id="message"
                    rows={6}
                    className="w-full px-4 py-4 bg-[#1c1c2e] border border-white/[0.08] rounded-xl text-[#f8fafc] placeholder-[#64748b] focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="What are you working on? Budget, timeline, stack—whatever helps."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                      <span>⚠️</span> {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-semibold py-4 px-6 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 focus:ring-offset-[#0a0a0f] ${
                    isSubmitting
                      ? "bg-[#1c1c2e] cursor-not-allowed opacity-50 text-[#64748b]"
                      : "text-white hover:-translate-y-0.5"
                  }`}
                  style={
                    !isSubmitting
                      ? {
                          background: "var(--gradient-1)",
                          boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)",
                        }
                      : undefined
                  }
                >
                  <span className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-lg" />
                        Send Message
                      </>
                    )}
                  </span>
                </button>
              </form>

              {/* Fallback message */}
              {submitStatus.type === "error" && (
                <div className="mt-6 p-4 bg-[#ef4444]/10 border border-[#ef4444]/30 rounded-xl">
                  <p className="text-[#94a3b8] text-sm text-center">
                    Form acting up? Email me at{" "}
                    <a
                      href="mailto:alihaidercs17@gmail.com"
                      className="text-[#f8fafc] font-semibold underline hover:text-[#6366f1]"
                    >
                      alihaidercs17@gmail.com
                    </a>
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
