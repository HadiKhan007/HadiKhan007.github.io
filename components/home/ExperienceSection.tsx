const timeline = [
  {
    period: "Dec 2023 - Present",
    role: "Senior React Native Developer",
    company: "BinaryBrix",
    summary: "Lead app architecture, performance tuning, and production rollout for cross-platform products.",
  },
  {
    period: "May 2023 - Dec 2023",
    role: "React Native Developer",
    company: "66 Loop",
    summary: "Built feature modules and improved quality through stronger developer workflows.",
  },
  {
    period: "Dec 2021 - May 2023",
    role: "React Native Developer",
    company: "Viral Square",
    summary: "Shipped customer-facing mobile experiences and optimized usability for higher retention.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-shell pt-16 sm:pt-20">
      <div className="premium-card p-6 sm:p-8">
        <p className="section-kicker">Experience</p>
        <h2 className="mt-3 section-title font-semibold">Execution across product stages</h2>
        <div className="mt-8 space-y-4">
          {timeline.map((item) => (
            <article key={item.period} className="premium-card p-4 sm:p-5">
              <p className="text-xs text-[var(--text-muted)]">{item.period}</p>
              <h3 className="mt-1 text-lg font-semibold">{item.role}</h3>
              <p className="text-sm text-[var(--text-secondary)]">{item.company}</p>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
