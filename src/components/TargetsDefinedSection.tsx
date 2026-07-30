import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { MousePointer, Building2, MapPin, ChevronRight, X, Target, CheckCircle2, Award, Briefcase, Code2, DollarSign, Layers, PlusCircle } from 'lucide-react';
import TextType from './TextType';

export const TargetsDefinedSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.2 });

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 180, y: 220 });
  const [isClicking, setIsClicking] = useState(false);

  // Animation cycle loop:
  // 1. Dashboard background visible (cursor moves towards "View Candidate Objective") -> 1.5s
  // 2. Click -> Opens Candidate Target Modal -> 6.5s
  // 3. Cursor moves to close / resets -> repeats
  useEffect(() => {
    if (!isInView) {
      setIsOpenModal(false);
      setCursorPos({ x: 180, y: 220 });
      setIsClicking(false);
      return;
    }

    let timeoutId: NodeJS.Timeout;

    const runLoop = () => {
      // Step 1: Start at dashboard card
      setIsOpenModal(false);
      setCursorPos({ x: 280, y: 190 });
      setIsClicking(false);

      // Step 2: Cursor moves to target profile row
      timeoutId = setTimeout(() => {
        setCursorPos({ x: 220, y: 210 });

        // Step 3: Click target profile card
        timeoutId = setTimeout(() => {
          setIsClicking(true);

          timeoutId = setTimeout(() => {
            setIsClicking(false);
            setIsOpenModal(true);
            setCursorPos({ x: 440, y: 380 });

            // Step 4: Modal stays open for inspection, then resets
            timeoutId = setTimeout(() => {
              setIsOpenModal(false);
              timeoutId = setTimeout(runLoop, 1000);
            }, 6500);

          }, 150);
        }, 800);
      }, 800);
    };

    runLoop();

    return () => clearTimeout(timeoutId);
  }, [isInView]);

  return (
    <section ref={sectionRef} id="targets-defined" className="relative bg-[#FAFAFA] py-24 sm:py-32 border-t border-gray-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-5 text-left">
            <TextType 
              as="h2"
              text="Targets are defined"
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
              Your next candidate objective is clear before you even start the day. By analyzing client interactions autonomously, Avantty generates a clear candidate profile right where you work. Zero time wasted checking the ATS; just open your dashboard and start sourcing.
            </motion.p>
          </div>

          {/* Right Column: Interactive Dashboard & Candidate Target Modal */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 relative w-full"
          >
            {/* Outer Soft Lavender Gradient Container matching mockup style */}
            <div className="rounded-[32px] bg-gradient-to-b from-[#F3F0FD]/80 to-[#EAE5FA]/80 p-5 sm:p-10 shadow-xs">
              
              <div className="relative mx-auto rounded-2xl bg-white shadow-xl overflow-hidden min-h-[520px]">
                
                {/* macOS Window Header */}
                <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-200 relative">
                  <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56]" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 text-xs font-semibold text-gray-500 font-sans tracking-tight flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-black" />
                    <span>Avantty Sourcing Dashboard</span>
                  </div>
                  <div className="w-12" />
                </div>

              {/* Dashboard Content Container */}
              <div className="bg-[#F8FAFC] p-4 sm:p-6 text-left font-sans text-black min-h-[480px] relative overflow-hidden flex flex-col justify-between">
                
                {/* Top Navigation & Metrics Header inside Dashboard */}
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-4">
                    <div>
                      <h3 className="text-sm font-extrabold text-black uppercase tracking-wider">
                        Today&apos;s Sourcing Objectives
                      </h3>
                      <p className="text-xs text-gray-600 font-medium mt-0.5">
                        Generated automatically from client intake calls
                      </p>
                    </div>
                    <span className="text-[11px] font-mono font-bold bg-black text-white px-2.5 py-1 rounded-md">
                      3 Targets Defined
                    </span>
                  </div>

                  {/* Target Profile List Row Cards */}
                  <div className="space-y-3">
                    
                    {/* Primary Target Candidate Profile Card */}
                    <div 
                      className={`p-3.5 bg-white border rounded-xl transition-all shadow-xs flex items-center justify-between cursor-pointer ${
                        isOpenModal ? 'border-black ring-2 ring-black/10' : 'border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-black text-white font-extrabold flex items-center justify-center text-xs shadow-xs">
                          <Target className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-black">Target Profile #104</span>
                            <span className="bg-black text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                              Active Target
                            </span>
                          </div>
                          <div className="text-xs text-black font-medium flex items-center gap-2 mt-0.5">
                            <span className="font-semibold">Senior Fullstack Engineer</span>
                            <span>•</span>
                            <span className="text-gray-600">Client Requisition: Acme Corp</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-bold text-black bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200">
                        <span>Inspect Objective</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Secondary Placeholder Target Row 2 */}
                    <div className="p-3.5 bg-white border border-gray-200 rounded-xl opacity-60 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-gray-200 flex items-center justify-center font-bold text-black text-xs">
                          #105
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-black">Target Profile #105</span>
                            <span className="bg-gray-200 text-black text-[10px] font-bold px-2 py-0.5 rounded-full">
                              Pending Sourcing
                            </span>
                          </div>
                          <div className="text-xs text-gray-600 font-medium mt-0.5">
                            VP of Product Management • Requisition: Nexus AI
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Secondary Placeholder Target Row 3 */}
                    <div className="p-3.5 bg-white border border-gray-200 rounded-xl opacity-40 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-gray-200 flex items-center justify-center font-bold text-black text-xs">
                          #106
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-black">Target Profile #106</span>
                            <span className="bg-gray-200 text-black text-[10px] font-bold px-2 py-0.5 rounded-full">
                              Pending Sourcing
                            </span>
                          </div>
                          <div className="text-xs text-gray-600 font-medium mt-0.5">
                            Lead AI Researcher • Requisition: Veloce Labs
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Simulated Mouse Cursor in background */}
                <motion.div
                  animate={{ 
                    x: cursorPos.x,
                    y: cursorPos.y,
                    scale: isClicking ? 0.82 : 1
                  }}
                  transition={{ 
                    duration: 0.4, 
                    ease: [0.25, 0.1, 0.25, 1.0] 
                  }}
                  className="absolute top-0 left-0 pointer-events-none z-30 text-black drop-shadow-md"
                >
                  <MousePointer className="w-5 h-5 fill-black text-white" />
                </motion.div>

                {/* MODAL POPUP: Target Candidate Specification Profile */}
                <AnimatePresence>
                  {isOpenModal && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 10 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      className="absolute inset-2 sm:inset-3 bg-white border border-gray-300 rounded-xl shadow-2xl z-40 p-4 sm:p-5 flex flex-col justify-between overflow-y-auto"
                    >
                      {/* Modal Header */}
                      <div>
                        {/* Target Client Banner */}
                        <div className="bg-gray-100 border border-gray-200 rounded-lg p-2 mb-3 flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-black" />
                            <span className="text-gray-600 font-medium">REQUISITION CLIENT:</span>
                            <span className="font-extrabold text-black">Acme Corp</span>
                          </div>
                        </div>

                        <div className="flex items-start justify-between border-b border-gray-200 pb-3 mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-bold">
                              <Target className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="text-base font-extrabold text-black">Target Profile #104</h4>
                              </div>
                              <p className="text-xs font-semibold text-black mt-0.5">
                                Candidate Search Objective & Sourcing Criteria
                              </p>
                            </div>
                          </div>

                          <button 
                            onClick={() => setIsOpenModal(false)}
                            className="p-1 rounded-md text-gray-400 hover:text-black hover:bg-gray-100"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Requested Template Fields */}
                        <div className="space-y-2.5 text-xs">
                          
                          {/* 1. Role / Job Title & 3. Experience Level */}
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-2">
                              <div className="text-[10px] font-bold text-black uppercase flex items-center gap-1 mb-0.5">
                                <Briefcase className="w-3 h-3 text-black" />
                                Role / Job Title
                              </div>
                              <div className="font-bold text-black">Senior Fullstack Engineer</div>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-2">
                              <div className="text-[10px] font-bold text-black uppercase flex items-center gap-1 mb-0.5">
                                <Award className="w-3 h-3 text-black" />
                                Experience Level
                              </div>
                              <div className="font-bold text-black">5+ Years (Senior / Staff)</div>
                            </div>
                          </div>

                          {/* 4. Target Salary Range & 5. Location / Workspace */}
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-2">
                              <div className="text-[10px] font-bold text-black uppercase flex items-center gap-1 mb-0.5">
                                <DollarSign className="w-3 h-3 text-black" />
                                Target Salary Range
                              </div>
                              <div className="font-bold text-black font-mono">$160,000 - $185,000 / year</div>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-2">
                              <div className="text-[10px] font-bold text-black uppercase flex items-center gap-1 mb-0.5">
                                <MapPin className="w-3 h-3 text-black" />
                                Location / Workspace
                              </div>
                              <div className="font-bold text-black">Hybrid (Paris, France / Remote)</div>
                            </div>
                          </div>

                          {/* 2. Core Tech Stack / Skills */}
                          <div className="bg-gray-50 border border-gray-200 rounded-lg p-2.5">
                            <div className="text-[10px] font-bold text-black uppercase flex items-center gap-1 mb-1.5">
                              <Code2 className="w-3 h-3 text-black" />
                              Core Tech Stack / Skills
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {['TypeScript', 'React 18', 'Node.js', 'PostgreSQL', 'LLM Integration', 'Tailwind CSS'].map((skill, idx) => (
                                <span key={idx} className="bg-black text-white text-[10px] font-bold px-2 py-0.5 rounded">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* 6. Key Deliverables */}
                          <div className="bg-gray-50 border border-gray-200 rounded-lg p-2.5">
                            <div className="text-[10px] font-bold text-black uppercase flex items-center gap-1 mb-1">
                              <Layers className="w-3 h-3 text-black" />
                              Key Deliverables
                            </div>
                            <p className="text-xs text-black font-medium leading-relaxed">
                              Lead front-end architecture, build scalable API microservices, and integrate AI workflow automation into client product suites.
                            </p>
                          </div>

                          {/* 7. Must-Haves & 8. Nice-to-Haves */}
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-2.5">
                              <div className="text-[10px] font-bold text-black uppercase flex items-center gap-1 mb-1">
                                <CheckCircle2 className="w-3 h-3 text-black" />
                                Must-Haves
                              </div>
                              <ul className="text-[11px] text-black font-medium space-y-0.5 list-disc list-inside">
                                <li>5+ yrs React & TypeScript</li>
                                <li>Production Node.js microservices</li>
                                <li>Strong system design skills</li>
                              </ul>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-2.5">
                              <div className="text-[10px] font-bold text-black uppercase flex items-center gap-1 mb-1">
                                <PlusCircle className="w-3 h-3 text-black" />
                                Nice-to-Haves
                              </div>
                              <ul className="text-[11px] text-black font-medium space-y-0.5 list-disc list-inside">
                                <li>Ex-Stripe or top AI startup</li>
                                <li>LLM / Vector DB experience</li>
                                <li>Fluent English (C1+) & French</li>
                              </ul>
                            </div>
                          </div>

                        </div>
                      </div>

                      {/* Modal Footer Actions */}
                      <div className="flex items-center justify-end gap-2 border-t border-gray-200 pt-3 mt-3">
                        <button 
                          onClick={() => setIsOpenModal(false)}
                          className="px-3 py-1.5 text-xs font-bold text-black bg-gray-100 hover:bg-gray-200 rounded-lg transition-all"
                        >
                          Close
                        </button>
                        <button className="px-4 py-1.5 text-xs font-bold text-white bg-black hover:bg-gray-800 rounded-lg flex items-center gap-1.5 shadow-sm">
                          <Target className="w-3.5 h-3.5" />
                          <span>Start Sourcing Candidates</span>
                        </button>
                      </div>

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
