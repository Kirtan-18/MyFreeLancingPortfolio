import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface HolographicOrbProps {
  onClick: () => void;
}

export const HolographicOrb: React.FC<HolographicOrbProps> = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative group">
      {/* Hover Prompt Badge: ⚡ CLICK TO BOOM */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? -45 : 10,
          scale: isHovered ? 1 : 0.9
        }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-full left-1/2 -translate-x-1/2 px-3.5 py-1.5 rounded-full glass-panel border-cyan-400/60 bg-black/90 text-cyan-300 text-[10px] font-mono font-black tracking-widest uppercase pointer-events-none whitespace-nowrap shadow-[0_0_20px_#00F0FF]"
      >
        <span className="animate-pulse">⚡ CLICK TO BOOM</span>
      </motion.div>

      {/* Holographic Glowing Cyber Orb */}
      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-12 h-12 rounded-full flex items-center justify-center focus:outline-none group"
        aria-label="Admin Control Center Gateway"
      >
        {/* Outer Pulsing Aura */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 via-purple-600 to-pink-500 blur-md opacity-60 group-hover:opacity-100 group-hover:blur-lg transition-all duration-300 animate-pulse-slow" />

        {/* Rotating Holographic Ring */}
        <div className="absolute inset-[-4px] rounded-full border border-cyan-400/50 group-hover:border-purple-400 animate-spin-slow" />

        {/* Glass Orb Sphere Core */}
        <div className="relative w-10 h-10 rounded-full bg-surface-light/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-cyan-400 shadow-[inset_0_0_15px_rgba(0,240,255,0.4)] group-hover:scale-110 transition-transform">
          <Zap className="w-5 h-5 text-cyan-400 group-hover:text-purple-300 transition-colors" />
        </div>
      </button>
    </div>
  );
};
