import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import './WebsiteDevelopmentFAQ.css';

export default function WebsiteDevelopmentFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const webFaqs = [
    {
      q: 'What type of websites does AMFlix develop?',
      a: 'AMFlix develops business websites, corporate websites, portfolio websites, e-commerce websites, landing pages, CMS websites and custom web applications.'
    },
    {
      q: 'Does AMFlix design and develop websites?',
      a: 'Yes. AMFlix handles both UI/UX design and website development.'
    },
    {
      q: 'Are the websites mobile-friendly?',
      a: 'Yes. Websites are designed to provide a responsive experience across mobile, tablet and desktop devices.'
    },
    {
      q: 'Can you redesign my existing website?',
      a: 'Yes. AMFlix can redesign an existing website to improve its visual design, user experience, performance and conversion structure.'
    },
    {
      q: 'Can you build e-commerce websites?',
      a: 'Yes. E-commerce functionality can be developed according to the required products, features, payment systems and integrations.'
    },
    {
      q: 'Can you integrate payment gateways?',
      a: 'Yes. Payment gateway integration can be included where required and supported by the selected technology.'
    },
    {
      q: 'Do you provide SEO-friendly websites?',
      a: 'Yes. Websites can be developed with SEO foundations such as responsive design, appropriate structure, metadata, performance optimization and search-engine-friendly architecture.'
    },
    {
      q: 'How much does website development cost?',
      a: 'AMFlix website development starts from ₹20,000. Advanced websites are quoted according to requirements.'
    },
    {
      q: 'Are domain and hosting included?',
      a: 'Generally, domain and hosting are separate unless specifically included in the project proposal.'
    },
    {
      q: 'How long does website development take?',
      a: 'The timeline depends on the number of pages, features, content, integrations and feedback required.'
    },
    {
      q: 'Can you integrate APIs and third-party services?',
      a: 'Yes. API and third-party integrations can be developed according to the project requirements.'
    },
    {
      q: 'Do you provide website maintenance?',
      a: 'Yes. Ongoing website maintenance and technical support can be provided separately.'
    },
    {
      q: 'Can you build large-scale websites?',
      a: 'Yes. Large-scale websites, e-commerce platforms and custom web applications can be developed with custom pricing.'
    }
  ];

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="web-faq-wrapper" aria-label="Website Development Frequently Asked Questions">
      <div className="web-faq-glow" aria-hidden="true" />

      <div className="web-faq-container">
        
        {/* Header */}
        <div className="web-faq-header">
          <div className="web-faq-badge">
            <HelpCircle className="w-3.5 h-3.5 text-terracotta" />
            <span>Support &amp; Clarity</span>
          </div>

          <span className="web-faq-subtag">Website Development — FAQ</span>
          <h2 className="web-faq-title">Frequently Asked Questions</h2>
        </div>

        {/* Accordion Stack */}
        <div className="web-faq-stack">
          {webFaqs.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx} 
                className={`web-faq-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="web-faq-q-btn"
                  onClick={() => handleToggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="web-faq-q-text">
                    <span className="web-faq-q-num">{idx + 1}.</span> {item.q}
                  </span>
                  <div className="web-faq-icon-bubble">
                    <ChevronDown className={`web-faq-chevron ${isOpen ? 'rotate' : ''}`} />
                  </div>
                </button>

                {isOpen && (
                  <div className="web-faq-answer">
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