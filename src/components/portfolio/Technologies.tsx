import SectionHeader from "./SectionHeader";

interface TechnologiesProps {
  technologies?: string[];
}

const Technologies = ({ technologies }: TechnologiesProps) => {
  if (!technologies || technologies.length === 0) return null;

  return (
    <section className="py-section border-b border-border">
      <div className="container">
        <SectionHeader title="Technologies" />
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {technologies.map((tech, index) => (
            <span key={index} className="text-sm text-foreground/80">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
