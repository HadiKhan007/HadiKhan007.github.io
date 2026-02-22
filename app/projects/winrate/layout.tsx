import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WinRate | Ali Haider - Gaming Stats App Case Study",
  description:
    "Gaming performance tracking app. React Native, Firebase, Charts. Player stats, insights, competitive achievements.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
