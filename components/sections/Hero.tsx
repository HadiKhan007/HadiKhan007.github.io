"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaDownload, FaHandPaper, FaRocket, FaAward, FaCheckCircle, FaLightbulb } from "react-icons/fa";
import Container from "../ui/Container";

const techPills = [
  "Next.js",
  "React Native",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "NoSQL",
  "SQL",
  "TypeScript",
  "Firebase",
];

const stats = [
  { value: "15+", label: "PROJECTS", Icon: FaRocket, color: "text-[#6366f1]" },
  { value: "4.5", label: "YEARS EXP", Icon: FaAward, color: "text-[#ec4899]" },
  { value: "100%", label: "DEDICATION", Icon: FaCheckCircle, color: "text-[#10b981]" },
  { value: "∞", label: "CREATIVITY", Icon: FaLightbulb, color: "text-[#f59e0b]" },
];

export default function Hero() {
  return (
    <>
      <section className="relative min-h-[min(100dvh,720px)] flex items-center justify-center py-12 sm:py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-hero-glow"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_b,transparent_0%,var(--bg-page)_65%)]" aria-hidden />

        <div className="relative z-10 w-full">
          <Container className="relative z-10 text-center">
            {/* Availability pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex justify-center mb-5"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-[var(--primary)]/40 bg-[var(--primary)]/10 text-[var(--primary)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]" />
                </span>
                Available for new projects
              </span>
            </motion.div>

            {/* Tech stack pills */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-wrap justify-center gap-2 mb-6"
            >
              {techPills.map((tech, i) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-[var(--text-secondary)] border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:text-[var(--text-primary)] hover:border-[var(--primary)]/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Gradient heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading title-hero text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-3 max-w-4xl mx-auto"
            >
              <span className="gradient-text">Hi, I&apos;m Ali Haider</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-[var(--text-secondary)] text-base sm:text-lg max-w-2xl mx-auto mb-5 leading-7"
            >
              React Native dev. I build web and mobile apps from start to finish. Solid UX, solid backends.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8"
            >
              <Link
                href="/projects/"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--primary)] text-white font-semibold hover:bg-[var(--primary-light)] transition-colors duration-200 min-h-[48px]"
              >
                View My Work
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/AliHaider.pdf"
                download="Ali-Haider-CV.pdf"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[var(--border-subtle)] text-[var(--text-primary)] font-medium hover:bg-[var(--surface)] transition-all duration-200 min-h-[48px]"
              >
                Download CV
                <FaDownload className="text-sm" />
              </Link>
              <Link
                href="/#contact"
                className="group relative inline-flex items-center justify-center gap-2 px-[2px] py-[2px] rounded-xl min-h-[48px] font-medium transition-all duration-200 bg-gradient-to-r from-[#ec4899] to-[#06b6d4] hover:from-[#f472b6] hover:to-[#22d3ee]"
              >
                <span className="flex items-center gap-2 px-5 py-3 rounded-[10px] bg-[var(--bg-page)] text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
                  Get In Touch
                  <FaHandPaper className="text-sm" />
                </span>
              </Link>
            </motion.div>

            {/* Stats cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-5 bg-[var(--bg-card)] border border-[var(--border-subtle)] text-center"
                >
                  <stat.Icon className={`text-2xl mb-2 mx-auto ${stat.color}`} aria-hidden />
                  <div className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">{stat.value}</div>
                  <div className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </Container>
        </div>
      </section>

    </>
  );
}
