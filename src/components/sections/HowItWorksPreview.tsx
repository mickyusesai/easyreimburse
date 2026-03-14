import Image from 'next/image';
import {
  PlusCircleIcon,
  CameraIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const WEBINAR_URL =
  'https://demodernenomaden.webinargeek.com/watch/replay/5881946/4e1321d1207d3ec61d9cbb388f53c2e7/';

const steps = [
  {
    number: '1',
    title: 'Create Your Project',
    description:
      'Set up your mobility project in minutes. Import participants via CSV or add them manually one by one.',
    icon: PlusCircleIcon,
  },
  {
    number: '2',
    title: 'Participants Upload Documents',
    description:
      'Participants upload boarding passes, tickets, and invoices. AI extracts all the data automatically and lets them know what\'s still missing.',
    icon: CameraIcon,
  },
  {
    number: '3',
    title: 'AI Review for Organisations',
    description:
      'The AI reviews all the files and lets you know what still needs to be manually checked. Once approved you can download an Audit PDF when needed for the national agency.',
    icon: ShieldCheckIcon,
  },
];

export default function HowItWorksPreview() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          title="How It Works"
          subtitle="Three simple steps to painless reimbursements."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center">
              {/* Connector line (hidden on mobile, between cards on desktop) */}
              {i < steps.length - 1 && (
                <div className="absolute top-8 left-1/2 hidden w-full border-t-2 border-dashed border-primary-200 md:block" />
              )}

              <div className="relative">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl gradient-brand text-white text-xl font-bold shadow-lg shadow-primary-500/20">
                  {step.number}
                </div>
              </div>

              <h3 className="mt-5 text-lg font-semibold text-text-primary">{step.title}</h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Webinar demo */}
        <a
          href={WEBINAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-16 mx-auto max-w-3xl block rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-xl"
        >
          <div className="relative aspect-video">
            <Image
              src="/webinar-easyreimburse.png"
              alt="EasyReimburse live demo webinar"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/20" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white/90 shadow-2xl transition-transform duration-300 group-hover:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7 text-primary-600 ml-1"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Text below the image */}
          <div className="bg-white px-6 py-4 text-center">
            <p className="text-lg font-semibold text-text-primary group-hover:text-primary-600 transition-colors">
              Watch the Live Demo
            </p>
            <p className="text-sm text-text-secondary mt-1">
              See exactly how EasyReimburse works from minute 20 — no registration needed
            </p>
          </div>
        </a>

        <div className="mt-12 text-center">
          <Button href="/how-it-works" variant="secondary">
            See the Full Process
          </Button>
        </div>
      </Container>
    </section>
  );
}
