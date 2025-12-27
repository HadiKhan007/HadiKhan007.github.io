"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaCode, FaMobile, FaRocket } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ali Haider
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              A passionate React Native developer crafting exceptional mobile
              experiences that bring ideas to life.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/projects"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
              >
                View My Work <FaArrowRight />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Get In Touch
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20 hidden lg:block">
          <FaCode className="text-purple-400 text-6xl animate-bounce" />
        </div>
        <div className="absolute top-40 right-20 opacity-20 hidden lg:block">
          <FaMobile className="text-pink-400 text-5xl animate-pulse" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-20 hidden lg:block">
          <FaRocket
            className="text-blue-400 text-4xl animate-bounce"
            style={{ animationDelay: "1s" }}
          />
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What I Do
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              I specialize in creating high-performance mobile applications
              using cutting-edge technologies
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center"
            >
              <FaMobile className="text-purple-400 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Mobile Development
              </h3>
              <p className="text-gray-300">
                Building cross-platform apps with React Native for iOS and
                Android
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center"
            >
              <FaCode className="text-purple-400 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Full-Stack Solutions
              </h3>
              <p className="text-gray-300">
                Integrating Firebase, Redux, and REST APIs for complete app
                ecosystems
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center"
            >
              <FaRocket className="text-purple-400 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Performance Optimization
              </h3>
              <p className="text-gray-300">
                Delivering scalable, high-quality apps that exceed expectations
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
