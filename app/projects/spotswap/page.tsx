"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function SpotSwap() {
  const router = useRouter();

  const images = [
    "/images/SpotSwap/s1.png",
    "/images/SpotSwap/s2.png",
    "/images/SpotSwap/s3.png",
    "/images/SpotSwap/s4.png",
    "/images/SpotSwap/s5.png",
    "/images/SpotSwap/s6.png",
    "/images/SpotSwap/s7.png",
    "/images/SpotSwap/s8.png",
    "/images/SpotSwap/s9.png",
  ];

  const technologies = [
    "React Native",
    "Firebase",
    "Google Maps API",
    "Stripe",
    "Node.js",
    "Express",
    "MongoDB",
    "Socket.io",
    "JWT Authentication",
    "Geolocation Services",
    "Push Notifications",
    "Image Upload",
  ];

  const features = [
    "Real-time Parking Space Discovery",
    "GPS-Enabled Navigation & Directions",
    "Secure In-App Payment Processing",
    "Instant Booking & Reservation System",
    "User Reviews & Rating System",
    "Advanced Search & Filtering",
    "Push Notifications for Bookings",
    "Offline Map Caching",
    "Multi-language Support",
    "24/7 Customer Support Chat",
    "Parking Space Owner Dashboard",
    "Revenue Analytics for Owners",
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
              SpotSwap
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              A revolutionary parking spot sharing platform that connects
              parking space owners with drivers, featuring real-time
              availability, seamless booking, and integrated navigation.
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
              SpotSwap revolutionizes urban parking by creating a peer-to-peer
              marketplace for parking spaces. Users can list their unused
              parking spots and drivers can find and book available spaces in
              real-time, reducing traffic congestion and making parking more
              efficient and affordable.
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
                The platform leverages Firebase for real-time location services,
                Stripe for secure payment processing, and Google Maps API for
                precise navigation. The backend infrastructure ensures high
                availability and scalability for handling peak parking demand in
                urban areas.
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
                Real-time Location Accuracy
              </h3>
              <p className="text-gray-300 mb-4">
                Challenge: Ensuring precise GPS coordinates and real-time
                availability updates for parking spaces.
              </p>
              <p className="text-purple-300 text-sm">
                Solution: Integrated Google Maps API with custom geofencing
                algorithms and implemented WebSocket connections for instant
                updates.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">
                Payment Security
              </h3>
              <p className="text-gray-300 mb-4">
                Challenge: Implementing secure payment processing for
                peer-to-peer transactions without holding funds.
              </p>
              <p className="text-purple-300 text-sm">
                Solution: Integrated Stripe Connect for escrow services and
                implemented multi-layer security with JWT tokens and encryption.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">
                Scalability for Urban Areas
              </h3>
              <p className="text-gray-300 mb-4">
                Challenge: Handling high concurrent users in densely populated
                urban areas during peak hours.
              </p>
              <p className="text-purple-300 text-sm">
                Solution: Implemented microservices architecture with load
                balancing and optimized database queries with geospatial
                indexing.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">
                Trust & Safety
              </h3>
              <p className="text-gray-300 mb-4">
                Challenge: Building user confidence in peer-to-peer parking
                transactions.
              </p>
              <p className="text-purple-300 text-sm">
                Solution: Implemented comprehensive verification system, user
                ratings, secure messaging, and insurance integration.
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
            App Screenshots
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
                <div className="aspect-[9/16] relative bg-gray-900 rounded-lg overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    alt={`SpotSwap Screenshot ${index + 1}`}
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
