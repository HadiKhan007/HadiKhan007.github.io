import fs from "node:fs/promises";
import path from "node:path";
import { NEW_PROJECTS_BY_FOLDER } from "./newProjects";

export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  live: string;
  slug?: string;
  featured: boolean;
  github: string;
};

export type BaseProjectDetail = {
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  keyHighlights: string[];
  challenges: Array<{
    title: string;
    challenge: string;
    solution: string;
  }>;
  screenshots: string[];
  screenshotLabels: string[];
};

const BASE_PROJECTS: Project[] = [
  {
    title: "Billion Pound",
    description:
      "A comprehensive fitness and gym tracking application that helps users monitor workouts, track progress, and achieve fitness goals. Features include workout plans, progress charts, exercise tracking, and personalized fitness recommendations.",
    image: "/images/BillionPound/b1.jpg",
    technologies: ["React Native", "Firebase", "Redux", "Charts"],
    live: "#",
    slug: "billionpound",
    featured: true,
    github: "#",
  },
  {
    title: "SpotSwap",
    description:
      "A parking spot sharing platform that allows users to rent out their unused parking spaces and find available spots in real-time. Includes GPS navigation, booking system, payment integration, and user reviews.",
    image: "/images/SpotSwap/s1.png",
    technologies: ["React Native", "Firebase", "Maps API", "Stripe"],
    live: "#",
    slug: "spotswap",
    featured: false,
    github: "#",
  },
  {
    title: "Tijarat",
    description:
      "A full-featured eCommerce platform with user authentication, product catalog, shopping cart, and payment integration. Designed for seamless online shopping experience with advanced search and filtering.",
    image: "/images/Tijarat/t1.png",
    technologies: ["React Native", "Redux Toolkit", "Firebase", "Stripe"],
    live: "#",
    slug: "tijarat",
    featured: true,
    github: "#",
  },
  {
    title: "WinRate",
    description:
      "A gaming performance tracking app that analyzes player statistics, provides insights for improvement, and tracks competitive gaming achievements across multiple platforms.",
    image: "/images/WinRate/w1.png",
    technologies: ["React Native", "Firebase", "Charts", "Gaming APIs"],
    live: "#",
    slug: "winrate",
    featured: false,
    github: "#",
  },
];

