import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Ali Haider - Full Stack React Native Developer",
  description:
    "4.5+ years building web and mobile apps. React Native, Node.js, Firebase. Full stack from UI to backend.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
