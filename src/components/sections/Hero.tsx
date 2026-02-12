import {
  SparklesIcon,
  DocumentTextIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Container from '@/components/ui/Container';
import { SITE } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-primary-100/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] rounded-full bg-accent-400/10 blur-3xl" />
      </div>

      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <div>
            <Badge variant="outline" className="mb-6">
              Built for Erasmus+ Youth Mobility
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Travel Reimbursements{' '}
              <span className="gradient-text">From Weeks to Minutes</span>
            </h1>

            <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-xl">
              EasyReimburse uses AI to automate travel reimbursement for Erasmus+ youth
              mobility projects. Participants upload their tickets. You get clean,
              compliant data. That&apos;s it.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button href={SITE.registerUrl} size="lg">
                Start Free
              </Button>
              <Button href="/how-it-works" variant="secondary" size="lg">
                See How It Works
              </Button>
            </div>

            <p className="mt-4 text-sm text-text-muted">
              Free for up to 10 participants. No credit card needed.
            </p>
          </div>

          {/* Right column — abstract illustration */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto w-full max-w-md">
              {/* Gradient background blob */}
              <div className="absolute inset-0 gradient-brand rounded-3xl opacity-10 blur-2xl scale-110" />

              {/* Main card */}
              <div className="relative rounded-2xl bg-white p-8 shadow-2xl ring-1 ring-gray-100">
                <div className="space-y-5">
                  {/* Upload indicator */}
                  <div className="flex items-center gap-3 rounded-xl bg-primary-50 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-brand">
                      <DocumentTextIcon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">boarding_pass.pdf</p>
                      <p className="text-xs text-text-muted">Uploaded just now</p>
                    </div>
                  </div>

                  {/* AI processing */}
                  <div className="flex items-center gap-3 rounded-xl bg-accent-400/5 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500/10">
                      <SparklesIcon className="h-5 w-5 text-accent-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">AI Extracted Data</p>
                      <p className="text-xs text-text-muted">
                        Warsaw → Amsterdam &middot; &euro;127.50
                      </p>
                    </div>
                  </div>

                  {/* Approved */}
                  <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                      <CheckCircleIcon className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">Ready for Review</p>
                      <p className="text-xs text-text-muted">Auto-converted: PLN → EUR</p>
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
