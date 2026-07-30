import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mic, 
  Cpu, 
  Database, 
  FileCheck, 
  Check
} from 'lucide-react';

interface AutomationStep {
  id: number;
  title: string;
  icon: React.ReactNode;
  howItWorks: string;
  color: string;
  visualPreview?: React.ReactNode;
}

const AUTOMATION_STEPS: AutomationStep[] = [
  {
    id: 1,
    title: 'Upload Candidate Information',
    icon: <Mic className="w-5 h-5 text-[#4285F4]" />,
    howItWorks: 'Upload interview recordings, recruiter notes, CVs or existing candidate profiles. The platform accepts unstructured information from multiple sources and prepares it for processing automatically.',
    color: '#4285F4'
  },
  {
    id: 2,
    title: 'AI Processes Every Candidate',
    icon: <Cpu className="w-5 h-5 text-[#34A853]" />,
    howItWorks: 'The AI reviews each profile, extracts the most relevant information, generates a structured summary and prepares the candidate for recruiter review without manual work.',
    color: '#34A853'
  },
  {
    id: 3,
    title: 'Candidates Are Automatically Organized',
    icon: <Database className="w-5 h-5 text-[#FBBC05]" />,
    howItWorks: 'Every candidate is automatically placed into the appropriate stage based on your recruitment process. Active candidates, interview pipelines and archived profiles remain organized and instantly accessible.',
    color: '#FBBC05'
  },
  {
    id: 4,
    title: 'Recruiters Review & Decide',
    icon: <FileCheck className="w-5 h-5 text-[#EA4335]" />,
    howItWorks: 'Every profile includes the AI summary together with a dedicated evaluation area where recruiters can add their own notes, compare candidates and make decisions from one centralized workspace.',
    color: '#EA4335'
  }
];

const STEP_DURATION_MS = 20000; // 20 seconds
const TICK_INTERVAL_MS = 100;

export const AutomationAssemblyVisualizer: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to detect if in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setElapsed(0); // Reset timer when scrolling into view
        } else {
          setIsInView(false);
          setElapsed(0); // Reset when leaving view
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Timer interval running only when in view
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setElapsed((prev) => {
        if (prev + TICK_INTERVAL_MS >= STEP_DURATION_MS) {
          setActiveStepIndex((currentIdx) => (currentIdx + 1) % AUTOMATION_STEPS.length);
          return 0;
        }
        return prev + TICK_INTERVAL_MS;
      });
    }, TICK_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [isInView]);

  const handleStepClick = (idx: number) => {
    setActiveStepIndex(idx);
    setElapsed(0); // Reset countdown on manual step selection
  };

  const currentStep = AUTOMATION_STEPS[activeStepIndex];
  const progressRatio = Math.min(1, elapsed / STEP_DURATION_MS);
  const secondsLeft = Math.max(0, Math.ceil((STEP_DURATION_MS - elapsed) / 1000));

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      id="automation-assembly-visualizer" 
      className="my-10 bg-white border border-[#E8EAED] rounded-2xl p-6 sm:p-8 pr-8 sm:pr-10 shadow-xs relative overflow-hidden font-sans"
    >
      
      {/* Right-side Vertical Countdown Progress Bar */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-2.5 bg-gray-100 flex flex-col justify-end overflow-hidden rounded-r-2xl border-l border-gray-200/80"
        title={`Next tab in ${secondsLeft}s`}
      >
        <div 
          className="w-full transition-all duration-100 ease-linear rounded-br-2xl"
          style={{
            height: `${progressRatio * 100}%`,
            backgroundColor: currentStep.color
          }}
        />
      </div>

      {/* Header Bar */}
      <div className="pb-6 border-b border-[#E8EAED]">
        <h3 className="text-lg sm:text-xl font-bold text-[#202124]">
          How the Avantty's Automations Works.
        </h3>
      </div>

      {/* Flow Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-8 relative">
        {AUTOMATION_STEPS.map((step, idx) => {
          const isActive = idx === activeStepIndex;
          const isPassed = idx < activeStepIndex;

          return (
            <button
              key={step.id}
              onClick={() => handleStepClick(idx)}
              className={`relative text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-white border-[#202124] shadow-md ring-2 ring-[#4285F4]/20 scale-[1.02]'
                  : isPassed
                  ? 'bg-emerald-50/20 border-emerald-200 text-[#202124]'
                  : 'bg-white border-[#E8EAED] hover:border-gray-300 text-[#3C4043]'
              }`}
            >
              <div className="flex items-center mb-4">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center border"
                  style={{
                    backgroundColor: isActive || isPassed ? `${step.color}15` : '#f9fafb',
                    borderColor: isActive || isPassed ? step.color : '#e5e7eb'
                  }}
                >
                  {isPassed ? <Check className="w-5 h-5 text-[#34A853]" /> : step.icon}
                </div>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#202124] leading-snug">
                  {step.title}
                </h4>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Step Detailed Explanation Box */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="p-6 bg-gray-50 border border-[#E8EAED] rounded-2xl"
        >
          <div className="space-y-2 text-left">
            <h4 className="text-base sm:text-lg font-bold text-[#202124] leading-snug">
              {currentStep.title}
            </h4>

            <p className="text-xs sm:text-sm text-[#3C4043] leading-relaxed font-normal max-w-3xl">
              {currentStep.howItWorks}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

    </motion.div>
  );
};


