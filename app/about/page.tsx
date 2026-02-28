"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaMobileAlt,
  FaFire,
  FaTools,
  FaCode,
  FaRocket,
  FaHeart,
  FaLightbulb,
  FaCheckCircle,
  FaStar,
  FaAward,
  FaUsers,
  FaTrophy,
  FaMagic,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import PageHero from "../../components/PageHero";

export default function About() {
  const skills = [
    {
      name: "Next.js",
      icon: SiNextdotjs,
      level: 90,
      color: "from-slate-400 to-slate-600",
      description: "Full-stack React framework",
    },
    {
      name: "React Native",
      icon: FaMobileAlt,
      level: 95,
      color: "from-blue-500 to-cyan-500",
      description: "Cross-platform mobile apps",
    },
    {
      name: "Node.js & Express.js",
      icon: FaNodeJs,
      level: 88,
      color: "from-green-500 to-emerald-500",
      description: "APIs & backend services",
    },
    {
      name: "MongoDB & NoSQL",
      icon: SiMongodb,
      level: 85,
      color: "from-green-600 to-green-800",
      description: "Document databases",
    },
    {
      name: "PostgreSQL & SQL",
      icon: SiPostgresql,
      level: 85,
      color: "from-blue-600 to-blue-800",
      description: "Relational databases",
    },
    {
      name: "Firebase & APIs",
      icon: FaFire,
      level: 88,
      color: "from-orange-500 to-red-500",
      description: "Auth, Firestore, cloud",
    },
  ];

  const achievements = [
    {
      icon: FaTrophy,
      title: "15+ Projects",
      description: "Successfully delivered",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: FaUsers,
      title: "4.5 Years",
      description: "Experience",
      color: "from-blue-400 to-purple-500",
    },
    {
      icon: FaStar,
      title: "Quality",
      description: "Code excellence",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: FaAward,
      title: "Innovation",
      description: "Cutting-edge solutions",
      color: "from-pink-400 to-rose-500",
    },
  ];

  const highlights = [
    {
      icon: FaCode,
      title: "Clean code",
      description:
        "Modular structure, easy to maintain and hand off.",
    },
    {
      icon: FaRocket,
      title: "Ship on time",
      description:
        "Focus on what ships. MVP to production without overbuilding.",
    },
    {
      icon: FaLightbulb,
      title: "Stack agnostic",
      description:
        "Comfortable with new tools. Pick what fits the project.",
    },
    {
      icon: FaHeart,
      title: "User-focused",
      description:
        "Clear flows, fast load times, no bloat.",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-page)] relative overflow-hidden pb-16 sm:pb-24">
      <div className="bg-animation" aria-hidden="true" />
      {/* Floating background elements */}
      <motion.div className="absolute top-32 right-20 opacity-[0.06] hidden lg:block pointer-events-none" animate={{ y: [0, -18, 0], rotate: [0, 5, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}>
        <FaCode className="text-[#6366f1] text-7xl" />
      </motion.div>
      <motion.div className="absolute bottom-48 left-16 opacity-[0.06] hidden lg:block pointer-events-none" animate={{ y: [0, -14, 0], rotate: [0, -4, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
        <FaRocket className="text-[#ec4899] text-6xl" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6366f1]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <PageHero
          badge="About"
          title={
            <>
              Ali <span className="gradient-text text-glow">Haider</span>
            </>
          }
          subtitle="4.5 years building web and mobile apps. React Native, Node.js, Firebase. UI to backend."
          gradientTitle={false}
        />

        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-6 sm:p-7 bg-[var(--bg-card)] border border-[var(--border)] card-luxury overflow-hidden"
          >
            <div className="text-center mb-6">
              <div className="relative inline-block mb-5">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-2 border-white/[0.1]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/alihaider.png"
                      alt="Ali Haider - Full Stack React Native Developer"
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        if (e.currentTarget.nextElementSibling) {
                          (
                            e.currentTarget.nextElementSibling as HTMLElement
                          ).style.display = "flex";
                        }
                      }}
                    />
                    <div
                      className="w-full h-full bg-[var(--bg-elevated)] flex items-center justify-center"
                      style={{ display: "none" }}
                    >
                      <span className="text-white text-3xl font-bold">AH</span>
                    </div>
                  </div>
                </div>

                <h3 className="font-heading text-2xl font-bold text-[var(--text-primary)] mb-1">
                  Ali Haider
                </h3>
                <p className="text-[#6366f1] font-medium mb-2">
                  Full Stack React Native Developer
                </p>
                <p className="text-[var(--text-muted)] text-sm leading-7">
                  Web + mobile. Frontend + backend.
                </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                className="rounded-2xl p-6 bg-[var(--bg-card)] border border-[var(--border)] card-luxury text-center"
              >
                <div
                  className="inline-flex p-3 rounded-xl mb-3"
                  style={{ background: "var(--gradient-1)" }}
                >
                  <achievement.icon className="text-white text-xl" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[var(--text-primary)] mb-0.5">
                  {achievement.title}
                </h3>
                <p className="text-[var(--text-muted)] text-sm leading-7">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <div className="section-tag mb-3">Stack</div>
            <h2 className="font-heading title-section text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-2">
              Skills
            </h2>
            <p className="text-[var(--text-secondary)]">
              Next.js, Node.js, MongoDB, PostgreSQL, Firebase
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="rounded-2xl p-6 bg-[var(--bg-card)] border border-[var(--border)] card-luxury"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="p-3 rounded-xl"
                    style={{ background: "var(--gradient-1)" }}
                  >
                    <skill.icon className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-[var(--text-primary)]">
                      {skill.name}
                    </h3>
                    <p className="text-[var(--text-muted)] text-sm leading-7">
                      {skill.description}
                    </p>
                  </div>
                </div>
                <div className="w-full bg-[var(--bg-elevated)] rounded-full h-2 mb-1">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.05, ease: "easeOut" }}
                    className="h-2 rounded-full"
                    style={{ background: "var(--gradient-1)" }}
                  />
                </div>
                <p className="text-[var(--text-muted)] text-xs">{skill.level}%</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <div className="section-tag mb-3">Background</div>
            <h2 className="font-heading title-section text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Experience
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-3xl p-6 sm:p-8 bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--primary)]/20 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="p-3 rounded-xl"
                  style={{ background: "var(--gradient-1)" }}
                >
                  <FaLightbulb className="text-white text-xl" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[var(--text-primary)]">Background</h3>
              </div>
              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                <p>
                  4.5+ years in full stack. Built Tijarat (eCommerce), Billion Pound (fitness), SpotSwap (parking). React Native, Node.js, Firebase.
                </p>
                <p>
                  I handle UI, APIs, auth, databases, and deployment. Shipped 15+ projects.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-3xl p-6 sm:p-8 bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--primary)]/20 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="p-3 rounded-xl"
                  style={{ background: "var(--gradient-2)" }}
                >
                  <FaRocket className="text-white text-xl" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[var(--text-primary)]">What I do</h3>
              </div>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] mt-2 shrink-0" />
                  <p className="text-[var(--text-secondary)] text-sm">React Native, web, Node.js, Firebase</p>
                </div>
                <div className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] mt-2 shrink-0" />
                  <p className="text-[var(--text-secondary)] text-sm">REST APIs, auth, real-time sync</p>
                </div>
                <div className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ec4899] mt-2 shrink-0" />
                  <p className="text-[var(--text-secondary)] text-sm">TypeScript, clean code, CI/CD</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <div className="section-tag mb-3">Approach</div>
            <h2 className="font-heading title-section text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              How I work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className="rounded-2xl p-6 bg-[var(--bg-card)] border border-[var(--border)] card-luxury text-center"
              >
                <div
                  className="inline-flex p-3 rounded-xl mb-4"
                  style={{ background: "var(--gradient-2)" }}
                >
                  <highlight.icon className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                  {highlight.title}
                </h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
