"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";

const navItems = [
  { href: "/", label: "Home", isPage: true },
  { href: "/about/", label: "About", isPage: true },
  { href: "/projects/", label: "Projects", isPage: true },
  { href: "/contact/", label: "Contact", isPage: true },
];

const WHATSAPP_LINK = "https://wa.me/923000065409";

/** WhatsApp brand-style pill: vivid green + crisp black outline (navbar reference) */
const whatsappPillClass =
  "inline-flex items-center justify-center gap-2 rounded-full border-2 border-zinc-950 bg-[#25D366] text-white font-semibold shadow-sm transition hover:brightness-105 active:brightness-95";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    const current = (pathname || "/").replace(/\/$/, "") || "/";
    const target = href.replace(/\/$/, "") || "/";
    return current === target || (target !== "/" && current.startsWith(`${target}/`));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[rgba(6,7,11,0.95)]">
      <div className="section-shell flex h-16 sm:h-[72px] items-center justify-between">
        <Link href="/" className="inline-flex items-center h-9 font-semibold tracking-tight text-lg sm:text-xl">
          <span>Ali</span>
          <span className="mx-1.5 text-[var(--brand)]">Haider</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-[var(--text-secondary)]">
          {navItems.map((item) =>
            item.isPage ? (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex items-center h-9 rounded-md px-2.5 transition ${
                  isActive(item.href)
                    ? "text-[var(--text-primary)] bg-[var(--bg-card)] border border-[var(--border)]"
                    : "hover:text-[var(--text-primary)]"
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <a key={item.href} href={item.href} className="inline-flex items-center h-9 hover:text-[var(--text-primary)]">
                {item.label}
              </a>
            )
          )}
        </nav>
        <div className="flex items-center justify-end gap-2 min-w-0">
          {/* Navbar WhatsApp only from lg+; never rendered in the mobile header row (use menu instead) */}
          <div className="hidden lg:flex items-center shrink-0">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className={`${whatsappPillClass} h-10 w-10 p-0`}
            >
              <FaWhatsapp className="text-xl text-white drop-shadow-[0_1px_0_rgba(0,0,0,0.35)]" aria-hidden />
            </a>
          </div>
          <button
            type="button"
            className="sm:hidden text-sm px-3 py-2 rounded-lg text-white border border-[#8ea2ff]/50 bg-gradient-to-r from-[#5166ff] to-[#8b5cf6] hover:brightness-110 transition"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            Menu
          </button>
        </div>
      </div>
      {open && (
        <div className="sm:hidden border-t border-[var(--border)] bg-[var(--bg-page)]">
          <div className="section-shell py-4 grid grid-cols-2 gap-2">
            {navItems.map((item) =>
              item.isPage ? (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`premium-card p-3 text-sm ${
                    isActive(item.href) ? "text-[var(--text-primary)] border-[var(--border)]" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="premium-card p-3 text-sm">
                  {item.label}
                </a>
              )
            )}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className={`${whatsappPillClass} col-span-2 mt-1 py-3 px-4 text-sm justify-center`}
            >
              <FaWhatsapp className="text-lg shrink-0 text-white drop-shadow-[0_1px_0_rgba(0,0,0,0.35)]" aria-hidden />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
