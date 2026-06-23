import { GraduationCap, Award, BrainCircuit, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';

interface AboutProps {
  isDark: boolean;
}

export default function About({ isDark }: AboutProps) {
  const interests = [
    'Machine Learning',
    'Analytics',
    'Product Thinking',
    'Generative AI',
    'Computer Vision',
    'Data Engineering'
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="font-mono text-xs text-cyan-500 uppercase tracking-widest">ABOUT ME</p>
          <h2 className={`font-display text-3xl font-bold tracking-tight mt-1 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            Education & Focus Areas
          </h2>
          <div className="h-1 w-12 bg-cyan-500 mt-2 rounded" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Education Box - Left */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-6">
            <div className={`p-6 sm:p-8 rounded-2xl border transition-all ${
              isDark 
                ? 'bg-neutral-900/60 border-neutral-800' 
                : 'bg-white border-neutral-200 shadow-md shadow-neutral-100'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-500">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`font-display font-bold text-lg leading-tight ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                    Jaypee Institute of Information Technology, Noida
                  </h3>
                  <p className="text-xs text-neutral-500 mt-0.5">Noida, Uttar Pradesh, India • Bachelor of Technology</p>
                </div>
              </div>

              {/* B.Tech Specific Major & CGPA Box */}
              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 p-4 rounded-xl ${
                isDark ? 'bg-neutral-950/50' : 'bg-neutral-50'
              }`}>
                <div>
                  <span className="text-[10px] font-mono text-neutral-500 tracking-wider uppercase">DEGREE SPECIALIZATION</span>
                  <p className={`text-sm font-semibold mt-0.5 ${isDark ? 'text-neutral-200' : 'text-neutral-850'}`}>
                    Electronics & Communication Engineering
                  </p>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-neutral-500 tracking-wider uppercase">ACADEMIC STANDING</span>
                  <p className="text-sm font-semibold mt-0.5 text-cyan-500">
                    CGPA: <span className="text-lg font-bold">7.34</span>
                  </p>
                </div>
              </div>

              {/* Elegant Timeline style layout for Education */}
              <div className="relative pl-6 border-l-2 border-neutral-700/20 space-y-6">
                {PERSONAL_INFO.education.timeline.map((item, id) => (
                  <div key={id} className="relative">
                    {/* Circle absolute point */}
                    <span className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 transition-colors ${
                      isDark ? 'bg-neutral-950 border-cyan-500' : 'bg-white border-cyan-500'
                    }`} />
                    
                    <div>
                      <span className="font-mono text-[10px] text-neutral-500 bg-neutral-800/10 px-2 py-0.5 rounded">
                        {item.year}
                      </span>
                      <h4 className={`text-sm sm:text-base font-bold mt-1.5 ${isDark ? 'text-neutral-200' : 'text-neutral-900'}`}>
                        {item.title}
                      </h4>
                      <p className="text-xs text-neutral-500 mt-0.5 font-medium">{item.institution}</p>
                      <p className={`text-xs mt-2 leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interests & Focus - Right */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-between gap-6">
            <div className={`p-6 sm:p-8 rounded-2xl border flex-grow transition-all ${
              isDark 
                ? 'bg-neutral-900/60 border-neutral-800' 
                : 'bg-white border-neutral-200 shadow-md shadow-neutral-100'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-500">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <h3 className={`font-display font-semibold text-lg ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                  Specialized Interests
                </h3>
              </div>

              <p className={`text-xs leading-relaxed mb-6 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                My technical interest lies at the intersection of data-driven modeling and product metrics. I enjoy building pipeline workflows, working on computer vision issues, and optimizing operational parameters.
              </p>

              {/* Tag Grid */}
              <div className="flex flex-wrap gap-2.5">
                {interests.map((tag, idx) => (
                  <div
                    key={idx}
                    className={`px-3.5 py-2 rounded-lg text-xs font-semibold cursor-default transition-all ${
                      isDark 
                        ? 'bg-neutral-950/80 border border-neutral-800 text-neutral-350 hover:border-cyan-500/40 hover:text-white' 
                        : 'bg-neutral-50 border border-neutral-200 text-neutral-650 hover:border-cyan-500/40 hover:text-cyan-600'
                    }`}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Pitch card - Bottom Right */}
            <div className={`p-6 rounded-2xl border relative overflow-hidden transition-all ${
              isDark 
                ? 'bg-neutral-900/40 border-neutral-800' 
                : 'bg-neutral-50 border-neutral-250 shadow-sm'
            }`}>
              <div className="flex items-start gap-3.5">
                <BookOpen className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className={`text-xs font-bold leading-tight uppercase ${isDark ? 'text-neutral-400' : 'text-neutral-800'}`}>
                    Core Philosophy
                  </h4>
                  <p className={`text-[11.5px] leading-relaxed mt-1.5 ${isDark ? 'text-neutral-450' : 'text-neutral-600'}`}>
                    "Data is only as valuable as the decisions it drive." I specialize in translating code arrays and metrics models into real-world client efficiency and process transparency.
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
