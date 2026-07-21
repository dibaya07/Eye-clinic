'use client';

import React, { useState } from 'react';
import { faq } from '@/data/doctorData';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(faq[0]?.id || null);

  const toggleFaq = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section 
      id="faq" 
      className="py-20 bg-slate-50 relative z-20"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-medical-700 font-semibold text-sm uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4 text-medical-600" />
            <span>Faq Help desk</span>
          </div>
          <h2 id="faq-heading" className="text-3xl font-display font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 mt-3 text-xs sm:text-sm leading-relaxed">
            Get instant expert clarity on outpatient waiting, cashless surgery empanelment, cataract care recovery timelines, and consulting fees.
          </p>
        </div>

        {/* Zero-Dependency Accordion List */}
        <div className="space-y-4">
          {faq.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id} 
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-300 hover:border-slate-200"
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full text-left py-4 px-6 flex justify-between items-center gap-4 transition focus:outline-none focus:bg-medical-50/20 group"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="font-bold text-slate-800 text-sm group-hover:text-medical-700 transition">
                    {item.question}
                  </span>
                  <span className="p-1 rounded-lg bg-slate-50 text-slate-400 group-hover:bg-medical-50 group-hover:text-medical-700 transition shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {/* Animated Collapsible Panel using pure Tailwind classes */}
                <div 
                  id={`faq-answer-${item.id}`}
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen 
                      ? 'max-h-[300px] border-t border-slate-100 opacity-100' 
                      : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                  role="region"
                  aria-labelledby={`faq-button-${item.id}`}
                >
                  <div className="p-6 text-xs sm:text-sm text-slate-500 leading-relaxed font-normal bg-white">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-100 p-6 text-center shadow-sm max-w-xl mx-auto">
          <p className="text-xs text-slate-500 leading-relaxed">
            Have a different clinical eye diagnostic or operational query? Reach our hospital coordinators directly at{" "}
            <a href="mailto:contact@clearvision.com" className="font-semibold text-medical-700 hover:underline">
              contact@clearvision.com
            </a>{" "}
            or speak live on{" "}
            <a href="tel:+919876543210" className="font-semibold text-medical-700 hover:underline">
              +91 98765 43210
            </a>
            .
          </p>
        </div>

      </div>
    </section>
  );
}
