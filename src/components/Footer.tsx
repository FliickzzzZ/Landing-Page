import React from 'react';
import { AvanttyLogo } from './AvanttyLogo';
import ShinyText from './ShinyText';

interface FooterProps {
  onNavigate: (route: string) => void;
  onNavigateAndScroll: (elementId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onNavigateAndScroll }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="app-footer" className="bg-white text-[#000000] py-5 border-t border-[#E8EAED] relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-[#000000]">
        
        {/* Left Side: Brand Name & Copyright */}
        <div className="flex items-center gap-2.5">
          <AvanttyLogo variant="circle" size="sm" />
          <ShinyText 
            text="Avantty" 
            color="#000000" 
            shineColor="#2563eb" 
            speed={2.2} 
            spread={120} 
            className="font-bold text-sm tracking-tight"
          />
          <span className="text-gray-400">|</span>
          <span className="text-[#000000]">&copy; {currentYear} Avantty Inc. All rights reserved.</span>
        </div>

        {/* Right Side: Horizontal Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[#000000]">
          <button 
            onClick={() => onNavigate('/privacy')}
            className="hover:underline transition-colors cursor-pointer focus:outline-none"
          >
            Privacy Policy
          </button>

          <span className="text-gray-400">•</span>

          <button 
            onClick={() => onNavigate('/terms')}
            className="hover:underline transition-colors cursor-pointer focus:outline-none"
          >
            Terms & Conditions
          </button>

          <span className="text-gray-400">•</span>

          <span className="text-[#000000]">naim@avanttyops.com</span>

          <span className="text-gray-400">•</span>

          <a 
            href="https://www.linkedin.com/in/naim-ramos-castellano-3a1583423/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline transition-colors"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
};
