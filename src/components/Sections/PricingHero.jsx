import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import './PricingHero.css';

export default function PricingHero() {
  const highlights = [
    'No Hidden Platform Surcharges',
    'Custom Milestones & Scopes',
    'Transparent Deliverables'
  ];

  return (
    <section className="pricing-hero-wrapper" aria-label="AMFlix Studio Pricing">
      <div className="pricing-hero-glow" aria-hidden="true" />

      <div className="pricing-hero-container">
        
        {/* Subtle Pill Tag */}
        <div className="pricing-hero-badge">
          <Sparkles className="w-3.5 h-3.5 text-terracotta" />
          <span>Transparent Studio Investment</span>
        </div>

        {/* Primary Header */}
        <h1 className="pricing-hero-title">
          Pricing That Fits <span className="pricing-hero-accent">Your Business.</span>
        </h1>

        {/* Subtitle */}
        <p className="pricing-hero-subtitle">
          Simple, transparent pricing for branding, marketing, technology and creative services.
        </p>

        {/* Description */}
        <p className="pricing-hero-description">
          Whether you're launching a new business, building your digital presence or scaling an existing brand, choose the service that fits your goals.
        </p>

        {/* Action Button */}
        <div className="pricing-hero-actions">
          <Link to="/contact?type=custom-quote" className="pricing-hero-btn">
            <span>Get a Custom Quote</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Confidence Ribbons */}
        <div className="pricing-hero-perks">
          {highlights.map((perk, idx) => (
            <div key={idx} className="perk-item">
              <CheckCircle2 className="w-3.5 h-3.5 text-terracotta" />
              <span>{perk}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}