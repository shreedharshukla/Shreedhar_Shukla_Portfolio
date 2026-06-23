import { Award, ExternalLink, Calendar, Cpu, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { CERTIFICATES, Certificate } from '../data';

interface AchievementsProps {
  isDark: boolean;
}

export default function Achievements({ isDark }: AchievementsProps) {
  // Stagger entry configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 14 }
    },
  };

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      {/* Decorative colored glow absolute */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-64 h-64 bg-cyan-500/5 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-[5%] w-72 h-72 bg-purple-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="font-mono text-xs text-cyan-500 uppercase tracking-widest">HONORS & CREDENTIALS</p>
          <h2 className={`font-display text-3xl font-bold tracking-tight mt-1 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            Major Achievements
          </h2>
          <div className="h-1 w-12 bg-cyan-500 mt-2 rounded" />
        </div>

        {/* Credentials Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {CERTIFICATES.map((cert: Certificate) => {
            const isNptel = cert.id === 'nptel-elite';
            return (
              <motion.div
                key={cert.id}
                variants={cardVariants}
                className={`p-6 sm:p-8 rounded-2xl border relative flex flex-col justify-between overflow-hidden transition-all duration-300 ${
                  isDark 
                    ? 'bg-neutral-900/60 backdrop-blur-md hover:bg-neutral-900/90 border-neutral-800/80 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.12)]' 
                    : 'bg-white/90 backdrop-blur-md border-neutral-200 hover:border-cyan-500/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.06)] shadow-sm'
                }`}
              >
                {/* Visual Accent Badge Graphic */}
                <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl pointer-events-none ${
                  isNptel ? 'bg-amber-500/10' : 'bg-cyan-500/15'
                }`} />

                <div className="space-y-4">
                  {/* Top Category Tag + Date Row */}
                  <div className="flex justify-between items-center">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider ${
                      isNptel 
                        ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' 
                        : 'bg-cyan-500/10 text-cyan-500 border border-cyan-500/20'
                    }`}>
                      <Award className="w-3 h-3" />
                      <span>{isNptel ? 'National Elite Specialization' : 'Professional Badge'}</span>
                    </span>

                    <span className="flex items-center gap-1 text-xs text-neutral-500 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{cert.period}</span>
                    </span>
                  </div>

                  {/* Title & Issuer Heading */}
                  <div>
                    <h3 className={`font-display text-lg sm:text-xl font-bold tracking-tight ${
                      isDark ? 'text-white' : 'text-neutral-900'
                    }`}>
                      {cert.title}
                    </h3>
                    {cert.course && (
                      <p className={`text-sm font-semibold mt-1 ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                        {cert.course}
                      </p>
                    )}
                    <p className="text-xs text-neutral-500 font-mono mt-1">{cert.issuer}</p>
                  </div>

                  {/* Summary Description */}
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {cert.summary}
                  </p>

                  {/* Dynamic Gained Skill Badges */}
                  {cert.skillsGained && cert.skillsGained.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <p className="text-[10px] font-mono text-neutral-500 font-semibold uppercase">SKILLS ACCREDITED:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skillsGained.map((skill, sIdx) => (
                          <span 
                            key={sIdx}
                            className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                              isDark 
                                ? 'bg-neutral-800 text-neutral-300' 
                                : 'bg-neutral-100 text-neutral-600'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card footer details & Action link */}
                <div className="mt-6 pt-4 border-t border-neutral-700/10 flex flex-wrap items-center justify-between gap-4">
                  {cert.credentialId ? (
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-neutral-500">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>ID: {cert.credentialId}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-[10px] text-emerald-500 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Provider Credit</span>
                    </div>
                  )}

                  {/* Main Action Link Button */}
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 px-4.5 py-2.5 text-xs font-bold rounded-lg cursor-pointer transition-all ${
                      isNptel
                        ? 'bg-amber-500 hover:bg-amber-600 text-neutral-950 shadow-md shadow-amber-500/15'
                        : 'bg-cyan-500 hover:bg-cyan-600 text-white shadow-md shadow-cyan-500/15'
                    }`}
                  >
                    <span>{isNptel ? 'View Certificate' : 'Verify Badge'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
