import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Sparkles, Terminal, ShieldCheck } from 'lucide-react';
import { CyberGlitchOverlay } from './CyberGlitchOverlay';

interface SplashIntroProps {
  onEnter: () => void;
}

export const SplashIntro: React.FC<SplashIntroProps> = ({ onEnter }) => {
  const [isBooming, setIsBooming] = useState(false);

  const handleBoomClick = () => {
    setIsBooming(true);
  };

  const handleBoomComplete = () => {
    setIsBooming(false);
    onEnter();
  };

  return (
    <>
      {/* Glitch Particle Explosive Overlay when Clicked */}
      <CyberGlitchOverlay isActive={isBooming} onComplete={handleBoomComplete} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-50 bg-[#030308] flex flex-col items-center justify-center p-4 overflow-hidden select-none"
      >
        {/* Background Glowing Ambient Aura Orbs */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-600/20 to-pink-500/20 blur-[120px] animate-pulse-slow pointer-events-none" />
        
        {/* Subtle Cyber Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        {/* Content Box */}
        <div className="relative z-10 max-w-xl text-center flex flex-col items-center">
          {/* Badge Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-cyan-500/30 text-xs font-mono text-cyan-400 mb-6 shadow-[0_0_20px_rgba(0,240,255,0.2)]"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>SYSTEM INITIALIZATION READY</span>
          </motion.div>

          {/* Name & Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="font-display font-black text-4xl sm:text-6xl text-slate-100 tracking-tight"
          >
            KIRTAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">JANI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-3 text-xs sm:text-sm font-mono text-slate-400 tracking-widest uppercase"
          >
            SOFTWARE DEVELOPER & DEVOPS SPECIALIST
          </motion.p>

          {/* Epic Centered "CLICK TO BOOM" Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 group relative"
          >
            {/* Outer Glowing Ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-80 blur group-hover:opacity-100 transition duration-300 animate-gradient-x" />

            <button
              onClick={handleBoomClick}
              className="relative px-10 py-5 rounded-full bg-[#080812] border border-cyan-400/60 hover:border-cyan-300 text-slate-100 font-display font-black text-base sm:text-lg tracking-wider uppercase flex items-center gap-3 transition-all duration-300 shadow-[0_0_30px_rgba(0,240,255,0.4)] group-hover:shadow-[0_0_50px_rgba(0,240,255,0.8)] group-hover:scale-105 active:scale-95"
            >
              <Zap className="w-5 h-5 text-cyan-400 animate-bounce" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-300">
                CLICK TO BOOM
              </span>
              <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
            </button>
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 text-[11px] font-mono text-slate-500 tracking-widest uppercase flex items-center gap-2"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>PRESS TO UNLOCK 3D PORTFOLIO ENVIRONMENT</span>
          </motion.span>
        </div>
      </motion.div>
    </>
  );
};
