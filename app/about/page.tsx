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
      title: "Clean Architecture",
      description:
        "Building scalable, maintainable systems with modern design patterns and best practices.",
    },
    {
      icon: FaRocket,
      title: "Performance First",
      description:
        "Optimizing every aspect for lightning-fast experiences and exceptional user satisfaction.",
    },
    {
      icon: FaLightbulb,
      title: "Innovation Driven",
      description:
        "Constantly exploring emerging technologies to deliver cutting-edge solutions.",
    },
    {
      icon: FaHeart,
      title: "User Obsessed",
      description:
        "Every decision made with users at the center, creating meaningful digital experiences.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1a] relative overflow-hidden">
      {/* Pro-level Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(99,102,241,0.12),transparent)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400/6 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 opacity-20"
        >
          <FaMagic className="text-purple-400 text-6xl" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-32 left-16 opacity-20"
        >
          <FaCode className="text-pink-400 text-5xl" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-card border border-white/10 mb-8"
          >
            <FaMagic className="text-purple-400 animate-pulse" />
            <span className="text-purple-300 font-semibold tracking-wide">
              ABOUT ME
            </span>
            <FaMagic className="text-pink-400 animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
          >
            <span className="text-white/95">Crafting Digital</span>
            <br />
            <span className="gradient-text">Experiences</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Full stack developer building web & mobile apps end-to-end. From UI
            to APIs, databases to deployment seamless UX, robust backends, and
            scalable architecture in every project.
          </motion.p>
        </motion.div>

        {/* Profile & Achievements Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-0 group-hover:opacity-100"></div>

            <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
              <div className="text-center mb-8">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-full blur-xl animate-pulse"></div>
                  <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-400 to-pink-400 shadow-2xl">
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
                      className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center"
                      style={{ display: "none" }}
                    >
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-2xl font-bold">
                            AH
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg border-4 border-slate-900">
                    <FaCheckCircle className="text-white text-lg" />
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-2">
                  Ali Haider
                </h2>
                <p className="text-purple-300 font-medium text-lg mb-4">
                  Full Stack React Native Developer
                </p>
                <p className="text-gray-400 text-sm">
                  Web + Mobile • Frontend + Backend • End to end
                </p>
              </div>
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 text-center hover-lift">
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${achievement.color} mb-4 mx-auto`}
                  >
                    <achievement.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Technical Expertise</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Next.js • Node.js • Express • MongoDB • PostgreSQL • SQL & NoSQL
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover-lift">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${skill.color}`}
                    >
                      <skill.icon className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {skill.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{
                        duration: 1.5,
                        delay: 1 + index * 0.1,
                        ease: "easeOut",
                      }}
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                  <p className="text-gray-400 text-sm">
                    {skill.level}% Proficiency
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                My Journey
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              From passion to profession - the story behind the code
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Story Cards */}
            {[1, 2].map((card) => (
              <motion.div
                key={card}
                initial={{ opacity: 0, x: card === 1 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 + card * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                      {card === 1 ? (
                        <FaLightbulb className="text-white text-xl" />
                      ) : (
                        <FaRocket className="text-white text-xl" />
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {card === 1 ? "My Story" : "What I Bring"}
                    </h3>
                  </div>

                  {card === 1 ? (
                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <p>
                        Full stack developer with 4.5+ years building scalable
                        web and mobile apps. React Native, Node.js, Firebase
                        from UI to APIs, databases to deployment.
                      </p>
                      <p>
                        Delivered 15+ projects including{" "}
                        <span className="text-purple-300 font-semibold">
                          Tijarat
                        </span>{" "}
                        (eCommerce),{" "}
                        <span className="text-purple-300 font-semibold">
                          Billion Pound
                        </span>{" "}
                        (Fitness), and{" "}
                        <span className="text-purple-300 font-semibold">
                          SpotSwap
                        </span>{" "}
                        (Trading platform). Each with robust backends, clean
                        architecture, and polished UX.
                      </p>
                      <p>
                        I build end-to-end: responsive interfaces, REST APIs,
                        auth flows, real-time data, and cloud deployment.
                        Focused on products that perform, scale, and ship on
                        time.
                      </p>
                      <p className="text-purple-200 font-medium">
                        Always exploring the stack TypeScript, modern tooling,
                        and best practices.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-1">
                            Full Stack Range
                          </h4>
                          <p className="text-gray-300 leading-relaxed text-sm">
                            React Native, React web, Node.js APIs, Firebase
                            front to back.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-1">
                            Backend & APIs
                          </h4>
                          <p className="text-gray-300 leading-relaxed text-sm">
                            REST design, auth, databases, real-time sync, and
                            serverless.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-1">
                            Scalable Architecture
                          </h4>
                          <p className="text-gray-300 leading-relaxed text-sm">
                            Clean code, TypeScript, state management, CI/CD.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-pink-400 rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-1">
                            UI/UX Excellence
                          </h4>
                          <p className="text-gray-300 leading-relaxed text-sm">
                            Intuitive interfaces, 60fps animations, polished
                            mobile & web.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Core Values
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              The principles that guide every project and decision I make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 text-center hover-lift h-full">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-green-400 to-blue-500 mb-4 mx-auto pulse-glow">
                    <highlight.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
