import React, { createContext, useContext, useState } from 'react';
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

interface PortfolioContextType {
  projects: ProjectItem[];
  skills: SkillItem[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  achievements: AchievementItem[];
  sendMessage: (msg: { name: string; email: string; subject: string; message: string }) => Promise<boolean>;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects] = useState<ProjectItem[]>(INITIAL_PROJECTS);
  const [skills] = useState<SkillItem[]>(INITIAL_SKILLS);
  const [experiences] = useState<ExperienceItem[]>(INITIAL_EXPERIENCE);
  const [education] = useState<EducationItem[]>(INITIAL_EDUCATION);
  const [achievements] = useState<AchievementItem[]>(INITIAL_ACHIEVEMENTS);

  const sendMessage = async (msgData: { name: string; email: string; subject: string; message: string }): Promise<boolean> => {
    // Static client inquiry confirmation
    console.log('Contact Inquiry Received:', msgData);
    return true;
  };

  return (
    <PortfolioContext.Provider
      value={{
        projects,
        skills,
        experiences,
        education,
        achievements,
        sendMessage
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
