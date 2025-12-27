"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-slate-900 text-white py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} Ali Haider | React Native Developer
        </p>
        <p className="text-gray-400 mt-2">
          Building amazing mobile experiences with React Native
        </p>
      </div>
    </motion.footer>
  );
}
