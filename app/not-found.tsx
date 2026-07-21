'use client';

import React from 'react';
import Link from 'next/link';
import { EyeOff, ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-white p-10 sm:p-12 rounded-3xl border border-slate-100 shadow-xl max-w-md w-full">
        
        {/* Medical themed alert icon */}
        <div className="bg-rose-50 p-4 rounded-full text-rose-600 inline-flex mb-6">
          <EyeOff className="w-10 h-10 animate-pulse" />
        </div>

        {/* 404 Headline */}
        <h1 className="font-display text-4xl font-extrabold text-slate-900 tracking-tight">
          Page Not Found
        </h1>
        
        <p className="text-slate-500 text-xs sm:text-sm mt-3 leading-relaxed">
          The eye clinic resource you are looking for has been relocated or is temporarily offline. Let us help you find your way back to visual clarity.
        </p>

        {/* Action button triggers */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch justify-center gap-3">
          <Link
            href="/"
            className="bg-medical-700 hover:bg-medical-800 text-white font-semibold text-xs py-3 px-6 rounded-full shadow-sm hover:shadow flex items-center justify-center gap-1.5 transition"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="bg-white border border-slate-200 hover:border-medical-600 text-slate-700 hover:text-medical-700 font-semibold text-xs py-3 px-6 rounded-full shadow-sm transition flex items-center justify-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Go Back</span>
          </button>
        </div>

      </div>
    </div>
  );
}
