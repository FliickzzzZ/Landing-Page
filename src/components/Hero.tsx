import React from 'react';
import { motion } from 'motion/react';
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { LogoLoop } from './LogoLoop';
import { techLogos } from '../data/techLogos';
import { CountUp } from './CountUp';

interface HeroProps {
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="hero-section" className="relative min-h-screen w-full flex flex-col overflow-hidden">
      <BackgroundBeamsWithCollision className="min-h-screen w-full pt-32 sm:pt-20 pb-12 flex flex-col justify-center items-center bg-gradient-to-b from-white via-white to-gray-50/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col items-center text-center my-auto">
          
          {/* Main Title - Black typography, centered, high-impact */}
          <motion.h1 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-6xl md:text-7xl font-extrabold text-[#000000] tracking-tight leading-[1.1] max-w-4xl mx-auto mb-4 sm:mb-6"
          >
            Automate the chaos. Master your time
          </motion.h1>

          {/* Subtitle with mobile-safe smooth fade & gentle slide */}
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6,
              delay: 0.2 
            }}
            className="text-sm sm:text-lg md:text-xl text-[#000000] font-semibold max-w-2xl mx-auto leading-relaxed mb-6 px-2"
          >
            Your team can now focus on what truly drives results.
          </motion.p>

          {/* LogoLoop Bar matching exact reference aesthetic */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-4xl my-4 sm:my-6 py-2.5 sm:py-3 px-3 sm:px-4 rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden"
          >
            <LogoLoop
              logos={techLogos}
              speed={60}
              direction="left"
              logoHeight={28}
              gap={28}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              ariaLabel="Integrate workforce platforms"
            />
          </motion.div>

          {/* Clean Metrics Row */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full max-w-2xl mt-2 sm:mt-4 pt-2 sm:pt-4 grid grid-cols-3 gap-2 sm:gap-10 text-center"
          >
            <div>
              <div className="font-display text-xl sm:text-4xl font-extrabold text-[#000000]">
                <CountUp from={0} to={15} duration={2} /> hours
              </div>
              <div className="text-[11px] sm:text-sm text-[#000000] font-semibold mt-1">Saved every week</div>
            </div>
            <div>
              <div className="font-display text-xl sm:text-4xl font-extrabold text-[#000000]">
                <CountUp from={0} to={100} duration={2} />%
              </div>
              <div className="text-[11px] sm:text-sm text-[#000000] font-semibold mt-1">Data accuracy</div>
            </div>
            <div>
              <div className="font-display text-xl sm:text-4xl font-extrabold text-[#000000]">
                <CountUp from={100} to={0} direction="down" duration={2} />%
              </div>
              <div className="text-[11px] sm:text-sm text-[#000000] font-semibold mt-1">Typing required</div>
            </div>
          </motion.div>

        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
};
