import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { heroData } from '../../data/Hero';
import './HeroSection.css';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // 1. Separate Screen Detection (<= 700px Mobile vs > 700px PC/Tablet)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    handleResize(); // Initial check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 2. 3-Second Text Switcher with Dynamic Slide Bank Selection
  useEffect(() => {
    const activeSlides = isMobile ? heroData.mobileSlides : heroData.desktopSlides;

    const interval = setInterval(() => {
      setIsFading(true);

      setTimeout(() => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % activeSlides.length);
        setIsFading(false);
      }, 450); // Matches CSS transition duration
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile]);

  const activeSlides = isMobile ? heroData.mobileSlides : heroData.desktopSlides;
  const currentSlide = activeSlides[currentSlideIndex] || activeSlides[0];

  return (
    <section className="hero-wrapper" aria-label="Hero Section">
      <div className="hero-card">
        
        {/* Ambient Corner Glow Accents */}
        <div className="hero-glow-top-left" />
        <div className="hero-glow-bottom-right" />

        {/* Dynamic Video Switching without sound or poster */}
        <video
          key={isMobile ? 'mobile-video' : 'desktop-video'}
          className="hero-video-bg"
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
        >
          <source 
            src={isMobile ? heroData.mobileVideo : heroData.desktopVideo} 
            type="video/mp4" 
          />
        </video>

        {/* Cinematic Gradient Mask */}
        <div className="hero-video-overlay" />

        {/* Content Layout Grid */}
        <div className="hero-content-grid">
          <div className="hero-text-area">
            
            {/* Dynamic Headline */}
            <h1 className={`hero-headline ${isFading ? 'text-exiting' : 'text-entering'}`}>
              {currentSlide.headline}
            </h1>

            {/* Dynamic Description */}
            <p className={`hero-description ${isFading ? 'text-exiting' : 'text-entering'}`}>
              {currentSlide.description}
            </p>

            {/* Action Buttons */}
            <div className="hero-cta-group">
              <Link to={heroData.primaryCTA.path} className="hero-btn-primary">
                {heroData.primaryCTA.text}
              </Link>
              <Link to={heroData.secondaryCTA.path} className="hero-btn-secondary">
                {heroData.secondaryCTA.text}
              </Link>
            </div>

          </div>

          {/* Right aperture area for PC screens */}
          <div className="hidden lg:block w-full h-full pointer-events-none" />
        </div>

      </div>
    </section>
  );
}