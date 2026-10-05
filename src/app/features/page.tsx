import type { Metadata } from 'next';
import Image from 'next/image';
import clsx from 'clsx';
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
  CheckBadgeIcon,
  GlobeEuropeAfricaIcon,
  PaperAirplaneIcon,
  EnvelopeIcon,
  ArchiveBoxIcon,
  MegaphoneIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/24/outline';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import PageHeader from '@/components/ui/PageHeader';
import CTABanner from '@/components/sections/CTABanner';
import { IMAGES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Explore EasyReimburse features for organizations and participants. AI document processing, green travel, National Agency audit packs, and more.',
};

type Feature = {
  title: string;
  description: string;
  icon: React.ElementType;
  optional?: boolean;
};

const orgGroups: {
  title: string;
  subtitle: string;
  image: string;
  features: Feature[];
}[] = [
  {
    title: 'Collect documents',
    subtitle: 'Get every participant uploading without accounts, passwords or chasing.',
    image: '/illustrations/collect.webp',
    features: [
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
        title: 'Your name on every email',
        description:
          'Invitations, reminders and notifications are sent as “{Your organisation} via EasyReimburse” with replies going to your address. Add your own instructions, a document deadline and a contact email that appear in every email.',
        icon: EnvelopeIcon,
      },
    ],
  },
  {
    title: 'AI builds and reviews',
    subtitle: 'Two AIs do the reading, matching and checking for you.',
    image: '/illustrations/builds.webp',
    features: [
      {
        title: 'AI Document Processing',
        description:
          'Our dual AI system reads boarding passes, train tickets, bus receipts, and invoices. It extracts routes, dates, prices, and distances with high accuracy.',
        icon: SparklesIcon,
      },
      {
        title: 'All transport modes',
        description:
          'Plane, train, bus, ferry and car. Car trips use your per-km rate with carpooling and a declaration on honour. Interrail passes, luggage fees, group bookings, return tickets and bank-transfer screenshots are recognised.',
        icon: PaperAirplaneIcon,
      },
      {
        title: 'Official EU Exchange Rates',
        description:
          'Automatic currency conversion using official rates from the European Commission, applied on the correct dates of purchase. No manual lookups needed.',
        icon: BanknotesIcon,
      },
      {
        title: 'AI Reviewer',
        description:
          'Our AI reviewer checks every participant\'s reimbursement and gives you a clear overview of what should still be manually checked, saving you days of work on every project.',
        icon: ClipboardDocumentCheckIcon,
      },
    ],
  },
  {
    title: 'You approve and pay',
    subtitle: 'Stay in control of every file, with the participant informed at each step.',
    image: '/illustrations/approve-pay.webp',
    features: [
      {
        title: 'Project Dashboard',
        description:
          'See all your participants, their submission status, and reimbursement data in one clean overview. Know instantly who still needs to upload documents.',
        icon: ChartBarIcon,
      },
      {
        title: 'Review and pay',
        description:
          'Approve, reopen with a note, or mark as paid. The participant is emailed at every step. Set an individual maximum, a green-travel status or a manual exchange rate per participant when a case needs it. The overview shows requested versus maximum per person.',
        icon: CheckBadgeIcon,
      },
      {
        title: 'Auto Messaging',
        description:
          'One-click reminders, project-ended emails and reopen-with-a-note: participants are emailed at every step, in your organisation\'s name.',
        icon: ChatBubbleLeftRightIcon,
      },
      {
        title: 'Green travel extra',
        description:
          'Green-travel participants upload hotel and meal receipts in their own section, separate from tickets and not counted against the document limit. You see them as thumbnails grouped by day with totals, enter the food and accommodation amount, and the participant is emailed.',
        icon: GlobeEuropeAfricaIcon,
      },
    ],
  },
  {
    title: 'Report to your National Agency',
    subtitle: 'Everything an audit asks for, compiled in one click.',
    image: '/illustrations/report-na.webp',
    features: [
      {
        title: 'National Agency audit pack',
        description:
          'Per participant: an audit PDF with all data, documents and declarations. Per project: one ZIP with every audit PDF and the spreadsheet, in one click.',
        icon: ArchiveBoxIcon,
      },
      {
        title: 'Data Export',
        description:
          'Download all reimbursement data as structured spreadsheets, ready for your National Agency reporting. No manual formatting needed.',
        icon: ArrowDownTrayIcon,
      },
      {
        title: 'Compliance Built In',
        description:
          'Official EU exchange rates via the European Commission InforEuro API. Country-specific reimbursement limits. Declaration of Honor for missing documents. Full audit trail.',
        icon: ShieldCheckIcon,
      },
      {
        title: 'Dissemination page',
        description:
          'Switch it on per project and participants log their social-media posts and photos in the same link, ready for your final report.',
        icon: MegaphoneIcon,
        optional: true,
      },
    ],
  },
];

