import SectionHeader from "./SectionHeader";

interface AboutProps {
  about?: string;
}

const About = ({ about }: AboutProps) => {
  if (!about) return null;

  return (
    <section className="py-section border-b border-border">
      <div className="container">
        <SectionHeader title="About" />
        <p className="text-foreground/80 max-w-2xl leading-relaxed text-sm">
          {about}
        </p>
      </div>
    </section>
  );
};

export default About;
