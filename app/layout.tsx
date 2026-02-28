import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LenisProvider from "../components/providers/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://hadikhan007.github.io"),
  title: {
    default: "Ali Haider - Full Stack React Native Developer | 4.5+ Years",
    template: "%s | Ali Haider",
  },
  description:
    "Full Stack Developer: React Native, Next.js, Node.js, Firebase. Ship mobile and web products that scale. Clear communication, on-time delivery. Available for new projects.",
  keywords: [
    "Full Stack Developer",
    "React Native",
    "Next.js",
    "Node.js",
    "Firebase",
    "Mobile Developer",
    "Web Developer",
    "Upwork",
    "Freelance Developer",
    "iOS",
    "Android",
    "Portfolio",
  ],
  authors: [{ name: "Ali Haider", url: "https://www.linkedin.com/in/alihaider17/" }],
  creator: "Ali Haider",
  publisher: "Ali Haider",
  robots: "index, follow",
  openGraph: {
    title: "Ali Haider - Full Stack React Native Developer",
    description: "Ship mobile and web products that scale. React Native, Next.js, Node.js. Clear communication, on-time delivery.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Haider - Full Stack React Native Developer",
    description: "Ship mobile and web products that scale. React Native, Next.js, Node.js.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0a0a0b",
  colorScheme: "dark",
  viewportFit: "cover",
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
        <link rel="prefetch" href="/about/" />
        <link rel="prefetch" href="/projects/" />
        <link rel="prefetch" href="/contact/" />
        <meta name="theme-color" content="#0a0a0b" />
        <meta name="color-scheme" content="dark" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="msapplication-TileColor" content="#6366f1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} antialiased min-h-screen flex flex-col bg-[var(--bg-page)]`}
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <LenisProvider>
          <div className="noise-overlay" aria-hidden />
          <Header />
          <main id="main-content" className="flex-grow safe-area-main relative z-10 pb-16 sm:pb-24">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