export const BASE_PROJECTS_DETAILS: Record<string, BaseProjectDetail> = {
  billionpound: {
    title: "Billion Pound",
    category: "Fitness & Gym Tracking App",
    description: "A comprehensive fitness and gym tracking application that helps users monitor workouts, track progress, and achieve fitness goals. Features include workout plans, progress charts, exercise tracking, and personalized fitness recommendations.",
    fullDescription: "A comprehensive fitness and gym tracking application that helps users monitor workouts, track progress, and achieve fitness goals with advanced analytics and personalized recommendations.",
    technologies: [
      "React Native",
      "Firebase",
      "Redux Toolkit",
      "React Navigation",
      "AsyncStorage",
      "React Native Charts",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT Authentication",
    ],
    keyHighlights: [
      "Advanced workout planning and scheduling",
      "Real-time progress tracking and analytics",
      "Personalized exercise recommendations",
      "Comprehensive exercise library",
      "Offline mode with data sync",
      "Achievement system and gamification",
    ],
    challenges: [
      {
        title: "Real-time data synchronization",
        challenge: "Syncing progress and workout history across devices with offline support.",
        solution: "Implemented Firebase-based sync with local caching and conflict-safe updates.",
      },
      {
        title: "Large data performance",
        challenge: "Heavy workout history could slow list and chart rendering.",
        solution: "Used pagination, lightweight rendering, and optimized query patterns.",
      },
    ],
    screenshots: [
      "/images/BillionPound/b1.jpg",
      "/images/BillionPound/b2.jpg",
      "/images/BillionPound/b3.png",
      "/images/BillionPound/b4.jpg",
      "/images/BillionPound/b5.png",
      "/images/BillionPound/b6.png",
    ],
    screenshotLabels: [
      "Login & Onboarding",
      "Home & Dashboard",
      "Workout Plans",
      "Progress & Analytics",
      "Exercise Library",
      "Profile & Settings",
    ],
  },
  spotswap: {
    title: "SpotSwap",
    category: "Parking Spot Sharing Platform",
    description: "A parking spot sharing platform that allows users to rent out their unused parking spaces and find available spots in real-time. Includes GPS navigation, booking system, payment integration, and user reviews.",
    fullDescription: "A parking spot sharing platform connecting parking-space owners with drivers through real-time availability, fast booking flow, and integrated navigation.",
    technologies: [
      "React Native",
      "Firebase",
      "Google Maps API",
      "Stripe",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "JWT Authentication",
      "Geolocation Services",
    ],
    keyHighlights: [
      "Real-time parking space discovery",
      "GPS-enabled navigation and directions",
      "Instant booking and reservation flow",
      "Secure in-app payment processing",
      "Owner dashboard and revenue analytics",
      "Push notifications for bookings",
    ],
    challenges: [
      {
        title: "Location accuracy",
        challenge: "Ensuring precise parking coordinates with live availability updates.",
        solution: "Combined Maps API geofencing with real-time updates for reliable discovery.",
      },
      {
        title: "Transaction trust",
        challenge: "Building confidence in peer-to-peer parking payments.",
        solution: "Integrated secure payment flow with verification and review-driven trust signals.",
      },
    ],
    screenshots: [
      "/images/SpotSwap/s1.png",
      "/images/SpotSwap/s2.png",
      "/images/SpotSwap/s3.png",
      "/images/SpotSwap/s4.png",
      "/images/SpotSwap/s5.png",
      "/images/SpotSwap/s6.png",
      "/images/SpotSwap/s7.png",
      "/images/SpotSwap/s8.png",
      "/images/SpotSwap/s9.png",
    ],
    screenshotLabels: [
      "Home & Map",
      "Search & Filters",
      "Parking Detail",
      "Booking",
      "Payment",
      "Profile",
      "Owner Dashboard",
      "Reviews",
      "Notifications",
    ],
  },
  tijarat: {
    title: "Tijarat",
    category: "Multi-vendor eCommerce Platform",
    description: "A full-featured eCommerce platform with user authentication, product catalog, shopping cart, and payment integration. Designed for seamless online shopping experience with advanced search and filtering.",
    fullDescription: "A full-featured multi-vendor eCommerce platform for buyers and sellers with secure checkout, scalable catalog management, and smooth shopping workflows.",
    technologies: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "JWT Authentication",
      "Socket.io",
      "Cloudinary",
    ],
    keyHighlights: [
      "Multi-vendor marketplace architecture",
      "Secure payment workflow with Stripe",
      "Seller dashboard and order management",
      "Advanced product filtering and search",
      "Real-time support and notifications",
      "Responsive mobile-first UX",
    ],
    challenges: [
      {
        title: "Multi-vendor complexity",
        challenge: "Managing vendor roles, inventory, commissions, and order routing in one product.",
        solution: "Implemented role-based architecture with clear seller/buyer/admin flows.",
      },
      {
        title: "Scalability under catalog growth",
        challenge: "Large catalogs and active filtering can slow browsing.",
        solution: "Optimized APIs and query flow with pagination and selective payloads.",
      },
    ],
    screenshots: [
      "/images/Tijarat/t1.png",
      "/images/Tijarat/t2.png",
      "/images/Tijarat/t3.png",
      "/images/Tijarat/t4.png",
      "/images/Tijarat/t5.png",
      "/images/Tijarat/t6.png",
    ],
    screenshotLabels: [
      "Login",
      "Marketplace Home",
      "Seller Dashboard",
      "Order Detail",
      "All Products",
      "Shopping Cart",
    ],
  },
  winrate: {
    title: "WinRate",
    category: "Competitive Gaming Analytics App",
    description: "A gaming performance tracking app that analyzes player statistics, provides insights for improvement, and tracks competitive gaming achievements across multiple platforms.",
    fullDescription: "A gaming performance and analytics product focused on player progression, match insights, and competitive improvement through clear performance signals.",
    technologies: [
      "React Native",
      "Firebase",
      "Node.js",
      "Express",
      "MongoDB",
      "Charts",
      "Game Data APIs",
    ],
    keyHighlights: [
      "Performance tracking dashboards",
      "Player progression and history insights",
      "Leaderboard and ranking visualization",
      "Match review and stat breakdown",
      "Cross-session performance consistency",
      "Mobile-first, fast interaction design",
    ],
    challenges: [
      {
        title: "Data-heavy UI readability",
        challenge: "High-density match metrics became difficult to scan quickly.",
        solution: "Reorganized information hierarchy and visualized priority metrics first.",
      },
      {
        title: "Large history rendering",
        challenge: "Long gameplay history could cause lag during filtering and scrolling.",
        solution: "Applied lean rendering strategy and optimized query + state updates.",
      },
    ],
    screenshots: [
      "/images/WinRate/w1.png",
      "/images/WinRate/w2.png",
      "/images/WinRate/w3.png",
      "/images/WinRate/w4.png",
      "/images/WinRate/w5.png",
      "/images/WinRate/w6.png",
      "/images/WinRate/w7.png",
    ],
    screenshotLabels: [
      "Main Menu",
      "Lobby",
      "In-Game",
      "Leaderboard",
      "Character Customization",
      "Weapon Progression",
      "Spectator Mode",
    ],
  },
};

