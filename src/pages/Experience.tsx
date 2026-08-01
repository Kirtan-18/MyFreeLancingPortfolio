import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Code2, CheckCircle } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Experience: React.FC = () => {
  const { experiences } = usePortfolio();

  return (
    <div className="min-h-screen pt-28 pb-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase flex items-center justify-center gap-2">
          <Briefcase className="w-4 h-4" />
          PROFESSIONAL EXPERIENCE
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-black text-slate-100 mt-3">
          CAREER <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">HISTORY</span>
        </h1>
        <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
          Track record in backend Python Odoo ERP development, PostgreSQL performance tuning, custom module creation, and automated software deployment.
        </p>
      </div>

      <div className="mt-16 max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id || idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-panel p-8 rounded-3xl border-cyan-500/30 relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                  {exp.type}
                </span>
                <h2 className="text-2xl font-display font-bold text-slate-100 mt-2">
                  {exp.role}
                </h2>
                <p className="text-slate-300 font-semibold text-sm mt-0.5">
                  {exp.company}
                </p>
              </div>

              <div className="flex flex-col md:items-end text-xs font-mono text-slate-400 space-y-1">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {exp.location}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-3">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                KEY RESPONSIBILITIES & DELIVERABLES
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-300">
                {exp.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold mt-1">•</span>
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <h3 className="text-xs font-mono text-purple-400 uppercase tracking-widest flex items-center gap-2 mb-3">
                <Code2 className="w-4 h-4" />
                TECHNOLOGIES UTILIZED
              </h3>
              <div className="flex flex-wrap gap-2">
                {exp.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
