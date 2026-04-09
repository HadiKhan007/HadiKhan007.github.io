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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative rounded-xl border-2 border-dashed border-[var(--border-subtle)] bg-[var(--bg-card)]/50 p-6 text-center transition-all duration-300 hover:border-[var(--primary)]/40 hover:bg-[var(--bg-card)] hover:shadow-lg"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-bold text-white shadow-md">
                {i + 1}
              </div>
              <div className="inline-flex p-4 rounded-xl bg-[var(--surface)] text-[var(--primary)] mt-2 mb-4">
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
