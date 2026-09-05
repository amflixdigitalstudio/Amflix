import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Sparkles, ArrowUpRight, ChevronDown, Layers } from 'lucide-react';
import { servicesPricingData } from '../../data/AllPricingData';
import './DigitalMarketingPricing.css';

export default function DigitalMarketingPricing() {
  const dmData = servicesPricingData.digitalMarketing;
  const packages = dmData.packages;
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState(null);

  const toggleMobilePackage = (index) => {
    setMobileExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="dm-pricing-section" aria-label="Digital Marketing Packages & Pricing">
      <div className="dm-pricing-container">
        
        {/* Header */}
        <div className="dm-pricing-header">
          <span className="dm-pricing-badge">Investment Tiers</span>
          <h2 className="dm-pricing-title">Digital Marketing Packages</h2>
        </div>

        {/* 3-Column Grid: Basic | Pro | Premium */}
        <div className="dm-pricing-grid">
          {packages.map((pkg, idx) => {
            const isMobileOpen = mobileExpandedIndex === idx;

            return (
              <div 
                key={pkg.id} 
                className={`dm-card ${pkg.popular ? 'highlighted' : ''}`}
              >
                {/* Popular Pill */}
                {pkg.badge && (
                  <div className="dm-badge-wrap">
                    <span className="dm-featured-badge">
                      <Sparkles className="w-3.5 h-3.5" />
                      {pkg.badge}
                    </span>
                  </div>
                )}

                {/* Card Header */}
                <div className="dm-card-header">
                  <div className="dm-tier-label">{pkg.tier}</div>
                  <h3 className="dm-name">{pkg.name}</h3>
                  
                  <div className="dm-pricing">
                    <span className="dm-price-amount">{pkg.price}</span>
                    <span className="dm-period">{pkg.period}</span>
                  </div>

                  <p className="dm-description">{pkg.description}</p>
                </div>

                {/* Mobile Toggle Button */}
                <button
                  type="button"
                  className="dm-mobile-expand-btn"
                  onClick={() => toggleMobilePackage(idx)}
                  aria-expanded={isMobileOpen}
                >
                  <span>{isMobileOpen ? 'Hide Deliverables' : 'View Deliverables'}</span>
                  <div className={`dm-expand-arrow-bubble ${isMobileOpen ? 'rotate' : ''}`}>
                    <ChevronDown className="w-4 h-4 text-terracotta" />
                  </div>
                </button>

                {/* Deliverables List */}
                <div className={`dm-features-pane ${isMobileOpen ? 'mobile-visible' : ''}`}>
                  <ul className="dm-features-list">
                    {pkg.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="dm-feature-item">
                        <div className="dm-check-circle">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {pkg.note && (
                    <div className="dm-adspend-note">
                      <span>{pkg.note}</span>
                    </div>
                  )}
                </div>

                {/* CTA Action */}
                <div className="dm-card-footer">
                  <Link 
                    to={pkg.ctaLink} 
                    className={`dm-cta-btn ${pkg.popular ? 'primary' : 'secondary'}`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Large-Scale Marketing Tier */}
        <div className="dm-custom-banner">
          <div className="dm-custom-left">
            <div className="dm-custom-badge">
              <Layers className="w-3.5 h-3.5 text-terracotta" />
              <span>Large-Scale Marketing</span>
            </div>
            <h3 className="dm-custom-title">Need More?</h3>
            <p className="dm-custom-desc">
              For businesses requiring large-scale campaigns, multiple platforms, high-volume advertising, extensive SEO or customized marketing requirements, we create a custom plan.
            </p>
          </div>

          <div className="dm-custom-right">
            <Link to="/contact?type=custom-digital-marketing" className="dm-custom-btn">
              <span>Contact Us for Custom Pricing</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}