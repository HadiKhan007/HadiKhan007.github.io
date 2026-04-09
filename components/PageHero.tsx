type PageHeroProps = {
  badge: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  /** Apply gradient to the title heading. Default true for all main pages. */
  gradientTitle?: boolean;
};

const sectionPadding = "pt-4 sm:pt-6 lg:pt-8 pb-7 sm:pb-10 lg:pb-12";

/** Centered status pill with cyan dot (About, Contact, Projects heroes) */
export function HeroBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center w-full px-2">
      <div className="hero-badge-ambient rounded-full p-[1px] bg-gradient-to-r from-cyan-400/45 via-violet-500/35 to-cyan-400/45 max-w-[min(100%,42rem)]">
        <div className="flex items-center justify-center gap-2.5 sm:gap-3 rounded-full bg-[var(--bg-card)]/95 backdrop-blur-sm sm:backdrop-blur-md px-4 sm:px-5 py-2 sm:py-2.5 border border-white/[0.07] shadow-inner">
          <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.95)]" />
          </span>
          <span className="text-sm font-medium text-[var(--text-primary)]/95 tracking-tight whitespace-normal text-center leading-snug">
            {children}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function PageHero({ badge, title, subtitle, children, className = "", gradientTitle = true }: PageHeroProps) {
  return (
    <section className={`text-center ${sectionPadding} ${className}`}>
      <div className="mb-4 sm:mb-6">
        <HeroBadge>{badge}</HeroBadge>
      </div>
      <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.18] pb-1 mb-6 sm:mb-7 ${gradientTitle ? "gradient-text" : "text-[var(--text-primary)]"}`}>
        {title}
      </h1>
      {subtitle && (
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center mt-1">
          {typeof subtitle === "string" ? (
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">{subtitle}</p>
          ) : (
            subtitle
          )}
        </div>
      )}
      {children && <div className="mt-6 sm:mt-8">{children}</div>}
    </section>
  );
}
