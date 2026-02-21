import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { SITE, IMAGES } from '@/lib/constants';

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background image */}
      <Image
        src={IMAGES.cta}
        alt="The Parthenon in Athens"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-900/85 to-accent-600/75" />

      <Container className="relative text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to simplify your Erasmus+ reimbursements?
        </h2>
        <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
          Try it out first for up to 10 participants.
        </p>
        <div className="mt-8">
          <Button href={SITE.registerUrl} variant="outline" size="lg">
            Try for Free
          </Button>
        </div>
      </Container>
    </section>
  );
}
