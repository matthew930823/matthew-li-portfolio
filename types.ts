export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  location: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export enum MessageRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: MessageRole;
  text: string;
  timestamp: number;
}