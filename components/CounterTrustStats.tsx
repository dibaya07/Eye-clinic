"use client";
import { animate } from "motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";


interface CounterProps {
  value: number;
  suffix?: string;
}


export default function CounterTrustStats({value, suffix} : CounterProps) {
    const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref,{ once: true });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 1.5,
      onUpdate(value) {
        setCount(Math.floor(value));
      },
    });

    return () => controls.stop();
  }, [isInView]);

  return (
  
    <div ref={ref} className="font-display text-xl sm:text-4xl lg:text-5xl font-extrabold text-medical-700 tracking-tight">
       <span>{count}</span>
       <span className="text-medical-600 font-bold ml-0.5">{suffix}</span>
     </div>
);
}
