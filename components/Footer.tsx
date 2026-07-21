'use client';

import React from 'react';
import { clinic, social } from '@/data/doctorData';
import { Eye, Phone, Mail, MapPin, Heart, ChevronRight, Scale } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleFooterLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
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
    <footer 
      id="main-footer"
      className="bg-navy-950 text-slate-300 pt-16 pb-8 border-t border-slate-800 relative z-20"
      aria-label="Site Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand details (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="bg-medical-700/20 p-2.5 rounded-xl text-medical-500 border border-medical-800">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-base font-bold text-white tracking-tight leading-none">
                  Clear Vision
                </span>
                <span className="text-[9px] font-bold text-medical-400 tracking-widest uppercase block mt-1 leading-none">
                  Eye Hospital
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Clear Vision Eye Hospital is committed to setting the premium benchmark in private eye care. Under senior surgeon Dr. Arjun Sharma, we combine fifteen years of micro-surgical mastery with world-class laser diagnostic technologies.
            </p>

            <p className="text-[10px] text-slate-500 font-medium leading-relaxed">
              *All medical and surgical techniques discussed here are planned individually after physical corneal checks.
            </p>
          </div>

          {/* Col 2: Quick Links Directory (2.5 cols) */}
          <div className="lg:col-span-2.5 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest">
              Hospital Directory
            </h3>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-400">
              <li>
                <a href="#home" onClick={(e) => handleFooterLinkClick(e, '#home')} className="hover:text-medical-400 flex items-center gap-1 transition">
                  <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                  <span>Home Page</span>
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleFooterLinkClick(e, '#about')} className="hover:text-medical-400 flex items-center gap-1 transition">
                  <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                  <span>Doctor Biography</span>
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleFooterLinkClick(e, '#services')} className="hover:text-medical-400 flex items-center gap-1 transition">
                  <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                  <span>Our Services</span>
                </a>
              </li>
              <li>
                <a href="#technology" onClick={(e) => handleFooterLinkClick(e, '#technology')} className="hover:text-medical-400 flex items-center gap-1 transition">
                  <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                  <span>Technology Lab</span>
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleFooterLinkClick(e, '#contact')} className="hover:text-medical-400 flex items-center gap-1 transition">
                  <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                  <span>Contact Info</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Patient Resources (2.5 cols) */}
          <div className="lg:col-span-2.5 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest">
              Patient Resources
            </h3>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-400">
              <li>
                <a href="#faq" onClick={(e) => handleFooterLinkClick(e, '#faq')} className="hover:text-medical-400 flex items-center gap-1 transition">
                  <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                  <span>Help Desk & FAQs</span>
                </a>
              </li>
              <li>
                <a href="#appointment" onClick={(e) => handleFooterLinkClick(e, '#appointment')} className="hover:text-medical-400 flex items-center gap-1 transition">
                  <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                  <span>Book Outpatient Slot</span>
                </a>
              </li>
              <li>
                <a href="#why-choose-us" onClick={(e) => handleFooterLinkClick(e, '#why-choose-us')} className="hover:text-medical-400 flex items-center gap-1 transition">
                  <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                  <span>Insurance & Cashless</span>
                </a>
              </li>
              <li>
                <a href="#reviews" onClick={(e) => handleFooterLinkClick(e, '#reviews')} className="hover:text-medical-400 flex items-center gap-1 transition">
                  <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                  <span>Patient Testimonials</span>
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleFooterLinkClick(e, '#gallery')} className="hover:text-medical-400 flex items-center gap-1 transition">
                  <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                  <span>Hospital Campus Tour</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Primary Support details (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest">
              Direct Contact
            </h3>
            <ul className="space-y-3.5 text-xs font-medium text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-medical-500 shrink-0 mt-0.5" />
                <span>{clinic.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-medical-500 shrink-0" />
                <a href={`tel:${clinic.phoneRaw}`} className="hover:text-white transition">
                  {clinic.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-medical-500 shrink-0" />
                <a href={`mailto:${clinic.email}`} className="hover:text-white transition">
                  {clinic.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & disclaimers row */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-[11px] font-semibold">
          <div className="flex items-center gap-1">
            <span>&copy; {currentYear} {clinic.name}. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-400 bg-white/5 border border-white/5 rounded-full py-1 px-3.5 max-w-lg text-center md:text-left">
            <Scale className="w-3.5 h-3.5 text-medical-600 shrink-0" />
            <span>
              Disclaimer: General medical information only. Consult an ophthalmologist physically for diagnoses.
            </span>
          </div>

          <div className="flex gap-4">
            <a href="#appointment" onClick={(e) => handleFooterLinkClick(e, '#appointment')} className="hover:underline">Privacy Policy</a>
            <span>•</span>
            <a href="#appointment" onClick={(e) => handleFooterLinkClick(e, '#appointment')} className="hover:underline">Patient Rights</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