const participantFeatures: Feature[] = [
  {
    title: 'No App Required',
    description:
      'Works in any mobile browser. No downloads, no sign-ups, no complicated passwords. Just click the link and start uploading.',
    icon: DevicePhoneMobileIcon,
  },
  {
    title: 'You stay in control',
    description:
      'The AI drafts, you confirm. Every trip is a card you check, correct, exclude (“the host paid this”) or add by hand. Rebuild from your documents at any time.',
    icon: AdjustmentsHorizontalIcon,
  },
  {
    title: 'Photo Upload',
    description:
      'Just upload your ticket or boarding pass from your phone. The AI handles extracting all the relevant data and lets you know what\'s still missing. Rotated or blurry phone photos are normalised, broken PDFs from ticket portals are repaired, and if a file really cannot be read the participant is told which one to replace. Hotel and meal receipts never count towards the 25-document limit.',
    icon: CameraIcon,
  },
  {
    title: 'Real-Time Status',
    description:
      'Participants see which trips are confirmed, what is still missing and the exact amount they will receive, including the country maximum and any green travel extra, before they submit.',
    icon: EyeIcon,
  },
  {
    title: 'Multi-Language Documents',
    description:
      'Our AI understands travel documents in multiple European languages. Upload tickets from any country — it just works. The interface is in English; documents can be in any European language.',
    icon: LanguageIcon,
  },
];

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="rounded-2xl bg-white p-6 ring-1 ring-gray-100 shadow-sm hover:shadow-md transition-shadow sm:[&:last-child:nth-child(odd)]:col-span-2">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl gradient-brand">
          <feature.icon className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-text-primary">{feature.title}</h3>
        {feature.optional && (
          <span className="ml-auto rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-600 ring-1 ring-primary-200">
            Optional
          </span>
        )}
      </div>
      <p className="mt-3 text-sm text-text-secondary leading-relaxed">{feature.description}</p>
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

      {/* For Organizations, in the order the project actually runs */}
      <section className="pt-20 lg:pt-28">
        <Container>
          <SectionHeading
            title="For Organizations"
            subtitle="Tools that save you hours on every project, from the first invitation to the National Agency report."
          />
        </Container>
      </section>

      {orgGroups.map((group, i) => (
        <section key={group.title} className={clsx('py-14 lg:py-20', i % 2 === 1 && 'bg-surface-alt')}>
          <Container>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[18rem_1fr] lg:gap-14 items-start">
              <div className="lg:sticky lg:top-24 text-center lg:text-left">
                <div className="relative mx-auto lg:mx-0 h-56 w-56 rounded-3xl bg-white ring-1 ring-gray-100 overflow-hidden">
                  <Image src={group.image} alt="" fill className="object-contain" sizes="224px" />
                </div>
                <p className="mt-6 text-sm font-semibold uppercase tracking-wider gradient-text">
                  Step {i + 1}
                </p>
                <h2 className="mt-1 text-2xl font-bold text-text-primary sm:text-3xl">{group.title}</h2>
                <p className="mt-2 text-text-secondary">{group.subtitle}</p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {group.features.map((feature) => (
                  <FeatureCard key={feature.title} feature={feature} />
                ))}
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* For Participants */}
      <section className="py-20 lg:py-28 bg-primary-950">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[22rem_1fr] lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="relative mx-auto lg:mx-0 h-56 w-56 lg:h-72 lg:w-72 rounded-[2.5rem] bg-white overflow-hidden ring-8 ring-white/10">
                <Image src="/illustrations/participants.webp" alt="" fill className="object-contain" sizes="288px" />
              </div>
              <h2 className="mt-8 text-3xl font-bold text-white sm:text-4xl">For Participants</h2>
              <p className="mt-3 text-lg text-white/70">
                A frictionless experience on their own phone that takes minutes, not hours.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {participantFeatures.map((feature) => (
                <FeatureCard key={feature.title} feature={feature} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
