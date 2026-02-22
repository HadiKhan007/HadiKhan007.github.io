import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Billion Pound | Ali Haider - Fitness App Case Study",
  description:
    "Comprehensive fitness and gym tracking app. React Native, Firebase, Redux. Workout plans, progress analytics, personalized recommendations.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
