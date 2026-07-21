'use client';

import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import { clinic } from '@/data/doctorData';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div 
      className="fixed bottom-6 right-6 z-40 flex flex-col gap-3.5 items-end"
      role="complementary"
      aria-label="Floating Shortcuts"
    >
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="bg-slate-900/90 hover:bg-slate-900 text-white p-3 rounded-full shadow-lg border border-slate-800 transition duration-300 flex items-center justify-center hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-medical-600 animate-fade-in"
          aria-label="Scroll back to top of the page"
        >
          <ArrowUp className="w-4.5 h-4.5" />
        </button>
      )}

      {/* Floating Mobile Call Button (Visible only on screens below sm: md/lg hide this) */}
      <a
        href={`tel:${clinic.phoneRaw}`}
        className="sm:hidden bg-medical-700 hover:bg-medical-800 text-white p-4.5 rounded-full shadow-xl transition duration-300 flex items-center justify-center hover:scale-103 focus:outline-none focus:ring-2 focus:ring-medical-600 relative overflow-hidden"
        aria-label="Quick Phone Call Support"
      >
        <span className="absolute inset-0 bg-white/10 animate-ping rounded-full scale-150 opacity-40" aria-hidden="true" />
        <Phone className="w-5 h-5 relative z-10" />
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={clinic.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-emerald-600 hover:bg-emerald-700 text-white p-4.5 rounded-full shadow-xl transition duration-300 flex items-center justify-center hover:scale-103 focus:outline-none focus:ring-2 focus:ring-emerald-600 relative overflow-hidden group"
        aria-label="Chat on WhatsApp with clinical coordinators"
      >
        {/* Soft pulse effect */}
        <span className="absolute inset-0 bg-emerald-400/20 animate-pulse rounded-full scale-150 opacity-70" aria-hidden="true" />
        
        {/* Text hover tag for accessibility & premium desktop experience */}
        <span className="hidden md:inline-block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out text-[10px] font-bold uppercase tracking-wider pl-0 group-hover:pl-2 group-hover:pr-1 font-sans">
          WhatsApp Help
        </span>

        <svg className="w-5 h-5 relative z-10 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.588 1.971 14.111.945 11.48.945 6.05.945 1.625 5.315 1.62 10.744c-.001 1.758.465 3.475 1.348 4.981l-.993 3.626 3.733-.967c1.472.802 3.109 1.222 4.673 1.222z"/>
        </svg>
      </a>
    </div>
  );
}
