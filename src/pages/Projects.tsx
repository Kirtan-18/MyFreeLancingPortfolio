import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Search,
  X,
  Sparkles,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { ProjectItem } from '../data/initialData';

export const Projects: React.FC = () => {
  const { projects } = usePortfolio();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Cloud & DevOps', 'Enterprise Systems', 'Data & AI'];

  const filteredProjects = projects.filter((proj) => {
    const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-28 pb-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4" />
          ENGINEERING PORTFOLIO
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-black text-slate-100 mt-3">
          FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">PROJECTS</span>
        </h1>
        <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
          Production-grade applications built with AWS Cloud Infrastructure, Docker containerization, Odoo Enterprise ERP modules, and Data Analytics platforms.
        </p>
      </div>

      {/* Filter Tabs & Search */}
      <div className="mt-12 space-y-6">
        <div className="max-w-md mx-auto relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by name, tech (AWS, Docker, Odoo, Python)..."
            className="w-full pl-11 pr-4 py-3 rounded-full glass-panel border-white/10 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400/50 transition-colors"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-black font-bold shadow-[0_0_20px_rgba(0,240,255,0.4)] scale-105'
                  : 'glass-panel text-slate-400 hover:text-slate-200 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Cards Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((proj, idx) => (
          <motion.div
            key={proj.id || idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between border-white/10 group"
          >
            <div>
              <div className="relative h-52 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-90" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 backdrop-blur-md">
                  {proj.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed line-clamp-3">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {proj.technologies.slice(0, 5).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => setActiveModalProject(proj)}
                className="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-cyan-500/10 hover:border-cyan-500/40 text-xs font-mono text-cyan-400 font-bold transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                VIEW FULL DETAILS
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detailed Project Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-3xl glass-panel p-6 sm:p-8 rounded-3xl border-cyan-500/40 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full glass-panel text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-60 rounded-2xl overflow-hidden mb-6">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                  {activeModalProject.category}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-100">
                {activeModalProject.title}
              </h2>

              <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                {activeModalProject.description}
              </p>

              <div className="mt-6">
                <h3 className="text-sm font-mono text-purple-400 uppercase tracking-widest flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  TECHNOLOGY STACK
                </h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  {activeModalProject.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
