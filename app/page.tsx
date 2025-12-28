"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaArrowRight,
  FaCode,
  FaMobile,
  FaRocket,
  FaHandSparkles,
  FaStar,
  FaCheckCircle,
  FaUsers,
  FaAward,
  FaLightbulb,
} from "react-icons/fa";

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
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
        <div className="absolute inset-0 animated-gradient opacity-10"></div>
        <div className="absolute inset-0 animated-gradient-subtle opacity-5"></div>

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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card mb-8 text-sm font-medium text-purple-300 hover-glow cursor-pointer"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <FaHandSparkles className="text-yellow-400" />
              </motion.div>
              <span className="font-semibold">Available for new projects</span>
              <FaStar className="text-yellow-400 animate-pulse" />
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
              A passionate{" "}
              <span className="text-purple-400 font-semibold">
                React Native developer
              </span>{" "}
              crafting exceptional mobile experiences that bring ideas to life
              with cutting-edge technology and pixel-perfect design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link
                href="/projects"
                className="group relative btn-primary hover-lift pulse-glow overflow-hidden focus-professional"
              >
                <span className="relative z-10 flex items-center gap-3">
                  View My Work
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"></div>
              </Link>

              <Link
                href="/contact"
                className="group px-8 py-4 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold rounded-xl transition-all duration-300 hover-lift glass-card focus-professional"
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
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 mb-4 ${stat.color}`}
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
          <FaCode className="text-purple-400 text-7xl hover-glow cursor-pointer" />
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
          <FaMobile className="text-pink-400 text-6xl hover-glow cursor-pointer" />
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
          <FaHandSparkles className="text-yellow-400 text-4xl hover-glow cursor-pointer" />
        </motion.div>
      </motion.section>

      {/* Enhanced Skills Preview Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"></div>
        <div className="absolute inset-0 animated-gradient-subtle opacity-30"></div>

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
              I specialize in creating high-performance mobile applications
              using cutting-edge technologies and modern development practices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: FaMobile,
                title: "Mobile Development",
                description:
                  "Building cross-platform apps with React Native for iOS and Android with pixel-perfect UI and smooth performance.",
                gradient: "from-purple-500 to-pink-500",
                delay: 0.1,
                features: [
                  "Cross-platform",
                  "Pixel-perfect UI",
                  "Smooth Performance",
                ],
              },
              {
                icon: FaCode,
                title: "Full-Stack Solutions",
                description:
                  "Integrating Firebase, Redux, and REST APIs for complete app ecosystems with real-time data and offline support.",
                gradient: "from-blue-500 to-cyan-500",
                delay: 0.2,
                features: [
                  "Firebase Integration",
                  "Redux State Management",
                  "REST APIs",
                ],
              },
              {
                icon: FaRocket,
                title: "Performance Optimization",
                description:
                  "Delivering scalable, high-quality apps that exceed expectations with optimized code and exceptional user experience.",
                gradient: "from-green-500 to-emerald-500",
                delay: 0.3,
                features: [
                  "Scalable Architecture",
                  "Optimized Code",
                  "Exceptional UX",
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
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>

                <div className="relative card-professional p-8 hover-lift h-full group-hover:border-purple-400/50 transition-colors duration-300">
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} mb-6 pulse-glow group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="text-white text-3xl" />
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
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

                  {/* Decorative gradient orb */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 glass-card rounded-full hover-lift">
              <motion.span
                className="text-purple-300 font-medium"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Ready to start your project?
              </motion.span>
              <Link
                href="/contact"
                className="btn-secondary hover-lift focus-professional"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
