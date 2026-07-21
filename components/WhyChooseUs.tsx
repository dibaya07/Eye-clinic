'use client';

import React from 'react';
import { ShieldCheck, Heart, Sparkles, CheckSquare, Zap, CreditCard } from 'lucide-react';

const reasons = [
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Uncompromising Surgical Safety",
    description: "Our micro-surgical theaters operate at class-100 sterile cleanliness with a historic zero-infection safety index."
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Direct Specialist Care",
    description: "Every diagnostics audit, custom lens calculation, and surgical procedure is done directly by Dr. Arjun Sharma, never delegated."
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "World-Class Technology",
    description: "Equipped with state-of-the-art German and Swiss diagnostics (OCT scan, fundus profile, and auto biometry) for ultimate precision."
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "10-Minute Stitchless Procedures",
    description: "Advanced phacoemulsification offers painless, injection-free, stitchless cataract surgeries with ultra-rapid recovery."
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    title: "Empaneled Cashless Insurance",
    description: "Full insurance / TPA desk support handles authorization and clearance paperwork so your medical journey is completely hassle-free."
  },
  {
    icon: <CheckSquare className="w-5 h-5" />,
    title: "Transparent, Honest Pricing",
    description: "No surprise packages or hidden costs. Standardized ₹500 consultations, with honest recommendations for diagnostic testing."
  }
];

export default function WhyChooseUs() {
  return (
    <section 
      id="why-choose-us" 
      className="py-20 bg-white relative z-20"
      aria-labelledby="why-choose-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-medical-700 font-semibold text-sm uppercase tracking-wider mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-medical-600" />
            <span>Clinical Integrity</span>
          </div>
          <h2 id="why-choose-heading" className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Setting the Premium Standard in Private Eye Care
          </h2>
          <p className="text-slate-500 mt-4 leading-relaxed text-sm">
            We focus on absolute trust, top-tier medical hygiene, and outstanding surgical outcomes. Here is why discerning patients choose us to restore their visual clarity.
          </p>
        </div>

        {/* Feature Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={reason.title} 
              className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition duration-300 group flex gap-4"
            >
              {/* Icon Frame */}
              <div className="bg-white p-3 rounded-xl text-medical-700 shadow-sm border border-slate-100 group-hover:bg-medical-700 group-hover:text-white transition duration-300 h-11 w-11 flex items-center justify-center shrink-0">
                {reason.icon}
              </div>
              
              {/* Text */}
              <div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight mb-2">
                  {reason.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed font-normal">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight trust banner */}
        <div className="mt-16 bg-gradient-to-r from-medical-50 via-medical-100/50 to-white border border-medical-200/40 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h4 className="text-base font-bold text-slate-900 tracking-tight">
              Looking for direct surgical advice?
            </h4>
            <p className="text-slate-500 text-xs mt-1 leading-relaxed">
              Dr. Arjun Sharma reviews complex cases personally. Schedule a consultation or send diagnostic reports directly on WhatsApp for immediate guidance.
            </p>
          </div>
          <div className="flex gap-3 shrink-0 w-full md:w-auto">
            <a 
              href="#appointment" 
              className="bg-medical-700 hover:bg-medical-800 text-white font-semibold text-xs py-2.5 px-6 rounded-full shadow-sm hover:shadow text-center w-full md:w-auto"
            >
              Request Call Back
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
