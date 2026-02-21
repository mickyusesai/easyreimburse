import type { Metadata } from 'next';
import {
  SparklesIcon,
  ChartBarIcon,
  ArrowDownTrayIcon,
  LinkIcon,
  RectangleStackIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  CameraIcon,
  LanguageIcon,
  EyeIcon,
  BanknotesIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentCheckIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import PageHeader from '@/components/ui/PageHeader';
import CTABanner from '@/components/sections/CTABanner';
import { IMAGES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Explore EasyReimburse features for organizations and participants. AI document processing, project dashboards, and more.',
};

const orgFeatures = [
  {
    title: 'AI Document Processing',
    description:
      'Our dual AI system reads boarding passes, train tickets, bus receipts, and invoices. It extracts routes, dates, prices, and distances with high accuracy.',
    icon: SparklesIcon,
  },
  {
    title: 'Project Dashboard',
    description:
      'See all your participants, their submission status, and reimbursement data in one clean overview. Know instantly who still needs to upload documents.',
    icon: ChartBarIcon,
  },
  {
    title: 'Data Export',
    description:
      'Download all reimbursement data as structured spreadsheets, ready for your National Agency reporting. No manual formatting needed.',
    icon: ArrowDownTrayIcon,
  },
  {
    title: 'Magic Link Invitations',
    description:
      'Share a link or send magic link emails. Participants access their submission page instantly — no registration, no passwords, no friction.',
    icon: LinkIcon,
  },
  {
    title: 'Multi-Project Management',
    description:
      'Running multiple youth exchanges or training courses? Manage them all from one account with separate dashboards for each project.',
    icon: RectangleStackIcon,
  },
  {
    title: 'Compliance Built In',
    description:
      'Official EU exchange rates via the European Commission InforEuro API. Country-specific reimbursement limits. Declaration of Honor for missing documents. Full audit trail.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Official EU Exchange Rates',
    description:
      'Automatic currency conversion using official rates from the European Commission, applied on the correct dates of purchase. No manual lookups needed.',
    icon: BanknotesIcon,
  },
  {
    title: 'Auto Messaging',
    description:
      'Automatically notify participants when documents are missing or need corrections. No more sending individual emails or messages.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    title: 'AI Reviewer',
    description:
      'Our AI reviewer checks every participant\'s reimbursement and gives you a clear overview of what should still be manually checked, saving you days of work on every project.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    title: 'One-Click NA Audit PDF',
    description:
      'Once all reimbursements are approved, download a complete Audit PDF ready for your National Agency. All data, documents, and declarations compiled in one click.',
    icon: DocumentTextIcon,
  },
];

const participantFeatures = [
  {
    title: 'No App Required',
    description:
      'Works in any mobile browser. No downloads, no sign-ups, no complicated passwords. Just click the link and start uploading.',
    icon: DevicePhoneMobileIcon,
  },
  {
    title: 'Photo Upload',
    description:
      'Just upload your ticket or boarding pass from your phone. The AI handles extracting all the relevant data and lets you know what\'s still missing.',
    icon: CameraIcon,
  },
  {
    title: 'Multi-Language Documents',
    description:
      'Our AI understands travel documents in multiple European languages. Upload tickets from any country — it just works.',
    icon: LanguageIcon,
  },
  {
    title: 'Real-Time Status',
    description:
      'Participants can see whether their documents have been processed, if anything is missing, and when their reimbursement is approved.',
    icon: EyeIcon,
  },
];

function FeatureCard({
  feature,
}: {
  feature: { title: string; description: string; icon: React.ElementType };
}) {
  return (
    <div className="rounded-2xl bg-white p-6 lg:p-8 ring-1 ring-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-brand mb-5">
        <feature.icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-text-primary">{feature.title}</h3>
      <p className="mt-2 text-sm text-text-secondary leading-relaxed">{feature.description}</p>
    </div>
  );
}

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        title="Powerful Features, Simple Experience"
        subtitle="Everything you need to manage Erasmus+ travel reimbursements, from document capture to final reports."
        imageSrc={IMAGES.features}
        imageAlt="Young people collaborating around a laptop"
      />

      {/* For Organizations */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading
            title="For Organizations"
            subtitle="Tools that save you hours on every project."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {orgFeatures.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </Container>
      </section>

      {/* For Participants */}
      <section className="py-20 lg:py-28 bg-surface-alt">
        <Container>
          <SectionHeading
            title="For Participants"
            subtitle="A frictionless experience that takes minutes, not hours."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {participantFeatures.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
