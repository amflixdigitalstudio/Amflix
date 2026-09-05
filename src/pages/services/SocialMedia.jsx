import React from "react";
import SMMHero from "../../components/Sections/SMMHero";
import SMMPackages from "../../components/Sections/SMMPackages";
import SMMFAQ from "../../components/Sections/SMMFAQ";
import FAQCTA from "../../components/Sections/FAQCTA";

export default function SocialMedia() {
  return (
    <div>
      <SMMHero />
      <SMMPackages />
      <SMMFAQ />
      <FAQCTA />
    </div>
  );
}