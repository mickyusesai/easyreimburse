import {
  PlusCircleIcon,
  CameraIcon,
  DocumentArrowDownIcon,
} from '@heroicons/react/24/outline';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const steps = [
  {
    number: '1',
    title: 'Create Your Project',
    description:
      'Set up your mobility project in minutes. Import participants via CSV or let them self-register with a shared link.',
    icon: PlusCircleIcon,
  },
  {
    number: '2',
    title: 'Participants Upload Documents',
    description:
      'Participants photograph boarding passes, tickets, and invoices. AI extracts all the data automatically.',
    icon: CameraIcon,
  },
  {
    number: '3',
    title: 'Download Clean Reports',
    description:
      'Get organized, compliant reimbursement data ready for your National Agency submission. Hours of work done in minutes.',
    icon: DocumentArrowDownIcon,
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

        <div className="mt-12 text-center">
          <Button href="/how-it-works" variant="secondary">
            See the Full Process
          </Button>
        </div>
      </Container>
    </section>
  );
}
