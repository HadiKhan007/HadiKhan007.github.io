import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LenisProvider from "../components/providers/LenisProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["500", "600", "700"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://hadikhan007.github.io";

const defaultTitle = "Ali Haider · React Native Developer Portfolio";
const defaultDescription =
  "Explore my mobile apps, UI designs, and production-ready React Native projects.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Ali Haider",
  },
  description: defaultDescription,
  keywords: [
    "Ali Haider",
    "React Native",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Mobile App Developer",
    "Freelance React Native Developer",
    "Portfolio Website",
  ],
  authors: [{ name: "Ali Haider", url: "https://www.linkedin.com/in/alihaider17/" }],
  creator: "Ali Haider",
  publisher: "Ali Haider",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    type: "website",
    url: "/",
    siteName: "Ali Haider Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Ali Haider, React Native developer portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Ali Haider, React Native developer portfolio",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#06070b",
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
        <meta name="theme-color" content="#06070b" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased min-h-screen flex flex-col bg-[var(--bg-page)] text-[var(--text-primary)]`}
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <LenisProvider>
          <Header />
          <main id="main-content" className="flex-grow pt-16 sm:pt-[72px]">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
