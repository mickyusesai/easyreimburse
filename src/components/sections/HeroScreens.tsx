import Image from 'next/image';
import Container from '@/components/ui/Container';
import { SCREENSHOTS } from '@/lib/screenshots';

/** Real product screens, overlapping the bottom of the hero like a card. */
export default function HeroScreens() {
  const wide = SCREENSHOTS.heroThreePhones;
  const phone = SCREENSHOTS.pLandingLenaPhone;

  return (
    <section className="relative z-10 -mt-28 sm:-mt-36 lg:-mt-48 pb-4">
      <Container>
        <Image
          src={wide.src}
          width={wide.width}
          height={wide.height}
          alt="The participant app: upload documents, check AI-built trip cards, confirm and submit"
          className="hidden md:block mx-auto w-full max-w-5xl h-auto rounded-[2rem] ring-8 ring-white shadow-2xl shadow-primary-900/40"
          sizes="(max-width: 1024px) 100vw, 1024px"
          priority
        />
        <Image
          src={phone.src}
          width={phone.width}
          height={phone.height}
          alt="AI-built trip cards on a participant's phone"
          className="md:hidden mx-auto w-64 h-auto drop-shadow-2xl"
          sizes="256px"
          priority
        />
        <p className="mt-6 text-center text-sm text-text-secondary">
          The participant app: upload tickets, check the AI-built trips, confirm and submit.
        </p>
      </Container>
    </section>
  );
}
