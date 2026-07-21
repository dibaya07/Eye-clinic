import React from 'react';

// Import All Ordered Layout Sections
import AnnouncementBar from '@/components/AnnouncementBar';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustStats from '@/components/TrustStats';
import AboutDoctor from '@/components/AboutDoctor';
import WhyChooseUs from '@/components/WhyChooseUs';
import ServicesSection from '@/components/ServicesSection';
import ConditionsSection from '@/components/ConditionsSection';
import TreatmentProcess from '@/components/TreatmentProcess';
import EquipmentSection from '@/components/EquipmentSection';
import FAQSection from '@/components/FAQSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import GallerySection from '@/components/GallerySection';
import ClinicInfo from '@/components/ClinicInfo';
import AppointmentCTA from '@/components/AppointmentCTA';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Sticky Navigation Bar */}
      <Navbar />

      <main className="flex-grow">
        
        {/* 3. Hero Section */}
        <HeroSection />

        {/* 4. Animated Trust Statistics */}
        <TrustStats />

        {/* 5. About the Doctor */}
        <AboutDoctor />

        {/* 6. Why Choose Us */}
        <WhyChooseUs />

        {/* 7. Services Section */}
        <ServicesSection />

        {/* 8. Conditions We Treat */}
        <ConditionsSection />

        {/* 9. Our Treatment Process */}
        <TreatmentProcess />

        {/* 10. Advanced Technology & Equipment */}
        <EquipmentSection />

        {/* 11. Frequently Asked Questions */}
        <FAQSection />

        {/* 12. Patient Testimonials */}
        <TestimonialsSection />

        {/* 13. Hospital Gallery */}
        <GallerySection />

        {/* 14 & 15. Clinic Information & Embedded Google Maps */}
        <ClinicInfo />

        {/* 16. Appointment Call-to-Action Section */}
        <AppointmentCTA />

        {/* 17. Contact Section */}
        <ContactSection />

      </main>

      {/* 18. Footer */}
      <Footer />

      {/* Interactive Floaters (WhatsApp, Mobile Call & Back-to-Top) */}
      <FloatingActions />

    </div>
  );
}
