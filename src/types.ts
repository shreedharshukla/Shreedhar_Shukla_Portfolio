export interface Project {
  id: string;
  title: string;
  category: 'all' | 'ml-ai' | 'analytics' | 'product';
  tech: string[];
  description: string;
  longDescription?: string;
  githubUrl?: string;
  liveUrl?: string;
  keyMetric?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface Statistic {
  value: number;
  suffix: string;
  label: string;
}
