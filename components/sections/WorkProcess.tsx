"use client";

import { FaSearch, FaCode, FaRocket, FaHeadset } from "react-icons/fa";
import Container from "../ui/Container";
import Section from "../ui/Section";

const steps = [
  {
    icon: FaSearch,
    title: "Discovery",
    description: "Understand your goals, users, and constraints. Align on scope and timeline.",
  },
  {
    icon: FaCode,
    title: "Development",
    description: "Build in iterations with clear milestones. You see progress every step.",
  },
  {
    icon: FaRocket,
    title: "Deployment",
    description: "Ship to production with CI/CD. App stores, hosting, and monitoring in place.",
  },
  {
    icon: FaHeadset,
    title: "Post-launch support",
    description: "Bug fixes, small improvements, and handover so your team can own it.",
  },
];

export default function WorkProcess() {
  return (
    <Section id="process">
      <Container>
        <div className="text-center mb-10">
          <p className="text-[var(--primary)] font-medium text-sm tracking-widest uppercase mb-4">
            How I work
          </p>
          <h2 className="font-heading title-section text-2xl sm:text-3xl md:text-4xl text-[var(--text-primary)] max-w-3xl mx-auto">
            From idea to launch and beyond
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.title} className="text-center">
              <div className="inline-flex p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--primary)] mb-4">
                <step.icon className="text-2xl" />
              </div>
              <h3 className="font-heading font-semibold text-[var(--text-primary)] text-lg mb-2">{step.title}</h3>
              <p className="text-[var(--text-secondary)] text-base leading-7 max-w-2xl mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
