import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { PortfolioProvider } from './context/PortfolioContext';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import { Navbar } from './components/ui/Navbar';
import { Footer } from './components/ui/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { SplashIntro } from './components/ui/SplashIntro';
import { Terminal } from 'lucide-react';

// Code-Split Lazy Loaded Page Routes
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Skills = lazy(() => import('./pages/Skills').then(m => ({ default: m.Skills })));
const Projects = lazy(() => import('./pages/Projects').then(m => ({ default: m.Projects })));
const Achievements = lazy(() => import('./pages/Achievements').then(m => ({ default: m.Achievements })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard').then(m => ({ default: m.AdminDashboard })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-cyan-400">
    <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400 flex items-center justify-center animate-spin">
      <Terminal className="w-6 h-6 text-cyan-400" />
    </div>
    <span className="mt-4 font-mono text-xs text-slate-400 tracking-widest uppercase animate-pulse">
      LOADING CYBER MODULE...
    </span>
  </div>
);

export const App: React.FC = () => {
  // Initial Landing Intro Splash State
  const [hasBoomed, setHasBoomed] = useState<boolean>(() => {
    return sessionStorage.getItem('has_boomed_session') === 'true';
  });

  const handleEnterPortfolio = () => {
    setHasBoomed(true);
    sessionStorage.setItem('has_boomed_session', 'true');
  };

  return (
    <ErrorBoundary>
      <PortfolioProvider>
        {/* Initial Splash Intro "CLICK TO BOOM" Screen */}
        <AnimatePresence mode="wait">
          {!hasBoomed && (
            <SplashIntro key="splash" onEnter={handleEnterPortfolio} />
          )}
        </AnimatePresence>

        <Router>
          <div className="relative min-h-screen bg-[#050505] text-slate-100 selection:bg-cyan-500 selection:text-black overflow-x-hidden font-sans">
            {/* Cyberpunk Noise Texture Overlay */}
            <div className="fixed inset-0 bg-noise pointer-events-none z-30" />
            
            {/* Animated Background Glowing Blobs */}
            <div className="glow-blob top-10 left-10 w-[500px] h-[500px] bg-cyan-500/10" />
            <div className="glow-blob top-[40%] right-10 w-[600px] h-[600px] bg-purple-500/10" />
            <div className="glow-blob bottom-10 left-1/3 w-[550px] h-[550px] bg-pink-500/10" />

            {/* Glowing Cyber Custom Cursor */}
            <CustomCursor />

            {/* Navigation Bar */}
            <Navbar />

            {/* Main Route View with Code Splitting Suspense */}
            <main className="relative z-10">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/experience" element={<Navigate to="/skills" replace />} />
                  <Route path="/achievements" element={<Achievements />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>

            {/* Footer */}
            <Footer />
          </div>
        </Router>
      </PortfolioProvider>
    </ErrorBoundary>
  );
};

export default App;
