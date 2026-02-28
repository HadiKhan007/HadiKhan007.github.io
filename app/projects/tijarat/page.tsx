"use client";

import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

export default function Tijarat() {
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
    <div className="min-h-screen bg-[var(--bg-page)] pt-24 relative overflow-hidden">
      <div className="bg-animation" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6366f1]/[0.02] to-transparent pointer-events-none" />
      <div className="relative z-10">
        <div className="border-b border-[var(--border)] bg-[var(--bg-card)]/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <a
              href="/projects/"
              className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[#6366f1] transition-colors duration-150 mb-4"
            >
              <FaArrowLeft className="text-sm" />
              Back to Projects
            </a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
                Tijarat
              </h1>
              <p className="text-xl text-[var(--text-secondary)] max-w-3xl">
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
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
              Project Overview
            </h2>
            <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
              Tijarat is a comprehensive multi-vendor e-commerce platform that
              connects buyers with sellers in a dynamic marketplace environment.
              Built with modern web technologies, this platform offers a
              complete solution for online retail with advanced features like
              real-time inventory management, secure payment processing, and
              integrated communication tools for seamless business transactions.
            </p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                Key Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-[var(--text-secondary)]"
                  >
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ background: "#6366f1" }}></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                Technical Architecture
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                The platform utilizes React for the frontend with Redux for
                state management, Node.js and Express for the backend API, and
                MongoDB for flexible data storage. Stripe integration ensures
                secure payment processing, while Socket.io enables real-time
                communication features.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
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
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8 text-center">
            Development Challenges & Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl p-6 bg-[var(--bg-card)] border border-[var(--border)]">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                Multi-vendor Complexity
              </h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Challenge: Managing multiple seller accounts, commissions, and
                inventory across different vendors.
              </p>
              <p className="text-[#6366f1] text-sm">
                Solution: Implemented role-based access control with separate
                dashboards and automated commission calculation systems.
              </p>
            </div>
            <div className="rounded-2xl p-6 bg-[var(--bg-card)] border border-[var(--border)]">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                Real-time Communication
              </h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Challenge: Building instant messaging between buyers, sellers,
                and support staff.
              </p>
              <p className="text-[#6366f1] text-sm">
                Solution: Integrated Socket.io for real-time messaging with
                message history storage and push notifications.
              </p>
            </div>
            <div className="rounded-2xl p-6 bg-[var(--bg-card)] border border-[var(--border)]">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                Payment Security & Trust
              </h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Challenge: Ensuring secure transactions and building user trust
                in online payments.
              </p>
              <p className="text-[#6366f1] text-sm">
                Solution: Integrated Stripe with PCI compliance, implemented
                escrow system, and added buyer/seller protection policies.
              </p>
            </div>
            <div className="rounded-2xl p-6 bg-[var(--bg-card)] border border-[var(--border)]">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                Performance at Scale
              </h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Challenge: Handling large product catalogs and high concurrent
                users efficiently.
              </p>
              <p className="text-[#6366f1] text-sm">
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
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8 text-center">
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
                className="group relative overflow-hidden rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--primary)]/30 transition-colors"
              >
                <div className="aspect-video relative bg-[var(--bg-elevated)] rounded-lg overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    alt={`Tijarat Screenshot ${index + 1}`}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute bottom-4 left-4 text-[var(--text-primary)] font-medium">
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
          <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
            Want to work together?
          </h3>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            See more projects or reach out to discuss your next build.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/projects/"
              className="text-white font-semibold py-3 px-8 rounded-xl transition-all duration-150 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg,#6366f1,#ec4899)", boxShadow: "0 10px 30px rgba(99,102,241,0.3)" }}
            >
              View All Projects
            </a>
            <a
              href="/contact/"
              className="border border-[var(--border-hover)] text-[var(--text-secondary)] hover:bg-[var(--surface)] font-semibold py-3 px-8 rounded-xl transition-colors duration-150"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  );
}
