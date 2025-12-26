import SectionHeader from "./SectionHeader";
import type { SocialLinks } from "@/types/portfolio";

interface LinksProps {
  links?: SocialLinks;
}

const Links = ({ links }: LinksProps) => {
  if (!links) return null;

  const hasLinks = links.github || links.linkedin || links.website;
  if (!hasLinks) return null;

  return (
    <section className="py-section border-b border-border">
      <div className="container">
        <SectionHeader title="Links" />
        <div className="flex flex-wrap gap-6">
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm text-text-secondary hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          )}
          {links.linkedin && (
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm text-text-secondary hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
          )}
          {links.website && (
            <a
              href={links.website}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm text-text-secondary hover:text-foreground transition-colors"
            >
              Website
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Links;
