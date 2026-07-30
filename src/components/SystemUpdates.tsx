import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MousePointer, User, Building2, FileText, Check, Briefcase, DollarSign, Calendar, Mail, Phone, MapPin, Tag, Layers } from 'lucide-react';

export const SystemUpdates: React.FC = () => {
  const [phase, setPhase] = useState<'notes' | 'ats' | 'crm'>('notes');

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (phase === 'notes') {
      timer = setTimeout(() => {
        setPhase('ats');
      }, 5000); // 5 seconds scrolling raw notes
    } else if (phase === 'ats') {
      timer = setTimeout(() => {
        setPhase('crm');
      }, 3000); // 3 seconds scrolling ATS profile
    } else if (phase === 'crm') {
      timer = setTimeout(() => {
        setPhase('notes');
      }, 4000); // 4 seconds scrolling CRM profile
    }
    return () => clearTimeout(timer);
  }, [phase]);

  return (
    <section id="system-updates" className="relative bg-white py-20 sm:py-28 overflow-hidden border-t border-[#F1F3F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text aligned to the left */}
          <div className="lg:col-span-5 text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl sm:text-5xl font-extrabold text-[#000000] tracking-tight leading-[1.15] mb-6"
            >
              Instant System Updates
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base sm:text-lg text-[#000000] font-medium leading-relaxed"
            >
              We extract the data of your clients and candidates from your daily emails and meetings.
              <br />
              In seconds, both your ATS and CRM are fully updated with the details.
              <br />
              Zero manual input. Save time, scale revenue.
            </motion.p>
          </div>

          {/* Right Column: Clean White macOS App Window Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 relative w-full"
          >
            {/* macOS Light Window Frame */}
            <div className="relative mx-auto rounded-2xl bg-white shadow-2xl border border-gray-300/90 overflow-hidden">
              
              {/* Screen Header / macOS Window Bar (Clean Red, Yellow, Green Buttons) */}
              <div className="bg-[#F3F4F6] px-4 py-3 flex items-center border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/10" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/10" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/10" />
                </div>
              </div>

              {/* Window Main Content */}
              <div className="bg-[#FAFAFA] p-5 sm:p-6 text-left font-sans text-black min-h-[380px] flex flex-col justify-center relative overflow-hidden">
                
                <AnimatePresence mode="wait">
                  {phase === 'notes' && (
                    /* PHASE 1: 5s Fast Scrolling Raw Email & Meeting Notes */
                    <motion.div 
                      key="phase-notes"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="relative w-full h-[320px] bg-white border border-gray-200 rounded-xl p-5 overflow-hidden shadow-2xs flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-3 flex-shrink-0 z-10 bg-white">
                        <div className="flex items-center text-xs font-bold text-black uppercase tracking-wider">
                          <span>Unstructured Notes & Email Threads</span>
                        </div>
                      </div>

                      {/* Animated Fast Scrolling Text Container */}
                      <div className="relative flex-1 overflow-hidden">
                        <motion.div
                          animate={{ y: [0, -420] }}
                          transition={{ duration: 5, ease: "linear" }}
                          className="space-y-3 font-mono text-xs text-gray-700 leading-relaxed"
                        >
                          <p className="font-semibold text-black">From: naim@avanttyops.com | Received: 10:14 AM</p>
                          <p className="text-gray-500">Subject: Candidate Sarah Jenkins & TechCorp Account Kickoff</p>
                          <div className="border-l-2 border-gray-200 pl-3 my-2 space-y-1 text-gray-600">
                            <p>- Met with Sarah Jenkins regarding Senior Software Engineer position.</p>
                            <p>- Current compensation: $150,000. Desired target: $165,000 / yr.</p>
                            <p>- Tech stack: React, TypeScript, Node.js, Distributed Systems.</p>
                            <p>- Availability: 2 weeks notice period. Excellent communication.</p>
                          </div>
                          
                          <p className="font-semibold text-black pt-2">Transcript: TechCorp Discovery Call</p>
                          <div className="border-l-2 border-gray-200 pl-3 space-y-1 text-gray-600">
                            <p>- Client TechCorp requested 2 new Lead Developer requisitions.</p>
                            <p>- Approved budget cap: $170,000 / role.</p>
                            <p>- Hiring Manager: Alex Vance (CTO).</p>
                            <p>- Immediate kickoff planned for Q3 scaling.</p>
                          </div>

                          <p className="font-semibold text-black pt-2">Email Thread: Marcus Vance & Apex Financial</p>
                          <div className="border-l-2 border-gray-200 pl-3 space-y-1 text-gray-600">
                            <p>- Interview feedback for Marcus Vance (Staff Architect candidate).</p>
                            <p>- Expected salary $210k. Strong Python, AWS, and Fintech background.</p>
                            <p>- Apex Financial requested 3 additional Senior Quant Developer profiles.</p>
                          </div>

                          <p className="font-semibold text-black pt-2">Notes: Elena Rostova & Nova Dynamics</p>
                          <div className="border-l-2 border-gray-200 pl-3 space-y-1 text-gray-600">
                            <p>- Elena Rostova available immediately. Product Manager ($155k target).</p>
                            <p>- Nova Dynamics signed new retainer contract for 5 engineering roles.</p>
                          </div>

                          <p className="font-semibold text-black pt-2">Call Summary: David Kim (Lead DevOps)</p>
                          <div className="border-l-2 border-gray-200 pl-3 space-y-1 text-gray-600">
                            <p>- Kubernetes expert with 8 years experience. Seeking $180,000 / yr.</p>
                            <p>- Ready for final interview rounds across all active tech clients.</p>
                          </div>
                        </motion.div>
                      </div>

                    </motion.div>
                  )}

                  {phase === 'ats' && (
                    /* PHASE 2: 3s Fast Scrolling Multiple ATS Candidate Profiles */
                    <motion.div 
                      key="phase-ats"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="relative w-full h-[320px] bg-white border border-gray-200 rounded-xl p-5 overflow-hidden shadow-2xs flex flex-col"
                    >
                      {/* Profile Top Bar */}
                      <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-3 flex-shrink-0 bg-white z-10">
                        <div>
                          <div className="text-xs font-extrabold text-black uppercase tracking-wider">ATS Candidate Profiles</div>
                        </div>
                      </div>

                      {/* Inner Scrolling Candidates Container */}
                      <div className="relative flex-1 overflow-hidden">
                        <motion.div
                          animate={{ y: [0, -420] }}
                          transition={{ duration: 3, ease: "easeInOut" }}
                          className="space-y-3.5 text-xs text-black"
                        >
                          {/* Candidate 1 */}
                          <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-lg">
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="font-extrabold text-sm text-black">Sarah Jenkins</span>
                              <span className="text-[10px] font-bold bg-white border border-gray-300 px-2 py-0.5 rounded text-black">Senior Software Engineer</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-[11px] pt-1">
                              <div><span className="text-gray-500 block text-[10px]">Salary</span><span className="font-bold">$165,000</span></div>
                              <div><span className="text-gray-500 block text-[10px]">Notice</span><span className="font-bold">2 Weeks</span></div>
                              <div><span className="text-gray-500 block text-[10px]">Match</span><span className="font-bold text-black">TechCorp #402</span></div>
                            </div>
                          </div>

                          {/* Candidate 2 */}
                          <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-lg">
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="font-extrabold text-sm text-black">Marcus Vance</span>
                              <span className="text-[10px] font-bold bg-white border border-gray-300 px-2 py-0.5 rounded text-black">Staff Architect</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-[11px] pt-1">
                              <div><span className="text-gray-500 block text-[10px]">Salary</span><span className="font-bold">$210,000</span></div>
                              <div><span className="text-gray-500 block text-[10px]">Notice</span><span className="font-bold">Immediate</span></div>
                              <div><span className="text-gray-500 block text-[10px]">Match</span><span className="font-bold text-black">Apex Fin #108</span></div>
                            </div>
                          </div>

                          {/* Candidate 3 */}
                          <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-lg">
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="font-extrabold text-sm text-black">Elena Rostova</span>
                              <span className="text-[10px] font-bold bg-white border border-gray-300 px-2 py-0.5 rounded text-black">Product Manager</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-[11px] pt-1">
                              <div><span className="text-gray-500 block text-[10px]">Salary</span><span className="font-bold">$155,000</span></div>
                              <div><span className="text-gray-500 block text-[10px]">Notice</span><span className="font-bold">1 Month</span></div>
                              <div><span className="text-gray-500 block text-[10px]">Match</span><span className="font-bold text-black">Nova Dyn #301</span></div>
                            </div>
                          </div>

                          {/* Candidate 4 */}
                          <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-lg">
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="font-extrabold text-sm text-black">David Kim</span>
                              <span className="text-[10px] font-bold bg-white border border-gray-300 px-2 py-0.5 rounded text-black">Lead DevOps Engineer</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-[11px] pt-1">
                              <div><span className="text-gray-500 block text-[10px]">Salary</span><span className="font-bold">$180,000</span></div>
                              <div><span className="text-gray-500 block text-[10px]">Notice</span><span className="font-bold">3 Weeks</span></div>
                              <div><span className="text-gray-500 block text-[10px]">Match</span><span className="font-bold text-black">TechCorp #403</span></div>
                            </div>
                          </div>

                          {/* Candidate 5 */}
                          <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-lg">
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="font-extrabold text-sm text-black">Maya Lin</span>
                              <span className="text-[10px] font-bold bg-white border border-gray-300 px-2 py-0.5 rounded text-black">Senior UX Designer</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-[11px] pt-1">
                              <div><span className="text-gray-500 block text-[10px]">Salary</span><span className="font-bold">$145,000</span></div>
                              <div><span className="text-gray-500 block text-[10px]">Notice</span><span className="font-bold">Immediate</span></div>
                              <div><span className="text-gray-500 block text-[10px]">Match</span><span className="font-bold text-black">Horizon #202</span></div>
                            </div>
                          </div>
                        </motion.div>
                      </div>

                    </motion.div>
                  )}

                  {phase === 'crm' && (
                    /* PHASE 3: 4s Scrolling Multiple CRM Client Accounts */
                    <motion.div 
                      key="phase-crm"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="relative w-full h-[320px] bg-white border border-gray-200 rounded-xl p-5 overflow-hidden shadow-2xs flex flex-col"
                    >
                      {/* Profile Top Bar */}
                      <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-3 flex-shrink-0 bg-white z-10">
                        <div>
                          <div className="text-xs font-extrabold text-black uppercase tracking-wider">CRM Client Accounts</div>
                        </div>
                      </div>

                      {/* Inner Scrolling Client Records Container */}
                      <div className="relative flex-1 overflow-hidden">
                        <motion.div
                          animate={{ y: [0, -440] }}
                          transition={{ duration: 4, ease: "easeInOut" }}
                          className="space-y-3.5 text-xs text-black"
                        >
                          {/* Client 1 */}
                          <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-lg">
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="font-extrabold text-sm text-black">TechCorp Inc.</span>
                              <span className="text-[10px] font-bold bg-white border border-gray-300 px-2 py-0.5 rounded text-black">2 Open Roles</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                              <div><span className="text-gray-500 block text-[10px]">Contact</span><span className="font-bold">Alex Vance (CTO)</span></div>
                              <div><span className="text-gray-500 block text-[10px]">Budget</span><span className="font-bold">$170k / role</span></div>
                            </div>
                          </div>

                          {/* Client 2 */}
                          <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-lg">
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="font-extrabold text-sm text-black">Apex Financial Group</span>
                              <span className="text-[10px] font-bold bg-white border border-gray-300 px-2 py-0.5 rounded text-black">3 Open Roles</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                              <div><span className="text-gray-500 block text-[10px]">Contact</span><span className="font-bold">David Sterling (VP)</span></div>
                              <div><span className="text-gray-500 block text-[10px]">Budget</span><span className="font-bold">$210k / role</span></div>
                            </div>
                          </div>

                          {/* Client 3 */}
                          <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-lg">
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="font-extrabold text-sm text-black">Nova Dynamics</span>
                              <span className="text-[10px] font-bold bg-white border border-gray-300 px-2 py-0.5 rounded text-black">5 Open Roles</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                              <div><span className="text-gray-500 block text-[10px]">Contact</span><span className="font-bold">Claire Thorne (HRD)</span></div>
                              <div><span className="text-gray-500 block text-[10px]">Budget</span><span className="font-bold">$155k / role</span></div>
                            </div>
                          </div>

                          {/* Client 4 */}
                          <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-lg">
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="font-extrabold text-sm text-black">Horizon Healthcare</span>
                              <span className="text-[10px] font-bold bg-white border border-gray-300 px-2 py-0.5 rounded text-black">1 Open Role</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                              <div><span className="text-gray-500 block text-[10px]">Contact</span><span className="font-bold">Robert Chen (Director)</span></div>
                              <div><span className="text-gray-500 block text-[10px]">Budget</span><span className="font-bold">$145k / role</span></div>
                            </div>
                          </div>

                          {/* Client 5 */}
                          <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-lg">
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="font-extrabold text-sm text-black">CyberPulse Systems</span>
                              <span className="text-[10px] font-bold bg-white border border-gray-300 px-2 py-0.5 rounded text-black">4 Open Roles</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                              <div><span className="text-gray-500 block text-[10px]">Contact</span><span className="font-bold">Siddharth Patel (CISO)</span></div>
                              <div><span className="text-gray-500 block text-[10px]">Budget</span><span className="font-bold">$190k / role</span></div>
                            </div>
                          </div>
                        </motion.div>
                      </div>

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




