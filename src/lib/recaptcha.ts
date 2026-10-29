// Server-side reCAPTCHA v3 check. Google scores each request from 0.0 (bot) to 1.0 (human).
const MIN_SCORE = 0.5;

export type RecaptchaResult = { ok: true } | { ok: false; reason: 'not-configured' | 'failed' };

export async function verifyRecaptcha(token: unknown, expectedAction: string): Promise<RecaptchaResult> {
  const secret = process.env.RECAPTCHA_SECRET_KEY ?? process.env.RECAPTCHA_SECRET;
  if (!secret) {
    console.error('reCAPTCHA secret is not set (expected RECAPTCHA_SECRET_KEY)');
    return { ok: false, reason: 'not-configured' };
  }
  if (typeof token !== 'string' || !token) return { ok: false, reason: 'failed' };

  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ secret, response: token }),
  });
  const data: { success: boolean; score?: number; action?: string; 'error-codes'?: string[] } = await res.json();

  if (!data.success || data.action !== expectedAction || (data.score ?? 0) < MIN_SCORE) {
    console.warn('reCAPTCHA rejected', { score: data.score, action: data.action, errors: data['error-codes'] });
    return { ok: false, reason: 'failed' };
  }
  return { ok: true };
}
