"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function Tijarat() {
  const router = useRouter();

  const images = [
    "/images/Tijarat/t1.png",
    "/images/Tijarat/t2.png",
    "/images/Tijarat/t3.png",
    "/images/Tijarat/t4.png",
    "/images/Tijarat/t5.png",
    "/images/Tijarat/t6.png",
  ];

  const technologies = [
    "React",
    "Redux Toolkit",
    "Node.js",
    "Express",
    "MongoDB",
    "Stripe",
    "JWT Authentication",
    "Socket.io",
    "Cloudinary",
    "React Router",
    "Axios",
    "Material-UI",
    "Email Service Integration",
  ];

  const features = [
    "Multi-vendor Marketplace Platform",
    "Real-time Customer Support Chat",
    "Secure Payment Gateway Integration",
    "Advanced Product Search & Filtering",
    "Order Tracking & Management",
    "Seller Dashboard & Analytics",
    "Customer Review & Rating System",
    "Responsive Mobile Design",
    "Inventory Management System",
    "Email Notifications & Alerts",
    "Wishlist & Shopping Cart",
    "Multi-language & Currency Support",
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
              Tijarat
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              A comprehensive e-commerce platform connecting buyers and sellers
              with advanced features, secure payments, and real-time
              communication for seamless online shopping experiences.
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
              Tijarat is a comprehensive multi-vendor e-commerce platform that
              connects buyers with sellers in a dynamic marketplace environment.
              Built with modern web technologies, this platform offers a
              complete solution for online retail with advanced features like
              real-time inventory management, secure payment processing, and
              integrated communication tools for seamless business transactions.
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
                The platform utilizes React for the frontend with Redux for
                state management, Node.js and Express for the backend API, and
                MongoDB for flexible data storage. Stripe integration ensures
                secure payment processing, while Socket.io enables real-time
                communication features.
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
                Multi-vendor Complexity
              </h3>
              <p className="text-gray-300 mb-4">
                Challenge: Managing multiple seller accounts, commissions, and
                inventory across different vendors.
              </p>
              <p className="text-purple-300 text-sm">
                Solution: Implemented role-based access control with separate
                dashboards and automated commission calculation systems.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">
                Real-time Communication
              </h3>
              <p className="text-gray-300 mb-4">
                Challenge: Building instant messaging between buyers, sellers,
                and support staff.
              </p>
              <p className="text-purple-300 text-sm">
                Solution: Integrated Socket.io for real-time messaging with
                message history storage and push notifications.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">
                Payment Security & Trust
              </h3>
              <p className="text-gray-300 mb-4">
                Challenge: Ensuring secure transactions and building user trust
                in online payments.
              </p>
              <p className="text-purple-300 text-sm">
                Solution: Integrated Stripe with PCI compliance, implemented
                escrow system, and added buyer/seller protection policies.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">
                Performance at Scale
              </h3>
              <p className="text-gray-300 mb-4">
                Challenge: Handling large product catalogs and high concurrent
                users efficiently.
              </p>
              <p className="text-purple-300 text-sm">
                Solution: Implemented database indexing, caching layers, and
                optimized queries with pagination for better performance.
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
            Platform Screenshots
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
                    alt={`Tijarat Screenshot ${index + 1}`}
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
