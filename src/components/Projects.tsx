import { useState } from 'react';
import { Github, ExternalLink, SlidersHorizontal, Terminal, Info, X, Zap, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import { Project } from '../types';

interface ProjectsProps {
  isDark: boolean;
}

export default function Projects({ isDark }: ProjectsProps) {
  const [filter, setFilter] = useState<'all' | 'ml-ai' | 'analytics' | 'product'>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'ml-ai', label: 'ML & AI' },
    { value: 'analytics', label: 'Data & Analytics' },
    { value: 'product', label: 'Product & Automation' }
  ];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === 'all') return true;
    return proj.category === filter;
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-mono text-xs text-cyan-500 uppercase tracking-widest">PORTFOLIO CASE STUDIES</p>
            <h2 className={`font-display text-3xl font-bold tracking-tight mt-1 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
              Featured Engineering Projects
            </h2>
            <div className="h-1 w-12 bg-cyan-500 mt-2 rounded" />
          </div>

          {/* Filtering Tabs Row */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-full border bg-neutral-90 px-3/15 dark:bg-neutral-900/30 border-neutral-700/10">
            {categories.map((cat) => {
              const isActive = filter === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setFilter(cat.value as any)}
                  className={`px-3.5 py-1.5 rounded-full cursor-pointer text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'bg-cyan-500 text-white shadow-sm'
                      : isDark
                        ? 'text-neutral-400 hover:text-white'
                        : 'text-neutral-600 hover:text-neutral-950'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className={`flex flex-col justify-between p-6 rounded-2xl border transition-all h-full relative group duration-300 ${
                  isDark 
                    ? 'bg-neutral-900/60 backdrop-blur-md border-neutral-800/80 hover:bg-neutral-900/90 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]' 
                    : 'bg-white/90 backdrop-blur-md border-neutral-200/80 hover:border-cyan-500/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.08)] shadow-sm shadow-neutral-100'
                }`}
              >
                {/* Visual Indicator of Key Metric Tag */}
                <div className="absolute top-6 right-6 font-mono text-[10px] text-neutral-500 uppercase tracking-widest bg-neutral-800/10 dark:bg-neutral-800/45 px-2.5 py-1 rounded-md flex items-center gap-1">
                  <Zap className="w-3 h-3 text-cyan-500" />
                  <span>{project.keyMetric}</span>
                </div>

                <div className="space-y-4">
                  {/* Folder and Title Area */}
                  <div className="flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-neutral-500 group-hover:text-cyan-500 transition-colors" />
                    <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500">
                      /{project.category}.sh
                    </span>
                  </div>

                  <div>
                    <h3 className={`font-display text-lg font-bold tracking-tight ${
                      isDark ? 'text-white group-hover:text-cyan-400' : 'text-neutral-900 group-hover:text-cyan-650'
                    } transition-colors`}>
                      {project.title}
                    </h3>
                    <p className={`text-xs mt-2.5 leading-relaxed font-sans line-clamp-3 ${
                      isDark ? 'text-neutral-400' : 'text-neutral-600'
                    }`}>
                      {project.description}
                    </p>
                  </div>

                  {/* Technology Tags Wrap */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((t, index) => (
                      <span 
                        key={index} 
                        className={`text-[10px] font-mono px-2 py-0.5 rounded font-medium ${
                          isDark 
                            ? 'bg-neutral-800/60 text-cyan-300' 
                            : 'bg-cyan-50/50 text-cyan-705 border border-cyan-100/40'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Lower Hub Footer */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-neutral-700/10">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="flex items-center gap-1.5 text-xs font-semibold cursor-pointer text-cyan-505 hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-350"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>View Architecture</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg border transition-colors ${
                      isDark 
                        ? 'bg-neutral-950/60 border-neutral-805 hover:bg-neutral-800 text-neutral-350 hover:text-white' 
                        : 'bg-neutral-50 border-neutral-200 hover:bg-neutral-100 text-neutral-600 hover:text-neutral-950'
                    }`}
                    aria-label="Source code link"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed case study architectural modal */}
        <AnimatePresence>
          {activeProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className={`relative w-full max-w-2xl rounded-2xl border p-6 sm:p-8 overflow-y-auto max-h-[85vh] ${
                  isDark 
                    ? 'bg-neutral-950 border-neutral-800 text-neutral-200 shadow-2xl' 
                    : 'bg-white border-neutral-200 text-neutral-800 shadow-xl'
                }`}
              >
                {/* Modal Exit */}
                <button
                  onClick={() => setActiveProject(null)}
                  className={`absolute top-4 right-4 p-2 rounded-full cursor-pointer border transition-colors ${
                    isDark 
                      ? 'bg-neutral-900 border-neutral-800 hover:bg-neutral-800 hover:text-white' 
                      : 'bg-neutral-50 border-neutral-200 hover:bg-neutral-100 hover:text-neutral-950'
                  }`}
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Metric Hero Tag */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono mb-4 bg-cyan-500/10 text-cyan-500 font-medium border border-cyan-500/20">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>{activeProject.keyMetric}</span>
                </div>

                <div className="space-y-4">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500">
                    ENGINEERING FILE: /{activeProject.id}.json
                  </span>
                  <h3 className={`font-display text-xl sm:text-2xl font-bold tracking-tight ${
                    isDark ? 'text-white' : 'text-neutral-905'
                  }`}>
                    {activeProject.title}
                  </h3>
                  
                  {/* Detailed Description */}
                  <div className={`space-y-4 text-xs sm:text-sm leading-relaxed ${
                    isDark ? 'text-neutral-300' : 'text-neutral-650'
                  }`}>
                    <p className="font-semibold text-cyan-550 dark:text-cyan-400">Project Overview:</p>
                    <p>{activeProject.longDescription || activeProject.description}</p>
                  </div>

                  {/* Built with section */}
                  <div className="pt-4 border-t border-neutral-700/10">
                    <p className={`text-xs font-mono uppercase tracking-wider mb-2.5 ${
                      isDark ? 'text-neutral-550' : 'text-neutral-500'
                    }`}>
                      COMPILER & ECOSYSTEM TARGETS:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.tech.map((t, idx) => (
                        <span 
                          key={idx} 
                          className={`text-xs font-mono px-3 py-1 rounded-md border ${
                            isDark 
                              ? 'bg-neutral-900 border-neutral-800 text-neutral-300' 
                              : 'bg-neutral-50 border-neutral-200 text-neutral-700'
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="flex items-center gap-3 pt-6 mt-4 border-t border-neutral-700/10">
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 bg-neutral-950 text-white hover:bg-neutral-800 border border-neutral-750 text-xs font-semibold rounded-lg transition-all"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Repository</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
