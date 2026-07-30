import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Sparkles, Sliders } from 'lucide-react';

const WHY_US_POINTS = [
  {
    number: '01',
    title: 'Built Specifically for Executive Search',
    description: 'Not a generic automation tool. Avantty is designed around the workflows of high-touch recruitment firms: confidential candidates, C-suite searches, client updates, and executive-level reporting.',
    icon: <Shield className="w-5 h-5 text-[#202124]" />
  },
  {
    number: '02',
    title: 'Works With Your Existing Workflow',
    description: 'No migrations. No new platforms. No disruption. Avantty connects with the tools your team already uses — calendars, email, ATS, and spreadsheets — while your consultants continue working exactly as before.',
    icon: <Zap className="w-5 h-5 text-[#202124]" />
  },
  {
    number: '03',
    title: 'Eliminates the Administrative Bottleneck',
    description: 'Your consultants focus on people. Avantty handles the paperwork. Interview summaries, candidate notes, ATS updates, client reports, and search documentation are automatically created, organized, and synced.',
    icon: <Sparkles className="w-5 h-5 text-[#202124]" />
  },
  {
    number: '04',
    title: 'Built Around Your Search Process',
    description: 'Every firm has its own methodology. Avantty adapts to yours. We configure your automation workflows around your internal processes, search stages, reporting standards, and team requirements — creating a system that works the way your firm already operates.',
    icon: <Sliders className="w-5 h-5 text-[#202124]" />
  }
];

export const ProcessTimeline: React.FC = () => {
  return (
    <section id="process-timeline" className="py-24 md:py-32 bg-white border-b border-[#E8EAED] relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14 md:mb-20 text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#202124] tracking-tight mb-4 leading-tight rounded-2xl">
            Why Us?
          </h2>
          <p className="text-sm sm:text-base text-[#202124] leading-relaxed font-normal max-w-2xl">
            Here is why top executive search partners trust Avantty to run their background workflows silently and reliably.
          </p>
        </motion.div>

        {/* 4 Simple Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US_POINTS.map((point, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-[#E8EAED] rounded-2xl p-6 sm:p-7 shadow-xs hover:border-[#202124] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 border border-[#E8EAED] flex items-center justify-center">
                    {point.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-gray-400">
                    {point.number}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#202124] mb-2 leading-snug">
                  {point.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#202124] leading-relaxed font-normal">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
