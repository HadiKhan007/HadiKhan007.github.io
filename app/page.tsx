"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaArrowRight,
  FaCode,
  FaMobile,
  FaRocket,
  FaHandSparkles,
  FaCheckCircle,
  FaUsers,
  FaAward,
  FaLightbulb,
  FaDownload,
  FaDatabase,
  FaServer,
} from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";

// Generate particles at module level to avoid React purity issues
const generateParticles = () => {
  return [...Array(6)].map(() => ({
    left: `${Math.random() * 100}%`,
    width: `${Math.random() * 8 + 2}px`,
    height: `${Math.random() * 8 + 2}px`,
    animationDelay: `${Math.random() * 25}s`,
    animationDuration: `${Math.random() * 15 + 20}s`,
    opacity: Math.random() * 0.6 + 0.2,
  }));
};

const particles = generateParticles();

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Function to handle resume download
  const handleResumeDownload = () => {
    // Create a temporary link element
    const link = document.createElement("a");
    link.href = "/AliHaider.pdf";
    link.download = "AliHaiderResume.pdf"; // You can customize the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] relative overflow-hidden">
      <div className="bg-animation" aria-hidden="true" />

      {/* Hero Section */}
      <motion.section
        style={{ y }}
        className="relative overflow-hidden min-h-screen flex items-center"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.12),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
          <div className="text-center">
            {/* Enhanced Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
              }}
              className="flex flex-col items-center gap-4 mb-8"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
                className="page-top-badge"
              >
                <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse shrink-0" />
                Available for new projects
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex flex-wrap items-center justify-center gap-2 max-w-2xl"
              >
                {[
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
                ].map((tech) => (
                  <span
                    key={tech}
                    className="tech-tag"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text block sm:inline">Ali Haider</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base sm:text-lg lg:text-xl text-[#94a3b8] mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              <span className="text-[#6366f1] font-semibold">
                Full Stack React Native developer
              </span>{" "}
              building scalable web & mobile apps from end to end. Seamless UX,
              robust backends, modern stack turning vision into products that
              perform and scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link
                href="/projects"
                className="group relative btn-primary overflow-hidden focus-professional"
              >
                <span className="relative z-10 flex items-center gap-3">
                  View My Work
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>

              {/* RESUME DOWNLOAD BUTTON */}
              <button
                onClick={handleResumeDownload}
                className="inline-flex items-center gap-2 px-4 py-3 border border-white/10 text-[#94a3b8] hover:bg-white/5 font-medium rounded-xl transition-colors"
              >
                <FaDownload />
                Download CV
              </button>

              <Link
                href="/contact"
                className="group px-8 py-4 btn-secondary rounded-xl focus-professional"
              >
                <span className="flex items-center gap-2">
                  <FaHandSparkles />
                  Get In Touch
                </span>
              </Link>
            </motion.div>

            {/* Enhanced Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-16 max-w-4xl mx-auto"
            >
              {[
                {
                  number: "15+",
                  label: "Projects",
                  icon: FaRocket,
                  color: "text-purple-400",
                },
                {
                  number: "4.5",
                  label: "Years Exp",
                  icon: FaAward,
                  color: "text-pink-400",
                },
                {
                  number: "100%",
                  label: "Dedication",
                  icon: FaCheckCircle,
                  color: "text-green-400",
                },
                {
                  number: "∞",
                  label: "Creativity",
                  icon: FaLightbulb,
                  color: "text-yellow-400",
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 1 + index * 0.1,
                    type: "spring",
                    stiffness: 120,
                  }}
                  className="text-center group"
                >
                  <div className="rounded-2xl p-4 sm:p-6 bg-[#13131f] border border-white/[0.05] hover:border-[#6366f1]/30 hover-lift transition-all duration-300 group/card">
                    <motion.div
                      className={`inline-flex p-3 rounded-xl bg-white/5 border border-white/10 mb-4 ${stat.color}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <stat.icon className="text-2xl" />
                    </motion.div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Floating hero icons - premium touch */}
        <motion.div
          className="absolute top-24 left-12 opacity-[0.12] hidden lg:block pointer-events-none"
          animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaCode className="text-[#6366f1] text-6xl" />
        </motion.div>
        <motion.div
          className="absolute top-48 right-24 opacity-[0.12] hidden lg:block pointer-events-none"
          animate={{ y: [0, -12, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <FaMobile className="text-[#ec4899] text-5xl" />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-20 opacity-[0.12] hidden lg:block pointer-events-none"
          animate={{ y: [0, -18, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <FaRocket className="text-[#06b6d4] text-5xl" />
        </motion.div>
        <motion.div
          className="absolute bottom-24 right-28 opacity-[0.12] hidden lg:block pointer-events-none"
          animate={{ y: [0, -14, 0], rotate: [0, -4, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <FaDatabase className="text-[#6366f1] text-4xl" />
        </motion.div>
      </motion.section>

      <section className="py-12 sm:py-16 lg:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6366f1]/[0.03] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 120 }}
              viewport={{ once: true }}
              className="inline-flex p-3 rounded-2xl bg-gradient-to-r from-[#6366f1]/20 to-[#ec4899]/20 mb-6 border border-white/10"
            >
              <FaUsers className="text-3xl text-[#818cf8]" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              <span className="gradient-text">What I Do</span>
            </h2>
            <p className="text-base sm:text-lg text-[#94a3b8] max-w-3xl mx-auto leading-relaxed">
              End-to-end development Next.js, React Native, Node.js, Express,
              MongoDB, PostgreSQL, SQL & NoSQL. Scalable web & mobile from idea
              to production.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: FaMobile,
                title: "Mobile & Web Apps",
                description:
                  "Cross-platform React Native apps for iOS & Android, plus React web apps. Pixel-perfect UI, 60fps animations, native feel.",
                gradient: "from-purple-500 to-pink-500",
                delay: 0.1,
                features: [
                  "React Native & Next.js",
                  "TypeScript",
                  "Responsive Design",
                ],
              },
              {
                icon: FaServer,
                title: "Backend & APIs",
                description:
                  "Node.js APIs, Firebase, REST/GraphQL. Auth, databases, real-time sync, and serverless architecture that scales.",
                gradient: "from-blue-500 to-cyan-500",
                delay: 0.2,
                features: [
                  "Node.js & Express.js",
                  "MongoDB, PostgreSQL, SQL",
                  "REST & API Design",
                ],
              },
              {
                icon: FaRocket,
                title: "Full Stack Delivery",
                description:
                  "From MVP to production. Clean architecture, scalable systems, and deployment pipelines that ship on time.",
                gradient: "from-green-500 to-emerald-500",
                delay: 0.3,
                features: [
                  "End-to-End Builds",
                  "CI/CD & Deployment",
                  "Performance First",
                ],
              },
            ].map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: service.delay }}
                viewport={{ once: true }}
                className="group relative"
              >

                <div className="relative rounded-2xl p-6 sm:p-8 bg-[#13131f] border border-white/[0.05] h-full hover:border-[#6366f1]/30 hover-lift transition-all duration-300 overflow-hidden group/card">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/5 to-[#ec4899]/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div
                    className={`relative inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} mb-6 pulse-glow group-hover/card:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <service.icon className="text-white text-3xl" />
                  </div>

                  <h3 className="text-xl font-bold text-[#f8fafc] mb-4">
                    {service.title}
                  </h3>

                  <p className="text-[#94a3b8] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: service.delay + featureIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-sm text-[#64748b]"
                      >
                        <FaCheckCircle className="text-green-400 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                </div>
              </motion.div>
            ))}
          </div>

          {/* Featured Projects Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="flex items-center justify-between mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold">
                <span className="gradient-text">Featured Work</span>
              </h3>
              <Link
                href="/projects"
                className="group flex items-center gap-2 text-[#6366f1] hover:text-[#818cf8] font-medium transition-colors"
              >
                View All Projects
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Billion Pound",
                  description:
                    "Comprehensive fitness and gym tracking app with workout plans, progress analytics, and personalized recommendations.",
                  image: "/images/BillionPound/b1.jpg",
                  technologies: ["React Native", "Firebase", "Redux", "Charts"],
                  live: "#",
                  slug: "billionpound",
                  featured: true,
                  github: "#",
                },
                {
                  title: "Tijarat",
                  description:
                    "Full-featured eCommerce platform with authentication, product catalog, cart, and payment integration.",
                  image: "/images/Tijarat/t1.png",
                  technologies: [
                    "React Native",
                    "Redux Toolkit",
                    "Firebase",
                    "Stripe",
                  ],
                  live: "#",
                  slug: "tijarat",
                  featured: true,
                  github: "#",
                },
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16 sm:mt-20"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-4 px-4 sm:px-6 py-4 sm:py-3 rounded-2xl sm:rounded-full glass-card hover-lift w-full sm:w-auto max-w-md sm:max-w-none">
                <span className="text-[#94a3b8] font-medium text-center sm:text-left">
                  Ready to build your next app?
                </span>
                <Link
                  href="/contact"
                  className="btn-secondary hover-lift focus-professional whitespace-nowrap w-full sm:w-auto flex justify-center items-center min-h-[44px] px-6 py-3"
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
