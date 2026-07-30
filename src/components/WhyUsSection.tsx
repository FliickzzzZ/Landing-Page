import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { RefreshCwOff, Zap, ShieldCheck, Gauge } from 'lucide-react';

const whyUsCards = [
  {
    icon: RefreshCwOff,
    title: 'Zero Tool Replacement',
    description:
      'Avantty connects directly to your existing ATS and CRM. You do not need to change your software or retrain your team. We keep your current workflow exactly as it is, we just remove the manual typing.',
  },
  {
    icon: Zap,
    title: 'Maximum Efficiency',
    description:
      'Your team stops wasting hours on basic data entry. Avantty handles the administrative tasks automatically so your recruiters can spend 100% of their time sourcing talent and closing deals.',
  },
  {
    icon: ShieldCheck,
    title: 'Flawless Accuracy',
    description:
      'Manual typing leads to typos and lost information. Avantty processes candidate and client records perfectly every time. You get a completely clean database and zero human errors.',
  },
  {
    icon: Gauge,
    title: 'Instant Velocity',
    description:
      'Speed is everything in recruitment. Avantty extracts hiring requirements from emails and calls immediately. Your sourcing targets are ready in seconds so you can submit candidates faster than your competitors.',
  },
];

export const WhyUsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.15 });

  return (
    <section ref={sectionRef} id="why-us" className="relative bg-white py-20 sm:py-28 overflow-hidden border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-black tracking-tight leading-[1.15] mb-4">
            Why Us
          </h2>

          <p className="text-lg sm:text-xl text-gray-800 font-semibold leading-relaxed">
            Why you should choose us and not others?
          </p>
        </div>

        {/* 4 Cards Row Grid (1 col on mobile, 2 on tablet, 4 in a single row on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {whyUsCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group relative bg-white border border-gray-200 hover:border-gray-900 rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header with Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-gray-100 group-hover:bg-black group-hover:text-white text-black flex items-center justify-center transition-all duration-300 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-black tracking-tight mb-2.5 font-display">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
