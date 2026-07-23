'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Eye, Phone, Calendar } from 'lucide-react';
import { clinic } from '@/data/doctorData';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
  { label: 'Appointment', href: '#appointment' },
  { label: 'Reviews', href: '#reviews' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Monitor active section
  useEffect(() => {
    const sections = navLinks.map(link => document.querySelector(link.href));
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // check when elements occupy central viewing area
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(sec => {
      if (sec) observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileMenuOpen(false);

      const target = document.getElementById(href.slice(1));
      if (!target) return;

      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: "smooth",
      });

      setActiveSection(target.id);
    };


      useEffect(() => {
    if(mobileMenuOpen){
        document.body.style.overflow = "hidden";
    }else{
        document.body.style.overflow = "auto";
    }
  
    return () => {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen])


  return (
   <>
    <header 
      id="main-navbar"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-3' 
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-medical-600 rounded-lg p-1 group"
            aria-label="Clear Vision Eye Hospital Home"
          >
            <div className="bg-medical-50 p-2 rounded-lg text-medical-700 group-hover:bg-medical-100 transition duration-300">
              <Eye className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-lg font-bold text-slate-900 tracking-tight leading-none">
                Clear Vision
              </span>
              <span className="text-[10px] font-semibold text-medical-700 tracking-widest uppercase block mt-1 leading-none">
                Eye Hospital
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Desktop Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-200 py-2 focus:outline-none focus:ring-2 focus:ring-medical-600 focus:ring-offset-2 rounded px-1 ${
                    isActive 
                      ? 'text-medical-700' 
                      : 'text-slate-600 hover:text-medical-700'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1 right-1 h-0.5 bg-medical-700 rounded" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Call to Actions */}
          <div className="hidden sm:flex items-center gap-3.5">
            <a 
              href={`tel:${clinic.phoneRaw}`}
              className="text-xs font-semibold text-slate-700 hover:text-medical-700 flex items-center gap-1.5 border border-slate-200 rounded-full py-1.5 px-3.5 hover:border-medical-600 transition"
              aria-label={`Call us at ${clinic.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-medical-600" />
              <span>{clinic.phone}</span>
            </a>
            
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="bg-medical-700 hover:bg-medical-800 text-white text-xs font-semibold rounded-full py-2 px-5 shadow-sm hover:shadow transition duration-200 flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-medical-600 focus:ring-offset-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-medical-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-medical-600"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

    
     
    </header>


      {/* Mobile Drawer Navigation */}
      { mobileMenuOpen &&
     ( <div 
        id="mobile-navigation"
        className={` fixed inset-0 z-40 transition-transform duration-300 transform `}
      >
        {/* Backdrop overlay */}
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm" 
          onClick={() => setMobileMenuOpen(false)} 
          aria-hidden="true"
        />

        {/* Drawer container */}
        <nav 
          className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between"
          aria-label="Mobile Navigation"
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <span className="text-sm font-bold text-slate-800 uppercase tracking-widest">
                Menu
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 -mr-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-1.5 mt-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`block py-3 px-4 rounded-xl text-base font-semibold transition-colors ${
                      isActive 
                        ? 'bg-medical-50 text-medical-700' 
                        : 'text-slate-700 hover:bg-slate-50 hover:text-medical-700'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Drawer Footer Contact */}
          <div className="pt-6 border-t border-slate-100">
            <div className="flex flex-col gap-3">
              <a 
                href={`tel:${clinic.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold text-sm transition"
              >
                <Phone className="w-4 h-4 text-medical-600" />
                <span>Call {clinic.phone}</span>
              </a>
              <a 
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-full bg-medical-700 text-white font-semibold text-sm hover:bg-medical-800 transition shadow"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </a>
            </div>
            <p className="text-center text-[11px] text-slate-400 mt-4 font-medium">
              {clinic.address}
            </p>
          </div>
        </nav>
      </div>)}
   </>
  );
}

