export const servicesPricingData = {
  branding: {
    id: 'branding',
    title: 'Branding',
    slug: 'branding',
    hero: {
      h1: 'Complete Branding Services',
      headline: 'Build a Brand That People Remember.',
      description:
        'From strategy and positioning to visual identity and brand guidelines, AMFlix creates complete branding systems designed to make businesses distinctive, consistent and memorable.',
      ctaText: 'Get Started',
      ctaLink: '/contact'
    },
    offeringsTitle: 'Our Branding Services',
    offerings: [
      'Brand Strategy',
      'Brand Positioning',
      'Brand Identity',
      'Logo Design',
      'Colour Palette',
      'Typography',
      'Brand Guidelines',
      'Business Stationery',
      'Social Media Branding',
      'Marketing Collateral',
      'Packaging Design',
      'Brand Launch Creative'
    ],
    packages: [
      {
        id: 'branding-basic',
        name: 'Brand Starter',
        tier: 'BASIC',
        price: '₹20,000',
        period: 'One-Time',
        description: 'For businesses that need a professional foundation.',
        popular: false,
        deliverables: [
          'Brand discovery',
          'Logo design',
          '2 logo concepts',
          'Colour palette',
          'Typography selection',
          'Basic brand guidelines',
          'Social media profile branding',
          'Business card',
          '2 revision rounds',
          'Final logo files'
        ],
        ctaText: 'Start My Brand',
        ctaLink: '/contact?service=branding&plan=starter'
      },
      {
        id: 'branding-pro',
        name: 'Brand Pro',
        tier: 'PRO',
        price: '₹40,000',
        period: 'One-Time',
        description: 'For businesses ready to go beyond basic branding.',
        popular: false,
        deliverables: [
          'Brand discovery',
          'Brand positioning',
          'Competitor research',
          'Logo system',
          'Colour palette',
          'Typography',
          'Brand guidelines',
          'Social media branding',
          'Business card',
          'Letterhead',
          '5 social media templates',
          'Marketing collateral',
          '3 revision rounds'
        ],
        ctaText: 'Choose Pro',
        ctaLink: '/contact?service=branding&plan=pro'
      },
      {
        id: 'branding-premium',
        name: 'Brand Signature',
        tier: 'PREMIUM',
        badge: 'MOST POPULAR',
        price: '₹50,000',
        period: 'One-Time',
        description: 'For businesses that want a complete and strategic brand identity.',
        popular: true,
        deliverables: [
          'Complete brand strategy',
          'Brand positioning',
          'Target audience research',
          'Competitor analysis',
          'Brand personality',
          'Brand messaging',
          'Complete logo system',
          'Primary & secondary logos',
          'Colour system',
          'Typography system',
          'Complete brand guidelines',
          'Social media branding',
          'Business card',
          'Letterhead',
          '10 social media templates',
          'Marketing collateral',
          'Brand launch creative direction',
          '4 revision rounds'
        ],
        ctaText: 'Build My Brand',
        ctaLink: '/contact?service=branding&plan=signature'
      }
    ],
    customScale: null
  },

  socialMedia: {
    id: 'social-media',
    title: 'Social Media Management',
    slug: 'social-media-management',
    hero: {
      h1: 'Social Media Management',
      headline: 'Turn Your Social Media Into a Growth Engine.',
      description:
        'We create, manage and optimize your social media presence with strategy-driven content, creative storytelling and consistent brand communication.',
      ctaText: 'Get Started',
      ctaLink: '/contact'
    },
    offeringsTitle: 'What We Manage',
    offerings: [
      'Social Media Strategy',
      'Content Planning',
      'Instagram Management',
      'Facebook Management',
      'LinkedIn Management',
      'Content Creation',
      'Reels',
      'Stories',
      'Carousel Posts',
      'Captions',
      'Hashtag & Keyword Research',
      'Community Management',
      'Performance Analytics',
      'Campaign Planning'
    ],
    packages: [
      {
        id: 'social-basic',
        name: 'Social Starter',
        tier: 'BASIC',
        price: '₹20,000',
        period: '/ Month',
        description: 'Consistent social activity and essential engagement for starting brands.',
        popular: false,
        deliverables: [
          '8 Posts',
          '4 Reels',
          '8 Stories',
          'Content calendar',
          'Caption writing',
          'Hashtag research',
          'Basic strategy',
          'Monthly report',
          '2 revision rounds'
        ],
        ctaText: 'Start Growing',
        ctaLink: '/contact?service=social-media&plan=starter'
      },
      {
        id: 'social-pro',
        name: 'Social Growth',
        tier: 'PRO',
        price: '₹40,000',
        period: '/ Month',
        description: 'Expanded visual storytelling designed to accelerate follower momentum.',
        popular: false,
        deliverables: [
          '12 Posts',
          '8 Reels',
          '12 Stories',
          'Advanced content strategy',
          'Content calendar',
          'Creative direction',
          'Copywriting',
          'Trend research',
          'Community management',
          'Engagement strategy',
          'Campaign planning',
          'Performance analysis',
          'Monthly strategy meeting'
        ],
        ctaText: 'Choose Growth',
        ctaLink: '/contact?service=social-media&plan=growth'
      },
      {
        id: 'social-premium',
        name: 'Social Pro',
        tier: 'PREMIUM',
        badge: 'MOST POPULAR',
        price: '₹50,000',
        period: '/ Month',
        description: 'Complete high-retention distribution engine with influencer and priority support.',
        popular: true,
        deliverables: [
          '16 Posts',
          '12 Reels',
          '20+ Stories',
          'Advanced content strategy',
          'Creative direction',
          'Professional copywriting',
          'Trend research',
          'Community management',
          'Engagement strategy',
          'Campaign planning',
          'Influencer coordination',
          'Advanced analytics',
          'Performance optimization',
          'Monthly strategy meeting',
          'Advanced reporting',
          'Priority support'
        ],
        ctaText: 'Go Premium',
        ctaLink: '/contact?service=social-media&plan=pro'
      }
    ],
    customScale: null
  },

  digitalMarketing: {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    hero: {
      h1: 'Digital Marketing Services',
      headline: 'Get Found. Get Noticed. Get Results.',
      description:
        'AMFlix combines SEO, paid advertising, audience targeting and conversion strategy to help businesses grow their digital presence.',
      ctaText: 'Get Started',
      ctaLink: '/contact'
    },
    offeringsTitle: 'Our Digital Marketing Services',
    offerings: [
      'SEO',
      'Local SEO',
      'Technical SEO',
      'On-Page SEO',
      'Off-Page SEO',
      'Google Ads',
      'Meta Ads',
      'Lead Generation',
      'Performance Marketing',
      'Retargeting',
      'Conversion Optimization',
      'Analytics',
      'Campaign Strategy'
    ],
    packages: [
      {
        id: 'marketing-basic',
        name: 'Marketing Starter',
        tier: 'BASIC',
        price: '₹15,000',
        period: '/ Month',
        description: 'Essential paid advertising setup and foundational search optimization.',
        popular: false,
        note: 'Ad spend separate.',
        deliverables: [
          'Digital marketing strategy',
          'Basic SEO',
          'Meta Ads management',
          'Google Ads management',
          'Keyword research',
          'Campaign setup',
          'Campaign monitoring',
          'Monthly report'
        ],
        ctaText: 'Start Marketing',
        ctaLink: '/contact?service=digital-marketing&plan=starter'
      },
      {
        id: 'marketing-pro',
        name: 'Marketing Growth',
        tier: 'PRO',
        price: '₹30,000',
        period: '/ Month',
        description: 'Full-funnel audience retargeting and on-page technical search optimization.',
        popular: false,
        note: 'Ad spend separate.',
        deliverables: [
          'Digital marketing strategy',
          'Advanced SEO',
          'On-page SEO',
          'Local SEO',
          'Meta Ads',
          'Google Ads',
          'Audience research',
          'Lead generation',
          'Retargeting',
          'Conversion optimization',
          'Analytics',
          'Monthly reporting',
          'Performance analysis'
        ],
        ctaText: 'Choose Growth',
        ctaLink: '/contact?service=digital-marketing&plan=growth'
      },
      {
        id: 'marketing-premium',
        name: 'Marketing Pro',
        tier: 'PREMIUM',
        badge: 'MOST POPULAR',
        price: '₹40,000',
        period: '/ Month',
        description: 'Aggressive multi-channel acquisition strategy with technical SEO and funnel audits.',
        popular: true,
        note: 'Ad spend separate.',
        deliverables: [
          'Complete digital strategy',
          'Advanced SEO',
          'Technical SEO',
          'On-page SEO',
          'Local SEO',
          'Meta Ads',
          'Google Ads',
          'Retargeting',
          'Lead generation',
          'Funnel strategy',
          'Audience research',
          'Conversion optimization',
          'Competitor analysis',
          'Analytics & tracking',
          'Performance optimization',
          'Monthly strategy meetings',
          'Advanced reporting'
        ],
        ctaText: 'Go Premium',
        ctaLink: '/contact?service=digital-marketing&plan=pro'
      }
    ],
    customScale: {
      headline: 'Large-Scale Marketing',
      title: 'Need More?',
      description:
        'For businesses requiring large-scale campaigns, multiple platforms, high-volume advertising, extensive SEO or customized marketing requirements, we create a custom plan.',
      ctaText: 'Contact Us for Custom Pricing',
      ctaLink: '/contact?service=digital-marketing&plan=custom'
    }
  },

  websiteDev: {
    id: 'website-development',
    title: 'Website Development',
    slug: 'website-design-development',
    hero: {
      h1: 'Website Design & Development',
      headline: 'Websites Built to Represent Your Business.',
      description:
        'We design and develop modern, responsive and conversion-focused websites that combine beautiful UI/UX with reliable technology.',
      ctaText: 'Get Started',
      ctaLink: '/contact'
    },
    offeringsTitle: 'What We Build',
    offerings: [
      'Business Websites',
      'Corporate Websites',
      'Portfolio Websites',
      'E-commerce Websites',
      'Landing Pages',
      'CMS Websites',
      'Custom Web Applications',
      'API Integrations',
      'Website Redesigns',
      'SEO-Friendly Websites'
    ],
    packages: [
      {
        id: 'web-basic',
        name: 'Website Starter',
        tier: 'BASIC',
        price: '₹20,000',
        period: 'One-Time',
        description: 'Modern, responsive launchpad for single brands and professional portfolios.',
        popular: false,
        note: 'Domain & hosting separate.',
        deliverables: [
          'Up to 5 pages',
          'Responsive design',
          'Custom UI',
          'Contact form',
          'Basic SEO',
          'Mobile optimization',
          'Social media integration',
          'Basic performance optimization',
          'Deployment'
        ],
        ctaText: 'Build My Website',
        ctaLink: '/contact?service=website-development&plan=starter'
      },
      {
        id: 'web-pro',
        name: 'Business Website',
        tier: 'PRO',
        price: '₹50,000',
        period: 'One-Time',
        description: 'Dynamic CMS-driven web platform with search analytics and conversion forms.',
        popular: false,
        deliverables: [
          'Up to 10 pages',
          'Custom UI/UX',
          'Responsive development',
          'CMS',
          'Blog',
          'SEO setup',
          'Analytics',
          'Search Console',
          'Lead forms',
          'Performance optimization',
          'Social integrations',
          'Deployment'
        ],
        ctaText: 'Choose Business',
        ctaLink: '/contact?service=website-development&plan=business'
      },
      {
        id: 'web-premium',
        name: 'Website Pro',
        tier: 'PREMIUM',
        badge: 'MOST POPULAR',
        price: '₹60,000',
        period: 'One-Time',
        description: 'Enterprise architecture with custom technical SEO, API wiring and post-launch support.',
        popular: true,
        deliverables: [
          'Advanced UI/UX',
          'Up to 20 pages',
          'Custom functionality',
          'CMS',
          'Blog',
          'Advanced SEO architecture',
          'Technical SEO setup',
          'Analytics',
          'Search Console',
          'Conversion optimization',
          'API integrations',
          'Advanced forms',
          'Performance optimization',
          'Security configuration',
          'Deployment',
          'Post-launch support'
        ],
        ctaText: 'Build My Website',
        ctaLink: '/contact?service=website-development&plan=pro'
      }
    ],
    customScale: {
      headline: 'Large-Scale Websites',
      title: 'Need Something Bigger?',
      description:
        'For large-scale websites, e-commerce platforms, custom web applications, advanced integrations and websites with extensive features, AMFlix creates a custom solution.',
      disclaimer: 'Domain, hosting, premium plugins, APIs and third-party services are separate unless specified.',
      ctaText: 'Contact Us for Custom Pricing',
      ctaLink: '/contact?service=website-development&plan=custom'
    }
  },

  mobileAppDev: {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    hero: {
      h1: 'Mobile App Development',
      headline: 'Turn Your App Idea Into a Digital Product.',
      description:
        'From MVPs to feature-rich applications, AMFlix combines product strategy, UX/UI and development to build mobile experiences.',
      ctaText: 'Get Started',
      ctaLink: '/contact'
    },
    offeringsTitle: 'What We Build',
    offerings: [
      'Business Apps',
      'E-commerce Apps',
      'Service Apps',
      'Booking Apps',
      'Marketplace Apps',
      'Customer Apps',
      'MVPs',
      'Android Apps',
      'iOS Apps',
      'Backend Systems',
      'Admin Panels',
      'API Integrations'
    ],
    packages: [
      {
        id: 'app-basic',
        name: 'App Starter',
        tier: 'BASIC',
        price: '₹80,000+',
        period: 'One-Time',
        description: 'Streamlined MVP build on Android with secure auth and basic database services.',
        popular: false,
        deliverables: [
          'Product consultation',
          'Basic UX/UI',
          'Up to 8 screens',
          'Android development',
          'Basic backend',
          'Database',
          'Authentication',
          'Testing',
          'Deployment assistance'
        ],
        ctaText: 'Build My App',
        ctaLink: '/contact?service=mobile-app-development&plan=starter'
      },
      {
        id: 'app-pro',
        name: 'App Business',
        tier: 'PRO',
        price: '₹2,50,000+',
        period: 'One-Time',
        description: 'Cross-platform Android & iOS product with admin control panel and push messaging.',
        popular: false,
        deliverables: [
          'Product consultation',
          'Complete UX/UI',
          'Android + iOS',
          'Backend development',
          'Database',
          'Authentication',
          'API integrations',
          'Push notifications',
          'Admin panel',
          'Analytics',
          'Testing',
          'Deployment assistance'
        ],
        ctaText: 'Choose Business',
        ctaLink: '/contact?service=mobile-app-development&plan=business'
      },
      {
        id: 'app-premium',
        name: 'App Pro',
        tier: 'PREMIUM',
        badge: 'MOST POPULAR',
        price: '₹3,00,000+',
        period: 'One-Time',
        description: 'End-to-end multi-platform app with payment gateways, store launch and security hardening.',
        popular: true,
        deliverables: [
          'Product strategy',
          'Complete UX/UI',
          'Android + iOS',
          'Advanced backend',
          'Database architecture',
          'Authentication',
          'Payment integration',
          'Multiple API integrations',
          'Push notifications',
          'Advanced admin dashboard',
          'Analytics',
          'Security optimization',
          'Performance optimization',
          'Testing',
          'Play Store deployment',
          'App Store deployment',
          'Post-launch support'
        ],
        ctaText: 'Build My App',
        ctaLink: '/contact?service=mobile-app-development&plan=pro'
      }
    ],
    customScale: {
      headline: 'Large-Scale Applications',
      title: 'Building Something Bigger?',
      description:
        'For large-scale applications, marketplaces, complex platforms, advanced backend systems, multiple integrations or extensive features, AMFlix provides customized development solutions.',
      ctaText: 'Contact Us for Custom Pricing',
      ctaLink: '/contact?service=mobile-app-development&plan=custom'
    }
  },

  designVideo: {
    id: 'design-video',
    title: 'Design & Video Editing',
    slug: 'design-video',
    hero: {
      h1: 'Design & Video Editing Services',
      headline: 'Make Your Brand Impossible to Ignore.',
      description:
        'From social media creatives to promotional videos, AMFlix creates visual content designed to communicate, engage and convert.',
      ctaText: 'Get Started',
      ctaLink: '/contact'
    },
    offeringsTitle: 'Our Creative Services',
    offerings: [
      'Social Media Designs',
      'Carousel Designs',
      'Advertisement Creatives',
      'Posters',
      'Banners',
      'Brochures',
      'Presentations',
      'Brand Collateral',
      'Reels',
      'Short-form Videos',
      'Promotional Videos',
      'Motion Graphics',
      'Video Editing',
      'Campaign Creatives'
    ],
    packages: [
      {
        id: 'design-basic',
        name: 'Creative Starter',
        tier: 'BASIC',
        price: '₹10,000',
        period: '/ Month',
        description: 'Routine graphic design assets and short video editing support for small teams.',
        popular: false,
        deliverables: [
          '10 Graphic Designs',
          '4 Video Edits',
          'Social media creatives',
          'Basic Reels',
          'Ad creatives',
          '2 revision rounds'
        ],
        ctaText: 'Start Creating',
        ctaLink: '/contact?service=design-video&plan=starter'
      },
      {
        id: 'design-pro',
        name: 'Creative Growth',
        tier: 'PRO',
        price: '₹25,000',
        period: '/ Month',
        description: 'Multi-format creative production with motion graphics and campaign scheduling.',
        popular: false,
        deliverables: [
          '20 Graphic Designs',
          '8 Video Edits',
          'Reels',
          'Carousels',
          'Ad creatives',
          'Promotional designs',
          'Motion graphics',
          'Campaign creatives',
          '3 revision rounds',
          'Monthly creative planning'
        ],
        ctaText: 'Choose Growth',
        ctaLink: '/contact?service=design-video&plan=growth'
      },
      {
        id: 'design-premium',
        name: 'Creative Pro',
        tier: 'PREMIUM',
        badge: 'MOST POPULAR',
        price: '₹30,000',
        period: '/ Month',
        description: 'Dedicated creative desk with priority turnaround and brand art direction.',
        popular: true,
        deliverables: [
          '30+ Graphic Designs',
          '12+ Video Edits',
          'Advanced Reels',
          'Advanced video editing',
          'Motion graphics',
          'Ad creatives',
          'Campaign creatives',
          'Promotional videos',
          'Brand campaign design',
          'Creative direction',
          'Priority delivery',
          'Priority support'
        ],
        ctaText: 'Go Premium',
        ctaLink: '/contact?service=design-video&plan=pro'
      }
    ],
    customScale: null
  }
};

export const whyChooseAMFlixData = {
  title: 'Why Choose AMFlix?',
  reasons: [
    {
      title: 'Strategy',
      description: 'We start by understanding your business and objectives.'
    },
    {
      title: 'Creativity',
      description: 'We create distinctive visual and digital experiences.'
    },
    {
      title: 'Technology',
      description: 'We use modern technology to build reliable digital solutions.'
    },
    {
      title: 'Growth',
      description: 'Our work is designed around long-term business goals.'
    },
    {
      title: 'One Digital Studio',
      description: 'Branding, marketing, technology and creative services under one roof.'
    }
  ]
};

export const commonFinalCTAData = {
  badge: 'Ready to Build, Brand & Grow?',
  headline: "Let's Build Something Great.",
  description: "Whether you're starting something new or taking an existing business to the next level, AMFlix can help.",
  primaryAction: {
    label: 'Start Your Project',
    href: '/contact'
  },
  secondaryAction: {
    label: 'Get a Custom Quote',
    href: '/contact?type=custom-quote'
  }
};