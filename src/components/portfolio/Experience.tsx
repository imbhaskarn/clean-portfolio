import SectionHeader from "./SectionHeader";
import type { Experience as ExperienceType } from "@/types/portfolio";

interface ExperienceProps {
  experience?: ExperienceType[];
}

const Experience = ({ experience }: ExperienceProps) => {
  if (!experience || experience.length === 0) return null;

  return (
    <section className="py-section border-b border-border">
      <div className="container">
        <SectionHeader title="Experience" />
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-8">
              <div className="text-text-tertiary text-xs">
                {exp.duration}
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">
                  {exp.role}
                </h3>
                <p className="text-text-secondary text-xs mb-2">
                  {exp.company}
                </p>
                {exp.description && (
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
