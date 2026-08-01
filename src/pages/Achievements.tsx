import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Trophy, Flame, Users } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Achievements: React.FC = () => {
  const { achievements } = usePortfolio();

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Certification':
        return ShieldCheck;
      case 'Winner':
        return Trophy;
      case 'Hackathon':
        return Flame;
      default:
        return Users;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Certification':
        return 'text-cyan-400 border-cyan-500/40 bg-cyan-500/10';
      case 'Winner':
        return 'text-amber-400 border-amber-500/40 bg-amber-500/10';
      case 'Hackathon':
        return 'text-purple-400 border-purple-500/40 bg-purple-500/10';
      default:
        return 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10';
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase flex items-center justify-center gap-2">
          <Award className="w-4 h-4" />
          HONORS & CREDENTIALS
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-black text-slate-100 mt-3">
          ACHIEVEMENTS & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">CERTIFICATIONS</span>
        </h1>
        <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
          AWS certifications, national hackathon victories, and technical leadership recognition.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((ach, idx) => {
          const Icon = getCategoryIcon(ach.category);
          const colorClass = getCategoryColor(ach.category);

          return (
            <motion.div
              key={ach.id || idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel glass-panel-hover p-8 rounded-3xl border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${colorClass}`}>
                    {ach.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{ach.date}</span>
                </div>

                <div className="flex items-start gap-4 mt-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${colorClass}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-display font-bold text-slate-100">
                      {ach.title}
                    </h2>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      Issued by {ach.issuer}
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm mt-4 leading-relaxed">
                  {ach.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
