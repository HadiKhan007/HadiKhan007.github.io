"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import ProjectCard from "../ProjectCard";
import Container from "../ui/Container";
import Section from "../ui/Section";

type CaseStudy = {
  problem: string;
  solution: string;
  impact: string;
  deployment: string;
};

const projects: Array<{
  title: string;
  description: string;
  image: string;
  technologies: string[];
  live: string;
  slug: string;
  featured: boolean;
  github: string;
  caseStudy?: CaseStudy;
}> = [
  {
    title: "Billion Pound",
    description: "Fitness and gym tracking app with workout plans, progress analytics, and personalized recommendations.",
    image: "/images/BillionPound/b1.jpg",
    technologies: ["React Native", "Firebase", "Redux", "Charts"],
    live: "#",
    slug: "billionpound",
    featured: true,
    github: "#",
    caseStudy: {
      problem: "The client needed a single app for gym members to log workouts, track progress, and follow plans without switching tools.",
      solution: "Built a React Native app with Firebase backend, Redux state, and chart-based progress views. Added personalized plan suggestions based on goals.",
      impact: "One codebase for iOS and Android; users can track progress over time and stick to structured plans.",
      deployment: "App Store and Play Store with Firebase hosting for backend; OTA updates for quick fixes.",
    },
  },
  {
    title: "Tijarat",
    description: "E-commerce platform with auth, product catalog, cart, and payment integration.",
    image: "/images/Tijarat/t1.png",
    technologies: ["React Native", "Redux Toolkit", "Firebase", "Stripe"],
    live: "#",
    slug: "tijarat",
    featured: true,
    github: "#",
    caseStudy: {
      problem: "The business needed a mobile-first storefront with secure payments and real-time inventory.",
      solution: "Delivered a React Native app with Redux Toolkit, Firebase (auth and data), and Stripe for payments. Cart and checkout flow designed for conversion.",
      impact: "Unified catalog and checkout on mobile; secure payments and order history in one place.",
      deployment: "Firebase for auth and data; Stripe for payments; app published on both stores.",
    },
  },
];

export default function FeaturedProjects() {
  const [modalProject, setModalProject] = useState<typeof projects[0] | null>(null);

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
          {projects.map((project) => (
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
              />
              {project.caseStudy && (
                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setModalProject(project)}
                    className="text-sm font-medium text-[var(--primary)] hover:text-[var(--primary-light)] transition-colors"
                  >
                    View case study
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {modalProject?.caseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setModalProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 sm:p-8">
                <div className="flex justify-between items-start gap-4 mb-6">
                  <h3 className="font-heading text-xl font-bold text-[var(--text-primary)]">{modalProject.title}</h3>
                  <button
                    type="button"
                    onClick={() => setModalProject(null)}
                    className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface)] transition-colors"
                    aria-label="Close"
                  >
                    <FaTimes className="text-lg" />
                  </button>
                </div>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--primary)] mb-1">Problem</dt>
                    <dd className="text-[var(--text-secondary)] text-sm leading-relaxed">{modalProject.caseStudy.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--primary)] mb-1">Solution</dt>
                    <dd className="text-[var(--text-secondary)] text-sm leading-relaxed">{modalProject.caseStudy.solution}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--primary)] mb-1">Impact</dt>
                    <dd className="text-[var(--text-secondary)] text-sm leading-relaxed">{modalProject.caseStudy.impact}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--primary)] mb-1">Deployment</dt>
                    <dd className="text-[var(--text-secondary)] text-sm leading-relaxed">{modalProject.caseStudy.deployment}</dd>
                  </div>
                </dl>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

