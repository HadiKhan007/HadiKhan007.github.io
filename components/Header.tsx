"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    handleRouteChange();
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isOpen]);

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
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled
              ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/[0.05]"
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
                  prefetch
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "linear-gradient(135deg,#6366f1,#ec4899)" }}
                  >
                    <span className="text-white font-bold text-lg">AH</span>
                  </div>
                  <span
                    className="font-bold tracking-tight"
                    style={{
                      background: "linear-gradient(135deg,#6366f1,#ec4899)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
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
                      className={`relative px-5 py-3 text-[#94a3b8] hover:text-[#f8fafc] transition-colors rounded-xl group font-medium ${
                        isActive ? "text-white bg-white/10" : "hover:bg-white/5"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <motion.div
                          className={`p-1.5 rounded-lg transition-colors ${
                            isActive
                              ? "bg-[#6366f1]/30"
                              : "bg-white/5 group-hover:bg-white/10"
                          }`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <item.icon
                            className={`text-sm transition-colors ${
                              isActive
                                ? "text-[#818cf8]"
                                : "text-[#94a3b8] group-hover:text-[#818cf8]"
                            }`}
                          />
                        </motion.div>
                        {item.label}
                      </span>
                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-[#6366f1] rounded-full"
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                      )}
                      {/* Hover indicator */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#6366f1] group-hover:w-8 rounded-full transition-all duration-300"></div>
                    </Link>
                  );
                })}
              </nav>

              {/* Enhanced Mobile menu button - Android optimized */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu}
                className="md:hidden relative p-4 text-white hover:text-[#818cf8] transition-colors rounded-xl hover:bg-white/10 focus-professional min-w-[48px] min-h-[48px] flex items-center justify-center"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                style={{ WebkitTapHighlightColor: "transparent" }}
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

            {/* Enhanced Mobile Navigation - Android optimized */}
            <AnimatePresence>
              {isOpen && (
                <>
                  {/* Backdrop - Android optimized */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 bg-black/80 backdrop-blur-lg z-[100] md:hidden mobile-menu-backdrop"
                    onClick={() => setIsOpen(false)}
                    style={{
                      WebkitBackdropFilter: "blur(12px)",
                      backdropFilter: "blur(12px)",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      width: "100vw",
                      height: "100vh",
                    }}
                  />

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="md:hidden fixed top-20 left-4 right-4 rounded-2xl py-6 z-[110] mobile-menu overflow-y-auto bg-[#13131f] border border-white/[0.08] shadow-2xl"
                    style={{
                      WebkitOverflowScrolling: "touch",
                      maxHeight: "calc(100vh - 6rem)",
                    }}
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
                              prefetch
                              className={`flex items-center gap-4 px-4 py-4 rounded-xl group min-h-[52px] transition-colors ${
                                isActive
                                  ? "text-[#f8fafc] bg-white/10 border-l-4 border-[#6366f1]"
                                  : "text-[#94a3b8] hover:text-[#f8fafc] hover:bg-white/5"
                              }`}
                              onClick={() => setIsOpen(false)}
                              style={{ WebkitTapHighlightColor: "transparent" }}
                            >
                              <item.icon className="text-lg shrink-0" />
                              <span className="font-medium">{item.label}</span>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </nav>

                    {/* Enhanced Mobile CTA - Android optimized */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.3 }}
                      className="mt-6 px-6 pt-4 border-t border-white/10"
                    >
                      <Link
                        href="/contact"
                        className="w-full flex items-center justify-center gap-3 px-6 py-5 btn-primary hover-lift focus-professional min-h-[56px] rounded-xl"
                        onClick={() => setIsOpen(false)}
                        style={{ WebkitTapHighlightColor: "transparent" }}
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
