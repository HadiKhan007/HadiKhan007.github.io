import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tijarat | Ali Haider - eCommerce App Case Study",
  description:
    "Full-featured eCommerce platform. React Native, Redux Toolkit, Firebase, Stripe. Auth, catalog, cart, payments.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
