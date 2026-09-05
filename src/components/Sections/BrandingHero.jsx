import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  Compass, 
  Palette, 
  Type, 
  BookOpen, 
  Briefcase, 
  Share2, 
  FileText, 
  Package, 
  Rocket,
  Target
} from 'lucide-react';
import './BrandingHero.css';

export default function BrandingHero() {
  const brandingOfferings = [
    { title: 'Brand Strategy', icon: <Compass className="w-4 h-4 text-terracotta" /> },
    { title: 'Brand Positioning', icon: <Target className="w-4 h-4 text-terracotta" /> },
    { title: 'Brand Identity', icon: <Layers className="w-4 h-4 text-terracotta" /> },
    { title: 'Logo Design', icon: <Sparkles className="w-4 h-4 text-terracotta" /> },
    { title: 'Colour Palette', icon: <Palette className="w-4 h-4 text-terracotta" /> },
    { title: 'Typography', icon: <Type className="w-4 h-4 text-terracotta" /> },
    { title: 'Brand Guidelines', icon: <BookOpen className="w-4 h-4 text-terracotta" /> },
    { title: 'Business Stationery', icon: <Briefcase className="w-4 h-4 text-terracotta" /> },
    { title: 'Social Media Branding', icon: <Share2 className="w-4 h-4 text-terracotta" /> },
    { title: 'Marketing Collateral', icon: <FileText className="w-4 h-4 text-terracotta" /> },
    { title: 'Packaging Design', icon: <Package className="w-4 h-4 text-terracotta" /> },
    { title: 'Brand Launch Creative', icon: <Rocket className="w-4 h-4 text-terracotta" /> }
  ];

  return (
    <section className="branding-hero-wrap" aria-label="Complete Branding Services">
      <div className="branding-glow" aria-hidden="true" />

      <div className="branding-hero-container">
        
        {/* Top Hero Block */}
        <div className="branding-hero-content">
          <div className="branding-badge">
            <Sparkles className="w-3.5 h-3.5 text-terracotta" />
            <span>Identity &amp; Positioning</span>
          </div>

          <h1 className="branding-h1">Complete Branding Services</h1>

          <p className="branding-headline">
            Build a Brand That <span className="branding-accent">People Remember.</span>
          </p>

          <p className="branding-desc">
            From strategy and positioning to visual identity and brand guidelines, AMFlix creates complete branding systems designed to make businesses distinctive, consistent and memorable.
          </p>

          <div className="branding-actions">
            <Link to="/contact?service=branding" className="branding-btn primary">
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Our Branding Services Grid */}
        <div className="branding-services-shelf">
          <div className="branding-shelf-header">
            <span className="branding-shelf-tag">Core Capabilities</span>
            <h2 className="branding-shelf-title">Our Branding Services</h2>
          </div>

          <div className="branding-offerings-grid">
            {brandingOfferings.map((item, index) => (
              <div key={index} className="branding-offering-card">
                <div className="offering-icon-box">
                  {item.icon}
                </div>
                <span className="offering-name">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}