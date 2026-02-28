"use client";

import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import Container from "../ui/Container";
import Section from "../ui/Section";

const values = [
  "I care about shipping, not just code.",
  "15+ apps out in the wild. Billion Pound, Tijarat, SpotSwap, WinRate, and others.",
  "I build so it scales. Less refactoring later.",
  "Clear updates. I own the result.",
  "Comfortable with remote teams and async work.",
];

export default function WhyHireMe() {
  return (
    <Section id="why">
      <Container>
        <div className="rounded-3xl p-6 sm:p-8 lg:p-10 bg-[var(--bg-card)] border border-[var(--border-subtle)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" aria-hidden />
          <div className="relative">
            <p className="text-[var(--primary)] font-medium text-sm tracking-widest uppercase mb-4">
              Why hire me
            </p>
            <h2
              className="font-heading title-section text-2xl sm:text-3xl md:text-4xl text-[var(--text-primary)] mb-6 max-w-3xl"
            >
              I write code that scales. Clean systems, less technical debt.
            </h2>
            <ul className="space-y-3 mb-8">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <FaCheckCircle className="text-[var(--primary)] mt-0.5 shrink-0" />
                  <span className="text-[var(--text-secondary)] text-base sm:text-lg leading-7">{v}</span>
                </li>
              ))}
            </ul>
            <div>
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--primary)] text-white font-semibold hover:bg-[var(--primary-light)] transition-colors"
              >
                Let&apos;s work together
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
