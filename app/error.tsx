'use client';

import React, { useEffect } from 'react';
import { ShieldAlert, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error to diagnostic logs if necessary
    console.error('NextJS Clinical App Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-white p-10 sm:p-12 rounded-3xl border border-slate-100 shadow-xl max-w-md w-full">
        
        {/* Error notification icon */}
        <div className="bg-rose-50 p-4 rounded-full text-rose-600 inline-flex mb-6">
          <ShieldAlert className="w-10 h-10" />
        </div>

        {/* Headline */}
        <h1 className="font-display text-2xl font-extrabold text-slate-900 tracking-tight">
          Ocular Session Error
        </h1>
        
        <p className="text-slate-500 text-xs sm:text-sm mt-3 leading-relaxed">
          An unexpected clinical module rendering error occurred. Please trigger a memory reset or return to the main dashboard.
        </p>

        {/* Action Triggers */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch justify-center gap-3">
          <button
            onClick={() => reset()}
            className="bg-medical-700 hover:bg-medical-800 text-white font-semibold text-xs py-3 px-6 rounded-full shadow-sm hover:shadow flex items-center justify-center gap-1.5 transition"
          >
            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            <span>Retry Operation</span>
          </button>
          
          <Link
            href="/"
            className="bg-white border border-slate-200 hover:border-medical-600 text-slate-700 hover:text-medical-700 font-semibold text-xs py-3 px-6 rounded-full shadow-sm transition flex items-center justify-center gap-1.5"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Go to Home</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
