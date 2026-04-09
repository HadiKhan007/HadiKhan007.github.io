import Image from "next/image";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import { FaCode, FaRocket, FaStar } from "react-icons/fa";
import { getProjects } from "../../lib/projects";

export default async function Projects() {
  const projects = await getProjects();

  const stats = [
    { number: "20+", label: "Client Projects Shipped", icon: FaRocket },
    { number: "12+", label: "Tech Stack Tools", icon: FaCode },
    { number: "4.5+", label: "Years Experience", icon: FaStar },
  ];

  return (
    <div className="min-h-screen">
      <div className="section-shell">
        <PageHero
          badge="Featured Projects"
          title="My Projects"
          subtitle="4.5+ years building web and mobile apps. React Native, Node.js, Firebase. From UI to backend. Full stack projects: Next.js, Express, MongoDB, PostgreSQL. Web & mobile with scalable backends."
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="rounded-2xl p-5 sm:p-6 bg-[var(--bg-card)] border border-[var(--border)] premium-card focus-within:ring-2 focus-within:ring-[#6366f1]/20 focus-within:ring-offset-2 focus-within:ring-offset-[var(--bg-page)] flex flex-col items-center gap-4">
                  <div className="inline-flex p-3 rounded-xl bg-[var(--bg-elevated)] text-[#6366f1]">
                    <stat.icon className="text-2xl" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold gradient-text leading-none">
                    {stat.number}
                  </div>
                  <div className="text-[var(--text-muted)] text-sm font-medium leading-relaxed max-w-[14rem]">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </PageHero>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 mb-14 sm:mb-16">
          {projects.map((project, index) => (
            <article key={project.title} className="premium-card overflow-hidden">
              <div className="relative aspect-[16/10] bg-[var(--bg-surface)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-2 sm:p-3"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
                  priority={index < 2}
                  quality={62}
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">{project.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">{project.description}</p>
                {project.technologies?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md border border-[var(--border)] text-[var(--text-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                ) : null}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.slug ? (
                    <a
                      href={`/projects/${project.slug}/`}
                      className="inline-flex items-center justify-center rounded-lg px-3.5 py-2 text-sm text-white bg-gradient-to-r from-[#566bff] to-[#8b5cf6] hover:brightness-110 transition"
                    >
                      View Details
                    </a>
                  ) : null}
                  {project.live && project.live !== "#" ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg px-3.5 py-2 text-sm border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    >
                      Live Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-4 mb-8 sm:mb-12">
          <div className="rounded-2xl p-8 sm:p-10 lg:p-12 bg-[var(--bg-card)] border border-[var(--border)] premium-card relative overflow-hidden max-w-2xl mx-auto">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#6366f1]/10 to-transparent rounded-full blur-2xl" />
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#6366f1] to-[#ec4899] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#6366f1]/30">
              <FaRocket className="text-white text-xl sm:text-2xl" />
            </div>
            <h2 className="section-title text-2xl sm:text-3xl lg:text-4xl text-[var(--text-primary)] mb-4">
              <span className="gradient-text text-glow">More Coming Soon</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base max-w-xl mx-auto leading-relaxed px-4">
              Building new projects and exploring new tech. Check back for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
