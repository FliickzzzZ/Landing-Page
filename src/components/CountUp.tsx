import React, { useCallback, useEffect, useRef } from 'react';
import { useInView, useMotionValue, animate } from 'motion/react';

export interface CountUpProps {
  to: number;
  from?: number;
  direction?: 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

export const CountUp: React.FC<CountUpProps> = ({
  to,
  from,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  onStart,
  onEnd
}) => {
  const ref = useRef<HTMLSpanElement>(null);

  let startValue: number;
  let endValue: number;

  if (direction === 'down') {
    startValue = from !== undefined ? from : (to === 0 ? 100 : to);
    endValue = to;
    if (startValue === endValue && endValue === 0) {
      startValue = 100;
      endValue = 0;
    }
  } else {
    startValue = from !== undefined ? from : 0;
    endValue = to;
  }

  const motionValue = useMotionValue(startValue);
  const isInView = useInView(ref, { once: true, margin: '0px' });

  const getDecimalPlaces = (num: number) => {
    const str = num.toString();
    if (str.includes('.')) {
      const decimals = str.split('.')[1];
      if (parseInt(decimals, 10) !== 0) {
        return decimals.length;
      }
    }
    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(startValue), getDecimalPlaces(endValue));

  const formatValue = useCallback(
    (latest: number) => {
      const hasDecimals = maxDecimals > 0;
      const options: Intl.NumberFormatOptions = {
        useGrouping: !!separator,
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0
      };
      const formattedNumber = Intl.NumberFormat('en-US', options).format(latest);
      return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
    },
    [maxDecimals, separator]
  );

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatValue(startValue);
    }
  }, [startValue, formatValue]);

  useEffect(() => {
    if (isInView && startWhen) {
      if (typeof onStart === 'function') onStart();

      const controls = animate(motionValue, endValue, {
        duration,
        delay,
        ease: [0.25, 1, 0.5, 1],
        onComplete: () => {
          if (typeof onEnd === 'function') onEnd();
        }
      });

      return () => {
        controls.stop();
      };
    }
  }, [isInView, startWhen, motionValue, startValue, endValue, delay, duration, onStart, onEnd]);

  useEffect(() => {
    const unsubscribe = motionValue.on('change', latest => {
      if (ref.current) {
        ref.current.textContent = formatValue(latest);
      }
    });

    return () => unsubscribe();
  }, [motionValue, formatValue]);

  return <span className={className} ref={ref} />;
};

export default CountUp;
