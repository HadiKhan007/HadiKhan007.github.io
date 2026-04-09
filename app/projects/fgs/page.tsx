import ProjectDetailPage from "../../../components/projects/ProjectDetailPage";
import { NEW_PROJECTS_BY_SLUG } from "../../../lib/newProjects";

export default function FgsProjectPage() {
  const project = NEW_PROJECTS_BY_SLUG.get("fgs");
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
