import { LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  icon: LucideIcon;
  description: string;
  category: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string;
  achievements: string[];
  metrics: string; // e.g., "Increased efficiency by 40%"
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  impact: string; // "Reduced load time by 50%"
  tags: string[];
  link?: string;
}

export interface LearningGoal {
  title: string;
  progress: number; // 0-100
  status: 'In Progress' | 'Completed' | 'Planned';
  icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  image: string;
}

export interface Resource {
  title: string;
  description: string;
  type: 'PDF' | 'Template' | 'Guide';
  downloadUrl: string;
}