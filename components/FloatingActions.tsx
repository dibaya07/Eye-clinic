'use client';

import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, MessageCircle } from 'lucide-react';
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
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="bg-slate-900/90 hover:bg-slate-900 text-white p-3 rounded-full shadow-lg border border-slate-800 transition duration-300 flex items-center justify-center hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-medical-600 animate-fade-in"
          aria-label="Scroll back to top of the page"
        >
          <ArrowUp className="w-4.5 h-4.5" />
        </button>
      )}

      <a
        href={`tel:${clinic.phoneRaw}`}
        className="sm:hidden bg-medical-700 hover:bg-medical-800 text-white p-4.5 rounded-full shadow-xl transition duration-300 flex items-center justify-center hover:scale-103 focus:outline-none focus:ring-2 focus:ring-medical-600 relative overflow-hidden"
        aria-label="Quick Phone Call Support"
      >
        <Phone className="w-5 h-5 relative z-10" />
      </a>

      <a
        href={`https://wa.me/916026981325?text=${"Hello"}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-emerald-600 hover:bg-emerald-700 text-white p-4.5 rounded-full shadow-xl transition duration-300 flex items-center justify-center hover:scale-103 focus:outline-none focus:ring-2 focus:ring-emerald-600 relative overflow-hidden group"
        aria-label="Chat on WhatsApp with clinical coordinators"
      >
        <span className="absolute inset-0 bg-emerald-400/20 animate-pulse rounded-full scale-150 opacity-70" aria-hidden="true" />
        <MessageCircle/>
      </a>
    </div>
  );
}
