import { Mail, Linkedin, Github, FileText, ArrowRight, CornerDownRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';

interface HeroProps {
  isDark: boolean;
  onViewProjects: () => void;
  onContactMe: () => void;
  onViewResume: () => void;
}

export default function Hero({ isDark, onViewProjects, onContactMe, onViewResume }: HeroProps) {
  // Stagger parameters for entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 100, damping: 15 } 
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      {/* Background elegant gradient blurs */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-cyan-500/10 dark:bg-cyan-500/8 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 translate-x-1/2 w-96 h-96 rounded-full bg-purple-500/10 dark:bg-purple-500/6 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl space-y-6"
        >
          {/* Main Info */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-full border bg-neutral-90/50 px-3/0.3 dark:bg-neutral-900/40 font-medium text-cyan-600 dark:text-cyan-400 border-cyan-500/20 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.08)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500 animate-pulse" />
            <span>Available for Summer Internships & Full-Time Roles</span>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3">
            <h1 className={`font-display text-4xl sm:text-5xl md:text-7.5xl font-extrabold tracking-tight leading-tight ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>
              Hi, I'm{' '}
              <span className={`inline-block transition-all duration-350 ${
                isDark 
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-500 drop-shadow-[0_0_20px_rgba(6,182,212,0.35)]' 
                  : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-700'
              }`}>
                {PERSONAL_INFO.name}
              </span>
            </h1>
            <p className={`font-display text-xl sm:text-2xl font-semibold tracking-wide ${
              isDark ? 'text-teal-400' : 'text-cyan-600'
            }`}>
              {PERSONAL_INFO.title}
            </p>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className={`text-sm sm:text-base leading-relaxed max-w-3xl font-sans tracking-wide ${
              isDark ? 'text-neutral-300' : 'text-neutral-600'
            }`}
          >
            {PERSONAL_INFO.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-3">
            <button
              onClick={onViewProjects}
              className="flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold rounded-full cursor-pointer transition-all duration-300 shadow-lg bg-cyan-500 hover:bg-cyan-600 text-white shadow-cyan-500/20 hover:shadow-cyan-400/40 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>Explore Works</span>
              <ArrowRight className="w-4 h-4 animate-pulse" />
            </button>
            <button
              onClick={onViewResume}
              className={`flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold rounded-full cursor-pointer transition-all duration-300 border ${
                isDark 
                  ? 'bg-neutral-900/80 backdrop-blur-md border-neutral-800 text-neutral-305 hover:text-white hover:bg-neutral-850 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:scale-[1.03] active:scale-[0.98]' 
                  : 'bg-white/80 backdrop-blur-md border-neutral-250 text-neutral-700 hover:bg-neutral-50 shadow-sm hover:border-cyan-500/30 hover:scale-[1.03] active:scale-[0.98]'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Interactive Resume</span>
            </button>
            <button
              onClick={onContactMe}
              className={`flex items-center gap-1.5 px-4.5 py-2 text-xs font-semibold cursor-pointer transition-all duration-300 ${
                isDark ? 'text-neutral-400 hover:text-cyan-400 font-medium hover:translate-x-1' : 'text-neutral-650 hover:text-cyan-600 font-medium hover:translate-x-1'
              }`}
            >
              <span>Contact Me</span>
              <CornerDownRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

          {/* Social Channels Row */}
          <motion.div variants={itemVariants} className="flex items-center gap-4.5 pt-6">
            <span className={`text-xs font-mono tracking-wider ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>CONNECT DIRECTORY:</span>
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-full border cursor-pointer transition-all duration-300 ${
                  isDark 
                    ? 'bg-neutral-900/80 backdrop-blur-sm border-neutral-800 hover:border-cyan-500/40 hover:shadow-[0_0_12px_rgba(6,182,212,0.2)] hover:text-white hover:scale-110' 
                    : 'bg-neutral-50 border-neutral-200 hover:border-cyan-500/40 hover:text-cyan-600 hover:scale-110'
                }`}
                aria-label="GitHub Link"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-full border cursor-pointer transition-all duration-300 ${
                  isDark 
                    ? 'bg-neutral-900/80 backdrop-blur-sm border-neutral-800 hover:border-cyan-500/40 hover:shadow-[0_0_12px_rgba(6,182,212,0.2)] hover:text-white hover:scale-110' 
                    : 'bg-neutral-50 border-neutral-200 hover:border-cyan-500/40 hover:text-cyan-650 hover:scale-110'
                }`}
                aria-label="LinkedIn Link"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className={`p-2.5 rounded-full border cursor-pointer transition-all duration-300 ${
                  isDark 
                    ? 'bg-neutral-900/80 backdrop-blur-sm border-neutral-800 hover:border-cyan-500/40 hover:shadow-[0_0_12px_rgba(6,182,212,0.2)] hover:text-white hover:scale-110' 
                    : 'bg-neutral-50 border-neutral-200 hover:border-cyan-500/40 hover:text-cyan-650 hover:scale-110'
                }`}
                aria-label="Email Link"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
