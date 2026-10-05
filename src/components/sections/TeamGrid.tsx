import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

const team = [
  {
    name: 'Micky van Zadelhoff',
    role: 'Founder & Chief Reimbursement Liberator',
    bio: 'Has facilitated more Erasmus+ projects across The Netherlands, France, and Lithuania than he\'s had hot dinners — and wrote the book Digital Nomad to prove he never sits still. Firmly believes AI will change the world as we know it, starting with the dark, unglamorous corner of travel reimbursements. Loves Europe, its values, and the dream that no project coordinator should ever have to manually type a flight number again.',
    image: '/team-micky1.jpg',
  },
  {
    name: 'Elaine de Zanger',
    role: 'Head of Making You Say Yes',
    bio: 'Will find you, contact you, and kindly explain why your Erasmus+ reimbursement workflow is a crime against your own free time. Supernaturally social — the kind of person who sends Christmas cards to her dentist. When she\'s not convincing organisations to join the future, she\'s engraving glass by hand, which means her gifts are always more thoughtful than yours. Don\'t take it personally.',
    image: '/team-elaine1.jpg',
  },
  {
    name: 'AI Consolidation Robot',
    role: 'The Intern That Never Sleeps',
    bio: 'Reads boarding passes, invoices, and tickets so participants don\'t have to squint at PDFs and type things into spreadsheets like it\'s 2009. Reads the large majority of tickets without a single correction — which, for context, is higher than most humans copying a flight number after their third coffee. Not satisfied though. Grinding toward perfection, one uploaded document at a time.',
    image: '/illustrations/team-consol.webp',
  },
  {
    name: 'AI Reviewer Robot',
    role: 'The Auditor You Actually Like',
    bio: 'Goes through every reimbursement with laser focus so organisations only have to check what truly matters. Produces a neat checklist per participant, eliminating the "did I already check this one?" spiral. Think of it as that one ultra-organised colleague everyone wishes they had — except it never takes a lunch break and never judges you for submitting receipts late.',
    image: '/illustrations/team-rev.webp',
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
              <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-white">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
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
