import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Sparkles, 
  AlertCircle, 
  CheckCircle2, 
  Layers, 
  HelpCircle,
  Briefcase
} from 'lucide-react';
import { industriesData } from '../../data/Industriescontent';
import './Industriescontent.css';

export default function Industriescontent() {
  const [selectedIndustry, setSelectedIndustry] = useState(industriesData.industries[0].id);

  useEffect(() => {
    document.title = industriesData.seo.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = industriesData.seo.description;
  }, []);

  const current =
    industriesData.industries.find((item) => item.id === selectedIndustry) ||
    industriesData.industries[0];

  return (
    <section className="ind-section" aria-label="Industries AMFlix Serves">
      <div className="ind-glow" aria-hidden="true" />

      <div className="ind-container">
        {/* Section Header */}
        <div className="ind-header">
          <span className="ind-badge">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{industriesData.header.badge}</span>
          </span>

          <h1 className="ind-main-title">
            {industriesData.header.h1Part1}
            <span className="ind-accent">{industriesData.header.h1Accent}</span>
          </h1>

          <p className="ind-main-desc">{industriesData.header.desc}</p>
        </div>

        {/* Industry Switcher Tabs */}
        <div className="ind-tabs-nav" role="tablist">
          {industriesData.industries.map((ind) => {
            const isActive = ind.id === current.id;
            return (
              <button
                key={ind.id}
                type="button"
                className={`ind-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => setSelectedIndustry(ind.id)}
                role="tab"
                aria-selected={isActive}
              >
                {ind.name}
              </button>
            );
          })}
        </div>

        {/* Dynamic Industry Canvas (Template Framework) */}
        <div className="ind-canvas">
          
          {/* 1. Hero Summary Header */}
          <div className="ind-hero-block">
            <span className="ind-sector-pill">{current.name}</span>
            <h2 className="ind-hero-h1">{current.h1}</h2>
            <p className="ind-hero-tagline">{current.tagline}</p>
          </div>

          {/* 2. Challenges vs AMFlix Solution */}
          <div className="ind-duo-grid">
            <div className="ind-box challenges">
              <div className="ind-box-header">
                <AlertCircle className="w-5 h-5 text-terracotta" />
                <h3>The Friction Points</h3>
              </div>
              <ul className="ind-bullet-list">
                {current.challenges.map((c, i) => (
                  <li key={i}>
                    <span className="ind-bullet-dot">×</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ind-box solution">
              <div className="ind-box-header">
                <CheckCircle2 className="w-5 h-5 text-terracotta" />
                <h3>The AMFlix Method</h3>
              </div>
              <p className="ind-solution-text">{current.solution}</p>
              <div className="ind-services-cluster">
                <span className="ind-cluster-label">Integrated Disciplines:</span>
                <div className="ind-services-tags">
                  {current.services.map((srv, idx) => (
                    <span key={idx} className="ind-service-tag">
                      {srv}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 3. Relevant Work Feature */}
          <div className="ind-work-card">
            <div className="ind-work-visual">
              <img
                src={current.relevantWork.image}
                alt={current.relevantWork.title}
                className="ind-work-img"
                loading="lazy"
              />
              <div className="ind-work-overlay" />
            </div>

            <div className="ind-work-body">
              <div className="ind-work-top">
                <span className="ind-work-pill">Featured Benchmark</span>
                <span className="ind-work-metric">{current.relevantWork.metrics}</span>
              </div>
              <h3 className="ind-work-title">{current.relevantWork.title}</h3>
              <p className="ind-work-tagline">{current.relevantWork.tagline}</p>
              
              <Link to="/work" className="ind-work-btn">
                <span>Explore Full Case Studies</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 4. Sector FAQ */}
          <div className="ind-faq-zone">
            <div className="ind-faq-header">
              <HelpCircle className="w-4 h-4 text-terracotta" />
              <h3>Industry Specifics</h3>
            </div>
            <div className="ind-faq-grid">
              {current.faq.map((item, idx) => (
                <div key={idx} className="ind-faq-card">
                  <h4 className="ind-faq-q">{item.q}</h4>
                  <p className="ind-faq-a">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Sector CTA */}
          <div className="ind-cta-banner">
            <div className="ind-cta-content">
              <h3>Ready to dominate the {current.name} space?</h3>
              <p>Let's map out a tailored strategy built for quantifiable growth.</p>
            </div>
            <div className="ind-cta-actions">
              <Link to="/contact" className="ind-btn primary">
                <span>Start Discovery</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link to="/servicepricing" className="ind-btn secondary">
                <span>Explore Pricing</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}