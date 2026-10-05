import type { Metadata } from 'next';
import {
  ChevronDownIcon,
  FolderOpenIcon,
  ArrowTrendingUpIcon,
  UserIcon,
  UserGroupIcon,
  GlobeEuropeAfricaIcon,
  PaperAirplaneIcon,
  CreditCardIcon,
  ClockIcon,
  BoltIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import Container from '@/components/ui/Container';
import PageHeader from '@/components/ui/PageHeader';
import Button from '@/components/ui/Button';
import PricingTable from '@/components/sections/PricingTable';
import CTABanner from '@/components/sections/CTABanner';
import { IMAGES, SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Simple, transparent pricing for Erasmus+ travel reimbursement. Try for free with up to 10 participants.',
};

const faqs = [
  {
    q: 'What counts as a project?',
    icon: FolderOpenIcon,
    a: 'A project corresponds to a single Erasmus+ youth mobility activity — typically a youth exchange or training course. Each project has its own participants, documents, and reimbursement data.',
  },
  {
    q: 'Can I upgrade from the Free plan?',
    icon: ArrowTrendingUpIcon,
    a: 'Yes! Your test project keeps all its data: one credit turns it into a full project with 60 participants. When you need more, simply purchase a project credit or pack. Credits never expire.',
  },
  {
    q: 'Is there a per-participant fee?',
    icon: UserIcon,
    a: 'No. You only pay per project, not per person. Each paid project supports up to 60 participants.',
  },
  {
    q: 'What if my project has more than 60 participants?',
    icon: UserGroupIcon,
    a: 'Use one extra credit to expand the same project by 60 more participants. Our pricing is structured this way to keep it fair for everyone and to prevent misuse of the software. Most Erasmus+ youth mobility projects fall well within the 60-participant limit.',
  },
  {
    q: 'Do you support green travel?',
    icon: GlobeEuropeAfricaIcon,
    a: 'Yes. Mark a country as green travel for a higher limit, require a signed green-travel declaration, and add a food and accommodation extra per participant from their uploaded receipts.',
  },
  {
    q: 'Which transport modes are supported?',
    icon: PaperAirplaneIcon,
    a: 'Plane, train, bus, ferry and car (per-km rate with carpooling). Interrail passes, luggage fees and group bookings are handled.',
  },
  {
    q: 'What payment methods do you accept?',
    icon: CreditCardIcon,
    a: 'We accept all major credit and debit cards through Stripe. Payments are processed securely — we never see your card details.',
  },
  {
    q: 'Do credits expire?',
    icon: ClockIcon,
    a: 'No. Project credits never expire. Use them whenever you need them, even if that\'s months or years after purchase.',
  },
  {
    q: 'How much energy does EasyReimburse use?',
    icon: BoltIcon,
    a: 'Though many people think AI takes enormous amounts of energy, for a project of 50 people with all AI tools embedded in our software, the estimated energy use is only 1 kWh. That equals only half a day of laptop usage. And exactly that — using your laptop for such a long time — is what you don\'t have to do anymore if you have EasyReimburse.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHeader
        title="Simple, Transparent Pricing"
        subtitle="Try for free. Scale as you grow. No hidden fees. No subscriptions required."
        imageSrc={IMAGES.pricing}
        imageAlt="European cityscape"
      />

      <section className="py-20 lg:py-28">
        <Container>
          <PricingTable />

          {/* Custom needs callout */}
          <div className="mt-12 rounded-2xl gradient-brand p-8 lg:p-10 text-center">
            <h3 className="text-2xl font-bold text-white">Need a custom solution?</h3>
            <p className="mt-3 text-white/80 max-w-md mx-auto">
              Running a large number of projects or have specific requirements? Get in touch and we&apos;ll find the right setup for your organisation.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-surface-alt">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[20rem_1fr] lg:gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <p className="text-sm font-semibold uppercase tracking-wider gradient-text">FAQ</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-text-secondary">
                Everything you need to know about pricing, credits and what&apos;s included.
              </p>
              <div className="mt-8 rounded-2xl bg-white p-6 ring-1 ring-gray-100 shadow-sm">
                <p className="font-semibold text-text-primary">Still have a question?</p>
                <p className="mt-1 text-sm text-text-secondary">Ask Micky directly, he usually replies within the day.</p>
                <WhatsAppButton className="mt-5 w-full" />
                <a
                  href={`mailto:${SITE.contactEmail}`}
                  className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700"
                >
                  <EnvelopeIcon className="h-4 w-4" />
                  {SITE.contactEmail}
                </a>
              </div>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details
                  key={faq.q}
                  open={i === 0}
                  className="group rounded-2xl bg-white ring-1 ring-gray-100 shadow-sm transition-shadow open:shadow-md open:ring-primary-200"
                >
                  <summary className="flex cursor-pointer list-none items-center gap-4 p-5 text-left [&::-webkit-details-marker]:hidden">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-open:gradient-brand group-open:text-white">
                      <faq.icon className="h-5 w-5" />
                    </span>
                    <span className="flex-1 font-semibold text-text-primary">{faq.q}</span>
                    <ChevronDownIcon className="h-5 w-5 text-text-muted shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="pb-5 pl-[4.75rem] pr-6 text-text-secondary leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
