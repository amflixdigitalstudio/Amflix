import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import './AboutHero.css';

export default function AboutHero() {
  // Sets SEO Title and Meta Description for search engines
  useEffect(() => {
    document.title = 'About AMFlix | Digital Studio in Bangalore';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content =
      'AMFlix is a digital studio bringing together strategy, branding, design, technology and marketing to help businesses build meaningful digital identities and experiences.';
  }, []);

  return (
    <section className="about-hero-section" aria-label="About AMFlix Studio">
      {/* Background Radial Glow */}
      <div className="about-hero-glow" aria-hidden="true" />

      <div className="about-hero-container">
        {/* Studio Badge */}
        <div className="about-hero-badge-wrap">
          <span className="about-hero-badge">
            <Sparkles className="about-hero-badge-icon" />
            <span className='about-hero-badge-content'>Digital Studio • Bangalore</span>
          </span>
        </div>

        {/* Primary H1 Heading */}
        <h1 className="about-hero-title">
          We Build With <span className="title-accent">Purpose.</span>
        </h1>

        {/* Studio Proposition Description */}
        <p className="about-hero-desc">
          AMFlix is a digital studio bringing together strategy, branding,
          design, technology and marketing to help businesses build meaningful
          digital identities and experiences.
        </p>

        {/* Action Controls */}
        <div className="about-hero-actions">
          <Link to="/contact" className="about-hero-btn primary">
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <Link to="/servicepricing" className="about-hero-btn secondary">
            <span>Explore Pricing</span>
          </Link>
        </div>

        {/* Value Metric Pillars */}
        <div className="about-hero-pillars">
          <div className="pillar-item">
            <span className="pillar-num">01</span>
            <span className="pillar-label">Strategy</span>
          </div>
          <div className="pillar-item">
            <span className="pillar-num">02</span>
            <span className="pillar-label">Branding</span>
          </div>
          <div className="pillar-item">
            <span className="pillar-num">03</span>
            <span className="pillar-label">Design</span>
          </div>
          <div className="pillar-item">
            <span className="pillar-num">04</span>
            <span className="pillar-label">Technology</span>
          </div>
          <div className="pillar-item">
            <span className="pillar-num">05</span>
            <span className="pillar-label">Marketing</span>
          </div>
        </div>
      </div>
    </section>
  );
}