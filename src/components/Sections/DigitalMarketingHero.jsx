import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Sparkles, 
  Search, 
  MapPin, 
  Code2, 
  FileSearch, 
  Link2, 
  Globe, 
  Megaphone, 
  Users, 
  Zap, 
  Repeat, 
  TrendingUp, 
  BarChart3, 
  Target 
} from 'lucide-react';
import './DigitalMarketingHero.css';

export default function DigitalMarketingHero() {
  const marketingOfferings = [
    { title: 'SEO', icon: <Search className="w-4 h-4 text-terracotta" /> },
    { title: 'Local SEO', icon: <MapPin className="w-4 h-4 text-terracotta" /> },
    { title: 'Technical SEO', icon: <Code2 className="w-4 h-4 text-terracotta" /> },
    { title: 'On-Page SEO', icon: <FileSearch className="w-4 h-4 text-terracotta" /> },
    { title: 'Off-Page SEO', icon: <Link2 className="w-4 h-4 text-terracotta" /> },
    { title: 'Google Ads', icon: <Globe className="w-4 h-4 text-terracotta" /> },
    { title: 'Meta Ads', icon: <Megaphone className="w-4 h-4 text-terracotta" /> },
    { title: 'Lead Generation', icon: <Users className="w-4 h-4 text-terracotta" /> },
    { title: 'Performance Marketing', icon: <Zap className="w-4 h-4 text-terracotta" /> },
    { title: 'Retargeting', icon: <Repeat className="w-4 h-4 text-terracotta" /> },
    { title: 'Conversion Optimization', icon: <TrendingUp className="w-4 h-4 text-terracotta" /> },
    { title: 'Analytics', icon: <BarChart3 className="w-4 h-4 text-terracotta" /> },
    { title: 'Campaign Strategy', icon: <Target className="w-4 h-4 text-terracotta" /> }
  ];

  return (
    <section className="dm-hero-wrap" aria-label="Digital Marketing Services">
      <div className="dm-hero-glow" aria-hidden="true" />

      <div className="dm-hero-container">
        
        {/* Top Hero Block */}
        <div className="dm-hero-content">
          <div className="dm-hero-badge">
            <Sparkles className="w-3.5 h-3.5 text-terracotta" />
            <span>Search &amp; Performance Marketing</span>
          </div>

          <h1 className="dm-hero-h1">Digital Marketing Services</h1>

          <p className="dm-hero-headline">
            Get Found. Get Noticed. <span className="dm-hero-accent">Get Results.</span>
          </p>

          <p className="dm-hero-desc">
            AMFlix combines SEO, paid advertising, audience targeting and conversion strategy to help businesses grow their digital presence.
          </p>

          <div className="dm-hero-actions">
            <Link to="/contact?service=digital-marketing" className="dm-hero-btn primary">
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Capabilities Shelf */}
        <div className="dm-hero-shelf">
          <div className="dm-shelf-header">
            <span className="dm-shelf-tag">Core Capabilities</span>
            <h2 className="dm-shelf-title">Our Digital Marketing Services</h2>
          </div>

          <div className="dm-offerings-grid">
            {marketingOfferings.map((item, index) => (
              <div key={index} className="dm-offering-card">
                <div className="dm-offering-icon-box">
                  {item.icon}
                </div>
                <span className="dm-offering-name">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}