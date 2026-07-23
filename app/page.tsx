
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustStats from "@/components/TrustStats";
import AboutDoctor from "@/components/AboutDoctor";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
// import ClinicInfo from "@/components/ClinicInfo";
// import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Contact from "@/components/Contact";
import Appointment from "@/components/Appointment";

export default function Home() {
  
  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      <AnnouncementBar />
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <TrustStats />
        <AboutDoctor />
        <GallerySection />
        {/* <ClinicInfo /> */}
        <Contact/>
        <Appointment/>
        {/* <ContactSection /> */}
        <TestimonialsSection />
      </main>
      <Footer />

      <FloatingActions />
    </div>
  );
}
