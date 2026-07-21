'use client';

import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { services } from '@/data/doctorData';
import { ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';

// Dynamically resolve icon components safely
const resolveIcon = (iconName: string) => {
  const IconComp = (Icons as any)[iconName];
  if (IconComp) {
    return <IconComp className="w-5 h-5 text-medical-700 group-hover:text-white transition duration-300" />;
  }
  return <Icons.Eye className="w-5 h-5 text-medical-700 group-hover:text-white transition duration-300" />;
};

export default function ServicesSection() {
  const [showAll, setShowAll] = useState(false);

  // Divide services for responsive presentation
  const visibleServices = showAll ? services : services.slice(0, 6);

  return (
    <section 
      id="services" 
      className="py-20 bg-slate-50 relative z-20"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-medical-700 font-semibold text-sm uppercase tracking-wider mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-medical-600" />
            <span>Ophthalmic Disciplines</span>
          </div>
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Comprehensive Clinical Eye Care & Micro-Surgery
          </h2>
          <p className="text-slate-500 mt-4 leading-relaxed text-sm">
            We offer advanced diagnostics and microscopic laser therapies to address standard refractive problems and complex retinal conditions alike.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
          {visibleServices.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between group relative"
            >
              <div>
                {/* Header Icon + Popular badge */}
                <div className="flex justify-between items-start mb-5">
                  <div className="bg-medical-50 p-3 rounded-xl text-medical-700 group-hover:bg-medical-700 transition duration-300">
                    {resolveIcon(service.iconName)}
                  </div>
                  {service.isPopular && (
                    <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-800 py-1 px-2.5 rounded-full tracking-wide">
                      Popular
                    </span>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-base font-bold text-slate-900 tracking-tight mb-2.5">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Bottom tag / Action link */}
              <div className="border-t border-slate-100 pt-4 flex justify-between items-center text-xs font-semibold text-medical-700">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-medical-600" />
                  Available Daily
                </span>
                <a 
                  href="#appointment" 
                  className="hover:underline focus:outline-none text-slate-400 hover:text-medical-700"
                >
                  Book Slot &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Trigger Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-medical-600 text-slate-700 hover:text-medical-700 font-bold text-sm rounded-full py-3 px-8 shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-medical-600 focus:ring-offset-2"
            aria-expanded={showAll}
            aria-controls="services-grid"
          >
            <span>{showAll ? 'Show Fewer Services' : 'View All 13 Services'}</span>
            {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

      </div>
    </section>
  );
}
