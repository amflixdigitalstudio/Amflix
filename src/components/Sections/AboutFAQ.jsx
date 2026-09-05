import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import './AboutFAQ.css';

export default function AboutFAQ() {
  // First item open by default for immediate engagement
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Why choose a digital studio instead of separate freelancers?',
      answer:
        'A studio can bring multiple disciplines together under one project strategy, helping maintain consistency between branding, design, technology and marketing.'
    },
    {
      question: 'Does AMFlix work with small businesses?',
      answer:
        "Yes. Scope can be adapted according to the business's requirements and goals."
    },
    {
      question: 'Does AMFlix work internationally?',
      answer:
        'AMFlix can work with clients outside Bangalore and India through digital collaboration, depending on project requirements.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="about-faq-section" aria-label="Frequently Asked Questions">
      <div className="about-faq-glow" aria-hidden="true" />

      <div className="about-faq-container">
        {/* Header */}
        <div className="about-faq-header">
          <span className="about-faq-badge">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Queries</span>
          </span>
          <h2 className="about-faq-title">
            Frequently Asked <span className="about-faq-accent">Questions</span>
          </h2>
          <p className="about-faq-desc">
            Everything you need to know about partnering with AMFlix.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="about-faq-stack">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`about-faq-item ${isOpen ? 'active' : ''}`}
              >
                <button
                  type="button"
                  className="about-faq-trigger"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span className="about-faq-question">{faq.question}</span>
                  <div className="about-faq-icon-halo">
                    {isOpen ? (
                      <Minus className="about-faq-toggle-icon" />
                    ) : (
                      <Plus className="about-faq-toggle-icon" />
                    )}
                  </div>
                </button>

                <div className={`about-faq-collapse ${isOpen ? 'open' : ''}`}>
                  <div className="about-faq-body">
                    <p className="about-faq-answer">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}