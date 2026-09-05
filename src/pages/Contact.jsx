import React from "react";
import ContactHero from "../components/Sections/ContactHero";
import ContactSection from "../components/Sections/ContactSection";
import ContactChannels from "../components/Sections/ContactChannels";

export default function Contact() {
  return (
    <div>
      <ContactHero />
      <ContactSection />
      <ContactChannels />
    </div>
  );
}