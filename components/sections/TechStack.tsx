"use client";

import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiSupabase,
  SiRedux,
  SiDart,
  SiFlutter,
  SiGit,
  SiGithubactions,
  SiPostgresql,
} from "react-icons/si";
import { FaCode, FaDatabase, FaBook, FaBolt } from "react-icons/fa";
import type { IconType } from "react-icons";
import Container from "../ui/Container";
import Section from "../ui/Section";

const groups = [
  {
    label: "Frontend",
    items: [
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "TypeScript", Icon: SiTypescript },
    ],
  },
  {
    label: "Mobile",
    items: [
      { name: "React Native", Icon: SiReact },
      { name: "Dart", Icon: SiDart },
      { name: "Flutter", Icon: SiFlutter },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express", Icon: SiExpress },
      { name: "Redux", Icon: SiRedux },
      { name: "RTK", Icon: SiRedux },
      { name: "REST APIs", Icon: FaCode },
    ],
  },
  {
    label: "Database & Auth",
    items: [
      { name: "Firebase", Icon: SiFirebase },
      { name: "MongoDB", Icon: SiMongodb },
      { name: "Supabase", Icon: SiSupabase },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "NoSQL", Icon: FaDatabase },
    ],
  },
  {
    label: "Tools & DevOps",
    items: [
      { name: "Git", Icon: SiGit },
      { name: "GitHub Actions", Icon: SiGithubactions },
      { name: "Documentation", Icon: FaBook },
      { name: "Performance", Icon: FaBolt },
    ],
  },
  {
    label: "Testing & CI",
    items: [
      { name: "Jest", Icon: FaBolt },
      { name: "Testing Library", Icon: FaCode },
      { name: "CI/CD", Icon: SiGithubactions },
    ],
  },
] as const;

function TechItem({ name, Icon }: { name: string; Icon: IconType }) {
  return (
    <div className="group/item flex items-center gap-2.5 text-[15px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200">
      <Icon className="w-5 h-5 shrink-0 text-[var(--text-muted)] group-hover/item:text-[var(--primary)] transition-colors" />
      <span className="font-medium tracking-tight">{name}</span>
    </div>
  );
}

export default function TechStack() {
  return (
    <Section id="tech" spacing="tight" className="bg-[var(--bg-elevated)]/40">
      <Container>
        <div className="text-center mb-10">
          <p className="text-[var(--primary)] font-medium text-xs tracking-widest uppercase mb-2">Tech stack</p>
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[var(--text-primary)] via-[var(--primary-light)] to-[var(--primary)] bg-clip-text text-transparent">
            Built with modern tools
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 min-w-0 max-w-full">
          {groups.map((group) => (
            <div
              key={group.label}
              className="group/card relative rounded-2xl p-5 sm:p-6 bg-[var(--bg-card)] border border-[var(--border-subtle)] min-h-[200px] flex flex-col transition-all duration-300 hover:border-[var(--border)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
            >
              <div className="mb-3 flex items-center gap-2.5">
                <span className="flex h-5 w-0.5 shrink-0 rounded-full bg-[var(--primary)]/70" aria-hidden />
                <h3 className="font-heading text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] bg-clip-text text-transparent">
                  {group.label}
                </h3>
              </div>
              <ul className="flex flex-col gap-2.5 flex-1">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <TechItem name={item.name} Icon={item.Icon} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
