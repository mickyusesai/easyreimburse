import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'EasyReimburse terms of service. Read our terms for using the platform.',
};

export default function TermsPage() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-bold text-text-primary sm:text-4xl">Terms of Service</h1>
        <p className="mt-2 text-sm text-text-muted">Last updated: February 2026</p>

        <div className="mt-10 prose prose-gray max-w-none [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-text-primary [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-text-primary [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:text-text-secondary [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-text-secondary [&_ul]:mb-4 [&_ul]:space-y-1 [&_li]:leading-relaxed [&_a]:text-primary-600 [&_a]:underline [&_a]:hover:text-primary-700">

          <nav className="rounded-xl bg-surface-alt p-5 mb-10 ring-1 ring-gray-100">
            <p className="text-sm font-medium text-text-primary mb-3">Table of Contents</p>
            <ol className="text-sm space-y-1.5 list-decimal list-inside text-primary-600">
              <li><a href="#acceptance">Acceptance of Terms</a></li>
              <li><a href="#description">Description of Service</a></li>
              <li><a href="#accounts">Account Registration</a></li>
              <li><a href="#acceptable-use">Acceptable Use</a></li>
              <li><a href="#ip">Intellectual Property</a></li>
              <li><a href="#payment">Payment Terms</a></li>
              <li><a href="#free-tier">Free Tier</a></li>
              <li><a href="#data">Data Processing</a></li>
              <li><a href="#ai">AI Processing Disclaimer</a></li>
              <li><a href="#availability">Service Availability</a></li>
              <li><a href="#liability">Limitation of Liability</a></li>
              <li><a href="#termination">Termination</a></li>
              <li><a href="#law">Governing Law</a></li>
              <li><a href="#changes">Changes to Terms</a></li>
              <li><a href="#contact">Contact</a></li>
            </ol>
          </nav>

          <h2 id="acceptance">1. Acceptance of Terms</h2>
          <p>
            By accessing or using EasyReimburse (&quot;the Service&quot;), you agree to be bound by these
            Terms of Service. If you are using the Service on behalf of an organization, you
            represent that you have authority to bind that organization to these terms.
          </p>

          <h2 id="description">2. Description of Service</h2>
          <p>
            EasyReimburse is an AI-powered platform that helps organizations manage travel
            reimbursements for Erasmus+ youth mobility projects. The Service includes:
          </p>
          <ul>
            <li>Project management tools for organizing reimbursement workflows</li>
            <li>AI-powered document processing for extracting travel data</li>
            <li>Participant management via magic link invitations</li>
            <li>Currency conversion using official EU exchange rates</li>
            <li>Data export for reporting purposes</li>
          </ul>

          <h2 id="accounts">3. Account Registration</h2>
          <p>
            To use the Service as an organization, you must register an account. You agree to:
          </p>
          <ul>
            <li>Provide accurate and complete registration information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Notify us promptly of any unauthorized access</li>
            <li>Accept responsibility for all activity under your account</li>
          </ul>
          <p>
            Participants access the Service via magic links provided by organizations and do not
            create persistent accounts.
          </p>

          <h2 id="acceptable-use">4. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Service for any unlawful purpose</li>
            <li>Upload fraudulent or falsified documents</li>
            <li>Attempt to access other users&apos; data without authorization</li>
            <li>Interfere with or disrupt the Service</li>
            <li>Reverse-engineer or attempt to extract the source code of the Service</li>
            <li>Use the Service to process data unrelated to Erasmus+ travel reimbursements</li>
          </ul>

          <h2 id="ip">5. Intellectual Property</h2>
          <p>
            The Service, including its design, code, and AI models, is the intellectual property of
            EasyReimburse. You retain ownership of all data you upload to the Service. By uploading
            content, you grant us a limited license to process it for the purpose of providing the
            Service.
          </p>

          <h2 id="payment">6. Payment Terms</h2>
          <p>
            Paid features are available through project credits or annual licenses. Key terms:
          </p>
          <ul>
            <li>Prices are listed in euros (EUR) and are inclusive of applicable taxes unless stated otherwise.</li>
            <li>Payments are processed securely via Stripe.</li>
            <li>Project credits never expire.</li>
            <li>Refunds are handled on a case-by-case basis. Contact us within 14 days of purchase if you need a refund for an unused credit.</li>
            <li>Annual licenses are non-refundable after 14 days.</li>
          </ul>

          <h2 id="free-tier">7. Free Tier</h2>
          <p>
            The free tier allows you to create one project with up to 10 participants. It is
            intended for evaluation purposes. The free tier includes the same core features as
            paid plans, with participant limits. We reserve the right to modify free tier limits
            with reasonable notice.
          </p>

          <h2 id="data">8. Data Processing</h2>
          <p>
            Our handling of personal data is governed by our{' '}
            <a href="/privacy">Privacy Policy</a>. By using the Service, you acknowledge that:
          </p>
          <ul>
            <li>As an organization, you act as the data controller for participant data.</li>
            <li>EasyReimburse acts as a data processor on your behalf.</li>
            <li>You are responsible for having a lawful basis to collect and process participant data.</li>
            <li>You must inform participants about how their data is processed.</li>
          </ul>

          <h2 id="ai">9. AI Processing Disclaimer</h2>
          <p>
            Our AI-powered document processing is designed to extract data accurately, but it is
            not infallible. You acknowledge that:
          </p>
          <ul>
            <li>AI-extracted data should be reviewed by a human before final approval.</li>
            <li>We do not guarantee 100% accuracy of AI data extraction.</li>
            <li>The organization is responsible for verifying the correctness of extracted data.</li>
            <li>We continuously improve our AI models but cannot guarantee specific accuracy rates.</li>
          </ul>

          <h2 id="availability">10. Service Availability</h2>
          <p>
            We strive to maintain high availability but do not guarantee uninterrupted access.
            We may temporarily suspend the Service for maintenance, updates, or circumstances
            beyond our control. We will make reasonable efforts to notify users of planned downtime.
          </p>

          <h2 id="liability">11. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law:
          </p>
          <ul>
            <li>EasyReimburse is provided &quot;as is&quot; without warranties of any kind.</li>
            <li>We are not liable for indirect, incidental, special, or consequential damages.</li>
            <li>Our total liability is limited to the amount you have paid us in the 12 months preceding the claim.</li>
            <li>We are not responsible for decisions made by Erasmus+ National Agencies regarding reimbursements.</li>
          </ul>

          <h2 id="termination">12. Termination</h2>
          <p>
            You may close your account at any time by contacting us. We may suspend or terminate
            accounts that violate these terms. Upon termination:
          </p>
          <ul>
            <li>You may request export of your data before account closure.</li>
            <li>Unused project credits are non-refundable upon voluntary termination.</li>
            <li>We will retain data as required by applicable laws and as described in our Privacy Policy.</li>
          </ul>

          <h2 id="law">13. Governing Law</h2>
          {/* TODO: Replace with actual jurisdiction */}
          <p>
            These terms are governed by the laws of [Your Country/Jurisdiction]. Any disputes
            shall be resolved in the courts of [Your City, Country].
          </p>

          <h2 id="changes">14. Changes to Terms</h2>
          <p>
            We may update these terms from time to time. We will notify registered users of
            significant changes via email at least 30 days before they take effect. Continued
            use of the Service after changes constitutes acceptance of the updated terms.
          </p>

          <h2 id="contact">15. Contact</h2>
          <p>
            For questions about these terms, contact us at{' '}
            <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
          </p>
        </div>
      </Container>
    </section>
  );
}
