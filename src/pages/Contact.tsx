import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Terminal,
  Github,
  Linkedin
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Contact: React.FC = () => {
  const { sendMessage } = usePortfolio();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry / Project Proposal',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    try {
      const ok = await sendMessage(formData);
      if (ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: 'General Inquiry / Project Proposal',
          message: ''
        });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4"
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>START A PROJECT OR GET IN TOUCH</span>
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
          Have a question or want to build a custom application or cloud infrastructure? Reach out directly below.
        </motion.p>
      </div>

      {/* Main Grid: Direct Contact Cards (Left) + Contact Form (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Direct Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Email Direct Card */}
          <a
            href="mailto:jkirtan25@gmail.com"
            className="glass-panel p-6 rounded-2xl border-white/10 hover:border-cyan-500/50 flex items-center gap-4 transition-all duration-300 group block"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase block">
                DIRECT EMAIL
              </span>
              <span className="text-base font-mono font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                jkirtan25@gmail.com
              </span>
            </div>
          </a>

          {/* Phone Direct Card */}
          <a
            href="tel:+918320788076"
            className="glass-panel p-6 rounded-2xl border-white/10 hover:border-cyan-500/50 flex items-center gap-4 transition-all duration-300 group block"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase block">
                DIRECT PHONE & WHATSAPP
              </span>
              <span className="text-base font-mono font-bold text-slate-100 group-hover:text-purple-400 transition-colors">
                +91 8320788076
              </span>
            </div>
          </a>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-2 gap-4">
            <a
              href="https://github.com/Kirtan-18"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-4 rounded-2xl border-white/10 hover:border-cyan-500/50 flex items-center gap-3 transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-slate-300 group-hover:text-cyan-400">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase block">GITHUB</span>
                <span className="text-xs font-mono font-bold text-slate-200 group-hover:text-cyan-400">@Kirtan-18</span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/kirtan-jani-8233602ab"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-4 rounded-2xl border-white/10 hover:border-cyan-500/50 flex items-center gap-3 transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-slate-300 group-hover:text-cyan-400">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase block">LINKEDIN</span>
                <span className="text-xs font-mono font-bold text-slate-200 group-hover:text-cyan-400">kirtan-jani</span>
              </div>
            </a>
          </div>

          {/* Location Card */}
          <div className="glass-panel p-6 rounded-2xl border-white/10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase block">
                LOCATION
              </span>
              <span className="text-base font-mono font-bold text-slate-100">
                Gujarat, India (Global Remote / On-Site)
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border-cyan-500/30 shadow-[0_0_50px_rgba(0,240,255,0.1)] relative"
        >
          <h3 className="text-xl font-display font-bold text-slate-100 mb-6">
            SEND A DIRECT MESSAGE
          </h3>

          {status === 'success' ? (
            <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h4 className="font-display font-bold text-xl text-slate-100">MESSAGE RECEIVED!</h4>
              <p className="text-xs font-mono text-slate-300">
                Thank you for reaching out, Kirtan Jani will review your inquiry and get back to you shortly.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-4 px-6 py-2.5 rounded-full bg-emerald-500 text-black font-mono font-bold text-xs uppercase"
              >
                SEND ANOTHER MESSAGE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-slate-100 font-mono text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                    YOUR EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-slate-100 font-mono text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                  INQUIRY CATEGORY / SUBJECT
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0a12] border border-white/10 text-slate-200 font-mono text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  <option value="General Inquiry / Project Proposal">
                    General Inquiry / Project Proposal
                  </option>
                  <option value="Custom Web Application & Platform Development">
                    Custom Full-Scale Web System & App Development
                  </option>
                  <option value="DevOps & AWS CI/CD Pipeline Setup">
                    AWS Cloud Architecture & DevOps CI/CD Setup
                  </option>
                  <option value="ERP Making, Customization and Deployment">
                    ERP Making, Customization and Deployment
                  </option>
                  <option value="Update for DevOps, Cloud Computing Role">
                    Update for DevOps, Cloud Computing Role
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                  PROJECT DETAILS & MESSAGE *
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your requirements or project vision..."
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-slate-100 font-mono text-xs focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Failed to send message. Please try again or email directly.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-display font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-3 transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)] disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  <span>TRANSMITTING MESSAGE...</span>
                ) : (
                  <>
                    <span>SUBMIT INQUIRY</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};
