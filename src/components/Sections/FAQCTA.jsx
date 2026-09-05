import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, MessageCircle } from 'lucide-react';
import './FAQCTA.css';

export default function FAQCTA() {
  return (
    <section className="faq-cta-section" aria-label="Still Have Questions">
      <div className="faq-cta-glow" aria-hidden="true" />

      <div className="faq-cta-container">
        <div className="faq-cta-card">
          
          <div className="faq-cta-badge">
            <Sparkles className="w-3.5 h-3.5 text-terracotta" />
            <span>Direct Guidance</span>
          </div>

          <h2 className="faq-cta-title">Still Have Questions?</h2>

          <p className="faq-cta-subtitle">
            Not sure which service or package is right for your business?
          </p>

          <p className="faq-cta-description">
            Tell us what you're looking to build, and we'll help you find the right solution.
          </p>

          <div className="faq-cta-actions">
            <Link to="/contact?type=custom-quote" className="faq-cta-btn primary">
              <span>Get a Custom Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link to="/contact?type=enquiry" className="faq-cta-btn secondary">
              <MessageCircle className="w-4 h-4 text-terracotta" />
              <span>Talk to AMFlix</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}