'use client';

import React, { useState } from 'react';
import { conditions } from '@/data/doctorData';
import { ShieldAlert, Check, HelpCircle, ArrowRight } from 'lucide-react';

export default function ConditionsSection() {
  const [activeTab, setActiveTab] = useState(conditions[0].id);

  const activeCondition = conditions.find(c => c.id === activeTab) || conditions[0];

  return (
    <section 
      id="conditions" 
      className="py-20 bg-white relative z-20"
      aria-labelledby="conditions-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-medical-700 font-semibold text-sm uppercase tracking-wider mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-medical-600" />
            <span>Pathology Guides</span>
          </div>
          <h2 id="conditions-heading" className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Common Eye Conditions We Diagnose & Treat
          </h2>
          <p className="text-slate-500 mt-4 leading-relaxed text-sm">
            Educating patients is the foundation of our clinical care. Select a condition below to read about its symptoms and recommended professional treatment.
          </p>
        </div>

        {/* Mobile View: Vertical Accordion List */}
        <div className="md:hidden space-y-4">
          {conditions.map((item) => {
            const isOpen = activeTab === item.id;
            return (
              <div 
                key={item.id} 
                className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setActiveTab(isOpen ? '' : item.id)}
                  className={`w-full text-left py-4 px-5 font-bold text-sm flex justify-between items-center transition duration-200 ${
                    isOpen ? 'bg-medical-50 text-medical-800' : 'bg-white text-slate-800'
                  }`}
                >
                  <span>{item.title}</span>
                  <span className="text-lg">{isOpen ? '−' : '+'}</span>
                </button>
                
                {isOpen && (
                  <div className="p-5 bg-white border-t border-slate-100 space-y-4 animate-fade-in">
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Symptoms */}
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                        <ShieldAlert className="w-3.5 h-3.5 text-medical-600" />
                        <span>Common Symptoms</span>
                      </h4>
                      <ul className="grid grid-cols-1 gap-1.5">
                        {item.symptoms.map((sym) => (
                          <li key={sym} className="flex items-start gap-1.5 text-slate-600 text-xs font-medium">
                            <span className="text-medical-600 shrink-0 mt-0.5">•</span>
                            <span>{sym}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Care */}
                    <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                      <h4 className="text-xs font-bold text-medical-700 mb-1 flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" />
                        <span>Our Treatment Care</span>
                      </h4>
                      <p className="text-slate-600 text-[11px] leading-relaxed">
                        {item.treatments}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop View: Interactive Split Tabs Grid */}
        <div className="hidden md:grid grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Vertical tabs selector (5 cols) */}
          <div className="col-span-5 flex flex-col gap-1.5 bg-slate-50 p-3 rounded-2xl border border-slate-100 max-h-[580px] overflow-y-auto no-scrollbar">
            {conditions.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left py-3.5 px-5 rounded-xl font-bold text-xs tracking-wide uppercase transition duration-200 flex items-center justify-between group ${
                    isActive 
                      ? 'bg-medical-700 text-white shadow-sm' 
                      : 'text-slate-600 hover:bg-white hover:text-medical-700'
                  }`}
                >
                  <span>{item.title}</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition transform ${
                    isActive ? 'opacity-100 translate-x-1 text-white' : 'opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 text-medical-600'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed panel (7 cols) */}
          <div className="col-span-7 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm min-h-[480px] flex flex-col justify-between">
            <div className="space-y-6">
              {/* Category & Title */}
              <div>
                <span className="text-[10px] font-bold uppercase text-medical-700 tracking-widest bg-medical-50 py-1 px-3 rounded-md">
                  Condition Profile
                </span>
                <h3 className="text-2xl font-bold font-display text-slate-900 mt-3 tracking-tight">
                  {activeCondition.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed">
                {activeCondition.description}
              </p>

              {/* Symptoms */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 mb-3 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-medical-600" />
                  <span>Primary Observable Symptoms</span>
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {activeCondition.symptoms.map((sym) => (
                    <div key={sym} className="flex items-start gap-2 text-slate-700 text-xs font-semibold">
                      <div className="bg-medical-100 p-0.5 rounded-full text-medical-700 mt-0.5 shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{sym}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Care Recommendation Footer block */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 mt-8 shadow-sm flex items-start gap-4">
              <div className="bg-medical-50 p-2.5 rounded-xl text-medical-700 shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                  Clinical Care Approach
                </h4>
                <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                  {activeCondition.treatments}
                </p>
                <a 
                  href="#appointment"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-medical-700 hover:underline mt-3.5 focus:outline-none"
                >
                  <span>Consult with Dr. Sharma</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
