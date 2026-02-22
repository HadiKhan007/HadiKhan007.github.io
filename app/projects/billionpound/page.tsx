"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function BillionPound() {
  const router = useRouter();

  const images = [
    "/images/BillionPound/b1.jpg",
    "/images/BillionPound/b2.jpg",
    "/images/BillionPound/b3.png",
    "/images/BillionPound/b4.jpg",
    "/images/BillionPound/b5.png",
    "/images/BillionPound/b6.png",
  ];

  const technologies = [
    "React Native",
    "Firebase",
    "Redux Toolkit",
    "React Navigation",
    "AsyncStorage",
    "React Native Charts",
    "Node.js",
    "Express",
    "MongoDB",
    "JWT Authentication",
    "Cloudinary",
    "Socket.io",
  ];

  const features = [
    "Advanced Workout Planning & Scheduling",
    "Real-time Progress Tracking & Analytics",
    "Personalized Exercise Recommendations",
    "Comprehensive Exercise Library with Videos",
    "Social Challenges & Community Features",
    "Offline Mode with Data Synchronization",
    "Customizable User Profiles & Goals",
    "Integration with Wearable Devices",
    "Nutrition Tracking & Meal Planning",
    "Achievement System & Gamification",
    "Push Notifications & Reminders",
    "Cross-platform Data Sync",
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 relative overflow-hidden">
      <div className="bg-animation" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6366f1]/[0.02] to-transparent pointer-events-none" />
      <div className="relative z-10">
        <div className="border-b border-white/[0.05] bg-[#13131f]/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <button
              onClick={() => router.push("/projects")}
              className="flex items-center gap-2 text-[#94a3b8] hover:text-[#6366f1] transition-colors mb-4"
            >
              <FaArrowLeft className="text-sm" />
              Back to Projects
            </button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-[#f8fafc] mb-4">
                Billion Pound
              </h1>
              <p className="text-xl text-[#94a3b8] max-w-3xl">
              A comprehensive fitness and gym tracking application that helps
              users monitor workouts, track progress, and achieve fitness goals
              with advanced analytics and personalized recommendations.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="grid lg:grid-cols-2 gap-12 mb-16"
        >
          <div>
            <h2 className="text-2xl font-bold text-[#f8fafc] mb-6">
              Project Overview
            </h2>
            <p className="text-[#94a3b8] mb-6 leading-relaxed">
              Billion Pound is a comprehensive fitness and wellness application
              designed to transform how users approach their fitness journey.
              Built with React Native for cross-platform compatibility, this app
              serves as a complete fitness companion that combines advanced
              workout tracking, detailed progress analytics, and social
              connectivity features.
            </p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[#f8fafc] mb-3">
                Key Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-[#94a3b8]"
                  >
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ background: "#6366f1" }}></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[#f8fafc] mb-3">
                Technical Architecture
              </h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                The app utilizes a robust tech stack with Firebase for real-time
                data synchronization, Redux for state management, and custom
                charting libraries for detailed progress visualization. The
                backend is powered by Node.js and Express with MongoDB for
                scalable data storage.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#f8fafc] mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="tech-tag"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Challenges & Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#f8fafc] mb-8 text-center">
            Challenges & Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-6 bg-[#13131f] border border-white/[0.05]">
              <h3 className="text-xl font-semibold text-[#f8fafc] mb-4">
                Real-time Data Synchronization
              </h3>
              <p className="text-[#94a3b8] mb-4">
                Challenge: Seamless data sync across devices with offline support.
              </p>
              <p className="text-[#6366f1] text-sm">
                Solution: Implemented Firebase Realtime Database with conflict
                resolution algorithms and local caching using AsyncStorage.
              </p>
            </div>
            <div className="rounded-2xl p-6 bg-[#13131f] border border-white/[0.05]">
              <h3 className="text-xl font-semibold text-[#f8fafc] mb-4">
                Performance
              </h3>
              <p className="text-[#94a3b8] mb-4">
                Challenge: Large workout history and analytics without slowdown.
              </p>
              <p className="text-[#6366f1] text-sm">
                Solution: Implemented data pagination, lazy loading, and
                optimized database queries with proper indexing.
              </p>
            </div>
            <div className="rounded-2xl p-6 bg-[#13131f] border border-white/[0.05]">
              <h3 className="text-xl font-semibold text-[#f8fafc] mb-4">
                Cross-platform
              </h3>
              <p className="text-[#94a3b8] mb-4">
                Challenge: Consistent UI on iOS and Android across screen sizes.
              </p>
              <p className="text-[#6366f1] text-sm">
                Solution: Used React Native&apos;s responsive design principles
                with custom hooks for device detection and adaptive layouts.
              </p>
            </div>
            <div className="rounded-2xl p-6 bg-[#13131f] border border-white/[0.05]">
              <h3 className="text-xl font-semibold text-[#f8fafc] mb-4">
                User engagement
              </h3>
              <p className="text-[#94a3b8] mb-4">
                Challenge: Keeping users motivated long-term.
              </p>
              <p className="text-[#6366f1] text-sm">
                Solution: Implemented gamification elements, achievement
                systems, and personalized recommendations based on user
                behavior.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-[#f8fafc] mb-8 text-center">
            Screenshots
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-[#13131f] border border-white/[0.05] hover:border-[#6366f1]/30 transition-colors"
              >
                <div className="aspect-[9/16] relative bg-[#1c1c2e] rounded-lg overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    alt={`Billion Pound Screenshot ${index + 1}`}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute bottom-4 left-4 text-[#f8fafc] font-medium text-sm">
                  Screenshot {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-[#f8fafc] mb-4">
            Want to work together?
          </h3>
          <p className="text-[#94a3b8] mb-8 max-w-2xl mx-auto">
            See more projects or reach out to discuss your next build.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push("/projects")}
              className="text-white font-semibold py-3 px-8 rounded-xl transition-all hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg,#6366f1,#ec4899)", boxShadow: "0 10px 30px rgba(99,102,241,0.3)" }}
            >
              View All Projects
            </button>
            <button
              onClick={() => router.push("/contact")}
              className="border border-white/20 text-[#94a3b8] hover:bg-white/5 font-semibold py-3 px-8 rounded-xl transition-colors"
            >
              Contact
            </button>
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  );
}
