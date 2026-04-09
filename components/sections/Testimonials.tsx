import Container from "../ui/Container";
import Section from "../ui/Section";

const testimonials = [
  {
    quote: "Delivered our mobile app on time with clean code and great communication. Would hire again.",
    name: "Client",
    role: "Founder",
    company: "Startup",
    initials: "CL",
  },
  {
    quote: "Professional full-stack work. React Native app runs smoothly and the backend is well structured.",
    name: "Client",
    role: "Product Lead",
    company: "Product team",
    initials: "PL",
  },
];

export default function Testimonials() {
  return (
    <Section id="testimonials" className="bg-[var(--bg-elevated)]/30">
      <Container>
        <div className="text-center mb-8">
          <p className="text-[var(--primary)] font-medium text-sm tracking-widest uppercase mb-4">Testimonials</p>
          <h2 className="font-heading title-section text-2xl sm:text-3xl md:text-4xl text-[var(--text-primary)]">
            What people say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative rounded-3xl pl-8 pr-6 py-6 sm:pl-10 sm:pr-8 sm:py-7 bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-elevated)]/80 border-l-4 border-l-[var(--primary)] border border-[var(--border-subtle)] shadow-inner"
            >
              <span className="absolute left-6 top-6 text-5xl font-serif text-[var(--primary)]/20 leading-none select-none" aria-hidden>&ldquo;</span>
              <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-7 mb-5 max-w-2xl italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-[var(--primary)]/15 border-2 border-[var(--primary)]/30 text-[var(--text-primary)] font-semibold text-sm shrink-0"
                  aria-hidden
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-[var(--text-primary)]">{t.name}</p>
                  <p className="text-sm text-[var(--text-muted)]">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
