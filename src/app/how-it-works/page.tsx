import type { Metadata } from 'next';
import {
  PlusCircleIcon,
  UserGroupIcon,
  SparklesIcon,
  DocumentArrowDownIcon,
  LinkIcon,
  CameraIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
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
      'Sign up and create a new project. Enter basic details: project name, mobility type, dates, and destination country. Set up your reimbursement parameters in minutes.',
    icon: PlusCircleIcon,
  },
  {
    number: '2',
    title: 'Invite Participants',
    description:
      'Add participants manually, import via CSV, or share a self-registration link. Each participant gets a unique magic link — no complicated onboarding needed.',
    icon: UserGroupIcon,
  },
  {
    number: '3',
    title: 'AI Processes Documents',
    description:
      'As participants upload photos of their travel documents, our dual AI system automatically extracts routes, dates, costs, and distances. Review the extracted data and approve with a click.',
    icon: SparklesIcon,
  },
  {
    number: '4',
    title: 'Export Your Data',
    description:
      'Download clean, structured reimbursement data as spreadsheets. Currency conversions are done automatically using official EU rates. Ready for your National Agency report.',
    icon: DocumentArrowDownIcon,
  },
];

const participantSteps = [
  {
    number: '1',
    title: 'Open the Link',
    description:
      'Click the magic link from your project coordinator. No app to download, no account to create, no password to remember. Just click and go.',
    icon: LinkIcon,
  },
  {
    number: '2',
    title: 'Upload Your Documents',
    description:
      'Take photos of boarding passes, train tickets, bus tickets, or invoices. Upload them directly from your phone. The AI reads your documents and extracts the data.',
    icon: CameraIcon,
  },
  {
    number: '3',
    title: "You're Done!",
    description:
      "That's it. Review the extracted data, add your bank details, and submit. Your coordinator gets clean, organized data. The whole process takes minutes.",
    icon: CheckCircleIcon,
  },
];

function StepCard({
  step,
  isLast,
}: {
  step: { number: string; title: string; description: string; icon: React.ElementType };
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
      <div className={isLast ? 'pb-0' : 'pb-12'}>
        <div className="flex items-center gap-3 mb-2">
          <step.icon className="h-5 w-5 text-primary-500" />
          <h3 className="text-lg font-semibold text-text-primary">{step.title}</h3>
        </div>
        <p className="text-text-secondary leading-relaxed max-w-lg">{step.description}</p>
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
          <div className="mx-auto max-w-2xl">
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
            subtitle="No apps. No accounts. Just three simple steps."
          />
          <div className="mx-auto max-w-2xl">
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
