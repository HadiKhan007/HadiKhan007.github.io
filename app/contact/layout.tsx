import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Ali Haider - Full Stack React Native Developer",
  description:
    "Have a project in mind? Get in touch. I check email daily and aim to reply within 24 hours.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
