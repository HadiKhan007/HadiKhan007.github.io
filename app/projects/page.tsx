"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "../../components/ProjectCard";
import {
  FaCode,
  FaRocket,
  FaHandSparkles,
  FaStar,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function Projects() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const projects = [
    {
      title: "Billion Pound",
      description:
        "A comprehensive fitness and gym tracking application that helps users monitor workouts, track progress, and achieve fitness goals. Features include workout plans, progress charts, exercise tracking, and personalized fitness recommendations.",
      image: "/images/BillionPound/b1.jpg",
      technologies: ["React Native", "Firebase", "Redux", "Charts"],
      live: "#",
      slug: "billionpound",
      featured: true,
      github: "#",
    },
    {
      title: "SpotSwap",
      description:
        "A parking spot sharing platform that allows users to rent out their unused parking spaces and find available spots in real-time. Includes GPS navigation, booking system, payment integration, and user reviews.",
      image: "/images/SpotSwap/s1.png",
      technologies: ["React Native", "Firebase", "Maps API", "Stripe"],
      live: "#",
      slug: "spotswap",
      featured: false,
      github: "#",
    },
    {
      title: "Tijarat",
      description:
        "A full-featured eCommerce platform with user authentication, product catalog, shopping cart, and payment integration. Designed for seamless online shopping experience with advanced search and filtering.",
      image: "/images/Tijarat/t1.png",
      technologies: ["React Native", "Redux Toolkit", "Firebase", "Stripe"],
      live: "#",
      slug: "tijarat",
      featured: true,
      github: "#",
    },
    {
      title: "WinRate",
      description:
        "A gaming performance tracking app that analyzes player statistics, provides insights for improvement, and tracks competitive gaming achievements across multiple platforms.",
      image: "/images/WinRate/w1.png",
      technologies: ["React Native", "Firebase", "Charts", "Gaming APIs"],
      live: "#",
      slug: "winrate",
      featured: false,
      github: "#",
    },
  ];

  const stats = [
    { number: "15+", label: "Projects Delivered", icon: FaRocket },
    { number: "12+", label: "Tech Stack Tools", icon: FaCode },
    { number: "4.5+", label: "Years Experience", icon: FaStar },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1a] relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 opacity-10"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaCode className="text-purple-400 text-8xl" />
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-10 opacity-10"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          <FaRocket className="text-pink-400 text-7xl" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
        >
          <FaHandSparkles className="text-blue-400 text-9xl" />
        </motion.div>

        {/* Additional floating elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 opacity-5"
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 9,
          }}
        >
          <FaGithub className="text-green-400 text-6xl" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-1/4 opacity-5"
          animate={{
            y: [0, -20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 12,
          }}
        >
          <FaExternalLinkAlt className="text-cyan-400 text-5xl" />
        </motion.div>
      </motion.div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 animated-gradient-subtle opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        {/* Enhanced Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Enhanced badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card mb-8 hover-glow cursor-pointer"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <FaHandSparkles className="text-yellow-400 text-lg" />
            </motion.div>
            <span className="text-purple-300 font-semibold text-sm">
              Featured Projects Showcase
            </span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <FaStar className="text-yellow-400 text-lg" />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="gradient-text">My Projects</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
          >
            Full stack projects Next.js, React Native, Node.js, Express,
            MongoDB, PostgreSQL, SQL & NoSQL. Web & mobile apps with scalable
            backends.
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                  stiffness: 120,
                }}
                className="text-center"
              >
                <div className="card-professional p-6 hover-scale">
                  <motion.div
                    className="inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 mb-4 text-purple-400"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <stat.icon className="text-2xl" />
                  </motion.div>
                  <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div
          style={{ y: y2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              className="h-full"
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center relative"
        >
          {/* Enhanced background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-pink-600/10 rounded-3xl blur-3xl"></div>
          <div className="absolute inset-0 animated-gradient-subtle opacity-30 rounded-3xl"></div>

          <motion.div
            className="relative glass-card rounded-3xl p-8 lg:p-12 hover-lift"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                type: "spring",
                stiffness: 200,
              }}
              viewport={{ once: true }}
              className="w-20 h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 pulse-glow hover-glow cursor-pointer"
            >
              <FaHandSparkles className="text-white text-3xl" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              <span className="gradient-text">More Coming Soon</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              I&apos;m always working on new projects and exploring innovative
              solutions. Check back later for exciting updates and new
              creations!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div
                className="px-6 py-3 glass rounded-full text-purple-300 font-medium hover-glow cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🚀 Building something amazing...
              </motion.div>
              <motion.div
                className="px-6 py-3 glass rounded-full text-pink-300 font-medium hover-glow cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                💡 Exploring new technologies...
              </motion.div>
            </motion.div>

            {/* Additional decorative elements */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-lg"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-md"></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
