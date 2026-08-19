export interface ProjectLinks {
  Repository?: string;
  Website?: string;
  Documentation?: string;
  Design?: string;
  Download?: string;
}

export interface Project {
  Category: string;
  Name: string;
  Description: string;
  tool: string[];
  link: ProjectLinks;
  img?: string;
}

export interface ExperienceLinks {
  instagram?: string;
  tiktok?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  tasks: string[];
  links?: ExperienceLinks;
}

export interface Education {
  institution: string;
  degree: string;
  supervisor?: string;
}
