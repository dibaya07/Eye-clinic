'use client';

import React from 'react';
import { process } from '@/data/doctorData';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function TreatmentProcess() {
  return (
    <section 
      id="process" 
      className="py-20 bg-slate-50 relative overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-medical-700 font-semibold text-sm uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-medical-600" />
            <span>Consultation Roadmap</span>
          </div>
          <h2 id="process-heading" className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Your Premium Sutureless Vision Journey
          </h2>
          <p className="text-slate-500 mt-4 leading-relaxed text-sm">
            We respect your time and comfort. Our structured clinical pathway is designed to offer precise, painless diagnostics and frictionless medical discharge.
          </p>
        </div>

        {/* Step-by-Step Pathway Container */}
        {/* Desktop Connected Line Layout (hidden on sm/md) */}
        <div className="hidden lg:grid grid-cols-5 gap-6 relative">
          
          {/* Connector Line */}
          <div 
            className="absolute top-1/4 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-medical-100 via-medical-600 to-medical-100 z-0"
            aria-hidden="true"
          />

          {process.map((step, idx) => (
            <div 
              key={step.step} 
              className="relative z-10 flex flex-col items-center text-center group"
            >
              {/* Step Circle Bubble */}
              <div className="bg-white text-medical-700 w-14 h-14 rounded-2xl border-2 border-medical-100 shadow-md flex items-center justify-center font-display font-black text-lg group-hover:border-medical-700 group-hover:bg-medical-700 group-hover:text-white transition duration-300 mb-6">
                {step.step}
              </div>

              {/* Title & Description */}
              <h3 className="text-base font-bold text-slate-900 tracking-tight mb-2.5">
                {step.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed max-w-[200px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Vertical Connected Line Layout (hidden on lg) */}
        <div className="lg:hidden relative pl-8 border-l-2 border-medical-100 space-y-12 max-w-md mx-auto">
          {process.map((step) => (
            <div key={step.step} className="relative group">
              {/* Floating Bullet Node */}
              <div className="absolute -left-12 top-0 bg-white text-medical-700 w-8 h-8 rounded-lg border-2 border-medical-100 flex items-center justify-center font-display font-black text-xs group-hover:bg-medical-700 group-hover:text-white transition duration-200 shadow-sm">
                {step.step}
              </div>

              {/* Step Details */}
              <h3 className="text-sm font-bold text-slate-900 tracking-tight mb-1.5 flex items-center gap-2">
                <span>{step.title}</span>
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Consultation Call Action banner */}
        <div className="mt-16 text-center">
          <a 
            href="#appointment"
            className="inline-flex items-center gap-2 text-sm font-bold text-medical-700 hover:text-medical-800 hover:underline transition focus:outline-none"
          >
            <span>Read more about our outpatient prep checklist</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
