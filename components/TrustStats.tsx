'use client';

import React, { useState, useEffect, useRef } from 'react';
import { statistics } from '@/data/doctorData';
import { Award, Users, HeartPulse, CheckCircle2 } from 'lucide-react';

interface CounterProps {
  value: number;
  suffix: string;
  duration?: number;
}

function Counter({ value, suffix, duration = 1600 }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const isFloat = !Number.isInteger(value);
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing curve (easeOutQuad)
      const easeProgress = progress * (2 - progress);
      const currentVal = easeProgress * (end - start) + start;
      
      if (isFloat) {
        setCount(parseFloat(currentVal.toFixed(1)));
      } else {
        setCount(Math.floor(currentVal));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end); // ensure accurate final state
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, value, duration]);

  const formatValue = (val: number) => {
    if (val >= 1000) {
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return val;
  };

  return (
    <div ref={elementRef} className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-medical-700 tracking-tight">
      <span>{formatValue(count)}</span>
      <span className="text-medical-600 font-bold ml-0.5">{suffix}</span>
    </div>
  );
}

export default function TrustStats() {
  // Map icons to the 4 stats in sequence
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Award className="w-5 h-5 text-medical-600" aria-hidden="true" />;
      case 1:
        return <Users className="w-5 h-5 text-medical-600" aria-hidden="true" />;
      case 2:
        return <HeartPulse className="w-5 h-5 text-medical-600" aria-hidden="true" />;
      case 3:
      default:
        return <CheckCircle2 className="w-5 h-5 text-medical-600" aria-hidden="true" />;
    }
  };

  return (
    <section 
      id="statistics"
      className="bg-white py-12 border-y border-slate-100 relative z-20"
      aria-label="Clinical Trust Metrics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-y-0 divide-x-0 lg:divide-x lg:divide-slate-100">
          {statistics.map((stat, idx) => (
            <div 
              key={stat.label} 
              className="flex flex-col items-center lg:items-start text-center lg:text-left px-2 lg:px-6 first:pl-0 last:pr-0"
            >
              {/* Icon Container */}
              <div className="bg-medical-50 p-2.5 rounded-xl text-medical-700 mb-4 inline-flex">
                {getIcon(idx)}
              </div>
              
              {/* Count */}
              <Counter value={stat.value} suffix={stat.suffix} />
              
              {/* Label */}
              <p className="text-slate-500 text-xs sm:text-sm font-semibold tracking-wide uppercase mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
