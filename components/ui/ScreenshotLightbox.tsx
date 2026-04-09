"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "@/components/ui/motion";
import { FaTimes } from "react-icons/fa";

type ScreenshotLightboxProps = {
  images: string[];
  title: string;
  altPrefix: string;
  /** Optional descriptive labels for each screenshot. Falls back to "Screenshot N" if not provided. */
  labels?: string[];
};

export default function ScreenshotLightbox({ images, title, altPrefix, labels }: ScreenshotLightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
    };
    if (selectedIndex !== null) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <>
      <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8 text-center">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            role="button"
            tabIndex={0}
            onClick={() => setSelectedIndex(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedIndex(index);
              }
            }}
            className="group relative overflow-hidden rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--primary)]/30 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-page)]"
            aria-label={`View ${altPrefix} screenshot ${index + 1} full size`}
          >
            <div className="aspect-[9/16] relative bg-[var(--bg-elevated)] rounded-lg overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt={labels?.[index] ? `${altPrefix} ${labels[index]}` : `${altPrefix} Screenshot ${index + 1}`}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
            <div className="px-4 py-3 bg-[var(--bg-elevated)] border-t border-[var(--border)]">
              <span className="text-[var(--text-primary)] font-semibold text-sm">
                {labels?.[index] ?? `Screenshot ${index + 1}`}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedIndex(null)}
            aria-modal="true"
            role="dialog"
            aria-label="Screenshot preview"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="absolute -top-12 right-0 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                aria-label="Close preview"
              >
                <FaTimes className="text-xl" />
              </button>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images[selectedIndex]}
                alt={`${altPrefix} Screenshot ${selectedIndex + 1} full size`}
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                decoding="async"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
