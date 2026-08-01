export interface ProjectItem {
  id: string;
  _id?: string;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveDemoUrl: string;
  featured?: boolean;
}

export interface SkillItem {
  id: string;
  _id?: string;
  name: string;
  category: string;
  level: string;
  proficiency?: number;
  yearsExperience?: string;
}

export interface ExperienceItem {
  id: string;
  _id?: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  _id?: string;
  degree: string;
  institution: string;
  period: string;
  grade: string;
}

export interface AchievementItem {
  id: string;
  _id?: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialUrl?: string;
}

export interface ContactMessage {
  id: string;
  _id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt: string;
}

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'AWS Cloud Automated CI/CD Infrastructure',
    description: 'High-availability AWS cloud architecture with automated GitHub Actions CI/CD pipelines, Docker containerized services, and IAM security controls.',
    category: 'Cloud & DevOps',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
    technologies: ['AWS', 'Docker', 'GitHub Actions', 'S3', 'IAM', 'Python'],
    githubUrl: 'https://github.com/Kirtan-18',
    liveDemoUrl: 'https://kirtan.dev',
    featured: true
  },
  {
    id: 'proj-2',
    title: 'Odoo ERP Custom Module Ecosystem',
    description: 'Custom Odoo ERP module development with Python ORM, PostgreSQL database optimization, and automated workflow triggers for enterprise operations.',
    category: 'Enterprise Systems',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    technologies: ['Odoo', 'Python', 'PostgreSQL', 'Docker', 'Linux'],
    githubUrl: 'https://github.com/Kirtan-18',
    liveDemoUrl: 'https://kirtan.dev',
    featured: true
  },
  {
    id: 'proj-3',
    title: 'Data Analytics & AI Visualisation Engine',
    description: 'Data processing engine built with Pandas and Matplotlib for analyzing dataset trends and visualizing core machine learning model performance.',
    category: 'Data & AI',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'AI Concepts', 'MySQL'],
    githubUrl: 'https://github.com/Kirtan-18',
    liveDemoUrl: 'https://kirtan.dev',
    featured: true
  }
];

export const INITIAL_SKILLS: SkillItem[] = [
  // Programming
  { id: 'sk-1', name: 'Python', category: 'Programming', level: 'Advanced' },
  { id: 'sk-2', name: 'OOPS Concepts', category: 'Programming', level: 'Advanced' },
  { id: 'sk-3', name: 'Odoo ERP Framework', category: 'Programming', level: 'Advanced' },
  { id: 'sk-4', name: 'Tailwind CSS', category: 'Programming', level: 'Intermediate' },

  // Data Analytics and Visualisation
  { id: 'sk-5', name: 'Pandas', category: 'Data Analytics and Visualisation', level: 'Intermediate' },
  { id: 'sk-6', name: 'Matplotlib', category: 'Data Analytics and Visualisation', level: 'Intermediate' },

  // Databases
  { id: 'sk-7', name: 'MySQL', category: 'Databases', level: 'Advanced' },
  { id: 'sk-8', name: 'MongoDB', category: 'Databases', level: 'Advanced' },
  { id: 'sk-9', name: 'PostgreSQL', category: 'Databases', level: 'Advanced' },

  // DevOps & Cloud
  { id: 'sk-10', name: 'AWS (CLF-C02)', category: 'DevOps & Cloud', level: 'Certified' },
  { id: 'sk-11', name: 'Git', category: 'DevOps & Cloud', level: 'Advanced' },
  { id: 'sk-12', name: 'AWS S3', category: 'DevOps & Cloud', level: 'Advanced' },
  { id: 'sk-13', name: 'AWS IAM', category: 'DevOps & Cloud', level: 'Advanced' },
  { id: 'sk-14', name: 'CI/CD Pipelines', category: 'DevOps & Cloud', level: 'Advanced' },
  { id: 'sk-15', name: 'Docker', category: 'DevOps & Cloud', level: 'Advanced' },
  { id: 'sk-16', name: 'GitHub', category: 'DevOps & Cloud', level: 'Advanced' },

  // AI
  { id: 'sk-17', name: 'AI Core Concepts & Algorithms', category: 'AI', level: 'Strong Foundation' }
];

export const INITIAL_EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Odoo Developer Intern',
    company: 'Enterprise Solutions',
    location: 'Gujarat, India',
    period: '2024 - Present',
    description: [
      'Developed custom Odoo modules using Python and PostgreSQL.',
      'Automated deployment pipelines and business workflow integrations.'
    ],
    technologies: ['Odoo', 'Python', 'PostgreSQL', 'Git', 'Linux']
  }
];

export const INITIAL_EDUCATION: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'University Engineering Department',
    period: '2022 - 2026',
    grade: 'First Class with Distinction'
  }
];

export const INITIAL_ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'ach-1',
    title: 'AWS Certified Cloud Practitioner (CLF-C02)',
    issuer: 'Amazon Web Services',
    date: '2024',
    description: 'Validated foundational knowledge of AWS cloud architecture, security controls, S3, IAM, and infrastructure services.'
  },
  {
    id: 'ach-2',
    title: '1st Place Winner - Cyber Shadez Hackathon',
    issuer: 'Cyber Shadez National Competition',
    date: '2024',
    description: 'Secured 1st rank for building automated cloud deployment pipelines and secure microservices.'
  }
];
