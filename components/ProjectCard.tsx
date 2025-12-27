"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaEye } from "react-icons/fa";
import { useRouter } from "next/navigation";

type Props = {
  title: string;
  description: string;
  image: string;
  technologies?: string[];
  live?: string;
  slug?: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  technologies = [],
  live,
  slug,
}: Props) {
  const router = useRouter();

  const handleViewDetails = () => {
    if (slug) {
      router.push(`/projects/${slug}`);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="relative h-48 bg-gradient-to-br from-purple-400 to-pink-400">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {technologies.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col gap-3">
          {slug && (
            <button
              onClick={handleViewDetails}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-sm rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              <FaEye className="text-sm" />
              View Details
            </button>
          )}

          {live && live !== "#" && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg transition-colors duration-300 border border-white/20"
            >
              <FaExternalLinkAlt className="text-sm" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
