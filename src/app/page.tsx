import Hero from '@/components/sections/Hero';
import Benefits from '@/components/sections/Benefits';
import HowItWorksPreview from '@/components/sections/HowItWorksPreview';
import TravelBanner from '@/components/sections/TravelBanner';
import SocialProof from '@/components/sections/SocialProof';
import CTABanner from '@/components/sections/CTABanner';
import HeroScreens from '@/components/sections/HeroScreens';
import { SITE } from '@/lib/constants';

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: SITE.name,
  url: SITE.url,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: SITE.description,
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: 0,
    highPrice: 899,
    offerCount: 4,
  },
  publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <Hero />
      <HeroScreens />
      <Benefits />
      <HowItWorksPreview />
      <TravelBanner />
      <SocialProof />
      <CTABanner />
    </>
  );
}
