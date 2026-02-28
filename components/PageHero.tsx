type PageHeroProps = {
  badge: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  /** Apply gradient to the title heading. Default true for all main pages. */
  gradientTitle?: boolean;
};

/** Same vertical rhythm and premium title UI on every page – tight spacing */
const sectionPadding = "pt-8 sm:pt-12 lg:pt-14 pb-8 sm:pb-12 lg:pb-14";

export default function PageHero({ badge, title, subtitle, children, className = "", gradientTitle = true }: PageHeroProps) {
  return (
    <section className={`text-center page-hero-section ${sectionPadding} ${className}`}>
      <div className="mb-4 sm:mb-5">
        <h2 className="page-top-badge inline-flex">{badge}</h2>
      </div>
      <h1 className={`font-heading title-hero text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-5 ${gradientTitle ? "gradient-text" : "text-[var(--text-primary)]"}`}>
        {title}
      </h1>
      {subtitle && (
        <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-2xl mx-auto leading-7">
          {subtitle}
        </p>
      )}
      {children && <div className="mt-4 sm:mt-6">{children}</div>}
    </section>
  );
}
