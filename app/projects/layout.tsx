import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Ali Haider - Full Stack React Native Developer",
  description:
    "Full stack projects: Billion Pound, SpotSwap, Tijarat, WinRate. React Native, Node.js, Firebase.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
