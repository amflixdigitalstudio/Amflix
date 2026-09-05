import react from "react";
import DigitalMarketingHero from "../../components/Sections/DigitalMarketingHero";
import DigitalMarketingPricing from "../../components/Sections/DigitalMarketingPricing";
import DigitalMarketingFAQ from "../../components/Sections/DigitalMarketingFAQ";
import FAQCTA from "../../components/Sections/FAQCTA";

export default function DigitalMarketing() {
  return (
    <div>
      <DigitalMarketingHero />
      <DigitalMarketingPricing />
      <DigitalMarketingFAQ />
      <FAQCTA />
    </div>
  );
}