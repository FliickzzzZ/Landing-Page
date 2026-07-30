import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { MousePointer, Clock, Video, Mic, PhoneOff, User, Building2, CheckCircle2 } from 'lucide-react';
import TextType from './TextType';

type ActiveFieldKey = 
  | 'atsName' 
  | 'atsTitle' 
  | 'atsEmail' 
  | 'atsPhone' 
  | 'crmCompany' 
  | 'crmContact' 
  | 'crmEmail' 
  | 'crmPhone' 
  | 'none';

type SectionPhase = 
  | 'CLIENT_CALL' 
  | 'CALL_1_ENDED'
  | 'FILL_CRM' 
  | 'CANDIDATE_CALL' 
  | 'CALL_2_ENDED'
  | 'FILL_ATS' 
  | 'FLASH_OVERLAY';

const INITIAL_CRM = {
  crmCompany: '',
  crmContact: '',
  crmEmail: '',
  crmPhone: '',
};

const INITIAL_ATS = {
  atsName: '',
  atsTitle: '',
  atsEmail: '',
  atsPhone: '',
};

interface Frame {
  field: ActiveFieldKey;
  crmValues: { crmCompany: string; crmContact: string; crmEmail: string; crmPhone: string };
  atsValues: { atsName: string; atsTitle: string; atsEmail: string; atsPhone: string };
  isClicking?: boolean;
  delay: number;
}

// Generate frames for STEP 1: CRM Client Typing
function generateCrmFrames(): Frame[] {
  const frames: Frame[] = [];
  let curCrm = { ...INITIAL_CRM };
  const curAts = { ...INITIAL_ATS };

  const addFrame = (field: ActiveFieldKey, crmUpdate: Partial<typeof INITIAL_CRM>, delay: number, isClicking = false) => {
    curCrm = { ...curCrm, ...crmUpdate };
    frames.push({ field, crmValues: { ...curCrm }, atsValues: { ...curAts }, delay, isClicking });
  };

  // Company Name
  addFrame('crmCompany', {}, 180, false);
  addFrame('crmCompany', {}, 80, true);
  const companyStr = "Acme Global Corp";
  let str1 = "";
  for (let i = 0; i < companyStr.length; i++) {
    str1 += companyStr[i];
    addFrame('crmCompany', { crmCompany: str1 }, 18);
  }
  addFrame('crmCompany', {}, 100);

  // Primary Contact
  addFrame('crmContact', {}, 160, false);
  addFrame('crmContact', {}, 80, true);
  const contactStr = "David Miller";
  let str2 = "";
  for (let i = 0; i < contactStr.length; i++) {
    str2 += contactStr[i];
    addFrame('crmContact', { crmContact: str2 }, 18);
  }
  addFrame('crmContact', {}, 100);

  // Email
  addFrame('crmEmail', {}, 160, false);
  addFrame('crmEmail', {}, 80, true);
  const emailStr = "d.miller@acmeglobal.com";
  let str3 = "";
  for (let i = 0; i < emailStr.length; i++) {
    str3 += emailStr[i];
    addFrame('crmEmail', { crmEmail: str3 }, 18);
  }
  addFrame('crmEmail', {}, 100);

  // Phone
  addFrame('crmPhone', {}, 160, false);
  addFrame('crmPhone', {}, 80, true);
  const phoneStr = "+1 (555) 012-9844";
  let str4 = "";
  for (let i = 0; i < phoneStr.length; i++) {
    str4 += phoneStr[i];
    addFrame('crmPhone', { crmPhone: str4 }, 18);
  }
  addFrame('none', {}, 250);

  return frames;
}

