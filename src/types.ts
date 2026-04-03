export interface Project {
  name: string;
  description: string;
  techStack: string[];
  link: string;
}

export interface Article {
  title: string;
  date: string;
  summary: string;
  link: string;
}

export interface Experience {
  company: string;
  role: string;
  dates: string;
  achievements: string[];
}

export interface Education {
  school: string;
  degree: string;
  dates: string;
  grade?: string;
}

export interface PortfolioData {
  fullName: string;
  shortRole?: string;
  headline: string;
  bio: string;
  skills: {
    technical: string[];
    strategicCompetencies: string[];
    certifications: string[];
  };
  experience: Experience[];
  projects: Project[];
  articles: Article[];
  education: Education[];
  contact: {
    email: string;
    github: string;
    linkedin: string;
    medium: string;
    kaggle?: string;
  };
  profileImage?: string;
  fallbackProfileImage?: string;
}
