/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Import modular layouts
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import { PERSONAL_INFO } from './data';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Trigger dark class on document root
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Monitor scroll for active section index and back to top pointer
  useEffect(() => {
    const handleScroll = () => {
      // Toggle back to top
      setShowScrollTop(window.scrollY > 400);

      // Section tracking
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 120; // safe cushion offset

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            // Keep achievements mapping clean
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticking header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Intro compile system load */}
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className={`min-h-screen font-sans transition-all duration-300 ${
        isDark ? 'bg-neutral-950 text-neutral-100' : 'bg-neutral-50 text-neutral-800'
      }`}>
        
        {/* Modern glassmorphism toolbar */}
        <Navbar 
          isDark={isDark} 
          toggleTheme={() => setIsDark(!isDark)} 
          activeSection={activeSection} 
        />

        {/* Global Page Layout Wrapper */}
        <main className="relative z-10 overflow-hidden">
          {/* Cybernetic Future Backdrop Canvas */}
          <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
            {/* Soft grid cells */}
            <div className={`absolute inset-0 transition-opacity duration-350 ${isDark ? 'cyber-grid opacity-100' : 'cyber-grid-light opacity-100'}`} />

            {/* Glowing background plasma coordinates */}
            <div className="absolute top-[5%] left-[10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-cyan-500/8 dark:bg-cyan-500/12 blur-[120px] animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />
            <div className="absolute top-[25%] right-[5%] w-[400px] sm:w-[550px] h-[400px] sm:h-[550px] rounded-full bg-purple-500/8 dark:bg-purple-500/8 blur-[130px] animate-pulse pointer-events-none" style={{ animationDuration: '11s' }} />
            <div className="absolute top-[55%] left-[5%] w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full bg-emerald-500/4 dark:bg-emerald-500/4 blur-[140px] animate-pulse pointer-events-none" style={{ animationDuration: '14s' }} />
            <div className="absolute bottom-[10%] right-[10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-cyan-500/6 dark:bg-cyan-500/10 blur-[120px] animate-pulse pointer-events-none" style={{ animationDuration: '9s' }} />
          </div>
          
          <Hero 
            isDark={isDark} 
            onViewProjects={() => handleScrollToSection('projects')}
            onContactMe={() => handleScrollToSection('contact')}
            onViewResume={() => handleScrollToSection('resume-section')}
          />

          <About isDark={isDark} />

          <Experience isDark={isDark} />

          <Projects isDark={isDark} />

          <Skills isDark={isDark} />

          <Achievements isDark={isDark} />

          <Resume isDark={isDark} />

          <Contact isDark={isDark} />

        </main>

        {/* Professional Footer */}
        <footer className={`py-12 border-t print:hidden ${
          isDark ? 'bg-neutral-950 border-neutral-900 text-neutral-400' : 'bg-white border-neutral-200 text-neutral-605'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-700/10">
              
              <div className="text-center md:text-left">
                <span className={`font-display text-base font-bold tracking-tight uppercase ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                  Shreedhar Shukla
                </span>
                <p className="text-[11px] font-mono mt-1 text-neutral-500">
                  Analytics • Product • Machine Learning
                </p>
              </div>

              {/* Dynamic scroll anchor links */}
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold">
                <button onClick={() => handleScrollToSection('home')} className="hover:text-cyan-505 dark:hover:text-cyan-400 cursor-pointer">Local</button>
                <button onClick={() => handleScrollToSection('about')} className="hover:text-cyan-505 dark:hover:text-cyan-400 cursor-pointer">Education</button>
                <button onClick={() => handleScrollToSection('experience')} className="hover:text-cyan-505 dark:hover:text-cyan-400 cursor-pointer font-sans">Experience</button>
                <button onClick={() => handleScrollToSection('projects')} className="hover:text-cyan-505 dark:hover:text-cyan-400 cursor-pointer font-sans">Case Studies</button>
                <button onClick={() => handleScrollToSection('contact')} className="hover:text-cyan-505 dark:hover:text-cyan-400 cursor-pointer font-sans">Query</button>
              </div>

              {/* Social Channels bottom */}
              <div className="flex items-center gap-4">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 transition-colors">
                  <Github className="w-4 h-4" />
                </a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-cyan-500 transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
              </div>

            </div>

            {/* Bottom Credits copy line */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[11px] font-mono text-neutral-500">
              <p>&copy; 2026 Shreedhar Shukla. All rights reserved.</p>
              <p className="mt-2 sm:mt-0">
                Built with React + TypeScript + Tailwind CSS
              </p>
            </div>
          </div>
        </footer>

        {/* Back to top fixed button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={handleScrollToTop}
              className={`fixed bottom-6 right-6 p-2.5 sm:p-3 rounded-full z-45 cursor-pointer border transition-colors shadow-lg ${
                isDark 
                  ? 'bg-neutral-900 border-neutral-800 text-neutral-350 hover:bg-neutral-800 hover:text-white dark:shadow-black/60' 
                  : 'bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50 hover:text-neutral-950 shadow-neutral-200/50'
              }`}
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          )}
        </AnimatePresence>

      </div>
    </>
  );
}
