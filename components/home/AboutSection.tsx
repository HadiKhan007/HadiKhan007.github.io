export default function AboutSection() {
  return (
    <section id="about" className="section-shell pt-16 sm:pt-20">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="premium-card p-6 sm:p-8">
          <p className="section-kicker">About</p>
          <h2 className="mt-3 section-title font-semibold">
            React Native specialist with full product ownership mindset.
          </h2>
          <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
            I work across product strategy, frontend architecture, API integration, and release
            quality. My focus is simple: deliver software that users enjoy and businesses can scale.
          </p>
        </div>
        <div className="premium-card p-6 sm:p-8">
          <p className="text-sm text-[var(--text-muted)]">Core Focus</p>
          <ul className="mt-4 space-y-3 text-[var(--text-secondary)]">
            <li>- React Native apps with smooth UX and strong performance.</li>
            <li>- Next.js dashboards and client portals with fast loading.</li>
            <li>- End-to-end delivery with clean communication and ownership.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
