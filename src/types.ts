export type Language = 'tr' | 'en';

export interface ProjectItem {
  id: string;
  title: string;
  category: 'legaltech' | 'backend' | 'ai' | 'fullstack';
  period: string;
  subtitle: string;
  description: string;
  highlights: string[];
  techStack: string[];
  deployment?: string;
  liveUrl?: string;
  database?: string;
  statusBadge?: string;
}

export interface SubExperienceProject {
  title: string;
  subtitle?: string;
  description: string[];
  techStack: string[];
  keyArchitecture?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  description: string;
  subProjects?: SubExperienceProject[];
  responsibilities?: string[];
  impactMetrics?: { label: string; value: string }[];
  techStack: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    context?: string;
  }[];
}

export interface LanguageItem {
  name: string;
  level: string;
  cefr: string;
  description: string;
  percentage: number;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  category: 'ai' | 'legal' | 'competency' | 'writing';
  year?: string;
  status?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  notes?: string;
}

export interface CommunityItem {
  name: string;
  role: string;
  description: string;
}
