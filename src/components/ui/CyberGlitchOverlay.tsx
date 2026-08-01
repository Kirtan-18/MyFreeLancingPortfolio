import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Terminal, Lock } from 'lucide-react';

interface CyberGlitchOverlayProps {
  isActive: boolean;
  onComplete: () => void;
}

export const CyberGlitchOverlay: React.FC<CyberGlitchOverlayProps> = ({ isActive, onComplete }) => {
  const [stepIndex, setStepIndex] = useState(0);

  const steps = [
    'INITIALIZING HYPERSECURE PROTOCOL...',
    'Decrypting Admin Vault Hashes [256-bit AES]...',
    'Accessing Control Center Neural Core...',
    'Authenticating Admin Credentials...'
  ];

  useEffect(() => {
    if (!isActive) {
      setStepIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setStepIndex((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return prev;
        }
      });
    }, 450);

    return () => clearInterval(interval);
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Cyberpunk Scanlines Layer */}
        <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />

        {/* RGB Glitch Distortion Waves */}
        <motion.div
          animate={{
            x: [0, -10, 10, -5, 5, 0],
            opacity: [0.8, 1, 0.6, 1]
          }}
          transition={{ duration: 0.3, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-600/20 to-pink-500/10 pointer-events-none"
        />

        {/* Particle Boom Ring */}
        <motion.div
          initial={{ scale: 0.2, opacity: 1 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-[400px] h-[400px] rounded-full border-4 border-cyan-400 shadow-[0_0_80px_#00F0FF] absolute"
        />

        <motion.div
          initial={{ scale: 0.1, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
          className="w-[300px] h-[300px] rounded-full border-4 border-purple-500 shadow-[0_0_80px_#7000FF] absolute"
        />

        {/* Central Decryption Terminal Window */}
        <div className="relative z-10 glass-panel p-8 sm:p-12 rounded-3xl border-cyan-400/50 max-w-lg w-full text-center space-y-6 shadow-[0_0_60px_rgba(0,240,255,0.3)]">
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-400/60 flex items-center justify-center text-cyan-400 mx-auto animate-pulse">
            <Lock className="w-8 h-8" />
          </div>

          <div>
            <h2 className="text-2xl font-display font-black tracking-wider text-slate-100 uppercase">
              DECRYPTION IN PROGRESS
            </h2>
            <p className="text-xs font-mono text-cyan-400 mt-1 animate-pulse">
              CONTROL CENTER GATEWAY UNLOCKED
            </p>
          </div>

          {/* Terminal Progress Messages */}
          <div className="bg-black/60 p-4 rounded-xl border border-white/10 font-mono text-xs text-left space-y-2">
            {steps.slice(0, stepIndex + 1).map((msg, i) => (
              <div key={i} className="flex items-center gap-2 text-cyan-300">
                <span className="text-purple-400">►</span>
                <span>{msg}</span>
              </div>
            ))}
          </div>

          {/* Loading Meter */}
          <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden border border-white/10">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: `${((stepIndex + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.4 }}
              className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_15px_#00F0FF]"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
