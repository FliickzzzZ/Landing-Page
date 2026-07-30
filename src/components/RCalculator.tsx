import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, CheckCircle2, TrendingUp, Clock, Zap } from 'lucide-react';

export const RCalculator: React.FC = () => {
  // Inputs
  const [placements, setPlacements] = useState(8);
  const [adminHours, setAdminHours] = useState(12);
  const [hourlyRate, setHourlyRate] = useState(250);

  // Calculations
  const baselineHours = placements * adminHours;
  const avanttyHours = Math.round(baselineHours * 0.10); // 90% savings
  const hoursSaved = baselineHours - avanttyHours;
  
  const monthlySavings = hoursSaved * hourlyRate;
  const annualSavings = monthlySavings * 12;

  // Potential capacity expansion (due to recovered partner hours)
  const additionalPlacementsUnlocked = Math.max(1, Math.floor((hoursSaved * 12) / 18));

  return (
    <section id="roi-calculator" className="py-24 md:py-32 bg-white border-b border-[#E8EAED] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16 md:mb-24"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#202124] tracking-tight mb-5 leading-tight">
            Measure your firm’s recovered capacity.
          </h2>
          <p className="text-sm sm:text-base text-[#202124] font-semibold leading-relaxed">
            Adjust the parameters below to match your firm’s monthly placement volume and average billing rate. See how eliminating repetitive manual updating translates directly into billable client hours.
          </p>
        </motion.div>

        {/* Calculator Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Sliders Control Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 bg-white border border-[#E8EAED] rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-gray-300 transition-colors duration-300"
          >
            <div className="space-y-8">
              <div className="flex items-center gap-2 pb-4 border-b border-[#E8EAED]">
                <Calculator className="w-5 h-5 text-[#4285F4]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#202124] font-mono">
                  Firm Parameters
                </h3>
              </div>

              {/* Slider 1: Active Placements */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <label className="font-extrabold text-[#202124]">
                    Monthly Candidate Stage Updates
                  </label>
                  <span className="font-mono font-bold bg-[#F8F9FA] px-2.5 py-1 rounded border border-[#E8EAED] text-[#4285F4]">
                    {placements} updates
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="50"
                  step="1"
                  value={placements}
                  onChange={(e) => setPlacements(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#E8EAED] rounded-lg appearance-none cursor-pointer accent-[#4285F4]"
                />
                <div className="flex justify-between text-[10px] text-[#202124] font-bold font-mono">
                  <span>2 updates</span>
                  <span>50 updates</span>
                </div>
              </div>

              {/* Slider 2: Baseline Sourcing Hours */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <label className="font-extrabold text-[#202124]">
                    Admin Hours Spent per Stage (Lists, Calendars, Client Sheets)
                  </label>
                  <span className="font-mono font-bold bg-[#F8F9FA] px-2.5 py-1 rounded border border-[#E8EAED] text-[#4285F4]">
                    {adminHours} hours
                  </span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="30"
                  step="1"
                  value={adminHours}
                  onChange={(e) => setAdminHours(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#E8EAED] rounded-lg appearance-none cursor-pointer accent-[#4285F4]"
                />
                <div className="flex justify-between text-[10px] text-[#202124] font-bold font-mono">
                  <span>4 hours</span>
                  <span>30 hours</span>
                </div>
              </div>

              {/* Slider 3: Billable Hourly Rate */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <label className="font-extrabold text-[#202124]">
                    Average Consultant Billable Rate
                  </label>
                  <span className="font-mono font-bold bg-[#F8F9FA] px-2.5 py-1 rounded border border-[#E8EAED] text-[#4285F4]">
                    ${hourlyRate}/hr
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="500"
                  step="10"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#E8EAED] rounded-lg appearance-none cursor-pointer accent-[#4285F4]"
                />
                <div className="flex justify-between text-[10px] text-[#202124] font-bold font-mono">
                  <span>$100/hr</span>
                  <span>$500/hr</span>
                </div>
              </div>
            </div>

            {/* Note indicator */}
            <div className="mt-8 pt-4 border-t border-[#E8EAED] text-xs text-[#202124] font-semibold leading-relaxed flex items-start gap-2.5">
              <CheckCircle2 className="w-4.5 h-4.5 text-[#34A853] shrink-0 mt-0.5" />
              <span>
                Calculated based on average search times across boutique advisory firms, where consultants spend up to 15% of active working hours writing client digests and copy-pasting candidate summaries.
              </span>
            </div>
          </motion.div>

          {/* ROI Outputs Dashboard Panel */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
            
            {/* Box 1: Admin Hours Unlocked */}
            <motion.div 
              initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-[#E8EAED] rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col justify-between hover:border-gray-300 transition-colors duration-300 group"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#4285F4]/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
                  <Clock className="w-5.5 h-5.5 text-[#4285F4]" />
                </div>
                <div className="text-[10px] font-mono font-extrabold text-[#202124] uppercase tracking-wider">
                  Monthly Admin Hours Saved
                </div>
                <div className="text-4xl font-display font-bold text-[#4285F4] tracking-tight mt-1.5">
                  {hoursSaved} hrs
                </div>
                <p className="text-xs sm:text-sm text-[#202124] mt-2.5 font-semibold leading-relaxed">
                  Reduces manual updating time from <span className="font-extrabold text-gray-900">{baselineHours} hours</span> down to just <span className="font-extrabold text-[#34A853]">{avanttyHours} hours</span>.
                </p>
              </div>
              <div className="mt-4 pt-3.5 border-t border-[#E8EAED] text-[10px] font-mono text-gray-400 font-bold uppercase">
                90% administrative time saved
              </div>
            </motion.div>

            {/* Box 2: Placement Bandwidth Unlocked */}
            <motion.div 
              initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-[#E8EAED] rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col justify-between hover:border-gray-300 transition-colors duration-300 group"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#34A853]/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
                  <TrendingUp className="w-5.5 h-5.5 text-[#34A853]" />
                </div>
                <div className="text-[10px] font-mono font-extrabold text-[#202124] uppercase tracking-wider">
                  Capacity For Extra Placements
                </div>
                <div className="text-4xl font-display font-bold text-[#34A853] tracking-tight mt-1.5">
                  +{additionalPlacementsUnlocked} / year
                </div>
                <p className="text-xs sm:text-sm text-[#202124] mt-2.5 font-semibold leading-relaxed">
                  Converts recovered administrative hours back into client relationship development and active candidate interviews.
                </p>
              </div>
              <div className="mt-4 pt-3.5 border-t border-[#E8EAED] text-[10px] font-mono text-gray-400 font-bold uppercase">
                Complete more assignments, smoothly
              </div>
            </motion.div>

            {/* Box 3: Total Financial Value Unlocked */}
            <motion.div 
              initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="sm:col-span-2 bg-[#202124] text-white rounded-2xl p-6 sm:p-8 shadow-md flex flex-col justify-between group hover:shadow-[0_20px_45px_rgba(0,0,0,0.15)] transition-all duration-500"
            >
              <div>
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-1.5 text-xs text-[#FBBC05] font-extrabold bg-[#FBBC05]/10 px-2.5 py-1 rounded-full border border-[#FBBC05]/10">
                    <Zap className="w-3.5 h-3.5 animate-bounce" />
                    Recovered Advisor Value
                  </div>
                  <span className="text-[10px] font-mono text-blue-200 font-bold uppercase tracking-wider">Projected Savings</span>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-[10px] font-mono uppercase text-blue-200 font-bold">
                      Estimated Monthly Value
                    </div>
                    <div className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight mt-1.5">
                      ${monthlySavings.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-blue-200 font-bold">
                      Estimated Annual Saved Capacity
                    </div>
                    <div className="text-2xl sm:text-3xl font-display font-bold text-[#34A853] tracking-tight mt-1.5">
                      ${annualSavings.toLocaleString()}
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 mt-5 leading-relaxed font-semibold">
                  By eliminating the repetitive updating phases of candidate logs, you unlock the billable equivalent of <span className="font-extrabold text-[#34A853]">${annualSavings.toLocaleString()}</span> in pure partner advisory capacity per year.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-gray-400 font-bold uppercase">
                <span>Calculated dynamically</span>
                <span className="text-[#4285F4]">Based on average advisory rates</span>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
