import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Sparkles, ArrowUpRight, ChevronDown } from 'lucide-react';
import { servicesPricingData } from '../../data/AllPricingData';
import './DesignvideoPricing.css';

export default function DesignvideoPricing() {
  // Safe resolution across common naming keys in AllPricingData.js
  const dvData = 
    servicesPricingData?.designVideo || 
    servicesPricingData?.designAndVideo || 
    servicesPricingData?.videoEditing || 
    {};

  const packages = dvData.packages || [
    {
      id: 'basic-creative',
      tier: 'BASIC',
      name: 'Creative Starter',
      price: '₹10,000',
      period: '/ Month',
      description: 'Essential graphic design and video editing support for growing brands.',
      deliverables: [
        '10 Graphic Designs',
        '4 Video Edits',
        'Social media creatives',
        'Basic Reels',
        'Ad creatives',
        '2 revision rounds'
      ],
      ctaText: 'Start Creating',
      ctaLink: '/contact?package=creative-starter',
      popular: false
    },
    {
      id: 'pro-creative',
      tier: 'PRO',
      name: 'Creative Growth',
      price: '₹25,000',
      period: '/ Month',
      description: 'Expanded creative production including motion graphics and campaign assets.',
      deliverables: [
        '20 Graphic Designs',
        '8 Video Edits',
        'Reels',
        'Carousels',
        'Ad creatives',
        'Promotional designs',
        'Motion graphics',
        'Campaign creatives',
        '3 revision rounds',
        'Monthly creative planning'
      ],
      ctaText: 'Choose Growth',
      ctaLink: '/contact?package=creative-growth',
      popular: false
    },
    {
      id: 'premium-creative',
      tier: 'PREMIUM',
      name: 'Creative Pro',
      badge: 'Best Value',
      price: '₹30,000',
      period: '/ Month',
      description: 'High-volume production, motion direction, priority turnaround, and dedicated support.',
      deliverables: [
        '30+ Graphic Designs',
        '12+ Video Edits',
        'Advanced Reels',
        'Advanced video editing',
        'Motion graphics',
        'Ad creatives',
        'Campaign creatives',
        'Promotional videos',
        'Brand campaign design',
        'Creative direction',
        'Priority delivery',
        'Priority support'
      ],
      ctaText: 'Go Premium',
      ctaLink: '/contact?package=creative-pro',
      popular: true
    }
  ];

  const [mobileExpandedIndex, setMobileExpandedIndex] = useState(null);

  const toggleMobilePackage = (index) => {
    setMobileExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="dv-pkg-section" aria-label="Design & Video Editing Packages">
      <div className="dv-pkg-container">
        
        {/* Section Header */}
        <div className="dv-pkg-header">
          <span className="dv-pkg-badge">Investment Tiers</span>
          <h2 className="dv-pkg-title">Design &amp; Video Packages</h2>
        </div>

        {/* 3-Column Grid: Basic | Pro | Premium */}
        <div className="dv-pkg-grid">
          {packages.map((pkg, idx) => {
            const isMobileOpen = mobileExpandedIndex === idx;

            return (
              <div 
                key={pkg.id || idx} 
                className={`dv-card ${pkg.popular ? 'highlighted' : ''}`}
              >
                {/* Popular Badge */}
                {pkg.badge && (
                  <div className="dv-badge-wrap">
                    <span className="dv-featured-badge">
                      <Sparkles className="w-3.5 h-3.5" />
                      {pkg.badge}
                    </span>
                  </div>
                )}

                {/* Card Header */}
                <div className="dv-card-header">
                  <div className="dv-tier-label">{pkg.tier}</div>
                  <h3 className="dv-name">{pkg.name}</h3>
                  
                  <div className="dv-pricing-row">
                    <span className="dv-price-amount">{pkg.price}</span>
                    <span className="dv-period">{pkg.period}</span>
                  </div>

                  <p className="dv-description">{pkg.description}</p>
                </div>

                {/* Mobile Toggle Button */}
                <button
                  type="button"
                  className="dv-mobile-expand-btn"
                  onClick={() => toggleMobilePackage(idx)}
                  aria-expanded={isMobileOpen}
                >
                  <span>{isMobileOpen ? 'Hide Deliverables' : 'View Deliverables'}</span>
                  <div className={`dv-expand-arrow-bubble ${isMobileOpen ? 'rotate' : ''}`}>
                    <ChevronDown className="w-4 h-4 text-terracotta" />
                  </div>
                </button>

                {/* Deliverables List */}
                <div className={`dv-features-pane ${isMobileOpen ? 'mobile-visible' : ''}`}>
                  <ul className="dv-features-list">
                    {pkg.deliverables?.map((item, dIdx) => (
                      <li key={dIdx} className="dv-feature-item">
                        <div className="dv-check-circle">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action */}
                <div className="dv-card-footer">
                  <Link 
                    to={pkg.ctaLink || '#'} 
                    className={`dv-cta-btn ${pkg.popular ? 'primary' : 'secondary'}`}
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