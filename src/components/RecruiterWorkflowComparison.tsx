import React from 'react';
import { motion } from 'motion/react';
import { Clock, X, Check, ChevronDown } from 'lucide-react';

export const RecruiterWorkflowComparison: React.FC = () => {
  return (
    <section id="workflow-comparison" className="py-24 md:py-32 bg-white border-b border-[#E8EAED] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#202124] tracking-tight mb-5 leading-tight">
            Where do your consultant hours actually go?
          </h2>
        </motion.div>

        {/* Comparison Side-by-Side Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-stretch">
          
          {/* Column 1: Where Time Is Lost (Traditional Manual Routine) */}
          <motion.div 
            initial={{ opacity: 0, x: -30, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-red-50/20 border-2 border-red-200/80 rounded-2xl p-6 sm:p-8 shadow-sm transition-all duration-500 relative flex flex-col justify-between group"
          >
            <div>
              {/* Badge & Title */}
              <div className="flex items-center justify-between pb-4 border-b border-red-100 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-[#EA4335] flex items-center justify-center font-bold text-sm border border-red-200">
                    <X className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <span className="text-sm font-extrabold text-[#202124] block">Traditional Manual Routine</span>
                  </div>
                </div>
              </div>

              {/* Step-by-Step Time Drains */}
              <div className="space-y-4">
                
                {/* Step 1 */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-red-100 shadow-2xs">
                  <div className="w-6 h-6 rounded-full bg-red-100 text-[#EA4335] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 border border-red-200">
                    <Clock className="w-3.5 h-3.5 text-[#EA4335]" />
                  </div>
                  <div className="w-full">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-[10px] font-extrabold text-[#EA4335] uppercase tracking-wider">The administrative work begins</h4>
                      <span className="text-[10px] font-mono font-bold text-red-600">⏱️ 35-45 min</span>
                    </div>
                    <p className="text-sm font-bold text-[#202124]">1. Interview ends</p>
                    <p className="text-xs text-[#3C4043] mt-0.5 font-normal leading-relaxed">Recruiters manually rewrite notes, summarize candidate feedback, and prepare information for internal review.</p>
                  </div>
                </div>

                <div className="pl-5 py-0.2">
                  <ChevronDown className="w-4 h-4 text-red-300" />
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-red-100 shadow-2xs">
                  <div className="w-6 h-6 rounded-full bg-red-100 text-[#EA4335] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 border border-red-200">
                    <Clock className="w-3.5 h-3.5 text-[#EA4335]" />
                  </div>
                  <div className="w-full">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-[10px] font-extrabold text-[#EA4335] uppercase tracking-wider">System Synchronization</h4>
                      <span className="text-[10px] font-mono font-bold text-red-600">⏱️ 20-30 min</span>
                    </div>
                    <p className="text-sm font-bold text-[#202124]">2. Updating systems manually</p>
                    <p className="text-xs text-[#3C4043] mt-0.5 font-normal leading-relaxed">Recruiters copy information across ATS, CRM, spreadsheets, and internal tracking tools to keep everyone updated.</p>
                  </div>
                </div>

                <div className="pl-5 py-0.2">
                  <ChevronDown className="w-4 h-4 text-red-300" />
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-red-100 shadow-2xs">
                  <div className="w-6 h-6 rounded-full bg-red-100 text-[#EA4335] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 border border-red-200">
                    <Clock className="w-3.5 h-3.5 text-[#EA4335]" />
                  </div>
                  <div className="w-full">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-[10px] font-extrabold text-[#EA4335] uppercase tracking-wider">Stakeholder Management</h4>
                      <span className="text-[10px] font-mono font-bold text-red-600">⏱️ 30-40 min</span>
                    </div>
                    <p className="text-sm font-bold text-[#202124]">3. Managing follow-ups & communication</p>
                    <p className="text-xs text-[#3C4043] mt-0.5 font-normal leading-relaxed">Recruiters prepare client updates, candidate follow-ups, and internal alerts to keep the search moving.</p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Column 2: After Avantty (Automated & Frictionless) */}
          <motion.div 
            initial={{ opacity: 0, x: 30, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border-2 border-[#4285F4] rounded-2xl p-6 sm:p-8 shadow-md relative flex flex-col justify-between overflow-hidden group hover:shadow-[0_20px_40px_rgba(66,133,244,0.08)] transition-all duration-500"
          >
            <div>
              {/* Badge & Title */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E8EAED] mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-[#34A853] flex items-center justify-center font-bold text-sm border border-emerald-200">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <span className="text-sm font-extrabold text-[#202124] block">With Avantty Automation</span>
                  </div>
                </div>
              </div>

              {/* The Streamlined Experience */}
              <div className="space-y-4">
                
                {/* Step 1 */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-blue-50/40 border border-blue-100">
                  <div className="w-7 h-7 rounded-full bg-[#4285F4] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-[10px] font-extrabold text-[#4285F4] uppercase tracking-wider">Avantty captures the next actions</h4>
                    <p className="text-base font-extrabold text-[#202124]">1. Interview ends</p>
                    <p className="text-xs text-[#3C4043] mt-0.5 font-normal leading-relaxed">Candidate information is processed, structured, and organized automatically.</p>
                  </div>
                </div>

                <div className="flex items-center justify-center py-0.5">
                  <div className="h-5 w-0.5 bg-emerald-300" />
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200">
                  <div className="w-7 h-7 rounded-full bg-[#34A853] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-extrabold text-[#34A853] uppercase tracking-wider">Instant System Sync</h4>
                    <p className="text-base font-extrabold text-[#202124]">2. Workflow updates itself</p>
                    <p className="text-xs text-[#3C4043] mt-0.5 font-normal leading-relaxed">Candidate stages, internal records, and tracking systems stay synchronized without manual updates.</p>
                  </div>
                </div>

                <div className="flex items-center justify-center py-0.5">
                  <div className="h-5 w-0.5 bg-emerald-300" />
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200">
                  <div className="w-7 h-7 rounded-full bg-[#34A853] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-extrabold text-[#34A853] uppercase tracking-wider">Proactive Communication</h4>
                    <p className="text-base font-extrabold text-[#202124]">3. Follow-ups happen automatically</p>
                    <p className="text-xs text-[#3C4043] mt-0.5 font-normal leading-relaxed">Avantty keeps candidates and clients informed with timely communication while recruiters focus on hiring.</p>
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

