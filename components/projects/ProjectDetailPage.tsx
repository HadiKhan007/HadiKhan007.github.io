import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaCheckCircle, FaLightbulb } from "react-icons/fa";

type Props = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  keyHighlights: string[];
  challenges: Array<{
    title: string;
    challenge: string;
    solution: string;
  }>;
  screenshots: string[];
  screenshotLabels: string[];
};

export default function ProjectDetailPage({
  title,
  category,
  description,
  technologies,
  keyHighlights,
  challenges,
  screenshots,
  screenshotLabels,
}: Props) {
  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-14">
      <div className="section-shell">
        <div className="mb-8">
          <Link
            href="/projects/"
            className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
          >
            <FaArrowLeft className="text-sm" />
            Back to Projects
          </Link>
        </div>

        <section className="premium-card hero-glass p-6 sm:p-8 lg:p-10 mb-10">
          <p className="section-kicker mb-4">
            {category}
          </p>
          <h1 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6">
            {title}
          </h1>
          <p className="text-[var(--text-secondary)] leading-relaxed max-w-3xl">{description}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="space-y-6 mb-10">
          <div className="premium-card p-6 sm:p-7">
            <h2 className="section-title text-2xl font-semibold text-[var(--text-primary)] mb-6">
              Key Highlights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {keyHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-[var(--text-secondary)] rounded-2xl border border-[var(--border)] bg-[var(--surface)]/40 px-4 py-3"
                >
                  <FaCheckCircle className="text-[var(--primary)] mt-1 shrink-0" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="premium-card p-6 sm:p-7">
            <h2 className="section-title text-2xl font-semibold text-[var(--text-primary)] mb-6">
              Challenges Solved
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {challenges.map((item) => (
                <div key={item.title} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/40 p-4">
                  <p className="font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                    <FaLightbulb className="text-[var(--primary)]" />
                    {item.title}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] mb-2">{item.challenge}</p>
                  <p className="text-sm text-[var(--primary-light)]">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="section-title text-2xl sm:text-3xl font-semibold text-[var(--text-primary)] mb-6">
            Product Screenshots
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {screenshots.map((src, index) => (
              <div
                key={src}
                className="rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--primary)]/40 transition-colors"
              >
                <div className="relative aspect-[10/16] sm:aspect-[9/16] bg-[#0b0f19]">
                  <Image
                    src={src}
                    alt={`${title} ${screenshotLabels[index] ?? `screenshot ${index + 1}`}`}
                    fill
                    className="object-contain object-center p-2 sm:p-3"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    quality={68}
                  />
                </div>
                <div className="px-4 py-3 border-t border-[var(--border)] bg-[var(--bg-elevated)]/50">
                  <p className="text-sm font-medium text-[var(--text-primary)]">
                    {screenshotLabels[index] ?? `Screenshot ${index + 1}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
