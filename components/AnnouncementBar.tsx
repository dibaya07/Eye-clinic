'use client';

import React from 'react';
import { Phone, AlertCircle, Clock } from 'lucide-react';
import { clinic, hero } from '@/data/doctorData';

export default function AnnouncementBar() {
  return (
    <div 
      id="announcement-bar"
      className="bg-medical-700 text-white py-2 px-4 text-xs font-medium border-b border-medical-800 transition-colors duration-200"
      role="complementary"
      aria-label="Emergency and Timing Notice"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
        {/* Left Side: Emergency */}
        <div className="flex items-center gap-2">
          <span className="inline-flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" aria-hidden="true" />
          <AlertCircle className="w-3.5 h-3.5 text-amber-300" aria-hidden="true" />
          <span className="tracking-wide">
            <strong className="font-semibold text-amber-200">Emergency Eye Helpline: </strong>
            <a 
              href={`tel:${clinic.phoneRaw}`} 
              className="hover:underline focus:outline-none focus:ring-1 focus:ring-amber-300 focus:ring-offset-1 focus:ring-offset-medical-700 rounded px-1 transition"
            >
              {clinic.phone}
            </a>
          </span>
        </div>

        {/* Right Side: Timings */}
        <div className="flex items-center gap-4 text-medical-100">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{clinic.timings}</span>
          </div>
          <div className="hidden md:block h-3 w-px bg-medical-600" />
          <div className="hidden md:block">
            <span>Sunday: <span className="text-amber-300 font-medium">Emergency Only</span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
