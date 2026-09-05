import react from "react";
import WebHero from "../../components/Sections/WebHero";
import WebPricing from "../../components/Sections/WebPricing";
import WebsiteDevelopmentFAQ from "../../components/Sections/WebsiteDevelopmentFAQ";
import FAQCTA from "../../components/Sections/FAQCTA";

export default function WebsiteDev() {
  return (
    <div>
      <WebHero />
      <WebPricing />
      <WebsiteDevelopmentFAQ />
      <FAQCTA />
    </div>
  );
}