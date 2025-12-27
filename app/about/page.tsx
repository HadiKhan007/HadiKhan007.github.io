"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaMobileAlt,
  FaFire,
  FaTools,
} from "react-icons/fa";

export default function About() {
  const skills = [
    { name: "React Native", icon: FaMobileAlt, level: 95 },
    { name: "React", icon: FaReact, level: 90 },
    { name: "Firebase", icon: FaFire, level: 85 },
    { name: "Node.js", icon: FaNodeJs, level: 80 },
    { name: "Redux", icon: FaTools, level: 85 },
    { name: "REST APIs", icon: FaDatabase, level: 90 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about creating exceptional mobile experiences that make a
            difference
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">My Story</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              I am a professional mobile developer with extensive experience
              building high-quality applications for iOS and Android platforms.
              My journey in mobile development began with a passion for creating
              seamless user experiences that solve real-world problems.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              I've successfully developed and deployed multiple apps including
              Spendsail (Expense Management with OCR), Tijarat (eCommerce
              platform), and Billion Pound (Fitness tracking). Each project has
              taught me valuable lessons in scalability, performance, and
              user-centric design.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              What I Bring
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                Expertise in React Native for cross-platform development
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                Strong foundation in Firebase for backend services
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                Proficiency in state management with Redux Toolkit
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                Experience with REST APIs and third-party integrations
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                Commitment to writing clean, maintainable code
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                Focus on performance optimization and user experience
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-300"
            >
              <skill.icon className="text-purple-400 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full"
                />
              </div>
              <p className="text-gray-400 text-sm">
                {skill.level}% Proficiency
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
