import React, { useState, useEffect } from 'react';
import { AvanttyLogo } from './AvanttyLogo';
import { motion } from 'motion/react';
import ShinyText from './ShinyText';

interface HeaderProps {
  onOpenDemo: () => void;
  onNavigate: (route: string) => void;
  onNavigateAndScroll: (elementId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // Show only the logo initially, then reveal "Avantty" after 250ms
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  const handleLogoClick = () => {
    onNavigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header id="app-header" className="fixed top-0 left-0 right-0 z-50 w-full bg-transparent transition-all duration-300 pointer-events-none pt-4 pb-2">
      <div className="w-full px-4 sm:px-6 lg:px-10 flex items-center justify-start">
        {/* Brand Card Pinned to Top Left */}
        <div className="flex items-center justify-start">
          <button 
            onClick={handleLogoClick}
            className="bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#E8EAED] shadow-sm flex flex-col text-left focus:outline-none group cursor-pointer hover:border-gray-400 hover:shadow-md transition-all pointer-events-auto"
            aria-label="Avantty home"
          >
            {/* Top row: Circle Logo + "Avantty" emerging from logo */}
            <div className="font-display font-bold text-lg tracking-tight text-[#202124] flex items-center py-0.5 relative">
              {/* Circle Logo - Anchored on Left */}
              <div className="shrink-0 z-20 relative bg-white rounded-full">
                <AvanttyLogo variant="circle" size="sm" />
              </div>

              {/* Text Reveal - "Avantty" pops out */}
              <motion.div
                className="overflow-hidden flex items-center z-10"
                initial={{ width: 0, opacity: 0 }}
                animate={isRevealed ? { width: 'auto', opacity: 1 } : { width: 0, opacity: 0 }}
                transition={{
                  duration: 0.85,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <motion.div
                  className="font-display font-bold text-lg tracking-tight text-[#202124] pl-2.5 whitespace-nowrap block"
                  initial={{ x: -32, opacity: 0 }}
                  animate={isRevealed ? { x: 0, opacity: 1 } : { x: -32, opacity: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 240,
                    damping: 18,
                    mass: 0.8,
                  }}
                >
                  <ShinyText 
                    text="Avantty" 
                    speed={2.2} 
                    color="#111827" 
                    shineColor="#2563eb" 
                    spread={120}
                  />
                </motion.div>
              </motion.div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};



