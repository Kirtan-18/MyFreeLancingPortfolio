import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center px-4 relative overflow-hidden">
      <div className="text-center max-w-lg glass-panel p-10 rounded-3xl border-rose-500/40 relative z-10 shadow-[0_0_50px_rgba(244,63,94,0.2)]">
        <div className="w-16 h-16 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center border border-rose-500/40 mx-auto">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <h1 className="text-6xl font-display font-black text-slate-100 mt-6 tracking-widest">
          404 <span className="text-rose-500">ERROR</span>
        </h1>
        <p className="text-xs font-mono text-slate-400 mt-2">
          PAGE NOT FOUND
        </p>

        <p className="text-slate-300 text-xs sm:text-sm mt-4 leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            to="/"
            className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-display font-bold text-xs tracking-wider uppercase flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO HOME PAGE</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
