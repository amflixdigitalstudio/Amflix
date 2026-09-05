import React from 'react';
import { Users, TrendingUp, Cpu, Hourglass } from 'lucide-react';
import './WhyDifferent.css';

export default function WhyDifferent() {
  const differentiators = [
    {
      num: '01',
      title: 'One Connected Team',
      desc: 'Strategy, design, tech, and marketing sit at the exact same table. Zero handoff friction or fragmented vision.',
      icon: <Users className="diff-icon" />
    },
    {
      num: '02',
      title: 'Business-First Thinking',
      desc: 'We don’t build art projects. Every creative choice and line of code directly drives pipeline, customer trust, and ROI.',
      icon: <TrendingUp className="diff-icon" />
    },
    {
      num: '03',
      title: 'Creative + Technology',
      desc: 'Modern aesthetics engineered on clean, scalable architecture. Built to convert attention into meaningful brand equity.',
      icon: <Cpu className="diff-icon" />
    },
    {
      num: '04',
      title: 'Long-Term Thinking',
      desc: 'We prioritize enduring value over cheap vanity hacks. We build assets, systems, and identities that scale with you.',
      icon: <Hourglass className="diff-icon" />
    }
  ];

  return (
    <section className="diff-section" aria-label="What Makes AMFlix Different">
      <div className="diff-ambient-glow" aria-hidden="true" />

      <div className="diff-container">
        {/* Header */}
        <div className="diff-header">
          <span className="diff-badge">The AMFlix Advantage</span>
          <h2 className="diff-title">
            What Makes AMFlix <span className="diff-title-accent">Different?</span>
          </h2>
        </div>

        {/* Dynamic Connected Quadrant */}
        <div className="diff-grid">
          {differentiators.map((item) => (
            <div key={item.num} className="diff-card">
              <div className="diff-card-top">
                <span className="diff-num">{item.num}</span>
                <div className="diff-icon-wrap">{item.icon}</div>
              </div>

              <div className="diff-card-body">
                <h3 className="diff-item-title">{item.title}</h3>
                <p className="diff-item-desc">{item.desc}</p>
              </div>

              <div className="diff-card-border-glow" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}