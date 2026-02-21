import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'EasyReimburse privacy policy. Learn how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-bold text-text-primary sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-text-muted">Last updated: February 2026</p>

        <div className="mt-10 prose prose-gray max-w-none [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-text-primary [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-text-primary [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:text-text-secondary [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-text-secondary [&_ul]:mb-4 [&_ul]:space-y-1 [&_li]:leading-relaxed [&_a]:text-primary-600 [&_a]:underline [&_a]:hover:text-primary-700">

          <nav className="rounded-xl bg-surface-alt p-5 mb-10 ring-1 ring-gray-100">
            <p className="text-sm font-medium text-text-primary mb-3">Table of Contents</p>
            <ol className="text-sm space-y-1.5 list-decimal list-inside text-primary-600">
              <li><a href="#who-we-are">Who We Are</a></li>
              <li><a href="#data-we-collect">Data We Collect</a></li>
              <li><a href="#how-we-use">How We Use Your Data</a></li>
              <li><a href="#legal-basis">Legal Basis for Processing</a></li>
              <li><a href="#data-sharing">Data Sharing</a></li>
              <li><a href="#data-storage">Data Storage &amp; Transfers</a></li>
              <li><a href="#data-retention">Data Retention</a></li>
              <li><a href="#your-rights">Your Rights</a></li>
              <li><a href="#cookies">Cookies &amp; Analytics</a></li>
              <li><a href="#children">Children&apos;s Privacy</a></li>
              <li><a href="#changes">Changes to This Policy</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ol>
          </nav>

          <h2 id="who-we-are">1. Who We Are</h2>
          <p>
            EasyReimburse (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) provides an AI-powered travel reimbursement
            platform built for Erasmus+ youth mobility projects. Our platform is accessible at{' '}
            <a href={SITE.appUrl}>{SITE.appUrl}</a> and our marketing website at{' '}
            <a href={SITE.url}>{SITE.url}</a>.
          </p>
          {/* TODO: Replace with actual legal entity details */}
          <p>
            <strong>Data Controller:</strong> [Your Legal Entity Name], [Registered Address],
            [Country]. Contact: <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
          </p>

          <h2 id="data-we-collect">2. Data We Collect</h2>

          <h3>2.1 Organization Accounts</h3>
          <p>When you register as an organization, we collect:</p>
          <ul>
            <li>Name and email address</li>
            <li>Organization name</li>
            <li>Payment information (processed securely by Stripe — we never store card details)</li>
          </ul>

          <h3>2.2 Participant Data</h3>
          <p>
            Participants do not create persistent accounts. When participants access the platform
            via magic links, the following data is processed:
          </p>
          <ul>
            <li>Name and email address (provided by the organization)</li>
            <li>Travel documents (boarding passes, tickets, invoices — uploaded as images or PDFs)</li>
            <li>Extracted travel data (routes, dates, amounts, flight numbers)</li>
            <li>Bank details (IBAN) for reimbursement purposes</li>
            <li>Digital signatures on declarations of honor</li>
          </ul>

          <h3>2.3 Usage Data</h3>
          <p>
            We use Plausible Analytics, a privacy-friendly analytics service that does not use
            cookies and does not collect personal data. We collect aggregated, anonymous usage
            statistics such as page views and referral sources.
          </p>

          <h2 id="how-we-use">3. How We Use Your Data</h2>
          <p>We use your data to:</p>
          <ul>
            <li>Provide and operate the EasyReimburse platform</li>
            <li>Process travel documents using AI for data extraction</li>
            <li>Perform currency conversions using official EU exchange rates</li>
            <li>Facilitate communication between organizations and participants</li>
            <li>Process payments via Stripe</li>
            <li>Send service-related emails (magic links, notifications)</li>
            <li>Improve our services based on aggregated usage patterns</li>
          </ul>

          <h2 id="legal-basis">4. Legal Basis for Processing</h2>
          <p>We process personal data based on:</p>
          <ul>
            <li><strong>Contract performance:</strong> Processing necessary to provide our services to registered organizations.</li>
            <li><strong>Legitimate interest:</strong> Processing participant data as instructed by the organization (data controller) for the purpose of managing travel reimbursements.</li>
            <li><strong>Consent:</strong> Where participants voluntarily upload documents and provide personal information via the platform.</li>
            <li><strong>Legal obligation:</strong> Where required for tax, accounting, or regulatory purposes.</li>
          </ul>

          <h2 id="data-sharing">5. Data Sharing</h2>
          <p>We do not sell your personal data. We share data only with:</p>
          <ul>
            <li><strong>Stripe:</strong> For payment processing (organization accounts only).</li>
            <li><strong>AI processing services:</strong> Travel documents are processed by AI models for data extraction. Documents are processed but not retained by the AI provider.</li>
            <li><strong>Hosting provider:</strong> Our platform is hosted on European servers.</li>
            <li><strong>European Commission InforEuro API:</strong> For exchange rate data (no personal data is shared).</li>
          </ul>

          <h2 id="data-storage">6. Data Storage &amp; Transfers</h2>
          <p>
            Your data is stored on servers located within the European Union. We are committed to
            keeping data processing within the EU/EEA wherever possible. Where data transfers
            outside the EEA are necessary (e.g., for AI processing), we ensure appropriate
            safeguards are in place in accordance with GDPR requirements.
          </p>

          <h2 id="data-retention">7. Data Retention</h2>
          <ul>
            <li><strong>Organization accounts:</strong> Data is retained for the duration of the account, plus any period required for legal or accounting purposes.</li>
            <li><strong>Participant data:</strong> Retained for the duration of the project and any subsequent audit period, as required by Erasmus+ program rules. Organizations can request data deletion.</li>
            <li><strong>Travel documents:</strong> Stored securely for the project duration and audit period. Deleted upon organization request or after the retention period.</li>
            <li><strong>Payment records:</strong> Retained as required by applicable tax and accounting laws.</li>
          </ul>

          <h2 id="your-rights">8. Your Rights</h2>
          <p>Under GDPR, you have the right to:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
            <li><strong>Rectification:</strong> Request correction of inaccurate data.</li>
            <li><strong>Erasure:</strong> Request deletion of your personal data (subject to legal retention requirements).</li>
            <li><strong>Portability:</strong> Request your data in a structured, machine-readable format.</li>
            <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances.</li>
            <li><strong>Objection:</strong> Object to processing based on legitimate interest.</li>
            <li><strong>Complaint:</strong> Lodge a complaint with your local data protection supervisory authority.</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{' '}
            <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
          </p>

          <h2 id="cookies">9. Cookies &amp; Analytics</h2>
          <p>
            Our marketing website uses Plausible Analytics, which does not use cookies and does not
            track individuals. No cookie consent banner is required for this analytics service.
          </p>
          <p>
            The application at {SITE.appUrl} uses essential session cookies required for the service
            to function. These are strictly necessary cookies and do not require consent under GDPR.
          </p>

          <h2 id="children">10. Children&apos;s Privacy</h2>
          <p>
            EasyReimburse is designed for use by organizations managing Erasmus+ youth mobility
            projects. While participants may include young people (typically 18+), the platform is
            operated by adult project coordinators. We do not knowingly collect data from children
            under 16 without parental consent.
          </p>

          <h2 id="changes">11. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify registered users of
            significant changes via email. The &quot;Last updated&quot; date at the top of this page indicates
            when the policy was last revised.
          </p>

          <h2 id="contact">12. Contact Us</h2>
          <p>
            For privacy-related questions or to exercise your data rights, contact us at:
          </p>
          <ul>
            <li>Email: <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a></li>
            {/* TODO: Add physical address */}
            <li>Address: [Your Registered Address]</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
