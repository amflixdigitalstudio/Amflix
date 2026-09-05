import React, { useEffect } from 'react';
import { ArrowUpRight, MessageSquare, Clock, ShieldCheck, Mail } from 'lucide-react';
import './ContactHero.css';

export default function ContactHero() {
  useEffect(() => {
    document.title = 'Contact AMFlix | Start Your Branding, Website or Marketing Project';

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      'Tell us about your business, your challenge and what you want to build. The AMFlix team will review your requirements and get back to you.';
  }, []);

  const standardServices = [
    'Branding',
    'Social Media Management',
    'Website Development',
    'Mobile App Development',
    'Digital Marketing',
    'Design & Video Editing'
  ];

  return (
    <section className="contact-hero-section" aria-label="Contact AMFlix Hero">
      <div className="contact-hero-glow" aria-hidden="true" />

      <div className="contact-hero-container">
        {/* Header Badge */}
        <div className="contact-hero-badge-wrap">
          <span className="contact-hero-badge">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Collaboration</span>
          </span>
        </div>

        {/* Primary SEO H1 */}
        <h1 className="contact-hero-title">
          Let's Build Something <span className="contact-hero-accent">Great.</span>
        </h1>

        {/* Subtitle / Pitch */}
        <p className="contact-hero-desc">
          Tell us about your business, your challenge and what you want to build. The AMFlix
          team will review your requirements and get back to you.
        </p>

        {/* Standard Core Disciplines Bar */}
        <div className="contact-disciplines-bar">
          <span className="contact-disciplines-label">Scope Open For:</span>
          <div className="contact-disciplines-list">
            {standardServices.map((srv, idx) => (
              <span key={idx} className="contact-discipline-pill">
                {srv}
              </span>
            ))}
          </div>
        </div>

        {/* Trust & SLA Signals */}
        <div className="contact-hero-trust-strip">
          <div className="contact-trust-item">
            <Clock className="w-4 h-4 text-terracotta" />
            <span>Response within 24 business hours</span>
          </div>

          <div className="contact-trust-separator" aria-hidden="true">•</div>

          <div className="contact-trust-item">
            <ShieldCheck className="w-4 h-4 text-terracotta" />
            <span>NDA & strict confidentiality guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  );
}