import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import './PricingFAQ.css';

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'Are these fixed prices?',
      a: 'The displayed amounts are starting prices. Final pricing depends on the project scope, features, deliverables and requirements.'
    },
    {
      q: 'Can I get a custom package?',
      a: 'Yes. AMFlix can combine multiple services into a customized package.'
    },
    {
      q: 'Which services are monthly?',
      a: 'Social Media Management, Digital Marketing and Design & Video Editing are available as monthly recurring services.'
    },
    {
      q: 'Which services are one-time?',
      a: 'Branding, Website Development and Mobile App Development are generally one-time project services.'
    },
    {
      q: 'Can I choose yearly billing?',
      a: 'Yes. Selected recurring services can be billed yearly.'
    },
    {
      q: 'Does digital marketing include ad spend?',
      a: 'No. Advertising spend is separate from the AMFlix management fee.'
    },
    {
      q: 'Are hosting and domain included in website development?',
      a: 'They are generally separate unless specifically included in your proposal.'
    },
    {
      q: 'How do I get an exact quotation?',
      a: 'Send us your requirements through the enquiry form and our team will prepare a suitable proposal.'
    }
  ];

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="pricing-faq-section" aria-label="Pricing Frequently Asked Questions">
      <div className="pricing-faq-container">
        
        {/* Section Header */}
        <div className="pricing-faq-header">
          <div className="pricing-faq-badge">
            <HelpCircle className="w-3.5 h-3.5 text-terracotta" />
            <span>Investment Clarity</span>
          </div>
          <h2 className="pricing-faq-title">Pricing FAQs</h2>
          <p className="pricing-faq-lead">
            Common questions regarding our project estimates, retainers, and billing structure.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="pricing-faq-stack">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`pricing-faq-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="pricing-faq-question"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="pricing-faq-q-text">{item.q}</span>
                  <div className="pricing-faq-icon-bubble">
                    <ChevronDown className={`pricing-faq-chevron ${isOpen ? 'rotate' : ''}`} />
                  </div>
                </button>

                {isOpen && (
                  <div className="pricing-faq-answer">
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