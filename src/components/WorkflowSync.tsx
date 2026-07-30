import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { 
  Check, ArrowRight, Mic, Cpu, Database, FileCheck
} from 'lucide-react';

// Reusable Connection Line Component with flowing energy packets
interface ConnectingLineProps {
  isActive: boolean;
  isFilled: boolean;
}

const ConnectingLine: React.FC<ConnectingLineProps> = ({ isActive, isFilled }) => {
  if (!isActive) {
    return <div className="w-1 h-12 bg-gray-50/50" />;
  }

  return (
    <div className="w-1 h-12 bg-gray-100 relative overflow-hidden z-20 rounded-full">
      {/* Filled Path */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className={`absolute top-0 left-0 w-full transition-colors duration-500 ${
          isFilled ? 'bg-[#34A853] shadow-[0_0_8px_#34A853]' : 'bg-[#4285F4] shadow-[0_0_10px_#4285F4]'
        }`}
      />

      {/* Repeating circulating energy photons */}
      <motion.div
        animate={{
          top: ["-20%", "120%"],
        }}
        transition={{
          duration: isFilled ? 1.6 : 1.2,
          repeat: isFilled ? Infinity : 0,
          ease: "linear",
        }}
        className={`absolute left-0 right-0 h-4 bg-gradient-to-b from-transparent via-white to-transparent opacity-90 z-10`}
      />
    </div>
  );
};

// Reusable Advanced Workflow Card Node
interface WorkflowNodeProps {
  state: 'hidden' | 'processing' | 'completed';
  stepNumber: number;
  title: string;
  processingText: string;
  completedText: string;
  detailPill: string;
  icon: React.ReactNode;
  isLast?: boolean;
}

const WorkflowNode: React.FC<WorkflowNodeProps> = ({
  state,
  stepNumber,
  title,
  processingText,
  completedText,
  detailPill,
  icon,
  isLast = false
}) => {
  if (state === 'hidden') return null;

  const isCompleted = state === 'completed';
  const isProcessing = state === 'processing';

  return (
    <div className="relative w-full max-w-lg my-1 z-10">
      
      {/* Concentric expanding energy waves when processing */}
      <AnimatePresence>
        {isProcessing && (
          <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ scale: 0.94, opacity: 0.6 }}
              animate={{ scale: 1.15, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
              className="absolute w-full h-full rounded-2xl border-2 border-[#4285F4]/20"
            />
          </div>
        )}
      </AnimatePresence>

      {/* One-shot expanding green success wave on completion */}
      <AnimatePresence>
        {isCompleted && (
          <motion.div
            initial={{ scale: 0.96, opacity: 1, filter: "blur(0px)" }}
            animate={{ scale: 1.12, opacity: 0, filter: "blur(4px)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute inset-0 rounded-2xl border-2 border-[#34A853] pointer-events-none -z-10"
          />
        )}
      </AnimatePresence>

      {/* Incoming wire physical docking socket on top center */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full border bg-white z-30 transition-colors duration-500 flex items-center justify-center ${
        isCompleted ? 'border-[#34A853]' : 'border-[#4285F4]'
      }`}>
        <div className={`w-1.5 h-1.5 rounded-full ${
          isCompleted ? 'bg-[#34A853]' : 'bg-[#4285F4]'
        }`} />
      </div>

      {/* Main Card Body */}
      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.96, filter: "blur(4px)" }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          scale: 1,
          filter: "blur(0px)",
          boxShadow: isCompleted 
            ? "0 10px 25px rgba(52, 168, 83, 0.08)" 
            : isProcessing 
              ? "0 15px 30px rgba(66, 133, 244, 0.12)" 
              : "0 4px 12px rgba(0,0,0,0.01)"
        }}
        transition={{ type: "spring", stiffness: 180, damping: 22 }}
        className={`w-full bg-white/98 backdrop-blur-md border rounded-2xl p-4 sm:p-5 transition-all duration-500 relative overflow-hidden ${
          isCompleted
            ? 'border-[#34A853] bg-emerald-50/10'
            : isProcessing
              ? 'border-[#4285F4] bg-blue-50/10 shadow-lg shadow-[#4285F4]/5'
              : 'border-[#E8EAED] bg-white'
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3.5 relative z-10">
            {/* Icon Shield/Wrapper */}
            <div className="relative shrink-0 mt-0.5">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-500 relative ${
                isCompleted
                  ? 'bg-[#34A853] border-[#34A853] text-white shadow-md shadow-[#34A853]/20'
                  : isProcessing
                    ? 'bg-[#4285F4] border-[#4285F4] text-white shadow-md shadow-[#4285F4]/20'
                    : 'bg-gray-50 border-[#E8EAED] text-gray-400'
              }`}>
                {isCompleted ? (
                  <motion.div
                    initial={{ scale: 0.5, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <Check className="w-5 h-5 stroke-[3]" />
                  </motion.div>
                ) : (
                  <div className={isProcessing ? "animate-pulse" : ""}>
                    {icon}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-1 text-left">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider">
                  Phase {stepNumber}
                </span>
                <span className="text-xs font-bold text-[#202124]">
                  {title}
                </span>
              </div>

              <p className={`text-xs sm:text-sm font-semibold leading-relaxed transition-colors ${
                isCompleted ? 'text-[#202124]' : 'text-[#4285F4]'
              }`}>
                {isCompleted ? completedText : processingText}
              </p>
            </div>
          </div>

          {/* Right Status Badge */}
          <div className="shrink-0 pt-0.5">
            <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border tracking-tight uppercase transition-all duration-500 ${
              isCompleted
                ? 'bg-emerald-50 text-[#34A853] border-emerald-200'
                : 'bg-blue-50 text-[#4285F4] border-blue-200 animate-pulse'
            }`}>
              {isCompleted ? detailPill : "Syncing..."}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Outgoing wire physical docking socket on bottom center */}
      {!isLast && (
        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full border bg-white z-30 transition-colors duration-500 flex items-center justify-center ${
          isCompleted ? 'border-[#34A853]' : 'border-[#4285F4]'
        }`}>
          <div className={`w-1.5 h-1.5 rounded-full ${
            isCompleted ? 'bg-[#34A853]' : 'bg-[#4285F4]'
          }`} />
        </div>
      )}
    </div>
  );
};

export const WorkflowSync: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.15 });

  const [phase, setPhase] = useState<'idle' | 'running' | 'completed'>('idle');
  const [pulseActive, setPulseActive] = useState(false);
  const [activeNode, setActiveNode] = useState<number>(0); // 1 to 4 representing current animating line segment/node
  const [nodeStates, setNodeStates] = useState<('hidden' | 'processing' | 'completed')[]>([
    'hidden', 'hidden', 'hidden', 'hidden'
  ]);

  // Generate floating particle definitions for a beautiful organic background effect
  const particles = Array.from({ length: 14 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 2,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 18 + 12,
    delay: Math.random() * -15,
    color: i % 2 === 0 ? '#4285F4' : '#34A853',
  }));

  const handleTrigger = () => {
    if (phase !== 'idle') return;

    setPulseActive(true);
    setPhase('running');
    setActiveNode(0);
  };

  // Auto-trigger when section enters viewport, and reset immediately when leaving viewport
  useEffect(() => {
    if (isInView) {
      if (phase === 'idle') {
        const timer = setTimeout(() => {
          handleTrigger();
        }, 300);
        return () => clearTimeout(timer);
      }
    } else {
      // Reset immediately if user scrolls out of view so animation doesn't run in background
      setPhase('idle');
      setActiveNode(0);
      setPulseActive(false);
      setNodeStates(['hidden', 'hidden', 'hidden', 'hidden']);
    }
  }, [isInView, phase]);

  // Timing logic for sequential line drawing and node processing
  useEffect(() => {
    if (phase !== 'running') return;

    if (activeNode === 0) {
      const t = setTimeout(() => {
        setPulseActive(false);
        setActiveNode(1);
      }, 1000);
      return () => clearTimeout(t);
    }

    if (activeNode === 1) {
      // Line segment 1 animates for 1.2s to reach Node 1
      const t1 = setTimeout(() => {
        setNodeStates(prev => {
          const next = [...prev];
          next[0] = 'processing';
          return next;
        });

        // After 1 second of processing, complete Node 1 and trigger Line 2
        const t2 = setTimeout(() => {
          setNodeStates(prev => {
            const next = [...prev];
            next[0] = 'completed';
            return next;
          });
          setActiveNode(2);
        }, 1000);

        return () => clearTimeout(t2);
      }, 1200);

      return () => clearTimeout(t1);
    }

    if (activeNode === 2) {
      // Line segment 2 animates for 1.2s to reach Node 2
      const t1 = setTimeout(() => {
        setNodeStates(prev => {
          const next = [...prev];
          next[1] = 'processing';
          return next;
        });

        // After 1 second of processing, complete Node 2 and trigger Line 3
        const t2 = setTimeout(() => {
          setNodeStates(prev => {
            const next = [...prev];
            next[1] = 'completed';
            return next;
          });
          setActiveNode(3);
        }, 1000);

        return () => clearTimeout(t2);
      }, 1200);

      return () => clearTimeout(t1);
    }

    if (activeNode === 3) {
      // Line segment 3 animates for 1.2s to reach Node 3
      const t1 = setTimeout(() => {
        setNodeStates(prev => {
          const next = [...prev];
          next[2] = 'processing';
          return next;
        });

        // After 1 second of processing, complete Node 3 and trigger Line 4
        const t2 = setTimeout(() => {
          setNodeStates(prev => {
            const next = [...prev];
            next[2] = 'completed';
            return next;
          });
          setActiveNode(4);
        }, 1000);

        return () => clearTimeout(t2);
      }, 1200);

      return () => clearTimeout(t1);
    }

    if (activeNode === 4) {
      // Line segment 4 animates for 1.2s to reach Node 4
      const t1 = setTimeout(() => {
        setNodeStates(prev => {
          const next = [...prev];
          next[3] = 'processing';
          return next;
        });

        // After 1.2s of processing, complete Node 4 and transition to finalized state
        const t2 = setTimeout(() => {
          setNodeStates(prev => {
            const next = [...prev];
            next[3] = 'completed';
            return next;
          });
          setPhase('completed');
        }, 1200);

        return () => clearTimeout(t2);
      }, 1200);

      return () => clearTimeout(t1);
    }
  }, [phase, activeNode]);

  // Smooth auto-reset after final state is complete to allow continuous presentation
  useEffect(() => {
    if (phase === 'completed') {
      const timer = setTimeout(() => {
        setPhase('idle');
        setActiveNode(0);
        setNodeStates(['hidden', 'hidden', 'hidden', 'hidden']);
      }, 8000); // 8 seconds to read the completed state before auto-looping
      return () => clearTimeout(timer);
    }
  }, [phase]);

  return (
    <section id="interactive-sandbox" ref={sectionRef} className="py-24 md:py-32 bg-white border-b border-[#E8EAED] relative overflow-hidden transition-colors duration-700">
      <motion.div 
        initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#202124] tracking-tight mb-5 leading-tight">
            See administrative work disappear.
          </h2>
          <p className="text-sm sm:text-base text-[#202124] font-medium leading-relaxed max-w-2xl mx-auto">
            Witness how Avantty instantly acts upon a finished interview in the background. Traditional administrative overhead dissolves automatically as candidate records and documents populate live.
          </p>
        </div>

        {/* Master Storytelling Canvas */}
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
          
          {/* Card 0: Initial Trigger Point (Interview Completed) */}
          <div className="relative w-full max-w-md">
            
            {/* Concentric ripple rings around the trigger card while running */}
            <AnimatePresence>
              {(phase === 'running') && (
                <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
                  <motion.div
                    initial={{ scale: 0.98, opacity: 0.5 }}
                    animate={{ scale: 1.15, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    className="absolute w-full h-full rounded-2xl border border-[#4285F4]/20"
                  />
                </div>
              )}
            </AnimatePresence>

            <motion.div
              layout
              animate={{
                scale: phase === 'running' ? 0.96 : 1,
                y: phase !== 'idle' ? -10 : 0,
                boxShadow: phase === 'completed' 
                  ? "0 15px 45px rgba(52, 168, 83, 0.15)" 
                  : phase === 'running'
                    ? "0 15px 40px rgba(66, 133, 244, 0.12)"
                    : "0 10px 30px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className={`w-full bg-white/95 backdrop-blur-md border rounded-2xl p-6 sm:p-8 transition-colors duration-500 z-30 relative ${
                phase === 'completed' ? 'border-[#34A853]' : phase === 'running' ? 'border-[#4285F4]' : 'border-[#E8EAED]'
              }`}
            >
              {/* Blue pulse background ring */}
              <AnimatePresence>
                {pulseActive && (
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0.8 }}
                    animate={{ scale: 2.1, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute inset-0 rounded-2xl border-4 border-[#4285F4] bg-[#4285F4]/10 pointer-events-none -z-10"
                  />
                )}
              </AnimatePresence>

              <div className="flex items-center justify-between pb-4 border-b border-[#E8EAED] mb-5">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#4285F4]">
                  Executive Search
                </span>
                <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full border ${
                  phase === 'completed' 
                    ? 'text-[#34A853] bg-[#34A853]/5 border-[#34A853]/15' 
                    : 'text-[#FBBC05] bg-[#FBBC05]/5 border-[#FBBC05]/15'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    phase === 'completed' ? 'bg-[#34A853]' : 'bg-[#FBBC05] animate-pulse'
                  }`} />
                  {phase === 'completed' ? 'Completed' : 'Interview Completed'}
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-[10px] font-mono font-extrabold uppercase text-gray-400 tracking-wider block">Candidate</label>
                  <div className="text-base sm:text-lg font-bold text-[#202124]">Sarah Johnson</div>
                </div>

                <div>
                  <label className="text-[10px] font-mono font-extrabold uppercase text-gray-400 tracking-wider block">Position</label>
                  <div className="text-sm sm:text-base font-semibold text-gray-700">Chief Financial Officer</div>
                </div>

                <div className="pt-2">
                  <div className={`flex items-center justify-between p-3 border rounded-xl transition-colors duration-500 ${
                    phase === 'completed' ? 'bg-emerald-50/20 border-emerald-100' : 'bg-blue-50/50 border-blue-100/50'
                  }`}>
                    <span className={`text-xs font-bold uppercase tracking-wider ${
                      phase === 'completed' ? 'text-[#34A853]' : 'text-[#4285F4]'
                    }`}>Interview Status</span>
                    <span className="text-xs font-bold text-[#202124] bg-white border border-[#E8EAED] px-3 py-1 rounded-lg shadow-sm">
                      {phase === 'completed' ? '✓ Handled' : 'Completed'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#E8EAED]">
                <button
                  disabled={phase !== 'idle'}
                  onClick={handleTrigger}
                  className={`w-full py-3.5 px-5 text-sm font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                    phase === 'running'
                      ? 'bg-blue-50 text-[#4285F4] border border-blue-200 shadow-none'
                      : phase === 'completed'
                        ? 'bg-emerald-50 text-[#34A853] border border-emerald-200 shadow-none'
                        : 'bg-[#202124] text-white hover:bg-[#4285F4] active:scale-[0.98] hover:shadow-lg hover:shadow-[#4285F4]/15'
                  }`}
                >
                  {phase === 'running' ? (
                    <span className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold">
                      <span className="w-2 h-2 rounded-full bg-[#4285F4] animate-ping" />
                      Auto-Processing Background Pipeline...
                    </span>
                  ) : phase === 'completed' ? (
                    <span className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold">
                      <Check className="w-4 h-4 stroke-[3]" />
                      Workflow Synchronized
                    </span>
                  ) : (
                    <>
                      <span>Re-run Background Automation</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            {/* Socket Dock on base center */}
            {phase !== 'idle' && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3.5 h-3.5 rounded-full border bg-white z-40 transition-colors duration-500 flex items-center justify-center ${
                  phase === 'completed' ? 'border-[#34A853]' : 'border-[#4285F4]'
                }`}
              >
                <div className={`w-1.5 h-1.5 rounded-full ${
                  phase === 'completed' ? 'bg-[#34A853]' : 'bg-[#4285F4] animate-ping'
                }`} />
              </motion.div>
            )}
          </div>

          {/* Sequential Workflow Timeline container */}
          <div className="w-full flex flex-col items-center relative">
            
            {/* The sweeping subtle pulse light travels through the complete path at final completed state */}
            {phase === 'completed' && (
              <motion.div
                initial={{ top: 0, opacity: 0 }}
                animate={{ 
                  top: ["0%", "100%"],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{ 
                  duration: 2.8, 
                  repeat: Infinity, 
                  ease: "easeInOut"
                }}
                className="absolute left-1/2 -translate-x-1/2 w-4 h-16 bg-gradient-to-b from-[#4285F4] via-[#34A853] to-transparent rounded-full blur-[4px] shadow-[0_0_12px_#4285F4] pointer-events-none z-20"
              />
            )}

            {/* Line Segment 1 */}
            <ConnectingLine 
              isActive={activeNode >= 1} 
              isFilled={activeNode > 1 || phase === 'completed'} 
            />

            {/* Node 1: Unstructured Voice & Speech Processing */}
            <WorkflowNode
              state={nodeStates[0]}
              stepNumber={1}
              title="Voice & Speech Audio Processing"
              processingText="Transcribing spoken recruiter notes & extracting key candidate highlights..."
              completedText="Spoken interview notes parsed & structured into executive bullet points"
              detailPill="Audio Parsed"
              icon={<Mic className="w-4 h-4 text-[#4285F4]" />}
            />

            {/* Line Segment 2 */}
            <ConnectingLine 
              isActive={activeNode >= 2} 
              isFilled={activeNode > 2 || phase === 'completed'} 
            />

            {/* Node 2: Executive AI Profiling & Scorecard */}
            <WorkflowNode
              state={nodeStates[1]}
              stepNumber={2}
              title="Executive AI Profiling Engine"
              processingText="Evaluating leadership competencies, salary requirements & scorecards..."
              completedText="Executive Scorecard generated (94% Leadership Fit • $380k Base)"
              detailPill="Scorecard 94%"
              icon={<Cpu className="w-4 h-4 text-[#34A853]" />}
            />

            {/* Line Segment 3 */}
            <ConnectingLine 
              isActive={activeNode >= 3} 
              isFilled={activeNode > 3 || phase === 'completed'} 
            />

            {/* Node 3: Multi-System Database & ATS Sync */}
            <WorkflowNode
              state={nodeStates[2]}
              stepNumber={3}
              title="ATS & Database Auto-Sync"
              processingText="Updating Bullhorn/Loxo ATS candidate stage & internal master sheet..."
              completedText="Candidate status updated to 'Client Review' in ATS & spreadsheet populated"
              detailPill="ATS Synced"
              icon={<Database className="w-4 h-4 text-[#FBBC05]" />}
            />

            {/* Line Segment 4 */}
            <ConnectingLine 
              isActive={activeNode >= 4} 
              isFilled={phase === 'completed'} 
            />

            {/* Node 4: Client Portal & PDF Dossier Generation */}
            <WorkflowNode
              state={nodeStates[3]}
              stepNumber={4}
              title="Executive Client Portal & Dossier"
              processingText="Publishing live status portal link & building C-suite branded PDF..."
              completedText="Client portal live link updated & branded C-suite PDF dossier generated"
              detailPill="PDF Dossier Live"
              icon={<FileCheck className="w-4 h-4 text-[#EA4335]" />}
              isLast={true}
            />

            {/* Final Completed Magic Success Message Box */}
            <AnimatePresence>
              {phase === 'completed' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="mt-10 p-6 sm:p-8 bg-emerald-50/80 border-2 border-[#34A853]/20 rounded-2xl text-center space-y-2 max-w-lg w-full shadow-[0_15px_40px_rgba(52,168,83,0.12)] relative overflow-hidden z-25"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-emerald-100/10 pointer-events-none" />
                  
                  <div className="w-12 h-12 rounded-full bg-[#34A853] text-white flex items-center justify-center mx-auto mb-3 shadow-md shadow-emerald-200">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-[#202124]">
                    Everything completed automatically in seconds.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3C4043] font-normal leading-relaxed">
                    Zero manual copy-pasting, zero typing, zero status reports. Consultants stay 100% focused on recruiting.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </motion.div>
    </section>
  );
};
