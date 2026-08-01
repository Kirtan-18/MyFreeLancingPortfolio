import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Terminal,
  Zap,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { Hero3D } from '../components/3d/Hero3D';
import { ErrorBoundary } from '../components/ui/ErrorBoundary';
import { usePortfolio } from '../context/PortfolioContext';

const CyberFallbackHero = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
    <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-cyan-500 via-purple-600 to-pink-500 blur-[100px] opacity-35 animate-pulse-slow" />
  </div>
);

export const Home: React.FC = () => {
  const { projects } = usePortfolio();
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    'Programmer',
    'Data Analytics & Visualisation',
    'Database Handler',
    'DevOps & Cloud',
    'Artificial Intelligence / Machine Learning',
    'Problem Solver'
  ];

  useEffect(() => {
    const currentTitle = titles[typewriterIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTypewriterIndex((prev) => (prev + 1) % titles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentTitle.substring(0, displayText.length - 1)
            : currentTitle.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, typewriterIndex]);

  const featuredProjects = projects.slice(0, 3);

  const stats = [
    { label: 'Cloud & DevOps', value: 'AWS Certified', desc: 'CLF-C02 Practitioner' },
    { label: 'Hackathon Rank', value: '1st Place', desc: 'Cyber Shadez Winner' },
    { label: 'Graphics & Performance', value: '60 FPS', desc: 'WebGL 3D Engine' },
    { label: 'CI/CD Pipeline', value: '100% Automated', desc: 'Zero-Downtime Deploy' }
  ];

  const marqueeTech = [
    'Python',
    'AWS Cloud',
    'Docker',
    'GitHub Actions',
    'Odoo ERP',
    'Pandas',
    'Matplotlib',
    'MySQL',
    'MongoDB',
    'PostgreSQL',
    'Git & GitHub',
    'AI & ML Concepts',
    'Problem Solving',
    'CI/CD Pipelines'
  ];

  return (
    <div className="relative min-h-screen pt-20 overflow-x-hidden">
      {/* ---------------- HERO SECTION WITH 3D CANVAS ---------------- */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        {/* 3D WebGL Canvas Layer with ErrorBoundary Guard */}
        <ErrorBoundary fallback={<CyberFallbackHero />}>
          <Hero3D />
        </ErrorBoundary>

        {/* Ambient Dark Gradient Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505]/80 pointer-events-none z-10" />

        {/* Hero Foreground Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-cyan-500/30 text-xs font-mono text-cyan-400 mb-8 shadow-[0_0_20px_rgba(0,240,255,0.2)]"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            AVAILABLE FOR CLOUD, DEVOPS & SYSTEMS ENGINEERING ROLES
          </motion.div>

          {/* Name Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-slate-100 max-w-5xl leading-none"
          >
            KIRTAN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              JANI
            </span>
          </motion.h1>

          {/* Typewriter Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 h-12 flex items-center justify-center"
          >
            <span className="text-xl sm:text-3xl font-mono font-bold text-slate-300">
              {displayText}
              <span className="animate-pulse text-cyan-400">_</span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 max-w-2xl text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Specializing in Python programming, AWS Cloud & DevOps automation, Data Analytics (Pandas/Matplotlib), Database Handling (MySQL, MongoDB, PostgreSQL), and AI/ML core concepts.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/projects"
              className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-display font-bold text-sm tracking-wider uppercase flex items-center gap-3 transition-all duration-300 shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:shadow-[0_0_40px_rgba(0,240,255,0.7)] hover:scale-105"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                alert('Downloading Kirtan Jani Resume (PDF format)...');
              }}
              className="px-8 py-4 rounded-full glass-panel border-white/20 hover:border-cyan-500/40 text-slate-100 font-display font-semibold text-sm tracking-wider flex items-center gap-3 transition-all duration-300 hover:bg-white/5 hover:scale-105"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>DOWNLOAD RESUME</span>
            </a>

            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-purple-600/30 border border-purple-500/50 hover:bg-purple-600/50 text-purple-200 font-display font-semibold text-sm tracking-wider flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(112,0,255,0.3)]"
            >
              <Zap className="w-4 h-4 text-purple-400" />
              <span>GET IN TOUCH</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ---------------- INFINITE TECH MARQUEE ---------------- */}
      <section className="py-6 border-y border-white/10 bg-[#08080f] overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...marqueeTech, ...marqueeTech].map((tech, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-3 mx-8 text-sm font-mono tracking-widest text-slate-400 uppercase"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- ANIMATED STATS SECTION ---------------- */}
      <section className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border-white/10 relative overflow-hidden"
            >
              <div className="text-3xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-2">{stat.label}</div>
              <div className="text-xs text-slate-400 mt-1 font-mono">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- FEATURED PROJECTS SHOWCASE ---------------- */}
      <section className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              FEATURED ENGINEERING PROJECTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-100 mt-2">
              CRAFTED WITH PRECISION
            </h2>
          </div>
          <Link
            to="/projects"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>VIEW ALL PROJECTS</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between border-white/10 group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-80" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 backdrop-blur-md">
                    {proj.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-slate-400 text-xs mt-2 line-clamp-3 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {proj.technologies.slice(0, 4).map((tech, tIdx) => (
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
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- CTA BANNER ---------------- */}
      <section className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-10 sm:p-16 rounded-3xl border-cyan-500/30 text-center relative overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.15)]">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]" />

          <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-100">
            READY TO BUILD HIGH-PERFORMANCE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              SOFTWARE SYSTEMS?
            </span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-slate-400 text-sm sm:text-base">
            Whether you need Cloud & DevOps automation, Data Analytics, Database Handling, or AI/ML solutions, let's connect.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-display font-bold text-sm tracking-wider uppercase flex items-center gap-3 transition-all duration-300 shadow-[0_0_30px_rgba(0,240,255,0.5)] hover:scale-105"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