// Generate frames for STEP 2: ATS Candidate Typing
function generateAtsFrames(): Frame[] {
  const frames: Frame[] = [];
  const curCrm = { ...INITIAL_CRM };
  let curAts = { ...INITIAL_ATS };

  const addFrame = (field: ActiveFieldKey, atsUpdate: Partial<typeof INITIAL_ATS>, delay: number, isClicking = false) => {
    curAts = { ...curAts, ...atsUpdate };
    frames.push({ field, crmValues: { ...curCrm }, atsValues: { ...curAts }, delay, isClicking });
  };

  // Full Name
  addFrame('atsName', {}, 180, false);
  addFrame('atsName', {}, 80, true);
  const nameStr = "Sarah Jenkins";
  let str1 = "";
  for (let i = 0; i < nameStr.length; i++) {
    str1 += nameStr[i];
    addFrame('atsName', { atsName: str1 }, 18);
  }
  addFrame('atsName', {}, 100);

  // Title
  addFrame('atsTitle', {}, 160, false);
  addFrame('atsTitle', {}, 80, true);
  const titleStr = "Senior Software Engineer";
  let str2 = "";
  for (let i = 0; i < titleStr.length; i++) {
    str2 += titleStr[i];
    addFrame('atsTitle', { atsTitle: str2 }, 18);
  }
  addFrame('atsTitle', {}, 100);

  // Email
  addFrame('atsEmail', {}, 160, false);
  addFrame('atsEmail', {}, 80, true);
  const emailStr = "sarah.jenkins@techdev.io";
  let str3 = "";
  for (let i = 0; i < emailStr.length; i++) {
    str3 += emailStr[i];
    addFrame('atsEmail', { atsEmail: str3 }, 18);
  }
  addFrame('atsEmail', {}, 100);

  // Phone
  addFrame('atsPhone', {}, 160, false);
  addFrame('atsPhone', {}, 80, true);
  const phoneStr = "+1 (555) 019-2831";
  let str4 = "";
  for (let i = 0; i < phoneStr.length; i++) {
    str4 += phoneStr[i];
    addFrame('atsPhone', { atsPhone: str4 }, 18);
  }
  addFrame('none', {}, 250);

  return frames;
}

const crmAnimationFrames = generateCrmFrames();
const atsAnimationFrames = generateAtsFrames();

