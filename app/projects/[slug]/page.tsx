import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProjectDetailPage from "../../../components/projects/ProjectDetailPage";
import { NEW_PROJECTS_BY_SLUG } from "../../../lib/newProjects";
import { getProjects, BASE_PROJECTS_DETAILS } from "../../../lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  // Check NEW_PROJECTS first
  const newProject = NEW_PROJECTS_BY_SLUG.get(slug);
  if (newProject) {
    return {
      title: `${newProject.title} | Ali Haider Portfolio`,
      description: newProject.shortDescription,
    };
  }
  
  // Check BASE_PROJECTS
  const baseProject = BASE_PROJECTS_DETAILS[slug];
  if (baseProject) {
    return {
      title: `${baseProject.title} | Ali Haider Portfolio`,
      description: baseProject.description,
    };
  }
  
  return {
    title: "Project | Ali Haider Portfolio",
    description: "Project details",
  };
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects
    .filter((p) => p.slug)
    .map((project) => ({
      slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  
  // Check if it's a new project with full details
  const newProject = NEW_PROJECTS_BY_SLUG.get(slug);
  if (newProject) {
    return (
      <ProjectDetailPage
        title={newProject.title}
        category={newProject.category}
        description={newProject.fullDescription}
        technologies={newProject.technologies}
        keyHighlights={newProject.keyHighlights}
        challenges={newProject.challenges}
        screenshots={newProject.screenshots}
        screenshotLabels={newProject.screenshotLabels}
      />
    );
  }

  // Check if it's a base project with full details
  const baseProjectDetail = BASE_PROJECTS_DETAILS[slug];
  if (baseProjectDetail) {
    return (
      <ProjectDetailPage
        title={baseProjectDetail.title}
        category={baseProjectDetail.category}
        description={baseProjectDetail.fullDescription}
        technologies={baseProjectDetail.technologies}
        keyHighlights={baseProjectDetail.keyHighlights}
        challenges={baseProjectDetail.challenges}
        screenshots={baseProjectDetail.screenshots}
        screenshotLabels={baseProjectDetail.screenshotLabels}
      />
    );
  }

  // Check if project exists at all
  const projects = await getProjects();
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) {
    notFound();
  }

  // Fallback for projects without full details
  return (
    <ProjectDetailPage
      title={project.title}
      category="Mobile Application"
      description={project.description}
      technologies={project.technologies}
      keyHighlights={[
        "Full-featured mobile application",
        "Modern UI/UX design",
        "Scalable architecture",
        "Production-ready implementation",
      ]}
      challenges={[]}
      screenshots={[project.image]}
      screenshotLabels={[`${project.title} Screenshot`]}
    />
  );
}
