"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaEye,
  FaPlay,
  FaCode,
  FaStar,
} from "react-icons/fa";
import { memo } from "react";

const BLUR_DATA =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 224'%3E%3Cfilter id='b'%3E%3CfeGaussianBlur stdDeviation='10'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' fill='%23111426' filter='url(%23b)'/%3E%3C/svg%3E";

type Props = {
  title: string;
  description: string;
  image: string;
  technologies?: string[];
  live?: string;
  slug?: string;
  featured?: boolean;
  github?: string;
  reduceMotion?: boolean;
  priority?: boolean;
};

function ProjectCard({
  title,
  description,
  image,
  technologies = [],
  live,
  slug,
  featured = false,
  github,
  reduceMotion = true,
  priority = false,
}: Props) {
  const detailsUrl = slug ? `/projects/${slug}/` : "#";

  const wrapperClass = "group relative overflow-hidden rounded-2xl card-luxury focus-professional";

  return (
    <div className={wrapperClass} role="article" tabIndex={0} data-reduce-motion={reduceMotion}>
      {featured && (
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30">
          <div className="flex items-center gap-1 px-2.5 py-1 sm:px-3 bg-gradient-to-r from-[#6366f1] to-[#ec4899] text-white text-[10px] sm:text-xs font-semibold rounded-lg shadow-lg whitespace-nowrap">
            <FaStar className="text-xs" />
            Featured
          </div>
        </div>
      )}
      <div className="relative h-56 overflow-hidden rounded-t-2xl bg-[#0b0f19]">
        <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={`${title} project screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            className="object-cover"
            loading={priority ? "eager" : "lazy"}
            priority={priority}
            quality={62}
            placeholder="blur"
            blurDataURL={BLUR_DATA}
            decoding="async"
          />
        </div>
        <div className="absolute top-4 left-4 z-20 hidden sm:flex flex-wrap gap-2">
          {technologies.slice(0, 2).map((tech) => (
            <span key={tech} className="px-3 py-1.5 bg-black/60 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/20 shadow-lg">{tech}</span>
          ))}
          {technologies.length > 2 && (
            <span className="px-3 py-1.5 bg-gradient-to-r from-[#6366f1]/80 to-[#ec4899]/80 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/30 shadow-lg">+{technologies.length - 2} more</span>
          )}
        </div>
      </div>
      <div className="relative z-10 p-4 sm:p-6">
        <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors duration-200">{title}</h3>
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4 line-clamp-3">{description}</p>
        {technologies.length > 0 && (
          <div className="mb-4 sm:mb-5 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span key={tech} className="px-3 py-1.5 bg-[var(--surface)] text-[var(--text-primary)] text-xs font-medium rounded-lg border border-[var(--border)] hover:border-[var(--primary)]/40 transition-colors duration-200 cursor-default">{tech}</span>
            ))}
          </div>
        )}
        <div className="flex flex-col gap-3">
          {slug && (
            <Link
              href={detailsUrl}
              prefetch
              className="group/btn relative w-full min-h-[48px] flex items-center justify-center rounded-xl text-white font-semibold bg-gradient-to-r from-[#566bff] to-[#8b5cf6] hover:brightness-110 transition"
              aria-label={`View details for ${title}`}
            >
              <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">
                <FaEye className="text-sm shrink-0" />
                View Details
              </span>
            </Link>
          )}
          <div className="flex gap-2">
            {live && live !== "#" && (
              <a href={live} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 glass text-white hover:bg-white/20 rounded-lg transition-all duration-200 border border-white/20 focus-professional">
                <FaPlay className="text-sm" /> Live Demo
              </a>
            )}
            {github && github !== "#" && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 glass text-white hover:bg-white/20 rounded-lg transition-all duration-200 border border-white/20 focus-professional">
                <FaCode className="text-sm" /> Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ProjectCard);
