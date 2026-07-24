
import React from "react";
import Image from "next/image";
import { Phone, Award, ShieldAlert, MessageCircle } from "lucide-react";
import { hero, clinic } from "@/data/doctorData";
import AppointmentBtn from "./AppointmentBtn";

export default function HeroSection() {

  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-medical-50/50 via-white to-slate-50/20 pt-8 pb-16 md:py-20 overflow-hidden"
      aria-label="Welcome and Overview"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-2 lg:gap-6 items-center">
          {/* Hero Left Content Column (7 cols on lg) */}
          <div className=" flex flex-col justify-center animate-reveal">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-1.5 self-start bg-medical-100/70 border border-medical-200/80 rounded-full py-1 px-3 text-medical-800 text-[10px] lg:text-xs font-semibold uppercase tracking-wider mb-6">
              <Award className="w-3.5 h-3.5" />
              <span>{hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              {hero.title}
            </h1>

            {/* Subheading text */} 
            <p className="text-xs sm:text-[15px] lg:text-base text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
              {hero.subtitle}
            </p>

            {/* Senior Doctor Mini Profile Panel */}
            <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm mb-8 max-w-lg">
              <div className="bg-medical-50 p-2.5 rounded-full text-medical-700 self-center sm:self-start">
                <Award className="w-6 h-6" />
              </div>
              <div >
                <h2 className="text-base font-bold text-slate-800 flex flex-col sm:flex-row items-center gap-0.5 sm:gap-2">
                  {hero.doctorName}
                  <span className="text-[11px] sm:text-xs font-semibold bg-medical-50 text-medical-700 py-0.5 px-2 rounded-md">
                    {hero.doctorQualifications}
                  </span>
                </h2>
                <p className="text-[10px] sm:text-xs font-medium text-slate-500 mt-1">
                  {hero.doctorTitle}
                </p>
                <p className="text-[10px] sm:text-xs text-medical-600 font-semibold mt-1 flex items-center gap-1">
                  <span>Specialist in Micro-incision Phaco & Custom IOLs</span>
                </p>
              </div>
            </div>

            {/* Call To Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <AppointmentBtn/>

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
          <div className="  relative w-full flex justify-center lg:justify-end animate-reveal-slow">
            {/* Visual Frame */}
            <div className="relative w-[85%] max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-white/60 bg-slate-100">
              <Image
                src={'/Doktor.jpeg'}
                alt={`Chief consultant ophthalmologist ${hero.doctorName}`}
                fill
                // fetchPriority="high"
                priority
                sizes="(max-w-7xl) 40vw, 450px"
                className="object-cover object-top hover:scale-102 transition duration-500 ease-out"
              />

              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-6 text-white">
                <span className="block text-base lg:text-xl font-bold tracking-tight">
                  {hero.doctorName}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
