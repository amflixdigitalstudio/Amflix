import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import './SMMFAQ.css';

export default function SMMFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const smmFaqs = [
    {
      q: 'What does social media management include?',
      a: 'Depending on your package, AMFlix can handle strategy, content planning, creative design, Reels, Stories, captions, publishing, community management and performance reporting.'
    },
    {
      q: 'Which social media platforms do you manage?',
      a: 'Platform selection depends on your business and target audience. Services can include Instagram, Facebook, LinkedIn and other relevant platforms.'
    },
    {
      q: 'Does AMFlix create social media content?',
      a: 'Yes. Content creation can include posts, carousels, Stories, Reels and other creative formats depending on the package.'
    },
    {
      q: 'Do you manage Instagram accounts?',
      a: 'Yes. AMFlix provides Instagram management including content planning, creative content and account management based on the selected package.'
    },
    {
      q: 'Does social media management include Reels?',
      a: 'Yes. Reels are included in selected packages.'
    },
    {
      q: 'Do you write captions?',
      a: 'Yes. Caption writing and content copy can be included depending on the package.'
    },
    {
      q: 'Do you provide hashtag and keyword research?',
      a: 'Yes. Hashtag and keyword research can be incorporated into the content strategy.'
    },
    {
      q: 'Do you manage comments and messages?',
      a: 'Community management can be included in selected packages.'
    },
    {
      q: 'How much does social media management cost?',
      a: 'AMFlix social media management starts from ₹20,000 per month.'
    },
    {
      q: 'Can I choose monthly or yearly billing?',
      a: 'Yes. Recurring social media services can be offered through monthly or yearly plans.'
    },
    {
      q: 'Do you guarantee followers or viral content?',
      a: 'No. Social media performance depends on the audience, content, platform algorithms, competition and other factors. We focus on strategy, consistency and continuous optimization.'
    },
    {
      q: 'Can I get a custom social media package?',
      a: 'Yes. Custom packages can be created based on content volume, platforms and business requirements.'
    }
  ];

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="smm-faq-wrapper" aria-label="Social Media Management Frequently Asked Questions">
      <div className="smm-faq-glow" aria-hidden="true" />

      <div className="smm-faq-container">
        
        {/* Section Header */}
        <div className="smm-faq-header">
          <div className="smm-faq-badge">
            <HelpCircle className="w-3.5 h-3.5 text-terracotta" />
            <span>Support &amp; Clarity</span>
          </div>

          <span className="smm-faq-subtag">Social Media Management — FAQ</span>
          <h2 className="smm-faq-title">Frequently Asked Questions</h2>
        </div>

        {/* Accordion Stack */}
        <div className="smm-faq-stack">
          {smmFaqs.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx} 
                className={`smm-faq-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="smm-faq-q-btn"
                  onClick={() => handleToggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="smm-faq-q-text">
                    <span className="smm-faq-q-num">{idx + 1}.</span> {item.q}
                  </span>
                  <div className="smm-faq-icon-bubble">
                    <ChevronDown className={`smm-faq-chevron ${isOpen ? 'rotate' : ''}`} />
                  </div>
                </button>

                {isOpen && (
                  <div className="smm-faq-answer">
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