export const ManuallySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);

  // Field refs for accurate cursor tracking
  const fieldRefs: Record<ActiveFieldKey, React.RefObject<HTMLDivElement | null>> = {
    atsName: useRef<HTMLDivElement>(null),
    atsTitle: useRef<HTMLDivElement>(null),
    atsEmail: useRef<HTMLDivElement>(null),
    atsPhone: useRef<HTMLDivElement>(null),
    crmCompany: useRef<HTMLDivElement>(null),
    crmContact: useRef<HTMLDivElement>(null),
    crmEmail: useRef<HTMLDivElement>(null),
    crmPhone: useRef<HTMLDivElement>(null),
    none: useRef<HTMLDivElement>(null),
  };

  const isInView = useInView(sectionRef, { amount: 0.25 });

  const [phase, setPhase] = useState<SectionPhase>('CLIENT_CALL');
  const [frameIndex, setFrameIndex] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 120, y: 120 });

  // State Machine controller
  useEffect(() => {
    if (!isInView) {
      setPhase('CLIENT_CALL');
      setFrameIndex(0);
      return;
    }

    let timer: NodeJS.Timeout;

    if (phase === 'CLIENT_CALL') {
      // 1. Client Call (2.8s)
      timer = setTimeout(() => {
        setPhase('CALL_1_ENDED');
      }, 2800);
} else if (phase === 'CALL_1_ENDED') {
  // 2. Call 1 ended overlay (1.4s) -> start CRM typing
  timer = setTimeout(() => {
    setFrameIndex(0);
    setPhase('FILL_CRM');
  }, 1400);
} else if (phase === 'CANDIDATE_CALL') {
  // 4. Candidate Call (2.8s)
  timer = setTimeout(() => {
    setPhase('CALL_2_ENDED');
  }, 2800);
} else if (phase === 'CALL_2_ENDED') {
  // 5. Call 2 ended overlay (1.4s) -> start ATS typing
  timer = setTimeout(() => {
    setFrameIndex(0);
    setPhase('FILL_ATS');
      }, 1400);
    } else if (phase === 'FLASH_OVERLAY') {
      // 7. Flash summary overlay (3.0s) -> loop back to start
      timer = setTimeout(() => {
        setPhase('CLIENT_CALL');
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [phase, isInView]);

  // CRM Frame loop
  useEffect(() => {
    if (!isInView || phase !== 'FILL_CRM') return;

    const current = crmAnimationFrames[frameIndex];

    const timer = setTimeout(() => {
      if (frameIndex >= crmAnimationFrames.length - 1) {
        setPhase('CANDIDATE_CALL');
      } else {
        setFrameIndex((prev) => prev + 1);
      }
    }, current?.delay || 60);

    return () => clearTimeout(timer);
  }, [frameIndex, isInView, phase]);

  // ATS Frame loop
  useEffect(() => {
    if (!isInView || phase !== 'FILL_ATS') return;

    const current = atsAnimationFrames[frameIndex];

    const timer = setTimeout(() => {
      if (frameIndex >= atsAnimationFrames.length - 1) {
        setPhase('FLASH_OVERLAY');
      } else {
        setFrameIndex((prev) => prev + 1);
      }
    }, current?.delay || 60);

    return () => clearTimeout(timer);
  }, [frameIndex, isInView, phase]);

  // Active frame state resolver
  const activeFrame: Frame = 
    phase === 'FILL_CRM' 
      ? crmAnimationFrames[frameIndex] || { field: 'none', crmValues: INITIAL_CRM, atsValues: INITIAL_ATS, isClicking: false, delay: 60 }
      : phase === 'FILL_ATS'
      ? atsAnimationFrames[frameIndex] || { field: 'none', crmValues: INITIAL_CRM, atsValues: INITIAL_ATS, isClicking: false, delay: 60 }
      : { field: 'none', crmValues: INITIAL_CRM, atsValues: INITIAL_ATS, isClicking: false, delay: 60 };

  // Update mouse cursor position to align directly over active target DOM input
  useEffect(() => {
    if (phase !== 'FILL_CRM' && phase !== 'FILL_ATS') return;

    const targetField = activeFrame.field;
    if (targetField !== 'none' && fieldRefs[targetField]?.current && formContainerRef.current) {
      const containerRect = formContainerRef.current.getBoundingClientRect();
      const fieldRect = fieldRefs[targetField].current!.getBoundingClientRect();

      setCursorPos({
        x: fieldRect.left - containerRect.left + 24,
        y: fieldRect.top - containerRect.top + 12,
      });
    }
  }, [activeFrame.field, phase]);

  return (
    <section ref={sectionRef} id="manually" className="relative bg-white pt-20 sm:pt-28 pb-16 sm:pb-24 overflow-hidden border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-5 text-left">
            <TextType 
              as="h2"
              text="Manually & Slow Work"
              typingSpeed={90}
              pauseDuration={3000}
              showCursor={true}
              cursorCharacter="|"
              startOnVisible={true}
              loop={false}
              className="font-display text-3xl sm:text-5xl font-extrabold text-black tracking-tight leading-[1.15] mb-6"
            />

            <p className="text-base sm:text-lg text-black font-medium leading-relaxed">
              Typing data by hand is slow and frustrating. Your team wastes hours typing candidate profiles into the ATS. They waste the exact same time typing client files into the CRM. Typos happen, critical details get forgotten, and time is wasted.
            </p>
          </div>

          {/* Right Column: Window Displaying the Sequence */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 relative w-full"
          >
            <div className="relative mx-auto rounded-2xl bg-white shadow-2xl overflow-hidden min-h-[460px]">
              
              {/* macOS Window Header */}
              <div className="bg-gray-100 px-4 py-3 flex items-center justify-between border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/10" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/10" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/10" />
                </div>
                <div className="text-[11px] font-semibold text-gray-700 font-mono flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                  {phase === 'CLIENT_CALL' ? '1. Client Requirement Call' :
                   phase === 'CALL_1_ENDED' ? 'Call Ended • Processing CRM' :
                   phase === 'FILL_CRM' ? 'Manual Data Entry • CRM Client File' :
                   phase === 'CANDIDATE_CALL' ? '2. Candidate Interview' :
                   phase === 'CALL_2_ENDED' ? 'Call Ended • Processing ATS' :
                   'Manual Data Entry • ATS Candidate Profile'}
                </div>
              </div>

              {/* Window Body Container */}
              <div className="bg-gray-50 p-4 sm:p-6 text-left font-sans text-black min-h-[420px] flex flex-col justify-between relative overflow-hidden">
                
                {/* 1. CALL 1: CLIENT INTAKE CALL */}
                {phase === 'CLIENT_CALL' && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="bg-white border border-gray-200 text-black rounded-xl p-6 flex-1 flex flex-col justify-between shadow-xs relative overflow-hidden"
                  >
                    <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="bg-black text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                          STEP 1: CLIENT CALL
                        </span>
                        <span className="text-xs font-bold text-black">Requirement Intake</span>
                      </div>
                      <div className="text-xs text-gray-500 font-mono">14:22</div>
                    </div>

                    <div className="my-auto py-8 flex flex-col items-center justify-center text-center">
                      <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center text-xl font-bold mb-3 shadow-md ring-4 ring-gray-100">
                        <Building2 className="w-8 h-8" />
                      </div>
                      <h4 className="text-lg sm:text-xl font-extrabold text-black">Acme Global Corp</h4>
                      <p className="text-xs sm:text-sm text-gray-600 font-medium mt-0.5">Contact: David Miller (VP Recruiting)</p>
                      <div className="mt-4 inline-flex items-center gap-1.5 bg-gray-100 text-black border border-gray-300 px-3 py-1 rounded-full text-xs font-bold">
                        <Mic className="w-3.5 h-3.5 text-black" />
                        <span>Discussing hiring requirements & deal terms...</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-3 pt-3 border-t border-gray-100">
                      <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700"><Mic className="w-4 h-4" /></div>
                      <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700"><Video className="w-4 h-4" /></div>
                      <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white shadow-md"><PhoneOff className="w-4 h-4" /></div>
                    </div>
                  </motion.div>
                )}

                {/* 2. CALL 1 ENDED OVERLAY */}
                {phase === 'CALL_1_ENDED' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-white z-30 flex flex-col items-center justify-center p-6 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0.9, y: 8 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                      className="flex flex-col items-center max-w-sm"
                    >
                      <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-3 shadow-xs">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight mb-1 font-display">
                        Client Call Ended
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 font-semibold">
                        Now manually typing client data into the CRM...
                      </p>
                    </motion.div>
                  </motion.div>
                )}

                {/* 3. CALL 2: CANDIDATE INTERVIEW CALL */}
                {phase === 'CANDIDATE_CALL' && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="bg-white border border-gray-200 text-black rounded-xl p-6 flex-1 flex flex-col justify-between shadow-xs relative overflow-hidden"
                  >
                    <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="bg-black text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                          STEP 2: CANDIDATE CALL
                        </span>
                        <span className="text-xs font-bold text-black">Technical Screening Call</span>
                      </div>
                      <div className="text-xs text-gray-500 font-mono">22:08</div>
                    </div>

                    <div className="my-auto py-8 flex flex-col items-center justify-center text-center">
                      <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center text-xl font-bold mb-3 shadow-md ring-4 ring-gray-100">
                        <User className="w-8 h-8" />
                      </div>
                      <h4 className="text-lg sm:text-xl font-extrabold text-black">Sarah Jenkins</h4>
                      <p className="text-xs sm:text-sm text-gray-600 font-medium mt-0.5">Role: Senior Software Engineer</p>
                      <div className="mt-4 inline-flex items-center gap-1.5 bg-gray-100 text-black border border-gray-300 px-3 py-1 rounded-full text-xs font-bold">
                        <Mic className="w-3.5 h-3.5 text-black" />
                        <span>Evaluating technical background & expectations...</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-3 pt-3 border-t border-gray-100">
                      <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700"><Mic className="w-4 h-4" /></div>
                      <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700"><Video className="w-4 h-4" /></div>
                      <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white shadow-md"><PhoneOff className="w-4 h-4" /></div>
                    </div>
                  </motion.div>
                )}

                {/* 4. CALL 2 ENDED OVERLAY */}
                {phase === 'CALL_2_ENDED' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-white z-30 flex flex-col items-center justify-center p-6 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0.9, y: 8 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                      className="flex flex-col items-center max-w-sm"
                    >
                      <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-3 shadow-xs">
                        <User className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight mb-1 font-display">
                        Candidate Call Ended
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 font-semibold">
                        Now manually typing candidate data into the ATS...
                      </p>
                    </motion.div>
                  </motion.div>
                )}

                {/* 5. FORM TYPING VIEW (SHOWS ONLY CRM IN PHASE FILL_CRM, ONLY ATS IN PHASE FILL_ATS) */}
                {(phase === 'FILL_CRM' || phase === 'FILL_ATS') && (
                  <div 
                    ref={formContainerRef} 
                    className="bg-white border border-gray-200 rounded-xl p-5 shadow-xs flex-1 flex flex-col justify-between relative"
                  >
                    {/* Top Header Status */}
                    <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-extrabold text-black uppercase tracking-wider">
                          Manual Data Entry
                        </span>
                      </div>
                      <div className="text-[11px] text-black font-mono font-bold flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-full border border-gray-300">
                        <span className="w-2 h-2 rounded-full bg-black animate-ping" />
                        {phase === 'FILL_CRM' ? 'Step 1: Typing Client File (CRM)' : 'Step 2: Typing Candidate Profile (ATS)'}
                      </div>
                    </div>

                    {/* ONLY CRM CARD IN FILL_CRM */}
                    {phase === 'FILL_CRM' && (
                      <div className="border border-gray-300 rounded-xl p-4 bg-gray-50/50 space-y-3.5 relative z-10 text-xs">
                        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-black" />
                            <span className="font-extrabold text-black uppercase tracking-tight">
                              CRM Client Profile
                            </span>
                          </div>
                          <span className="text-[10px] bg-black text-white font-bold px-2 py-0.5 rounded">
                            TYPING...
                          </span>
                        </div>

                        <div>
                          <label className="block font-bold text-gray-700 mb-1">Company Name</label>
                          <div 
                            ref={fieldRefs.crmCompany}
                            className={`flex items-center border rounded-lg px-3 py-2 bg-white font-mono min-h-[34px] ${
                              activeFrame.field === 'crmCompany' ? 'border-black ring-2 ring-black/10' : 'border-gray-200'
                            }`}
                          >
                            <span className="text-black font-semibold">{activeFrame.crmValues.crmCompany}</span>
                            {activeFrame.field === 'crmCompany' && <span className="w-1.5 h-4 bg-black ml-1 animate-pulse" />}
                          </div>
                        </div>

                        <div>
                          <label className="block font-bold text-gray-700 mb-1">Primary Contact</label>
                          <div 
                            ref={fieldRefs.crmContact}
                            className={`flex items-center border rounded-lg px-3 py-2 bg-white font-mono min-h-[34px] ${
                              activeFrame.field === 'crmContact' ? 'border-black ring-2 ring-black/10' : 'border-gray-200'
                            }`}
                          >
                            <span className="text-black font-semibold">{activeFrame.crmValues.crmContact}</span>
                            {activeFrame.field === 'crmContact' && <span className="w-1.5 h-4 bg-black ml-1 animate-pulse" />}
                          </div>
                        </div>

                        <div>
                          <label className="block font-bold text-gray-700 mb-1">Contact Email</label>
                          <div 
                            ref={fieldRefs.crmEmail}
                            className={`flex items-center border rounded-lg px-3 py-2 bg-white font-mono min-h-[34px] ${
                              activeFrame.field === 'crmEmail' ? 'border-black ring-2 ring-black/10' : 'border-gray-200'
                            }`}
                          >
                            <span className="text-black font-semibold">{activeFrame.crmValues.crmEmail}</span>
                            {activeFrame.field === 'crmEmail' && <span className="w-1.5 h-4 bg-black ml-1 animate-pulse" />}
                          </div>
                        </div>

                        <div>
                          <label className="block font-bold text-gray-700 mb-1">Contact Phone</label>
                          <div 
                            ref={fieldRefs.crmPhone}
                            className={`flex items-center border rounded-lg px-3 py-2 bg-white font-mono min-h-[34px] ${
                              activeFrame.field === 'crmPhone' ? 'border-black ring-2 ring-black/10' : 'border-gray-200'
                            }`}
                          >
                            <span className="text-black font-semibold">{activeFrame.crmValues.crmPhone}</span>
                            {activeFrame.field === 'crmPhone' && <span className="w-1.5 h-4 bg-black ml-1 animate-pulse" />}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ONLY ATS CARD IN FILL_ATS */}
                    {phase === 'FILL_ATS' && (
                      <div className="border border-gray-300 rounded-xl p-4 bg-gray-50/50 space-y-3.5 relative z-10 text-xs">
                        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-black" />
                            <span className="font-extrabold text-black uppercase tracking-tight">
                              ATS Candidate Profile
                            </span>
                          </div>
                          <span className="text-[10px] bg-black text-white font-bold px-2 py-0.5 rounded">
                            TYPING...
                          </span>
                        </div>

                        <div>
                          <label className="block font-bold text-gray-700 mb-1">Full Name</label>
                          <div 
                            ref={fieldRefs.atsName}
                            className={`flex items-center border rounded-lg px-3 py-2 bg-white font-mono min-h-[34px] ${
                              activeFrame.field === 'atsName' ? 'border-black ring-2 ring-black/10' : 'border-gray-200'
                            }`}
                          >
                            <span className="text-black font-semibold">{activeFrame.atsValues.atsName}</span>
                            {activeFrame.field === 'atsName' && <span className="w-1.5 h-4 bg-black ml-1 animate-pulse" />}
                          </div>
                        </div>

                        <div>
                          <label className="block font-bold text-gray-700 mb-1">Current Title</label>
                          <div 
                            ref={fieldRefs.atsTitle}
                            className={`flex items-center border rounded-lg px-3 py-2 bg-white font-mono min-h-[34px] ${
                              activeFrame.field === 'atsTitle' ? 'border-black ring-2 ring-black/10' : 'border-gray-200'
                            }`}
                          >
                            <span className="text-black font-semibold">{activeFrame.atsValues.atsTitle}</span>
                            {activeFrame.field === 'atsTitle' && <span className="w-1.5 h-4 bg-black ml-1 animate-pulse" />}
                          </div>
                        </div>

                        <div>
                          <label className="block font-bold text-gray-700 mb-1">Email Address</label>
                          <div 
                            ref={fieldRefs.atsEmail}
                            className={`flex items-center border rounded-lg px-3 py-2 bg-white font-mono min-h-[34px] ${
                              activeFrame.field === 'atsEmail' ? 'border-black ring-2 ring-black/10' : 'border-gray-200'
                            }`}
                          >
                            <span className="text-black font-semibold">{activeFrame.atsValues.atsEmail}</span>
                            {activeFrame.field === 'atsEmail' && <span className="w-1.5 h-4 bg-black ml-1 animate-pulse" />}
                          </div>
                        </div>

                        <div>
                          <label className="block font-bold text-gray-700 mb-1">Phone Number</label>
                          <div 
                            ref={fieldRefs.atsPhone}
                            className={`flex items-center border rounded-lg px-3 py-2 bg-white font-mono min-h-[34px] ${
                              activeFrame.field === 'atsPhone' ? 'border-black ring-2 ring-black/10' : 'border-gray-200'
                            }`}
                          >
                            <span className="text-black font-semibold">{activeFrame.atsValues.atsPhone}</span>
                            {activeFrame.field === 'atsPhone' && <span className="w-1.5 h-4 bg-black ml-1 animate-pulse" />}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Worker Mouse Cursor Simulation cleanly animated directly to target DOM inputs */}
                    {activeFrame.field !== 'none' && (
                      <motion.div
                        animate={{ 
                          x: cursorPos.x,
                          y: cursorPos.y,
                          scale: activeFrame.isClicking ? 0.75 : 1
                        }}
                        transition={{ 
                          duration: 0.25, 
                          ease: [0.22, 1, 0.36, 1] 
                        }}
                        className="absolute top-0 left-0 pointer-events-none z-30 text-black drop-shadow-md"
                      >
                        <MousePointer className="w-5 h-5 fill-black text-white" />
                      </motion.div>
                    )}

                  </div>
                )}

                {/* 6. FLASH OVERLAY (HOURS LOST SUMMARY) */}
                <AnimatePresence>
                  {phase === 'FLASH_OVERLAY' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="absolute inset-0 bg-white/98 backdrop-blur-md z-40 flex flex-col items-center justify-center p-6 text-center shadow-2xl"
                    >
                      <motion.div
                        initial={{ scale: 0.85, y: 10 }}
                        animate={{ scale: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="flex flex-col items-center max-w-md"
                      >
                        <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center mb-4 shadow-lg">
                          <Clock className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight mb-2 font-display">
                          Hours lost every single day...
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                          Hours of valuable team time wasted on tedious manual data entry into ATS candidate profiles and CRM client files.
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
