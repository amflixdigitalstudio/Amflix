import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, HelpCircle, ArrowUpRight, MessageCircle } from 'lucide-react';
import { faqCategories, faqItems } from '../../data/FAQData';
import './FAQContents.css';

export default function FAQContents() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState(null);

  // SEO metadata & Structured Data (FAQPage Schema)
  useEffect(() => {
    document.title = 'AMFlix FAQ | Branding, Digital Marketing, Websites, Apps & Creative Services';

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      'Find answers about AMFlix services, pricing, branding, social media management, digital marketing, website development, mobile apps, design and video editing.';

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'faq-schema';
    schemaScript.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqItems.map((item) => ({
        '@type': 'Question',
        'name': item.q,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': item.a
        }
      }))
    });

    const existingSchema = document.getElementById('faq-schema');
    if (existingSchema) existingSchema.remove();
    document.head.appendChild(schemaScript);

    return () => {
      const el = document.getElementById('faq-schema');
      if (el) el.remove();
    };
  }, []);

  const filteredFaqs = useMemo(() => {
    if (activeCategory === 'All') return faqItems;
    return faqItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-page-wrapper" aria-label="AMFlix FAQ Section">
      <div className="faq-glow" aria-hidden="true" />

      <div className="faq-container">
        {/* Section 1 — Hero */}
        <div className="faq-hero">
          <div className="faq-badge">
            <HelpCircle className="w-3.5 h-3.5 text-terracotta" />
            <span>Support &amp; Knowledge Base</span>
          </div>

          <h1 className="faq-h1">Frequently Asked Questions</h1>

          <p className="faq-subheading">
            Everything you need to know about AMFlix, our services, packages and process.
          </p>

          <p className="faq-lead-desc">
            Have a question about branding, social media, digital marketing, websites, mobile apps,
            design or video editing? Find answers to some of the most common questions below.
          </p>
        </div>

        {/* Section 2 — FAQ Categories */}
        <div className="faq-filter-strip" role="tablist" aria-label="FAQ Categories">
          {faqCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                className={`faq-filter-btn ${isActive ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(null);
                }}
                role="tab"
                aria-selected={isActive}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Section 3 — FAQ Stack */}
        <div className="faq-stack">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`faq-accordion-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-q-text">{faq.q}</span>
                  <div className="faq-icon-bubble">
                    <ChevronDown className={`faq-chevron ${isOpen ? 'rotate' : ''}`} />
                  </div>
                </button>

                {isOpen && (
                  <div className="faq-answer-pane">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Section 4 — Still Have Questions? */}
        <div className="faq-cta-banner">
          <div className="faq-cta-content">
            <span className="faq-cta-tag">Still Have Questions?</span>
            <h2 className="faq-cta-title">Let's Talk About Your Project.</h2>
            <p className="faq-cta-desc">
              Can't find the answer you're looking for? Tell us what you need and the AMFlix team
              will help you find the right solution.
            </p>
          </div>

          <div className="faq-cta-actions">
            <Link to="/contact" className="faq-btn primary">
              <MessageCircle className="w-4 h-4" />
              <span>Ask AMFlix</span>
            </Link>
            <Link to="/contact" className="faq-btn secondary">
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}