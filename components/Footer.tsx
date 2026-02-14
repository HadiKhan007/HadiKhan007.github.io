"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-[#0f172a] text-white py-10 border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} Ali Haider | Full Stack React Native
          Developer
        </p>
        <p className="text-gray-400 mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          Next.js • React Native • Node.js • Express.js • MongoDB • PostgreSQL •
          SQL • NoSQL • Firebase
        </p>
      </div>
    </motion.footer>
  );
}