const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif"]);
const MANUAL_FOLDERS = new Set(
  BASE_PROJECTS.map((project) => project.image.split("/")[2]?.toLowerCase() ?? ""),
);

function toProjectTitle(folderName: string): string {
  const spaced = folderName
    .replace(/[_-]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .trim();

  return spaced
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function publicImagePath(folderName: string, fileName: string): string {
  return `/images/${folderName}/${fileName}`;
}

async function getAutoDetectedProjects(rootDir: string): Promise<Project[]> {
  const imagesDir = path.join(rootDir, "images");
  const entries = await fs.readdir(imagesDir, { withFileTypes: true });
  const detected: Project[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const folderName = entry.name;
    if (MANUAL_FOLDERS.has(folderName.toLowerCase())) continue;

    const folderPath = path.join(imagesDir, folderName);
    const files = await fs.readdir(folderPath, { withFileTypes: true });

    const imageFiles = files
      .filter((file) => file.isFile() && IMAGE_EXTENSIONS.has(path.extname(file.name).toLowerCase()))
      .map((file) => file.name)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

    if (imageFiles.length === 0) continue;

    const knownProject = NEW_PROJECTS_BY_FOLDER.get(folderName.toLowerCase());
    detected.push({
      title: knownProject?.title ?? toProjectTitle(folderName),
      description:
        knownProject?.shortDescription ??
        "A recently added project with updated screenshots. Full details can be shared during a call.",
      image: knownProject?.cardImage ?? knownProject?.screenshots[0] ?? publicImagePath(folderName, imageFiles[0]),
      technologies: knownProject?.technologies ?? ["React Native", "Next.js", "TypeScript"],
      live: "#",
      slug: knownProject?.slug,
      featured: !!knownProject,
      github: "#",
    });
  }

  return detected.sort((a, b) => a.title.localeCompare(b.title));
}

export async function getProjects(): Promise<Project[]> {
  try {
    const detected = await getAutoDetectedProjects(process.cwd());
    return [...BASE_PROJECTS, ...detected];
  } catch {
    return BASE_PROJECTS;
  }
}
