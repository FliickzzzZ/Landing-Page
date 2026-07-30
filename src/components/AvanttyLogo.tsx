import React from 'react';
import ShinyText from './ShinyText';

interface AvanttyLogoProps {
  variant?: 'circle' | 'icon' | 'full';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  dark?: boolean;
}

export const AvanttyLogoIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => {
  return (
    <svg 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <defs>
        <linearGradient id="avanttyLogoGrad" x1="20" y1="100" x2="100" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#111827" />
          <stop offset="100%" stopColor="#1D61F2" />
        </linearGradient>
        <linearGradient id="avanttyBlueAccent" x1="45" y1="90" x2="75" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1D61F2" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
      </defs>

      {/* Main Outer Geometric 'A' Frame */}
      <path 
        d="M 60 15 L 105 100 L 84 100 L 60 52 L 36 100 L 15 100 Z" 
        fill="currentColor" 
      />

      {/* Inner Center Triangle Peak Accent - Solid Black / currentColor */}
      <polygon 
        points="60,62 46,92 74,92" 
        fill="currentColor" 
      />
    </svg>
  );
};

export const AvanttyLogo: React.FC<AvanttyLogoProps> = ({ 
  variant = 'circle', 
  size = 'md', 
  className = '',
  dark = false
}) => {
  // Size mapping for the circular container
  const containerSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
    xl: 'w-14 h-14'
  };

  // Size mapping for the SVG inside
  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5.5 h-5.5',
    lg: 'w-7 h-7',
    xl: 'w-9 h-9'
  };

  if (variant === 'icon') {
    return (
      <AvanttyLogoIcon className={`${iconSizes[size]} ${dark ? 'text-white' : 'text-gray-900'} ${className}`} />
    );
  }

  if (variant === 'circle') {
    return (
      <div 
        className={`
          ${containerSizes[size]} 
          rounded-full 
          flex items-center justify-center 
          shrink-0 
          transition-transform hover:scale-105
          ${dark 
            ? 'bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700/80 text-white shadow-md' 
            : 'bg-white border border-gray-200 text-gray-900 shadow-xs'
          }
          ${className}
        `}
      >
        <AvanttyLogoIcon className={iconSizes[size]} />
      </div>
    );
  }

  // Full variant: Circle + Text "avantty"
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div 
        className={`
          ${containerSizes[size]} 
          rounded-full 
          flex items-center justify-center 
          shrink-0 
          ${dark 
            ? 'bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700/80 text-white shadow-md' 
            : 'bg-white border border-gray-200 text-gray-900 shadow-xs'
          }
        `}
      >
        <AvanttyLogoIcon className={iconSizes[size]} />
      </div>
      <ShinyText 
        text="Avantty" 
        color={dark ? '#ffffff' : '#111827'} 
        shineColor={dark ? '#93c5fd' : '#2563eb'} 
        speed={2.2} 
        spread={120} 
        className="font-display font-bold text-lg tracking-tight"
      />
    </div>
  );
};
