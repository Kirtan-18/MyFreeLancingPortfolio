import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Terminal,
  Github,
  Linkedin,
  Send,
  MessageSquare
} from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4"
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>DIRECT CONTACT & REACH OUT</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl font-display font-black text-slate-100"
        >
          GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">TOUCH</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed"
        >
          Connect directly via email, phone, WhatsApp, or developer social channels for project proposals and software roles.
        </motion.p>
      </div>

      {/* Direct Contact Cards Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Direct Email Card */}
        <a
          href="mailto:jkirtan25@gmail.com"
          className="glass-panel glass-panel-hover p-8 rounded-3xl border-cyan-500/30 flex items-center gap-5 group block shadow-[0_0_30px_rgba(0,240,255,0.1)] transition-all duration-300"
        >
          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
            <Mail className="w-7 h-7" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase block">
              DIRECT EMAIL
            </span>
            <span className="text-lg font-mono font-bold text-slate-100 group-hover:text-cyan-400 transition-colors block mt-0.5">
              jkirtan25@gmail.com
            </span>
            <span className="text-xs text-slate-500 font-mono block mt-1">
              Click to open mail client
            </span>
          </div>
        </a>

        {/* Direct Phone & WhatsApp Card */}
        <a
          href="tel:+918320788076"
          className="glass-panel glass-panel-hover p-8 rounded-3xl border-purple-500/30 flex items-center gap-5 group block shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all duration-300"
        >
          <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform shrink-0">
            <Phone className="w-7 h-7" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase block">
              DIRECT PHONE & WHATSAPP
            </span>
            <span className="text-lg font-mono font-bold text-slate-100 group-hover:text-purple-400 transition-colors block mt-0.5">
              +91 8320788076
            </span>
            <span className="text-xs text-slate-500 font-mono block mt-1">
              Call or message anytime
            </span>
          </div>
        </a>

        {/* GitHub Profile Card */}
        <a
          href="https://github.com/Kirtan-18"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-panel glass-panel-hover p-8 rounded-3xl border-white/10 flex items-center gap-5 group block transition-all duration-300"
        >
          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-200 group-hover:text-cyan-400 group-hover:border-cyan-400/50 group-hover:scale-110 transition-all shrink-0">
            <Github className="w-7 h-7" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase block">
              GITHUB REPOSITORIES
            </span>
            <span className="text-lg font-mono font-bold text-slate-100 group-hover:text-cyan-400 transition-colors block mt-0.5">
              @Kirtan-18
            </span>
            <span className="text-xs text-slate-500 font-mono block mt-1">
              Explore open-source projects
            </span>
          </div>
        </a>

        {/* LinkedIn Profile Card */}
        <a
          href="https://www.linkedin.com/in/kirtan-jani-8233602ab"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-panel glass-panel-hover p-8 rounded-3xl border-white/10 flex items-center gap-5 group block transition-all duration-300"
        >
          <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform shrink-0">
            <Linkedin className="w-7 h-7" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase block">
              LINKEDIN NETWORK
            </span>
            <span className="text-lg font-mono font-bold text-slate-100 group-hover:text-blue-400 transition-colors block mt-0.5">
              kirtan-jani
            </span>
            <span className="text-xs text-slate-500 font-mono block mt-1">
              Connect professionally
            </span>
          </div>
        </a>
      </motion.div>

      {/* Location Banner Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-panel p-8 rounded-3xl border-pink-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
      >
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0">
            <MapPin className="w-7 h-7" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase block">
              LOCATION & AVAILABILITY
            </span>
            <span className="text-base font-mono font-bold text-slate-100 mt-0.5 block">
              Gujarat, India • Global Remote & On-Site Roles
            </span>
          </div>
        </div>

        <a
          href="mailto:jkirtan25@gmail.com"
          className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-display font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] shrink-0"
        >
          <Send className="w-4 h-4" />
          <span>SEND EMAIL DIRECTLY</span>
        </a>
      </motion.div>
    </div>
  );
};
