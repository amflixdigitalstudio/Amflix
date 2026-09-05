import React, { useState, useEffect } from 'react';
import { Sparkles, Search, ArrowUpRight, BookOpen, Compass } from 'lucide-react';
import './InsightsHero.css';

export default function InsightsHero({ onSelectCategory, onSearchChange }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'All',
    'Branding',
    'Marketing',
    'Social Media',
    'Web',
    'UI/UX',
    'Technology',
    'Business Growth'
  ];

  useEffect(() => {
    document.title = 'AMFlix Insights | Branding, Marketing, Design & Technology';

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      'Actionable perspectives on branding, web architecture, high-retention content, and sustainable digital business growth from the AMFlix team.';
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (onSelectCategory) {
      onSelectCategory(category);
    }
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    setSearchTerm(val);
    if (onSearchChange) {
      onSearchChange(val);
    }
  };

  return (
    <section className="insights-hero-section" aria-label="AMFlix Knowledge & Insights Hub">
      <div className="insights-hero-glow" aria-hidden="true" />

      <div className="insights-hero-container">
        {/* Editorial Sub-Badge */}
        <div className="insights-badge-wrap">
          <span className="insights-badge">
            <Sparkles className="w-3.5 h-3.5 text-terracotta" />
            <span>Perspectives &amp; Frameworks</span>
          </span>
        </div>

        {/* Primary SEO H1 */}
        <h1 className="insights-hero-title">
          Ideas That Help Businesses <span className="insights-hero-accent">Grow Better.</span>
        </h1>

        {/* Hero Narrative */}
        <p className="insights-hero-desc">
          Field-tested strategy, engineering notes, and design frameworks distilled by the
          AMFlix studio team to help ambitious brands scale with clarity.
        </p>

        {/* Search & Quick Controls */}
        <div className="insights-search-bar">
          <Search className="insights-search-icon" />
          <input
            type="text"
            placeholder="Search frameworks, growth strategies, and tutorials..."
            value={searchTerm}
            onChange={handleInputChange}
            className="insights-search-input"
            aria-label="Search articles and insights"
          />
        </div>

        {/* Topic Category Filter Strip */}
        <div className="insights-categories-strip" role="tablist" aria-label="Article categories">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                className={`insights-category-btn ${isActive ? 'active' : ''}`}
                onClick={() => handleCategoryClick(cat)}
                role="tab"
                aria-selected={isActive}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Editorial Quality Framework Banner */}
        <div className="insights-blueprint-ribbon">
          <div className="blueprint-lead">
            <Compass className="w-4 h-4 text-terracotta" />
            <span>Studio Publishing Standard</span>
          </div>
          <div className="blueprint-tags">
            <span>Actionable Headings</span>
            <span className="blueprint-dot">•</span>
            <span>Original Data</span>
            <span className="blueprint-dot">•</span>
            <span>Direct Examples</span>
            <span className="blueprint-dot">•</span>
            <span>No Fluff</span>
          </div>
        </div>
      </div>
    </section>
  );
}