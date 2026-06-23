import { useEffect, useState, SVGProps } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Cpu } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState('Initializing kernel...');

  useEffect(() => {
    // Quick progress tick
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        
        // Dynamic messaging stages based on load percentage
        const nextProgress = prev + Math.floor(Math.random() * 15) + 5;
        const capped = Math.min(nextProgress, 100);
        
        if (capped < 30) {
          setStage('Initializing core modules...');
        } else if (capped < 60) {
          setStage('Evaluating analytics models...');
        } else if (capped < 85) {
          setStage('Structuring machine learning nodes...');
        } else {
          setStage('Compiling digital curriculum...');
        }
        
        return capped;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-neutral-950 text-white font-mono p-4">
      <div className="max-w-md w-full space-y-6">
        
        {/* Visual Central Widget */}
        <div className="flex items-center gap-3 justify-center">
          <CommandLineIcon className="w-6 h-6 text-cyan-500 animate-spin" style={{ animationDuration: '3s' }} />
          <h1 className="text-sm font-bold tracking-widest text-neutral-350 uppercase">
            SHREEDHAR_SHUKLA.SYS
          </h1>
        </div>

        {/* Outer terminal box wrapper */}
        <div className="p-4 rounded-xl border border-neutral-850 bg-neutral-900/50 space-y-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
          </div>

          <div className="space-y-1.5 text-[10px] leading-relaxed text-neutral-400">
            <p className="text-neutral-500">// TARGET DEPLOYMENT LOAD ACTIVE</p>
            <p>&gt; node --version: v20.12.0</p>
            <p>&gt; npm run start --portfolio</p>
            <p className="text-cyan-405 font-semibold text-cyan-400">&gt; Status: {stage}</p>
          </div>

          {/* Progress bar */}
          <div className="relative pt-2">
            <div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 transition-all duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between items-center mt-1.5 text-[9px] text-neutral-500">
              <span>SYSTEM READY</span>
              <span>{progress}%</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function CommandLineIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2050/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
      />
    </svg>
  );
}
