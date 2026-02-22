import { NextRequest, NextResponse } from 'next/server';
import * as postmark from 'postmark';

const client = new postmark.ServerClient(
  process.env.POSTMARK_SERVER_TOKEN || '',
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 },
      );
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 },
      );
    }

    const organization = body.organization || 'Not provided';

    await client.sendEmail({
      From: 'micky@easyreimburse.ai',
      To: 'micky@easyreimburse.ai',
      ReplyTo: email,
      Subject: `[Contact Form] ${subject}`,
      TextBody: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Organization: ${organization}`,
        ``,
        `Message:`,
        message,
      ].join('\n'),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 },
    );
  }
}
