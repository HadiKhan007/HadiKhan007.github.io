import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Ali Haider - Full Stack React Native Developer",
  description:
    "Full Stack Developer: Next.js, React Native, Node.js, Express, MongoDB, PostgreSQL, SQL & NoSQL. Scalable web & mobile apps—15+ projects delivered.",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React Native",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "SQL",
    "NoSQL",
    "Firebase",
    "Mobile Developer",
    "Web Developer",
    "iOS",
    "Android",
    "Portfolio",
  ],
  authors: [{ name: "Ali Haider" }],
  creator: "Ali Haider",
  publisher: "Ali Haider",
  robots: "index, follow",
  openGraph: {
    title: "Ali Haider - Full Stack React Native Developer",
    description:
      "Full stack web & mobile solutions. Scalable apps, seamless UX, robust backend. React Native, Node.js, Firebase. Let's build.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#6366f1",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="color-scheme" content="dark" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="msapplication-TileColor" content="#6366f1" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gray-900`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
