"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaCalendarCheck } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) document.body.classList.add("menu-open");
    else document.body.classList.remove("menu-open");
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  const navItems = [
    { href: "/", label: "Home", icon: FaHome },
    { href: "/about/", label: "About", icon: FaUser },
    { href: "/projects/", label: "Projects", icon: FaBriefcase },
    { href: "/contact/", label: "Contact", icon: FaEnvelope },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" || pathname === "";
    const base = href.replace(/\/$/, "");
    return pathname === base || pathname.startsWith(base + "/");
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 safe-area-header bg-[var(--bg-page)]/90 backdrop-blur-xl border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center py-4">
          <Link
            href="/"
            className="font-heading text-xl sm:text-2xl font-bold flex items-center gap-3 group focus-professional transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
            aria-label="Home"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
              style={{ background: "var(--gradient-1)" }}
            >
              <span className="text-white font-bold text-lg">AH</span>
            </div>
            <span
              className="font-bold tracking-tight"
              style={{
                background: "var(--gradient-1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Ali Haider
            </span>
          </Link>

          <nav
            className="hidden md:flex items-center gap-1"
            role="navigation"
          >
            {navItems.map((item) => {
              const active = isActive(item.href);
              const cn = `relative px-5 py-3 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-200 rounded-xl group font-medium focus-professional hover:scale-[1.02] active:scale-[0.98] ${
                active ? "text-[var(--primary-dark)] bg-[var(--surface)] shadow-[var(--shadow-glow)]" : "hover:bg-[var(--surface)]"
              }`;
              return (
                <a key={item.href} href={item.href} className={cn}>
                  <span className="flex items-center gap-3">
                    <span className={`p-1.5 rounded-lg transition-colors duration-150 ${active ? "bg-[var(--surface)]" : "bg-[var(--surface)]/50 group-hover:bg-[var(--surface)]"}`}>
                      <item.icon className={`text-sm ${active ? "text-[var(--primary)]" : "text-[var(--text-muted)] group-hover:text-[var(--primary)]"}`} />
                    </span>
                    {item.label}
                  </span>
                  {active && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-gradient-to-r from-[#6366f1] to-[#ec4899] rounded-full shadow-[0_0_12px_rgba(99,102,241,0.6)]" />}
                </a>
              );
            })}
            <a
              href="/#contact"
              className="hidden md:inline-flex ml-2 px-5 py-3 rounded-xl bg-[var(--primary)] text-white font-semibold hover:bg-[var(--primary-light)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-professional"
            >
              Book Free 15-Min Call
            </a>
          </nav>

          <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="md:hidden relative p-4 text-[var(--text-primary)] hover:text-[var(--primary)] active:scale-95 transition-all duration-200 rounded-xl hover:bg-[var(--surface)] focus-professional min-w-[48px] min-h-[48px] flex items-center justify-center"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                <div
                  className={`relative w-6 h-6 transition-transform duration-200 ${
                    isOpen ? "rotate-90" : ""
                  }`}
                >
                  <span
                    className={`absolute top-1 left-0 w-6 h-0.5 bg-current block origin-center transition-all duration-200 ${
                      isOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  />
                  <span
                    className={`absolute top-3 left-0 w-6 h-0.5 bg-current block origin-center transition-all duration-200 ${
                      isOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`absolute top-5 left-0 w-6 h-0.5 bg-current block origin-center transition-all duration-200 ${
                      isOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  />
                </div>
              </button>
        </div>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-lg z-[100] md:hidden"
              style={{ top: 0, left: 0, right: 0, bottom: 0 }}
              onClick={() => setIsOpen(false)}
              aria-hidden
            />
            <div
              className="md:hidden fixed left-4 right-4 rounded-2xl py-6 z-[110] overflow-y-auto bg-[var(--bg-card)] backdrop-blur-xl border border-[var(--border)] shadow-2xl mobile-menu-dropdown"
            >
              <nav className="flex flex-col space-y-2 px-6" role="navigation">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  const mobileCn = `flex items-center gap-4 px-4 py-4 rounded-xl min-h-[52px] transition-colors ${
                    active ? "text-[var(--text-primary)] bg-[var(--surface)] border-l-4 border-[var(--primary)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface)]"
                  }`;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={mobileCn}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="text-lg shrink-0" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
              <div className="mt-6 px-6 pt-4 border-t border-[var(--border-subtle)]">
                <Link
                  href="/#contact"
                  className="w-full flex items-center justify-center gap-3 px-6 py-5 rounded-xl bg-[var(--primary)] text-white font-semibold min-h-[56px] hover:bg-[var(--primary-light)] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <FaCalendarCheck className="text-lg" />
                  Book Free 15-Min Call
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
