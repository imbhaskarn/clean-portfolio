export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
}

export interface ProjectLinks {
  repository?: string | null;
  demo?: string | null;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  links?: ProjectLinks;
}

export interface SocialLinks {
  github?: string | null;
  linkedin?: string | null;
  website?: string | null;
}

export interface Contact {
  email?: string | null;
}

export interface PortfolioData {
  name?: string;
  role?: string;
  summary?: string;
  about?: string;
  experience?: Experience[];
  projects?: Project[];
  technologies?: string[];
  links?: SocialLinks;
  contact?: Contact;
}
