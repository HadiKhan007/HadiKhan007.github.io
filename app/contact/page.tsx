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
import PageHero from "../../components/PageHero";

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
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "5m45IzjeBEvmngDG9";
      emailjs.init(publicKey);

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_g2fyp4k";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_7ljzhyf";

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
    <div className="min-h-screen bg-[var(--bg-page)] relative overflow-hidden pb-8 sm:pb-12">
      <div className="bg-animation" aria-hidden="true" />
      {/* Floating background elements */}
      <motion.div className="absolute top-40 left-16 opacity-[0.06] hidden lg:block pointer-events-none" animate={{ y: [0, -16, 0], rotate: [0, 4, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
        <FaEnvelope className="text-[#6366f1] text-6xl" />
      </motion.div>
      <motion.div className="absolute bottom-40 right-20 opacity-[0.06] hidden lg:block pointer-events-none" animate={{ y: [0, -12, 0], rotate: [0, -3, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
        <FaPaperPlane className="text-[#ec4899] text-5xl" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6366f1]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <PageHero
          badge={
            <>
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06b6d4] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06b6d4]" />
              </span>
              Available for new projects
            </>
          }
          title="Say hello"
          subtitle="Have a project in mind? I check email daily."
          className="!pb-4 sm:!pb-6"
        />

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mt-4 sm:mt-6">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="text-center lg:text-left mb-4">
              <div className="section-tag mb-2">Reach me</div>
              <h2 className="font-heading title-section text-2xl sm:text-3xl font-bold mb-2 text-[var(--text-primary)]">
                Contact
              </h2>
              <p className="text-[var(--text-secondary)] text-base">
                Email, GitHub, LinkedIn pick what works.
              </p>
            </div>

            <div className="space-y-3">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                  className="group relative"
                >
                    <div className="relative rounded-2xl p-4 sm:p-5 bg-[var(--bg-card)] border border-[var(--border-subtle)]">
                    <div className="flex items-center gap-4">
                      <div
                        className="p-4 rounded-xl"
                        style={{ background: "var(--gradient-1)" }}
                      >
                        <method.icon className="text-white text-2xl" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-xl font-semibold text-[var(--text-primary)] mb-1">
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
                          className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors duration-200 text-lg"
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
              className="relative rounded-3xl p-5 sm:p-6 bg-[var(--bg-card)] border border-[var(--border-subtle)]"
            >
              <div className="flex items-center gap-4 mb-3">
                <div
                  className="p-3 rounded-xl"
                  style={{ background: "var(--gradient-2)" }}
                >
                  <FaRocket className="text-white text-xl" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
                  Response time
                </h3>
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                I usually reply within a few hours. Quick turnaround is the norm.
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
            <div className="relative rounded-3xl p-6 sm:p-7 lg:p-8 bg-[var(--bg-card)] border border-[var(--border-subtle)] overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#6366f1]/10 to-transparent rounded-full blur-3xl" />
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="p-3 rounded-xl"
                  style={{ background: "var(--gradient-1)" }}
                >
                  <FaPaperPlane className="text-white text-xl" />
                </div>
                <h2 className="font-heading title-section text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                  Send a message
                </h2>
              </div>

              {/* Status Messages */}
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="alert"
                  aria-live="polite"
                  className={`mb-4 p-4 rounded-xl flex items-center gap-3 ${
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
                  <p className="text-sm text-[var(--text-primary)]">{submitStatus.message}</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[var(--text-secondary)] mb-2 font-medium"
                  >
                    Name
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    id="name"
                    className="w-full px-4 py-4 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all duration-300"
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
                    className="block text-[var(--text-secondary)] mb-2 font-medium"
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
                    className="w-full px-4 py-4 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all duration-300"
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
                    className="block text-[var(--text-secondary)] mb-2 font-medium"
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
                    rows={5}
                    className="w-full px-4 py-4 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="What are you working on? Budget, timeline, stack whatever helps."
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
                  className={`w-full font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 focus-professional focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg-page)] min-h-[48px] ${
                    isSubmitting
                      ? "bg-[var(--bg-elevated)] cursor-not-allowed opacity-50 text-[var(--text-muted)]"
                      : "btn-luxury text-white hover:-translate-y-0.5"
                  }`}
                  style={!isSubmitting ? undefined : undefined}
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
                <div className="mt-4 p-4 bg-[#ef4444]/10 border border-[#ef4444]/30 rounded-xl">
                  <p className="text-[var(--text-secondary)] text-sm text-center">
                    Form acting up? Email me at{" "}
                    <a
                      href="mailto:alihaidercs17@gmail.com"
                      className="text-[var(--text-primary)] font-semibold underline hover:text-[var(--primary)]"
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
