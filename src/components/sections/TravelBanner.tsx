import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { SITE, IMAGES } from '@/lib/constants';

export default function TravelBanner() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background image */}
      <Image
        src={IMAGES.travel}
        alt="Scenic European travel landscape"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-900/80 to-primary-950/70" />

      <Container className="relative">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-300">
            Built by practitioners
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            We run Erasmus+ projects too
          </h2>
          <p className="mt-4 text-lg text-white/80 leading-relaxed">
            EasyReimburse was built by an organization that runs youth exchanges and training
            courses across Europe. We didn&apos;t just study the problem &mdash; we lived it.
            Every feature exists because we needed it ourselves.
          </p>
          <div className="mt-8">
            <Button href={SITE.registerUrl} variant="outline" size="lg">
              Try It Free
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
