import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Layers,
  Search,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { TechLogo } from '../components/ui/TechLogos';

interface SkillEntry {
  name: string;
  category: 'Programming' | 'Data Analytics and Visualisation' | 'Databases' | 'DevOps & Cloud' | 'AI' | 'Problem Solver';
  level: string;
  desc?: string;
  badgeBg?: string;
}

const EXACT_SKILLS: SkillEntry[] = [
  // 1. Programming
  { name: 'Python', category: 'Programming', level: 'Advanced Core', badgeBg: 'from-blue-900/40 to-amber-900/40 border-blue-500/30' },
  { name: 'OOPS Concepts', category: 'Programming', level: 'Object-Oriented Design', badgeBg: 'from-purple-900/40 to-cyan-900/40 border-purple-500/30' },
  { name: 'Odoo ERP Framework', category: 'Programming', level: 'System Customization', badgeBg: 'from-purple-950/50 to-indigo-900/40 border-purple-400/40' },
  { name: 'Tailwind CSS', category: 'Programming', level: 'Modern Styling', badgeBg: 'from-cyan-950/50 to-blue-900/40 border-cyan-400/40' },

  // 2. Data Analytics and Visualisation
  { name: 'Pandas', category: 'Data Analytics and Visualisation', level: 'Data Manipulation', badgeBg: 'from-indigo-950/50 to-slate-900/40 border-indigo-500/30' },
  { name: 'Matplotlib', category: 'Data Analytics and Visualisation', level: 'Data Visualisation', badgeBg: 'from-blue-950/50 to-teal-900/40 border-blue-400/40' },

  // 3. Databases
  { name: 'MySQL', category: 'Databases', level: 'Relational Database', badgeBg: 'from-blue-950/50 to-orange-950/40 border-blue-500/30' },
  { name: 'MongoDB', category: 'Databases', level: 'NoSQL Document Store', badgeBg: 'from-emerald-950/50 to-green-900/40 border-emerald-500/40' },
  { name: 'PostgreSQL', category: 'Databases', level: 'Enterprise Relational', badgeBg: 'from-blue-950/50 to-indigo-900/40 border-indigo-400/40' },

  // 4. DevOps & Cloud
  { name: 'AWS (CLF-C02)', category: 'DevOps & Cloud', level: 'Certified Practitioner', badgeBg: 'from-amber-950/50 to-orange-900/40 border-amber-400/50' },
  { name: 'Git', category: 'DevOps & Cloud', level: 'Version Control', badgeBg: 'from-orange-950/50 to-red-900/40 border-orange-500/40' },
  { name: 'AWS S3', category: 'DevOps & Cloud', level: 'Cloud Storage', badgeBg: 'from-amber-950/50 to-orange-900/40 border-amber-400/40' },
  { name: 'AWS IAM', category: 'DevOps & Cloud', level: 'Cloud Identity & Access', badgeBg: 'from-amber-950/50 to-red-900/40 border-amber-500/40' },
  { name: 'CI/CD Pipelines', category: 'DevOps & Cloud', level: 'Automated Deployment', badgeBg: 'from-cyan-950/50 to-emerald-900/40 border-cyan-400/40' },
  { name: 'Docker', category: 'DevOps & Cloud', level: 'Containerization', badgeBg: 'from-blue-950/50 to-cyan-900/40 border-blue-400/50' },
  { name: 'GitHub', category: 'DevOps & Cloud', level: 'Code Hosting & Actions', badgeBg: 'from-slate-900/80 to-purple-950/50 border-purple-400/40' },

  // 5. AI
  {
    name: 'AI Core Concepts',
    category: 'AI',
    level: 'Algorithms & Models',
    desc: 'Good understanding of core Artificial Intelligence algorithms and model structures.',
    badgeBg: 'from-pink-950/50 to-purple-900/40 border-pink-400/40'
  },

  // 6. Problem Solver
  {
    name: 'Algorithmic Problem Solving',
    category: 'Problem Solver',
    level: 'Analytical Reasoning',
    desc: 'Deconstructing complex engineering challenges into efficient, scalable algorithmic solutions.',
    badgeBg: 'from-cyan-950/50 to-purple-900/40 border-cyan-400/40'
  },
  {
    name: 'System Optimization & Debugging',
    category: 'Problem Solver',
    level: 'Root Cause Analysis',
    desc: 'Diagnosing runtime bottlenecks and optimizing system memory and execution speed.',
    badgeBg: 'from-purple-950/50 to-pink-900/40 border-purple-400/40'
  }
];

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Programming',
    'Data Analytics and Visualisation',
    'Databases',
    'DevOps & Cloud',
    'AI',
    'Problem Solver'
  ];

  const filteredSkills = EXACT_SKILLS.filter((skill) => {
    const matchesCategory = activeCategory === 'All' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const groupedCategories = activeCategory === 'All'
    ? categories.filter(c => c !== 'All')
    : [activeCategory];

  return (
    <div className="min-h-screen pt-28 pb-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase flex items-center justify-center gap-2">
          <Layers className="w-4 h-4" />
          TECHNICAL COMPETENCY MATRIX
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-black text-slate-100 mt-3">
          SKILLS & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">CAPABILITIES</span>
        </h1>
        <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
          Focused technical competencies across Programming, Data Analytics, Databases, AWS Cloud DevOps, AI Algorithms, and Problem Solving.
        </p>
      </div>

      {/* Controls: Search & Category Tabs */}
      <div className="mt-12 space-y-6">
        {/* Search Bar */}
        <div className="max-w-md mx-auto relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skills (e.g., Python, AWS, Docker, Pandas)..."
            className="w-full pl-11 pr-4 py-3 rounded-full glass-panel border-white/10 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400/50 transition-colors"
          />
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-black font-bold shadow-[0_0_20px_rgba(0,240,255,0.4)] scale-105'
                  : 'glass-panel text-slate-400 hover:text-slate-200 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grouped Labeled Skill Category Sections with Dark Glowing Brand Badges */}
      <div className="mt-16 space-y-16">
        {groupedCategories.map((categoryGroup) => {
          const categoryItems = filteredSkills.filter(s => s.category === categoryGroup);
          if (categoryItems.length === 0) return null;

          return (
            <div key={categoryGroup} className="space-y-6">
              {/* Category Label Header */}
              <div className="flex items-center gap-3 border-b border-cyan-500/20 pb-3">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-100 tracking-wide">
                  {categoryGroup}
                </h2>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono font-bold">
                  {categoryItems.length} {categoryItems.length === 1 ? 'Skill' : 'Skills'}
                </span>
              </div>

              {/* Skills Cards Grid with Tech Brand Icon Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryItems.map((skill, idx) => (
                  <motion.div
                    key={skill.name + idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.03 }}
                    className="glass-panel glass-panel-hover p-6 rounded-2xl border-white/10 flex flex-col justify-between group relative overflow-hidden"
                  >
                    <div>
                      <div className="flex items-center gap-4">
                        {/* Dark Glowing Tech Brand Icon Badge Card */}
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.badgeBg || 'from-cyan-950/50 to-purple-950/50 border-cyan-500/30'} border flex items-center justify-center p-3 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all duration-300 shrink-0`}>
                          <TechLogo name={skill.name} className="w-8 h-8" />
                        </div>

                        <div>
                          <h3 className="font-display font-bold text-slate-100 text-lg group-hover:text-cyan-400 transition-colors">
                            {skill.name}
                          </h3>
                          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mt-0.5">
                            {skill.category}
                          </span>
                        </div>
                      </div>

                      {skill.desc && (
                        <p className="mt-4 text-xs font-mono text-slate-400 leading-relaxed">
                          {skill.desc}
                        </p>
                      )}
                    </div>

                    {/* Bottom Level Status (VERIFIED badge removed) */}
                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                      <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {skill.level}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
