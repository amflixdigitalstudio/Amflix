import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { homeFAQData } from '../../data/HomeFAQData';
import './HomeFAQ.css';

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section-wrapper" id="faq" aria-labelledby="faq-title">
      <div className="faq-container">
        
        {/* Header */}
        <div className="faq-header">
          <span className="faq-badge">{homeFAQData.badge}</span>
          <h2 id="faq-title" className="faq-title">{homeFAQData.heading}</h2>
          <p className="faq-tagline">{homeFAQData.tagline}</p>
        </div>

        {/* Accordion List */}
        <div className="faq-accordion-list" role="region">
          {homeFAQData.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={faq.id} 
                className={`faq-item ${isOpen ? 'active' : ''}`}
              >
                <button
                  type="button"
                  className="faq-trigger"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="faq-question">{faq.question}</span>
                  <div className="faq-icon-box" aria-hidden="true">
                    <Plus className="w-4 h-4" />
                  </div>
                </button>

                <div 
                  id={`faq-answer-${faq.id}`}
                  className="faq-content"
                  role="region"
                >
                  <div className="faq-content-inner">
                    <p className="faq-answer">{faq.answer}</p>
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