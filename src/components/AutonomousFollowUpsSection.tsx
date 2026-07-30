import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { Mail, Send, Paperclip, Check, MousePointer } from 'lucide-react';
import TextType from './TextType';
import ShinyText from './ShinyText';

type AnimationPhase = 
  | 'TEMPLATE_LOADING'
  | 'AUTO_FILLING'
  | 'MOVING_TO_SEND'
  | 'SENDING'
  | 'SENT_SUCCESS';

export const AutonomousFollowUpsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.2 });

  const [phase, setPhase] = useState<AnimationPhase>('TEMPLATE_LOADING');
  const [fillStep, setFillStep] = useState<number>(0);
  const [cursorPos, setCursorPos] = useState({ x: 280, y: 220 });
  const [isClicking, setIsClicking] = useState(false);

  // Cycle sequence:
  // TEMPLATE_LOADING -> AUTO_FILLING -> MOVING_TO_SEND -> SENDING -> SENT_SUCCESS -> Loop
  useEffect(() => {
    if (!isInView) {
      setPhase('TEMPLATE_LOADING');
      setFillStep(0);
      setCursorPos({ x: 280, y: 220 });
      setIsClicking(false);
      return;
    }

    let timer: NodeJS.Timeout;

    if (phase === 'TEMPLATE_LOADING') {
      setFillStep(0);
      setCursorPos({ x: 280, y: 220 });
      setIsClicking(false);
      timer = setTimeout(() => setPhase('AUTO_FILLING'), 1000);
    } else if (phase === 'AUTO_FILLING') {
      const stepInterval = setInterval(() => {
        setFillStep((prev) => {
          if (prev >= 3) {
            clearInterval(stepInterval);
            setTimeout(() => setPhase('MOVING_TO_SEND'), 300);
            return 3;
          }
          return prev + 1;
        });
      }, 500);

      return () => clearInterval(stepInterval);
    } else if (phase === 'MOVING_TO_SEND') {
      // Move mouse pointer straight to the Send button in top toolbar (x: 52, y: 62)
      setCursorPos({ x: 52, y: 62 });

      timer = setTimeout(() => {
        // Click Send button
        setIsClicking(true);
        timer = setTimeout(() => {
          setIsClicking(false);
          setPhase('SENDING');
        }, 180);
      }, 650);

    } else if (phase === 'SENDING') {
      timer = setTimeout(() => {
        setCursorPos({ x: 300, y: 320 });
        setPhase('SENT_SUCCESS');
      }, 700);
    } else if (phase === 'SENT_SUCCESS') {
      timer = setTimeout(() => setPhase('TEMPLATE_LOADING'), 3000);
    }

    return () => clearTimeout(timer);
  }, [phase, isInView]);

  return (
    <section ref={sectionRef} id="autonomous-followups" className="relative bg-white py-24 sm:py-32 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-5 text-left">
            <TextType 
              as="h2"
              text="Autonomous Follow-Ups"
              typingSpeed={90}
              pauseDuration={3000}
              showCursor={true}
              cursorCharacter="|"
              startOnVisible={true}
              loop={false}
              className="font-display text-3xl sm:text-5xl font-extrabold text-black tracking-tight leading-[1.15] mb-6"
            />

            <motion.p 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base sm:text-lg text-black font-medium leading-relaxed"
            >
              Candidate follow-ups are now completely automatic. Avantty takes care of every email after the interview. It automatically puts the name and information into your template and sends it. Simple, fast, and zero effort.
            </motion.p>
          </div>

          {/* Right Column: Email Animation Container styled like image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 relative w-full"
          >
            {/* Outer Soft Lavender Gradient Container matching screenshot */}
            <div className="rounded-[32px] bg-gradient-to-b from-[#F3F0FD]/80 to-[#EAE5FA]/80 p-5 sm:p-10 shadow-xs">
              
              {/* Inner macOS Mail Window matching screenshot */}
              <div className="relative mx-auto rounded-2xl bg-white shadow-xl overflow-hidden min-h-[440px] flex flex-col justify-between">
                
                {/* Simulated Mouse Cursor moving precisely to Send button or resting */}
                <motion.div
                  animate={{ 
                    x: cursorPos.x,
                    y: cursorPos.y,
                    scale: isClicking ? 0.8 : 1
                  }}
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.25, 0.1, 0.25, 1.0] 
                  }}
                  className="absolute top-0 left-0 pointer-events-none z-40 text-black drop-shadow-md"
                >
                  <MousePointer className="w-5 h-5 fill-black text-white" />
                </motion.div>

                {/* macOS Window Header */}
                <div className="bg-white px-4 py-3 border-b border-gray-200 relative flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56]" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F]" />
                  </div>
                  
                  {/* Centered Window Title */}
                  <div className="absolute left-1/2 -translate-x-1/2 text-xs font-semibold text-gray-500 font-sans tracking-tight">
                    New Message
                  </div>

                  <div className="w-12" /> {/* Spacer */}
                </div>

                {/* Toolbar matching screenshot (Send button, paperclip, A / B buttons) */}
                <div className="px-5 py-2.5 border-b border-gray-100 flex items-center gap-3 bg-white relative z-10">
                  <button 
                    disabled={phase !== 'SENDING' && phase !== 'SENT_SUCCESS'}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs ${
                      phase === 'SENT_SUCCESS' 
                        ? 'bg-black text-white' 
                        : phase === 'SENDING'
                        ? 'bg-[#2563EB] text-white opacity-90'
                        : isClicking
                        ? 'bg-blue-700 text-white scale-95'
                        : 'bg-[#2563EB] hover:bg-blue-600 text-white'
                    }`}
                  >
                    {phase === 'SENT_SUCCESS' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-white" />
                        <span>Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-white fill-white" />
                        <span>Send</span>
                      </>
                    )}
                  </button>

                  <div className="text-gray-400 hover:text-gray-600 cursor-pointer p-1">
                    <Paperclip className="w-4 h-4 text-gray-400" />
                  </div>

                  <div className="h-4 w-px bg-gray-200" />

                  <div className="flex items-center gap-1">
                    <span className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-500">
                      A
                    </span>
                    <span className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-500">
                      B
                    </span>
                  </div>
                </div>

                {/* Email Form Fields matching screenshot */}
                <div className="bg-white text-left font-sans text-black p-5 flex-1 flex flex-col justify-between relative overflow-hidden">
                  
                  <div className="space-y-3">
                    
                    {/* To Row */}
                    <div className="flex items-center border-b border-gray-100 pb-2.5 text-xs">
                      <span className="w-16 text-gray-400 font-medium">To:</span>
                      <div className="flex-1 font-semibold text-black">
                        {fillStep >= 1 ? (
                          <motion.span 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }}
                            className="font-medium text-black"
                          >
                            sarah.jenkins@techdev.io
                          </motion.span>
                        ) : (
                          <span className="text-gray-300 italic">&#123;candidate_email&#125;</span>
                        )}
                      </div>
                    </div>

                    {/* Subject Row */}
                    <div className="flex items-center border-b border-gray-100 pb-2.5 text-xs">
                      <span className="w-16 text-gray-400 font-medium">Subject:</span>
                      <div className="flex-1 font-bold text-black flex items-center gap-1">
                        {fillStep >= 2 ? (
                          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            Follow-up: Next steps for Senior Software Engineer
                          </motion.span>
                        ) : (
                          <span className="text-gray-300 font-normal italic">Follow-up regarding your interview</span>
                        )}
                        <span className="w-0.5 h-3.5 bg-blue-600 animate-pulse inline-block" />
                      </div>
                    </div>

                    {/* Email Message Body */}
                    <div className="pt-3 text-xs sm:text-sm text-black leading-relaxed font-sans space-y-3">
                      <p>
                        Hi{' '}
                        {fillStep >= 1 ? (
                          <motion.span 
                            initial={{ bg: '#000000', color: '#ffffff' }}
                            animate={{ bg: '#f3f4f6', color: '#000000' }}
                            className="font-bold px-1.5 py-0.5 rounded bg-gray-200 border border-gray-300"
                          >
                            Sarah
                          </motion.span>
                        ) : (
                          <span className="bg-yellow-100 text-yellow-800 font-mono px-1 py-0.5 rounded border border-yellow-300">
                            &#123;candidate_first_name&#125;
                          </span>
                        )}
                        ,
                      </p>

                      <p className="text-gray-800 font-normal">
                        Thank you for speaking with our team regarding the{' '}
                        {fillStep >= 2 ? (
                          <motion.span 
                            initial={{ bg: '#000000', color: '#ffffff' }}
                            animate={{ bg: '#f3f4f6', color: '#000000' }}
                            className="font-bold px-1.5 py-0.5 rounded bg-gray-200 border border-gray-300"
                          >
                            Senior Software Engineer
                          </motion.span>
                        ) : (
                          <span className="bg-yellow-100 text-yellow-800 font-mono px-1 py-0.5 rounded border border-yellow-300">
                            &#123;job_position&#125;
                          </span>
                        )}
                        {' '}role. We were impressed by your expertise in{' '}
                        {fillStep >= 3 ? (
                          <motion.span 
                            initial={{ bg: '#000000', color: '#ffffff' }}
                            animate={{ bg: '#f3f4f6', color: '#000000' }}
                            className="font-bold px-1.5 py-0.5 rounded bg-gray-200 border border-gray-300"
                          >
                            TypeScript, React & Microservices
                          </motion.span>
                        ) : (
                          <span className="bg-yellow-100 text-yellow-800 font-mono px-1 py-0.5 rounded border border-yellow-300">
                            &#123;key_skills&#125;
                          </span>
                        )}
                        .
                      </p>

                      <p className="text-gray-800 font-normal">
                        We would love to invite you for the technical debrief round with our team this Thursday.
                      </p>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
