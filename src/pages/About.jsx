import React from 'react';
import AboutHero from '../components/Sections/AboutHero';
import MissionVision from '../components/Sections/MissionVision';
import WhyDifferent from '../components/Sections/WhyDifferent';
import AboutFAQ from '../components/Sections/AboutFAQ';

export default function About() {
  return (
    <div className="w-full">
      <AboutHero />
      <MissionVision />
      <WhyDifferent />
      <AboutFAQ />
    </div>
  );
}