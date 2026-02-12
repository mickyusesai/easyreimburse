import type { Metadata } from 'next';
import { EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactForm from '@/components/sections/ContactForm';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Get in touch with the EasyReimburse team. We're here to help with your Erasmus+ reimbursement needs.",
};

export default function ContactPage() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a question or want to learn more? We'd love to hear from you."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Contact form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-surface-alt p-6 lg:p-8 ring-1 ring-gray-100">
              <h3 className="text-lg font-semibold text-text-primary mb-6">
                Contact Information
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg gradient-brand">
                    <EnvelopeIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">Email</p>
                    <a
                      href={`mailto:${SITE.contactEmail}`}
                      className="text-sm text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      {SITE.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg gradient-brand">
                    <ClockIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">Response Time</p>
                    <p className="text-sm text-text-secondary">
                      We typically respond within 24 hours.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-xl gradient-brand p-5 text-white">
                <p className="text-sm font-medium">Built by practitioners</p>
                <p className="mt-1 text-xs text-white/80">
                  EasyReimburse is built by an organization that runs Erasmus+ training
                  courses and youth exchanges. We understand the project cycle because we
                  live it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
