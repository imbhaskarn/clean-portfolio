import SectionHeader from "./SectionHeader";
import type { Project } from "@/types/portfolio";

interface ProjectsProps {
  projects?: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="py-section border-b border-border">
      <div className="container">
        <SectionHeader title="Projects" />
        <div className="space-y-10">
          {projects.map((project, index) => (
            <div key={index}>
              <h3 className="text-sm font-medium mb-2">
                {project.title}
              </h3>
              {project.description && (
                <p className="text-foreground/70 text-sm leading-relaxed mb-3 max-w-2xl">
                  {project.description}
                </p>
              )}
              {project.tech && project.tech.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs text-text-secondary bg-secondary px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              {project.links && (
                <div className="flex gap-4 text-xs">
                  {project.links.repository && (
                    <a
                      href={project.links.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-text-secondary hover:text-foreground transition-colors"
                    >
                      Repository
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-text-secondary hover:text-foreground transition-colors"
                    >
                      Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
