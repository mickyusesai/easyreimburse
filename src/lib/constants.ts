export const SITE = {
  name: 'EasyReimburse',
  tagline: 'AI-Powered Travel Reimbursement for Erasmus+',
  url: 'https://easyreimburse.ai',
  appUrl: 'https://app.easyreimburse.ai',
  registerUrl: 'https://app.easyreimburse.ai/register',
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
    cta: 'Start Free',
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
  hero: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=1920&q=80',
  features: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80',
  pricing: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1920&q=80',
  howItWorks: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1920&q=80',
  contact: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=80',
  travel: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80',
} as const;
