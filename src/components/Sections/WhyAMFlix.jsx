import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  Sparkles, 
  Cpu, 
  TrendingUp, 
  ArrowRight, 
  Eye, 
  Target 
} from 'lucide-react';
import { whyAMFlixData } from '../../data/WhyAMFlix';
import './WhyAMFlix.css';

export default function WhyAMFlix() {
  const getPillarIcon = (name) => {
    const props = { className: "w-5 h-5 text-[#F2A38F] shrink-0" };
    switch (name) {
      case 'Compass': return <Compass {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      default: return null;
    }
  };

  const { vision, mission } = whyAMFlixData.visionMission;

  return (
    <section className="why-section-wrapper" aria-labelledby="why-heading">
      <div className="why-container">
        
        {/* Header */}
        <div className="why-header">
          {/* <span className="why-badge">{whyAMFlixData.badge}</span> */}
          <h2 id="why-heading" className="why-title">{whyAMFlixData.heading}</h2>
          <p className="why-tagline">{whyAMFlixData.tagline}</p>
        </div>

        {/* 1. Linear Four Pillars: Icon -> Title -> Description */}
        <div className="why-linear-pillars">
          {whyAMFlixData.pillars.map((pillar) => (
            <div key={pillar.id} className="why-linear-row">
              <div className="why-linear-lead">
                <div className="why-linear-icon">
                  {getPillarIcon(pillar.icon)}
                </div>
                {/* <ArrowRight className="why-linear-arrow" /> */}
                <h3 className="why-linear-name">{pillar.title}</h3>
                <ArrowRight className="why-linear-arrow" />
              </div>
              <p className="why-linear-desc">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* 2. Vision & Mission */}
        <div className="why-vm-split">
          <div className="why-vm-column">
            <div className="why-vm-meta">
              <Eye className="w-4 h-4" />
              <span>Vision</span>
            </div>
            <h3 className="why-vm-heading">{vision.title}</h3>
            <h4 className="why-vm-sub">{vision.tagline}</h4>
            <p className="why-vm-text">{vision.description}</p>
          </div>

          <div className="why-vm-column">
            <div className="why-vm-meta">
              <Target className="w-4 h-4" />
              <span>Mission</span>
            </div>
            <h3 className="why-vm-heading">{mission.title}</h3>
            <h4 className="why-vm-sub">{mission.tagline}</h4>
            <p className="why-vm-text">{mission.description}</p>
          </div>
        </div>

        {/* 3. Industries */}
        <div className="why-industries-section">
          <h3 className="why-industries-title">{whyAMFlixData.industriesHeading}</h3>
          <div className="why-industries-line">
            {whyAMFlixData.industries.map((industry, index) => (
              <React.Fragment key={industry}>
                <Link to="/industries" className="why-industry-text">
                  {industry}
                </Link>
                {index < whyAMFlixData.industries.length - 1 && (
                  <span className="why-industry-sep">/</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}