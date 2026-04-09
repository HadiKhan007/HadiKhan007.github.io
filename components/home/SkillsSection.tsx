const skills = [
  { name: "React Native", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "TypeScript", level: 88 },
  { name: "Node.js", level: 87 },
  { name: "Firebase", level: 86 },
  { name: "REST APIs", level: 90 },
  { name: "Redux Toolkit", level: 84 },
  { name: "Performance Optimization", level: 91 },
  { name: "Mobile UI/UX", level: 92 },
  { name: "App Store Deployment", level: 85 },
  { name: "Play Store Deployment", level: 85 },
  { name: "System Design", level: 82 },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-shell pt-16 sm:pt-20">
      <div className="premium-card p-6 sm:p-8">
        <p className="section-kicker">Skills</p>
        <h2 className="mt-3 section-title font-semibold">Modern stack for fast shipping</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {skills.map((skill) => (
            <div key={skill.name} className="premium-card px-4 py-3 text-sm text-[var(--text-secondary)]">
              <div className="flex items-center justify-between mb-2">
                <span>{skill.name}</span>
                <span className="text-xs text-[var(--text-muted)]">{skill.level}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-[var(--bg-elevated)] overflow-hidden">
                <div
                  className="h-full rounded-full skill-progress-fill"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
