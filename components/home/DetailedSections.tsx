const whyClients = [
  "Clear communication with regular updates and no confusion.",
  "On-time delivery with realistic milestone planning.",
  "Scalable architecture that avoids expensive rewrites.",
  "Outcome-focused execution instead of task-only delivery.",
  "International remote-team collaboration experience.",
  "Quality-first development with maintainable code.",
];

const services = [
  {
    title: "Mobile & Web Development",
    description:
      "Apps that feel native and load fast across iOS, Android, and web from a unified engineering flow.",
  },
  {
    title: "Backend & APIs",
    description:
      "Secure, scalable APIs with solid auth, clean data flow, and reliable integrations for growth.",
  },
  {
    title: "Full Stack Product Development",
    description:
      "From concept to production with architecture, implementation, testing, deployment, and handover.",
  },
];

const process = ["Discovery", "Development", "Deployment", "Post-launch support"];

const techGroups = {
  Frontend: ["React", "Next.js", "JavaScript", "TypeScript"],
  Mobile: ["React Native", "Flutter", "Dart"],
  Backend: ["Node.js", "Express", "Redux Toolkit", "REST APIs"],
  Database: ["Firebase", "MongoDB", "Supabase", "PostgreSQL"],
  Tools: ["Git", "GitHub Actions", "CI/CD", "Documentation"],
};

const testimonials = [
  "Delivered our mobile app on time with clean code and excellent communication.",
  "Professional full-stack execution. The React Native app runs smoothly and backend is structured.",
];

const whyHire = [
  "I care about shipping outcomes, not only writing code.",
  "15+ production apps delivered across different domains.",
  "Architecture built for scale and lower technical debt.",
  "Clear ownership and transparent communication.",
  "Strong async collaboration with global teams.",
];

export default function DetailedSections() {
  return (
    <>
      <section id="why-clients" className="section-shell pt-16 sm:pt-20">
        <div className="premium-card p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">Why Clients Choose Me</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold">Reliability and results, not just code</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {whyClients.map((point) => (
              <div key={point} className="premium-card p-4 text-sm text-[var(--text-secondary)]">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section-shell pt-16 sm:pt-20">
        <div className="premium-card p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">Services</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold">What you get when we work together</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {services.map((service) => (
              <div key={service.title} className="premium-card p-5">
                <h3 className="font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section-shell pt-16 sm:pt-20">
        <div className="premium-card p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">How I Work</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold">From idea to launch and beyond</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {process.map((step, index) => (
              <div key={step} className="premium-card p-4">
                <p className="text-xs text-[var(--text-muted)]">Step {index + 1}</p>
                <p className="mt-1 font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tech" className="section-shell pt-16 sm:pt-20">
        <div className="premium-card p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">Tech Stack</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold">Built with modern tools</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {Object.entries(techGroups).map(([group, items]) => (
              <div key={group} className="premium-card p-4">
                <p className="font-medium text-sm">{group}</p>
                <ul className="mt-2 space-y-1">
                  {items.map((item) => (
                    <li key={item} className="text-sm text-[var(--text-secondary)]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="section-shell pt-16 sm:pt-20">
        <div className="premium-card p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">Testimonials</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold">What people say</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {testimonials.map((quote) => (
            <blockquote key={quote} className="premium-card p-5 text-[var(--text-secondary)]">
                &ldquo;{quote}&rdquo;
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="why-hire" className="section-shell pt-16 sm:pt-20">
        <div className="premium-card p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">Why Hire Me</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold">I write code that scales</h2>
          <ul className="mt-5 grid sm:grid-cols-2 gap-3">
            {whyHire.map((value) => (
              <li key={value} className="premium-card p-4 text-sm text-[var(--text-secondary)]">
                {value}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
