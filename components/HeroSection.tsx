'use client';

import React from 'react';
import Image from 'next/image';
import { Calendar, Phone, Award, ShieldAlert } from 'lucide-react';
import { hero, clinic } from '@/data/doctorData';

export default function HeroSection() {
  const handleScrollToAppointment = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById('appointment');
    if (targetElement) {
      const headerOffset = 100;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative bg-gradient-to-b from-medical-50/50 via-white to-slate-50/20 pt-8 pb-16 md:py-20 overflow-hidden"
      aria-label="Welcome and Overview"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex gap-2 lg:gap-6 items-center">
        {/* <div className="flex gap-12 bg-red-700 lg:gap-16 items-center"> */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-red-700 lg:gap-16 items-center"> */}
          
          {/* Hero Left Content Column (7 cols on lg) */}
          <div className=" flex flex-col justify-center animate-reveal">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-1.5 self-start bg-medical-100/70 border border-medical-200/80 rounded-full py-1 px-3 text-medical-800 text-xs font-semibold uppercase tracking-wider mb-6">
              <Award className="w-3.5 h-3.5" />
              <span>{hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              {hero.title}
            </h1>

            {/* Subheading text */}
            <p className="text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
              {hero.subtitle}
            </p>

            {/* Senior Doctor Mini Profile Panel */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm mb-8 max-w-lg">
              <div className="bg-medical-50 p-2.5 rounded-full text-medical-700 self-start">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-800 flex items-center gap-2">
                  {hero.doctorName}
                  <span className="text-xs font-semibold bg-medical-50 text-medical-700 py-0.5 px-2 rounded-md">
                    {hero.doctorQualifications}
                  </span>
                </h2>
                <p className="text-xs font-medium text-slate-500 mt-1">
                  {hero.doctorTitle}
                </p>
                <p className="text-xs text-medical-600 font-semibold mt-1 flex items-center gap-1">
                  <span>Specialist in Micro-incision Phaco & Custom IOLs</span>
                </p>
              </div>
            </div>

            {/* Call To Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#appointment"
                onClick={handleScrollToAppointment}
                className="bg-medical-700 hover:bg-medical-800 text-white font-semibold rounded-full py-3 px-8 text-center shadow-md hover:shadow-lg transition duration-200 flex items-center justify-center gap-2 text-sm focus:outline-none focus:ring-2 focus:ring-medical-600 focus:ring-offset-2"
                aria-label="Schedule an appointment with our specialist"
              >
                <Calendar className="w-4 h-4" />
                <span>{hero.ctaBook}</span>
              </a>
              
              <a
                href={clinic.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full py-3 px-8 text-center shadow-sm hover:shadow-md transition duration-200 flex items-center justify-center gap-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
                aria-label="Direct message on WhatsApp support"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.588 1.971 14.111.945 11.48.945 6.05.945 1.625 5.315 1.62 10.744c-.001 1.758.465 3.475 1.348 4.981l-.993 3.626 3.733-.967c1.472.802 3.109 1.222 4.673 1.222z"/>
                </svg>
                <span>{hero.ctaWhatsapp}</span>
              </a>

              <a
                href={`tel:${clinic.phoneRaw}`}
                className="bg-white border border-slate-200 hover:border-medical-600 text-slate-700 hover:text-medical-700 font-semibold rounded-full py-3 px-8 text-center shadow-sm transition duration-200 flex items-center justify-center gap-2 text-sm focus:outline-none focus:ring-2 focus:ring-medical-600 focus:ring-offset-2"
                aria-label={`Call the hospital at ${clinic.phone}`}
              >
                <Phone className="w-4 h-4 text-medical-600" />
                <span>{hero.ctaCall}</span>
              </a>
            </div>

            {/* Subtle disclaimer */}
            <p className="text-[11px] text-slate-400 font-medium mt-6 flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-medical-600 shrink-0" />
              <span>{hero.emergencyNotice}</span>
            </p>
          </div>

          {/* Hero Right Image Column (5 cols on lg) */}
          {/* <div className="lg:col-span-5 bg-green-600 relative w-full flex justify-center lg:justify-end animate-reveal-slow"> */}
          <div className="  relative w-full flex justify-center lg:justify-end animate-reveal-slow">
            
            {/* Visual Frame */}
            <div className="relative w-[85%] max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-white/60 bg-slate-100">
              <Image
                src={hero.doctorImage}
                alt={`Chief consultant ophthalmologist ${hero.doctorName}`}
                fill
                priority
                sizes="(max-w-7xl) 40vw, 450px"
                className="object-cover object-top hover:scale-102 transition duration-500 ease-out"
              />
              
              {/* Doctor Name overlay for readability/aesthetics */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-6 text-white">
                <span className="block text-xs font-semibold text-medical-300 uppercase tracking-widest mb-1">
                  At the Helm of Excellence
                </span>
                <span className="block text-xl font-bold tracking-tight">
                  {hero.doctorName}
                </span>
                <span className="block text-xs text-slate-200 mt-1">
                  15+ Years and 8,500+ Cataract Microsurgeries Completed
                </span>
              </div>
            </div>

            {/* Decorative background shape */}
            {/* <div 
              className="absolute -z-10 -right-8 -bottom-8 w-64 h-64 bg-medical-50 rounded-full blur-3xl opacity-60"
              aria-hidden="true"
            /> */}
            
          </div>

        </div>
      </div>
    </section>
  );
}
