import React from 'react';
import { TRUST_COMPANIES } from '../data';
import { ShieldAlert, Star } from 'lucide-react';

export const TrustLogos: React.FC = () => {
  return (
    <section id="trust-section" className="bg-white py-8 border-b border-[#E8EAED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          
          {/* Trust Statement */}
          <div className="flex items-center gap-2 max-w-sm">
            <Star className="w-5 h-5 text-[#FBBC05] fill-[#FBBC05] shrink-0" />
            <p className="text-xs sm:text-sm font-medium text-[#202124] leading-snug">
              Trusted by senior consultants and luxury recruitment partners globally.
            </p>
          </div>

          {/* Minimal Logos Row */}
          <div className="flex flex-wrap items-center justify-start lg:justify-end gap-x-8 gap-y-4">
            {TRUST_COMPANIES.map((company, index) => (
              <div 
                key={index} 
                className="flex items-center group cursor-default"
                title={`${company.name} simulation`}
              >
                <span className="text-xs sm:text-sm font-display font-bold tracking-widest text-[#202124] group-hover:text-[#4285F4] transition-colors duration-250">
                  {company.logoText}
                </span>
                <span className="text-[8px] font-mono text-[#4285F4] ml-1">
                  sim
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
