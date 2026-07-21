'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { gallery } from '@/data/doctorData';
import { Images, X, ZoomIn } from 'lucide-react';

const categories = ['All', 'Diagnostics', 'Surgical Care', 'Patient Comfort', 'Hospitality', 'Optics'];

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter images
  const filteredImages = selectedCategory === 'All' 
    ? gallery 
    : gallery.filter(item => item.category === selectedCategory);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? filteredImages.length - 1 : lightboxIndex - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === filteredImages.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  return (
    <section 
      id="gallery" 
      className="py-20 bg-slate-50 relative z-20"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-medical-700 font-semibold text-sm uppercase tracking-wider mb-3">
            <Images className="w-4 h-4 text-medical-600" />
            <span>Ocular Campus Tour</span>
          </div>
          <h2 id="gallery-heading" className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Our State-of-the-Art Private Campus
          </h2>
          <p className="text-slate-500 mt-4 leading-relaxed text-sm">
            Familiarize yourself with our clean-air operation theaters, high-end diagnostics suite, and comfortable recovery lounges.
          </p>
        </div>

        {/* Filter Tabs Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10" role="tablist" aria-label="Gallery categories">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-bold py-2.5 px-5 rounded-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-medical-600 ${
                  isActive 
                    ? 'bg-medical-700 text-white shadow-sm' 
                    : 'bg-white text-slate-600 hover:text-medical-700 hover:bg-slate-100 border border-slate-200/60'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Dynamic Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((item, idx) => (
            <div 
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm hover:shadow-md border border-white cursor-pointer bg-slate-200 animate-fade-in"
              role="button"
              aria-label={`Open photo viewer for ${item.title}`}
            >
              {/* Facility Image */}
              <Image 
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-w-7xl) 35vw, 400px"
                className="object-cover group-hover:scale-104 transition duration-500 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Hover Dark Overlay Content */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6 text-white">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="block text-[9px] font-bold uppercase tracking-widest text-medical-300 mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-sm font-bold tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <div className="bg-white/20 p-2 rounded-full text-white backdrop-blur-sm shadow">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Overlay (Zero-Dependency) */}
        {lightboxIndex !== null && (
          <div 
            className="fixed inset-0 z-50 bg-slate-950/95 flex flex-col justify-between p-6 animate-fade-in"
            role="dialog"
            aria-modal="true"
            aria-label="Campus Facility Photo Viewer"
          >
            {/* Top Bar controls */}
            <div className="flex justify-between items-center text-white">
              <span className="text-xs font-semibold tracking-widest uppercase text-slate-400">
                Facility View ({lightboxIndex + 1} / {filteredImages.length})
              </span>
              <button 
                onClick={() => setLightboxIndex(null)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition focus:outline-none"
                aria-label="Close photo viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Middle Main stage */}
            <div className="flex-grow flex items-center justify-between relative max-w-5xl mx-auto w-full py-4">
              {/* Prev Button */}
              <button 
                onClick={handlePrev}
                className="p-3 rounded-full bg-white/5 hover:bg-white/15 text-white transition font-bold text-lg select-none"
                aria-label="Previous photo"
              >
                &#8592;
              </button>

              {/* Central Frame */}
              <div className="relative w-full h-full max-h-[70vh] aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                <Image 
                  src={filteredImages[lightboxIndex].image}
                  alt={filteredImages[lightboxIndex].title}
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                  unoptimized
                />
              </div>

              {/* Next Button */}
              <button 
                onClick={handleNext}
                className="p-3 rounded-full bg-white/5 hover:bg-white/15 text-white transition font-bold text-lg select-none"
                aria-label="Next photo"
              >
                &#8594;
              </button>
            </div>

            {/* Bottom Title description */}
            <div className="text-center text-white pb-4 max-w-lg mx-auto">
              <span className="block text-[10px] uppercase font-bold text-medical-400 tracking-widest mb-1.5">
                {filteredImages[lightboxIndex].category}
              </span>
              <h3 className="text-base font-bold tracking-tight">
                {filteredImages[lightboxIndex].title}
              </h3>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
