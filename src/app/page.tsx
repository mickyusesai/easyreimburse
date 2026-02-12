import Hero from '@/components/sections/Hero';
import Benefits from '@/components/sections/Benefits';
import HowItWorksPreview from '@/components/sections/HowItWorksPreview';
import TravelBanner from '@/components/sections/TravelBanner';
import SocialProof from '@/components/sections/SocialProof';
import CTABanner from '@/components/sections/CTABanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <HowItWorksPreview />
      <TravelBanner />
      <SocialProof />
      <CTABanner />
    </>
  );
}
