import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Sparkles, 
  Compass, 
  CalendarDays, 
  Globe, 
  Share2, 
  Palette, 
  Clapperboard, 
  Clock, 
  Layers, 
  PenTool, 
  Hash, 
  MessageSquare, 
  BarChart3, 
  Target 
} from 'lucide-react';
import './SMMHero.css';

export default function SMMHero() {
  const managementOfferings = [
    { title: 'Social Media Strategy', icon: <Compass className="w-4 h-4 text-terracotta" /> },
    { title: 'Content Planning', icon: <CalendarDays className="w-4 h-4 text-terracotta" /> },
    { title: 'Instagram Management', icon: <Share2 className="w-4 h-4 text-terracotta" /> },
    { title: 'Facebook Management', icon: <Globe className="w-4 h-4 text-terracotta" /> },
    { title: 'LinkedIn Management', icon: <Globe className="w-4 h-4 text-terracotta" /> },
    { title: 'Content Creation', icon: <Palette className="w-4 h-4 text-terracotta" /> },
    { title: 'Reels', icon: <Clapperboard className="w-4 h-4 text-terracotta" /> },
    { title: 'Stories', icon: <Clock className="w-4 h-4 text-terracotta" /> },
    { title: 'Carousel Posts', icon: <Layers className="w-4 h-4 text-terracotta" /> },
    { title: 'Captions', icon: <PenTool className="w-4 h-4 text-terracotta" /> },
    { title: 'Hashtag & Keyword Research', icon: <Hash className="w-4 h-4 text-terracotta" /> },
    { title: 'Community Management', icon: <MessageSquare className="w-4 h-4 text-terracotta" /> },
    { title: 'Performance Analytics', icon: <BarChart3 className="w-4 h-4 text-terracotta" /> },
    { title: 'Campaign Planning', icon: <Target className="w-4 h-4 text-terracotta" /> }
  ];

  return (
    <section className="smm-hero-wrap" aria-label="Social Media Management Services">
      <div className="smm-glow" aria-hidden="true" />

      <div className="smm-hero-container">
        
        {/* Top Hero Block */}
        <div className="smm-hero-content">
          <div className="smm-badge">
            <Sparkles className="w-3.5 h-3.5 text-terracotta" />
            <span>Organic Growth &amp; Content Engine</span>
          </div>

          <h1 className="smm-h1">Social Media Management</h1>

          <p className="smm-headline">
            Turn Your Social Media Into a <span className="smm-accent">Growth Engine.</span>
          </p>

          <p className="smm-desc">
            We create, manage and optimize your social media presence with strategy-driven content, creative storytelling and consistent brand communication.
          </p>

          <div className="smm-actions">
            <Link to="/contact?service=social-media" className="smm-btn primary">
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* What We Manage Shelf */}
        <div className="smm-services-shelf">
          <div className="smm-shelf-header">
            <span className="smm-shelf-tag">Core Capabilities</span>
            <h2 className="smm-shelf-title">What We Manage</h2>
          </div>

          <div className="smm-offerings-grid">
            {managementOfferings.map((item, index) => (
              <div key={index} className="smm-offering-card">
                <div className="smm-icon-box">
                  {item.icon}
                </div>
                <span className="smm-offering-name">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}