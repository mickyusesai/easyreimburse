import type { Metadata } from 'next';
import PlausibleProvider from 'next-plausible';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://easyreimburse.ai'),
  title: {
    default: 'EasyReimburse - AI-Powered Travel Reimbursement for Erasmus+',
    template: '%s | EasyReimburse',
  },
  description:
    'Automate travel reimbursement for Erasmus+ youth mobility projects. AI-powered document processing. From weeks to minutes.',
  keywords: [
    'Erasmus+',
    'travel reimbursement',
    'youth mobility',
    'AI',
    'document processing',
    'expense management',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://easyreimburse.ai',
    siteName: 'EasyReimburse',
    title: 'EasyReimburse - AI-Powered Travel Reimbursement for Erasmus+',
    description:
      'Automate travel reimbursement for Erasmus+ youth mobility projects. From weeks to minutes.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EasyReimburse - AI-Powered Travel Reimbursement for Erasmus+',
    description:
      'Automate travel reimbursement for Erasmus+ youth mobility projects.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="easyreimburse.ai" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
