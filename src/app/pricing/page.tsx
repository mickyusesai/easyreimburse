import type { Metadata } from 'next';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import PageHeader from '@/components/ui/PageHeader';
import Button from '@/components/ui/Button';
import PricingTable from '@/components/sections/PricingTable';
import CTABanner from '@/components/sections/CTABanner';
import { ANNUAL_PLAN, IMAGES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Simple, transparent pricing for Erasmus+ travel reimbursement. Try for free with up to 10 participants.',
};

const faqs = [
  {
    q: 'What counts as a project?',
    a: 'A project corresponds to a single Erasmus+ youth mobility activity — typically a youth exchange or training course. Each project has its own participants, documents, and reimbursement data.',
  },
  {
    q: 'Can I upgrade from the Free plan?',
    a: 'Yes! Your free test project stays available. When you need more, simply purchase a project credit or pack. Credits never expire.',
  },
  {
    q: 'Is there a per-participant fee?',
    a: 'No. You only pay per project, not per person. Each paid project supports up to 60 participants.',
  },
  {
    q: 'What if my project has more than 60 participants?',
    a: 'If your project has more than 60 participants, you can use an additional project credit. Our pricing is structured this way to keep it fair for everyone and to prevent misuse of the software. Most Erasmus+ youth mobility projects fall well within the 60-participant limit.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit and debit cards through Stripe. Payments are processed securely — we never see your card details.',
  },
  {
    q: 'Do credits expire?',
    a: 'No. Project credits never expire. Use them whenever you need them, even if that\'s months or years after purchase.',
  },
  {
    q: 'How much energy does EasyReimburse use?',
    a: 'Though many people think AI takes enormous amounts of energy, for a project of 50 people with all AI tools embedded in our software, the estimated energy use is only 1 kWh. That equals only half a day of laptop usage. And exactly that — using your laptop for such a long time — is what you don\'t have to do anymore if you have EasyReimburse.',
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Simple, Transparent Pricing"
        subtitle="Try for free. Scale as you grow. No hidden fees. No subscriptions required."
        imageSrc={IMAGES.pricing}
        imageAlt="European cityscape"
      />

      <section className="py-20 lg:py-28">
        <Container>
          <PricingTable />

          {/* Annual plan callout */}
          <div className="mt-12 rounded-2xl gradient-brand p-8 lg:p-10 text-center">
            <h3 className="text-2xl font-bold text-white">{ANNUAL_PLAN.name}</h3>
            <p className="mt-2 text-4xl font-bold text-white">
              &euro;{ANNUAL_PLAN.price}
              <span className="text-lg font-normal text-white/70">{ANNUAL_PLAN.unit}</span>
            </p>
            <p className="mt-3 text-white/80 max-w-md mx-auto">{ANNUAL_PLAN.description}</p>
            <div className="mt-6">
              <Button href={ANNUAL_PLAN.ctaHref} variant="outline">
                {ANNUAL_PLAN.cta}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-surface-alt">
        <Container>
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our pricing."
          />
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl bg-white ring-1 ring-gray-200 overflow-hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between p-5 text-left font-medium text-text-primary hover:bg-gray-50 transition-colors">
                  {faq.q}
                  <ChevronDownIcon className="h-5 w-5 text-text-muted shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-5 pb-5 text-sm text-text-secondary leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
