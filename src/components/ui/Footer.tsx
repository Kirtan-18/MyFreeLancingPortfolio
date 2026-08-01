import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone, ChevronUp, Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#050505] pt-16 pb-12 overflow-hidden z-20">
      {/* Glow Vignette Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-t from-cyan-500/10 to-transparent blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-surface-light border border-cyan-500/30 flex items-center justify-center font-display font-black text-sm text-cyan-400 group-hover:border-cyan-400 transition-colors">
                KJ
              </div>
              <span className="font-display font-bold text-xl text-slate-100 group-hover:text-cyan-400 transition-colors">
                KIRTAN <span className="text-cyan-400">JANI</span>
              </span>
            </Link>
            <p className="text-xs font-mono text-slate-400 max-w-sm leading-relaxed">
              AWS Cloud Engineer & DevOps Specialist crafting high-scale AWS Cloud Engineering, automated CI/CD pipelines, containerized microservices, and Odoo ERP systems.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Cpu className="w-4 h-4 animate-pulse" />
              <span>AWS CLOUD & DEVOPS PIPELINES READY FOR PRODUCTION</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-cyan-400 tracking-widest uppercase font-bold">
              PORTFOLIO SECTIONS
            </h4>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition-colors">
                  ► System Overview & About
                </Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-cyan-400 transition-colors">
                  ► Tech Stack & Skills
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-cyan-400 transition-colors">
                  ► AWS Cloud & DevOps Projects
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="hover:text-cyan-400 transition-colors">
                  ► Certifications & Awards
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-400 transition-colors">
                  ► Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-cyan-400 tracking-widest uppercase font-bold">
              DIRECT CONTACT & PROFILES
            </h4>
            <div className="space-y-2 font-mono text-xs text-slate-300">
              <a
                href="mailto:jkirtan25@gmail.com"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>jkirtan25@gmail.com</span>
              </a>
              <a
                href="tel:+918320788076"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <span>+91 8320788076</span>
              </a>
            </div>
            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/Kirtan-18"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl glass-panel flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/kirtan-jani-8233602ab"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl glass-panel flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:jkirtan25@gmail.com"
                className="w-9 h-9 rounded-xl glass-panel flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Scroll Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()}{' '}
            <span className="text-slate-200 font-bold">Kirtan Jani</span>. All rights reserved. AWS Cloud Engineer.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel hover:border-cyan-400/50 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>BACK TO TOP</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
