"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function WinRate() {
  const router = useRouter();

  const images = [
    "/images/WinRate/w1.png",
    "/images/WinRate/w2.png",
    "/images/WinRate/w3.png",
    "/images/WinRate/w4.png",
    "/images/WinRate/w5.png",
    "/images/WinRate/w6.png",
    "/images/WinRate/w7.png",
  ];

  const technologies = [
    "Unity Engine",
    "C#",
    "Photon Networking",
    "Firebase",
    "PlayFab",
    "Blender",
    "Adobe Photoshop",
    "Steam API",
    "HDRP/URP",
    "Addressables",
    "Unity Analytics",
    "Version Control (Git)",
  ];

  const features = [
    "100-Player Battle Royale Matches",
    "Real-time Global Leaderboards",
    "Extensive Character Customization",
    "Dynamic Weapon Progression System",
    "Cross-platform Multiplayer Support",
    "Integrated Voice Communication",
    "Achievement & Reward System",
    "Competitive Tournament Mode",
    "Procedural Map Generation",
    "Advanced AI Opponents",
    "Spectator Mode",
    "Esports Integration",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      {/* Header */}
      <div className="bg-slate-900/50 backdrop-blur-lg border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => router.push("/projects")}
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-4"
          >
            <FaArrowLeft className="text-sm" />
            Back to Projects
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              WinRate
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              An intense multiplayer battle royale game featuring strategic
              gameplay, weapon progression, and competitive leaderboards for the
              ultimate gaming experience.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 mb-16"
        >
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">
              Project Overview
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              WinRate is an adrenaline-pumping multiplayer battle royale game
              built with Unity, featuring intense strategic gameplay and
              competitive mechanics. Players engage in large-scale battles,
              scavenging for weapons, forming temporary alliances, and battling
              for supremacy in a dynamically shrinking battlefield that demands
              quick thinking and tactical prowess.
            </p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Key Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Technical Architecture
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Developed with Unity engine using C# for core gameplay logic.
                Photon networking enables real-time multiplayer functionality,
                while Firebase handles player data and leaderboards. The game
                features procedural map generation and advanced AI systems for
                dynamic gameplay experiences.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium border border-purple-500/30"
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
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Development Challenges & Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">
                Real-time Multiplayer Sync
              </h3>
              <p className="text-gray-300 mb-4">
                Challenge: Maintaining consistent game state across 100+ players
                in real-time without lag or desync issues.
              </p>
              <p className="text-purple-300 text-sm">
                Solution: Implemented Photon networking with custom
                interpolation algorithms and server-authoritative validation
                systems.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">
                Performance Optimization
              </h3>
              <p className="text-gray-300 mb-4">
                Challenge: Ensuring smooth 60fps gameplay on various hardware
                configurations with complex 3D environments.
              </p>
              <p className="text-purple-300 text-sm">
                Solution: Implemented LOD systems, occlusion culling, and
                dynamic quality settings with extensive profiling and
                optimization.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">
                Anti-Cheat Systems
              </h3>
              <p className="text-gray-300 mb-4">
                Challenge: Preventing cheating and maintaining fair competitive
                gameplay in a multiplayer environment.
              </p>
              <p className="text-purple-300 text-sm">
                Solution: Integrated server-side validation, client-side
                obfuscation, and behavioral analysis systems with reporting
                tools.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">
                Cross-platform Compatibility
              </h3>
              <p className="text-gray-300 mb-4">
                Challenge: Ensuring consistent gameplay experience across PC,
                console, and mobile platforms.
              </p>
              <p className="text-purple-300 text-sm">
                Solution: Developed with Unity&apos;s cross-platform
                capabilities, implemented adaptive controls, and extensive
                platform-specific testing.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Game Screenshots
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="aspect-video relative bg-gray-900 rounded-lg overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    alt={`WinRate Screenshot ${index + 1}`}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute bottom-4 left-4 text-white font-medium">
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
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Interested in this project?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            This is just one of my featured projects. Check out my other work or
            get in touch to discuss how I can help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push("/projects")}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              View All Projects
            </button>
            <button
              onClick={() => router.push("/contact")}
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
