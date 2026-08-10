import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Lock,
  LogOut,
  Plus,
  Trash2,
  CheckCircle2,
  BarChart2,
  Briefcase,
  Layers,
  ShieldCheck,
  Mail,
  Award,
  X,
  KeyRound,
  ShieldAlert
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const AdminDashboard: React.FC = () => {
  const {
    isAdmin,
    login,
    logout,
    projects,
    skills,
    experiences,
    achievements,
    messages,
    addProject,
    deleteProject,
    addSkill,
    deleteSkill,
    addExperience,
    deleteExperience,
    addAchievement,
    deleteAchievement,
    deleteMessage
  } = usePortfolio();

  // Login form state (clean empty defaults)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Active Tab: 'analytics' | 'projects' | 'skills' | 'experience' | 'achievements' | 'messages'
  const [activeTab, setActiveTab] = useState<'analytics' | 'projects' | 'skills' | 'experience' | 'achievements' | 'messages'>('analytics');

  // Modal forms
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);
  const [showAddSkillModal, setShowAddSkillModal] = useState(false);

  // New Project State
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    fullDescription: '',
    category: 'Cloud & DevOps',
    technologies: 'AWS S3, Docker, Python',
    features: 'Automated CI/CD, Containerized',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
    githubUrl: '#',
    liveDemoUrl: '#',
    featured: true,
    priority: 5
  });

  // New Skill State
  const [newSkill, setNewSkill] = useState({
    name: '',
    category: 'DevOps & Cloud' as any,
    proficiency: 90,
    level: 'Advanced Core',
    iconName: 'SiAmazonwebservices',
    yearsExperience: '2+ yrs'
  });

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    if (!username || !password) {
      setLoginError('Please enter both username and password.');
      return;
    }
    const success = await login(username, password);
    if (!success) {
      setLoginError('Authentication failed. Access denied for username/password combination.');
    }
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md glass-panel p-8 sm:p-10 rounded-3xl border-cyan-500/40 shadow-[0_0_60px_rgba(0,240,255,0.2)] bg-[#080812] relative overflow-hidden"
        >
          {/* Ambient Background Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-[80px]" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-[80px]" />

          <div className="text-center relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/40 mx-auto shadow-[0_0_20px_rgba(0,240,255,0.3)]">
              <KeyRound className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-display font-black text-slate-100 mt-4 tracking-wide">
              KIRTAN JANI <span className="text-cyan-400">ADMIN GATEWAY</span>
            </h1>
            <p className="text-xs text-slate-400 mt-1 font-mono tracking-widest uppercase">
              AUTHENTICATION REQUIRED TO ACCESS CONTROL PANEL
            </p>
          </div>

          {loginError && (
            <div className="mt-5 p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-mono text-center flex items-center justify-center gap-2">
              <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="mt-6 space-y-4 relative z-10">
            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">Username *</label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="w-full px-4 py-3 rounded-xl glass-panel border-white/10 text-slate-100 text-sm font-mono focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">Password *</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 rounded-xl glass-panel border-white/10 text-slate-100 text-sm font-mono focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-display font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:scale-[1.02]"
            >
              AUTHENTICATE & LOG IN
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Admin Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase flex items-center gap-2">
            <Lock className="w-3.5 h-3.5" />
            KIRTAN JANI AUTHENTICATED MANAGEMENT CONSOLE
          </span>
          <h1 className="text-3xl font-display font-bold text-slate-100 mt-1">
            PORTFOLIO ADMIN DASHBOARD
          </h1>
        </div>

        <button
          onClick={logout}
          className="px-4 py-2 rounded-full glass-panel border-rose-500/30 text-rose-400 text-xs font-mono hover:bg-rose-500/20 transition-all flex items-center gap-2"
        >
          <LogOut className="w-4 h-4" />
          <span>LOGOUT</span>
        </button>
      </div>

      {/* Analytics Overview Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <div className="glass-panel p-5 rounded-2xl border-cyan-500/30">
          <div className="flex items-center justify-between text-cyan-400">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-2xl font-bold font-display">{projects.length}</span>
          </div>
          <p className="text-xs font-mono text-slate-400 mt-2">TOTAL PROJECTS</p>
        </div>

        <div className="glass-panel p-5 rounded-2xl border-purple-500/30">
          <div className="flex items-center justify-between text-purple-400">
            <Layers className="w-5 h-5" />
            <span className="text-2xl font-bold font-display">{skills.length}</span>
          </div>
          <p className="text-xs font-mono text-slate-400 mt-2">SKILLS IN MATRIX</p>
        </div>

        <div className="glass-panel p-5 rounded-2xl border-emerald-500/30">
          <div className="flex items-center justify-between text-emerald-400">
            <Briefcase className="w-5 h-5" />
            <span className="text-2xl font-bold font-display">{experiences.length}</span>
          </div>
          <p className="text-xs font-mono text-slate-400 mt-2">CAREER ENTRIES</p>
        </div>

        <div className="glass-panel p-5 rounded-2xl border-pink-500/30">
          <div className="flex items-center justify-between text-pink-400">
            <Mail className="w-5 h-5" />
            <span className="text-2xl font-bold font-display">{messages.length}</span>
          </div>
          <p className="text-xs font-mono text-slate-400 mt-2">INCOMING MESSAGES</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-8 flex flex-wrap gap-2 border-b border-white/10 pb-4">
        {[
          { key: 'analytics', label: 'Analytics', icon: BarChart2 },
          { key: 'projects', label: 'Manage Projects', icon: ShieldCheck },
          { key: 'skills', label: 'Manage Skills', icon: Layers },
          { key: 'messages', label: `Messages (${messages.length})`, icon: Mail }
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider flex items-center gap-2 transition-all ${
                activeTab === tab.key
                  ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                  : 'glass-panel text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="mt-8">
        {/* 1. ANALYTICS TAB */}
        {activeTab === 'analytics' && (
          <div className="glass-panel p-8 rounded-3xl border-white/10 space-y-6">
            <h2 className="text-xl font-display font-bold text-slate-100 flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-cyan-400" />
              DASHBOARD METRICS & RECENT ACTIVITY
            </h2>
            <p className="text-xs text-slate-400 font-mono">
              Authenticated Session: ACTIVE. Instant optimistic UI CRUD operational across all sections.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-3">
                <span className="text-xs font-mono text-cyan-400 uppercase">Recent Messages</span>
                {messages.length === 0 ? (
                  <p className="text-xs text-slate-500">No messages in inbox.</p>
                ) : (
                  messages.slice(0, 3).map((m) => (
                    <div key={m.id} className="p-3 rounded-xl bg-black/40 text-xs space-y-1">
                      <div className="flex justify-between font-bold text-slate-200">
                        <span>{m.name}</span>
                        <span className="text-[10px] text-slate-500">{new Date(m.createdAt).toLocaleDateString()}</span>
                      </div>
                      <p className="text-slate-400 text-[11px] truncate">{m.message}</p>
                    </div>
                  ))
                )}
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-3">
                <span className="text-xs font-mono text-purple-400 uppercase">Quick Actions</span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={() => {
                      setActiveTab('projects');
                      setShowAddProjectModal(true);
                    }}
                    className="p-3 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30 font-mono flex items-center justify-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" /> Add Project
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('skills');
                      setShowAddSkillModal(true);
                    }}
                    className="p-3 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30 font-mono flex items-center justify-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" /> Add Skill
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. PROJECTS CRUD TAB */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-display font-bold text-slate-100">
                PROJECTS MANAGER ({projects.length})
              </h2>
              <button
                onClick={() => setShowAddProjectModal(true)}
                className="px-4 py-2 rounded-full bg-cyan-500 text-black font-mono font-bold text-xs flex items-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
              >
                <Plus className="w-4 h-4" /> ADD NEW PROJECT
              </button>
            </div>

            <div className="space-y-4">
              {projects.map((proj) => (
                <div
                  key={proj.id || proj._id}
                  className="glass-panel p-5 rounded-2xl border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <img src={proj.image} alt={proj.title} className="w-16 h-12 object-cover rounded-lg shrink-0" />
                    <div>
                      <h3 className="font-display font-bold text-slate-100 text-sm">{proj.title}</h3>
                      <span className="text-[10px] font-mono text-cyan-400">{proj.category}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => deleteProject(proj.id || proj._id!)}
                      className="p-2 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30 hover:bg-rose-500/40 text-xs font-mono flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. SKILLS CRUD TAB */}
        {activeTab === 'skills' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-display font-bold text-slate-100">
                SKILLS MANAGER ({skills.length})
              </h2>
              <button
                onClick={() => setShowAddSkillModal(true)}
                className="px-4 py-2 rounded-full bg-purple-600 text-white font-mono font-bold text-xs flex items-center gap-2 shadow-[0_0_15px_rgba(112,0,255,0.4)]"
              >
                <Plus className="w-4 h-4" /> ADD NEW SKILL
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.id || skill._id}
                  className="glass-panel p-4 rounded-2xl border-white/10 flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-display font-bold text-slate-100 text-sm">{skill.name}</h3>
                    <span className="text-[10px] font-mono text-slate-400">{skill.category}</span>
                  </div>

                  <button
                    onClick={() => deleteSkill(skill.id || skill._id!)}
                    className="p-2 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30 hover:bg-rose-500/40"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. MESSAGES TAB */}
        {activeTab === 'messages' && (
          <div className="space-y-6">
            <h2 className="text-xl font-display font-bold text-slate-100">
              INCOMING MESSAGES ({messages.length})
            </h2>

            {messages.length === 0 ? (
              <p className="text-slate-400 text-sm font-mono">Inbox is clear.</p>
            ) : (
              messages.map((msg) => (
                <div key={msg.id} className="glass-panel p-6 rounded-2xl border-white/10 space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <div>
                      <h3 className="font-display font-bold text-slate-100 text-base">{msg.name}</h3>
                      <p className="text-xs font-mono text-cyan-400">{msg.email}</p>
                    </div>
                    <button
                      onClick={() => deleteMessage(msg.id || msg._id!)}
                      className="p-2 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-mono flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Delete
                    </button>
                  </div>
                  <p className="text-xs font-mono text-purple-400">Subject: {msg.subject}</p>
                  <p className="text-sm text-slate-300 leading-relaxed bg-white/5 p-4 rounded-xl">{msg.message}</p>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* Add Project Modal */}
      {showAddProjectModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel p-8 rounded-3xl max-w-lg w-full border-cyan-500/40 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-slate-100 font-display">CREATE NEW PROJECT</h2>
              <button onClick={() => setShowAddProjectModal(false)}><X className="w-5 h-5 text-slate-400" /></button>
            </div>

            <input
              type="text"
              placeholder="Title"
              value={newProject.title}
              onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
              className="w-full p-3 rounded-xl glass-panel text-xs text-slate-100"
            />
            <input
              type="text"
              placeholder="Category"
              value={newProject.category}
              onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
              className="w-full p-3 rounded-xl glass-panel text-xs text-slate-100"
            />
            <textarea
              placeholder="Description"
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
              className="w-full p-3 rounded-xl glass-panel text-xs text-slate-100"
            />

            <button
              onClick={() => {
                addProject({
                  ...newProject,
                  technologies: newProject.technologies.split(',').map(s => s.trim()),
                  features: newProject.features.split(',').map(s => s.trim())
                });
                setShowAddProjectModal(false);
              }}
              className="w-full py-3 bg-cyan-500 text-black font-bold text-xs rounded-full font-mono"
            >
              SAVE PROJECT
            </button>
          </div>
        </div>
      )}

      {/* Add Skill Modal */}
      {showAddSkillModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel p-8 rounded-3xl max-w-lg w-full border-purple-500/40 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-slate-100 font-display">CREATE SKILL ENTRY</h2>
              <button onClick={() => setShowAddSkillModal(false)}><X className="w-5 h-5 text-slate-400" /></button>
            </div>

            <input
              type="text"
              placeholder="Skill Name (e.g. Kubernetes)"
              value={newSkill.name}
              onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
              className="w-full p-3 rounded-xl glass-panel text-xs text-slate-100"
            />

            <button
              onClick={() => {
                addSkill(newSkill);
                setShowAddSkillModal(false);
              }}
              className="w-full py-3 bg-purple-600 text-white font-bold text-xs rounded-full font-mono"
            >
              SAVE SKILL
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
