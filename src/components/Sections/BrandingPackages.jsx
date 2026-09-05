import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Sparkles, ArrowUpRight, ChevronDown } from 'lucide-react';
import { servicesPricingData } from '../../data/AllPricingData';
import './BrandingPackages.css';

export default function BrandingPackages() {
  const brandingData = servicesPricingData.branding;
  const packages = brandingData.packages;
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState(null);

  const toggleMobilePackage = (index) => {
    setMobileExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="branding-pkg-section" aria-label="Branding Packages">
      <div className="branding-pkg-container">
        
        {/* Section Header */}
        <div className="branding-pkg-header">
          <span className="branding-pkg-badge">Investment Tiers</span>
          <h2 className="branding-pkg-title">Branding Packages</h2>
        </div>

        {/* 3-Column Grid */}
        <div className="branding-pkg-grid">
          {packages.map((pkg, idx) => {
            const isMobileOpen = mobileExpandedIndex === idx;

            return (
              <div 
                key={pkg.id} 
                className={`branding-card ${pkg.popular ? 'highlighted' : ''}`}
              >
                {/* Most Popular Badge */}
                {pkg.badge && (
                  <div className="pkg-badge-wrap">
                    <span className="pkg-featured-badge">
                      <Sparkles className="w-3.5 h-3.5" />
                      {pkg.badge}
                    </span>
                  </div>
                )}

                {/* Card Header & Summary */}
                <div className="branding-card-header">
                  <div className="pkg-tier-label">{pkg.tier}</div>
                  <h3 className="pkg-name">{pkg.name}</h3>
                  
                  <div className="pkg-pricing">
                    <span className="pkg-price-amount">{pkg.price}</span>
                    <span className="pkg-period">{pkg.period}</span>
                  </div>

                  <p className="pkg-description">{pkg.description}</p>
                </div>

                {/* Mobile Toggle Button (Visible only on mobile) */}
                <button
                  type="button"
                  className="mobile-expand-btn"
                  onClick={() => toggleMobilePackage(idx)}
                  aria-expanded={isMobileOpen}
                >
                  <span>{isMobileOpen ? 'Hide Deliverables' : 'View Deliverables'}</span>
                  <div className={`expand-arrow-bubble ${isMobileOpen ? 'rotate' : ''}`}>
                    <ChevronDown className="w-4 h-4 text-terracotta" />
                  </div>
                </button>

                {/* Deliverables List */}
                <div className={`pkg-features-pane ${isMobileOpen ? 'mobile-visible' : ''}`}>
                  <ul className="pkg-features-list">
                    {pkg.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="pkg-feature-item">
                        <div className="pkg-check-circle">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action */}
                <div className="branding-card-footer">
                  <Link 
                    to={pkg.ctaLink} 
                    className={`pkg-cta-btn ${pkg.popular ? 'primary' : 'secondary'}`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}