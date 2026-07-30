import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Sparkles, Zap, Clock, Users, TrendingUp, Layers, Check, ShieldCheck } from 'lucide-react';

interface RibbonItem {
  id: string;
  text: string;
  icon: React.ReactNode;
  desc: string;
  badge: string;
  accentColor: string;
}

const RIBBON_ITEMS_ROW1: RibbonItem[] = [
  {
    id: 'item-1',
    text: 'Candidate stage updated automatically',
    icon: <CheckCircle2 className="w-5 h-5 text-[#34A853]" />, // Google Green
    desc: 'Instantly synced across lists upon meeting completion.',
    badge: 'Automation',
    accentColor: '#34A853'
  },
  {
    id: 'item-2',
    text: 'No more manual CRM updates',
    icon: <Layers className="w-5 h-5 text-[#EA4335]" />, // Google Red
    desc: 'Quiet background processes handle standard database fields.',
    badge: 'Database',
    accentColor: '#EA4335'
  },
  {
    id: 'item-3',
    text: 'Interview notes synchronized instantly',
    icon: <Zap className="w-5 h-5 text-[#FBBC05]" />, // Google Yellow
    desc: 'Transcribed feedback is routed instantly to candidate files.',
    badge: 'Real-Time Sync',
    accentColor: '#FBBC05'
  },
  {
    id: 'item-4',
    text: 'Recruiters spend more time recruiting',
    icon: <Users className="w-5 h-5 text-[#4285F4]" />, // Google Blue
    desc: 'Zero working hours lost to repetitive copy-paste actions.',
    badge: 'Efficiency',
    accentColor: '#4285F4'
  },
  {
    id: 'item-5',
    text: 'Client timelines stay current',
    icon: <Clock className="w-5 h-5 text-[#4285F4]" />, // Google Blue
    desc: 'Providing immediate placement visibility to corporate partners.',
    badge: 'Transparency',
    accentColor: '#4285F4'
  },
];

const RIBBON_ITEMS_ROW2: RibbonItem[] = [
  {
    id: 'item-6',
    text: 'Internal teams stay aligned',
    icon: <Users className="w-5 h-5 text-[#4285F4]" />, // Google Blue
    desc: 'Support staff and advisors receive background updates instantly.',
    badge: 'Collaboration',
    accentColor: '#4285F4'
  },
  {
    id: 'item-7',
    text: 'Administrative work disappears',
    icon: <Sparkles className="w-5 h-5 text-[#FBBC05]" />, // Google Yellow
    desc: 'No manual tasks, no complex new software learning curves.',
    badge: 'Zero-Touch',
    accentColor: '#FBBC05'
  },
  {
    id: 'item-8',
    text: 'Faster executive search operations',
    icon: <TrendingUp className="w-5 h-5 text-[#34A853]" />, // Google Green
    desc: 'Accelerating high-stakes placement speed from start to offer.',
    badge: 'Velocity',
    accentColor: '#34A853'
  },
  {
    id: 'item-9',
    text: 'Every placement stays organized',
    icon: <Layers className="w-5 h-5 text-[#EA4335]" />, // Google Red
    desc: 'Structured search milestones are filed cleanly for compliance.',
    badge: 'Data Integrity',
    accentColor: '#EA4335'
  },
  {
    id: 'item-10',
    text: 'Less repetitive work',
    icon: <Check className="w-5 h-5 text-[#34A853]" />, // Google Green
    desc: 'Senior managing partners recover 12+ billable hours weekly.',
    badge: 'Capacity Unlocked',
    accentColor: '#34A853'
  },
];

