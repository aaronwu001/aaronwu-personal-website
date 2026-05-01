export type SiteConfig = {
  name: string;
  headline: string;
  subHeadline: string;
  status: string;
  avatar: string;
  socialLinks: {
    platform: string;
    url: string;
    icon: string;
  }[];
};

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  description: string;
  tags: string[];
  details: string;
};

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  featured: boolean;
  isInternal: boolean;
  thumbnail: string;
  resources: {
    github?: string;
    demo?: string;
    architecture?: string;
    screenshots?: string[];
    videos?: string[];
    articles?: string[];
  };
};

export type Article = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  url: string;
  tags: string[];
  relatedProjects?: string[];
};
