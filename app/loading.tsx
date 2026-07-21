import React from 'react';
import { Eye } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="flex flex-col items-center">
        
        {/* Animated clinical icon */}
        <div className="relative mb-6 flex items-center justify-center">
          <div className="absolute inset-0 bg-medical-600/10 rounded-full scale-150 animate-ping opacity-60 w-12 h-12" />
          <div className="bg-medical-700 text-white p-3.5 rounded-full relative z-10 shadow-md">
            <Eye className="w-6 h-6 animate-pulse" />
          </div>
        </div>

        {/* Loading text messages */}
        <h2 className="font-display text-base font-bold text-slate-800 tracking-tight">
          Clear Vision Eye Hospital
        </h2>
        <p className="text-slate-400 text-xs mt-1.5 font-semibold tracking-wide uppercase">
          Optimizing Visual Channels...
        </p>

      </div>
    </div>
  );
}
