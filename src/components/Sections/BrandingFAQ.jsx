import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import './BrandingFAQ.css';

export default function BrandingFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const brandingFaqs = [
    {
      q: 'What branding services does AMFlix provide?',
      a: 'AMFlix provides brand strategy, brand positioning, logo design, visual identity, colour palettes, typography, brand guidelines, social media branding and marketing collateral.'
    },
    {
      q: 'Why does my business need professional branding?',
      a: 'Professional branding helps your business create a consistent identity, build recognition and communicate clearly with your target audience.'
    },
    {
      q: 'Does AMFlix create complete brand identities?',
      a: 'Yes. AMFlix can create a complete visual identity covering the logo, colours, typography, brand guidelines and supporting brand assets.'
    },
    {
      q: 'Does AMFlix provide logo design separately?',
      a: 'Yes. Logo design can be provided as an individual service or as part of a complete branding package.'
    },
    {
      q: 'Can AMFlix rebrand an existing business?',
      a: 'Yes. AMFlix can develop a new brand direction and visual identity while considering the existing brand\'s strengths and market position.'
    },
    {
      q: 'What is included in a branding package?',
      a: 'The deliverables depend on the selected package. Packages can include strategy, logo design, visual identity, brand guidelines, social media branding and marketing collateral.'
    },
    {
      q: 'How much does branding cost?',
      a: 'AMFlix branding services start from ₹20,000. Final pricing depends on the scope and deliverables.'
    },
    {
      q: 'How long does a branding project take?',
      a: 'The timeline depends on the scope, number of deliverables, feedback and approval process. A project timeline will be provided before work begins.'
    },
    {
      q: 'How many logo concepts will I receive?',
      a: 'The number of concepts depends on the selected branding package.'
    },
    {
      q: 'Can you create brand guidelines?',
      a: 'Yes. Brand guidelines can document your logo usage, colours, typography, visual style and other brand rules.'
    },
    {
      q: 'Can you create social media branding?',
      a: 'Yes. AMFlix can create social media profile assets and branded templates for consistent communication.'
    },
    {
      q: 'Can I request a custom branding package?',
      a: 'Yes. Custom branding solutions are available for businesses with specific requirements.'
    }
  ];

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="b-faq-wrapper" aria-label="Branding Services Frequently Asked Questions">
      <div className="b-faq-glow" aria-hidden="true" />

      <div className="b-faq-container">
        
        {/* Section Header */}
        <div className="b-faq-header">
          <div className="b-faq-badge">
            <HelpCircle className="w-3.5 h-3.5 text-terracotta" />
            <span>Support &amp; Clarity</span>
          </div>

          <span className="b-faq-subtag">Branding Services — FAQ</span>
          <h2 className="b-faq-title">Frequently Asked Questions</h2>
        </div>

        {/* Accordion Stack */}
        <div className="b-faq-stack">
          {brandingFaqs.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx} 
                className={`b-faq-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="b-faq-q-btn"
                  onClick={() => handleToggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="b-faq-q-text">
                    <span className="b-faq-q-num">{idx + 1}.</span> {item.q}
                  </span>
                  <div className="b-faq-icon-bubble">
                    <ChevronDown className={`b-faq-chevron ${isOpen ? 'rotate' : ''}`} />
                  </div>
                </button>

                {isOpen && (
                  <div className="b-faq-answer">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}