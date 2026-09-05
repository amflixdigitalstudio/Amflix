import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Sparkles, ArrowUpRight, ChevronDown, Laptop, AlertCircle } from 'lucide-react';
import { servicesPricingData } from '../../data/AllPricingData';
import './WebPricing.css';

export default function WebPricing() {
  // Gracefully resolve the service key regardless of naming convention in AllPricingData.js
  const webData = 
    servicesPricingData?.websiteDevelopment || 
    servicesPricingData?.webDevelopment || 
    servicesPricingData?.web || 
    {};

  const packages = webData.packages || [
    {
      id: 'basic-website',
      tier: 'BASIC',
      name: 'Website Starter',
      price: '₹20,000',
      period: 'One-Time',
      description: 'Up to 5 pages with custom responsive design and deployment.',
      deliverables: [
        'Up to 5 pages',
        'Responsive design',
        'Custom UI',
        'Contact form',
        'Basic SEO',
        'Mobile optimization',
        'Social media integration',
        'Basic performance optimization',
        'Deployment'
      ],
      note: 'Domain & hosting separate.',
      ctaText: 'Build My Website',
      ctaLink: '/contact?package=website-starter',
      popular: false
    },
    {
      id: 'pro-website',
      tier: 'PRO',
      name: 'Business Website',
      price: '₹50,000',
      period: 'One-Time',
      description: 'Up to 10 pages with CMS, blog, and comprehensive SEO setup.',
      deliverables: [
        'Up to 10 pages',
        'Custom UI/UX',
        'Responsive development',
        'CMS',
        'Blog',
        'SEO setup',
        'Analytics',
        'Search Console',
        'Lead forms',
        'Performance optimization',
        'Social integrations',
        'Deployment'
      ],
      ctaText: 'Choose Business',
      ctaLink: '/contact?package=business-website',
      popular: false
    },
    {
      id: 'premium-website',
      tier: 'PREMIUM',
      name: 'Website Pro',
      badge: 'Best Value',
      price: '₹60,000',
      period: 'One-Time',
      description: 'Advanced UI/UX up to 20 pages with API integrations and support.',
      deliverables: [
        'Advanced UI/UX',
        'Up to 20 pages',
        'Custom functionality',
        'CMS',
        'Blog',
        'Advanced SEO architecture',
        'Technical SEO setup',
        'Analytics',
        'Search Console',
        'Conversion optimization',
        'API integrations',
        'Advanced forms',
        'Performance optimization',
        'Security configuration',
        'Deployment',
        'Post-launch support'
      ],
      ctaText: 'Build My Website',
      ctaLink: '/contact?package=website-pro',
      popular: true
    }
  ];

  const [mobileExpandedIndex, setMobileExpandedIndex] = useState(null);

  const toggleMobilePackage = (index) => {
    setMobileExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="web-pricing-section" aria-label="Website Design & Development Packages">
      <div className="web-pricing-container">
        
        {/* Header */}
        <div className="web-pricing-header">
          <span className="web-pricing-badge">Investment Tiers</span>
          <h2 className="web-pricing-title">Website Packages</h2>
        </div>

        {/* 3-Column Grid: Basic | Pro | Premium */}
        <div className="web-pricing-grid">
          {packages.map((pkg, idx) => {
            const isMobileOpen = mobileExpandedIndex === idx;

            return (
              <div 
                key={pkg.id || idx} 
                className={`web-card ${pkg.popular ? 'highlighted' : ''}`}
              >
                {/* Popular Pill */}
                {pkg.badge && (
                  <div className="web-badge-wrap">
                    <span className="web-featured-badge">
                      <Sparkles className="w-3.5 h-3.5" />
                      {pkg.badge}
                    </span>
                  </div>
                )}

                {/* Card Header */}
                <div className="web-card-header">
                  <div className="web-tier-label">{pkg.tier}</div>
                  <h3 className="web-name">{pkg.name}</h3>
                  
                  <div className="web-pricing-row">
                    <span className="web-price-amount">{pkg.price}</span>
                    <span className="web-period">{pkg.period}</span>
                  </div>

                  <p className="web-description">{pkg.description}</p>
                </div>

                {/* Mobile Toggle Button */}
                <button
                  type="button"
                  className="web-mobile-expand-btn"
                  onClick={() => toggleMobilePackage(idx)}
                  aria-expanded={isMobileOpen}
                >
                  <span>{isMobileOpen ? 'Hide Deliverables' : 'View Deliverables'}</span>
                  <div className={`web-expand-arrow-bubble ${isMobileOpen ? 'rotate' : ''}`}>
                    <ChevronDown className="w-4 h-4 text-terracotta" />
                  </div>
                </button>

                {/* Deliverables List */}
                <div className={`web-features-pane ${isMobileOpen ? 'mobile-visible' : ''}`}>
                  <ul className="web-features-list">
                    {pkg.deliverables?.map((item, dIdx) => (
                      <li key={dIdx} className="web-feature-item">
                        <div className="web-check-circle">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {pkg.note && (
                    <div className="web-note-row">
                      <span>{pkg.note}</span>
                    </div>
                  )}
                </div>

                {/* CTA Action */}
                <div className="web-card-footer">
                  <Link 
                    to={pkg.ctaLink || '#'} 
                    className={`web-cta-btn ${pkg.popular ? 'primary' : 'secondary'}`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Large-Scale Websites Tier */}
        <div className="web-custom-banner">
          <div className="web-custom-left">
            <div className="web-custom-badge">
              <Laptop className="w-3.5 h-3.5 text-terracotta" />
              <span>Large-Scale Websites</span>
            </div>
            <h3 className="web-custom-title">Need Something Bigger?</h3>
            <p className="web-custom-desc">
              For large-scale websites, e-commerce platforms, custom web applications, advanced integrations and websites with extensive features, AMFlix creates a custom solution.
            </p>
          </div>

          <div className="web-custom-right">
            <Link to="/contact?type=custom-website" className="web-custom-btn">
              <span>Contact Us for Custom Pricing</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Disclaimers / Third-party notice */}
        <div className="web-disclaimer-note">
          <AlertCircle className="w-4 h-4 text-terracotta flex-shrink-0" />
          <span>Domain, hosting, premium plugins, APIs and third-party services are separate unless specified.</span>
        </div>

      </div>
    </section>
  );
}