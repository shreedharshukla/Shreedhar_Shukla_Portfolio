import { Database, BrainCircuit, Layers, Wrench, CheckCircle2 } from 'lucide-react';
import * as Lucide from 'lucide-react';
import { SKILL_CATEGORIES } from '../data';

interface SkillsProps {
  isDark: boolean;
}

export default function Skills({ isDark }: SkillsProps) {
  
  // Helper to dynamically yield correct icon component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database':
        return <Database className="w-5 h-5 text-cyan-500" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-magenta-501 text-purple-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-amber-500" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-emerald-500" />;
      default:
        return <Wrench className="w-5 h-5 text-neutral-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-neutral-90 px-3/0.2 dark:bg-neutral-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="font-mono text-xs text-cyan-500 uppercase tracking-widest">TECHNICAL STACK</p>
          <h2 className={`font-display text-3xl font-bold tracking-tight mt-1 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            Skills & Competencies
          </h2>
          <div className="h-1 w-12 bg-cyan-500 mt-2 rounded" />
        </div>

        {/* Competencies bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div 
              key={idx}
              className={`p-6 rounded-2xl border transition-all h-full duration-300 ${
                isDark 
                  ? 'bg-neutral-900/60 backdrop-blur-md border-neutral-800/80 hover:bg-neutral-900/90 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.12)]' 
                  : 'bg-white/90 backdrop-blur-md border-neutral-200 shadow-sm hover:shadow-md hover:border-cyan-500/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.06)]'
              }`}
            >
              <div className="flex items-center gap-3.5 pb-4 mb-5 border-b border-neutral-700/10">
                <div className={`p-2 rounded-xl scale-95 border ${
                  isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-neutral-50 border-neutral-100'
                }`}>
                  {getIcon(cat.icon)}
                </div>
                <h3 className={`font-display font-bold text-sm tracking-wide ${
                  isDark ? 'text-neutral-200' : 'text-neutral-800'
                }`}>
                  {cat.title}
                </h3>
              </div>

              {/* Items bullet mapping list */}
              <ul className="space-y-3">
                {cat.skills.map((skill, i) => (
                  <li 
                    key={i} 
                    className="flex items-start gap-2 text-xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-cyan-500/85 flex-shrink-0" />
                    <span className={isDark ? 'text-neutral-350' : 'text-neutral-650'}>
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
