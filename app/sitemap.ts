import type { MetadataRoute } from "next";
import { getProjects } from "@/lib/projects";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://hadikhan007.github.io";

export const dynamic = "force-static";
export const revalidate = false;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects();
  
  const projectUrls = projects
    .filter((p) => p.slug)
    .map((project) => ({
      url: `${BASE_URL}/projects/${project.slug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/about/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/projects/`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    ...projectUrls,
    { url: `${BASE_URL}/contact/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
