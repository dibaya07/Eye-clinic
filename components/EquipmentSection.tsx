'use client';

import React from 'react';
import Image from 'next/image';
import { equipment } from '@/data/doctorData';
import { Shield, Microscope, CheckCircle } from 'lucide-react';

export default function EquipmentSection() {
  return (
    <section 
      id="technology" 
      className="py-20 bg-white relative z-20"
      aria-labelledby="tech-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-medical-700 font-semibold text-sm uppercase tracking-wider mb-3">
            <Microscope className="w-4 h-4 text-medical-600" />
            <span>Advanced Diagnostic Core</span>
          </div>
          <h2 id="tech-heading" className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Advanced Diagnostic & Surgical Technologies
          </h2>
          <p className="text-slate-500 mt-4 leading-relaxed text-sm">
            Early detection saves sight. We invest in high-resolution Zeiss, Topcon, and Alcon medical imaging to detect abnormalities with sub-micron precision.
          </p>
        </div>

        {/* Equipment Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {equipment.map((item) => (
            <div 
              key={item.id} 
              className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative w-full aspect-[16/10] bg-slate-200">
                <Image 
                  src={item.image}
                  alt={`Advanced equipment: ${item.name}`}
                  fill
                  sizes="(max-w-7xl) 40vw, 600px"
                  className="object-cover hover:scale-101 transition duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Tech category badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slate-800 text-[10px] font-bold uppercase py-1 px-3 rounded-full border border-slate-100 shadow-sm flex items-center gap-1">
                  <Shield className="w-3 h-3 text-medical-600" />
                  <span>Certified High Precision</span>
                </div>
              </div>

              {/* Text Area */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2.5">
                    {item.name}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Patient Benefit panel */}
                <div className="bg-white p-4 rounded-xl border border-slate-200/60 flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-medical-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] font-bold uppercase text-medical-700 tracking-wider">
                      Direct Patient Benefit
                    </span>
                    <span className="block text-[11px] text-slate-600 mt-0.5 font-medium leading-relaxed">
                      {item.benefit}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
