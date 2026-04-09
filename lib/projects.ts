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

const BASE_PROJECTS: Project[] = [
  {
    title: "Billion Pound",
    description:
      "A comprehensive fitness and gym tracking application that helps users monitor workouts, track progress, and achieve fitness goals. Features include workout plans, progress charts, exercise tracking, and personalized fitness recommendations.",
    image: "/images/BillionPound/b1.webp",
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
    image: "/images/SpotSwap/s1.webp",
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
    image: "/images/Tijarat/t1.webp",
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
    image: "/images/WinRate/w1.webp",
    technologies: ["React Native", "Firebase", "Charts", "Gaming APIs"],
    live: "#",
    slug: "winrate",
    featured: false,
    github: "#",
  },
];

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
