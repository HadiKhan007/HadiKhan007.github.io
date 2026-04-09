import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import ProjectCard from "../ProjectCard";
import Container from "../ui/Container";
import Section from "../ui/Section";
import { getProjects } from "../../lib/projects";

export default async function FeaturedProjects() {
  const projects = (await getProjects()).slice(0, 3);

  return (
    <Section id="projects">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-[var(--primary)] font-medium text-sm tracking-widest uppercase mb-4">Featured work</p>
            <h2 className="font-heading title-section text-2xl sm:text-3xl md:text-4xl text-[var(--text-primary)]">
              Selected projects
            </h2>
          </div>
          <Link
            href="/projects/"
            className="group inline-flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary-light)] font-medium transition-colors"
          >
            View all
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={project.title} className="transition-transform duration-200 hover:-translate-y-1">
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                live={project.live}
                slug={project.slug}
                featured={project.featured}
                github={project.github}
                reduceMotion
                priority={index < 2}
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

