import React from 'react';
import HeroSection from '../components/sections/HeroSection.jsx';
import ServicesSection from '../components/sections/ServicesSection.jsx';
import WhyAMFlix from '../components/sections/WhyAMFlix.jsx';
import ContactSection from '../components/sections/ContactSection.jsx';
import HomeFAQ from '../components/sections/HomeFAQ.jsx';

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