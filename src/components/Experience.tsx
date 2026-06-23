import { Briefcase, Building2, Calendar, MapPin, CheckCircle, Sparkles, Database } from 'lucide-react';
import { motion } from 'motion/react';
import { EXPERIENCE } from '../data';

interface ExperienceProps {
  isDark: boolean;
}

export default function Experience({ isDark }: ExperienceProps) {
  // Extract main Airtel Intern records
  const internRole = EXPERIENCE[0];

  const stats = [
    { label: 'Operational Effort', value: '~30% Reduced', desc: 'Through direct workflow script automation' },
    { label: 'Data Processing Pipelines', value: '200,000+ Records', desc: 'Securely automated using Python scripting modules' }
  ];

  return (
    <section id="experience" className="py-20 bg-neutral-90 px-3/0.2 dark:bg-neutral-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="font-mono text-xs text-cyan-500 uppercase tracking-widest">WORK HISTORY</p>
          <h2 className={`font-display text-3xl font-bold tracking-tight mt-1 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            Professional Experience
          </h2>
          <div className="h-1 w-12 bg-cyan-500 mt-2 rounded" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Timeline Structure - Left */}
          <div className="lg:col-span-12 xl:col-span-8">
            <div className={`p-6 sm:p-8 rounded-2xl border relative overflow-hidden transition-all duration-300 ${
              isDark 
                ? 'bg-neutral-900/60 backdrop-blur-md border-neutral-800/80 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.12)]' 
                : 'bg-white/90 backdrop-blur-md border-neutral-200 shadow-md shadow-neutral-100 hover:border-cyan-500/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.06)]'
            }`}>
              {/* Outer decorative line background */}
              <div className="absolute top-1/4 right-[5%] w-64 h-64 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

              {/* Company Info Box */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-700/10 mb-8">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-cyan-500/15 text-cyan-400">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`font-display text-lg sm:text-xl font-bold leading-tight ${
                      isDark ? 'text-white' : 'text-neutral-900'
                    }`}>
                      {internRole.role}
                    </h3>
                    <p className="text-sm font-semibold text-cyan-500 mt-0.5 flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{internRole.company}</span>
                    </p>
                  </div>
                </div>

                <div className={`flex flex-col items-start sm:items-end text-xs ${
                  isDark ? 'text-neutral-450' : 'text-neutral-500'
                }`}>
                  <span className="flex items-center gap-1.5 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{internRole.period}</span>
                  </span>
                  <span className="flex items-center gap-1.5 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{internRole.location}</span>
                  </span>
                </div>
              </div>

              {/* Achievements Bullet List */}
              <div className="space-y-6">
                <p className={`font-mono text-[10px] tracking-widest ${
                  isDark ? 'text-neutral-450' : 'text-neutral-500'
                }`}>
                  KEY CONTRIBUTIONS & ACHIEVEMENTS:
                </p>

                <div className="relative pl-4 sm:pl-6 border-l border-neutral-700/25 space-y-6">
                  {internRole.achievements.map((ach, idx) => (
                    <div key={idx} className="relative group">
                      {/* Interactive timing dot representing state */}
                      <span className={`absolute -left-[21px] sm:-left-[29px] top-1.5 w-2 h-2 rounded-full ring-4 transition-all ${
                        isDark 
                          ? 'bg-cyan-500 ring-neutral-900 group-hover:scale-125' 
                          : 'bg-cyan-500 ring-white group-hover:scale-125'
                      }`} />

                      <p className={`text-xs sm:text-sm leading-relaxed ${
                        isDark ? 'text-neutral-300' : 'text-neutral-750'
                      }`}>
                        {ach}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Core Impact Matrix - Right */}
          <div className="lg:col-span-12 xl:col-span-4 flex flex-col justify-between gap-6">
            
            {stats.map((item, idx) => (
              <div 
                key={idx} 
                className={`p-6 rounded-2xl border transition-all ${
                  isDark 
                    ? 'bg-gradient-to-br from-neutral-900/40 to-neutral-950/40 border-neutral-800' 
                    : 'bg-gradient-to-br from-neutral-50 to-white border-neutral-200'
                }`}
              >
                <span className="font-mono text-[9px] text-neutral-500 tracking-wider block uppercase">{item.label}</span>
                <p className="text-xl sm:text-2xl font-bold font-display text-cyan-505 dark:text-cyan-400 mt-1">
                  {item.value}
                </p>
                <p className={`text-xs mt-2 leading-normal ${isDark ? 'text-neutral-450' : 'text-neutral-600'}`}>
                  {item.desc}
                </p>
              </div>
            ))}

            {/* Micro-pitch card */}
            <div className={`p-6 rounded-2xl border overflow-hidden transition-all ${
              isDark 
                ? 'bg-neutral-900/20 border-neutral-850' 
                : 'bg-neutral-50/50 border-neutral-250'
            }`}>
              <div className="flex gap-3">
                <Database className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-neutral-400' : 'text-neutral-800'}`}>
                    Technical Ecosystem
                  </h4>
                  <p className={`text-[11.5px] leading-relaxed mt-1.5 ${isDark ? 'text-neutral-450' : 'text-neutral-600'}`}>
                    At Airtel, I bridged engineering pipelines and business dashboards, writing scalable queries, designing executive BI layout states, and coordinating alongside cross-functional developers.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
