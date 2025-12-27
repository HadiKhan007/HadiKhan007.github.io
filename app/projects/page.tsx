"use client";

import { motion } from "framer-motion";
import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Billion Pound",
      description:
        "A comprehensive fitness and gym tracking application that helps users monitor workouts, track progress, and achieve fitness goals. Features include workout plans, progress charts, exercise tracking, and personalized fitness recommendations.",
      image: "/images/BillionPound/b1.jpg",
      technologies: ["React Native", "Firebase", "Redux", "Charts"],
      live: "#",
    },
    {
      title: "SpotSwap",
      description:
        "A parking spot sharing platform that allows users to rent out their unused parking spaces and find available spots in real-time. Includes GPS navigation, booking system, payment integration, and user reviews.",
      image: "/images/SpotSwap/s1.png",
      technologies: ["React Native", "Firebase", "Maps API", "Stripe"],
      live: "#",
    },
    {
      title: "Tijarat",
      description:
        "A full-featured eCommerce platform with user authentication, product catalog, shopping cart, and payment integration. Designed for seamless online shopping experience with advanced search and filtering.",
      image: "/images/Tijarat/t1.png",
      technologies: ["React Native", "Redux Toolkit", "Firebase", "Stripe"],
      live: "#",
    },
    {
      title: "WinRate",
      description:
        "A gaming performance tracking app that analyzes player statistics, provides insights for improvement, and tracks competitive gaming achievements across multiple platforms.",
      image: "/images/WinRate/w1.png",
      technologies: ["React Native", "Firebase", "Charts", "Gaming APIs"],
      live: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work in mobile app development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">
            More Coming Soon
          </h2>
          <p className="text-gray-300">
            I&apos;m always working on new projects. Check back later for
            updates!
          </p>
        </motion.div>
      </div>
    </div>
  );
}
