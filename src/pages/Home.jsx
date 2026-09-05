import React from 'react';
import HeroSection from "../components/Sections/HeroSection.jsx";
import ServicesSection from "../components/Sections/ServicesSection.jsx";
import WhyAMFlix from "../components/Sections/WhyAMFlix.jsx";
import ContactSection from "../components/Sections/ContactSection.jsx";
import HomeFAQ from "../components/Sections/HomeFAQ.jsx";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <ServicesSection />
      <WhyAMFlix/>
      <ContactSection/>
      <HomeFAQ/>
    </div>
  );
}