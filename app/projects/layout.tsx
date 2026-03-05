import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Ali Haider - Full Stack React Native Developer",
  description:
    "4.5+ years building web and mobile apps. Featured projects: Billion Pound, SpotSwap, Tijarat, WinRate. React Native, Node.js, Firebase from UI to backend.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
