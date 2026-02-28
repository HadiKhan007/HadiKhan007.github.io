"use client";

import Link from "next/link";
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";

const navItems = [
  { href: "/", label: "Home", icon: FaHome },
  { href: "/about/", label: "About", icon: FaUser },
  { href: "/projects/", label: "Projects", icon: FaBriefcase },
  { href: "/contact/", label: "Contact", icon: FaEnvelope },
];

const techPills = ["React Native", "TypeScript", "Node.js", "Firebase", "Redux"];
const contactLinks = [
  { href: "tel:+923000065409", label: "+92 300 0065409", icon: FaPhone },
  { href: "mailto:alihaidercs17@gmail.com", label: "alihaidercs17@gmail.com", icon: FaEnvelope },
  { href: "https://www.linkedin.com/in/alihaider17/", label: "LinkedIn", icon: FaLinkedin, external: true },
  { href: "https://github.com/HadiKhan007", label: "GitHub", icon: FaGithub, external: true },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[var(--bg-page)] mt-auto overflow-hidden pb-[var(--safe-area-bottom)]">
      {/* Top gradient line - matches site accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6366f1]/50 to-transparent"
        style={{ boxShadow: "0 0 24px rgba(99,102,241,0.25)" }}
        aria-hidden
      />
      {/* Subtle background glow for depth */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[min(100%,800px)] h-40 bg-gradient-to-t from-[#6366f1]/[0.06] to-transparent pointer-events-none"
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 py-10 sm:py-12">
        {/* Availability pill */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-[#06b6d4]/30 bg-[#06b6d4]/10 text-[#06b6d4]"
            style={{ boxShadow: "0 0 20px rgba(6,182,212,0.1)" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06b6d4] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06b6d4]" />
            </span>
            Available for new projects
          </span>
        </div>

        {/* Footer nav - same feel as header */}
        <nav
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8"
          role="navigation"
          aria-label="Footer navigation"
        >
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-center gap-2.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-300 rounded-xl px-4 py-3 text-sm font-medium hover:bg-[var(--surface)] hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-page)]"
            >
              <Icon className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors shrink-0" />
              <span className="relative">
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6366f1] to-[#ec4899] group-hover:w-full transition-all duration-300 rounded-full" />
              </span>
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent max-w-xl mx-auto mb-6 sm:mb-8" />

        {/* Tech stack pills - reinforces expertise */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8">
          {techPills.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-[var(--text-muted)] border border-[var(--border)] bg-[var(--bg-elevated)] hover:text-[var(--text-secondary)] hover:border-[var(--border-hover)] hover:scale-105 transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Contact links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6 text-sm">
          {contactLinks.map(({ href, label, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors"
            >
              <Icon className="text-xs shrink-0" />
              <span>{label}</span>
            </a>
          ))}
        </div>

        {/* Copyright & tagline */}
        <div className="text-center">
          <p className="text-[var(--text-primary)] text-sm font-semibold">
            &copy; {new Date().getFullYear()} Ali Haider · Lahore
          </p>
          <p className="text-[var(--text-muted)] mt-1 text-xs max-w-md mx-auto">
            Senior React Native Developer · Next.js, Node.js, Firebase. Building scalable web & mobile products.
          </p>
        </div>

        {/* Back to top - desktop only, subtle */}
        <div className="flex justify-center mt-6 sm:mt-8">
          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center justify-center w-10 h-10 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)]/40 hover:bg-[var(--surface)] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-page)]"
            aria-label="Back to top"
          >
            <FaArrowUp className="text-sm group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
}
