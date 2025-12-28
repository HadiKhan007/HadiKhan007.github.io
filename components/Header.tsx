"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      // Hide/show header based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    handleRouteChange();
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { href: "/", label: "Home", icon: FaHome },
    { href: "/about", label: "About", icon: FaUser },
    { href: "/projects", label: "Projects", icon: FaBriefcase },
    { href: "/contact", label: "Contact", icon: FaEnvelope },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            isScrolled
              ? "glass-dark shadow-2xl border-b border-white/10"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              {/* Enhanced Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-2xl font-bold"
              >
                <Link
                  href="/"
                  className="flex items-center gap-3 group focus-professional"
                  aria-label="Ali Haider - Home"
                >
                  <motion.div
                    className="relative w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-shadow duration-300"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-white font-bold text-lg">AH</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                  <span className="gradient-text font-extrabold tracking-tight">
                    Ali Haider
                  </span>
                </Link>
              </motion.div>

              {/* Desktop Navigation */}
              <nav
                className="hidden md:flex items-center space-x-2"
                role="navigation"
              >
                {navItems.map((item) => {
                  const isActive = isActiveLink(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`relative px-5 py-3 text-gray-300 hover:text-white transition-all duration-300 rounded-xl group font-medium ${
                        isActive ? "text-white bg-white/10" : "hover:bg-white/5"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <motion.div
                          className={`p-1.5 rounded-lg transition-all duration-300 ${
                            isActive
                              ? "bg-gradient-to-r from-purple-500/30 to-pink-500/30"
                              : "bg-gradient-to-r from-purple-500/10 to-pink-500/10 group-hover:from-purple-500/20 group-hover:to-pink-500/20"
                          }`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <item.icon
                            className={`text-sm transition-colors duration-300 ${
                              isActive
                                ? "text-purple-300"
                                : "text-purple-400 group-hover:text-purple-300"
                            }`}
                          />
                        </motion.div>
                        {item.label}
                      </span>
                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                      )}
                      {/* Hover indicator */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-8 rounded-full transition-all duration-300"></div>
                    </Link>
                  );
                })}
              </nav>

              {/* Enhanced Mobile menu button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu}
                className="md:hidden relative p-3 text-white hover:text-purple-400 transition-all duration-300 rounded-xl hover:bg-white/10 focus-professional"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                <motion.div
                  animate={isOpen ? "open" : "closed"}
                  className="relative w-6 h-6"
                >
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 8 },
                    }}
                    className="absolute top-1 left-0 w-6 h-0.5 bg-current block transform origin-center transition-all duration-300"
                  />
                  <motion.span
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 },
                    }}
                    className="absolute top-3 left-0 w-6 h-0.5 bg-current block transform origin-center transition-all duration-300"
                  />
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -8 },
                    }}
                    className="absolute top-5 left-0 w-6 h-0.5 bg-current block transform origin-center transition-all duration-300"
                  />
                </motion.div>
              </motion.button>
            </div>

            {/* Enhanced Mobile Navigation */}
            <AnimatePresence>
              {isOpen && (
                <>
                  {/* Backdrop */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                  />

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="md:hidden absolute top-full left-4 right-4 glass-dark rounded-2xl mt-4 py-6 z-45 shadow-2xl border border-white/10 max-h-[80vh] overflow-y-auto"
                  >
                    <nav
                      className="flex flex-col space-y-2 px-6"
                      role="navigation"
                    >
                      {navItems.map((item, index) => {
                        const isActive = isActiveLink(item.href);
                        return (
                          <motion.div
                            key={item.href}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                          >
                            <Link
                              href={item.href}
                              className={`flex items-center gap-4 px-4 py-4 text-gray-300 hover:text-white transition-all duration-300 rounded-xl group ${
                                isActive
                                  ? "text-white bg-white/10 border-l-4 border-purple-400"
                                  : "hover:bg-white/5"
                              }`}
                              onClick={() => setIsOpen(false)}
                            >
                              <motion.div
                                className={`p-3 rounded-xl transition-all duration-300 ${
                                  isActive
                                    ? "bg-gradient-to-r from-purple-500/40 to-pink-500/40"
                                    : "bg-gradient-to-r from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30"
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <item.icon
                                  className={`text-lg transition-colors duration-300 ${
                                    isActive
                                      ? "text-purple-300"
                                      : "text-purple-400 group-hover:text-purple-300"
                                  }`}
                                />
                              </motion.div>
                              <div className="flex-1">
                                <span className="font-semibold block">
                                  {item.label}
                                </span>
                                {isActive && (
                                  <span className="text-xs text-purple-400 font-medium">
                                    Current page
                                  </span>
                                )}
                              </div>
                              <FaChevronDown
                                className={`text-xs transition-transform duration-300 ${
                                  isActive
                                    ? "rotate-[-90deg] text-purple-400"
                                    : "text-gray-500 group-hover:text-gray-400"
                                }`}
                              />
                            </Link>
                          </motion.div>
                        );
                      })}
                    </nav>

                    {/* Enhanced Mobile CTA */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.3 }}
                      className="mt-6 px-6 pt-4 border-t border-white/10"
                    >
                      <Link
                        href="/contact"
                        className="w-full flex items-center justify-center gap-3 px-6 py-4 btn-primary hover-lift focus-professional"
                        onClick={() => setIsOpen(false)}
                      >
                        <FaEnvelope className="text-lg" />
                        <span className="font-semibold">Get In Touch</span>
                      </Link>
                    </motion.div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
