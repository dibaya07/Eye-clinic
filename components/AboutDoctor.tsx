'use client';

import React from 'react';
import Image from 'next/image';
import { doctor } from '@/data/doctorData';
import { Check, Award, ShieldCheck, Heart } from 'lucide-react';

export default function AboutDoctor() {
  return (
    <section 
      id="about" 
      className="py-20 bg-slate-50 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait and Info Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[400px] aspect-[5/6] rounded-3xl overflow-hidden shadow-lg border border-white bg-white">
              <Image 
                src={doctor.image}
                alt={`Chief micro-surgeon ${doctor.name}`}
                fill
                sizes="(max-w-7xl) 35vw, 400px"
                className="object-cover object-top hover:scale-101 transition duration-500 ease-out"
                referrerPolicy="no-referrer"
              />
              
              {/* Badge overlay */}
              <div className="absolute top-4 left-4 bg-navy-800 text-white font-semibold text-xs py-1.5 px-3.5 rounded-full shadow-md flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-medical-600" />
                <span>Board Certified Surgeon</span>
              </div>
            </div>

            {/* Micro Consultation Card */}
            <div className="w-full max-w-[360px] bg-white -mt-10 relative z-10 p-5 rounded-2xl shadow-md border border-slate-100 text-center">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                Direct Consultations
              </p>
              <p className="text-2xl font-bold font-display text-slate-900 mt-1">
                Fee: {doctor.consultationFee}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                In-person complete diagnostics included
              </p>
              <a 
                href="#appointment"
                className="mt-4 block w-full bg-medical-700 hover:bg-medical-800 text-white font-semibold text-xs py-2.5 px-4 rounded-xl transition duration-200 shadow-sm"
              >
                Schedule Consultation
              </a>
            </div>
          </div>

          {/* Right Column: Biography & Details (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-medical-700 font-semibold text-sm uppercase tracking-wider mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-medical-600" />
              <span>About the Founder</span>
            </div>
            
            <h2 id="about-heading" className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-6">
              Expert Clinical Leadership by {doctor.name}
            </h2>

            <p className="text-xs font-semibold text-medical-700 uppercase tracking-widest bg-medical-50 py-1.5 px-3.5 rounded-lg inline-block mb-6">
              {doctor.experience}
            </p>

            {/* Biography */}
            <div className="space-y-4 text-slate-600 leading-relaxed text-sm mb-8">
              <p>{doctor.biography}</p>
            </div>

            {/* Specialization Bullet Bento */}
            <h3 className="text-base font-bold text-slate-800 tracking-tight mb-4 flex items-center gap-2">
              <Heart className="w-4 h-4 text-medical-600" />
              <span>Core Clinical Focus & Interventions</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {doctor.specializations.map((spec) => (
                <div key={spec} className="flex items-start gap-2.5">
                  <div className="bg-medical-100 p-0.5 rounded-full text-medical-700 mt-0.5 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">{spec}</span>
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
                <div key={award} className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm">
                  <div className="text-amber-500 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 leading-tight">
                    {award}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
