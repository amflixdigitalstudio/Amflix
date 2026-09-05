import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import './AppDevelopmentFAQ.css';

export default function AppDevelopmentFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const appFaqs = [
    {
      q: 'Does AMFlix provide mobile app development?',
      a: 'Yes. AMFlix provides mobile app strategy, UX/UI design, development, backend integration, testing and deployment.'
    },
    {
      q: 'Can you develop both Android and iOS apps?',
      a: 'Yes. Android and iOS development can be included depending on the project requirements.'
    },
    {
      q: 'Can you turn my app idea into an MVP?',
      a: 'Yes. AMFlix can help define the core features and develop an MVP for testing and launching your idea.'
    },
    {
      q: 'What types of mobile apps can you develop?',
      a: 'AMFlix can develop business apps, e-commerce apps, booking apps, service apps, marketplace applications and other custom mobile applications.'
    },
    {
      q: 'Does mobile app development include UI/UX design?',
      a: 'Yes. UI/UX design can be included depending on the selected package.'
    },
    {
      q: 'Can you integrate payment gateways?',
      a: 'Yes. Payment integration can be included for applications that require online payments.'
    },
    {
      q: 'Can you build an admin panel for my app?',
      a: 'Yes. Admin dashboards can be developed for managing users, content, transactions and other application data.'
    },
    {
      q: 'Can you integrate APIs?',
      a: 'Yes. Third-party APIs and custom APIs can be integrated according to the application\'s requirements.'
    },
    {
      q: 'How much does mobile app development cost?',
      a: 'AMFlix mobile app development starts from ₹80,000. Final pricing depends on features, platforms and technical complexity.'
    },
    {
      q: 'How long does app development take?',
      a: 'The timeline depends on the number of screens, features, integrations, platforms and development requirements.'
    },
    {
      q: 'Do you provide app maintenance after launch?',
      a: 'Yes. Ongoing maintenance, updates, bug fixes and technical support can be provided separately.'
    },
    {
      q: 'Can you develop large-scale applications?',
      a: 'Yes. AMFlix can develop large-scale applications with advanced features and custom architecture. Contact us for custom pricing.'
    }
  ];

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="app-faq-wrapper" aria-label="Mobile App Development Frequently Asked Questions">
      <div className="app-faq-glow" aria-hidden="true" />

      <div className="app-faq-container">
        
        {/* Header */}
        <div className="app-faq-header">
          <div className="app-faq-badge">
            <HelpCircle className="w-3.5 h-3.5 text-terracotta" />
            <span>Support &amp; Clarity</span>
          </div>

          <span className="app-faq-subtag">Mobile App Development — FAQ</span>
          <h2 className="app-faq-title">Frequently Asked Questions</h2>
        </div>

        {/* Accordion Stack */}
        <div className="app-faq-stack">
          {appFaqs.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx} 
                className={`app-faq-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="app-faq-q-btn"
                  onClick={() => handleToggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="app-faq-q-text">
                    <span className="app-faq-q-num">{idx + 1}.</span> {item.q}
                  </span>
                  <div className="app-faq-icon-bubble">
                    <ChevronDown className={`app-faq-chevron ${isOpen ? 'rotate' : ''}`} />
                  </div>
                </button>

                {isOpen && (
                  <div className="app-faq-answer">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}