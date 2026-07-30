"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { useMemo } from "react";

interface BeamOptions {
  initialX?: number;
  translateX?: number;
  initialY?: number | string;
  translateY?: number | string;
  rotate?: number;
  className?: string;
  duration?: number;
  delay?: number;
  repeatDelay?: number;
}

export const BackgroundBeamsWithCollision = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const beams: BeamOptions[] = useMemo(() => {
    const beamList: BeamOptions[] = [];
    const totalBeams = 60;
    for (let i = 0; i < totalBeams; i++) {
      const x = i * 26 + (i % 4) * 4;
      const duration = 2.2 + (i % 8) * 0.4;
      const delay = (i % 13) * 0.25;
      const repeatDelay = 0.2 + (i % 5) * 0.3;
      const heights = ["h-8", "h-12", "h-14", "h-16", "h-20", "h-10"];
      const hClass = heights[i % heights.length];
      beamList.push({
        initialX: x,
        translateX: x,
        duration,
        delay,
        repeatDelay,
        className: hClass,
      });
    }
    return beamList;
  }, []);

  return (
    <div
      className={cn(
        "relative flex items-center w-full justify-center overflow-hidden bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800",
        className
      )}
    >
      {beams.map((beam, index) => (
        <Beam key={`beam-${index}-${beam.initialX}`} beamOptions={beam} />
      ))}

      {children}
      
      {/* Bottom Subtle Divider Line */}
      <div
        className="absolute bottom-0 bg-neutral-100 w-full inset-x-0 pointer-events-none h-px"
        style={{
          boxShadow:
            "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08)",
        }}
      ></div>
    </div>
  );
};

const Beam: React.FC<{ beamOptions: BeamOptions; key?: React.Key }> = ({ beamOptions }) => {
  return (
    <motion.div
      initial={{
        translateY: beamOptions.initialY || "-150px",
        translateX: beamOptions.initialX ?? 0,
        rotate: beamOptions.rotate || 0,
      }}
      animate={{
        translateY: beamOptions.translateY || "1200px",
        translateX: beamOptions.translateX ?? 0,
        rotate: beamOptions.rotate || 0,
      }}
      transition={{
        duration: beamOptions.duration || 4,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        delay: beamOptions.delay || 0,
        repeatDelay: beamOptions.repeatDelay || 0,
      }}
      className={cn(
        "absolute left-0 top-0 m-auto h-14 w-px rounded-full bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent pointer-events-none z-10",
        beamOptions.className
      )}
    />
  );
};

