import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import './DesignVideoFAQ.css';

export default function DesignVideoFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const creativeFaqs = [
    {
      q: 'What design services does AMFlix provide?',
      a: 'AMFlix provides social media creatives, advertisements, posters, carousels, banners, presentations, marketing collateral, campaign designs and other graphic design services.'
    },
    {
      q: 'Does AMFlix provide video editing?',
      a: 'Yes. AMFlix provides video editing for Reels, social media videos, advertisements, promotional videos and brand content.'
    },
    {
      q: 'Can you create Instagram Reels?',
      a: 'Yes. Reels can be created and edited according to your brand style, content strategy and selected package.'
    },
    {
      q: 'Do you create social media post designs?',
      a: 'Yes. AMFlix creates branded social media posts, carousels, promotional creatives and advertising designs.'
    },
    {
      q: 'Do you provide motion graphics?',
      a: 'Yes. Motion graphics can be included in selected creative packages or quoted separately.'
    },
    {
      q: 'Can you edit videos provided by the client?',
      a: 'Yes. You can provide your footage and AMFlix can edit it according to the agreed creative direction.'
    },
    {
      q: 'Do you provide ongoing design and video support?',
      a: 'Yes. Monthly and yearly creative packages are available for businesses requiring regular content production.'
    },
    {
      q: 'How much do design and video editing services cost?',
      a: 'AMFlix creative services start from ₹10,000 per month.'
    },
    {
      q: 'How many designs and videos are included?',
      a: 'The number of designs and videos depends on the selected package.'
    },
    {
      q: 'Can you create advertising creatives?',
      a: 'Yes. AMFlix can create static, carousel, video and other advertising creatives for digital campaigns.'
    },
    {
      q: 'Can you follow our existing brand guidelines?',
      a: 'Yes. Creative content can be designed according to your existing brand identity and guidelines.'
    },
    {
      q: 'Can I request a custom creative package?',
      a: 'Yes. Custom packages can be created for businesses requiring specific volumes, formats or creative requirements.'
    }
  ];

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="dv-faq-wrapper" aria-label="Design and Video Editing Frequently Asked Questions">
      <div className="dv-faq-glow" aria-hidden="true" />

      <div className="dv-faq-container">
        
        {/* Header */}
        <div className="dv-faq-header">
          <div className="dv-faq-badge">
            <HelpCircle className="w-3.5 h-3.5 text-terracotta" />
            <span>Support &amp; Clarity</span>
          </div>

          <span className="dv-faq-subtag">Design &amp; Video Editing — FAQ</span>
          <h2 className="dv-faq-title">Frequently Asked Questions</h2>
        </div>

        {/* Accordion Stack */}
        <div className="dv-faq-stack">
          {creativeFaqs.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx} 
                className={`dv-faq-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="dv-faq-q-btn"
                  onClick={() => handleToggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="dv-faq-q-text">
                    <span className="dv-faq-q-num">{idx + 1}.</span> {item.q}
                  </span>
                  <div className="dv-faq-icon-bubble">
                    <ChevronDown className={`dv-faq-chevron ${isOpen ? 'rotate' : ''}`} />
                  </div>
                </button>

                {isOpen && (
                  <div className="dv-faq-answer">
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