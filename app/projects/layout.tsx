import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Ali Haider, Full Stack React Native Developer",
  description:
    "4.5+ years building web and mobile apps. Featured projects: Billion Pound, SpotSwap, Tijarat, WinRate, FGS, Fibber AI, and SpendSail. React Native, Next.js, Node.js, Firebase.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
