import React, { useEffect } from 'react';
import PricingHero from '../../components/Sections/PricingHero';
import OurServices from '../../components/Sections/OurServices';
import PricingSections from '../../components/Sections/PricingSections';
import PricingFAQ from '../../components/Sections/PricingFAQ';

export default function Pricing() {
  return (
    <main>
      <PricingHero />
      <PricingSections />
      <OurServices />
      <PricingFAQ />
    </main>
  );
}
