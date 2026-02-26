import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

function RobotAvatar({ variant }: { variant: 'consolidation' | 'reviewer' }) {
  const isConsolidation = variant === 'consolidation';

  return (
    <div className="relative w-full aspect-square rounded-2xl gradient-brand flex items-center justify-center overflow-hidden">
      {/* Animated scan lines for a techy feel */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-px bg-white"
            style={{ marginTop: `${12 + i * 12}%` }}
          />
        ))}
      </div>

      <svg
        viewBox="0 0 120 120"
        className="w-3/4 h-3/4 drop-shadow-lg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Antenna */}
        <circle cx="60" cy="12" r="4" fill="white" opacity="0.9" />
        <rect x="58" y="14" width="4" height="12" rx="2" fill="white" opacity="0.7" />

        {/* Head */}
        <rect x="28" y="26" width="64" height="48" rx="12" fill="white" opacity="0.95" />

        {/* Eyes */}
        {isConsolidation ? (
          <>
            {/* Scanning eyes — wide and focused */}
            <rect x="40" y="42" width="14" height="10" rx="3" fill="#a855f7" />
            <rect x="66" y="42" width="14" height="10" rx="3" fill="#a855f7" />
            <rect x="44" y="45" width="4" height="4" rx="1" fill="white" />
            <rect x="70" y="45" width="4" height="4" rx="1" fill="white" />
          </>
        ) : (
          <>
            {/* Friendly reviewer eyes — round with a wink */}
            <circle cx="47" cy="47" r="7" fill="#ec4899" />
            <circle cx="73" cy="47" r="7" fill="#ec4899" />
            <circle cx="49" cy="45" r="2.5" fill="white" />
            {/* Wink on right eye */}
            <path d="M68 47 L78 47" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" />
          </>
        )}

        {/* Mouth */}
        {isConsolidation ? (
          <rect x="46" y="58" width="28" height="4" rx="2" fill="#a855f7" opacity="0.6" />
        ) : (
          <path d="M46 58 Q60 68 74 58" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" fill="none" />
        )}

        {/* Body */}
        <rect x="36" y="78" width="48" height="28" rx="8" fill="white" opacity="0.9" />

        {/* Body detail */}
        {isConsolidation ? (
          <>
            {/* Document lines — it reads documents */}
            <rect x="46" y="85" width="28" height="2" rx="1" fill="#a855f7" opacity="0.5" />
            <rect x="46" y="90" width="20" height="2" rx="1" fill="#a855f7" opacity="0.4" />
            <rect x="46" y="95" width="24" height="2" rx="1" fill="#a855f7" opacity="0.3" />
          </>
        ) : (
          <>
            {/* Checkmark — it reviews and approves */}
            <path d="M50 91 L56 97 L70 83" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}

        {/* Arms */}
        <rect x="20" y="82" width="14" height="6" rx="3" fill="white" opacity="0.7" />
        <rect x="86" y="82" width="14" height="6" rx="3" fill="white" opacity="0.7" />
      </svg>
    </div>
  );
}

const team = [
  {
    name: 'Micky van Zadelhoff',
    role: 'Founder & Chief Reimbursement Liberator',
    bio: 'Has facilitated more Erasmus+ projects across The Netherlands, France, and Lithuania than he\'s had hot dinners — and wrote the book Digital Nomad to prove he never sits still. Firmly believes AI will change the world as we know it, starting with the dark, unglamorous corner of travel reimbursements. Loves Europe, its values, and the dream that no project coordinator should ever have to manually type a flight number again.',
    image: '/team-micky.jpg',
    type: 'human' as const,
  },
  {
    name: 'Elaine de Zanger',
    role: 'Head of Making You Say Yes',
    bio: 'Will find you, contact you, and kindly explain why your Erasmus+ reimbursement workflow is a crime against your own free time. Supernaturally social — the kind of person who sends Christmas cards to her dentist. When she\'s not convincing organisations to join the future, she\'s engraving glass by hand, which means her gifts are always more thoughtful than yours. Don\'t take it personally.',
    image: '/team-elaine.jpg',
    type: 'human' as const,
  },
  {
    name: 'AI Consolidation Robot',
    role: 'The Intern That Never Sleeps',
    bio: 'Reads boarding passes, invoices, and tickets so participants don\'t have to squint at PDFs and type things into spreadsheets like it\'s 2009. Currently operating at 95% accuracy — which, for context, is higher than most humans copying a flight number after their third coffee. Not satisfied though. Grinding toward perfection, one uploaded document at a time.',
    type: 'robot' as const,
    robotVariant: 'consolidation' as const,
  },
  {
    name: 'AI Reviewer Robot',
    role: 'The Auditor You Actually Like',
    bio: 'Goes through every reimbursement with laser focus so organisations only have to check what truly matters. Produces a neat checklist per participant, eliminating the "did I already check this one?" spiral. Think of it as that one ultra-organised colleague everyone wishes they had — except it never takes a lunch break and never judges you for submitting receipts late.',
    type: 'robot' as const,
    robotVariant: 'reviewer' as const,
  },
];

export default function TeamGrid() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          title="The Humans & Machines"
          subtitle="Two people who've been in the trenches of Erasmus+ projects, and two AI robots who never complain about overtime."
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {team.map((member) => (
            <div
              key={member.name}
              className="group rounded-2xl bg-white p-6 lg:p-8 ring-1 ring-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-surface-alt">
                {member.type === 'human' ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={600}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <RobotAvatar variant={member.robotVariant} />
                )}
              </div>

              <h3 className="text-xl font-semibold text-text-primary">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium gradient-text">
                {member.role}
              </p>
              <p className="mt-3 text-text-secondary leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
