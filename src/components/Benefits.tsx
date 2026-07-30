import React from 'react';
import { motion } from 'motion/react';
import { BENEFITS } from '../data';
import { Sparkles } from 'lucide-react';

export const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 md:py-32 bg-white border-b border-[#E8EAED] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16 md:mb-24"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#202124] tracking-tight mb-3">
            Engineered for premium operational outcomes.
          </h2>
          <p className="text-sm sm:text-base text-[#202124] font-semibold leading-relaxed">
            We remove the entire administrative burden of candidate updates, helping boutique search firms recover valuable hours, align communication, and increase placement velocity.
          </p>
        </motion.div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((b, idx) => (
            <motion.div 
              key={b.id} 
              initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-65px" }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-[#E8EAED] rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-[0_20px_45px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 transition-all duration-500 relative overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Metric Display */}
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-display text-3.5xl sm:text-4xl font-bold text-[#202124] tracking-tight group-hover:text-[#4285F4] transition-colors duration-300">
                    {b.metric}
                  </span>
                </div>

                {/* Horizontal divider line */}
                <div className="h-0.5 w-full bg-[#E8EAED] mb-4 group-hover:bg-[#4285F4]/30 transition-all duration-500" />

                {/* Title */}
                <h3 className="font-display text-base font-bold text-[#202124] mb-2 flex items-center gap-1.5">
                  {b.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#202124] font-semibold leading-relaxed">
                  {b.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight quote / sub-text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 p-6 sm:p-8 bg-white border border-[#E8EAED] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-gray-400 transition-colors duration-300 shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100/30">
              <Sparkles className="w-5.5 h-5.5 text-[#4285F4]" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-extrabold text-[#202124]">Continuous Workday Protection</h4>
              <p className="text-xs sm:text-sm text-[#202124] mt-0.5 font-semibold">Our system monitors updates continuously in the background, keeping all list files, calendar events, and client summary sheets flawlessly aligned.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-mono font-bold text-[#34A853] bg-emerald-50 px-2.5 py-1.5 rounded-md border border-emerald-100">Continuous</span>
            <span className="text-xs text-[#202124] font-mono font-bold">Status: Active</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
