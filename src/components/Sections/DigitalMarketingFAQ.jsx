import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import './DigitalMarketingFAQ.css';

export default function DigitalMarketingFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const dmFaqs = [
    {
      q: 'What digital marketing services does AMFlix provide?',
      a: 'AMFlix provides SEO, Meta Ads, Google Ads, lead generation, performance marketing, retargeting, conversion optimization, analytics and digital marketing strategy.'
    },
    {
      q: 'Does AMFlix provide SEO services?',
      a: 'Yes. SEO services can include technical SEO, on-page SEO, local SEO, keyword research and other optimization activities depending on the package.'
    },
    {
      q: 'Does AMFlix manage Meta Ads?',
      a: 'Yes. AMFlix can plan, create, manage, monitor and optimize Meta advertising campaigns.'
    },
    {
      q: 'Does AMFlix manage Google Ads?',
      a: 'Yes. Google Ads management is available as part of selected digital marketing packages.'
    },
    {
      q: 'Is advertising spend included in your pricing?',
      a: 'No. The advertising budget paid to platforms such as Meta or Google is separate from the AMFlix service fee.'
    },
    {
      q: 'Can digital marketing help generate leads?',
      a: 'Yes. AMFlix can develop lead-generation strategies using SEO, paid advertising, landing pages, audience targeting and conversion optimization.'
    },
    {
      q: 'Do you provide local SEO?',
      a: 'Yes. Local SEO can help businesses improve their visibility for relevant location-based searches.'
    },
    {
      q: 'How much does digital marketing cost?',
      a: 'AMFlix digital marketing services start from ₹15,000 per month.'
    },
    {
      q: 'How long does SEO take to show results?',
      a: 'SEO is a long-term process. Results can vary depending on competition, website condition, industry, keywords and the existing online presence.'
    },
    {
      q: 'Do you guarantee Google rankings?',
      a: 'No. Search rankings cannot be guaranteed because search engines continuously change their algorithms and ranking systems.'
    },
    {
      q: 'Can you manage large-scale marketing campaigns?',
      a: 'Yes. AMFlix provides custom solutions for businesses requiring larger campaigns, multiple platforms or more extensive marketing requirements.'
    },
    {
      q: 'Can I get a custom digital marketing package?',
      a: 'Yes. Custom marketing packages can be created according to your objectives, audience, platforms and campaign requirements.'
    }
  ];

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="dm-faq-wrapper" aria-label="Digital Marketing Frequently Asked Questions">
      <div className="dm-faq-glow" aria-hidden="true" />

      <div className="dm-faq-container">
        
        {/* Header */}
        <div className="dm-faq-header">
          <div className="dm-faq-badge">
            <HelpCircle className="w-3.5 h-3.5 text-terracotta" />
            <span>Support &amp; Clarity</span>
          </div>

          <span className="dm-faq-subtag">Digital Marketing — FAQ</span>
          <h2 className="dm-faq-title">Frequently Asked Questions</h2>
        </div>

        {/* Accordion Stack */}
        <div className="dm-faq-stack">
          {dmFaqs.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx} 
                className={`dm-faq-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="dm-faq-q-btn"
                  onClick={() => handleToggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="dm-faq-q-text">
                    <span className="dm-faq-q-num">{idx + 1}.</span> {item.q}
                  </span>
                  <div className="dm-faq-icon-bubble">
                    <ChevronDown className={`dm-faq-chevron ${isOpen ? 'rotate' : ''}`} />
                  </div>
                </button>

                {isOpen && (
                  <div className="dm-faq-answer">
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