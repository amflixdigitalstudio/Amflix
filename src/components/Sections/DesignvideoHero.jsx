import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Sparkles, 
  Palette, 
  Layers, 
  Megaphone, 
  Image, 
  Flag, 
  BookOpen, 
  Presentation, 
  Briefcase, 
  Clapperboard, 
  Film, 
  Video, 
  Activity, 
  Scissors, 
  Target 
} from 'lucide-react';
import './DesignvideoHero.css';

export default function DesignvideoHero() {
  const creativeOfferings = [
    { title: 'Social Media Designs', icon: <Palette className="w-4 h-4 text-terracotta" /> },
    { title: 'Carousel Designs', icon: <Layers className="w-4 h-4 text-terracotta" /> },
    { title: 'Advertisement Creatives', icon: <Megaphone className="w-4 h-4 text-terracotta" /> },
    { title: 'Posters', icon: <Image className="w-4 h-4 text-terracotta" /> },
    { title: 'Banners', icon: <Flag className="w-4 h-4 text-terracotta" /> },
    { title: 'Brochures', icon: <BookOpen className="w-4 h-4 text-terracotta" /> },
    { title: 'Presentations', icon: <Presentation className="w-4 h-4 text-terracotta" /> },
    { title: 'Brand Collateral', icon: <Briefcase className="w-4 h-4 text-terracotta" /> },
    { title: 'Reels', icon: <Clapperboard className="w-4 h-4 text-terracotta" /> },
    { title: 'Short-form Videos', icon: <Film className="w-4 h-4 text-terracotta" /> },
    { title: 'Promotional Videos', icon: <Video className="w-4 h-4 text-terracotta" /> },
    { title: 'Motion Graphics', icon: <Activity className="w-4 h-4 text-terracotta" /> },
    { title: 'Video Editing', icon: <Scissors className="w-4 h-4 text-terracotta" /> },
    { title: 'Campaign Creatives', icon: <Target className="w-4 h-4 text-terracotta" /> }
  ];

  return (
    <section className="dv-hero-wrap" aria-label="Design and Video Editing Services">
      <div className="dv-glow" aria-hidden="true" />

      <div className="dv-hero-container">
        
        {/* Top Hero Block */}
        <div className="dv-hero-content">
          <div className="dv-badge">
            <Sparkles className="w-3.5 h-3.5 text-terracotta" />
            <span>Visual Storytelling &amp; Production</span>
          </div>

          <h1 className="dv-h1">Design &amp; Video Editing Services</h1>

          <p className="dv-headline">
            Make Your Brand <span className="dv-accent">Impossible to Ignore.</span>
          </p>

          <p className="dv-desc">
            From social media creatives to promotional videos, AMFlix creates visual content designed to communicate, engage and convert.
          </p>

          <div className="dv-actions">
            <Link to="/contact?service=design-video" className="dv-btn primary">
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Capabilities Shelf */}
        <div className="dv-services-shelf">
          <div className="dv-shelf-header">
            <span className="dv-shelf-tag">Core Capabilities</span>
            <h2 className="dv-shelf-title">Our Creative Services</h2>
          </div>

          <div className="dv-offerings-grid">
            {creativeOfferings.map((item, index) => (
              <div key={index} className="dv-offering-card">
                <div className="dv-icon-box">
                  {item.icon}
                </div>
                <span className="dv-offering-name">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}