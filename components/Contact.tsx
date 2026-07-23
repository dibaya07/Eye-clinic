'use client';

import React from 'react';
import { clinic } from '@/data/doctorData';
import { MapPin, Phone, Clock, AlertCircle, ExternalLink } from 'lucide-react';
import SocialLinks from './SocialLinks';

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="py-20 bg-white relative z-20"
      aria-labelledby="clinic-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-medical-700 font-semibold text-sm uppercase tracking-wider mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-medical-600" />
            <span>Facility Access</span>
          </div>
          <h2 id="clinic-heading" className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Clinic Timings, Location & Contact Details
          </h2>
          <p className="text-slate-500 mt-4 leading-relaxed text-sm">
            Our premium private ophthalmic facility is centrally located in the heart of the city, featuring advanced diagnostic spaces and wheelchair-friendly entrances.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Timings and Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
            
            <div className="space-y-6">
              
              {/* Timing info card */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Clock className="w-4.5 h-4.5 text-medical-600" />
                  <span>Outpatient Consulting Hours</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-slate-200/50 text-xs font-semibold">
                    <span className="text-slate-500">Monday–Saturday</span>
                    <span className="text-slate-900">{clinic.timings.split(',')[1] || "9:00 AM – 7:00 PM"}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 text-xs font-semibold">
                    <span className="text-slate-500">Sunday</span>
                    <span className="text-rose-600 uppercase font-bold text-[10px] tracking-wider bg-rose-50 py-0.5 px-2.5 rounded">
                      Closed
                    </span>
                  </div>
                </div>
              </div>

              {/* Address card */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <MapPin className="w-4.5 h-4.5 text-medical-600" />
                  <span>Physical Location</span>
                </h3>
                <p className="text-xs text-slate-600 font-semibold leading-relaxed pl-6">
                  {clinic.address}
                </p>
              </div>

              {/* Direct contacts list */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Phone className="w-4.5 h-4.5 text-medical-600" />
                  <span>Reach Us Directly</span>
                </h3>
                <ul className="space-y-3 pl-6 text-xs font-semibold text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="text-slate-400">Phone:</span>
                    <a href={`tel:${clinic.phoneRaw}`} className="text-medical-700 hover:underline">
                      {clinic.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-slate-400">Email:</span>
                    <a href={`mailto:${clinic.email}`} className="text-medical-700 hover:underline">
                      {clinic.email}
                    </a>
                  </li>
                </ul>
              </div>
              {/* Social Links */}
              <SocialLinks/>

            </div>

            {/* Emergency Hotline notice banner */}
            <div className="bg-medical-700/5 border border-medical-600/20 p-4 rounded-2xl flex gap-3.5 items-start mt-6">
              <AlertCircle className="w-5 h-5 text-medical-700 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-950 uppercase tracking-wide">
                  Emergency Eye Care
                </h4>
                <p className="text-slate-500 text-[11px] mt-1 leading-relaxed">
                  {clinic.sundayTimings}. If you have suffered corneal trauma, chemical injuries, or sudden vision loss, dial our 24/7 helpline immediately.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Google Maps (7 cols) */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-slate-100 shadow-sm min-h-[350px] bg-slate-100">
            {/* Map Iframe */}
            <iframe 
              src={clinic.mapEmbedUrl}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${clinic.name} - Google Maps Location`}
            />
            
            {/* Direct directions trigger */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-slate-100 shadow-lg flex items-center justify-between text-xs font-semibold text-slate-800">
              <div>
                <p className="font-bold text-slate-900 text-xs tracking-tight">{clinic.name}</p>
                <p className="text-[10px] text-slate-400 font-medium mt-0.5">123 Medical Plaza, City Center, India</p>
              </div>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-medical-700 hover:bg-medical-800 text-white py-1.5 px-3 rounded-lg text-[10px] font-bold flex items-center gap-1 shadow-sm transition"
              >
                <span>Navigate</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}



