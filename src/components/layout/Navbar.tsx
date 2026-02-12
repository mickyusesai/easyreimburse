'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { SITE, NAV_LINKS } from '@/lib/constants';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        'fixed top-0 z-50 w-full transition-all duration-200',
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm'
          : 'bg-white/80 backdrop-blur-sm',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt={SITE.name} width={36} height={36} className="rounded-lg" />
          <span className="text-xl font-bold text-text-primary">
            Easy<span className="gradient-text">Reimburse</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'text-sm font-medium transition-colors',
                pathname === link.href
                  ? 'text-primary-600'
                  : 'text-text-secondary hover:text-text-primary',
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button href={SITE.registerUrl} size="sm">
            Start Free
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden rounded-md p-2 text-text-secondary hover:text-text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'block rounded-lg px-3 py-2.5 text-base font-medium transition-colors',
                  pathname === link.href
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-text-secondary hover:bg-gray-50 hover:text-text-primary',
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3">
              <Button href={SITE.registerUrl} className="w-full">
                Start Free
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
