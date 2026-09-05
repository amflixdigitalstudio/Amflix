import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { portfolioData } from '../../data/PortfolioData';
import './Portfolio.css';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    document.title = portfolioData.seo.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = portfolioData.seo.description;
  }, []);

  // Sort newly added projects to the top
  const sortedProjects = useMemo(() => {
    return [...portfolioData.projects].sort((a, b) => {
      if (a.createdAt && b.createdAt) {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      return b.id - a.id;
    });
  }, []);

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') return sortedProjects;
    return sortedProjects.filter((item) => item.category === activeFilter);
  }, [activeFilter, sortedProjects]);

  const showNext = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const showPrev = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  // Keyboard navigation for desktop view
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [lightboxIndex, filteredItems.length]);

  // Clean navigation link renderer (external vs internal router navigation)
  const renderProjectAction = (url, title, isLightbox = false) => {
    const isExternal = url.startsWith('http://') || url.startsWith('https://');

    if (isLightbox) {
      return isExternal ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="lightbox-visit-btn"
          onClick={(e) => e.stopPropagation()}
        >
          <span>View Project</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      ) : (
        <Link
          to={url}
          className="lightbox-visit-btn"
          onClick={(e) => {
            e.stopPropagation();
            setLightboxIndex(null);
          }}
        >
          <span>View Project</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      );
    }

    return isExternal ? (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="masonry-action-icon"
        onClick={(e) => e.stopPropagation()}
        title="Open Project"
        aria-label={`Open ${title}`}
      >
        <ArrowUpRight className="w-4 h-4" />
      </a>
    ) : (
      <Link
        to={url}
        className="masonry-action-icon"
        onClick={(e) => e.stopPropagation()}
        title="Open Project"
        aria-label={`Open ${title}`}
      >
        <ArrowUpRight className="w-4 h-4" />
      </Link>
    );
  };

  const currentProject = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;
  const hasValidLink = Boolean(currentProject && currentProject.link && currentProject.link.trim() !== '');

  return (
    <section className="portfolio-section" aria-label="Selected AMFlix Projects">
      <div className="portfolio-glow" aria-hidden="true" />

      <div className="portfolio-container">
        {/* Section Header */}
        <div className="portfolio-header">
          <span className="portfolio-badge">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{portfolioData.header.badge}</span>
          </span>

          <h1 className="portfolio-title">
            {portfolioData.header.h1Part1}
            <span className="portfolio-accent">{portfolioData.header.h1Accent}</span>
          </h1>

          <p className="portfolio-desc">{portfolioData.header.desc}</p>
        </div>

        {/* Filter Bar */}
        <div className="portfolio-filter-bar" role="tablist">
          {portfolioData.filters.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                className={`portfolio-filter-btn ${isActive ? 'active' : ''}`}
                onClick={() => {
                  setActiveFilter(tab.id);
                  setLightboxIndex(null);
                }}
                role="tab"
                aria-selected={isActive}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Pinterest Masonry Layout */}
        <div className="portfolio-masonry">
          {filteredItems.map((item, index) => (
            <article
              key={item.id}
              className={`masonry-item aspect-${item.aspect}`}
              onClick={() => setLightboxIndex(index)}
            >
              <div className="masonry-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="masonry-img"
                  loading="lazy"
                />

                <div className="masonry-overlay">
                  <div className="overlay-top">
                    {item.link && item.link.trim() !== '' ? (
                      renderProjectAction(item.link, item.title, false)
                    ) : (
                      <div className="masonry-action-icon" title="View Fullscreen">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>

                  <div className="overlay-bottom">
                    <h3 className="masonry-project-title">{item.title}</h3>
                    <p className="masonry-project-tagline">{item.tagline}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal (Direct Touch Navigation) */}
      {currentProject && (
        <div className="portfolio-lightbox">
          <div
            className="lightbox-backdrop"
            onClick={() => setLightboxIndex(null)}
          />

          <div className="lightbox-top-bar">
            <span className="lightbox-counter">
              {lightboxIndex + 1} / {filteredItems.length}
            </span>
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close Gallery"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <button
            type="button"
            className="lightbox-arrow-btn prev"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            className="lightbox-arrow-btn next"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="lightbox-content-wrap">
            <div className="lightbox-figure">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="lightbox-main-img"
              />

              <div className="lightbox-caption-bar">
                <div className="lightbox-caption-left">
                  <h3 className="lightbox-caption-title">
                    {currentProject.title}
                  </h3>
                  <p className="lightbox-caption-desc">
                    {currentProject.tagline}
                  </p>
                </div>

                {hasValidLink && renderProjectAction(currentProject.link, currentProject.title, true)}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}