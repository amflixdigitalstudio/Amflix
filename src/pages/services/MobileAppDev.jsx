import react from "react";
import AppHero from "../../components/Sections/AppHero";
import AppPricing from "../../components/Sections/AppPricing";
import AppDevelopmentFAQ from "../../components/Sections/AppDevelopmentFAQ";
import FAQCTA from "../../components/Sections/FAQCTA";

export default function MobileAppDev() {
  return (
    <div>
      <AppHero />
      <AppPricing />
      <AppDevelopmentFAQ />
      <FAQCTA />
    </div>
  );
}