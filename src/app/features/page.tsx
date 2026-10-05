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
  CheckCircleIcon,
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
import { SCREENSHOTS } from '@/lib/screenshots';

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
  short?: string;
};

const orgGroups: {
  title: string;
  subtitle: string;
  image: string;
  screenshot?: { shot: keyof typeof SCREENSHOTS; caption: string };
  features: Feature[];
}[] = [
  {
    title: 'Collect documents',
    subtitle: 'Get every participant uploading without accounts, passwords or chasing.',
    image: '/illustrations/collect.webp',
    screenshot: { shot: 'oDashboardBrowser', caption: 'Organisation dashboard: credits, projects and participants at a glance' },
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
    screenshot: { shot: 'oParticipantMateoBrowser', caption: 'A participant file with the AI review findings next to the trips' },
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
    screenshot: { shot: 'oProjectBrowser', caption: 'Project overview: status per participant, requested versus maximum' },
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
    short: 'Any mobile browser. No downloads, no sign-ups, no passwords.',
    description:
      'Works in any mobile browser. No downloads, no sign-ups, no complicated passwords. Just click the link and start uploading.',
    icon: DevicePhoneMobileIcon,
  },
  {
    title: 'You stay in control',
    short: 'The AI drafts, you confirm: check, correct, exclude or add trips by hand.',
    description:
      'The AI drafts, you confirm. Every trip is a card you check, correct, exclude (“the host paid this”) or add by hand. Rebuild from your documents at any time.',
    icon: AdjustmentsHorizontalIcon,
  },
  {
    title: 'Photo Upload',
    short: 'Blurry or rotated photos and broken PDFs are repaired; unreadable files are named.',
    description:
      'Just upload your ticket or boarding pass from your phone. The AI handles extracting all the relevant data and lets you know what\'s still missing. Rotated or blurry phone photos are normalised, broken PDFs from ticket portals are repaired, and if a file really cannot be read the participant is told which one to replace. Hotel and meal receipts never count towards the 25-document limit.',
    icon: CameraIcon,
  },
  {
    title: 'Real-Time Status',
    short: 'See what is confirmed, what is missing and the exact amount before submitting.',
    description:
      'Participants see which trips are confirmed, what is still missing and the exact amount they will receive, including the country maximum and any green travel extra, before they submit.',
    icon: EyeIcon,
  },
  {
    title: 'Multi-Language Documents',
    short: 'Documents in any European language; the interface is in English.',
    description:
      'Our AI understands travel documents in multiple European languages. Upload tickets from any country — it just works. The interface is in English; documents can be in any European language.',
    icon: LanguageIcon,
  },
];

const participantScreens: { key: keyof typeof SCREENSHOTS; title: string; text: string }[] = [
  { key: 'pStep1DocsLukasPhone', title: 'Add documents as you go', text: 'Tickets, boarding passes and invoices, even during the project.' },
  { key: 'pLandingLenaPhone', title: 'Check the AI-built trips', text: 'Every trip is a card to confirm, edit or exclude.' },
  { key: 'pStep3LenaPhone', title: 'Confirm and submit', text: 'Bank details, declarations and the exact amount to receive.' },
];

const greenPoints = [
  'Per-country green flag with higher limits, overridable per participant',
  'Hotel and meal receipts in their own section, grouped by day with totals',
  'Signed green-travel declaration on honour, generated as a PDF',
  'Enter the food and accommodation extra once; the participant is emailed',
];

function Screenshot({ shot, caption }: { shot: keyof typeof SCREENSHOTS; caption: string }) {
  const image = SCREENSHOTS[shot];
  return (
    <figure className="mt-8">
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        alt={caption}
        className="w-full h-auto"
        sizes="(max-width: 1024px) 100vw, 860px"
      />
      <figcaption className="mt-2 text-center text-sm text-text-muted">{caption}</figcaption>
    </figure>
  );
}

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
              <div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {group.features.map((feature) => (
                    <FeatureCard key={feature.title} feature={feature} />
                  ))}
                </div>
                {group.screenshot && <Screenshot {...group.screenshot} />}
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* Green travel */}
      <section id="green-travel" className="scroll-mt-20 py-20 lg:py-28 bg-gradient-to-br from-green-100 via-green-50 to-primary-50">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800 ring-1 ring-green-200">
                Erasmus+ green travel
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                Green travel, handled
              </h2>
              <p className="mt-4 text-lg text-text-secondary leading-relaxed">
                Mark a country as green travel, let participants upload hotel and meal receipts separately,
                and add the food and accommodation extra in one field. Declarations on honour are generated
                and signed in the app.
              </p>
              <ul className="mt-6 space-y-3">
                {greenPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-text-secondary">
                    <CheckCircleIcon className="h-6 w-6 shrink-0 text-green-600" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative pb-16 sm:pb-24">
              {/* Only the top of this screen has content, so show that part in a cropped window */}
              <div className="relative aspect-[1400/640] overflow-hidden rounded-2xl bg-white shadow-2xl shadow-green-900/20 ring-1 ring-black/5">
                <Image
                  src={SCREENSHOTS.oParticipantJonasBrowser.src}
                  fill
                  alt="Organiser view of a green traveller: receipts grouped by day with totals and the green travel extra"
                  className="object-cover object-top scale-[1.06]"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
              </div>
              <Image
                src={SCREENSHOTS.pStep2CostLenaPhone.src}
                width={SCREENSHOTS.pStep2CostLenaPhone.width}
                height={SCREENSHOTS.pStep2CostLenaPhone.height}
                alt="Participant cost breakdown with food and accommodation to be added"
                className="absolute -bottom-2 left-4 w-32 sm:w-44 h-auto drop-shadow-2xl"
                sizes="176px"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* For Participants: told through the screens they actually see */}
      <section className="py-20 lg:py-28 bg-primary-950 overflow-hidden">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">For Participants</h2>
            <p className="mt-4 text-lg text-white/70">
              A frictionless experience on their own phone that takes minutes, not hours.
            </p>
          </div>

          <div className="mt-14 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 sm:grid sm:grid-cols-3 sm:gap-8 sm:overflow-visible">
            {participantScreens.map((screen, i) => (
              <figure key={screen.key} className="snap-center shrink-0 w-64 sm:w-auto text-center">
                <Image
                  src={SCREENSHOTS[screen.key].src}
                  width={SCREENSHOTS[screen.key].width}
                  height={SCREENSHOTS[screen.key].height}
                  alt={screen.title}
                  className={clsx('mx-auto w-full max-w-[17rem] h-auto', i === 1 && 'sm:-translate-y-6')}
                  sizes="(max-width: 640px) 256px, 272px"
                />
                <figcaption className="mt-5">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg gradient-brand text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="mt-2 font-semibold text-white">{screen.title}</p>
                  <p className="mt-1 text-sm text-white/60">{screen.text}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 border-t border-white/10 pt-12 sm:grid-cols-2 lg:grid-cols-5">
            {participantFeatures.map((feature) => (
              <div key={feature.title}>
                <feature.icon className="h-7 w-7 text-accent-400" />
                <h3 className="mt-3 font-semibold text-white">{feature.title}</h3>
                <p className="mt-1.5 text-sm text-white/60 leading-relaxed">{feature.short}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
