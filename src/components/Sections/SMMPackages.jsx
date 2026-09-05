import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Sparkles, ArrowUpRight, ChevronDown } from 'lucide-react';
import { servicesPricingData } from '../../data/AllPricingData';
import './SMMPackages.css';

export default function SMMPackages() {
  const smmData = servicesPricingData.socialMedia;
  const packages = smmData.packages;
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState(null);

  const toggleMobilePackage = (index) => {
    setMobileExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="smm-pkg-section" aria-label="Social Media Management Packages">
      <div className="smm-pkg-container">
        
        {/* Section Header */}
        <div className="smm-pkg-header">
          <span className="smm-pkg-badge">Investment Tiers</span>
          <h2 className="smm-pkg-title">Social Media Packages</h2>
        </div>

        {/* 3-Column Grid: Basic | Pro | Premium */}
        <div className="smm-pkg-grid">
          {packages.map((pkg, idx) => {
            const isMobileOpen = mobileExpandedIndex === idx;

            return (
              <div 
                key={pkg.id} 
                className={`smm-card ${pkg.popular ? 'highlighted' : ''}`}
              >
                {/* Most Popular Badge */}
                {pkg.badge && (
                  <div className="smm-badge-wrap">
                    <span className="smm-featured-badge">
                      <Sparkles className="w-3.5 h-3.5" />
                      {pkg.badge}
                    </span>
                  </div>
                )}

                {/* Card Header & Summary */}
                <div className="smm-card-header">
                  <div className="smm-tier-label">{pkg.tier}</div>
                  <h3 className="smm-name">{pkg.name}</h3>
                  
                  <div className="smm-pricing">
                    <span className="smm-price-amount">{pkg.price}</span>
                    <span className="smm-period">{pkg.period}</span>
                  </div>

                  <p className="smm-description">{pkg.description}</p>
                </div>

                {/* Mobile Toggle Button */}
                <button
                  type="button"
                  className="smm-mobile-expand-btn"
                  onClick={() => toggleMobilePackage(idx)}
                  aria-expanded={isMobileOpen}
                >
                  <span>{isMobileOpen ? 'Hide Deliverables' : 'View Deliverables'}</span>
                  <div className={`smm-expand-arrow-bubble ${isMobileOpen ? 'rotate' : ''}`}>
                    <ChevronDown className="w-4 h-4 text-terracotta" />
                  </div>
                </button>

                {/* Deliverables List */}
                <div className={`smm-features-pane ${isMobileOpen ? 'mobile-visible' : ''}`}>
                  <ul className="smm-features-list">
                    {pkg.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="smm-feature-item">
                        <div className="smm-check-circle">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action */}
                <div className="smm-card-footer">
                  <Link 
                    to={pkg.ctaLink} 
                    className={`smm-cta-btn ${pkg.popular ? 'primary' : 'secondary'}`}
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