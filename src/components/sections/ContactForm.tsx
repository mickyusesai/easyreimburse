'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const subjects = [
  'General Inquiry',
  'Pricing Question',
  'Technical Support',
  'Partnership',
  'Other',
];

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      organization: (form.elements.namedItem('organization') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || 'Something went wrong');
      }

      setState('success');
      form.reset();
    } catch (err) {
      setState('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  if (state === 'success') {
    return (
      <div className="rounded-2xl bg-green-50 p-8 text-center ring-1 ring-green-200">
        <h3 className="text-lg font-semibold text-green-800">Message Sent!</h3>
        <p className="mt-2 text-sm text-green-700">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setState('idle')}
          className="mt-4 text-sm font-medium text-green-700 underline hover:text-green-900"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">
          Name <span className="text-accent-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">
          Email <span className="text-accent-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none transition-colors"
          placeholder="you@organization.eu"
        />
      </div>

      <div>
        <label htmlFor="organization" className="block text-sm font-medium text-text-primary mb-1.5">
          Organization
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none transition-colors"
          placeholder="Your organization (optional)"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-1.5">
          Subject <span className="text-accent-500">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-text-primary focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none transition-colors"
        >
          <option value="">Select a topic</option>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">
          Message <span className="text-accent-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none transition-colors resize-y"
          placeholder="How can we help?"
        />
      </div>

      {state === 'error' && (
        <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700 ring-1 ring-red-200">
          {errorMsg}
        </div>
      )}

      <Button type="submit" disabled={state === 'submitting'} className="w-full sm:w-auto">
        {state === 'submitting' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
