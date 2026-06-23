import { useState } from 'react';
import { FileText, Download, Eye, EyeOff, Printer, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ResumePreview from './ResumePreview';

interface ResumeProps {
  isDark: boolean;
}

export default function Resume({ isDark }: ResumeProps) {
  const [showPreview, setShowPreview] = useState(false);

  // Trigger browser-native save or mock print download
  const handleDownload = () => {
    // Elegant system instruction to trigger browser print-as-pdf overlay on Shreedhar's resume layout
    window.print();
  };

  return (
    <section id="resume-section" className="py-20 relative bg-neutral-90 px-3/0.2 dark:bg-neutral-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="font-mono text-xs text-cyan-500 uppercase tracking-widest">CURRICULUM VITAE</p>
          <h2 className={`font-display text-3xl font-bold tracking-tight mt-1 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            Professional Resume
          </h2>
          <div className="h-1 w-12 bg-cyan-500 mt-2 rounded" />
        </div>

        {/* Large Premium Resume Hub Card */}
        <div className={`p-6 sm:p-10 rounded-2xl border transition-all duration-300 mb-8 ${
          isDark 
            ? 'bg-neutral-900/60 border-neutral-800' 
            : 'bg-white border-neutral-200 shadow-md shadow-neutral-100 hover:shadow-lg'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Icon Box */}
            <div className="lg:col-span-3 flex lg:justify-center">
              <div className={`p-6 rounded-2xl border ${
                isDark ? 'bg-neutral-950 border-neutral-800 text-cyan-400' : 'bg-cyan-50 border-cyan-150 text-cyan-600'
              }`}>
                <FileText className="w-16 h-16" />
              </div>
            </div>

            {/* Content Middle */}
            <div className="lg:col-span-6 space-y-3">
              <span className="font-mono text-[9px] text-cyan-505 dark:text-cyan-400 font-semibold tracking-wider bg-cyan-500/10 px-2.5 py-1 rounded">
                PDF / PRINT READY
              </span>
              <h3 className={`font-display text-xl sm:text-2xl font-bold tracking-tight mt-2 ${
                isDark ? 'text-white' : 'text-neutral-909'
              }`}>
                Recruiter-Ready CV Dossier
              </h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                Designed in compliance with standard applicant tracking systems (ATS) formats. Review the full resume inline, copy sections easily, or execute a direct paper/PDF print optimized for 1-page portfolios.
              </p>
            </div>

            {/* Actions CTA */}
            <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className={`flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold rounded-lg cursor-pointer transition-all border ${
                  isDark 
                    ? 'bg-white text-neutral-950 border-white hover:bg-neutral-200' 
                    : 'bg-neutral-950 text-white border-neutral-950 hover:bg-neutral-800 shadow shadow-neutral-200'
                }`}
              >
                {showPreview ? (
                  <>
                    <EyeOff className="w-4 h-4" />
                    <span>Hide Inline CV</span>
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4" />
                    <span>Preview Inline CV</span>
                  </>
                )}
              </button>

              <button
                onClick={handleDownload}
                className={`flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold rounded-lg cursor-pointer transition-all border ${
                  isDark 
                    ? 'bg-neutral-800 border-neutral-750 text-neutral-305 hover:bg-neutral-700 hover:text-white' 
                    : 'bg-white border-neutral-250 text-neutral-700 hover:bg-neutral-100 shadow-sm'
                }`}
              >
                <Download className="w-4 h-4" />
                <span>Save PDF CV</span>
              </button>
            </div>

          </div>
        </div>

        {/* Expandable CV View Panel */}
        <AnimatePresence>
          {showPreview && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="overflow-hidden mb-12"
            >
              <div className="py-4">
                <ResumePreview isDark={isDark} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
