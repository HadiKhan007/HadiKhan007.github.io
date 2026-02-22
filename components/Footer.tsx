"use client";

import Link from "next/link";
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";

const navItems = [
  { href: "/", label: "Home", icon: FaHome },
  { href: "/about", label: "About", icon: FaUser },
  { href: "/projects", label: "Projects", icon: FaBriefcase },
  { href: "/contact", label: "Contact", icon: FaEnvelope },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] py-12 sm:py-14 border-t border-white/[0.05] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-6"
          role="navigation"
          aria-label="Footer navigation"
        >
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              prefetch
              className="flex items-center gap-2 text-[#94a3b8] hover:text-[#f8fafc] transition-colors text-sm font-medium"
            >
              <Icon className="text-sm" />
              {label}
            </Link>
          ))}
        </nav>
        <p className="text-center text-[#f8fafc] text-sm font-medium">
          &copy; {new Date().getFullYear()} Ali Haider
        </p>
        <p className="text-center text-[#64748b] mt-1 text-xs">
          Full Stack React Native Developer • Next.js • Node.js • Firebase
        </p>
      </div>
    </footer>
  );
}
