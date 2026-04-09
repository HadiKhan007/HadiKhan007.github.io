import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Ali Haider, Full Stack React Native Developer",
  description:
    "Get in touch. I usually reply within a few hours. Quick turnaround is the norm.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
