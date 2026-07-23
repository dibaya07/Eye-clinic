'use client';

import { doctor } from '@/data/doctorData';
import { Check, Award, ShieldCheck, Heart, ArrowDownNarrowWide, ArrowDown, CircleChevronDown, CircleChevronUp } from 'lucide-react';

export default function AboutDoctor() {

  return (
    <section 
      id="about" 
      className="py-15 sm:py-20 bg-slate-50 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col">
            <div className="flex items-center gap-2 text-medical-700 font-semibold text-sm uppercase tracking-wider mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-medical-600" />
              <span>About the Founder</span>
            </div>
            
            <h2 id="about-heading" className="text-2xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-2 sm:mb-6">
              Expert Clinical Leadership by {doctor.name}
            </h2>

            <p className="text-[10px] sm:text-xs font-semibold text-medical-700 uppercase tracking-widest bg-medical-50 py-1.5 px-3.5 rounded-lg w-fit mb-6">
              {doctor.experience}
            </p>

            {/* Biography */}
            <div className='text-slate-600 leading-relaxed text-sm mb-8'>
              <p>{doctor.biography }</p>
            </div>
            

            {/* Specialization Bullet Bento */}
            <h3 className="text-base font-bold text-slate-800 tracking-tight mb-4 flex items-center gap-2">
              <Heart className="w-4 h-4 text-medical-600" />
              <span>Core Clinical Focus & Interventions</span>
            </h3>

            <div className="flex flex-col sm:flex-row sm:flex-wrap  gap-3 mb-8 ">
              {doctor.specializations.map((spec) => (
                <div key={spec} className="flex items-start gap-2.5 ">
                  <div className="bg-medical-100 p-0.5 rounded-full text-medical-700 mt-0.5 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 w-full sm:w-[325px] lg:w-[345px] ">{spec}</span>
                </div>
              ))}
            </div>

            {/* Awards & Distinctions */}
            <h3 className="text-base font-bold text-slate-800 tracking-tight mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-medical-600" />
              <span>Awards & Fellowships</span>
            </h3>

            <div className="space-y-3">
              {doctor.awards.map((award) => (
                <div key={award} className="flex items-center gap-3 w-fit bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm">
                  <div className="text-amber-500 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 leading-tight">
                    {award}
                  </span>
                </div>
              ))}
            </div>

          {/* </div> */}

        </div>
      </div>
    </section>
  );
}
