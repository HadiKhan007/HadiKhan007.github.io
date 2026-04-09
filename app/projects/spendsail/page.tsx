import ProjectDetailPage from "../../../components/projects/ProjectDetailPage";
import { NEW_PROJECTS_BY_SLUG } from "../../../lib/newProjects";

export default function SpendSailProjectPage() {
  const project = NEW_PROJECTS_BY_SLUG.get("spendsail");
  if (!project) return null;

  return (
    <ProjectDetailPage
      title={project.title}
      category={project.category}
      description={project.fullDescription}
      technologies={project.technologies}
      keyHighlights={project.keyHighlights}
      challenges={project.challenges}
      screenshots={project.screenshots}
      screenshotLabels={project.screenshotLabels}
    />
  );
}
