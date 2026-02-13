import Image from 'next/image';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { SITE, IMAGES } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      {/* Background image with dark overlay */}
      <Image
        src={IMAGES.hero}
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-900/80 to-primary-950/70" />

      <Container className="relative max-w-3xl">
        <span className="inline-flex items-center rounded-full border border-primary-400/30 bg-white/10 px-3 py-1 text-xs font-semibold text-primary-200 backdrop-blur-sm">
          Built for Erasmus+ Youth Mobility
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Travel Reimbursements{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-accent-400">
            From Weeks to Minutes
          </span>
        </h1>

        <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-xl">
          EasyReimburse uses AI to automate travel reimbursement for Erasmus+ youth
          mobility projects. Participants upload their tickets. You get clean,
          compliant data. That&apos;s it.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Button href={SITE.registerUrl} size="lg">
            Start Free
          </Button>
          <Button href="/how-it-works" variant="outline" size="lg">
            See How It Works
          </Button>
        </div>

        <p className="mt-4 text-sm text-white/50">
          Free for up to 10 participants. No credit card needed.
        </p>
      </Container>
    </section>
  );
}
