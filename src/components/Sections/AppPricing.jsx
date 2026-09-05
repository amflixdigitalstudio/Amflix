import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Sparkles, ArrowUpRight, ChevronDown, Smartphone } from 'lucide-react';
import { servicesPricingData } from '../../data/AllPricingData';
import './AppPricing.css';

export default function AppPricing() {
  // Safe resolution across common naming keys in AllPricingData.js
  const appData = 
    servicesPricingData?.mobileAppDevelopment || 
    servicesPricingData?.appDevelopment || 
    servicesPricingData?.mobileApp || 
    {};

  const packages = appData.packages || [
    {
      id: 'basic-app',
      tier: 'BASIC',
      name: 'App Starter',
      price: '₹80,000+',
      period: 'One-Time',
      description: 'Up to 8 screens with Android development, core backend, and authentication.',
      deliverables: [
        'Product consultation',
        'Basic UX/UI',
        'Up to 8 screens',
        'Android development',
        'Basic backend',
        'Database',
        'Authentication',
        'Testing',
        'Deployment assistance'
      ],
      ctaText: 'Build My App',
      ctaLink: '/contact?package=app-starter',
      popular: false
    },
    {
      id: 'pro-app',
      tier: 'PRO',
      name: 'App Business',
      price: '₹2,50,000+',
      period: 'One-Time',
      description: 'Cross-platform Android & iOS app with admin panel, APIs, and push notifications.',
      deliverables: [
        'Product consultation',
        'Complete UX/UI',
        'Android + iOS',
        'Backend development',
        'Database',
        'Authentication',
        'API integrations',
        'Push notifications',
        'Admin panel',
        'Analytics',
        'Testing',
        'Deployment assistance'
      ],
      ctaText: 'Choose Business',
      ctaLink: '/contact?package=app-business',
      popular: false
    },
    {
      id: 'premium-app',
      tier: 'PREMIUM',
      name: 'App Pro',
      badge: 'Best Value',
      price: '₹3,00,000+',
      period: 'One-Time',
      description: 'Comprehensive mobile product with payments, dual store deployment, and support.',
      deliverables: [
        'Product strategy',
        'Complete UX/UI',
        'Android + iOS',
        'Advanced backend',
        'Database architecture',
        'Authentication',
        'Payment integration',
        'Multiple API integrations',
        'Push notifications',
        'Advanced admin dashboard',
        'Analytics',
        'Security optimization',
        'Performance optimization',
        'Testing',
        'Play Store deployment',
        'App Store deployment',
        'Post-launch support'
      ],
      ctaText: 'Build My App',
      ctaLink: '/contact?package=app-pro',
      popular: true
    }
  ];

  const [mobileExpandedIndex, setMobileExpandedIndex] = useState(null);

  const toggleMobilePackage = (index) => {
    setMobileExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="app-pricing-section" aria-label="Mobile App Development Packages">
      <div className="app-pricing-container">
        
        {/* Header */}
        <div className="app-pricing-header">
          <span className="app-pricing-badge">Investment Tiers</span>
          <h2 className="app-pricing-title">App Development Packages</h2>
        </div>

        {/* 3-Column Grid: Basic | Pro | Premium */}
        <div className="app-pricing-grid">
          {packages.map((pkg, idx) => {
            const isMobileOpen = mobileExpandedIndex === idx;

            return (
              <div 
                key={pkg.id || idx} 
                className={`app-card ${pkg.popular ? 'highlighted' : ''}`}
              >
                {/* Popular Pill */}
                {pkg.badge && (
                  <div className="app-badge-wrap">
                    <span className="app-featured-badge">
                      <Sparkles className="w-3.5 h-3.5" />
                      {pkg.badge}
                    </span>
                  </div>
                )}

                {/* Card Header */}
                <div className="app-card-header">
                  <div className="app-tier-label">{pkg.tier}</div>
                  <h3 className="app-name">{pkg.name}</h3>
                  
                  <div className="app-pricing-row">
                    <span className="app-price-amount">{pkg.price}</span>
                    <span className="app-period">{pkg.period}</span>
                  </div>

                  <p className="app-description">{pkg.description}</p>
                </div>

                {/* Mobile Toggle Button */}
                <button
                  type="button"
                  className="app-mobile-expand-btn"
                  onClick={() => toggleMobilePackage(idx)}
                  aria-expanded={isMobileOpen}
                >
                  <span>{isMobileOpen ? 'Hide Deliverables' : 'View Deliverables'}</span>
                  <div className={`app-expand-arrow-bubble ${isMobileOpen ? 'rotate' : ''}`}>
                    <ChevronDown className="w-4 h-4 text-terracotta" />
                  </div>
                </button>

                {/* Deliverables List */}
                <div className={`app-features-pane ${isMobileOpen ? 'mobile-visible' : ''}`}>
                  <ul className="app-features-list">
                    {pkg.deliverables?.map((item, dIdx) => (
                      <li key={dIdx} className="app-feature-item">
                        <div className="app-check-circle">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="app-card-footer">
                  <Link 
                    to={pkg.ctaLink || '#'} 
                    className={`app-cta-btn ${pkg.popular ? 'primary' : 'secondary'}`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Large-Scale Applications Custom Banner */}
        <div className="app-custom-banner">
          <div className="app-custom-left">
            <div className="app-custom-badge">
              <Smartphone className="w-3.5 h-3.5 text-terracotta" />
              <span>Large-Scale Applications</span>
            </div>
            <h3 className="app-custom-title">Building Something Bigger?</h3>
            <p className="app-custom-desc">
              For large-scale applications, marketplaces, complex platforms, advanced backend systems, multiple integrations or extensive features, AMFlix provides customized development solutions.
            </p>
          </div>

          <div className="app-custom-right">
            <Link to="/contact?type=custom-app" className="app-custom-btn">
              <span>Contact Us for Custom Pricing</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}