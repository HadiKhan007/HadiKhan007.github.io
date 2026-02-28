"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "../../components/ProjectCard";
import PageHero from "../../components/PageHero";
import { FaCode, FaRocket, FaStar, FaHandSparkles } from "react-icons/fa";

export default function Projects() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -30]);
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
    <div className="min-h-screen bg-[var(--bg-page)] relative overflow-hidden">
      <div className="bg-animation" aria-hidden="true" />
      {/* Floating background elements */}
      <motion.div className="absolute top-20 left-10 opacity-[0.08] hidden lg:block pointer-events-none" animate={{ y: [0, -20, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}>
        <FaCode className="text-[#6366f1] text-7xl" />
      </motion.div>
      <motion.div className="absolute bottom-32 right-16 opacity-[0.08] hidden lg:block pointer-events-none" animate={{ y: [0, -15, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
        <FaRocket className="text-[#ec4899] text-6xl" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6366f1]/[0.02] to-transparent pointer-events-none" />
      <motion.div style={{ y }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <PageHero
          badge={
            <>
              <FaHandSparkles className="text-[#06b6d4] shrink-0" />
              Featured Projects
              <FaStar className="text-[#ec4899] shrink-0" />
            </>
          }
          title="My Projects"
          subtitle="Full stack projects Next.js, React Native, Node.js, Express, MongoDB, PostgreSQL, SQL & NoSQL. Web & mobile apps with scalable backends."
        >
          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + index * 0.08,
                  type: "spring",
                  stiffness: 120,
                }}
                className="text-center"
              >
          <div className="rounded-2xl p-5 sm:p-6 bg-[var(--bg-card)] border border-[var(--border)] card-luxury focus-within:ring-2 focus-within:ring-[#6366f1]/20 focus-within:ring-offset-2 focus-within:ring-offset-[var(--bg-page)]">
                  <div className="inline-flex p-3 rounded-xl bg-[var(--bg-elevated)] mb-4 text-[#6366f1]">
                    <stat.icon className="text-2xl" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-[var(--text-muted)] text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </PageHero>

        {/* Enhanced Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 mb-10 sm:mb-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 120,
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="rounded-2xl p-6 sm:p-8 lg:p-10 bg-[var(--bg-card)] border border-[var(--border)] card-luxury relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#6366f1]/10 to-transparent rounded-full blur-2xl" />
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#6366f1] to-[#ec4899] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#6366f1]/30"
            >
              <FaRocket className="text-white text-xl sm:text-2xl" />
            </motion.div>
            <h2 className="font-heading title-section text-2xl sm:text-3xl lg:text-4xl text-[var(--text-primary)] mb-4">
              <span className="gradient-text text-glow">More Coming Soon</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base max-w-xl mx-auto">
              Building new projects and exploring new tech. Check back for updates.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
