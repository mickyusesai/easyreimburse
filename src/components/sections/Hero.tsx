import Image from 'next/image';
import {
  SparklesIcon,
  DocumentTextIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
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

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <div>
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
          </div>

          {/* Right column — card mockup */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto w-full max-w-md">
              {/* Main card */}
              <div className="relative rounded-2xl bg-white/10 backdrop-blur-md p-8 ring-1 ring-white/20 shadow-2xl">
                <div className="space-y-5">
                  {/* Upload indicator */}
                  <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-brand">
                      <DocumentTextIcon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">boarding_pass.pdf</p>
                      <p className="text-xs text-white/50">Uploaded just now</p>
                    </div>
                  </div>

                  {/* AI processing */}
                  <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500/20">
                      <SparklesIcon className="h-5 w-5 text-accent-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">AI Extracted Data</p>
                      <p className="text-xs text-white/50">
                        Warsaw &rarr; Amsterdam &middot; &euro;127.50
                      </p>
                    </div>
                  </div>

                  {/* Approved */}
                  <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/20">
                      <CheckCircleIcon className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Ready for Review</p>
                      <p className="text-xs text-white/50">Auto-converted: PLN &rarr; EUR</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
