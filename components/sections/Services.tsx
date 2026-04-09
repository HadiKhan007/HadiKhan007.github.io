import { FaMobile, FaServer, FaRocket, FaCheckCircle } from "react-icons/fa";
import Container from "../ui/Container";
import Section from "../ui/Section";

const services = [
  {
    icon: FaMobile,
    title: "Mobile & Web Development",
    description: "Apps that feel native and load fast. Your users get a smooth experience on iOS, Android, and web without maintaining three codebases.",
    features: ["One codebase for mobile and web", "Fast, responsive interfaces", "App Store and Play Store ready"],
  },
  {
    icon: FaServer,
    title: "Backend & APIs",
    description: "APIs that scale with your traffic. Auth, data, and real-time features so your product works reliably as you grow.",
    features: ["Secure auth and data handling", "REST and GraphQL APIs", "Real-time and serverless options"],
  },
  {
    icon: FaRocket,
    title: "Full Stack Product Development",
    description: "From idea to live product. I own the full stack so you get a shipped product, not just code that needs assembly.",
    features: ["MVP to production", "CI/CD and monitoring", "Handover and documentation"],
  },
];

export default function Services() {
  return (
    <Section id="services">
      <Container>
        <div className="text-center mb-10">
          <p className="text-[var(--primary)] font-medium text-sm tracking-widest uppercase mb-4">Services</p>
          <h2 className="font-heading title-section text-2xl sm:text-3xl md:text-4xl text-[var(--text-primary)] max-w-3xl mx-auto">
            What you get when we work together
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-subtle)] transition-all duration-300 hover:border-[var(--primary)]/25 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)]" aria-hidden />
              <div className="p-6 sm:p-7">
                <div className="inline-flex p-3.5 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] mb-5 group-hover:scale-105 transition-transform">
                  <item.icon className="text-2xl" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[var(--text-primary)] mb-3">{item.title}</h3>
                <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-7 mb-6 max-w-2xl">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[var(--text-muted)] leading-7">
                      <FaCheckCircle className="text-[var(--primary)] shrink-0 text-xs" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
