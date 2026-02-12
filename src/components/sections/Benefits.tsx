import {
  ClockIcon,
  SparklesIcon,
  DevicePhoneMobileIcon,
  GlobeEuropeAfricaIcon,
} from '@heroicons/react/24/outline';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

const benefits = [
  {
    title: 'From Weeks to Minutes',
    description:
      'Stop chasing receipts and manually entering data. AI handles the heavy lifting so you can focus on what matters — your project.',
    icon: ClockIcon,
  },
  {
    title: 'AI Does the Data Entry',
    description:
      'Participants photograph their travel documents. Our AI extracts routes, dates, costs, and flight numbers automatically.',
    icon: SparklesIcon,
  },
  {
    title: 'Zero Friction for Participants',
    description:
      'No app downloads. No registration. No passwords. Participants use a simple magic link on any device and submit in minutes.',
    icon: DevicePhoneMobileIcon,
  },
  {
    title: 'Built for Erasmus+',
    description:
      'Purpose-built with official EU exchange rates, country reimbursement limits, declarations of honor, and full audit trails.',
    icon: GlobeEuropeAfricaIcon,
  },
];

export default function Benefits() {
  return (
    <section className="py-20 lg:py-28 bg-surface-alt">
      <Container>
        <SectionHeading
          title="Why Organizations Choose EasyReimburse"
          subtitle="Save time, reduce errors, and make life easier for everyone involved."
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="group rounded-2xl bg-white p-6 lg:p-8 ring-1 ring-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-brand mb-5">
                <benefit.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary">{benefit.title}</h3>
              <p className="mt-2 text-text-secondary leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
