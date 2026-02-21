export const SITE = {
  name: 'EasyReimburse',
  tagline: 'AI-Powered Travel Reimbursement for Erasmus+',
  url: 'https://easyreimburse.ai',
  appUrl: 'https://app.easyreimburse.ai',
  registerUrl: 'https://app.easyreimburse.ai/org/register',
  loginUrl: 'https://app.easyreimburse.ai/org/login',
  contactEmail: 'contact@easyreimburse.ai',
  description:
    'Automate travel reimbursement for Erasmus+ youth mobility projects. AI-powered document processing. From weeks to minutes.',
} as const;

export const NAV_LINKS = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Contact', href: '/contact' },
] as const;

export const PRICING_PLANS = [
  {
    name: 'Free',
    price: 0,
    unit: null,
    perProject: null,
    description: 'Perfect for trying EasyReimburse',
    features: [
      'Up to 10 participants',
      '1 project',
      'AI document processing',
      'Data export',
    ],
    cta: 'Try for Free',
    ctaHref: SITE.registerUrl,
    highlighted: false,
    badge: null,
  },
  {
    name: 'Single Project',
    price: 95,
    unit: '/project',
    perProject: null,
    description: 'For a single youth mobility project',
    features: [
      'Unlimited participants',
      '1 project credit',
      'AI document processing',
      'Priority data export',
      'Email support',
    ],
    cta: 'Get Started',
    ctaHref: SITE.registerUrl,
    highlighted: true,
    badge: 'Popular',
  },
  {
    name: '5-Pack',
    price: 395,
    unit: null,
    perProject: 79,
    description: 'For organizations running multiple projects',
    features: [
      'Unlimited participants',
      '5 project credits',
      'Everything in Single Project',
      'Bulk management tools',
    ],
    cta: 'Get Started',
    ctaHref: SITE.registerUrl,
    highlighted: false,
    badge: null,
  },
  {
    name: '10-Pack',
    price: 695,
    unit: null,
    perProject: 69.5,
    description: 'Maximum savings for active organizations',
    features: [
      'Unlimited participants',
      '10 project credits',
      'Everything in 5-Pack',
      'Priority support',
    ],
    cta: 'Get Started',
    ctaHref: SITE.registerUrl,
    highlighted: false,
    badge: 'Best Value',
  },
] as const;

export const ANNUAL_PLAN = {
  name: 'Annual License',
  price: 995,
  unit: '/year',
  description:
    'Unlimited projects for a full year. Best for organizations with ongoing Erasmus+ activities.',
  cta: 'Contact Us',
  ctaHref: '/contact',
} as const;

export const IMAGES = {
  hero: '/hero-rotterdam.png',
  features: '/features-rome.png',
  pricing: '/pricing-brussels.png',
  howItWorks: '/extra-neuschwanstein.png',
  contact: '/contact-prague.png',
  travel: '/travel-bled.png',
  cta: '/cta-athens.png',
} as const;
