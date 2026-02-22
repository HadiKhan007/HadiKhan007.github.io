import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SpotSwap | Ali Haider - Parking Platform Case Study",
  description:
    "Parking spot sharing platform. React Native, Firebase, Maps API, Stripe. Real-time availability, booking, payments.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
