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
] as const;

function TechItem({ name, Icon }: { name: string; Icon: IconType }) {
  return (
    <div className="group flex items-center gap-2 text-sm sm:text-base text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
      <Icon className="w-5 h-5 shrink-0 text-[var(--text-muted)] group-hover:text-[var(--primary)] transition-colors" />
      <span>{name}</span>
    </div>
  );
}

export default function TechStack() {
  return (
    <Section id="tech" spacing="tight" className="bg-[var(--bg-elevated)]/40">
      <Container>
        <div className="text-center mb-10">
          <p className="text-[var(--primary)] font-medium text-sm tracking-widest uppercase mb-3">Tech stack</p>
          <h2 className="font-heading title-section text-2xl sm:text-3xl md:text-4xl text-[var(--text-primary)]">
            Built with modern tools
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 min-w-0 max-w-full">
          {groups.map((group) => (
            <div
              key={group.label}
              className="rounded-xl p-5 sm:p-6 bg-[var(--bg-card)] border border-[var(--border-subtle)]"
            >
              <h3 className="font-heading text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3">
                {group.label}
              </h3>
              <ul className="flex flex-col gap-2">
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
