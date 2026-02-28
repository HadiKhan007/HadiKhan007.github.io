"use client";

import Link from "next/link";
import { FaCalendarCheck } from "react-icons/fa";

/**
 * Mobile-only floating CTA - always visible, fixed at bottom center.
 * Does NOT scroll with content. Desktop CTA remains in navbar.
 */
export default function FloatingCTA() {
  return (
    <div
      className="md:hidden fixed bottom-6 left-4 right-4 z-50 flex justify-center pointer-events-none"
      aria-hidden="true"
    >
      <Link
        href="/#contact"
        className="pointer-events-auto flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[var(--primary)] text-white font-semibold shadow-[0_4px_24px_rgba(99,102,241,0.35)] hover:bg-[var(--primary-light)] active:scale-[0.98] transition-all min-h-[52px]"
      >
        <FaCalendarCheck className="text-lg shrink-0" />
        Book Free 15-Min Call
      </Link>
    </div>
  );
}
