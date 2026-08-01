import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ProjectItem,
  SkillItem,
  ExperienceItem,
  EducationItem,
  AchievementItem,
  ContactMessage,
  INITIAL_PROJECTS,
  INITIAL_SKILLS,
  INITIAL_EXPERIENCE,
  INITIAL_EDUCATION,
  INITIAL_ACHIEVEMENTS
} from '../data/initialData';

const safeParse = (key: string, fallback: any) => {
  try {
    const saved = localStorage.getItem(key);
    if (!saved || saved === 'undefined' || saved === 'null') return fallback;
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : fallback;
  } catch (e) {
    return fallback;
  }
};

interface PortfolioContextType {
  projects: ProjectItem[];
  skills: SkillItem[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  achievements: AchievementItem[];
  messages: ContactMessage[];
  token: string | null;
  isAdmin: boolean;
  isBackendConnected: boolean;
  isLoading: boolean;
  
  // Auth
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;

  // Reset Skills to exact user list
  resetSkillsToDefault: () => void;
  
  // CRUD Projects
  addProject: (project: Omit<ProjectItem, 'id'>) => Promise<void>;
  updateProject: (id: string, project: Partial<ProjectItem>) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;

  // CRUD Skills
  addSkill: (skill: Omit<SkillItem, 'id'>) => Promise<void>;
  updateSkill: (id: string, skill: Partial<SkillItem>) => Promise<void>;
  deleteSkill: (id: string) => Promise<void>;

  // Contact Messages
  sendMessage: (msg: { name: string; email: string; subject: string; message: string }) => Promise<boolean>;
  deleteMessage: (id: string) => Promise<void>;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<ProjectItem[]>(() => safeParse('portfolio_projects', INITIAL_PROJECTS));
  
  const [skills, setSkills] = useState<SkillItem[]>(() => {
    localStorage.setItem('portfolio_skills_v2', JSON.stringify(INITIAL_SKILLS));
    return INITIAL_SKILLS;
  });

  const [experiences, setExperiences] = useState<ExperienceItem[]>(() => safeParse('portfolio_experiences', INITIAL_EXPERIENCE));
  const [education, setEducation] = useState<EducationItem[]>(() => safeParse('portfolio_education', INITIAL_EDUCATION));
  const [achievements, setAchievements] = useState<AchievementItem[]>(() => safeParse('portfolio_achievements', INITIAL_ACHIEVEMENTS));

  const [messages, setMessages] = useState<ContactMessage[]>(() => safeParse('portfolio_messages', [
    {
      id: 'msg-1',
      name: 'Tesla Recruiter',
      email: 'recruiting@tesla.com',
      subject: 'DevOps & Cloud Engineer Role',
      message: 'Impressive 3D portfolio! We would love to discuss an engineering opportunity with you.',
      read: false,
      createdAt: new Date().toISOString()
    }
  ]));

  const [token, setToken] = useState<string | null>(() => localStorage.getItem('admin_token'));
  const [isAdmin, setIsAdmin] = useState<boolean>(!!token);
  const [isBackendConnected, setIsBackendConnected] = useState<boolean>(false);
  const [isLoading] = useState<boolean>(false);

  const resetSkillsToDefault = () => {
    setSkills(INITIAL_SKILLS);
    localStorage.setItem('portfolio_skills_v2', JSON.stringify(INITIAL_SKILLS));
  };

  const login = async (username: string, password: string): Promise<boolean> => {
    if ((username === 'kirtan' || username === 'admin' || username === 'anil') && (password === 'admin123' || password === 'admin' || password === 'kirtan123')) {
      const mockToken = 'mock_jwt_token_admin_2026';
      setToken(mockToken);
      localStorage.setItem('admin_token', mockToken);
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('admin_token');
    setIsAdmin(false);
  };

  // ---------------- PROJECTS CRUD ----------------
  const addProject = async (projData: Omit<ProjectItem, 'id'>) => {
    const newProj: ProjectItem = { ...projData, id: 'proj-' + Date.now() };
    setProjects(prev => {
      const updated = [newProj, ...prev];
      localStorage.setItem('portfolio_projects', JSON.stringify(updated));
      return updated;
    });
  };

  const updateProject = async (id: string, updatedData: Partial<ProjectItem>) => {
    setProjects(prev => {
      const updated = prev.map(p => (p.id === id || p._id === id ? { ...p, ...updatedData } : p));
      localStorage.setItem('portfolio_projects', JSON.stringify(updated));
      return updated;
    });
  };

  const deleteProject = async (id: string) => {
    setProjects(prev => {
      const updated = prev.filter(p => p.id !== id && p._id !== id);
      localStorage.setItem('portfolio_projects', JSON.stringify(updated));
      return updated;
    });
  };

  // ---------------- SKILLS CRUD ----------------
  const addSkill = async (skillData: Omit<SkillItem, 'id'>) => {
    const newSkill: SkillItem = { ...skillData, id: 'skill-' + Date.now() };
    setSkills(prev => {
      const updated = [...prev, newSkill];
      localStorage.setItem('portfolio_skills_v2', JSON.stringify(updated));
      return updated;
    });
  };

  const updateSkill = async (id: string, skillData: Partial<SkillItem>) => {
    setSkills(prev => {
      const updated = prev.map(s => (s.id === id || s._id === id ? { ...s, ...skillData } : s));
      localStorage.setItem('portfolio_skills_v2', JSON.stringify(updated));
      return updated;
    });
  };

  const deleteSkill = async (id: string) => {
    setSkills(prev => {
      const updated = prev.filter(s => s.id !== id && s._id !== id);
      localStorage.setItem('portfolio_skills_v2', JSON.stringify(updated));
      return updated;
    });
  };

  // ---------------- MESSAGES (SYNCED TO LOCALSTORAGE) ----------------
  const sendMessage = async (msgData: { name: string; email: string; subject: string; message: string }): Promise<boolean> => {
    const newMsg: ContactMessage = {
      ...msgData,
      id: 'msg-' + Date.now(),
      read: false,
      createdAt: new Date().toISOString()
    };
    setMessages(prev => {
      const updated = [newMsg, ...prev];
      localStorage.setItem('portfolio_messages', JSON.stringify(updated));
      return updated;
    });
    return true;
  };

  const deleteMessage = async (id: string) => {
    setMessages(prev => {
      const updated = prev.filter(m => m.id !== id && m._id !== id);
      localStorage.setItem('portfolio_messages', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <PortfolioContext.Provider
      value={{
        projects,
        skills,
        experiences,
        education,
        achievements,
        messages,
        token,
        isAdmin,
        isBackendConnected,
        isLoading,
        login,
        logout,
        resetSkillsToDefault,
        addProject,
        updateProject,
        deleteProject,
        addSkill,
        updateSkill,
        deleteSkill,
        sendMessage,
        deleteMessage
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) throw new Error('usePortfolio must be used within PortfolioProvider');
  return context;
};
