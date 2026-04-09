const highlights = [
  {
    title: "Product-Led Architecture",
    copy: "Every feature starts with business outcome and maps to measurable user behavior.",
  },
  {
    title: "Performance by Default",
    copy: "Lean bundles, optimized media, and responsive layouts keep apps smooth under load.",
  },
  {
    title: "Founder-Friendly Delivery",
    copy: "Clear updates, realistic milestones, and decision support from idea to launch.",
  },
];

export default function HighlightsSection() {
  return (
    <section className="section-shell pt-16 sm:pt-20">
      <div className="mb-6">
        <p className="section-kicker">Highlights</p>
        <h2 className="mt-3 section-title font-semibold">Why teams hire me repeatedly</h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-4">
        {highlights.map((item) => (
          <div key={item.title} className="premium-card p-6">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">{item.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