const RibbonCard: React.FC<{ item: RibbonItem }> = ({ item }) => {
  return (
    <motion.div
      initial={{ y: 0, scale: 1 }}
      animate={{
        y: [0, -4, 0],
        scale: [1, 1, 1.02, 1, 1]
      }}
      transition={{
        y: {
          duration: 4 + Math.random() * 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
        scale: {
          duration: 7 + Math.random() * 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 3,
        }
      }}
      className="flex-shrink-0 w-[310px] sm:w-[330px] bg-white/95 backdrop-blur-md border border-[#E8EAED] rounded-2xl p-5 shadow-[0_4px_20px_-2px_rgba(32,33,36,0.03)] hover:shadow-[0_12px_32px_rgba(32,33,36,0.06)] hover:border-gray-300 hover:scale-[1.03] hover:bg-white transition-all duration-500 flex flex-col justify-between h-[155px] relative overflow-hidden group cursor-default"
    >
      {/* Subtle top accent color band */}
      <div 
        className="absolute top-0 left-0 right-0 h-[3px] opacity-25 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: item.accentColor }}
      />
      
      <div className="space-y-3.5">
        <div className="flex items-center justify-between">
          <div className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center border border-[#E8EAED] group-hover:bg-white transition-colors duration-300">
            {item.icon}
          </div>
          <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#202124] bg-gray-100 px-2.5 py-0.5 rounded-full">
            {item.badge}
          </span>
        </div>
        
        <h4 className="text-sm font-bold text-[#202124] tracking-tight leading-snug group-hover:text-black transition-colors duration-300">
          {item.text}
        </h4>
      </div>

      <p className="text-[11px] text-[#202124] leading-relaxed font-semibold">
        {item.desc}
      </p>
    </motion.div>
  );
};

export const Testimonials: React.FC = () => {
  // Duplicate 4 times to ensure seamless endless ribbon movement on any screen size
  const row1Items = [
    ...RIBBON_ITEMS_ROW1,
    ...RIBBON_ITEMS_ROW1,
    ...RIBBON_ITEMS_ROW1,
    ...RIBBON_ITEMS_ROW1
  ];

  const row2Items = [
    ...RIBBON_ITEMS_ROW2,
    ...RIBBON_ITEMS_ROW2,
    ...RIBBON_ITEMS_ROW2,
    ...RIBBON_ITEMS_ROW2
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white border-b border-[#E8EAED] relative overflow-hidden">
      {/* Inline styles for continuous seamless loop animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee-left {
          animation: scroll-left 70s linear infinite;
        }

        .animate-marquee-right {
          animation: scroll-right 70s linear infinite;
        }
      `}} />

      <div className="relative z-10 w-full">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 mb-16 md:mb-20">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#202124] tracking-tight mb-4">
            Repetitive administrative work, silently resolved.
          </h2>
          <p className="text-sm sm:text-base text-[#202124] font-semibold max-w-2xl mx-auto leading-relaxed">
            Avantty runs invisibly behind the scenes of elite executive search firms. No new software to learn, no manual data transfers. We automate the friction so you can focus entirely on high-stakes advisory.
          </p>
        </div>

        {/* Marquee Lanes Container */}
        <div className="space-y-6 md:space-y-8 w-full">
          
          {/* Row 1 - Flowing Left */}
          <div className="w-full overflow-hidden py-2 relative">
            {/* Left/Right Edge Fades for stripe/linear elegance */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/40 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/40 to-transparent z-10 pointer-events-none" />
            
            <div className="flex gap-6 w-max animate-marquee-left">
              {row1Items.map((item, idx) => (
                <RibbonCard key={`row1-${item.id}-${idx}`} item={item} />
              ))}
            </div>
          </div>

          {/* Row 2 - Flowing Right */}
          <div className="w-full overflow-hidden py-2 relative">
            {/* Left/Right Edge Fades for stripe/linear elegance */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/40 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/40 to-transparent z-10 pointer-events-none" />
            
            <div className="flex gap-6 w-max animate-marquee-right">
              {row2Items.map((item, idx) => (
                <RibbonCard key={`row2-${item.id}-${idx}`} item={item} />
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Trust Badge */}
        <div className="mt-16 sm:mt-20 text-center max-w-3xl mx-auto px-4">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 bg-white border border-[#E8EAED] rounded-2xl p-4 sm:px-6 text-xs text-[#202124] font-bold font-mono leading-relaxed shadow-sm">
            <div className="flex items-center gap-2 text-[#34A853]">
              <ShieldCheck className="w-4 h-4" />
              <span>SOC2 Certified & NDA Pre-signed</span>
            </div>
            <span className="hidden sm:inline text-[#4285F4] font-bold">|</span>
            <span>Quiet background automation for elite advisory search firms</span>
          </div>
        </div>

      </div>
    </section>
  );
};
