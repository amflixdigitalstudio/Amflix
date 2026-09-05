import React, { useEffect } from 'react';
import BrandingHero from '../../components/Sections/BrandingHero';
import BrandingPackages from '../../components/Sections/BrandingPackages';
import BrandingFAQ from '../../components/Sections/BrandingFAQ';
import FAQCTA from '../../components/Sections/FAQCTA';

export default function Branding() {
  useEffect(() => {
    document.title = "Complete Branding Services | AMFlix";
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#080808]">
      <BrandingHero />
      <BrandingPackages />
      <BrandingFAQ />
      <FAQCTA />
      <br></br>
    </main>
  );
}