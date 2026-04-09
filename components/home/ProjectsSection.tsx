import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/lib/projects";

export default async function ProjectsSection() {
  const projects = (await getProjects()).slice(0, 3);

  return (
    <section id="projects" className="section-shell pt-16 sm:pt-20">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="section-kicker">Projects</p>
          <h2 className="mt-3 section-title font-semibold">Selected client work</h2>
        </div>
        <Link href="/projects/" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
          View all
        </Link>
      </div>

      <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <Link
            key={project.title}
            href={project.slug ? `/projects/${project.slug}` : "/projects/"}
            className="premium-card overflow-hidden group"
          >
            <div className="relative aspect-[16/10] bg-[var(--bg-surface)]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover project-image"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                priority={index < 2}
                quality={72}
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 rounded-md premium-card text-[var(--text-muted)]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
