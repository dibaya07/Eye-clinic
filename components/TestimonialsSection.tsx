'use client';

import React from 'react';
import { testimonials } from '@/data/doctorData';
import { Star, Quote, Heart } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section 
      id="reviews" 
      className="py-20 bg-white relative z-20"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-medical-700 font-semibold text-sm uppercase tracking-wider mb-3">
            <Heart className="w-4 h-4 text-medical-600 animate-pulse" />
            <span>Patient Gratitude</span>
          </div>
          <h2 id="reviews-heading" className="text-2xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Regaining Sight: In Our Patients&apos; Own Words
          </h2>
          <p className="text-slate-500 mt-4 leading-relaxed text-xs sm:text-sm">
            Read transparent, real-world visual recovery stories from retired officials, corporate professionals, and medical experts.
          </p>
        </div>

        {/* Testimonials Grid (3 columns on desktop, responsive layout) */}
        <div className="flex overflow-x-scroll hide-scrollbar gap-8">
          {testimonials.map((test) => (
            <div 
              key={test.id} 
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between relative group "
            >
              {/* Content area */}
              <div className='w-[65vw] sm:w-[35vw] lg:w-[25vw]'>
                {/* Floating Quotation icon */}
                <div className="absolute top-6 right-6 text-slate-200 group-hover:text-medical-100 transition duration-300">
                  <Quote className="w-8 h-8 rotate-180 fill-current" />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-5" aria-label="Rating: 5 Stars">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Ocular therapy tagged badge */}
                <span className="inline-block text-[10px] font-bold uppercase bg-medical-50 text-medical-700 py-1 px-3 rounded-md mb-4 tracking-wider">
                  {test.condition}
                </span>

                {/* Review Text */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal italic">
                  &quot;{test.review}&quot;
                </p>
              </div>

              {/* Author Footer info */}
              <div className="border-t border-slate-200/50 pt-5 mt-auto flex items-center gap-3">
                <div className="bg-medical-100/70 text-medical-800 font-bold text-xs w-9 h-9 rounded-full flex items-center justify-center shrink-0 shadow-inner">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    {test.name}
                  </h4>
                  <p className="text-[10px] text-slate-400 font-medium mt-0.5">
                    {test.location}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Secondary clinic rating callout */}
        <div className="mt-16 text-center">
          <p className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-widest flex flex-wrap sm:flex-nowrap items-center justify-center gap-2.5">
            <span>Overall Verified Quality Score:</span>
            <span className="text-slate-800 font-bold">4.9 / 5.0</span>
            <span className="flex text-amber-400 gap-0.5">
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}
