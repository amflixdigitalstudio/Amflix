export const navbarData = {
  logo: {
    src: "/Logo.png",
    alt: "AMFlix Digital Studio",
    path: "/"
  },
  // Desktop navigation items
  desktopNavLinks: [
    { name: 'Home', path: '/' },
    { 
      name: 'Pricing', 
      path: '/ServicePricing',
      hasDropdown: true,
      subServices: [
        { name: 'Branding', path: '/services/branding', desc: 'Strategy, positioning & visual identity' },
        { name: 'Social Media', path: '/services/social-media-management', desc: 'Strategy, content & growth' },
        { name: 'Digital Marketing', path: '/services/digital-marketing', desc: 'Paid ads, SEO & performance' },
        { name: 'Website Design & Dev', path: '/services/website-design-development', desc: 'Custom UI/UX & web development' },
        { name: 'Mobile App Dev', path: '/services/mobile-app-development', desc: 'iOS & Android app solutions' },
        { name: 'Design & Video', path: '/services/design-video', desc: 'Motion, video editing & graphics' },
      ]
    },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Industries', path: '/industries' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' },
  ],
  // Mobile app bottom dock
  mobileBottomLinks: [
    { name: 'Home', path: '/' },
    { name: 'Pricing', path: '/ServicePricing' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ],
  // Mobile slide-out drawer items
  drawerMenu: {
    topPages: [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
      { name: 'Work / Portfolio', path: '/work' },
      { name: 'Industries', path: '/industries' },
      { name: 'Bangalore Studio', path: '/locations/bangalore' },
      { name: 'Insights', path: '/insights' },
      { name: 'FAQs', path: '/faq' },
    ],
    servicesMain: { name: 'All Pricing', path: '/ServicePricing' },
    subServices: [
      { name: 'Branding', path: '/services/branding' },
      { name: 'Social Media', path: '/services/social-media-management' },
      { name: 'Digital Marketing', path: '/services/digital-marketing' },
      { name: 'Website Design & Dev', path: '/services/website-design-development' },
      { name: 'Mobile App Dev', path: '/services/mobile-app-development' },
      { name: 'Design & Video', path: '/services/design-video' },
    ],
    legalPages: [
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Terms & Conditions', path: '/terms' },
    ]
  },
  cta: {
    text: "Start a Project",
    path: "/contact"
  }
};