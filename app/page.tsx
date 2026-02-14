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
    <div className="min-h-screen bg-[#0a0f1a] relative overflow-hidden">
      {/* Enhanced Animated Background Particles */}
      <div className="particles-container">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="particle"
            style={{
              ...particle,
              background: `linear-gradient(135deg, ${
                i % 3 === 0
                  ? "var(--primary)"
                  : i % 3 === 1
                    ? "var(--secondary)"
                    : "var(--accent)"
              }, ${
                i % 3 === 0
                  ? "var(--primary-dark)"
                  : i % 3 === 1
                    ? "var(--secondary-dark)"
                    : "var(--accent-dark)"
              })`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.section
        style={{ y }}
        className="relative overflow-hidden min-h-screen flex items-center"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.15),transparent)]"></div>
        <div className="absolute inset-0 animated-gradient-subtle opacity-60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
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
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card text-sm font-medium text-slate-300">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                <span className="font-medium tracking-wide">
                  Available for new projects
                </span>
              </div>
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
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:bg-white/[0.08] hover:border-indigo-500/30 hover:text-slate-200 transition-all duration-300"
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
              className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              <span className="text-indigo-400 font-semibold">
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
                className="inline-flex items-center gap-2 px-4 py-3 border border-white/20 text-slate-300 hover:bg-white/10 hover:border-white/30 font-medium rounded-xl transition-all duration-300 glass-card"
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
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 mt-16 max-w-4xl mx-auto"
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
                  <div className="card-professional p-6 hover-scale">
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

        {/* Enhanced Floating Elements with Better Animations */}
        <motion.div
          className="absolute top-20 left-10 opacity-20 hidden lg:block"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaCode className="text-indigo-500/30 text-7xl" />
        </motion.div>

        <motion.div
          className="absolute top-40 right-20 opacity-20 hidden lg:block"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <FaMobile className="text-indigo-400/25 text-6xl" />
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-20 opacity-20 hidden lg:block"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        >
          <FaRocket className="text-blue-400 text-5xl hover-glow cursor-pointer" />
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-32 opacity-20 hidden lg:block"
          animate={{
            y: [0, -18, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
        >
          <FaDatabase className="text-indigo-400/25 text-4xl" />
        </motion.div>
      </motion.section>

      {/* Pro-level Skills Section */}
      <section className="py-24 lg:py-36 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent"></div>
        <div className="absolute inset-0 animated-gradient-subtle opacity-80"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block p-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 mb-6"
            >
              <FaUsers className="text-3xl text-purple-400" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              <span className="gradient-text">What I Do</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>

                <div className="relative card-professional p-8 hover-lift h-full group-hover:border-indigo-500/20 transition-colors duration-300">
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} mb-6 pulse-glow group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="text-white text-3xl" />
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
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
                        className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors"
                      >
                        <FaCheckCircle className="text-green-400 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
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
                className="group flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
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
            className="text-center mt-20"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="inline-flex items-center gap-4 px-8 py-4 glass-card rounded-full hover-lift">
                <motion.span
                  className="text-slate-400 font-medium"
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Ready to build your next app?
                </motion.span>
                <Link
                  href="/contact"
                  className="btn-secondary hover-lift focus-professional"
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
