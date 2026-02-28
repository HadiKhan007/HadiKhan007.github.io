"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPaperPlane, FaCheckCircle, FaExclamationTriangle, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Container from "../ui/Container";
import Section from "../ui/Section";
import GradientBorder from "../ui/GradientBorder";

const LINKEDIN_URL = "https://www.linkedin.com/in/alihaider17/";
const WHATSAPP_URL = "https://wa.me/923000065409";

type FormData = { name: string; email: string; message: string };

const EMAILJS = {
  initKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "5m45IzjeBEvmngDG9",
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_g2fyp4k",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_7ljzhyf",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "5m45IzjeBEvmngDG9",
};

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });
    try {
      const emailjs = (await import("@emailjs/browser")).default;
      emailjs.init(EMAILJS.initKey);
      const time = new Date().toLocaleString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" });
      await emailjs.send(EMAILJS.serviceId, EMAILJS.templateId, {
        name: data.name,
        email: data.email,
        message: data.message,
        time,
        year: new Date().getFullYear().toString(),
        reply_to: data.email,
        from_name: data.name,
        from_email: data.email,
        to_name: "Ali Haider",
      }, EMAILJS.publicKey);
      setStatus({ type: "success", message: "Got it. I'll reply soon." });
      reset();
    } catch (err: unknown) {
      let msg = "Something went wrong. Try alihaidercs17@gmail.com if it keeps failing.";
      if (err && typeof err === "object" && "text" in err && typeof (err as { text: string }).text === "string") msg = (err as { text: string }).text;
      setStatus({ type: "error", message: msg });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact">
      <Container>
        <div className="text-center mb-8">
          <p className="text-[var(--primary)] font-medium text-sm tracking-widest uppercase mb-4">Contact</p>
          <h2 className="font-heading title-section text-2xl sm:text-3xl md:text-4xl text-[var(--text-primary)]">
            Let&apos;s talk
          </h2>
          <p className="text-[var(--text-secondary)] text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-7">
            Got a product idea or a technical problem? I typically reply within a few hours. NDA ok. No pressure for the first chat.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--surface)] hover:border-[var(--primary)]/30 transition-all"
            >
              <FaLinkedin className="text-lg text-[var(--primary)]" />
              LinkedIn
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--surface)] hover:border-[var(--primary)]/30 transition-all"
            >
              <FaWhatsapp className="text-lg text-[var(--primary)]" />
              WhatsApp
            </a>
          </div>
        </div>

        <div>
          <GradientBorder>
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 sm:p-7 lg:p-8">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Name</label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    id="contact-name"
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                  />
                  {errors.name && <p className="text-[var(--error)] text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Email</label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email" },
                    })}
                    id="contact-email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                  />
                  {errors.email && <p className="text-[var(--error)] text-sm mt-1">{errors.email.message}</p>}
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="contact-message" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Message</label>
                <textarea
                  {...register("message", { required: "Message is required", minLength: { value: 10, message: "At least 10 characters" } })}
                  id="contact-message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all resize-none"
                />
                {errors.message && <p className="text-[var(--error)] text-sm mt-1">{errors.message.message}</p>}
              </div>
              {status.message && (
                <div
                  className={`flex items-center gap-2 mb-4 p-4 rounded-xl ${status.type === "success" ? "bg-[var(--success)]/10 text-[var(--success)]" : "bg-[var(--error)]/10 text-[var(--error)]"}`}
                >
                  {status.type === "success" ? <FaCheckCircle className="shrink-0" /> : <FaExclamationTriangle className="shrink-0" />}
                  <span className="text-sm font-medium">{status.message}</span>
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto min-w-[200px] px-8 py-4 rounded-xl bg-[var(--primary)] text-white font-semibold hover:bg-[var(--primary-light)] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send message
                  </>
                )}
              </button>
            </form>
          </GradientBorder>
        </div>
      </Container>
    </Section>
  );
}
