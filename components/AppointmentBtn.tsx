"use client"
import { hero } from '@/data/doctorData';
import { Calendar } from 'lucide-react';
import React from 'react'

export default function AppointmentBtn() {
    const handleScrollToAppointment = (
        e: React.MouseEvent<HTMLAnchorElement>,
      ) => {
        e.preventDefault();
        const targetElement = document.getElementById("contact");
        if (!targetElement) return;
    
          window.scrollTo({
            top: targetElement.offsetTop -100,
            behavior: "smooth",
          });
        
      };
  return (
     <a
                    href="#contact"
                    onClick={handleScrollToAppointment}
                    className="bg-medical-700 hover:bg-medical-800 text-white font-semibold rounded-full py-3 px-8 text-center shadow-md hover:shadow-lg transition duration-200 flex items-center justify-center gap-2 text-sm focus:outline-none focus:ring-2 focus:ring-medical-600 focus:ring-offset-2"
                    aria-label="Schedule an appointment with our specialist"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{hero.ctaBook}</span>
                  </a>
  )
}
