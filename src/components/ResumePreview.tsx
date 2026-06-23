import { useState } from 'react';
import { Mail, Linkedin, Github, Download, Printer, Copy, Check, FileText } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE, PROJECTS, SKILL_CATEGORIES } from '../data';

interface ResumePreviewProps {
  onClose?: () => void;
  isDark: boolean;
}

export default function ResumePreview({ onClose, isDark }: ResumePreviewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyText = () => {
    const text = `
SHREEDHAR SHUKLA
Analytics • Product • Machine Learning
Email: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin}
GitHub: ${PERSONAL_INFO.github}

SUMMARY:
${PERSONAL_INFO.bio}

EDUCATION:
B.Tech in Electronics and Communication Engineering (CGPA: 7.34)
Jaypee Institute of Information Technology, Noida (2022 - 2026)

EXPERIENCE:
Machine Learning Intern | Airtel Digital Ltd. (June 2025 – August 2025)
${EXPERIENCE[0].achievements.map(a => `• ${a}`).join('\n')}

PROJECTS:
1. Aerial Guardian — Real-Time UAV Surveillance AI
   Tech: YOLOv8, SAHI, ByteTrack, BoT-SORT, OSNet, TensorRT, React 19, Node.js, Gemini API
   ${PROJECTS[0].description}

2. Digital Payments Analytics Platform
   Tech: SQL, Python, Power BI, ETL, Anomaly Detection
   ${PROJECTS[1].description}

3. AI YouTube Summarizer
   Tech: Python, OpenAI API, Whisper, Prompt Engineering
   ${PROJECTS[2].description}

4. Employee Layoff Prediction
   Tech: Scikit-learn, Random Forest, XGBoost, SMOTE, PCA
   ${PROJECTS[3].description}

SKILLS:
${SKILL_CATEGORIES.map(cat => `${cat.title}: ${cat.skills.join(', ')}`).join('\n')}
    `;
    navigator.clipboard.writeText(text.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={`p-6 rounded-2xl border transition-all duration-300 ${
      isDark 
        ? 'bg-neutral-900/90 border-neutral-800 text-neutral-200' 
        : 'bg-white border-neutral-200 text-neutral-800'
    } shadow-xl max-w-4xl mx-auto print:border-none print:bg-white print:text-black print:p-0 print:shadow-none`}>
      {/* Control Header (hidden on print) */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-neutral-700/25 print:hidden">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-neutral-400" />
          <h3 className="font-display font-semibold text-lg">Interactive Curriculum Vitae</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyText}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
              isDark 
                ? 'bg-neutral-800/50 hover:bg-neutral-850 border-neutral-750 text-neutral-300' 
                : 'bg-neutral-100 hover:bg-neutral-200 border-neutral-250 text-neutral-700'
            }`}
            title="Copy Plain Text Resume"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Text</span>
              </>
            )}
          </button>
          <button
            onClick={handlePrint}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
              isDark 
                ? 'bg-neutral-800/50 hover:bg-neutral-850 border-neutral-750 text-neutral-300' 
                : 'bg-neutral-100 hover:bg-neutral-200 border-neutral-250 text-neutral-700'
            }`}
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / PDF</span>
          </button>
        </div>
      </div>

      {/* Actual Printable Page Grid */}
      <div className="space-y-6 print:space-y-4">
        {/* Paper Header */}
        <div className="text-center pb-4 border-b border-neutral-700/20 print:text-left print:flex print:justify-between print:items-start">
          <div>
            <h1 className={`font-display text-3xl font-bold tracking-tight ${
              isDark ? 'text-white' : 'text-neutral-900'
            } print:text-black print:text-2xl`}>
              {PERSONAL_INFO.name}
            </h1>
            <p className={`text-base font-medium mt-1 ${
              isDark ? 'text-cyan-400' : 'text-cyan-600'
            } print:text-neutral-700 print:text-xs`}>
              {PERSONAL_INFO.title}
            </p>
          </div>
          
          <div className={`mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs ${
            isDark ? 'text-neutral-400' : 'text-neutral-600'
          } print:text-black print:mt-0 print:text-right print:flex-col print:items-end`}>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1 hover:underline">
              <Mail className="w-3 h-3 text-neutral-500 print:hidden" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
              <Linkedin className="w-3 h-3 text-neutral-500 print:hidden" />
              <span>linkedin.com/in/shreedhar-shukla</span>
            </a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
              <Github className="w-3 h-3 text-neutral-500 print:hidden" />
              <span>github.com/shreedhar-shukla</span>
            </a>
          </div>
        </div>

        {/* Narrative bio */}
        <div>
          <h4 className={`text-xs font-semibold tracking-wider uppercase mb-1.5 ${
            isDark ? 'text-neutral-400' : 'text-neutral-500'
          } print:text-neutral-800`}>Professional Summary</h4>
          <p className={`text-xs leading-relaxed ${
            isDark ? 'text-neutral-300' : 'text-neutral-700'
          } print:text-neutral-700`}>
            {PERSONAL_INFO.bio}
          </p>
        </div>

        {/* Education & Experience in two columns on print & desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-2 print:gap-4">
          <div className="space-y-4">
            <div>
              <h4 className={`text-xs font-semibold tracking-wider uppercase mb-2 border-b border-neutral-750 pb-1 ${
                isDark ? 'text-neutral-400' : 'text-neutral-500'
              } print:text-neutral-800`}>Education</h4>
              <div>
                <p className={`text-[13px] font-bold ${isDark ? 'text-neutral-200' : 'text-neutral-900'} print:text-black`}>
                  {PERSONAL_INFO.education.degree}
                </p>
                <p className={`text-xs ${isDark ? 'text-neutral-400' : 'text-neutral-600'} print:text-neutral-750`}>
                  {PERSONAL_INFO.education.institution}
                </p>
                <div className="flex justify-between text-[11px] mt-1 text-neutral-500 print:text-neutral-600">
                  <span>CGPA: <strong className="text-cyan-500 print:text-black">{PERSONAL_INFO.education.cgpa}</strong></span>
                  <span>Batch: 2022 - 2026</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className={`text-xs font-semibold tracking-wider uppercase mb-2 border-b border-neutral-750 pb-1 ${
                isDark ? 'text-neutral-400' : 'text-neutral-500'
              } print:text-neutral-800`}>Honors & Rank</h4>
              <div>
                <p className={`text-[13px] font-bold ${isDark ? 'text-neutral-200' : 'text-neutral-800'} print:text-black`}>
                  NPTEL Elite — Top 2% Nationally
                </p>
                <p className="text-xs text-neutral-500 print:text-neutral-650">
                  Optical Wireless Communications for Beyond 5G & IoT
                </p>
                <span className="text-[11px] text-neutral-400 print:text-neutral-600 block mt-0.5">IIT Madras / IIIT Delhi (Jan-Apr 2026)</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className={`text-xs font-semibold tracking-wider uppercase mb-2 border-b border-neutral-750 pb-1 ${
                isDark ? 'text-neutral-400' : 'text-neutral-500'
              } print:text-neutral-800`}>Experience</h4>
              <div>
                <div className="flex justify-between items-start">
                  <p className={`text-[13px] font-bold ${isDark ? 'text-neutral-200' : 'text-neutral-900'} print:text-black`}>
                    {EXPERIENCE[0].role}
                  </p>
                  <span className="text-[10px] text-neutral-500 print:text-neutral-750 bg-neutral-850 px-1.5 py-0.5 rounded print:p-0 print:bg-transparent">
                    {EXPERIENCE[0].period}
                  </span>
                </div>
                <p className={`text-xs text-cyan-500 font-medium print:text-cyan-700`}>
                  {EXPERIENCE[0].company}
                </p>
                <ul className="list-disc list-inside mt-2 text-[11px] space-y-1 text-neutral-400 print:text-neutral-750 print:space-y-0.5">
                  {EXPERIENCE[0].achievements.slice(0, 4).map((ach, i) => (
                    <li key={i} className="leading-tight">{ach}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Project Highlights */}
        <div>
          <h4 className={`text-xs font-semibold tracking-wider uppercase mb-2.5 border-b border-neutral-750 pb-1 ${
            isDark ? 'text-neutral-400' : 'text-neutral-500'
          } print:text-neutral-800`}>Key Engineering Projects</h4>
          
          <div className="space-y-3.5 print:space-y-2.5">
            {PROJECTS.slice(0, 3).map((proj) => (
              <div key={proj.id} className="text-xs">
                <div className="flex justify-between items-baseline flex-wrap">
                  <h5 className={`font-semibold text-neutral-200 ${
                    isDark ? 'text-neutral-100' : 'text-neutral-950'
                  } print:text-black`}>
                    {proj.title}
                  </h5>
                  <span className="text-[10px] font-mono text-neutral-500 print:text-neutral-600">
                    [{proj.keyMetric}]
                  </span>
                </div>
                <p className="text-[11px] text-neutral-400 mt-0.5 print:text-neutral-800-deep">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-1 mt-1 font-mono text-[9px] text-neutral-500 print:text-mono print:text-neutral-700">
                  <span>Stack:</span>
                  {proj.tech.map((t, idx) => (
                    <span key={idx} className="after:content-[',_'] last:after:content-none">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Core Competencies */}
        <div>
          <h4 className={`text-xs font-semibold tracking-wider uppercase mb-2 border-b border-neutral-750 pb-1 ${
            isDark ? 'text-neutral-400' : 'text-neutral-500'
          } print:text-neutral-800`}>Technical Core Competencies</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 print:grid-cols-4 print:gap-1 text-xs">
            {SKILL_CATEGORIES.map((cat, i) => (
              <div key={i}>
                <h5 className={`font-semibold text-[11px] tracking-wide mb-1 ${
                  isDark ? 'text-neutral-300' : 'text-neutral-800'
                } print:text-black`}>
                  {cat.title}
                </h5>
                <p className="text-[11px] leading-relaxed text-neutral-400 print:text-neutral-750 font-sans">
                  {cat.skills.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Print Disclaimer (Shown ONLY on print) */}
        <div className="hidden print:block text-center text-[10px] text-neutral-400 pt-4 border-t border-dotted border-neutral-300">
          References available upon request • Self-assembled print via shreedhar-shukla.github.io
        </div>
      </div>
    </div>
  );
}
