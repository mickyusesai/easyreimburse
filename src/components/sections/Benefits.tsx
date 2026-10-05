import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

const benefits = [
  {
    title: 'From Weeks to Minutes',
    description:
      'Stop chasing receipts and manually entering data. AI handles the heavy lifting so you can focus on what matters — your project.',
    image: '/illustrations/weeks-to-minutes.webp',
  },
  {
    title: 'AI Does the Data Entry',
    description:
      'Participants upload their travel documents. Our AI extracts routes, dates, costs, and flight numbers automatically.',
    image: '/illustrations/ai-data-entry.webp',
  },
  {
    title: 'AI Reviewer for Organisations',
    description:
      'Our AI reviewer checks every participant\'s reimbursement and gives you a clear overview of what should still be manually checked. This saves you days of work on every project.',
    image: '/illustrations/ai-reviewer.webp',
  },
  {
    title: 'Zero Friction for Participants',
    description:
      'No app downloads. No registration. No passwords. Participants use a simple magic link on any device and submit in minutes. They can add tickets during the project; when it ends we build their trips and remind everyone automatically. Need to follow up? Send one-click reminders to all participants who haven\'t completed their reimbursement yet.',
    image: '/illustrations/zero-friction.webp',
  },
  {
    title: 'Built for Erasmus+',
    description:
      'Purpose-built with official EU exchange rates, country reimbursement limits, declarations of honor, and full audit trails. Car trips at your per-km rate, Interrail passes, luggage fees and group bookings are all understood.',
    image: '/illustrations/built-for-erasmus.webp',
  },
  {
    title: 'Data Stored Safely in Europe',
    description:
      'Documents are stored in the EU jurisdiction of our storage provider and never leave Europe. Fully GDPR compliant.',
    image: '/illustrations/data-europe.webp',
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

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-2xl bg-white p-6 lg:p-8 ring-1 ring-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0">
                  <Image src={benefit.image} alt="" fill className="object-contain" sizes="64px" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary">{benefit.title}</h3>
              </div>
              <p className="mt-4 text-text-secondary leading-relaxed">{benefit.description}</p>
            </div>
          ))}

        </div>
      </Container>
    </section>
  );
}
