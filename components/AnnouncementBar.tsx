'use client';

import React from 'react';
import { AlertCircle, Clock } from 'lucide-react';
import { clinic } from '@/data/doctorData';

export default function AnnouncementBar() {
  return (
    <div 
      id="announcement-bar"
      className="bg-medical-700 text-white py-2 px-4 text-[8px] sm:text-xs font-medium border-b border-medical-800 transition-colors duration-200 flex gap-2 justify-evenly items-center "
      role="complementary"
      aria-label="Emergency and Timing Notice"
    >
          <div className="flex items-center gap-1.5 ">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{clinic.timings}</span>
          </div>
          <div className="block h-3 w-px bg-medical-600" />
          <div className="block">
            <span>Sunday: <span className="text-amber-300 font-medium">Close</span></span>
          </div>
    </div>
  );
}
