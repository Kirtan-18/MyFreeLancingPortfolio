import React from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  Cpu,
  Cloud,
  ShieldCheck,
  Code2,
  CheckCircle2,
  Download,
  UserCheck
} from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Code2,
      title: 'Software Development',
      desc: 'Building high-performance backend microservices, robust Python systems, and scalable full-stack web applications.'
    },
    {
      icon: Cloud,
      title: 'AWS Cloud Systems',
      desc: 'Certified AWS Practitioner designing fault-tolerant Serverless, EC2, VPC, S3, and IAM cloud systems with automated deployment pipelines.'
    },
    {
      icon: ShieldCheck,
      title: 'DevOps & Containerization',
      desc: 'Streamlining automated CI/CD workflows with Docker, GitHub Actions, Git, and Cloud Automation.'
    },
    {
      icon: Cpu,
      title: 'Odoo ERP Ecosystem',
      desc: 'Hands-on Odoo ERP customization, Python module development, PostgreSQL ORM optimization, and workflow automation for enterprise systems.'
    }
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4"
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>DEVELOPER PROFILE & ARCHITECTURE</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl font-display font-black text-slate-100"
        >
          ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">KIRTAN JANI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed"
        >
          Software Developer & DevOps Specialist with proven expertise in building enterprise-grade software systems, automated CI/CD pipelines, containerized microservices, and customized Odoo ERP solutions.
        </motion.p>
      </div>

      {/* Profile Overview Section (Without Photo) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-panel p-8 sm:p-12 rounded-3xl border-cyan-500/30 shadow-[0_0_50px_rgba(0,240,255,0.1)] relative overflow-hidden"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-100">
                  Kirtan Jani
                </h2>
                <p className="text-xs font-mono text-cyan-400 font-semibold mt-0.5">
                  Software Developer & DevOps Specialist
                </p>
              </div>
            </div>
          </div>

          {/* Availability Badge */}
          <div className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-mono font-bold text-emerald-300">AVAILABLE FOR HIRE</span>
          </div>
        </div>

        {/* Bio Body */}
        <div className="mt-8 space-y-6">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-100">
            ENGINEERING AUTOMATED & RESILIENT SOFTWARE SYSTEMS
          </h3>

          <p className="text-slate-300 text-sm leading-relaxed font-sans">
            I specialize in Python programming, Software Development, AWS Cloud, Data Analytics, and automated pipelines that empower enterprise software systems. From setting up AWS EC2/Serverless deployments to extending business logic in Odoo ERP, my focus is on reliability, security, and continuous delivery.
          </p>

          {/* Quick Check Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2 font-mono text-xs text-slate-300">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Software Developer</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Cyber Shadez 1st Winner</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Docker & CI/CD Pipelines</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Odoo ERP Developer</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <a
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                alert('Downloading Kirtan Jani Resume (PDF format)...');
              }}
              className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-display font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)]"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Engineering Pillars */}
      <div>
        <h2 className="text-2xl sm:text-4xl font-display font-bold text-center text-slate-100 mb-12">
          CORE SOFTWARE PILLARS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-8 rounded-3xl border-white/10 hover:border-cyan-500/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-100 mt-4 group-hover:text-cyan-400 transition-colors">
                  {p.title}
                </h3>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed font-mono">
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
