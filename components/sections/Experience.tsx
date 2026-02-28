"use client";

import Container from "../ui/Container";
import Section from "../ui/Section";

const timeline = [
  {
    year: "Dec 2023 – Present",
    company: "BinaryBrix",
    role: "Senior React Native Developer",
    location: "Lahore",
    desc: "API & library integration, cross-platform iOS/Android apps, performance optimization. OCR integration and AI-driven voice analysis for intelligent audio features.",
  },
  {
    year: "May 2023 – Dec 2023",
    company: "66 Loop",
    role: "React Native Developer",
    location: "Lahore",
    desc: "Documentation, setup guides, and troubleshooting. Team collaboration, knowledge sharing, and continuous learning through webinars and workshops.",
  },
  {
    year: "Dec 2021 – May 2023",
    company: "Viral Square",
    role: "React Native Developer",
    location: "Lahore",
    desc: "Usability improvements, redesigned layouts for better UX and accessibility. Custom tools, automation scripts, and creative software design from concept to delivery.",
  },
  {
    year: "Aug 2021 – Dec 2021",
    company: "BlueEast, Orient",
    role: "Frontend Developer",
    location: "Lahore",
    desc: "User-friendly documentation, FAQs, and guides. Webinars and workshops to stay current with emerging tech; collaborative, growth-oriented team environment.",
  },
];

const education = [
  { year: "2017 – 2021", degree: "Computer Science", school: "University of Engineering and Technology, Lahore", location: "Lahore" },
  { year: "2015 – 2017", degree: "F.SC", school: "Muhammad Ali Jinnah College", location: "Faisalabad" },
];

export default function Experience() {
  return (
    <Section id="experience">
      <Container>
        <div className="text-center mb-16">
          <p className="text-[var(--primary)] font-medium text-sm tracking-widest uppercase mb-4">Experience</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)]">
            Journey so far
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto pl-6 sm:pl-8 border-l-2 border-[var(--border)]">
          {timeline.map((item) => (
            <div key={`${item.company}-${item.year}`} className="relative mb-12 last:mb-0 -ml-6 sm:-ml-8">
              <div className="absolute left-0 top-6 w-3 h-3 rounded-full bg-[var(--primary)] ring-4 ring-[var(--bg-page)] -translate-x-[7px]" />
              <div className="rounded-2xl p-6 ml-4 bg-[var(--bg-card)] border border-[var(--border)]">
                <p className="text-[var(--primary)] text-sm font-semibold mb-1">{item.year}</p>
                <h3 className="text-lg font-bold text-[var(--text-primary)]">{item.role}</h3>
                <p className="text-[var(--text-muted)] text-sm mb-2">{item.company} · {item.location}</p>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-[var(--primary)] font-medium text-sm tracking-widest uppercase mb-8">Education</p>
          <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
            {education.map((e) => (
              <div key={e.school} className="rounded-2xl p-6 bg-[var(--bg-card)] border border-[var(--border)] text-left min-w-[240px]">
                <p className="text-[var(--primary)] text-xs font-semibold mb-1">{e.year}</p>
                <h4 className="font-bold text-[var(--text-primary)]">{e.degree}</h4>
                <p className="text-[var(--text-secondary)] text-sm">{e.school}</p>
                <p className="text-[var(--text-muted)] text-xs mt-1">{e.location}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
