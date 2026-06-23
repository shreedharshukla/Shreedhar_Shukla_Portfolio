import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  activeSection: string;
}

export default function Navbar({ isDark, toggleTheme, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll height to calculate scroll progress & apply glass styling
  useEffect(() => {
    const handleScroll = () => {
      // Glass threshold
      setScrolled(window.scrollY > 15);

      // Scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height offset
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 print:hidden ${
      scrolled 
        ? isDark 
          ? 'bg-neutral-950/80 backdrop-blur-md border-b border-neutral-900 shadow-lg' 
          : 'bg-white/80 backdrop-blur-md border-b border-neutral-100 shadow-sm'
        : 'bg-transparent border-b border-transparent'
    }`}>
      {/* Scroll Progress Indicator */}
      <div 
        className="h-[3px] bg-cyan-500 absolute bottom-0 left-0 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Brand / Human Literal Label */}
          <button 
            onClick={() => handleNavClick('home')}
            className={`font-display text-lg font-bold tracking-tight cursor-pointer ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
          >
            S.S. <span className="font-light text-neutral-500">Portfolio</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium cursor-pointer tracking-wide rounded-full transition-all duration-250 ${
                    isActive
                      ? isDark 
                        ? 'text-white bg-neutral-905' 
                        : 'text-neutral-950 bg-neutral-100'
                      : isDark
                        ? 'text-neutral-400 hover:text-white'
                        : 'text-neutral-605 hover:text-neutral-950'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeBubble"
                      className={`absolute inset-0 rounded-full -z-10 ${
                        isDark ? 'bg-neutral-900 border border-neutral-800' : 'bg-neutral-150 border border-neutral-200'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Utility Right Controls */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full cursor-pointer transition-colors border ${
                isDark 
                  ? 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white' 
                  : 'bg-neutral-50 border-neutral-200 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
              }`}
              aria-label="Toggle Light/Dark Theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-full cursor-pointer transition-all ${
                isDark 
                  ? 'bg-white text-neutral-950 hover:bg-neutral-200' 
                  : 'bg-neutral-950 text-white hover:bg-neutral-800'
              }`}
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className={`p-1.5 rounded-full border transition-colors ${
                isDark 
                  ? 'bg-neutral-900 border-neutral-800 text-neutral-300' 
                  : 'bg-neutral-100 border-neutral-200 text-neutral-600'
              }`}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-1.5 rounded-full border transition-colors ${
                isDark 
                  ? 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white' 
                  : 'bg-neutral-100 border-neutral-200 text-neutral-650 hover:text-neutral-950'
              }`}
              aria-label="Main menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide-Over Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className={`border-b md:hidden ${
              isDark 
                ? 'bg-neutral-950 border-neutral-900 text-neutral-200' 
                : 'bg-white border-neutral-200 text-neutral-800'
            }`}
          >
            <nav className="p-4 space-y-2 flex flex-col">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                      isActive
                        ? isDark 
                          ? 'bg-neutral-900 text-white font-semibold' 
                          : 'bg-neutral-100 text-neutral-950 font-semibold'
                        : isDark
                          ? 'text-neutral-400 hover:text-neutral-200'
                          : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <button
                onClick={() => handleNavClick('contact')}
                className={`w-full mt-2 flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-lg transition-all ${
                  isDark 
                    ? 'bg-white text-neutral-950 hover:bg-neutral-200' 
                    : 'bg-neutral-950 text-white hover:bg-neutral-800'
                }`}
              >
                <span>Hire Shreedhar</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
