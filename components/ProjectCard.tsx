"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaEye,
  FaGithub,
  FaPlay,
  FaCode,
  FaStar,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  title: string;
  description: string;
  image: string;
  technologies?: string[];
  live?: string;
  slug?: string;
  featured?: boolean;
  github?: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  technologies = [],
  live,
  slug,
  featured = false,
  github,
}: Props) {
  const router = useRouter();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleViewDetails = () => {
    if (slug) {
      router.push(`/projects/${slug}`);
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl card-professional hover-lift focus-professional"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      role="article"
      tabIndex={0}
    >
      {/* Featured badge */}
      <AnimatePresence>
        {featured && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="absolute top-4 right-4 z-30"
          >
            <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
              <FaStar className="text-xs animate-pulse" />
              Featured
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

      {/* Image container with enhanced overlay */}
      <div className="relative h-56 overflow-hidden rounded-t-2xl">
        {/* Loading skeleton */}
        <AnimatePresence>
          {!imageLoaded && (
            <motion.div
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center"
            >
              <div className="w-12 h-12 border-4 border-purple-400/30 border-t-purple-400 rounded-full animate-spin"></div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20 z-10"
          animate={{ opacity: isHovered ? 0.8 : 0.3 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img
          src={image}
          alt={`${title} project screenshot`}
          className="w-full h-full object-cover"
          onLoad={handleImageLoad}
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Enhanced hover overlay with quick actions */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm z-20 flex items-center justify-center gap-4"
            >
              {slug && (
                <motion.button
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleViewDetails}
                  className="p-4 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                  title="View Project Details"
                  aria-label={`View details for ${title}`}
                >
                  <FaEye size={20} />
                </motion.button>
              )}

              {live && live !== "#" && (
                <motion.a
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
                  title="View Live Demo"
                  aria-label={`View live demo for ${title}`}
                >
                  <FaExternalLinkAlt size={20} />
                </motion.a>
              )}

              {github && github !== "#" && (
                <motion.a
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-gray-500/25"
                  title="View Source Code"
                  aria-label={`View source code for ${title}`}
                >
                  <FaGithub size={20} />
                </motion.a>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced technology badges */}
        <div className="absolute top-4 left-4 z-20">
          <motion.div
            className="flex flex-wrap gap-2"
            animate={{ opacity: isHovered ? 0.8 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {technologies.slice(0, 2).map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                className="px-3 py-1.5 bg-black/60 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/20 shadow-lg"
              >
                {tech}
              </motion.span>
            ))}
            {technologies.length > 2 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="px-3 py-1.5 bg-gradient-to-r from-purple-500/80 to-pink-500/80 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/30 shadow-lg"
              >
                +{technologies.length - 2} more
              </motion.span>
            )}
          </motion.div>
        </div>
      </div>

      {/* Enhanced content section */}
      <div className="relative z-10 p-6">
        <motion.h3
          className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300"
          animate={{ color: isHovered ? "#c084fc" : "#ffffff" }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3"
          animate={{ color: isHovered ? "#d1d5db" : "#9ca3af" }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>

        {/* Enhanced full technology list */}
        {technologies.length > 0 && (
          <motion.div
            className="mb-5"
            animate={{ opacity: isHovered ? 1 : 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 300,
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-xs font-medium rounded-full border border-purple-400/30 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Enhanced action buttons */}
        <div className="flex flex-col gap-3">
          {slug && (
            <motion.button
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleViewDetails}
              className="group/btn relative w-full overflow-hidden btn-primary hover-lift focus-professional"
              aria-label={`View details for ${title}`}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FaEye className="text-sm" />
                View Details
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover/btn:opacity-20"
                animate={{ opacity: isHovered ? 0.2 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          )}

          <div className="flex gap-2">
            {live && live !== "#" && (
              <motion.a
                whileHover={{ scale: 1.02, y: -1 }}
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 group/btn flex items-center justify-center gap-2 px-4 py-2.5 glass text-white hover:bg-white/20 rounded-lg transition-all duration-300 border border-white/20 focus-professional"
                aria-label={`View live demo for ${title}`}
              >
                <FaPlay className="text-sm" />
                Live Demo
              </motion.a>
            )}

            {github && github !== "#" && (
              <motion.a
                whileHover={{ scale: 1.02, y: -1 }}
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 group/btn flex items-center justify-center gap-2 px-4 py-2.5 glass text-white hover:bg-white/20 rounded-lg transition-all duration-300 border border-white/20 focus-professional"
                aria-label={`View source code for ${title}`}
              >
                <FaCode className="text-sm" />
                Code
              </motion.a>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <motion.div
        className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
        animate={{
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? 0.6 : 0.3,
        }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="absolute -bottom-10 -left-10 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-lg"
        animate={{
          scale: isHovered ? 1.3 : 1,
          opacity: isHovered ? 0.5 : 0.2,
        }}
        transition={{ duration: 0.7 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-full blur-2xl"
        animate={{
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0.4 : 0.1,
        }}
        transition={{ duration: 0.8 }}
      />
    </motion.div>
  );
}
