import SectionHeader from "./SectionHeader";
import type { Contact as ContactType } from "@/types/portfolio";

interface ContactProps {
  contact?: ContactType;
}

const Contact = ({ contact }: ContactProps) => {
  if (!contact || !contact.email) return null;

  return (
    <section className="py-section">
      <div className="container">
        <SectionHeader title="Contact" />
        <a
          href={`mailto:${contact.email}`}
          className="link-underline text-sm text-text-secondary hover:text-foreground transition-colors"
        >
          {contact.email}
        </a>
      </div>
    </section>
  );
};

export default Contact;
