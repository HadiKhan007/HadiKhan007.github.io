"use client";

import Link from "next/link";
import {
  FaArrowRight,
  FaDownload,
  FaMobile,
  FaServer,
  FaRocket,
  FaAward,
  FaCheckCircle,
  FaLightbulb,
  FaHandPaper,
} from "react-icons/fa";
import Container from "../ui/Container";

const stats = [
  { value: "15+", label: "Projects Delivered", Icon: FaRocket },
  { value: "12+", label: "Happy Clients", Icon: FaCheckCircle },
  { value: "4.5+", label: "Years Experience", Icon: FaAward },
  { value: "100%", label: "Dedication", Icon: FaLightbulb },
];

const floatingCards = [
  {
    icon: FaMobile,
    title: "Mobile Apps",
    subtitle: "iOS & Android",
    color: "text-[#6366f1]",
    delay: 0,
  },
  {
    icon: FaServer,
    title: "Web & Backend",
    subtitle: "Scalable APIs",
    color: "text-[#8b5cf6]",
    delay: 0.4,
  },
  {
    icon: FaRocket,
    title: "Full Stack",
    subtitle: "Idea to Launch",
    color: "text-[#10b981]",
    delay: 0.8,
  },
];

export default function Hero() {
  const Card0Icon = floatingCards[0].icon;
  const Card1Icon = floatingCards[1].icon;
  const Card2Icon = floatingCards[2].icon;
  return (
    <>
      <section className="relative min-h-[min(100dvh,900px)] flex flex-col items-center justify-center py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Background */}
      <div
        className="absolute inset-0 bg-hero-glow"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
        <div className="absolute inset-0 bg-[linear-gradient(to_b,transparent_0%,var(--bg-page)_70%)]" aria-hidden />

        <Container className="relative z-10 w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left: Copy + CTAs */}
            <div className="text-center lg:text-left order-2 lg:order-1">
          <h1 className="font-heading title-hero text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-3 max-w-4xl mx-auto lg:mx-0">
                <span className="gradient-text">Hi, I&apos;m Ali Haider</span>
          </h1>

          <p className="text-[var(--text-secondary)] text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 mb-5 leading-relaxed px-4 sm:px-0 text-center lg:text-left">
                Full-stack React Native developer with 4.5+ years of experience. I build web and mobile apps from idea to launch: clean UIs, scalable backends (Node.js, Firebase, PostgreSQL), and on-time delivery. One codebase for iOS and Android when it fits; custom APIs and real-time features when you need them.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-8">
            <Link
                  href="/projects/"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--primary)] text-white font-semibold hover:bg-[var(--primary-light)] transition-colors duration-200 min-h-[48px]"
                >
                  View My Work
                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/AliHaider.pdf"
                  download="Ali-Haider-CV.pdf"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[var(--border-subtle)] text-[var(--text-primary)] font-medium hover:bg-[var(--surface)] transition-all duration-200 min-h-[48px]"
                >
                  Download CV
                  <FaDownload className="text-sm" />
            </Link>
            <Link
                  href="/#contact"
                  className="group relative inline-flex items-center justify-center gap-2 px-[2px] py-[2px] rounded-xl min-h-[48px] font-medium transition-all duration-200 bg-gradient-to-r from-[#ec4899] to-[#06b6d4] hover:from-[#f472b6] hover:to-[#22d3ee]"
                >
                  <span className="flex items-center gap-2 px-5 py-3 rounded-[10px] bg-[var(--bg-page)] text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
                    Get In Touch
                    <FaHandPaper className="text-sm" />
                  </span>
            </Link>
          </div>
            </div>

            {/* Right: Code panel + floating cards (desktop only, hidden on mobile) */}
            <div className="relative order-1 lg:order-2 min-h-0 sm:min-h-[380px] w-full hidden lg:flex flex-col items-center justify-center gap-0 sm:gap-0">
              {/* Code snippet panel */}
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-card)]/90 backdrop-blur-sm shadow-xl">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border-subtle)] bg-[var(--bg-elevated)]/80">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#eab308]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
                  <span className="ml-2 text-xs font-medium text-[var(--text-muted)]">alihaider.js</span>
                </div>
                <div className="p-4 sm:p-5 font-mono text-sm sm:text-[13px] leading-relaxed">
                  <p>
                    <span className="text-[#c084fc]">const</span>{" "}
                    <span className="text-[var(--text-primary)]">solution</span>{" "}
                    <span className="text-[#c084fc]">=</span>{" "}
                    <span className="text-[#22d3ee]">await</span>{" "}
                    <span className="text-[#fbbf24]">buildApp</span>
                    <span className="text-[var(--text-secondary)]">(</span>
                    <span className="text-[var(--text-primary)]">&#123;</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-[var(--text-muted)]">quality:</span>{" "}
                    <span className="text-[#86efac]">&quot;production&quot;</span>
                    <span className="text-[var(--text-secondary)]">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-[var(--text-muted)]">stack:</span>{" "}
                    <span className="text-[#86efac]">&quot;React Native, Node&quot;</span>
                    <span className="text-[var(--text-secondary)]">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-[var(--text-muted)]">delivery:</span>{" "}
                    <span className="text-[#fbbf24]">true</span>
                  </p>
                  <p>
                    <span className="text-[var(--text-primary)]">&#125;</span>
                    <span className="text-[var(--text-secondary)]">);</span>
                  </p>
                  <p className="text-[var(--text-muted)] mt-2">
                    <span className="text-[#64748b]">{/* Result: Your product, shipped. */}</span>
                  </p>
                </div>
              </div>

              {/* Floating feature cards - desktop: absolute around code */}
              <div className="absolute -top-2 left-0 right-auto rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]/95 backdrop-blur-sm px-4 py-3 shadow-lg flex items-center gap-3 max-w-[180px] hidden sm:flex">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--surface)] ${floatingCards[0].color}`}>
                  <Card0Icon className="text-lg" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-[var(--text-primary)] text-sm">{floatingCards[0].title}</p>
                  <p className="text-xs text-[var(--text-muted)]">{floatingCards[0].subtitle}</p>
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-0 lg:-right-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]/95 backdrop-blur-sm px-4 py-3 shadow-lg flex items-center gap-3 max-w-[180px] hidden sm:flex">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--surface)] ${floatingCards[1].color}`}>
                  <Card1Icon className="text-lg" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-[var(--text-primary)] text-sm">{floatingCards[1].title}</p>
                  <p className="text-xs text-[var(--text-muted)]">{floatingCards[1].subtitle}</p>
                </div>
              </div>
              <div className="absolute -bottom-2 left-0 right-auto rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]/95 backdrop-blur-sm px-4 py-3 shadow-lg flex items-center gap-3 max-w-[180px] hidden sm:flex">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--surface)] ${floatingCards[2].color}`}>
                  <Card2Icon className="text-lg" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-[var(--text-primary)] text-sm">{floatingCards[2].title}</p>
                  <p className="text-xs text-[var(--text-muted)]">{floatingCards[2].subtitle}</p>
                </div>
              </div>

              {/* Mobile: cards stacked below code, full labels visible, same float animation */}
              <div className="flex flex-col sm:hidden gap-3 mt-4 w-full max-w-md">
                {[0, 1, 2].map((i) => {
                  const CardIcon = floatingCards[i].icon;
                  return (
                    <div
                      key={floatingCards[i].title}
                      className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]/95 backdrop-blur-sm px-4 py-3 shadow-lg flex items-center gap-3 w-full"
                    >
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--surface)] ${floatingCards[i].color}`}>
                        <CardIcon className="text-lg" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-[var(--text-primary)] text-sm">{floatingCards[i].title}</p>
                        <p className="text-xs text-[var(--text-muted)]">{floatingCards[i].subtitle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Stats row - BinaryBrix style */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10 lg:mt-14">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl p-5 sm:p-6 bg-[var(--bg-card)] border border-[var(--border-subtle)] text-center transition-all duration-300 hover:border-[var(--border)] hover:shadow-lg"
              >
                <stat.Icon className="text-xl sm:text-2xl mb-2 mx-auto text-[var(--primary)]" aria-hidden />
                <div className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">{stat.value}</div>
                <div className="text-xs sm:text-sm font-medium text-[var(--text-muted)] mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
    </section>
    </>
  );
}
