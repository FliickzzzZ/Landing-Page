import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { Video, Mic, PhoneOff, Bot, Sparkles, CheckCircle2 } from 'lucide-react';
import TextType from './TextType';
import ShinyText from './ShinyText';

type WithAvanttyPhase = 'MEETING' | 'TRANSCRIBING_OVERLAY';

export const WithAvanttySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.25 });

  const [phase, setPhase] = useState<WithAvanttyPhase>('MEETING');

  // Animation cycle timer: 6 seconds meeting -> transcribing white screen -> restart
  useEffect(() => {
    if (!isInView) {
      setPhase('MEETING');
      return;
    }

    let timer: NodeJS.Timeout;

    if (phase === 'MEETING') {
      timer = setTimeout(() => {
        setPhase('TRANSCRIBING_OVERLAY');
      }, 6000);
    } else if (phase === 'TRANSCRIBING_OVERLAY') {
      timer = setTimeout(() => {
        setPhase('MEETING');
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [phase, isInView]);

  return (
    <section ref={sectionRef} id="with-avantty" className="relative bg-gradient-to-b from-blue-50/40 via-white to-white pt-16 pb-24 sm:pb-32">
      
      {/* Simple Clean Section Separator Line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="w-full border-t border-gray-200" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-5 text-left">
            <TextType 
              as="h2"
              text="With Avantty"
              typingSpeed={100}
              pauseDuration={3000}
              showCursor={true}
              cursorCharacter="|"
              startOnVisible={true}
              loop={false}
              className="font-display text-3xl sm:text-5xl font-extrabold text-[#000000] tracking-tight leading-[1.15] mb-6"
            />

            <motion.p 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed"
            >
              Our bot joins your meetings automatically. The moment the call ends, Avantty extracts all critical details.
            </motion.p>
          </div>

          {/* Right Column: Simulated Macbook Meeting Window */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 relative w-full"
          >
            {/* Outer Soft Lavender Gradient Container matching mockup style */}
            <div className="rounded-[32px] bg-gradient-to-b from-[#F3F0FD]/80 to-[#EAE5FA]/80 p-5 sm:p-10 shadow-xs">
              <div className="relative mx-auto rounded-2xl bg-white shadow-xl overflow-hidden min-h-[460px]">
                
                {/* macOS Window Header */}
                <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-200 relative">
                  <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56]" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 text-xs font-semibold text-gray-500 font-sans tracking-tight">
                    Avantty Meeting Assistant
                  </div>
                  <div className="w-12" />
                </div>

              {/* Window Body Container */}
              <div className="bg-[#FAFAFA] p-5 sm:p-6 text-left font-sans text-black min-h-[420px] flex flex-col justify-between relative overflow-hidden">
                
                {/* 1. SIMULATED 3-PARTICIPANT MEETING CALL PHASE */}
                {phase === 'MEETING' && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white border border-gray-200 text-gray-900 rounded-xl p-4 sm:p-5 flex-1 flex flex-col justify-between shadow-2xs relative overflow-hidden"
                  >
                    {/* Top Call Info Bar */}
                    <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-gray-800">Automated Sync & Note Extraction</span>
                      </div>
                      <div className="text-xs text-gray-500 font-mono">3 Participants</div>
                    </div>

                    {/* 3 Participants Tiles Grid */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 my-4 flex-1">
                      
                      {/* Worker Tile */}
                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-2.5 sm:p-3 flex flex-col items-center justify-center relative overflow-hidden group">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-bold mb-2 shadow-md ring-4 ring-blue-50">
                          W
                        </div>
                        <div className="text-xs font-bold text-gray-900 truncate">Worker</div>
                        <div className="text-[10px] text-gray-500 truncate">Recruiter</div>
                        
                        <div className="absolute top-2 right-2 bg-white border border-gray-200 p-1 rounded-md text-emerald-600 flex items-center gap-1 shadow-2xs">
                          <Mic className="w-3 h-3" />
                          <div className="flex items-end gap-0.5 h-2">
                            <span className="w-0.5 bg-emerald-500 animate-pulse h-full" />
                            <span className="w-0.5 bg-emerald-500 animate-pulse h-2/3" />
                          </div>
                        </div>
                      </div>

                      {/* Client Tile */}
                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-2.5 sm:p-3 flex flex-col items-center justify-center relative overflow-hidden group">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-purple-600 text-white flex items-center justify-center text-lg font-bold mb-2 shadow-md ring-4 ring-purple-50">
                          C
                        </div>
                        <div className="text-xs font-bold text-gray-900 truncate">Client</div>
                        <div className="text-[10px] text-gray-500 truncate">Manager</div>

                        <div className="absolute top-2 right-2 bg-white border border-gray-200 p-1 rounded-md text-gray-400 shadow-2xs">
                          <Mic className="w-3 h-3" />
                        </div>
                      </div>

                      {/* Bot Avantty Tile */}
                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-2.5 sm:p-3 flex flex-col items-center justify-center relative overflow-hidden group shadow-xs">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black text-white flex items-center justify-center mb-2 shadow-md ring-4 ring-gray-100">
                          <Bot className="w-6 h-6 sm:w-7 sm:h-7" />
                        </div>
                        <div className="text-xs font-extrabold text-black truncate flex items-center gap-1">
                          <span>Bot Avantty</span>
                        </div>
                        <div className="text-[10px] font-semibold text-gray-600 truncate">AI Note Taker</div>
                      </div>

                    </div>

                    {/* Bottom Control Buttons Bar */}
                    <div className="flex items-center justify-center gap-3 pt-2 border-t border-gray-100">
                      <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-200 flex items-center justify-center text-gray-600">
                        <Mic className="w-4 h-4" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-200 flex items-center justify-center text-gray-600">
                        <Video className="w-4 h-4" />
                      </div>
                      <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center text-white shadow-md">
                        <PhoneOff className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 2. TRANSCRIBING WHITE OVERLAY SCREEN */}
                <AnimatePresence>
                  {phase === 'TRANSCRIBING_OVERLAY' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-white z-30 flex flex-col items-center justify-center p-6 text-center shadow-inner rounded-2xl"
                    >
                      <motion.div
                        initial={{ scale: 0.9, y: 8 }}
                        animate={{ scale: 1, y: 0 }}
                        transition={{ duration: 0.35 }}
                        className="flex flex-col items-center max-w-md"
                      >
                        <div className="w-14 h-14 rounded-2xl bg-gray-100 border border-gray-300 text-black flex items-center justify-center mb-4 shadow-sm relative">
                          <Bot className="w-7 h-7 text-black" />
                        </div>
                        
                        <h3 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight mb-2 font-display">
                          <ShinyText 
                            text="Avantty is transcribing key meeting insights..." 
                            color="#000000" 
                            shineColor="#444444" 
                            speed={2} 
                            spread={120} 
                          />
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 font-semibold leading-relaxed">
                          Extracting key metrics, deal terms, and candidate profiles instantly with 100% precision.
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>
          </div>
        </motion.div>

        </div>
      </div>

    </section>
  );
};
