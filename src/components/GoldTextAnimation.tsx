import React from 'react';
import { motion } from 'motion/react';

export const GoldTextAnimation: React.FC = () => {
  // Cycle timing in seconds: Total = 5.5s
  // 0s - 3.8s: Solid readable gold text displayed clearly
  // 3.8s - 4.1s: Crack lines flash
  // 4.1s - 4.8s: Shatter explosion into shards
  // 4.8s - 5.5s: Re-assemble / fade back in smoothly

  const totalDuration = 5.5;

  const letterShards = [
    { text: 'G', x: -16, y: -10, r: -40, top: '0%', left: '0%' },
    { text: 'O', x: -6, y: -18, r: -20, top: '0%', left: '26%' },
    { text: 'L', x: 8, y: -16, r: 25, top: '0%', left: '52%' },
    { text: 'D', x: 18, y: -8, r: 45, top: '0%', left: '76%' },
    { text: '✦', x: -10, y: 12, r: 60, top: '30%', left: '15%' },
    { text: '❖', x: 12, y: 14, r: -45, top: '30%', left: '65%' },
  ];

  return (
    <span className="relative inline-flex items-center justify-center px-0.5 mx-0.5 font-sans">
      {/* Crisp Solid Gold Text */}
      <motion.span
        className="relative z-10 font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-400 to-amber-700 text-[10px] leading-none"
        style={{
          filter: 'drop-shadow(0px 0.5px 0.5px rgba(180, 83, 9, 0.6))',
        }}
        animate={{
          opacity: [1, 1, 1, 0, 0, 1],
          scale: [1, 1, 1.05, 0.7, 0.9, 1],
        }}
        transition={{
          duration: totalDuration,
          repeat: Infinity,
          times: [0, 0.68, 0.73, 0.8, 0.9, 1],
          ease: 'easeInOut',
        }}
      >
        GOLD
      </motion.span>

      {/* Subtle Shimmer Flash Line during the hold phase */}
      <motion.span
        className="absolute inset-0 z-15 bg-gradient-to-r from-transparent via-amber-100/80 to-transparent pointer-events-none rounded"
        animate={{
          x: ['-120%', '120%'],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatDelay: 2.6,
          ease: 'easeInOut',
        }}
      />

      {/* Crack Lines overlay right before shatter */}
      <svg
        viewBox="0 0 32 12"
        className="absolute inset-0 z-20 w-full h-full pointer-events-none overflow-visible"
      >
        <motion.path
          d="M 2,2 L 9,7 L 15,3 L 22,10 L 30,2 M 9,7 L 12,11 M 22,10 L 20,1"
          fill="none"
          stroke="#FEF3C7"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{
            pathLength: [0, 0, 1, 0, 0],
            opacity: [0, 0, 1, 0, 0],
          }}
          transition={{
            duration: totalDuration,
            repeat: Infinity,
            times: [0, 0.68, 0.74, 0.82, 1],
          }}
        />
      </svg>

      {/* Exploding Shards */}
      {letterShards.map((shard, idx) => (
        <motion.span
          key={idx}
          className="absolute z-30 font-black text-amber-500 text-[10px] leading-none pointer-events-none"
          style={{ top: shard.top, left: shard.left }}
          animate={{
            x: [0, 0, shard.x, 0],
            y: [0, 0, shard.y, 0],
            rotate: [0, 0, shard.r, 0],
            scale: [0, 0, 1.2, 0],
            opacity: [0, 0, 1, 0],
          }}
          transition={{
            duration: totalDuration,
            repeat: Infinity,
            times: [0, 0.74, 0.85, 0.95],
            ease: 'easeOut',
          }}
        >
          {shard.text}
        </motion.span>
      ))}
    </span>
  );
};

