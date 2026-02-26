import type { Metadata } from 'next';
import PageHeader from '@/components/ui/PageHeader';
import TeamGrid from '@/components/sections/TeamGrid';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the humans and machines behind EasyReimburse. Two Erasmus+ veterans and two AI robots that never sleep.',
};

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="Meet the Team"
        subtitle="Two humans who've survived countless Erasmus+ reimbursements. Two robots who make sure nobody else has to."
        imageSrc="/extra-helsinki.png"
        imageAlt="Helsinki cityscape"
      />
      <TeamGrid />
      <CTABanner />
    </>
  );
}
