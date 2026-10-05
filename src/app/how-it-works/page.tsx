import type { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import PageHeader from '@/components/ui/PageHeader';
import CTABanner from '@/components/sections/CTABanner';
import { IMAGES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'How It Works',
  description:
    'See how EasyReimburse simplifies Erasmus+ travel reimbursement in a few easy steps.',
};

const orgSteps = [
  {
    number: '1',
    title: 'Create Your Project',
    description:
      'Sign up and create a new project. Enter basic details: project name, mobility type, dates, and destination country. Set up your reimbursement parameters in minutes. Set the maximum per country, mark green-travel countries, and add your instructions, deadline and contact email for participants.',
    image: '/illustrations/step-create.webp',
  },
  {
    number: '2',
    title: 'Add Participants',
    description:
      'Add participants manually one by one or import them via CSV. Each participant gets a unique magic link — no complicated onboarding needed.',
    image: '/illustrations/collect.webp',
  },
  {
    number: '3',
    title: 'AI Processes Documents',
    description:
      'As participants upload their travel documents, our dual AI system automatically extracts routes, dates, costs, and distances. It also lets participants know what\'s still missing. Participants can upload during the project; when it ends, everyone receives a project-ended email with their link and the AI builds the trips.',
    image: '/illustrations/builds.webp',
  },
  {
    number: '4',
    title: 'AI Review for Organisations',
    description:
      'The AI reviews all the files and lets you know what still needs to be manually checked. Once approved you can download an Audit PDF when needed for the national agency. Currency conversions are done automatically using official EU rates. Approve, reopen with a note, or mark as paid; the participant is emailed each time. For green travellers, add the food and accommodation extra from their receipts.',
    image: '/illustrations/step-review.webp',
  },
];

const participantSteps = [
  {
    number: '1',
    title: 'Open the Link',
    description:
      'Click the magic link from your project coordinator. No app to download, no account to create, no password to remember. Just click and go.',
    image: '/illustrations/zero-friction.webp',
  },
  {
    number: '2',
    title: 'Add documents as you go',
    description:
      'Upload tickets, boarding passes and invoices from your phone, even during the project. Green traveller? Hotel and meal receipts go in their own section.',
    image: '/illustrations/step-upload.webp',
  },
  {
    number: '3',
    title: 'Check your trips',
    description:
      'After the project ends the AI builds your trips. Confirm each card, fix anything, add a trip by hand or exclude one.',
    image: '/illustrations/participants.webp',
  },
  {
    number: '4',
    title: 'Confirm and submit',
    description:
      'Sign any declaration, add your bank details and submit. You see the exact amount you will receive.',
    image: '/illustrations/submit.webp',
  },
];

function StepCard({
  step,
  isLast,
}: {
  step: { number: string; title: string; description: string; image: string };
  isLast: boolean;
}) {
  return (
    <div className="relative flex gap-6">
      {/* Timeline line + circle */}
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl gradient-brand text-white font-bold text-lg shadow-lg shadow-primary-500/20">
          {step.number}
        </div>
        {!isLast && <div className="w-0.5 flex-1 bg-primary-200 mt-3" />}
      </div>

      {/* Content */}
      <div className={`flex-1 flex flex-col-reverse gap-4 sm:flex-row sm:items-start sm:gap-8 ${isLast ? 'pb-0' : 'pb-12'}`}>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-text-primary mb-2">{step.title}</h3>
          <p className="text-text-secondary leading-relaxed">{step.description}</p>
        </div>
        <div className="relative h-32 w-32 shrink-0 rounded-2xl bg-white ring-1 ring-gray-100 overflow-hidden">
          <Image src={step.image} alt="" fill className="object-contain" sizes="128px" />
        </div>
      </div>
    </div>
  );
}

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        title="How EasyReimburse Works"
        subtitle="From project setup to final reports in a few simple steps."
        imageSrc={IMAGES.howItWorks}
        imageAlt="Travel planning with maps and documents"
      />

      {/* For Organizations */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading title="For Organizations" />
          <div className="mx-auto max-w-3xl">
            {orgSteps.map((step, i) => (
              <StepCard key={step.number} step={step} isLast={i === orgSteps.length - 1} />
            ))}
          </div>
        </Container>
      </section>

      {/* For Participants */}
      <section className="py-20 lg:py-28 bg-surface-alt">
        <Container>
          <SectionHeading
            title="For Participants"
            subtitle="No apps. No accounts. Just four simple steps."
          />
          <div className="mx-auto max-w-3xl">
            {participantSteps.map((step, i) => (
              <StepCard
                key={step.number}
                step={step}
                isLast={i === participantSteps.length - 1}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
