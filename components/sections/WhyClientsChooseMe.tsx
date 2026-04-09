import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import Container from "../ui/Container";
import Section from "../ui/Section";

const points = [
  {
    title: "Clear communication",
    description: "Regular updates and no jargon. You stay in the loop from kickoff to launch.",
  },
  {
    title: "On-time delivery",
    description: "I set realistic deadlines and meet them. Your roadmap stays on track.",
  },
  {
    title: "Scalable architecture",
    description: "Code that grows with your product. No costly rewrites when you scale.",
  },
  {
    title: "Problem-solving mindset",
    description: "I focus on outcomes, not just tasks. We solve the right problems first.",
  },
  {
    title: "International client experience",
    description: "Worked with teams across time zones. Async-friendly and responsive.",
  },
  {
    title: "Quality-first approach",
    description: "Clean code, tests where it matters, and documentation you can rely on.",
  },
];

export default function WhyClientsChooseMe() {
  return (
    <Section id="why-clients" className="bg-[var(--bg-elevated)]/20">
      <Container>
        <div className="text-center mb-10">
          <p className="text-[var(--primary)] font-medium text-sm tracking-widest uppercase mb-4">
            Why clients choose me
          </p>
          <h2 className="font-heading title-section text-2xl sm:text-3xl md:text-4xl text-[var(--text-primary)] max-w-3xl mx-auto">
            Reliability and results, not just code
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 mb-8">
          {points.map((item) => (
            <div
              key={item.title}
              className="group/card relative flex gap-4 p-6 sm:p-7 rounded-3xl bg-[var(--bg-elevated)]/60 border border-[var(--border-subtle)] border-l-4 border-l-[var(--primary)] transition-all duration-300 min-h-[160px] flex flex-col justify-center hover:border-l-[var(--primary-light)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/15 text-[var(--primary)] group-hover/card:bg-[var(--primary)]/25 transition-colors">
                <FaCheckCircle className="text-xl" />
              </div>
              <div className="min-w-0">
                <h3 className="font-heading font-semibold text-lg text-[var(--text-primary)] mb-2 tracking-tight">{item.title}</h3>
                <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--primary)] text-white font-semibold hover:bg-[var(--primary-light)] transition-colors"
          >
            Start a conversation
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
