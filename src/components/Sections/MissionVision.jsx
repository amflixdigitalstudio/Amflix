import React from 'react';
import { Target, Compass } from 'lucide-react';
import './MissionVision.css';

export default function MissionVision() {
  return (
    <section className="mv-section" aria-label="Our Mission and Vision">
      {/* Background ambient lighting */}
      <div className="mv-ambient-glow" aria-hidden="true" />

      <div className="mv-container">
        
        {/* Top Tag */}
        <div className="mv-badge-wrap">
          <span className="mv-badge">Our Guiding North Star</span>
        </div>

        {/* Section Heading */}
        <h2 className="mv-main-title">
          Driven by Intent. <span className="mv-title-accent">Built for Scale.</span>
        </h2>

        {/* Dynamic Connected Monolith Block */}
        <div className="mv-core-monolith">
          
          {/* 01. Mission Side */}
          <div className="mv-pillar-side">
            <div className="mv-indicator">
              <div className="mv-icon-halo">
                <Target className="mv-icon" />
              </div>
              <span className="mv-tag-label">Mission</span>
            </div>

            <p className="mv-statement">
              To help businesses build brands that people{' '}
              <span className="mv-highlight">notice</span>,{' '}
              <span className="mv-highlight">remember</span> and{' '}
              <span className="mv-highlight">trust</span>.
            </p>
          </div>

          {/* Central Architectural Spine */}
          <div className="mv-central-spine" aria-hidden="true">
            <div className="mv-spine-line" />
            <div className="mv-spine-node">✦</div>
            <div className="mv-spine-line" />
          </div>

          {/* 02. Vision Side */}
          <div className="mv-pillar-side">
            <div className="mv-indicator">
              <div className="mv-icon-halo">
                <Compass className="mv-icon" />
              </div>
              <span className="mv-tag-label">Vision</span>
            </div>

            <p className="mv-statement">
              To become a globally recognized digital studio known for{' '}
              <span className="mv-highlight">strategic thinking</span>,{' '}
              <span className="mv-highlight">creative execution</span> and{' '}
              <span className="mv-highlight">meaningful digital experiences</span>.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}