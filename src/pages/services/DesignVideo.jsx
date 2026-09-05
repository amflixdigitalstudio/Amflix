import react from "react";
import DesignvideoHero from "../../components/Sections/DesignvideoHero";
import DesignvideoPricing from "../../components/Sections/DesignvideoPricing";
import DesignVideoFAQ from "../../components/Sections/DesignVideoFAQ";
import FAQCTA from "../../components/Sections/FAQCTA";

export default function DesignVideo() {
  return (
    <div>
      <DesignvideoHero />
      <DesignvideoPricing />
      <DesignVideoFAQ />
      <FAQCTA />
    </div>
  );
}