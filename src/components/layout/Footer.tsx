import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '@/lib/constants';

const productLinks = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'How It Works', href: '/how-it-works' },
];

const companyLinks = [
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      <div className="h-1 gradient-brand" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/logo.png" alt={SITE.name} width={32} height={32} className="rounded-lg" />
              <span className="text-lg font-bold">EasyReimburse</span>
            </Link>
            <p className="mt-3 text-sm text-primary-200/70 max-w-xs">
              AI-powered reimbursements for Erasmus+ youth mobility projects. Built by people who understand the project cycle.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-300">
              Product
            </h3>
            <ul className="mt-4 space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-200/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-300">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-200/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-800/50 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-300/60">
            &copy; {new Date().getFullYear()} EasyReimburse. All rights reserved.
          </p>
          <a
            href={`mailto:${SITE.contactEmail}`}
            className="text-xs text-primary-300/60 hover:text-white transition-colors"
          >
            {SITE.contactEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}
